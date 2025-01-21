#pragma once

#include <map>
#include <sstream>
#include <variant>
#include <vector>
#include <functional>

namespace elem
{
    namespace js
    {
        //==============================================================================
        // Representations of primitive JavaScript values
        struct Undefined
        {
        };

        struct Null
        {
        };

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
        class Value
        {
        public:
            //==============================================================================
            // Default constructor creates an undefined value
            Value()
                : var(Undefined())
            {
            }

            // Destructor
            ~Value() noexcept = default;

            Value(Undefined v) : var(v)
            {
            }

            Value(Null v) : var(v)
            {
            }

            Value(Boolean v) : var(v)
            {
            }

            Value(Number v) : var(v)
            {
            }

            Value(char const* v) : var(String(v))
            {
            }

            Value(String const& v) : var(v)
            {
            }

            Value(Array const& v) : var(v)
            {
            }

            Value(Float32Array const& v) : var(v)
            {
            }

            Value(Object const& v) : var(v)
            {
            }

            Value(Function const& v) : var(v)
            {
            }

            // Specialised constructor to handle std::vector<std::string>
            Value(std::vector<std::string> const& v)
            {
                Array array;
                for (const auto& str : v)
                {
                    array.push_back(Value(str));
                }
                var = array;
            }

            Value(Value const& valueToCopy) : var(valueToCopy.var)
            {
            }

            Value(Value&& valueToMove) noexcept : var(std::move(valueToMove.var))
            {
            }

            //==============================================================================
            // Assignment
            Value& operator=(Value const& valueToCopy)
            {
                var = valueToCopy.var;
                return *this;
            }

            Value& operator=(Value&& valueToMove) noexcept
            {
                var = std::move(valueToMove.var);
                return *this;
            }

            //==============================================================================
            // Type checks
            bool isUndefined() const { return std::holds_alternative<Undefined>(var); }
            bool isNull() const { return std::holds_alternative<Null>(var); }
            bool isBool() const { return std::holds_alternative<Boolean>(var); }
            bool isNumber() const { return std::holds_alternative<Number>(var); }
            bool isString() const { return std::holds_alternative<String>(var); }
            bool isArray() const { return std::holds_alternative<Array>(var); }
            bool isFloat32Array() const { return std::holds_alternative<Float32Array>(var); }
            bool isObject() const { return std::holds_alternative<Object>(var); }
            bool isFunction() const { return std::holds_alternative<Function>(var); }

            //==============================================================================
            // Primitive value casts
            operator Boolean() const { return std::get<Boolean>(var); }
            operator Number() const { return std::get<Number>(var); }
            operator String() const { return std::get<String>(var); }
            operator Array() const { return std::get<Array>(var); }

            // Object value getters
            Array const& getArray() const { return std::get<Array>(var); }
            Float32Array const& getFloat32Array() const { return std::get<Float32Array>(var); }
            Object const& getObject() const { return std::get<Object>(var); }
            Function const& getFunction() const { return std::get<Function>(var); }

            Array& getArray() { return std::get<Array>(var); }
            Float32Array& getFloat32Array() { return std::get<Float32Array>(var); }
            Object& getObject() { return std::get<Object>(var); }
            Function& getFunction() { return std::get<Function>(var); }


            //==============================================================================
            // Object property access with a default return value
            template <typename T>
            T getWithDefault(std::string const& k, T const& v) const
            {
                auto o = getObject();

                if (o.count(k) > 0)
                {
                    return T(o.at(k));
                }

                return v;
            }


            // an additional trait specialisation to handle vfs_keys string vec
            std::vector<std::string> toStringVector() const
            {
                std::vector<std::string> array_of_strings;
                if (isArray())
                {
                    auto& a = getArray();
                    for ( const auto& e : a)
                    {
                        array_of_strings.push_back( e.toString());
                    }
                }
                return array_of_strings;
            }

            // String representation
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
                            return String(std::to_string(arg));
                        }
                        else if constexpr (std::is_same_v<T, Number>)
                        {
                            return String(std::to_string(arg));
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
                            return s.substr(0, s.size() - 2) + "]";
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
                            return s.substr(0, s.size() - 2) + "]";
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
                            return "[Object Function]";
                        }
                        else
                        {
                            // Handle unknown type
                            return "undefined";
                        }
                    },
                    var);
            }

        private:
            //==============================================================================
            // Internally we represent the Value's real value with a variant
            using VarType = std::variant<
                Undefined,
                Null,
                Boolean,
                Number,
                String,
                Object,
                Array,
                Float32Array,
                Function>;

            VarType var;
        };

        // We need moves to avoid allocations on the realtime thread if moving from
        // a lock free queue.
        static_assert(std::is_move_assignable<Value>::value);

        static inline std::ostream& operator<<(std::ostream& s, Value const& v)
        {
            s << v.toString();
            return s;
        }
    } // namespace js
} // namespace elem
