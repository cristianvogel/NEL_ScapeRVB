#pragma once

#include <map>
#include <sstream>
#include <variant>
#include <vector>
#include <functional>
#include <limits>
#include <cmath>

namespace elem::js
{

    //==============================================================================
    // Representations of primitive JavaScript values
    struct Undefined {};
    struct Null {};

    using Boolean = bool;
    using Number = double;
    using String = std::string;

    //==============================================================================
    // Forward declare the Value to allow recursive type definitions
    class Value;

    //==============================================================================
    // Representations of JavaScript Objects
    using Object = std::map<String, Value>;
    using Array = std::vector<Value>;
    using Float32Array = std::vector<float>;
    using Function = std::function<Value(Array)>;

    //==============================================================================
    // The Value class is a thin wrapper around a std::variant for dynamically representing
    // values present in the underlying JavaScript runtime.
    class Value {
    public:
        //==============================================================================
        // Default constructor creates an undefined value
        Value()
           : var(Undefined()) {}

        // Destructor
        ~Value() noexcept = default;

        Value (Undefined v)             : var(v) {}
        Value (Null v)                  : var(v) {}
        Value (Boolean v)               : var(v) {}
        Value (Number v)                : var(v) {}
        Value (char const* v)           : var(String(v)) {}
        Value (String const& v)         : var(v) {}
        Value (Array const& v)          : var(v) {}
        Value (Float32Array const& v)   : var(v) {}
        Value (Object const& v)         : var(v) {}
        Value (Function const& v)       : var(v) {}

        // LOCAL CUSTOMIZATION: Specialized constructor to handle std::vector<std::string>
        Value (std::vector<std::string> const& v) {
            Array array;
            for (const auto& str : v) {
                array.push_back(Value(str));
            }
            var = array;
        }

        Value (Value const& valueToCopy) : var(valueToCopy.var) {}
        Value (Value && valueToMove) noexcept : var(std::move(valueToMove.var)) {}

        //==============================================================================
        // Assignment
        Value& operator= (Value const& valueToCopy)
        {
            var = valueToCopy.var;
            return *this;
        }

        Value& operator= (Value && valueToMove) noexcept
        {
            var = std::move(valueToMove.var);
            return *this;
        }

        //==============================================================================
        // Type checks
        bool isUndefined()      const { return std::holds_alternative<Undefined>(var); }
        bool isNull()           const { return std::holds_alternative<Null>(var); }
        bool isBool()           const { return std::holds_alternative<Boolean>(var); }
        bool isNumber()         const { return std::holds_alternative<Number>(var); }
        bool isString()         const { return std::holds_alternative<String>(var); }
        bool isArray()          const { return std::holds_alternative<Array>(var); }
        bool isFloat32Array()   const { return std::holds_alternative<Float32Array>(var); }
        bool isObject()         const { return std::holds_alternative<Object>(var); }
        bool isFunction()       const { return std::holds_alternative<Function>(var); }

        //==============================================================================
        // LOCAL CUSTOMIZATION: Primitive value casts for direct type conversion
        operator Boolean()  const { return getBool(); }
        operator Number()   const { return getNumber(); }
        operator String()   const { return getString(); }
        operator Array()    const { return getArray(); }

        //==============================================================================
        // Value retrieval (from original Elementary repo)
        Boolean getBool() const
        {
            if (auto* ptr = std::get_if<Boolean>(&var))
                return *ptr;

            // Default behavior for undefined/null values
            if (isUndefined() || isNull())
                return false;

            // Otherwise fall into conversion logic
            if (auto* numberPtr = std::get_if<Number>(&var))
                return *numberPtr != 0.0;

            if (auto* stringPtr = std::get_if<String>(&var))
                return stringPtr->length() > 0;

            // Objects and arrays are truthy
            return true;
        }

        Number getNumber() const
        {
            if (auto* ptr = std::get_if<Number>(&var))
                return *ptr;

            // Default behavior for undefined/null values
            if (isUndefined())
                return std::numeric_limits<Number>::quiet_NaN();

            if (isNull())
                return 0.0;

            // Otherwise fall into conversion logic
            if (auto* boolPtr = std::get_if<Boolean>(&var))
                return *boolPtr ? 1.0 : 0.0;

            if (auto* stringPtr = std::get_if<String>(&var))
            {
                std::stringstream ss(*stringPtr);
                Number result;
                ss >> result;

                return ss.fail() ? std::numeric_limits<Number>::quiet_NaN() : result;
            }

            // Objects and arrays are NaN
            return std::numeric_limits<Number>::quiet_NaN();
        }

        String getString() const
        {
            if (auto* ptr = std::get_if<String>(&var))
                return *ptr;

            // Otherwise fall into conversion logic
            if (isUndefined())
                return "undefined";

            if (isNull())
                return "null";

            if (auto* boolPtr = std::get_if<Boolean>(&var))
                return *boolPtr ? "true" : "false";

            if (auto* numberPtr = std::get_if<Number>(&var))
            {
                // Handle special cases
                if (std::isnan(*numberPtr))
                    return "NaN";

                if (std::isinf(*numberPtr))
                    return (*numberPtr < 0) ? "-Infinity" : "Infinity";

                std::stringstream ss;
                ss << *numberPtr;
                return ss.str();
            }

            if (isArray())
                return "[object Array]";

            if (isFloat32Array())
                return "[object Float32Array]";

            if (isObject())
                return "[object Object]";

            if (isFunction())
                return "[object Function]";

            return "";
        }

        Array const& getArray() const
        {
            if (auto* ptr = std::get_if<Array>(&var))
                return *ptr;

            throw std::runtime_error("Value::getArray() on non-array Value type");
        }

        Array& getArray()
        {
            if (auto* ptr = std::get_if<Array>(&var))
                return *ptr;

            throw std::runtime_error("Value::getArray() on non-array Value type");
        }

        Float32Array const& getFloat32Array() const
        {
            if (auto* ptr = std::get_if<Float32Array>(&var))
                return *ptr;

            throw std::runtime_error("Value::getFloat32Array() on non-Float32Array Value type");
        }

        Float32Array& getFloat32Array()
        {
            if (auto* ptr = std::get_if<Float32Array>(&var))
                return *ptr;

            throw std::runtime_error("Value::getFloat32Array() on non-Float32Array Value type");
        }

        Object const& getObject() const
        {
            if (auto* ptr = std::get_if<Object>(&var))
                return *ptr;

            throw std::runtime_error("Value::getObject() on non-object Value type");
        }

        Object& getObject()
        {
            if (auto* ptr = std::get_if<Object>(&var))
                return *ptr;

            throw std::runtime_error("Value::getObject() on non-object Value type");
        }

        Function const& getFunction() const
        {
            if (auto* ptr = std::get_if<Function>(&var))
                return *ptr;

            throw std::runtime_error("Value::getFunction() on non-function Value type");
        }

        Function& getFunction()
        {
            if (auto* ptr = std::get_if<Function>(&var))
                return *ptr;

            throw std::runtime_error("Value::getFunction() on non-function Value type");
        }

        //==============================================================================
        // Convenience accessors for object keys (from original Elementary repo)
        bool hasProperty(String const& name) const
        {
            if (auto* ptr = std::get_if<Object>(&var))
                return ptr->find(name) != ptr->end();

            return false;
        }

        Value const& operator[] (String const& name) const
        {
            if (auto* ptr = std::get_if<Object>(&var))
            {
                auto it = ptr->find(name);

                if (it != ptr->end())
                    return it->second;
            }

            // Return a static undefined value for missing properties
            static Value undefinedValue;
            return undefinedValue;
        }

        Value& operator[] (String const& name)
        {
            if (auto* ptr = std::get_if<Object>(&var))
                return (*ptr)[name];

            throw std::runtime_error("Value::operator[] on non-object Value type");
        }

        //==============================================================================
        // Convenience accessors for array indices (from original Elementary repo)
        Value const& operator[] (size_t index) const
        {
            if (auto* ptr = std::get_if<Array>(&var))
            {
                if (index < ptr->size())
                    return (*ptr)[index];
            }

            // Return a static undefined value for out of bounds access
            static Value undefinedValue;
            return undefinedValue;
        }

        Value& operator[] (size_t index)
        {
            if (auto* ptr = std::get_if<Array>(&var))
            {
                if (index < ptr->size())
                    return (*ptr)[index];

                throw std::runtime_error("Value::operator[] array index out of bounds");
            }

            throw std::runtime_error("Value::operator[] on non-array Value type");
        }

        //==============================================================================
        // Array/Object size (from original Elementary repo)
        size_t size() const
        {
            if (auto* arrayPtr = std::get_if<Array>(&var))
                return arrayPtr->size();

            if (auto* float32ArrayPtr = std::get_if<Float32Array>(&var))
                return float32ArrayPtr->size();

            if (auto* objectPtr = std::get_if<Object>(&var))
                return objectPtr->size();

            return 0;
        }

        //==============================================================================
        // LOCAL CUSTOMIZATION: Object property access with a default return value
        template <typename T>
        T getWithDefault(std::string const& k, T const& v) const
        {
            if (!isObject())
                return v;

            auto o = getObject();
            if (o.count(k) > 0)
            {
                return T(o.at(k));
            }

            return v;
        }

        //==============================================================================
        // LOCAL CUSTOMIZATION: Convert array to vector of strings
        std::vector<std::string> toStringVector() const
        {
            std::vector<std::string> array_of_strings;
            if (isArray())
            {
                auto& a = getArray();
                for (const auto& e : a)
                {
                    array_of_strings.push_back(e.toString());
                }
            }
            return array_of_strings;
        }

        //==============================================================================
        // LOCAL CUSTOMIZATION: Enhanced toString() method using std::visit
        String toString() const
        {
            return std::visit(
                []<typename T0>(T0&& arg) -> String
                {
                    using T = std::decay_t<T0>;

                    if constexpr (std::is_same_v<T, Undefined>)
                    {
                        return "undefined";
                    }
                    else if constexpr (std::is_same_v<T, Null>)
                    {
                        return "null";
                    }
                    else if constexpr (std::is_same_v<T, Boolean>)
                    {
                        return arg ? "true" : "false";
                    }
                    else if constexpr (std::is_same_v<T, Number>)
                    {
                        // Handle special cases like the original
                        if (std::isnan(arg))
                            return "NaN";
                        if (std::isinf(arg))
                            return (arg < 0) ? "-Infinity" : "Infinity";
                        
                        std::stringstream ss;
                        ss << arg;
                        return ss.str();
                    }
                    else if constexpr (std::is_same_v<T, String>)
                    {
                        return arg;
                    }
                    else if constexpr (std::is_same_v<T, Array>)
                    {
                        // Handle array
                        std::stringstream ss;
                        ss << "[";

                        for (size_t i = 0; i < std::min(static_cast<size_t>(3), arg.size()); ++i)
                            ss << arg[i].toString() << ", ";

                        if (arg.size() > 3)
                        {
                            ss << "...]";
                            return ss.str();
                        }

                        auto s = ss.str();
                        if (s.length() > 2) // Remove trailing ", "
                            return s.substr(0, s.size() - 2) + "]";
                        return "]";
                    }
                    else if constexpr (std::is_same_v<T, Float32Array>)
                    {
                        // Handle float32 array
                        std::stringstream ss;
                        ss << "[";

                        for (size_t i = 0; i < std::min(static_cast<size_t>(3), arg.size()); ++i)
                            ss << std::to_string(arg[i]) << ", ";

                        if (arg.size() > 3)
                        {
                            ss << "...]";
                            return ss.str();
                        }

                        auto s = ss.str();
                        if (s.length() > 2) // Remove trailing ", "
                            return s.substr(0, s.size() - 2) + "]";
                        return "]";
                    }
                    else if constexpr (std::is_same_v<T, Object>)
                    {
                        // Handle object
                        std::stringstream ss;
                        ss << "{\n";

                        for (auto const& [k, v] : arg)
                        {
                            ss << "    " << k << ": " << v.toString() << "\n";
                        }

                        ss << "}\n";
                        return ss.str();
                    }
                    else if constexpr (std::is_same_v<T, Function>)
                    {
                        // Handle function
                        return "[object Function]";
                    }
                    else
                    {
                        // Handle unknown type
                        return "undefined";
                    }
                },
                var);
        }

        //==============================================================================
        // Conversion to/from primitive types (from original Elementary repo)
        template <typename T>
        T to() const;

        template <typename T>
        static Value from(T&& value);

    private:
        //==============================================================================
        // Internally we represent the Value's real value with a variant
        using VarType = std::variant<
            Undefined,
            Null,
            Boolean,
            Number,
            String,
            Array,
            Float32Array,
            Object,
            Function>;

        VarType var;
    };

    //==============================================================================
    // Template specializations (from original Elementary repo)
    template <>
    inline bool Value::to<bool>() const { return getBool(); }

    template <>
    inline double Value::to<double>() const { return getNumber(); }

    template <>
    inline float Value::to<float>() const { return static_cast<float>(getNumber()); }

    template <>
    inline int Value::to<int>() const { return static_cast<int>(getNumber()); }

    template <>
    inline std::string Value::to<std::string>() const { return getString(); }

    //==============================================================================
    template <>
    inline Value Value::from<bool>(bool&& value) { return Value(value); }

    template <>
    inline Value Value::from<double>(double&& value) { return Value(value); }

    template <>
    inline Value Value::from<float>(float&& value) { return Value(static_cast<double>(value)); }

    template <>
    inline Value Value::from<int>(int&& value) { return Value(static_cast<double>(value)); }

    template <>
    inline Value Value::from<std::string>(std::string&& value) { return Value(std::move(value)); }

    template <>
    inline Value Value::from<const char*>(const char*&& value) { return Value(String(value)); }

    template <>
    inline Value Value::from<Array>(Array&& value) { return Value(std::move(value)); }

    template <>
    inline Value Value::from<Float32Array>(Float32Array&& value) { return Value(std::move(value)); }

    template <>
    inline Value Value::from<Object>(Object&& value) { return Value(std::move(value)); }

    template <>
    inline Value Value::from<Function>(Function&& value) { return Value(std::move(value)); }

    //==============================================================================
    // We need moves to avoid allocations on the realtime thread if moving from
    // a lock free queue.
    static_assert(std::is_move_assignable<Value>::value);

    static inline std::ostream& operator<<(std::ostream& s, Value const& v)
    {
        s << v.toString();
        return s;
    }


} // namespace elem::js