"use strict";
(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod2) => function __require() {
    return mod2 || (0, cb[__getOwnPropNames(cb)[0]])((mod2 = { exports: {} }).exports, mod2), mod2.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod2, isNodeMode, target) => (target = mod2 != null ? __create(__getProtoOf(mod2)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod2 || !mod2.__esModule ? __defProp(target, "default", { value: mod2, enumerable: true }) : target,
    mod2
  ));

  // node_modules/shallowequal/index.js
  var require_shallowequal = __commonJS({
    "node_modules/shallowequal/index.js"(exports, module) {
      module.exports = function shallowEqual2(objA, objB, compare2, compareContext) {
        var ret = compare2 ? compare2.call(compareContext, objA, objB) : void 0;
        if (ret !== void 0) {
          return !!ret;
        }
        if (objA === objB) {
          return true;
        }
        if (typeof objA !== "object" || !objA || typeof objB !== "object" || !objB) {
          return false;
        }
        var keysA = Object.keys(objA);
        var keysB = Object.keys(objB);
        if (keysA.length !== keysB.length) {
          return false;
        }
        var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);
        for (var idx = 0; idx < keysA.length; idx++) {
          var key = keysA[idx];
          if (!bHasOwnProperty(key)) {
            return false;
          }
          var valueA = objA[key];
          var valueB = objB[key];
          ret = compare2 ? compare2.call(compareContext, valueA, valueB, key) : void 0;
          if (ret === false || ret === void 0 && valueA !== valueB) {
            return false;
          }
        }
        return true;
      };
    }
  });

  // node_modules/invariant/browser.js
  var require_browser = __commonJS({
    "node_modules/invariant/browser.js"(exports, module) {
      "use strict";
      var invariant3 = function(condition, format, a, b, c, d, e, f) {
        if (true) {
          if (format === void 0) {
            throw new Error("invariant requires an error message argument");
          }
        }
        if (!condition) {
          var error;
          if (format === void 0) {
            error = new Error(
              "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."
            );
          } else {
            var args = [a, b, c, d, e, f];
            var argIndex = 0;
            error = new Error(
              format.replace(/%s/g, function() {
                return args[argIndex++];
              })
            );
            error.name = "Invariant Violation";
          }
          error.framesToPop = 1;
          throw error;
        }
      };
      module.exports = invariant3;
    }
  });

  // node_modules/eventemitter3/index.js
  var require_eventemitter3 = __commonJS({
    "node_modules/eventemitter3/index.js"(exports, module) {
      "use strict";
      var has = Object.prototype.hasOwnProperty;
      var prefix = "~";
      function Events() {
      }
      if (Object.create) {
        Events.prototype = /* @__PURE__ */ Object.create(null);
        if (!new Events().__proto__)
          prefix = false;
      }
      function EE(fn, context, once2) {
        this.fn = fn;
        this.context = context;
        this.once = once2 || false;
      }
      function addListener(emitter, event, fn, context, once2) {
        if (typeof fn !== "function") {
          throw new TypeError("The listener must be a function");
        }
        var listener = new EE(fn, context || emitter, once2), evt = prefix ? prefix + event : event;
        if (!emitter._events[evt])
          emitter._events[evt] = listener, emitter._eventsCount++;
        else if (!emitter._events[evt].fn)
          emitter._events[evt].push(listener);
        else
          emitter._events[evt] = [emitter._events[evt], listener];
        return emitter;
      }
      function clearEvent(emitter, evt) {
        if (--emitter._eventsCount === 0)
          emitter._events = new Events();
        else
          delete emitter._events[evt];
      }
      function EventEmitter2() {
        this._events = new Events();
        this._eventsCount = 0;
      }
      EventEmitter2.prototype.eventNames = function eventNames() {
        var names = [], events, name;
        if (this._eventsCount === 0)
          return names;
        for (name in events = this._events) {
          if (has.call(events, name))
            names.push(prefix ? name.slice(1) : name);
        }
        if (Object.getOwnPropertySymbols) {
          return names.concat(Object.getOwnPropertySymbols(events));
        }
        return names;
      };
      EventEmitter2.prototype.listeners = function listeners(event) {
        var evt = prefix ? prefix + event : event, handlers = this._events[evt];
        if (!handlers)
          return [];
        if (handlers.fn)
          return [handlers.fn];
        for (var i = 0, l = handlers.length, ee = new Array(l); i < l; i++) {
          ee[i] = handlers[i].fn;
        }
        return ee;
      };
      EventEmitter2.prototype.listenerCount = function listenerCount(event) {
        var evt = prefix ? prefix + event : event, listeners = this._events[evt];
        if (!listeners)
          return 0;
        if (listeners.fn)
          return 1;
        return listeners.length;
      };
      EventEmitter2.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
        var evt = prefix ? prefix + event : event;
        if (!this._events[evt])
          return false;
        var listeners = this._events[evt], len = arguments.length, args, i;
        if (listeners.fn) {
          if (listeners.once)
            this.removeListener(event, listeners.fn, void 0, true);
          switch (len) {
            case 1:
              return listeners.fn.call(listeners.context), true;
            case 2:
              return listeners.fn.call(listeners.context, a1), true;
            case 3:
              return listeners.fn.call(listeners.context, a1, a2), true;
            case 4:
              return listeners.fn.call(listeners.context, a1, a2, a3), true;
            case 5:
              return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
            case 6:
              return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
          }
          for (i = 1, args = new Array(len - 1); i < len; i++) {
            args[i - 1] = arguments[i];
          }
          listeners.fn.apply(listeners.context, args);
        } else {
          var length2 = listeners.length, j;
          for (i = 0; i < length2; i++) {
            if (listeners[i].once)
              this.removeListener(event, listeners[i].fn, void 0, true);
            switch (len) {
              case 1:
                listeners[i].fn.call(listeners[i].context);
                break;
              case 2:
                listeners[i].fn.call(listeners[i].context, a1);
                break;
              case 3:
                listeners[i].fn.call(listeners[i].context, a1, a2);
                break;
              case 4:
                listeners[i].fn.call(listeners[i].context, a1, a2, a3);
                break;
              default:
                if (!args)
                  for (j = 1, args = new Array(len - 1); j < len; j++) {
                    args[j - 1] = arguments[j];
                  }
                listeners[i].fn.apply(listeners[i].context, args);
            }
          }
        }
        return true;
      };
      EventEmitter2.prototype.on = function on(event, fn, context) {
        return addListener(this, event, fn, context, false);
      };
      EventEmitter2.prototype.once = function once2(event, fn, context) {
        return addListener(this, event, fn, context, true);
      };
      EventEmitter2.prototype.removeListener = function removeListener(event, fn, context, once2) {
        var evt = prefix ? prefix + event : event;
        if (!this._events[evt])
          return this;
        if (!fn) {
          clearEvent(this, evt);
          return this;
        }
        var listeners = this._events[evt];
        if (listeners.fn) {
          if (listeners.fn === fn && (!once2 || listeners.once) && (!context || listeners.context === context)) {
            clearEvent(this, evt);
          }
        } else {
          for (var i = 0, events = [], length2 = listeners.length; i < length2; i++) {
            if (listeners[i].fn !== fn || once2 && !listeners[i].once || context && listeners[i].context !== context) {
              events.push(listeners[i]);
            }
          }
          if (events.length)
            this._events[evt] = events.length === 1 ? events[0] : events;
          else
            clearEvent(this, evt);
        }
        return this;
      };
      EventEmitter2.prototype.removeAllListeners = function removeAllListeners(event) {
        var evt;
        if (event) {
          evt = prefix ? prefix + event : event;
          if (this._events[evt])
            clearEvent(this, evt);
        } else {
          this._events = new Events();
          this._eventsCount = 0;
        }
        return this;
      };
      EventEmitter2.prototype.off = EventEmitter2.prototype.removeListener;
      EventEmitter2.prototype.addListener = EventEmitter2.prototype.on;
      EventEmitter2.prefixed = prefix;
      EventEmitter2.EventEmitter = EventEmitter2;
      if ("undefined" !== typeof module) {
        module.exports = EventEmitter2;
      }
    }
  });

  // node_modules/@elemaudio/core/dist/index.js
  var import_shallowequal = __toESM(require_shallowequal(), 1);
  var import_invariant = __toESM(require_browser(), 1);

  // node_modules/eventemitter3/index.mjs
  var import_index = __toESM(require_eventemitter3(), 1);

  // node_modules/@elemaudio/core/dist/index.js
  var __defProp2 = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __hasOwnProp2 = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp2.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b)) {
        if (__propIsEnum.call(b, prop))
          __defNormalProp(a, prop, b[prop]);
      }
    return a;
  };
  var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
  var __export = (target, all) => {
    for (var name in all)
      __defProp2(target, name, { get: all[name], enumerable: true });
  };
  var curry_exports = {};
  __export(curry_exports, {
    _1: () => _1,
    _2: () => _2,
    _3: () => _3,
    _4: () => _4,
    _5: () => _5,
    _6: () => _6,
    _7: () => _7,
    _8: () => _8,
    __1: () => __1,
    __2: () => __2,
    __3: () => __3,
    __4: () => __4,
    __5: () => __5,
    __6: () => __6,
    __7: () => __7,
    __8: () => __8,
    app: () => app
  });
  function sub(x, offset, len) {
    var result = new Array(len);
    var j = 0;
    var i = offset;
    while (j < len) {
      result[j] = x[i];
      j = j + 1 | 0;
      i = i + 1 | 0;
    }
    ;
    return result;
  }
  function app(_f, _args) {
    while (true) {
      var args = _args;
      var f = _f;
      var init_arity = f.length;
      var arity = init_arity === 0 ? 1 : init_arity;
      var len = args.length;
      var d = arity - len | 0;
      if (d === 0) {
        return f.apply(null, args);
      }
      if (d >= 0) {
        return function(f2, args2) {
          return function(x) {
            return app(f2, args2.concat([x]));
          };
        }(f, args);
      }
      _args = sub(args, arity, -d | 0);
      _f = f.apply(null, sub(args, 0, arity));
      continue;
    }
    ;
  }
  function _1(o, a0) {
    var arity = o.length;
    if (arity === 1) {
      return o(a0);
    } else {
      switch (arity) {
        case 1:
          return o(a0);
        case 2:
          return function(param) {
            return o(a0, param);
          };
        case 3:
          return function(param, param$1) {
            return o(a0, param, param$1);
          };
        case 4:
          return function(param, param$1, param$2) {
            return o(a0, param, param$1, param$2);
          };
        case 5:
          return function(param, param$1, param$2, param$3) {
            return o(a0, param, param$1, param$2, param$3);
          };
        case 6:
          return function(param, param$1, param$2, param$3, param$4) {
            return o(a0, param, param$1, param$2, param$3, param$4);
          };
        case 7:
          return function(param, param$1, param$2, param$3, param$4, param$5) {
            return o(a0, param, param$1, param$2, param$3, param$4, param$5);
          };
        default:
          return app(o, [a0]);
      }
    }
  }
  function __1(o) {
    var arity = o.length;
    if (arity === 1) {
      return o;
    } else {
      return function(a0) {
        return _1(o, a0);
      };
    }
  }
  function _2(o, a0, a1) {
    var arity = o.length;
    if (arity === 2) {
      return o(a0, a1);
    } else {
      switch (arity) {
        case 1:
          return app(o(a0), [a1]);
        case 2:
          return o(a0, a1);
        case 3:
          return function(param) {
            return o(a0, a1, param);
          };
        case 4:
          return function(param, param$1) {
            return o(a0, a1, param, param$1);
          };
        case 5:
          return function(param, param$1, param$2) {
            return o(a0, a1, param, param$1, param$2);
          };
        case 6:
          return function(param, param$1, param$2, param$3) {
            return o(a0, a1, param, param$1, param$2, param$3);
          };
        case 7:
          return function(param, param$1, param$2, param$3, param$4) {
            return o(a0, a1, param, param$1, param$2, param$3, param$4);
          };
        default:
          return app(o, [
            a0,
            a1
          ]);
      }
    }
  }
  function __2(o) {
    var arity = o.length;
    if (arity === 2) {
      return o;
    } else {
      return function(a0, a1) {
        return _2(o, a0, a1);
      };
    }
  }
  function _3(o, a0, a1, a2) {
    var arity = o.length;
    if (arity === 3) {
      return o(a0, a1, a2);
    } else {
      switch (arity) {
        case 1:
          return app(o(a0), [
            a1,
            a2
          ]);
        case 2:
          return app(o(a0, a1), [a2]);
        case 3:
          return o(a0, a1, a2);
        case 4:
          return function(param) {
            return o(a0, a1, a2, param);
          };
        case 5:
          return function(param, param$1) {
            return o(a0, a1, a2, param, param$1);
          };
        case 6:
          return function(param, param$1, param$2) {
            return o(a0, a1, a2, param, param$1, param$2);
          };
        case 7:
          return function(param, param$1, param$2, param$3) {
            return o(a0, a1, a2, param, param$1, param$2, param$3);
          };
        default:
          return app(o, [
            a0,
            a1,
            a2
          ]);
      }
    }
  }
  function __3(o) {
    var arity = o.length;
    if (arity === 3) {
      return o;
    } else {
      return function(a0, a1, a2) {
        return _3(o, a0, a1, a2);
      };
    }
  }
  function _4(o, a0, a1, a2, a3) {
    var arity = o.length;
    if (arity === 4) {
      return o(a0, a1, a2, a3);
    } else {
      switch (arity) {
        case 1:
          return app(o(a0), [
            a1,
            a2,
            a3
          ]);
        case 2:
          return app(o(a0, a1), [
            a2,
            a3
          ]);
        case 3:
          return app(o(a0, a1, a2), [a3]);
        case 4:
          return o(a0, a1, a2, a3);
        case 5:
          return function(param) {
            return o(a0, a1, a2, a3, param);
          };
        case 6:
          return function(param, param$1) {
            return o(a0, a1, a2, a3, param, param$1);
          };
        case 7:
          return function(param, param$1, param$2) {
            return o(a0, a1, a2, a3, param, param$1, param$2);
          };
        default:
          return app(o, [
            a0,
            a1,
            a2,
            a3
          ]);
      }
    }
  }
  function __4(o) {
    var arity = o.length;
    if (arity === 4) {
      return o;
    } else {
      return function(a0, a1, a2, a3) {
        return _4(o, a0, a1, a2, a3);
      };
    }
  }
  function _5(o, a0, a1, a2, a3, a4) {
    var arity = o.length;
    if (arity === 5) {
      return o(a0, a1, a2, a3, a4);
    } else {
      switch (arity) {
        case 1:
          return app(o(a0), [
            a1,
            a2,
            a3,
            a4
          ]);
        case 2:
          return app(o(a0, a1), [
            a2,
            a3,
            a4
          ]);
        case 3:
          return app(o(a0, a1, a2), [
            a3,
            a4
          ]);
        case 4:
          return app(o(a0, a1, a2, a3), [a4]);
        case 5:
          return o(a0, a1, a2, a3, a4);
        case 6:
          return function(param) {
            return o(a0, a1, a2, a3, a4, param);
          };
        case 7:
          return function(param, param$1) {
            return o(a0, a1, a2, a3, a4, param, param$1);
          };
        default:
          return app(o, [
            a0,
            a1,
            a2,
            a3,
            a4
          ]);
      }
    }
  }
  function __5(o) {
    var arity = o.length;
    if (arity === 5) {
      return o;
    } else {
      return function(a0, a1, a2, a3, a4) {
        return _5(o, a0, a1, a2, a3, a4);
      };
    }
  }
  function _6(o, a0, a1, a2, a3, a4, a5) {
    var arity = o.length;
    if (arity === 6) {
      return o(a0, a1, a2, a3, a4, a5);
    } else {
      switch (arity) {
        case 1:
          return app(o(a0), [
            a1,
            a2,
            a3,
            a4,
            a5
          ]);
        case 2:
          return app(o(a0, a1), [
            a2,
            a3,
            a4,
            a5
          ]);
        case 3:
          return app(o(a0, a1, a2), [
            a3,
            a4,
            a5
          ]);
        case 4:
          return app(o(a0, a1, a2, a3), [
            a4,
            a5
          ]);
        case 5:
          return app(o(a0, a1, a2, a3, a4), [a5]);
        case 6:
          return o(a0, a1, a2, a3, a4, a5);
        case 7:
          return function(param) {
            return o(a0, a1, a2, a3, a4, a5, param);
          };
        default:
          return app(o, [
            a0,
            a1,
            a2,
            a3,
            a4,
            a5
          ]);
      }
    }
  }
  function __6(o) {
    var arity = o.length;
    if (arity === 6) {
      return o;
    } else {
      return function(a0, a1, a2, a3, a4, a5) {
        return _6(o, a0, a1, a2, a3, a4, a5);
      };
    }
  }
  function _7(o, a0, a1, a2, a3, a4, a5, a6) {
    var arity = o.length;
    if (arity === 7) {
      return o(a0, a1, a2, a3, a4, a5, a6);
    } else {
      switch (arity) {
        case 1:
          return app(o(a0), [
            a1,
            a2,
            a3,
            a4,
            a5,
            a6
          ]);
        case 2:
          return app(o(a0, a1), [
            a2,
            a3,
            a4,
            a5,
            a6
          ]);
        case 3:
          return app(o(a0, a1, a2), [
            a3,
            a4,
            a5,
            a6
          ]);
        case 4:
          return app(o(a0, a1, a2, a3), [
            a4,
            a5,
            a6
          ]);
        case 5:
          return app(o(a0, a1, a2, a3, a4), [
            a5,
            a6
          ]);
        case 6:
          return app(o(a0, a1, a2, a3, a4, a5), [a6]);
        case 7:
          return o(a0, a1, a2, a3, a4, a5, a6);
        default:
          return app(o, [
            a0,
            a1,
            a2,
            a3,
            a4,
            a5,
            a6
          ]);
      }
    }
  }
  function __7(o) {
    var arity = o.length;
    if (arity === 7) {
      return o;
    } else {
      return function(a0, a1, a2, a3, a4, a5, a6) {
        return _7(o, a0, a1, a2, a3, a4, a5, a6);
      };
    }
  }
  function _8(o, a0, a1, a2, a3, a4, a5, a6, a7) {
    var arity = o.length;
    if (arity === 8) {
      return o(a0, a1, a2, a3, a4, a5, a6, a7);
    } else {
      switch (arity) {
        case 1:
          return app(o(a0), [
            a1,
            a2,
            a3,
            a4,
            a5,
            a6,
            a7
          ]);
        case 2:
          return app(o(a0, a1), [
            a2,
            a3,
            a4,
            a5,
            a6,
            a7
          ]);
        case 3:
          return app(o(a0, a1, a2), [
            a3,
            a4,
            a5,
            a6,
            a7
          ]);
        case 4:
          return app(o(a0, a1, a2, a3), [
            a4,
            a5,
            a6,
            a7
          ]);
        case 5:
          return app(o(a0, a1, a2, a3, a4), [
            a5,
            a6,
            a7
          ]);
        case 6:
          return app(o(a0, a1, a2, a3, a4, a5), [
            a6,
            a7
          ]);
        case 7:
          return app(o(a0, a1, a2, a3, a4, a5, a6), [a7]);
        default:
          return app(o, [
            a0,
            a1,
            a2,
            a3,
            a4,
            a5,
            a6,
            a7
          ]);
      }
    }
  }
  function __8(o) {
    var arity = o.length;
    if (arity === 8) {
      return o;
    } else {
      return function(a0, a1, a2, a3, a4, a5, a6, a7) {
        return _8(o, a0, a1, a2, a3, a4, a5, a6, a7);
      };
    }
  }
  var Reconciler_bs_exports = {};
  __export(Reconciler_bs_exports, {
    $$Map: () => $$Map,
    $$Set: () => $$Set,
    RenderDelegate: () => RenderDelegate,
    mount: () => mount,
    renderWithDelegate: () => renderWithDelegate,
    stepGarbageCollector: () => stepGarbageCollector,
    visit: () => visit
  });
  var NodeRepr_bs_exports = {};
  __export(NodeRepr_bs_exports, {
    create: () => create,
    isNode: () => isNode,
    shallowCopy: () => shallowCopy,
    symbol: () => symbol
  });
  function classify(x) {
    var ty = typeof x;
    if (ty === "undefined") {
      return 3;
    } else if (x === null) {
      return 2;
    } else if (ty === "number") {
      return {
        TAG: 0,
        _0: x
      };
    } else if (ty === "bigint") {
      return {
        TAG: 5,
        _0: x
      };
    } else if (ty === "string") {
      return {
        TAG: 1,
        _0: x
      };
    } else if (ty === "boolean") {
      if (x === true) {
        return 1;
      } else {
        return 0;
      }
    } else if (ty === "symbol") {
      return {
        TAG: 4,
        _0: x
      };
    } else if (ty === "function") {
      return {
        TAG: 2,
        _0: x
      };
    } else {
      return {
        TAG: 3,
        _0: x
      };
    }
  }
  function test(x, v) {
    switch (v) {
      case 0:
        return typeof x === "undefined";
      case 1:
        return x === null;
      case 2:
        return typeof x === "boolean";
      case 3:
        return typeof x === "number";
      case 4:
        return typeof x === "string";
      case 5:
        return typeof x === "function";
      case 6:
        return typeof x === "object";
      case 7:
        return typeof x === "symbol";
      case 8:
        return typeof x === "bigint";
    }
  }
  function some(x) {
    if (x === void 0) {
      return {
        BS_PRIVATE_NESTED_SOME_NONE: 0
      };
    } else if (x !== null && x.BS_PRIVATE_NESTED_SOME_NONE !== void 0) {
      return {
        BS_PRIVATE_NESTED_SOME_NONE: x.BS_PRIVATE_NESTED_SOME_NONE + 1 | 0
      };
    } else {
      return x;
    }
  }
  function valFromOption(x) {
    if (!(x !== null && x.BS_PRIVATE_NESTED_SOME_NONE !== void 0)) {
      return x;
    }
    var depth = x.BS_PRIVATE_NESTED_SOME_NONE;
    if (depth === 0) {
      return;
    } else {
      return {
        BS_PRIVATE_NESTED_SOME_NONE: depth - 1 | 0
      };
    }
  }
  function add(xs, x) {
    return {
      hd: x,
      tl: xs
    };
  }
  function copyAuxCont(_cellX, _prec) {
    while (true) {
      var prec = _prec;
      var cellX = _cellX;
      if (!cellX) {
        return prec;
      }
      var next = {
        hd: cellX.hd,
        tl: 0
      };
      prec.tl = next;
      _prec = next;
      _cellX = cellX.tl;
      continue;
    }
    ;
  }
  function copyAuxWithMap(_cellX, _prec, f) {
    while (true) {
      var prec = _prec;
      var cellX = _cellX;
      if (!cellX) {
        return;
      }
      var next = {
        hd: f(cellX.hd),
        tl: 0
      };
      prec.tl = next;
      _prec = next;
      _cellX = cellX.tl;
      continue;
    }
    ;
  }
  function copyAuxWithMapI(f, _i, _cellX, _prec) {
    while (true) {
      var prec = _prec;
      var cellX = _cellX;
      var i = _i;
      if (!cellX) {
        return;
      }
      var next = {
        hd: f(i, cellX.hd),
        tl: 0
      };
      prec.tl = next;
      _prec = next;
      _cellX = cellX.tl;
      _i = i + 1 | 0;
      continue;
    }
    ;
  }
  function concat(xs, ys) {
    if (!xs) {
      return ys;
    }
    var cell = {
      hd: xs.hd,
      tl: 0
    };
    copyAuxCont(xs.tl, cell).tl = ys;
    return cell;
  }
  function mapU(xs, f) {
    if (!xs) {
      return 0;
    }
    var cell = {
      hd: f(xs.hd),
      tl: 0
    };
    copyAuxWithMap(xs.tl, cell, f);
    return cell;
  }
  function map(xs, f) {
    return mapU(xs, __1(f));
  }
  function mapWithIndexU(xs, f) {
    if (!xs) {
      return 0;
    }
    var cell = {
      hd: f(0, xs.hd),
      tl: 0
    };
    copyAuxWithMapI(f, 1, xs.tl, cell);
    return cell;
  }
  function mapWithIndex(xs, f) {
    return mapWithIndexU(xs, __2(f));
  }
  function length(xs) {
    var _x = xs;
    var _acc = 0;
    while (true) {
      var acc = _acc;
      var x = _x;
      if (!x) {
        return acc;
      }
      _acc = acc + 1 | 0;
      _x = x.tl;
      continue;
    }
    ;
  }
  function fillAux(arr, _i, _x) {
    while (true) {
      var x = _x;
      var i = _i;
      if (!x) {
        return;
      }
      arr[i] = x.hd;
      _x = x.tl;
      _i = i + 1 | 0;
      continue;
    }
    ;
  }
  function fromArray(a) {
    var _i = a.length - 1 | 0;
    var _res = 0;
    while (true) {
      var res = _res;
      var i = _i;
      if (i < 0) {
        return res;
      }
      _res = {
        hd: a[i],
        tl: res
      };
      _i = i - 1 | 0;
      continue;
    }
    ;
  }
  function toArray(x) {
    var len = length(x);
    var arr = new Array(len);
    fillAux(arr, 0, x);
    return arr;
  }
  function forEachU(_xs, f) {
    while (true) {
      var xs = _xs;
      if (!xs) {
        return;
      }
      f(xs.hd);
      _xs = xs.tl;
      continue;
    }
    ;
  }
  function forEach(xs, f) {
    forEachU(xs, __1(f));
  }
  function reduceU(_l, _accu, f) {
    while (true) {
      var accu = _accu;
      var l = _l;
      if (!l) {
        return accu;
      }
      _accu = f(accu, l.hd);
      _l = l.tl;
      continue;
    }
    ;
  }
  function updateNodeProps(renderer, hash, prevProps, nextProps) {
    for (let key in nextProps) {
      if (nextProps.hasOwnProperty(key)) {
        const value = nextProps[key];
        const shouldUpdate = !prevProps.hasOwnProperty(key) || !(0, import_shallowequal.default)(prevProps[key], value);
        if (shouldUpdate) {
          const seemsInvalid = typeof value === "undefined" || value === null || typeof value === "number" && isNaN(value) || typeof value === "number" && !isFinite(value);
          if (seemsInvalid) {
            console.warn(`Warning: applying a potentially erroneous property value. ${key}: ${value}`);
          }
          renderer.setProperty(hash, key, value);
          prevProps[key] = value;
        }
      }
    }
  }
  function get(dict, k) {
    if (k in dict) {
      return some(dict[k]);
    }
  }
  function getExn(x) {
    if (x !== void 0) {
      return valFromOption(x);
    }
    throw new Error("getExn");
  }
  function updateNodeProps2(prim0, prim1, prim2, prim3) {
    updateNodeProps(prim0, prim1, prim2, prim3);
  }
  function mixNumber(seed, n) {
    return Math.imul(seed ^ n, 16777619);
  }
  function hashString(seed, s) {
    var r = seed;
    for (var i = 0, i_finish = s.length; i <= i_finish; ++i) {
      r = mixNumber(r, s.charCodeAt(i) | 0);
    }
    return r;
  }
  function hashNode(kind, props, children) {
    var r = hashString(-2128831035, kind);
    var k = get(props, "key");
    var r2 = k !== void 0 && test(k, 4) ? hashString(r, k) : hashString(r, getExn(JSON.stringify(props)));
    return reduceU(children, r2, mixNumber) & 2147483647;
  }
  var symbol = "__ELEM_NODE__";
  function create(kind, props, children) {
    var childrenList = fromArray(children);
    var childHashes = map(childrenList, function(n) {
      return n.hash;
    });
    return {
      symbol,
      hash: hashNode(kind, props, childHashes),
      kind,
      props,
      children: childrenList
    };
  }
  function isNode(a) {
    var match = classify(a);
    if (typeof match === "number") {
      return false;
    }
    if (match.TAG !== 3) {
      return false;
    }
    var s = classify(a.symbol);
    if (typeof s === "number" || s.TAG !== 1) {
      return false;
    } else {
      return s._0 === symbol;
    }
  }
  function shallowCopy(node) {
    return {
      symbol: node.symbol,
      hash: node.hash,
      kind: node.kind,
      props: Object.assign({}, node.props),
      generation: {
        contents: 0
      }
    };
  }
  function valuesArray(m) {
    return Array.from(m.values());
  }
  var $$Map = {
    valuesArray
  };
  var $$Set = {};
  var RenderDelegate = {};
  function mount(delegate, node) {
    var nodeMap = delegate.getNodeMap();
    if (nodeMap.has(node.hash)) {
      var existing = nodeMap.get(node.hash);
      updateNodeProps2(delegate, existing.hash, existing.props, node.props);
      existing.generation.contents = 0;
      return;
    }
    delegate.createNode(node.hash, node.kind);
    updateNodeProps2(delegate, node.hash, {}, node.props);
    forEach(node.children, function(child) {
      delegate.appendChild(node.hash, child.hash);
    });
    nodeMap.set(node.hash, shallowCopy(node));
  }
  function visit(delegate, visitSet, _ns) {
    while (true) {
      var ns = _ns;
      var markVisited = function(n2) {
        visitSet.add(n2.hash);
      };
      if (!ns) {
        return;
      }
      var rest = ns.tl;
      var n = ns.hd;
      if (visitSet.has(n.hash)) {
        _ns = rest;
        continue;
      }
      markVisited(n);
      mount(delegate, n);
      _ns = concat(n.children, rest);
      continue;
    }
    ;
  }
  function renderWithDelegate(delegate, graphs) {
    var visitSet = /* @__PURE__ */ new Set();
    var roots = mapWithIndex(fromArray(graphs), function(i, g) {
      return create("root", {
        channel: i
      }, [g]);
    });
    visit(delegate, visitSet, roots);
    delegate.activateRoots(toArray(map(roots, function(r) {
      return r.hash;
    })));
    delegate.commitUpdates();
  }
  function stepGarbageCollector(delegate) {
    var nodeMap = delegate.getNodeMap();
    var term = delegate.getTerminalGeneration();
    var deleted = Array.from(nodeMap.values()).reduce(function(acc, n) {
      n.generation.contents = n.generation.contents + 1 | 0;
      if (n.generation.contents >= term) {
        delegate.deleteNode(n.hash);
        return add(acc, n);
      } else {
        return acc;
      }
    }, 0);
    if (length(deleted) > 0) {
      delegate.commitUpdates();
      return forEach(deleted, function(n) {
        nodeMap.delete(n.hash);
      });
    }
  }
  var Curry = curry_exports;
  var ReconcilerBS = Reconciler_bs_exports;
  var renderWithDelegate2 = function(Arg1, Arg2) {
    const result = Curry._2(ReconcilerBS.renderWithDelegate, Arg1, Arg2);
    return result;
  };
  var stepGarbageCollector2 = ReconcilerBS.stepGarbageCollector;
  var Curry2 = curry_exports;
  var NodeReprBS = NodeRepr_bs_exports;
  var create2 = function(Arg1, Arg2, Arg3) {
    const result = Curry2._3(NodeReprBS.create, Arg1, Arg2, Arg3);
    return result;
  };
  var isNode2 = NodeReprBS.isNode;
  var shallowCopy2 = NodeReprBS.shallowCopy;
  function resolve(n) {
    if (typeof n === "number")
      return create2("const", { value: n }, []);
    (0, import_invariant.default)(isNode3(n), `Whoops, expecting a Node type here! Got: ${typeof n}`);
    return n;
  }
  function isNode3(n) {
    return isNode2(n);
  }
  function createNode(kind, props, children) {
    return create2(kind, props, children.map(resolve));
  }
  var core_exports = {};
  __export(core_exports, {
    accum: () => accum,
    biquad: () => biquad,
    capture: () => capture,
    constant: () => constant,
    convolve: () => convolve,
    counter: () => counter,
    delay: () => delay,
    env: () => env,
    fft: () => fft,
    latch: () => latch,
    maxhold: () => maxhold,
    meter: () => meter,
    metro: () => metro,
    mm1p: () => mm1p,
    once: () => once,
    phasor: () => phasor,
    pole: () => pole,
    prewarp: () => prewarp,
    rand: () => rand,
    sample: () => sample,
    sampleseq: () => sampleseq,
    sampleseq2: () => sampleseq2,
    scope: () => scope,
    sdelay: () => sdelay,
    seq: () => seq,
    seq2: () => seq2,
    snapshot: () => snapshot,
    sparseq: () => sparseq,
    sparseq2: () => sparseq2,
    sr: () => sr,
    svf: () => svf,
    svfshelf: () => svfshelf,
    syncphasor: () => syncphasor,
    table: () => table,
    tapIn: () => tapIn,
    tapOut: () => tapOut,
    time: () => time,
    z: () => z
  });
  function constant(props) {
    return createNode("const", props, []);
  }
  function sr() {
    return createNode("sr", {}, []);
  }
  function time() {
    return createNode("time", {}, []);
  }
  function counter(a, b) {
    if (typeof a === "number" || isNode3(a)) {
      return createNode("counter", {}, [resolve(a)]);
    }
    return createNode("counter", a, [resolve(b)]);
  }
  function accum(a, b, c) {
    if (typeof a === "number" || isNode3(a)) {
      return createNode("accum", {}, [resolve(a), resolve(b)]);
    }
    return createNode("accum", a, [resolve(b), resolve(c)]);
  }
  function phasor(a, b) {
    if (typeof a === "number" || isNode3(a)) {
      return createNode("phasor", {}, [resolve(a)]);
    }
    return createNode("phasor", a, [resolve(b)]);
  }
  function syncphasor(a, b, c) {
    if (typeof a === "number" || isNode3(a)) {
      return createNode("sphasor", {}, [resolve(a), resolve(b)]);
    }
    return createNode("sphasor", a, [resolve(b), resolve(c)]);
  }
  function latch(a, b, c) {
    if (typeof a === "number" || isNode3(a)) {
      return createNode("latch", {}, [resolve(a), resolve(b)]);
    }
    return createNode("latch", a, [resolve(b), resolve(c)]);
  }
  function maxhold(a, b, c) {
    if (typeof a === "number" || isNode3(a)) {
      return createNode("maxhold", {}, [resolve(a), resolve(b)]);
    }
    return createNode("maxhold", a, [resolve(b), resolve(c)]);
  }
  function once(a, b) {
    if (typeof a === "number" || isNode3(a)) {
      return createNode("once", {}, [resolve(a)]);
    }
    return createNode("once", a, [resolve(b)]);
  }
  function rand(a) {
    if (typeof a !== "undefined") {
      return createNode("rand", a, []);
    }
    return createNode("rand", {}, []);
  }
  function metro(a) {
    if (typeof a !== "undefined") {
      return createNode("metro", a, []);
    }
    return createNode("metro", {}, []);
  }
  function sample(props, trigger, rate) {
    return createNode("sample", props, [resolve(trigger), resolve(rate)]);
  }
  function table(props, t) {
    return createNode("table", props, [resolve(t)]);
  }
  function convolve(props, x) {
    return createNode("convolve", props, [resolve(x)]);
  }
  function seq(props, trigger, reset) {
    return createNode("seq", props, [resolve(trigger), resolve(reset)]);
  }
  function seq2(props, trigger, reset) {
    return createNode("seq2", props, [resolve(trigger), resolve(reset)]);
  }
  function sparseq(props, trigger, reset) {
    return createNode("sparseq", props, [resolve(trigger), resolve(reset)]);
  }
  function sparseq2(props, time2) {
    return createNode("sparseq2", props, [resolve(time2)]);
  }
  function sampleseq(props, time2) {
    return createNode("sampleseq", props, [resolve(time2)]);
  }
  function sampleseq2(props, time2) {
    return createNode("sampleseq2", props, [resolve(time2)]);
  }
  function pole(a, b, c) {
    if (typeof a === "number" || isNode3(a)) {
      return createNode("pole", {}, [resolve(a), resolve(b)]);
    }
    return createNode("pole", a, [resolve(b), resolve(c)]);
  }
  function env(a, b, c, d) {
    if (typeof a === "number" || isNode3(a)) {
      return createNode("env", {}, [resolve(a), resolve(b), resolve(c)]);
    }
    return createNode("env", a, [resolve(b), resolve(c), resolve(d)]);
  }
  function z(a, b) {
    if (typeof a === "number" || isNode3(a)) {
      return createNode("z", {}, [resolve(a)]);
    }
    return createNode("z", a, [resolve(b)]);
  }
  function delay(a, b, c, d) {
    if (typeof a === "number" || isNode3(a)) {
      return createNode("delay", {}, [resolve(a), resolve(b), resolve(c)]);
    }
    return createNode("delay", a, [resolve(b), resolve(c), resolve(d)]);
  }
  function sdelay(props, x) {
    return createNode("sdelay", props, [resolve(x)]);
  }
  function prewarp(fc) {
    return createNode("prewarp", {}, [fc]);
  }
  function mm1p(a, b, c) {
    if (typeof a === "number" || isNode3(a)) {
      return createNode("mm1p", {}, [
        resolve(a),
        resolve(b)
      ]);
    }
    return createNode("mm1p", a, [
      resolve(b),
      resolve(c)
    ]);
  }
  function svf(a, b, c, d) {
    if (typeof a === "number" || isNode3(a)) {
      return createNode("svf", {}, [
        resolve(a),
        resolve(b),
        resolve(c)
      ]);
    }
    return createNode("svf", a, [
      resolve(b),
      resolve(c),
      resolve(d)
    ]);
  }
  function svfshelf(a, b, c, d, e) {
    if (typeof a === "number" || isNode3(a)) {
      return createNode("svfshelf", {}, [
        resolve(a),
        resolve(b),
        resolve(c),
        resolve(d)
      ]);
    }
    return createNode("svfshelf", a, [
      resolve(b),
      resolve(c),
      resolve(d),
      resolve(e)
    ]);
  }
  function biquad(a, b, c, d, e, f, g) {
    if (typeof a === "number" || isNode3(a)) {
      return createNode("biquad", {}, [
        resolve(a),
        resolve(b),
        resolve(c),
        resolve(d),
        resolve(e),
        resolve(f)
      ]);
    }
    return createNode("biquad", a, [
      resolve(b),
      resolve(c),
      resolve(d),
      resolve(e),
      resolve(f),
      resolve(g)
    ]);
  }
  function tapIn(props) {
    return createNode("tapIn", props, []);
  }
  function tapOut(props, x) {
    return createNode("tapOut", props, [resolve(x)]);
  }
  function meter(a, b) {
    if (typeof a === "number" || isNode3(a)) {
      return createNode("meter", {}, [resolve(a)]);
    }
    return createNode("meter", a, [resolve(b)]);
  }
  function snapshot(a, b, c) {
    if (typeof a === "number" || isNode3(a)) {
      return createNode("snapshot", {}, [resolve(a), resolve(b)]);
    }
    return createNode("snapshot", a, [resolve(b), resolve(c)]);
  }
  function scope(a, ...bs) {
    if (typeof a === "number" || isNode3(a)) {
      return createNode("scope", {}, [a, ...bs].map(resolve));
    }
    return createNode("scope", a, bs.map(resolve));
  }
  function fft(a, b) {
    if (typeof a === "number" || isNode3(a)) {
      return createNode("fft", {}, [resolve(a)]);
    }
    return createNode("fft", a, [resolve(b)]);
  }
  function capture(a, b, c) {
    if (typeof a === "number" || isNode3(a)) {
      return createNode("capture", {}, [resolve(a), resolve(b)]);
    }
    return createNode("capture", a, [resolve(b), resolve(c)]);
  }
  var dynamics_exports = {};
  __export(dynamics_exports, {
    compress: () => compress,
    skcompress: () => skcompress
  });
  var math_exports = {};
  __export(math_exports, {
    abs: () => abs,
    add: () => add2,
    and: () => and,
    asinh: () => asinh,
    ceil: () => ceil,
    cos: () => cos,
    div: () => div,
    eq: () => eq,
    exp: () => exp,
    floor: () => floor,
    ge: () => ge,
    geq: () => geq,
    identity: () => identity,
    le: () => le,
    leq: () => leq,
    ln: () => ln,
    log: () => log,
    log2: () => log2,
    max: () => max2,
    min: () => min2,
    mod: () => mod,
    mul: () => mul,
    or: () => or,
    pow: () => pow,
    round: () => round,
    sin: () => sin,
    sqrt: () => sqrt,
    sub: () => sub2,
    tan: () => tan,
    tanh: () => tanh
  });
  function identity(a, b) {
    return typeof a === "number" || isNode3(a) ? createNode("in", {}, [resolve(a)]) : typeof b === "number" || isNode3(b) ? createNode("in", a, [resolve(b)]) : createNode("in", a, []);
  }
  function sin(a, b) {
    return typeof a === "number" || isNode3(a) ? createNode("sin", {}, [resolve(a)]) : createNode("sin", a, [resolve(b)]);
  }
  function cos(a, b) {
    return typeof a === "number" || isNode3(a) ? createNode("cos", {}, [resolve(a)]) : createNode("cos", a, [resolve(b)]);
  }
  function tan(a, b) {
    return typeof a === "number" || isNode3(a) ? createNode("tan", {}, [resolve(a)]) : createNode("tan", a, [resolve(b)]);
  }
  function tanh(a, b) {
    return typeof a === "number" || isNode3(a) ? createNode("tanh", {}, [resolve(a)]) : createNode("tanh", a, [resolve(b)]);
  }
  function asinh(a, b) {
    return typeof a === "number" || isNode3(a) ? createNode("asinh", {}, [resolve(a)]) : createNode("asinh", a, [resolve(b)]);
  }
  function ln(a, b) {
    return typeof a === "number" || isNode3(a) ? createNode("ln", {}, [resolve(a)]) : createNode("ln", a, [resolve(b)]);
  }
  function log(a, b) {
    return typeof a === "number" || isNode3(a) ? createNode("log", {}, [resolve(a)]) : createNode("log", a, [resolve(b)]);
  }
  function log2(a, b) {
    return typeof a === "number" || isNode3(a) ? createNode("log2", {}, [resolve(a)]) : createNode("log2", a, [resolve(b)]);
  }
  function ceil(a, b) {
    return typeof a === "number" || isNode3(a) ? createNode("ceil", {}, [resolve(a)]) : createNode("ceil", a, [resolve(b)]);
  }
  function floor(a, b) {
    return typeof a === "number" || isNode3(a) ? createNode("floor", {}, [resolve(a)]) : createNode("floor", a, [resolve(b)]);
  }
  function round(a, b) {
    return typeof a === "number" || isNode3(a) ? createNode("round", {}, [resolve(a)]) : createNode("round", a, [resolve(b)]);
  }
  function sqrt(a, b) {
    return typeof a === "number" || isNode3(a) ? createNode("sqrt", {}, [resolve(a)]) : createNode("sqrt", a, [resolve(b)]);
  }
  function exp(a, b) {
    return typeof a === "number" || isNode3(a) ? createNode("exp", {}, [resolve(a)]) : createNode("exp", a, [resolve(b)]);
  }
  function abs(a, b) {
    return typeof a === "number" || isNode3(a) ? createNode("abs", {}, [resolve(a)]) : createNode("abs", a, [resolve(b)]);
  }
  function le(a, b, c) {
    if (typeof a === "number" || isNode3(a)) {
      return createNode("le", {}, [resolve(a), resolve(b)]);
    }
    return createNode("le", a, [resolve(b), resolve(c)]);
  }
  function leq(a, b, c) {
    if (typeof a === "number" || isNode3(a)) {
      return createNode("leq", {}, [resolve(a), resolve(b)]);
    }
    return createNode("leq", a, [resolve(b), resolve(c)]);
  }
  function ge(a, b, c) {
    if (typeof a === "number" || isNode3(a)) {
      return createNode("ge", {}, [resolve(a), resolve(b)]);
    }
    return createNode("ge", a, [resolve(b), resolve(c)]);
  }
  function geq(a, b, c) {
    if (typeof a === "number" || isNode3(a)) {
      return createNode("geq", {}, [resolve(a), resolve(b)]);
    }
    return createNode("geq", a, [resolve(b), resolve(c)]);
  }
  function pow(a, b, c) {
    if (typeof a === "number" || isNode3(a)) {
      return createNode("pow", {}, [resolve(a), resolve(b)]);
    }
    return createNode("pow", a, [resolve(b), resolve(c)]);
  }
  function eq(a, b, c) {
    if (typeof a === "number" || isNode3(a)) {
      return createNode("eq", {}, [resolve(a), resolve(b)]);
    }
    return createNode("eq", a, [resolve(b), resolve(c)]);
  }
  function and(a, b, c) {
    if (typeof a === "number" || isNode3(a)) {
      return createNode("and", {}, [resolve(a), resolve(b)]);
    }
    return createNode("and", a, [resolve(b), resolve(c)]);
  }
  function or(a, b, c) {
    if (typeof a === "number" || isNode3(a)) {
      return createNode("or", {}, [resolve(a), resolve(b)]);
    }
    return createNode("or", a, [resolve(b), resolve(c)]);
  }
  function add2(a, ...bs) {
    if (typeof a === "number" || isNode3(a)) {
      return createNode("add", {}, [a, ...bs].map(resolve));
    }
    return createNode("add", a, bs.map(resolve));
  }
  function sub2(a, ...bs) {
    if (typeof a === "number" || isNode3(a)) {
      return createNode("sub", {}, [a, ...bs].map(resolve));
    }
    return createNode("sub", a, bs.map(resolve));
  }
  function mul(a, ...bs) {
    if (typeof a === "number" || isNode3(a)) {
      return createNode("mul", {}, [a, ...bs].map(resolve));
    }
    return createNode("mul", a, bs.map(resolve));
  }
  function div(a, ...bs) {
    if (typeof a === "number" || isNode3(a)) {
      return createNode("div", {}, [a, ...bs].map(resolve));
    }
    return createNode("div", a, bs.map(resolve));
  }
  function mod(a, ...bs) {
    if (typeof a === "number" || isNode3(a)) {
      return createNode("mod", {}, [a, ...bs].map(resolve));
    }
    return createNode("mod", a, bs.map(resolve));
  }
  function min2(a, ...bs) {
    if (typeof a === "number" || isNode3(a)) {
      return createNode("min", {}, [a, ...bs].map(resolve));
    }
    return createNode("min", a, bs.map(resolve));
  }
  function max2(a, ...bs) {
    if (typeof a === "number" || isNode3(a)) {
      return createNode("max", {}, [a, ...bs].map(resolve));
    }
    return createNode("max", a, bs.map(resolve));
  }
  var signals_exports = {};
  __export(signals_exports, {
    db2gain: () => db2gain,
    gain2db: () => gain2db,
    hann: () => hann,
    ms2samps: () => ms2samps,
    select: () => select,
    tau2pole: () => tau2pole
  });
  var el = __spreadValues(__spreadValues({}, core_exports), math_exports);
  function ms2samps(t) {
    return el.mul(el.sr(), el.div(t, 1e3));
  }
  function tau2pole(t) {
    return el.exp(el.div(-1, el.mul(t, el.sr())));
  }
  function db2gain(db) {
    return el.pow(10, el.mul(db, 1 / 20));
  }
  function gain2db(gain) {
    return select(el.ge(gain, 0), el.max(-120, el.mul(20, el.log(gain))), -120);
  }
  function select(g, a, b) {
    return el.add(el.mul(g, a), el.mul(el.sub(1, g), b));
  }
  function hann(t) {
    return el.mul(0.5, el.sub(1, el.cos(el.mul(2 * Math.PI, t))));
  }
  var el2 = __spreadValues(__spreadValues(__spreadValues({}, core_exports), math_exports), signals_exports);
  function compress(atkMs, relMs, threshold, ratio, sidechain, xn) {
    const env2 = el2.env(el2.tau2pole(el2.mul(1e-3, atkMs)), el2.tau2pole(el2.mul(1e-3, relMs)), sidechain);
    const envDecibels = el2.gain2db(env2);
    const adjustedRatio = el2.sub(1, el2.div(1, ratio));
    const gain = el2.mul(adjustedRatio, el2.sub(threshold, envDecibels));
    const cleanGain = el2.min(0, gain);
    const compressedGain = el2.db2gain(cleanGain);
    return el2.mul(xn, compressedGain);
  }
  function skcompress(atkMs, relMs, threshold, ratio, kneeWidth, sidechain, xn) {
    const env2 = el2.env(el2.tau2pole(el2.mul(1e-3, atkMs)), el2.tau2pole(el2.mul(1e-3, relMs)), sidechain);
    const envDecibels = el2.gain2db(env2);
    const lowerKneeBound = el2.sub(threshold, el2.div(kneeWidth, 2));
    const upperKneeBound = el2.add(threshold, el2.div(kneeWidth, 2));
    const isInSoftKneeRange = el2.and(el2.geq(envDecibels, lowerKneeBound), el2.leq(envDecibels, upperKneeBound));
    const adjustedRatio = el2.sub(1, el2.div(1, ratio));
    const gain = el2.select(isInSoftKneeRange, el2.mul(el2.div(adjustedRatio, 2), el2.mul(el2.div(el2.sub(envDecibels, lowerKneeBound), kneeWidth), el2.sub(lowerKneeBound, envDecibels))), el2.mul(adjustedRatio, el2.sub(threshold, envDecibels)));
    const cleanGain = el2.min(0, gain);
    const compressedGain = el2.db2gain(cleanGain);
    return el2.mul(xn, compressedGain);
  }
  var envelopes_exports = {};
  __export(envelopes_exports, {
    adsr: () => adsr
  });
  var filters_exports = {};
  __export(filters_exports, {
    allpass: () => allpass,
    bandpass: () => bandpass,
    dcblock: () => dcblock,
    df11: () => df11,
    highpass: () => highpass,
    highshelf: () => highshelf,
    lowpass: () => lowpass,
    lowshelf: () => lowshelf,
    notch: () => notch,
    peak: () => peak,
    pink: () => pink,
    sm: () => sm,
    smooth: () => smooth,
    zero: () => zero
  });
  var el3 = __spreadValues(__spreadValues(__spreadValues({}, core_exports), math_exports), signals_exports);
  function smooth(a, b, c) {
    if (typeof a === "number" || isNode3(a)) {
      return el3.pole(a, el3.mul(el3.sub(1, a), b));
    }
    return el3.pole(a, b, el3.mul(el3.sub(1, b), c));
  }
  function sm(a, b) {
    if (typeof a === "number" || isNode3(a)) {
      return smooth(el3.tau2pole(0.02), a);
    }
    return smooth(a, el3.tau2pole(0.02), b);
  }
  function zero(a, b, c, d) {
    let [b0, b1, x] = typeof a === "number" || isNode3(a) ? [a, b, c] : [b, c, d];
    return el3.sub(el3.mul(b0, x), el3.mul(b1, el3.z(x)));
  }
  function dcblock(a, b) {
    let x = typeof a === "number" || isNode3(a) ? a : b;
    return el3.pole(0.995, zero(1, 1, x));
  }
  function df11(a, b, c, d, e) {
    let [b0, b1, a1, x] = typeof a === "number" || isNode3(a) ? [a, b, c, d] : [b, c, d, e];
    return el3.pole(a1, zero(b0, b1, x));
  }
  function lowpass(a, b, c, d) {
    if (typeof a === "number" || isNode3(a)) {
      return el3.svf({ mode: "lowpass" }, a, b, c);
    }
    return el3.svf(Object.assign({}, a, { mode: "lowpass" }), b, c, d);
  }
  function highpass(a, b, c, d) {
    if (typeof a === "number" || isNode3(a)) {
      return el3.svf({ mode: "highpass" }, a, b, c);
    }
    return el3.svf(Object.assign({}, a, { mode: "highpass" }), b, c, d);
  }
  function bandpass(a, b, c, d) {
    if (typeof a === "number" || isNode3(a)) {
      return el3.svf({ mode: "bandpass" }, a, b, c);
    }
    return el3.svf(Object.assign({}, a, { mode: "bandpass" }), b, c, d);
  }
  function notch(a, b, c, d) {
    if (typeof a === "number" || isNode3(a)) {
      return el3.svf({ mode: "notch" }, a, b, c);
    }
    return el3.svf(Object.assign({}, a, { mode: "notch" }), b, c, d);
  }
  function allpass(a, b, c, d) {
    if (typeof a === "number" || isNode3(a)) {
      return el3.svf({ mode: "allpass" }, a, b, c);
    }
    return el3.svf(Object.assign({}, a, { mode: "allpass" }), b, c, d);
  }
  function peak(a, b, c, d, e) {
    if (typeof a === "number" || isNode3(a)) {
      return el3.svfshelf({ mode: "peak" }, a, b, c, d);
    }
    return el3.svfshelf(Object.assign({}, a, { mode: "peak" }), b, c, d, e);
  }
  function lowshelf(a, b, c, d, e) {
    if (typeof a === "number" || isNode3(a)) {
      return el3.svfshelf({ mode: "lowshelf" }, a, b, c, d);
    }
    return el3.svfshelf(Object.assign({}, a, { mode: "lowshelf" }), b, c, d, e);
  }
  function highshelf(a, b, c, d, e) {
    if (typeof a === "number" || isNode3(a)) {
      return el3.svfshelf({ mode: "highshelf" }, a, b, c, d);
    }
    return el3.svfshelf(Object.assign({}, a, { mode: "highshelf" }), b, c, d, e);
  }
  function pink(a, b) {
    let x = typeof a === "number" || isNode3(a) ? a : b;
    let clip = (min32, max32, x2) => el3.min(max32, el3.max(min32, x2));
    return clip(-1, 1, el3.mul(el3.db2gain(-30), el3.add(el3.pole(0.99765, el3.mul(x, 0.099046)), el3.pole(0.963, el3.mul(x, 0.2965164)), el3.pole(0.57, el3.mul(x, 1.0526913)), el3.mul(0.1848, x))));
  }
  var el4 = __spreadValues(__spreadValues(__spreadValues(__spreadValues({}, core_exports), math_exports), filters_exports), signals_exports);
  function adsr(a_, b_, c_, d_, e_, f_) {
    let children = typeof a_ === "number" || isNode3(a_) ? [a_, b_, c_, d_, e_] : [b_, c_, d_, e_, f_];
    let [a, d, s, r, g] = children;
    let atkSamps = el4.mul(a, el4.sr());
    let atkGate = el4.le(el4.counter(g), atkSamps);
    let target = el4.select(g, el4.select(atkGate, 1, s), 0);
    let t60 = el4.select(g, el4.select(atkGate, a, d), r);
    let p = el4.tau2pole(el4.div(t60, 6.91));
    return el4.smooth(p, target);
  }
  var oscillators_exports = {};
  __export(oscillators_exports, {
    blepsaw: () => blepsaw,
    blepsquare: () => blepsquare,
    bleptriangle: () => bleptriangle,
    cycle: () => cycle,
    noise: () => noise,
    pinknoise: () => pinknoise,
    saw: () => saw,
    square: () => square,
    train: () => train,
    triangle: () => triangle
  });
  var el5 = __spreadValues(__spreadValues(__spreadValues({}, core_exports), math_exports), filters_exports);
  function train(a, b) {
    if (typeof a === "number" || isNode3(a)) {
      return el5.le(el5.phasor(a, 0), 0.5);
    }
    return el5.le(el5.phasor(a, b, 0), 0.5);
  }
  function cycle(a, b) {
    return typeof a === "number" || isNode3(a) ? el5.sin(el5.mul(2 * Math.PI, el5.phasor(a, 0))) : el5.sin(el5.mul(2 * Math.PI, el5.phasor(a, b, 0)));
  }
  function saw(a, b) {
    return typeof a === "number" || isNode3(a) ? el5.sub(el5.mul(2, el5.phasor(a, 0)), 1) : el5.sub(el5.mul(2, el5.phasor(a, b, 0)), 1);
  }
  function square(a, b) {
    return typeof a === "number" || isNode3(a) ? el5.sub(el5.mul(2, train(a)), 1) : el5.sub(el5.mul(2, train(a, b)), 1);
  }
  function triangle(a, b) {
    return typeof a === "number" || isNode3(a) ? el5.mul(2, el5.sub(0.5, el5.abs(saw(a)))) : el5.mul(2, el5.sub(0.5, el5.abs(saw(a, b))));
  }
  function blepsaw(a, b) {
    let hasProps = !(typeof a === "number" || isNode3(a));
    let rate = hasProps ? b : a;
    return createNode("blepsaw", {}, [rate]);
  }
  function blepsquare(a, b) {
    let hasProps = !(typeof a === "number" || isNode3(a));
    let rate = hasProps ? b : a;
    return createNode("blepsquare", {}, [rate]);
  }
  function bleptriangle(a, b) {
    let hasProps = !(typeof a === "number" || isNode3(a));
    let rate = hasProps ? b : a;
    return createNode("bleptriangle", {}, [rate]);
  }
  function noise(a) {
    if (typeof a === "undefined") {
      return el5.sub(el5.mul(2, el5.rand()), 1);
    }
    return el5.sub(el5.mul(2, el5.rand(a)), 1);
  }
  function pinknoise(a) {
    if (typeof a === "undefined") {
      return el5.pink(noise());
    }
    return el5.pink(noise(a));
  }
  var stdlib = __spreadProps(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues({}, core_exports), dynamics_exports), envelopes_exports), filters_exports), math_exports), oscillators_exports), signals_exports), {
    "const": constant,
    "in": identity
  });
  var InstructionTypes = {
    CREATE_NODE: 0,
    DELETE_NODE: 1,
    APPEND_CHILD: 2,
    SET_PROPERTY: 3,
    ACTIVATE_ROOTS: 4,
    COMMIT_UPDATES: 5
  };
  var Delegate = class {
    constructor() {
      this.nodeMap = /* @__PURE__ */ new Map();
      this.currentActiveRoots = /* @__PURE__ */ new Set();
      this.clear();
    }
    clear() {
      this.nodesAdded = 0;
      this.nodesRemoved = 0;
      this.edgesAdded = 0;
      this.propsWritten = 0;
      this.batch = {
        createNode: [],
        deleteNode: [],
        appendChild: [],
        setProperty: [],
        activateRoots: [],
        commitUpdates: []
      };
    }
    getNodeMap() {
      return this.nodeMap;
    }
    getTerminalGeneration() {
      return 4;
    }
    createNode(hash, type) {
      this.nodesAdded++;
      this.batch.createNode.push([InstructionTypes.CREATE_NODE, hash, type]);
    }
    deleteNode(hash) {
      this.nodesRemoved++;
      this.batch.deleteNode.push([InstructionTypes.DELETE_NODE, hash]);
    }
    appendChild(parentHash, childHash) {
      this.edgesAdded++;
      this.batch.appendChild.push([InstructionTypes.APPEND_CHILD, parentHash, childHash]);
    }
    setProperty(hash, key, value) {
      this.propsWritten++;
      this.batch.setProperty.push([InstructionTypes.SET_PROPERTY, hash, key, value]);
    }
    activateRoots(roots) {
      let alreadyActive = roots.length === this.currentActiveRoots.size && roots.every((root) => this.currentActiveRoots.has(root));
      if (!alreadyActive) {
        this.batch.activateRoots.push([InstructionTypes.ACTIVATE_ROOTS, roots]);
        this.currentActiveRoots = new Set(roots);
      }
    }
    commitUpdates() {
      this.batch.commitUpdates.push([InstructionTypes.COMMIT_UPDATES]);
    }
    getPackedInstructions() {
      return [
        ...this.batch.createNode,
        ...this.batch.deleteNode,
        ...this.batch.appendChild,
        ...this.batch.setProperty,
        ...this.batch.activateRoots,
        ...this.batch.commitUpdates
      ];
    }
  };
  function now() {
    if (typeof performance === "undefined") {
      return Date.now();
    }
    return performance.now();
  }
  var Renderer = class {
    constructor(sendMessage) {
      this._delegate = new Delegate();
      this._sendMessage = sendMessage;
      this._nextRefId = 0;
    }
    createRef(kind, props, children) {
      let key = `__refKey:${this._nextRefId++}`;
      let node = createNode(kind, Object.assign({ key }, props), children);
      let setter = (newProps) => {
        if (!this._delegate.nodeMap.has(node.hash)) {
          throw new Error("Cannot update a ref that has not been mounted; make sure you render your node first");
        }
        const nodeMapCopy = this._delegate.nodeMap.get(node.hash);
        this._delegate.clear();
        updateNodeProps(this._delegate, node.hash, nodeMapCopy.props, newProps);
        this._delegate.commitUpdates();
        const instructions = this._delegate.getPackedInstructions();
        return Promise.resolve(this._sendMessage(instructions));
      };
      return [node, setter];
    }
    render(...args) {
      const t0 = now();
      this._delegate.clear();
      renderWithDelegate2(this._delegate, args.map(resolve));
      const t1 = now();
      const instructions = this._delegate.getPackedInstructions();
      return Promise.resolve(this._sendMessage(instructions)).then((result) => {
        return {
          result,
          nodesAdded: this._delegate.nodesAdded,
          edgesAdded: this._delegate.edgesAdded,
          propsWritten: this._delegate.propsWritten,
          elapsedTimeMs: t1 - t0
        };
      });
    }
  };

  // node_modules/@thi.ng/arrays/argmin.js
  var argMin = (buf, min5 = Infinity, pred = (a, b) => a < b) => {
    let id = -1;
    for (let i = 0, n = buf.length; i < n; i++) {
      const x = buf[i];
      if (pred(x, min5)) {
        min5 = x;
        id = i;
      }
    }
    return id;
  };
  var argMax = (items, min5 = -Infinity, pred = (a, b) => a > b) => argMin(items, min5, pred);

  // node_modules/@thi.ng/compare/compare.js
  var compare = (a, b) => {
    if (a === b) {
      return 0;
    }
    if (a == null) {
      return b == null ? 0 : -1;
    }
    if (b == null) {
      return a == null ? 0 : 1;
    }
    if (typeof a.compare === "function") {
      return a.compare(b);
    }
    if (typeof b.compare === "function") {
      return -b.compare(a);
    }
    return a < b ? -1 : a > b ? 1 : 0;
  };

  // node_modules/@thi.ng/errors/deferror.js
  var defError = (prefix, suffix = (msg) => msg !== void 0 ? ": " + msg : "") => class extends Error {
    origMessage;
    constructor(msg) {
      super(prefix(msg) + suffix(msg));
      this.origMessage = msg !== void 0 ? String(msg) : "";
    }
  };

  // node_modules/@thi.ng/errors/assert.js
  var import_meta = {};
  var AssertionError = defError(() => "Assertion failed");
  var assert = (typeof process !== "undefined" && process.env !== void 0 ? true : import_meta.env ? import_meta.env.MODE !== "production" || !!import_meta.env.UMBRELLA_ASSERTS || !!import_meta.env.VITE_UMBRELLA_ASSERTS : true) ? (test2, msg) => {
    if (typeof test2 === "function" && !test2() || !test2) {
      throw new AssertionError(
        typeof msg === "function" ? msg() : msg
      );
    }
  } : () => {
  };

  // node_modules/@thi.ng/compare/numeric.js
  var compareNumAsc = (a, b) => a - b;

  // node_modules/@thi.ng/arrays/binary-search.js
  var binarySearch = (buf, x, key = (x2) => x2, cmp = compare, low = 0, high = buf.length - 1) => {
    const kx = key(x);
    while (low <= high) {
      const mid = low + high >>> 1;
      const c = cmp(key(buf[mid]), kx);
      if (c < 0) {
        low = mid + 1;
      } else if (c > 0) {
        high = mid - 1;
      } else {
        return mid;
      }
    }
    return -low - 1;
  };

  // node_modules/@thi.ng/checks/is-arraylike.js
  var isArrayLike = (x) => x != null && typeof x !== "function" && x.length !== void 0;

  // node_modules/@thi.ng/arrays/peek.js
  var peek = (buf) => buf[buf.length - 1];

  // node_modules/@thi.ng/random/arandom.js
  var INV_MAX = 1 / 2 ** 32;
  var ARandom = class {
    float(norm2 = 1) {
      return this.int() * INV_MAX * norm2;
    }
    probability(p) {
      return this.float() < p;
    }
    norm(norm2 = 1) {
      return (this.int() * INV_MAX - 0.5) * 2 * norm2;
    }
    normMinMax(min5, max5) {
      const x = this.minmax(min5, max5);
      return this.float() < 0.5 ? x : -x;
    }
    minmax(min5, max5) {
      return this.float() * (max5 - min5) + min5;
    }
    minmaxInt(min5, max5) {
      min5 |= 0;
      const range2 = (max5 | 0) - min5;
      return range2 ? min5 + this.int() % range2 : min5;
    }
    minmaxUint(min5, max5) {
      min5 >>>= 0;
      const range2 = (max5 >>> 0) - min5;
      return range2 ? min5 + this.int() % range2 : min5;
    }
  };

  // node_modules/@thi.ng/errors/illegal-arity.js
  var IllegalArityError = defError(() => "illegal arity");
  var illegalArity = (n) => {
    throw new IllegalArityError(n);
  };

  // node_modules/@thi.ng/errors/unsupported.js
  var UnsupportedOperationError = defError(
    () => "unsupported operation"
  );
  var unsupported = (msg) => {
    throw new UnsupportedOperationError(msg);
  };

  // dsp/RefMap.js
  var import_invariant2 = __toESM(require_browser(), 1);
  var RefMap = class {
    constructor(core2) {
      this._map = /* @__PURE__ */ new Map();
      this._core = core2;
    }
    get size() {
      return this._map.size;
    }
    get keys() {
      return this._map.keys();
    }
    has(name) {
      (0, import_invariant2.default)(this._map.has(name), `Ref ${name} not found`);
      return this._map.has(name);
    }
    getOrCreate(name, type, props, children) {
      if (!this._map.has(name)) {
        let ref = this._core.createRef(type, props, children);
        this._map.set(name, ref);
      }
      (0, import_invariant2.default)(this._map.get(name)[0], `Node not found for ref ${name}`);
      return this._map.get(name)[0];
    }
    get(name) {
      (0, import_invariant2.default)(this._map.has(name), `Ref ${name} not found`);
      return this._map.get(name)[0];
    }
    update(name, props) {
      (0, import_invariant2.default)(this._map.has(name), `Trying to update a ref to ${name} that doesn't exist`);
      let [node, setter] = this._map.get(name);
      setter(props);
    }
  };

  // node_modules/@thi.ng/math/api.js
  var PI = Math.PI;
  var TAU = PI * 2;
  var HALF_PI = PI / 2;
  var THIRD_PI = PI / 3;
  var QUARTER_PI = PI / 4;
  var SIXTH_PI = PI / 6;
  var INV_PI = 1 / PI;
  var INV_TAU = 1 / TAU;
  var INV_HALF_PI = 1 / HALF_PI;
  var DEG2RAD = PI / 180;
  var RAD2DEG = 180 / PI;
  var PHI = (1 + Math.sqrt(5)) / 2;
  var SQRT2 = Math.SQRT2;
  var SQRT3 = Math.sqrt(3);
  var SQRT2_2 = SQRT2 / 2;
  var SQRT3_2 = SQRT3 / 2;
  var THIRD = 1 / 3;
  var TWO_THIRD = 2 / 3;
  var SIXTH = 1 / 6;
  var EPS = 1e-6;

  // node_modules/@thi.ng/math/abs.js
  var absDiff = (a, b) => Math.abs(a - b);

  // node_modules/@thi.ng/math/easing.js
  var { cos: cos2, sin: sin2, sqrt: sqrt2 } = Math;
  var defEaseInExp = (k) => (t) => t ** k;
  var defEaseOutExp = (k) => (t) => 1 - (1 - t) ** k;
  var defEaseInOutExp = (k) => {
    const k2 = 2 ** (k - 1);
    return (t) => t < 0.5 ? k2 * t ** k : 1 - (-2 * t + 2) ** k / 2;
  };
  var easeIn2 = defEaseInExp(2);
  var easeOut2 = defEaseOutExp(2);
  var easeInOut2 = defEaseInOutExp(2);
  var easeIn3 = defEaseInExp(3);
  var easeOut3 = defEaseOutExp(3);
  var easeInOut3 = defEaseInOutExp(3);
  var easeIn4 = defEaseInExp(4);
  var easeOut4 = defEaseOutExp(4);
  var easeInOut4 = defEaseInOutExp(4);
  var easeIn5 = defEaseInExp(5);
  var easeOut5 = defEaseOutExp(5);
  var easeInOut5 = defEaseInOutExp(5);

  // node_modules/@thi.ng/math/interval.js
  var clamp = (x, min5, max5) => x < min5 ? min5 : x > max5 ? max5 : x;

  // node_modules/@thi.ng/math/fit.js
  var norm = (x, a, b) => b !== a ? (x - a) / (b - a) : 0;

  // node_modules/@thi.ng/math/mix.js
  var mix = (a, b, t) => a + (b - a) * t;

  // node_modules/@thi.ng/random/constants.js
  var DEFAULT_SEED_32 = 3737844653;
  var DEFAULT_SEED_128 = [
    3737844653,
    799659867,
    3827263459,
    1552149530
  ];
  var DEFAULT_SEED_160 = [...DEFAULT_SEED_128, 4137311345];

  // node_modules/@thi.ng/random/smush32.js
  var Smush32 = class extends ARandom {
    buffer;
    constructor(seed = DEFAULT_SEED_32) {
      super();
      this.buffer = new Uint32Array([seed, 0]);
    }
    copy() {
      const gen = new Smush32();
      gen.buffer.set(this.buffer);
      return gen;
    }
    seed(s) {
      this.buffer.set([s, 0]);
      return this;
    }
    int() {
      const b = this.buffer;
      const m = 1540483477;
      const k = b[1]++ * m >>> 0;
      const s = b[0] = (k ^ k >> 24 ^ b[0] * m >>> 0) * m >>> 0;
      return (s ^ s >>> 13) >>> 0;
    }
  };

  // dsp/OEIS-Structures.ts
  function normalizeSequences(sequences) {
    return sequences.map((sequence) => {
      const max5 = Math.max(...sequence);
      return sequence.map((value) => value / max5);
    });
  }
  function updateStructureConstants(refs2, srvbSettings) {
    if (!srvbSettings || !refs2)
      return;
    OEIS_SEQUENCES[srvbSettings.structure].forEach((value, i) => {
      if (value !== void 0)
        refs2.update(`node:structureConst:${i}`, { value });
    });
  }
  function buildStructures(refs2, currStructIndex = 0) {
    {
      let series = OEIS_SEQUENCES[currStructIndex];
      const seriesMax = series[argMax(series)];
      const sequenceAsSignals = castSequencesToRefs(series, seriesMax, refs2);
      if (!sequenceAsSignals)
        return;
      const sd = {
        consts: sequenceAsSignals,
        max: seriesMax
      };
      return sd;
    }
  }
  function castSequencesToRefs(series, seriesMax, refs2) {
    return series.map((value, j) => {
      let updatedValue = value;
      if (value === null || value === void 0) {
        updatedValue = Math.random() * seriesMax;
      }
      const t = refs2.getOrCreate(
        `node:structureConst:${j}`,
        "const",
        { value: updatedValue, key: `key:structureConst:${j}` },
        []
      );
      return t;
    });
  }

  // dsp/srvb-er.ts
  var smush = new Smush32(3405691582);
  var OEIS_SEQUENCES_16 = [
    [39, 31, 23, 17, 34, 68, 76, 63, 50, 37, 28, 20, 55, 110, 123, 102],
    // A035506		Stolarsky array read by antidiagonals.  ⭐️⭐️⭐️⭐️
    [16, 22, 31, 40, 52, 68, 90, 121, 152, 192, 244, 312, 402, 523, 644, 796],
    //  A007604		a(n) = a(n-1) + a(n-1-(number of odd terms so far))
    [22, 37, 21, 59, 27, 43, 24, 83, 35, 53, 26, 31, 20, 29, 18, 67],
    // A227413		a(1)=1, a(2n)=nthprime(a(n)), a(2n+1)=nthcomposite(a(n)), where nthprime = A000040, nthcomposite = A002808.
    [17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79],
    // A000040		The prime numbers: a(n) = n-th prime.
    [17, 6, 33, 10, 65, 7, 129, 18, 11, 257, 513, 34, 1025, 13, 19, 66],
    // 		Inverse of sequence A052330 considered as a permutation of the natural numbers.
    [17, 19, 23, 26, 30, 35, 40, 46, 52, 60, 67, 77, 87, 98, 111, 124],
    // A000607		Number of partitions of n into prime parts.
    [13, 18, 23, 30, 37, 47, 57, 70, 84, 101, 119, 141, 164, 192, 221, 255],
    // A01401 Number of partitions of n into at most 5 parts.
    [34, 47, 62, 79, 97, 118, 141, 166, 192, 221, 253, 285, 320, 357, 395, 436],
    // A064356		Dimension of J_(12n,n+1), the Jacobi form of weight 12n and index n+1.
    [17, 12, 26, 18, 37, 27, 54, 38, 76, 54, 106, 76, 145, 104, 199, 142],
    // A096441		Number of palindromic and unimodal compositions of n. 
    [15, 18, 22, 27, 32, 38, 46, 54, 64, 76, 89, 104, 122, 142, 165, 192],
    // A000009 number of partitions of n into distinct parts; number of partitions of n into odd parts.
    [97, 66, 53, 35, 26, 144, 322, 267, 301, 212, 157, 107, 86, 57, 43, 28],
    // A199535		Clark Kimberling's even first column Stolarsky array read by antidiagonals.  quite large
    [16, 42, 20, 32, 24, 52, 18, 40, 24, 36, 28, 58, 16, 60, 30, 36],
    // A000010		Euler totient function phi(n)
    [17, 34, 13, 28, 25, 46, 75, 42, 69, 104, 37, 62, 95, 58, 55, 86],
    // A316667		Squares visited by a knight moving on a spirally numbered board always to the lowest available unvisited square.
    [17, 21, 26, 31, 37, 45, 53, 63, 75, 88, 103, 121, 141, 164, 191, 221],
    // A111133		Number of partitions of n into at least two distinct parts.
    [16, 22, 29, 37, 46, 56, 67, 79, 92, 106, 121, 137, 154, 172, 191, 211],
    // A000124		Central polygonal numbers (the Lazy Caterer's sequence)
    [17, 43, 16, 44, 15, 45, 14, 46, 79, 113, 78, 114, 77, 39, 78, 38]
    // A005132		Recamán's sequence
  ];
  var OEIS_SEQUENCES = OEIS_SEQUENCES_16.map((seq3) => seq3.slice(0, 8));
  var NUM_SEQUENCES = OEIS_SEQUENCES.length - 1;
  var OEIS_NORMALISED = normalizeSequences(OEIS_SEQUENCES);
  var H8 = [
    [1, 1, 1, 1, 1, 1, 1, 1],
    [1, -1, 1, -1, 1, -1, 1, -1],
    [1, 1, -1, -1, 1, 1, -1, -1],
    [1, -1, -1, 1, 1, -1, -1, 1],
    [1, 1, 1, 1, -1, -1, -1, -1],
    [1, -1, 1, -1, -1, 1, -1, 1],
    [1, 1, -1, -1, -1, -1, 1, 1],
    [1, -1, -1, 1, -1, 1, 1, -1]
  ];
  function diffuse(props, ...ins) {
    const { maxLengthSamp } = props;
    const structure = props.structure;
    const len = ins.length;
    const diffusionStageLevel = () => {
      const baseAtt = Math.sqrt(1 / len);
      return baseAtt;
    };
    const dels = ins.map(function(input, i) {
      return stdlib.delay(
        { size: maxLengthSamp, key: `srvb-diff:${i}` },
        stdlib.smooth(stdlib.tau2pole(i * 0.21), structure[i % structure.length]),
        0,
        input
      );
    });
    return H8.map(function(row, i) {
      return stdlib.add(
        ...row.map(function(col, j) {
          return stdlib.mul(col, diffusionStageLevel(), dels[j]);
        })
      );
    });
  }
  function dampFDN(props, ...ins) {
    const len = ins.length / 2;
    const { size, decay } = props;
    const { sampleRate } = props;
    const structure = props.structureArray;
    const structureMax = props.structureMax;
    const tapDelayLevel = (i) => {
      const baseAtt = Math.sqrt(1 / len);
      const normStruct = stdlib.max(
        stdlib.db2gain(-35),
        stdlib.sub(1 + EPS, stdlib.div(structure[i % structure.length], structureMax))
      );
      return stdlib.min(stdlib.db2gain(-0.5), stdlib.mul(normStruct, baseAtt));
    };
    const dels = ins.map(function(input, i) {
      return stdlib.add(
        // two many instances of the filter, moving to output
        //  toneDial(input, structure[i]),
        input,
        stdlib.mul(
          1 + EPS,
          decay,
          stdlib.smooth(25e-4, stdlib.tapIn({ name: `srvb:fdn${i}` }))
        )
      );
    });
    let mix2 = H8.map(function(row, i) {
      return stdlib.add(
        ...row.map(function(col, j) {
          return stdlib.mul(col, tapDelayLevel(i), dels[j]);
        })
      );
    });
    return mix2.map(function(mm, i) {
      const ms2samps2 = (ms) => sampleRate * (ms / 1e3);
      const delayScale = stdlib.mul(
        stdlib.add(1, stdlib.sm(size)),
        stdlib.ms2samps(stdlib.smooth(stdlib.tau2pole(i * 0.25), structure[i % structure.length]))
      );
      return stdlib.tapOut(
        { name: `srvb:fdn${i}` },
        stdlib.delay({ size: ms2samps2(137) }, delayScale, 0, mm)
      );
    });
  }
  function SRVB(props, inputs, ...structureArray) {
    const { sampleRate, key, structureMax, tone } = props;
    const level = stdlib.sm(props.mix);
    const position = stdlib.sm(props.position);
    const ms2samps2 = (ms) => sampleRate * (ms / 1e3);
    const toneDial = (input, offset) => {
      const dial = stdlib.smooth(stdlib.tau2pole(0.5), stdlib.le(tone, 0));
      const fcLPF = stdlib.add(
        48,
        stdlib.mul(stdlib.add(12e3, offset), stdlib.sub(1, stdlib.abs(tone)))
      );
      return stdlib.select(
        dial,
        // darker
        stdlib.svf(
          fcLPF,
          stdlib.div(1, stdlib.square(offset)),
          stdlib.mul(stdlib.db2gain(0.5), input)
        ),
        // brighter
        stdlib.svfshelf(
          { mode: "highshelf" },
          stdlib.add(650, offset),
          0.5,
          stdlib.mul(tone, stdlib.db2gain(6)),
          stdlib.mul(stdlib.db2gain(-1), input)
        )
      );
    };
    const [xl, xr] = inputs;
    const feedforward = (channel, _x) => stdlib.tapOut({ name: "srvbOut:" + channel }, stdlib.tanh(_x));
    const zero2 = stdlib.const({ value: 0, key: "mute::srvb" });
    let structurePositioning = (x, i) => {
      const scanDt = scanSequence(props.position, OEIS_NORMALISED[props.structure]);
      const scanG = scanSequence(props.position, OEIS_NORMALISED[props.structure].reverse());
      return stdlib.delay(
        { key: `downmix:${i}`, size: ms2samps2(55) },
        // delay time normalised by structure
        stdlib.mul(stdlib.sub(1.05, props.size), scanDt),
        // minimum feedback
        0,
        // node input, normalised by structure
        stdlib.mul(scanG, x)
      );
    };
    const scanSequence = (index, values) => {
      let result = stdlib.const({ key: `NORMOEIS_-1`, value: values[values.length - 1] });
      for (let i = values.length - 2; i >= 0; i--) {
        result = stdlib.select(
          index,
          stdlib.const({ key: `NORMOEIS_${i}`, value: values[i] }),
          result
        );
      }
      return result;
    };
    const _xl = stdlib.dcblock(xl);
    const _xr = stdlib.dcblock(xr);
    const mid = stdlib.mul(0.5, stdlib.add(_xl, _xr));
    const side = stdlib.mul(0.5, stdlib.sub(_xl, _xr));
    const four = [xl, xr, mid, side].map((x, i) => {
      return structurePositioning(toneDial(x, structureArray[i * 2 % structureArray.length]), i);
    });
    const eight = [...four, ...four.map((x, i) => {
      return x;
    })];
    const d1 = diffuse(
      { structure: structureArray, structureMax, maxLengthSamp: ms2samps2(43) },
      ...eight
    );
    let r0 = dampFDN(
      {
        name: `r0:`,
        sampleRate,
        structureArray,
        structureMax,
        tone: props.tone,
        size: props.size,
        decay: stdlib.mul(props.decay, 0.7)
      },
      ...d1
    );
    let pos = (i, x) => {
      return stdlib.mul(x, stdlib.sin(i * 360));
    };
    const asLeftPan = (x) => {
      return stdlib.select(position, x, stdlib.mul(x, stdlib.db2gain(1.5)));
    };
    const asRightPan = (x) => {
      return stdlib.select(position, stdlib.mul(x, stdlib.db2gain(1.5)), x);
    };
    let yl = feedforward(0, asLeftPan(stdlib.add(pos(0, r0[0]), pos(2, r0[2]), pos(4, r0[4]), pos(6, r0[6]))));
    let yr = feedforward(1, asRightPan(stdlib.add(pos(1, r0[1]), pos(3, r0[3]), pos(5, r0[5]), pos(7, r0[7]))));
    if (props.srvbBypass)
      return [feedforward(0, xl), feedforward(1, xr)];
    else
      return [stdlib.mul(level, yl), stdlib.mul(level, yr)];
  }

  // node_modules/@thi.ng/ramp/domain.js
  var unconstrained = (t) => t;

  // node_modules/@thi.ng/checks/is-iterable.js
  var isIterable = (x) => x != null && typeof x[Symbol.iterator] === "function";

  // node_modules/@thi.ng/transducers/compr.js
  var compR = (rfn, fn) => [rfn[0], rfn[1], fn];

  // node_modules/@thi.ng/api/api.js
  var SEMAPHORE = Symbol();
  var NO_OP = () => {
  };

  // node_modules/@thi.ng/checks/implements-function.js
  var implementsFunction = (x, fn) => x != null && typeof x[fn] === "function";

  // node_modules/@thi.ng/transducers/ensure.js
  var ensureTransducer = (x) => implementsFunction(x, "xform") ? x.xform() : x;

  // node_modules/@thi.ng/api/fn.js
  var identity2 = (x) => x;

  // node_modules/@thi.ng/transducers/reduced.js
  var Reduced = class {
    value;
    constructor(val) {
      this.value = val;
    }
    deref() {
      return this.value;
    }
  };
  var reduced = (x) => new Reduced(x);
  var isReduced = (x) => x instanceof Reduced;
  var ensureReduced = (x) => x instanceof Reduced ? x : new Reduced(x);
  var unreduced = (x) => x instanceof Reduced ? x.deref() : x;

  // node_modules/@thi.ng/transducers/reduce.js
  var __parseArgs = (args) => args.length === 2 ? [void 0, args[1]] : args.length === 3 ? [args[1], args[2]] : illegalArity(args.length);
  function reduce(...args) {
    const rfn = args[0];
    const init = rfn[0];
    const complete = rfn[1];
    const reduce2 = rfn[2];
    args = __parseArgs(args);
    const acc = args[0] == null ? init() : args[0];
    const src = args[1];
    return unreduced(
      complete(
        implementsFunction(src, "$reduce") ? src.$reduce(reduce2, acc) : isArrayLike(src) ? __reduceArray(reduce2, acc, src) : __reduceIterable(reduce2, acc, src)
      )
    );
  }
  var __reduceArray = (rfn, acc, src) => {
    for (let i = 0, n = src.length; i < n; i++) {
      acc = rfn(acc, src[i]);
      if (isReduced(acc)) {
        acc = acc.deref();
        break;
      }
    }
    return acc;
  };
  var __reduceIterable = (rfn, acc, src) => {
    for (let x of src) {
      acc = rfn(acc, x);
      if (isReduced(acc)) {
        acc = acc.deref();
        break;
      }
    }
    return acc;
  };
  var reducer = (init, rfn) => [init, identity2, rfn];

  // node_modules/@thi.ng/transducers/push.js
  function push(src) {
    return src ? [...src] : reducer(
      () => [],
      (acc, x) => (acc.push(x), acc)
    );
  }

  // node_modules/@thi.ng/transducers/iterator.js
  function* iterator(xform, src) {
    const rfn = ensureTransducer(xform)(push());
    const complete = rfn[1];
    const reduce2 = rfn[2];
    for (let x of src) {
      const y = reduce2([], x);
      if (isReduced(y)) {
        yield* unreduced(complete(y.deref()));
        return;
      }
      if (y.length) {
        yield* y;
      }
    }
    yield* unreduced(complete([]));
  }
  function* iterator1(xform, src) {
    const reduce2 = ensureTransducer(xform)([NO_OP, NO_OP, (_, x) => x])[2];
    for (let x of src) {
      let y = reduce2(SEMAPHORE, x);
      if (isReduced(y)) {
        y = unreduced(y.deref());
        if (y !== SEMAPHORE) {
          yield y;
        }
        return;
      }
      if (y !== SEMAPHORE) {
        yield y;
      }
    }
  }
  var __iter = (xform, args, impl = iterator1) => {
    const n = args.length - 1;
    return isIterable(args[n]) ? args.length > 1 ? impl(xform.apply(null, args.slice(0, n)), args[n]) : impl(xform(), args[0]) : void 0;
  };

  // node_modules/@thi.ng/transducers/map.js
  function map2(fn, src) {
    return isIterable(src) ? iterator1(map2(fn), src) : (rfn) => {
      const r = rfn[2];
      return compR(rfn, (acc, x) => r(acc, fn(x)));
    };
  }

  // node_modules/@thi.ng/transducers/norm-range.js
  function* normRange(n, includeLast = true, reverse = false) {
    if (n > 0) {
      for (let i = 0, m = includeLast ? n + 1 : n; i < m; i++) {
        yield reverse ? 1 - i / n : i / n;
      }
    }
  }

  // node_modules/@thi.ng/ramp/utils.js
  var __samples = (ramp2, n, start, end) => {
    if (start === void 0 || end === void 0) {
      const bounds = ramp2.timeBounds();
      start = start ?? bounds[0];
      end = end ?? bounds[1];
    }
    return map2((t) => {
      t = mix(start, end, t);
      return [t, ramp2.at(t)];
    }, normRange(n));
  };

  // node_modules/@thi.ng/compose/comp.js
  function comp(...fns) {
    let [a, b, c, d, e, f, g, h, i, j] = fns;
    switch (fns.length) {
      case 0:
        illegalArity(0);
      case 1:
        return a;
      case 2:
        return (...args) => a(b(...args));
      case 3:
        return (...args) => a(b(c(...args)));
      case 4:
        return (...args) => a(b(c(d(...args))));
      case 5:
        return (...args) => a(b(c(d(e(...args)))));
      case 6:
        return (...args) => a(b(c(d(e(f(...args))))));
      case 7:
        return (...args) => a(b(c(d(e(f(g(...args)))))));
      case 8:
        return (...args) => a(b(c(d(e(f(g(h(...args))))))));
      case 9:
        return (...args) => a(b(c(d(e(f(g(h(i(...args)))))))));
      case 10:
      default:
        const fn = (...args) => a(b(c(d(e(f(g(h(i(j(...args))))))))));
        return fns.length === 10 ? fn : comp(fn, ...fns.slice(10));
    }
  }

  // node_modules/@thi.ng/transducers/comp.js
  function comp2(...fns) {
    fns = fns.map(ensureTransducer);
    return comp.apply(null, fns);
  }

  // node_modules/@thi.ng/transducers/map-indexed.js
  function mapIndexed(...args) {
    return __iter(mapIndexed, args) || ((rfn) => {
      const r = rfn[2];
      const fn = args[0];
      let i = args[1] || 0;
      return compR(rfn, (acc, x) => r(acc, fn(i++, x)));
    });
  }

  // node_modules/@thi.ng/transducers/range.js
  function range(from, to, step) {
    return new Range(from, to, step);
  }
  var Range = class {
    from;
    to;
    step;
    constructor(from, to, step) {
      if (from === void 0) {
        from = 0;
        to = Infinity;
      } else if (to === void 0) {
        to = from;
        from = 0;
      }
      step = step === void 0 ? from < to ? 1 : -1 : step;
      this.from = from;
      this.to = to;
      this.step = step;
    }
    *[Symbol.iterator]() {
      let { from, to, step } = this;
      if (step > 0) {
        while (from < to) {
          yield from;
          from += step;
        }
      } else if (step < 0) {
        while (from > to) {
          yield from;
          from += step;
        }
      }
    }
    $reduce(rfn, acc) {
      const step = this.step;
      if (step > 0) {
        for (let i = this.from, n = this.to; i < n && !isReduced(acc); i += step) {
          acc = rfn(acc, i);
        }
      } else {
        for (let i = this.from, n = this.to; i > n && !isReduced(acc); i += step) {
          acc = rfn(acc, i);
        }
      }
      return acc;
    }
  };

  // node_modules/@thi.ng/transducers/str.js
  function str(sep, src) {
    sep = sep || "";
    let first = true;
    return src ? [...src].join(sep) : reducer(
      () => "",
      (acc, x) => (acc = first ? acc + x : acc + sep + x, first = false, acc)
    );
  }

  // node_modules/@thi.ng/transducers/take.js
  function take(n, src) {
    return isIterable(src) ? iterator(take(n), src) : (rfn) => {
      const r = rfn[2];
      let m = n;
      return compR(
        rfn,
        (acc, x) => --m > 0 ? r(acc, x) : m === 0 ? ensureReduced(r(acc, x)) : reduced(acc)
      );
    };
  }

  // node_modules/@thi.ng/transducers/transduce.js
  function transduce(...args) {
    return $transduce(transduce, reduce, args);
  }
  var $transduce = (tfn, rfn, args) => {
    let acc, src;
    switch (args.length) {
      case 4:
        src = args[3];
        acc = args[2];
        break;
      case 3:
        src = args[2];
        break;
      case 2:
        return map2((x) => tfn(args[0], args[1], x));
      default:
        illegalArity(args.length);
    }
    return rfn(ensureTransducer(args[0])(args[1]), acc, src);
  };

  // node_modules/@thi.ng/transducers/zip.js
  function* zip(...src) {
    const iters = src.map((s) => s[Symbol.iterator]());
    while (true) {
      const tuple = [];
      for (let i of iters) {
        let v = i.next();
        if (v.done) {
          return;
        }
        tuple.push(v.value);
      }
      yield tuple;
    }
  }

  // node_modules/@thi.ng/vectors/vop.js
  var vop = (dispatch = 0) => {
    const impls = new Array(5);
    let fallback;
    const fn = (...args) => {
      const g = impls[args[dispatch].length] || fallback;
      return g ? g(...args) : unsupported(`no impl for vec size ${args[dispatch].length}`);
    };
    fn.add = (dim, fn2) => impls[dim] = fn2;
    fn.default = (fn2) => fallback = fn2;
    fn.impl = (dim) => impls[dim] || fallback;
    return fn;
  };

  // node_modules/@thi.ng/vectors/compile/templates.js
  var ARGS_VV = "o,a,b";
  var ARGS_VN = "o,a,n";
  var ARGS_VNV = "o,a,n,b";
  var ARGS_VVN = "o,a,b,n";
  var MATH_N = (op) => ([o, a]) => `${o}=${a}${op}n;`;
  var MATH2_N = (op1, op2) => ([o, a, b]) => `${o}=(${a}${op1}${b})${op2}n;`;
  var MATH2A_N = (op1, op2) => ([o, a, b]) => `${o}=(${a}${op1}n)${op2}${b};`;
  var FN2 = (op = "op") => ([o, a, b]) => `${o}=${op}(${a},${b});`;
  var SET_N = ([a]) => `${a}=n;`;
  var MIX_N = ([o, a, b]) => `${o}=${a}+(${b}-${a})*n;`;

  // node_modules/@thi.ng/vectors/compile/emit.js
  var __lookup = (sym) => (i) => i > 1 ? `${sym}[i${sym}+${i}*s${sym}]` : i == 1 ? `${sym}[i${sym}+s${sym}]` : `${sym}[i${sym}]`;
  var __indicesStrided = (sym) => map2(__lookup(sym), range());
  var __indices = (sym) => map2((i) => `${sym}[${i}]`, range());
  var __assemble = (dim, tpl, syms, ret = "a", opJoin = "", pre = "", post = "", strided = false) => [
    pre,
    transduce(
      comp2(
        take(dim),
        mapIndexed((i, x) => tpl(x, i))
      ),
      str(opJoin),
      zip.apply(
        null,
        syms.split(",").map(strided ? __indicesStrided : __indices)
      )
    ),
    post,
    ret !== "" ? `return ${ret};` : ""
  ];
  var __assembleG = (tpl, syms, ret = "a", pre, post, strided = false) => [
    pre,
    "for(let i=a.length;--i>=0;) {",
    tpl(
      syms.split(",").map(strided ? (x) => `${x}[i${x}+i*s${x}]` : (x) => `${x}[i]`)
    ),
    "}",
    post,
    ret !== null ? `return ${ret};` : ""
  ];
  var __defaultOut = (o, args) => `!${o} && (${o}=${args.split(",")[1]});`;
  var compile = (dim, tpl, args, syms = args, ret = "a", opJoin, pre, post, strided = false) => new Function(
    args,
    __assemble(dim, tpl, syms, ret, opJoin, pre, post, strided).join("")
  );
  var compileG = (tpl, args, syms = args, ret = "a", pre, post, strided = false) => new Function(
    args,
    __assembleG(tpl, syms, ret, pre, post, strided).join("")
  );
  var defOp = (tpl, args = ARGS_VV, syms, ret = "o", dispatch = 1, pre) => {
    syms = syms || args;
    pre = pre != null ? pre : __defaultOut(ret, args);
    const fn = vop(dispatch);
    const $ = (dim) => fn.add(dim, compile(dim, tpl, args, syms, ret, "", pre));
    fn.default(compileG(tpl, args, syms, ret, pre));
    return [fn, $(2), $(3), $(4)];
  };
  var defMathOpN = (op) => defOp(MATH_N(op), ARGS_VN);

  // node_modules/@thi.ng/vectors/maddn.js
  var [maddN, maddN2, maddN3, maddN4] = defOp(
    MATH2A_N("*", "+"),
    ARGS_VNV,
    ARGS_VV
  );

  // node_modules/@thi.ng/vectors/muln.js
  var [mulN, mulN2, mulN3, mulN4] = defMathOpN("*");

  // node_modules/@thi.ng/vectors/addw.js
  var addW4 = (out, a, b, c, d, wa, wb, wc, wd) => (!out && (out = a), maddN(out, d, wd, maddN(out, c, wc, maddN(out, b, wb, mulN(out, a, wa)))));

  // node_modules/@thi.ng/vectors/submn.js
  var [submN, submN2, submN3, submN4] = defOp(
    MATH2_N("-", "*"),
    ARGS_VVN
  );

  // node_modules/@thi.ng/vectors/mix-hermite.js
  var mixCubicHermite = (out, a, ta, b, tb, t) => {
    const s = t - 1;
    const t2 = t * t;
    const s2 = s * s;
    return addW4(
      out,
      a,
      ta,
      b,
      tb,
      (1 + 2 * t) * s2,
      t * s2,
      t2 * (3 - 2 * t),
      t2 * s
    );
  };
  var mixHermiteCardinal = (out, a, b, c, d, t, scale = 0.5) => mixCubicHermite(
    out,
    b,
    tangentCardinal([], a, c, scale),
    c,
    tangentCardinal([], b, d, scale),
    t
  );
  var tangentCardinal = (out, prev, next, scale = 0.5, ta = 0, tc = 2) => submN(out, next, prev, scale / (tc - ta));

  // node_modules/@thi.ng/ramp/ramp.js
  var ramp = (impl, stops, opts) => new Ramp(impl, stops, opts);
  var Ramp = class {
    constructor(impl, stops, opts) {
      this.impl = impl;
      this.stops = stops;
      assert(stops.length >= 2, `require at least 2 keyframes/stops`);
      const $opts = { domain: unconstrained, ...opts };
      this.domain = $opts.domain;
      this.sort();
    }
    domain;
    copy() {
      return new Ramp(
        this.impl,
        this.stops.map((x) => x.slice())
      );
    }
    empty() {
      return new Ramp(this.impl, []);
    }
    /**
     * Samples the ramp at given time `t` and returns interpolated value.
     *
     * @remarks
     * The given `t` is first processed by the configured time
     * {@link Ramp.domain} function.
     *
     * @param t
     */
    at(t) {
      const { domain, impl, stops } = this;
      const n = stops.length - 1;
      const first = stops[0];
      const last = stops[n];
      t = domain(t, first[0], last[0]);
      const i = this.timeIndex(t);
      return i < 0 ? first[1] : i >= n ? last[1] : impl.at(stops, i, t);
    }
    samples(n = 100, start, end) {
      return __samples(this, n, start, end);
    }
    bounds() {
      const { impl, stops } = this;
      const n = stops.length;
      let min5 = null;
      let max5 = null;
      for (let i = n; i-- > 0; ) {
        const val = stops[i][1];
        min5 = impl.min(min5, val);
        max5 = impl.max(max5, val);
      }
      return {
        min: min5,
        max: max5,
        minT: stops[0][0],
        maxT: stops[n - 1][0]
      };
    }
    timeBounds() {
      return [this.stops[0][0], peek(this.stops)[0]];
    }
    setStopAt(t, val, eps = 0.01) {
      const idx = this.closestIndex(t, eps);
      if (idx < 0) {
        this.stops.push([t, val]);
        this.sort();
        return true;
      }
      this.stops[idx][1] = val;
      return false;
    }
    removeStopAt(t, eps = 0.01) {
      if (this.stops.length > 2) {
        const i = this.closestIndex(t, eps);
        if (i !== -1) {
          this.stops.splice(i, 1);
          return true;
        }
      }
      return false;
    }
    closestIndex(t, eps = 0.01) {
      const stops = this.stops;
      for (let i = stops.length; i-- > 0; ) {
        if (absDiff(t, stops[i][0]) < eps)
          return i;
      }
      return -1;
    }
    clampedIndexTime(i, t, eps = 0.01) {
      const stops = this.stops;
      const n = stops.length - 1;
      return i == 0 ? Math.min(t, stops[1][0] - eps) : i === n ? Math.max(t, stops[n - 1][0] + eps) : clamp(t, stops[i - 1][0] + eps, stops[i + 1][0] - eps);
    }
    sort() {
      this.stops.sort((a, b) => a[0] - b[0]);
    }
    uniform() {
      const n = this.stops.length - 1;
      this.stops.forEach((p, i) => p[0] = i / n);
    }
    timeIndex(t) {
      const stops = this.stops;
      const n = stops.length;
      if (n < 256) {
        for (let i = n; i-- > 0; ) {
          if (t >= stops[i][0])
            return i;
        }
        return -1;
      }
      return binarySearch(
        stops,
        [t, null],
        (x) => x[0],
        compareNumAsc
      );
    }
  };

  // node_modules/@thi.ng/ramp/hermite.js
  var HERMITE_V = (vec) => ({
    min: (acc, x) => vec.min(acc, acc || vec.vecOf(Infinity), x),
    max: (acc, x) => vec.max(acc, acc || vec.vecOf(-Infinity), x),
    at: (stops, i, t) => {
      const n = stops.length - 1;
      const [, a] = stops[Math.max(i - 1, 0)];
      const [bt, b] = stops[Math.max(i, 0)];
      const [ct, c] = stops[Math.min(i + 1, n)];
      const [, d] = stops[Math.min(i + 2, n)];
      return mixHermiteCardinal([], a, b, c, d, norm(t, bt, ct), 0);
    }
  });

  // node_modules/@thi.ng/vectors/max.js
  var [max, max22, max3, max4] = defOp(
    FN2("Math.max")
  );

  // node_modules/@thi.ng/vectors/min.js
  var [min, min22, min3, min4] = defOp(
    FN2("Math.min")
  );

  // node_modules/@thi.ng/vectors/mixn.js
  var [mixN, mixN2, mixN3, mixN4] = defOp(
    MIX_N,
    ARGS_VVN
  );

  // node_modules/@thi.ng/vectors/setn.js
  var [setN, setN2, setN3, setN4] = defOp(
    SET_N,
    "a,n",
    "a",
    "a",
    0,
    ""
  );

  // node_modules/@thi.ng/vectors/vec-of.js
  var vecOf = (size, n = 0) => new Array(size).fill(n);

  // node_modules/@thi.ng/ramp/vector.js
  var VEC3 = {
    min: min3,
    max: max3,
    mixN: mixN3,
    setN: setN3,
    vecOf: (x) => vecOf(3, x)
  };

  // dsp/scape.ts
  function SCAPE(props, dryInputs, ...outputFromSRVB) {
    const zero2 = stdlib.const({ value: 0, key: "srvb::mute" });
    const one = stdlib.const({ value: 1, key: "srvb::unity" });
    const srvbBypass = stdlib.sm(props.srvbBypass);
    const scapeMode = stdlib.round(props.scapeMode);
    const unity = stdlib.select(one, one, scapeMode);
    const responses = props.IRs;
    const scapeLevel = stdlib.sm(stdlib.mul(stdlib.db2gain(3), unity, props.scapeLevel));
    const position = stdlib.sm(props.scapePosition);
    const hermiteNodes = [props.v1, props.v2, props.v3, props.v4].map(
      (x) => stdlib.smooth(stdlib.tau2pole(0.05), x)
    );
    const convolverNodes = /* @__PURE__ */ new Map();
    convolverNodes.set("SURFACE", [props.SURFACE_0, props.SURFACE_1]);
    convolverNodes.set("TEMPLE", [props.TEMPLE_0, props.TEMPLE_1]);
    convolverNodes.set("LIGHT", [props.LIGHT_0, props.LIGHT_1]);
    convolverNodes.set("DEEPNESS", [props.DEEPNESS_0, props.DEEPNESS_1]);
    function HermiteVecInterp(channel, hermiteNodes2, _in) {
      let mixer = [];
      responses.forEach((response, slotName) => {
        mixer.push(
          stdlib.mul(hermiteNodes2[response.slotIndex], scapeConvolver(slotName, channel))
        );
      });
      return stdlib.add(...mixer);
    }
    let scapeConvolver = (path, channel) => {
      if (!convolverNodes.has(path)) {
        console.log(`No convolver for path: ${path}`);
        return zero2;
      }
      let selectConvolverRef = convolverNodes.get(path)[channel];
      return selectConvolverRef;
    };
    let vectorProcessorPair = (_inputs) => [
      HermiteVecInterp(0, hermiteNodes, _inputs[0]),
      HermiteVecInterp(1, hermiteNodes, _inputs[1])
    ];
    const asLeftPan = (x) => {
      return stdlib.select(position, x, stdlib.mul(x, stdlib.db2gain(3)));
    };
    const asRightPan = (x) => {
      return stdlib.select(position, stdlib.mul(x, stdlib.db2gain(3)), x);
    };
    const getDrySource = (channel) => stdlib.select(srvbBypass, zero2, outputFromSRVB[channel]);
    let yL = stdlib.add(
      stdlib.mul(stdlib.db2gain(6), scapeLevel, asLeftPan(vectorProcessorPair(outputFromSRVB)[1])),
      // crossed over
      getDrySource(0)
    );
    let yR = stdlib.add(
      stdlib.mul(stdlib.db2gain(6), scapeLevel, asRightPan(vectorProcessorPair(outputFromSRVB)[0])),
      // crossed over
      getDrySource(1)
    );
    if (props.scapeBypass)
      return [getDrySource(0), getDrySource(1)];
    else
      return [yL, yR];
  }

  // src/public/manifest.json
  var manifest_default = {
    window: {
      width: 1090,
      height: 625
    },
    "REVERSE-BUFFER-PREFIX": "REVERSED_",
    parameters: [
      { paramId: "size", name: "Size", min: 0, max: 1, defaultValue: 0.15, isBoolean: false },
      { paramId: "diffuse", name: "Reflections Diffuse", min: 0, max: 1, defaultValue: 0.25, isBoolean: false },
      { paramId: "mix", name: "Reflections Level", min: 0, max: 1, defaultValue: 1, isBoolean: false },
      { paramId: "position", name: "Position", min: 0, max: 1, defaultValue: 0.5, isBoolean: false },
      { paramId: "tone", name: "Tone", min: -1, max: 1, defaultValue: 0, isBoolean: false },
      { paramId: "structure", name: "Structure", min: 0, max: 15, defaultValue: 0, step: 1, isBoolean: false },
      { paramId: "scapeLevel", name: "Scape Level", min: 0, max: 1, defaultValue: 0, isBoolean: false },
      { paramId: "scapeOffset", name: "Scape Offset", min: 0, max: 1, defaultValue: 0, isBoolean: false },
      { paramId: "scapeLength", name: "Scape IR", min: 0, max: 1, defaultValue: 0, isBoolean: false },
      { paramId: "scapeReverse", name: "Scape Reverse", min: 0, max: 1, defaultValue: 0, step: 1, isBoolean: false },
      { paramId: "scapeBypass", name: "Bypass Scape", min: 0, max: 1, defaultValue: 0, step: 1, isBoolean: false },
      { paramId: "srvbBypass", name: "Bypass Reflectors", min: 0, max: 1, defaultValue: 0, step: 1, isBoolean: false },
      { paramId: "dryMix", name: "Dry Mix", min: 0, max: 1, defaultValue: 0, isBoolean: false },
      { paramId: "scapeMode", name: "Scape Mode", min: 0, max: 1, defaultValue: 0, step: 1, isBoolean: false }
    ]
  };

  // src/stores/constants.ts
  var BUILD_VERSION = "v0.8.4-beta";
  var CURRENT_UI_VERSION = `scape_space_${BUILD_VERSION}`;
  var HOST_PARAMS = manifest_default.parameters;
  var REGISTERED_PARAM_NAMES = HOST_PARAMS.map(
    (p) => p.paramId
  );
  var IR_Slots = [
    { pathStem: "LIGHT", slotIndex: 0, att: 0.65 },
    { pathStem: "SURFACE", slotIndex: 1, att: 0.475 },
    { pathStem: "TEMPLE", slotIndex: 2, att: 0.475 },
    { pathStem: "DEEPNESS", slotIndex: 3, att: 0.25 }
  ];
  var DEFAULT_IR_SLOTNAMES = IR_Slots.map((slot) => slot.pathStem);
  var REVERSE_BUFFER_PREFIX = manifest_default["REVERSE-BUFFER-PREFIX"];
  var PARAM_DEFAULTS = Object.fromEntries(
    HOST_PARAMS.filter(
      (p) => p.paramId !== "srvbBypass" && p.paramId !== "scapeBypass"
    ).map((p) => [p.paramId, p.defaultValue])
  );

  // dsp/parseAndUpdateIRRefs.ts
  function parseAndUpdateIRRefs(scape, shared) {
    const mode = scape.mode;
    const currentUserBank = Math.max(0, scape.userBank - 1);
    const prefixUserBank = (name) => {
      return "USERBANK_" + currentUserBank + "_" + name;
    };
    const getActivePathName = (slotName, channel) => {
      const propsDefaultIR = Slots.get(slotName);
      const propsUserIR = User_IR_Map.get(slotName);
      const usingUserIR = propsUserIR && mode;
      let composedPath;
      let vfsPathWithChannel = `${propsDefaultIR?.pathStem}_${channel}`;
      if (usingUserIR) {
        vfsPathWithChannel = prefixUserBank(`${propsUserIR.pathStem}_${channel}`);
      }
      composedPath = scape.reverse > 0.5 ? REVERSE_BUFFER_PREFIX + vfsPathWithChannel : vfsPathWithChannel;
      if (!vfsPathHistory.includes(composedPath)) {
        vfsPathHistory.push(composedPath);
      }
      return composedPath;
    };
    const getScale = (slotName, chan = 0) => {
      const userIR = User_IR_Map.get(slotName);
      const defaultIR = Slots.get(slotName);
      const usingUserIR = userIR && mode;
      const panPosition = shared.position;
      let result = usingUserIR ? userIR.att : defaultIR.att;
      return result;
    };
    const getRef = (refs2, slotName, chan) => {
      let path = `${slotName}_${chan}`;
      refs2.has(path);
      return path;
    };
    Slots.forEach((slot, slotName) => {
      for (let chan = 0; chan < 2; chan++) {
        const path = getActivePathName(slotName, chan);
        const ref = getRef(refs, slotName, chan);
        const scale = getScale(slotName, chan);
        const offset = scape.offset;
        const process2 = Math.min(scape.level, scape.vectorData[slot.slotIndex]);
        if (ref === null || ref === void 0)
          return;
        if (path === null || path === void 0)
          return;
        if (scale === null || scale === void 0)
          return;
        if (offset === null || offset === void 0)
          return;
        if (process2 === null || process2 === void 0)
          return;
        refs.update(
          ref,
          {
            path,
            process: process2,
            scale,
            offset
          }
        );
      }
    });
  }

  // src/utils/utils.ts
  function remapPosition(value) {
    const clampedValue = clamp(value, EPS, 1);
    return easeIn2(1 - (1 - 2 * Math.abs(clampedValue - 0.5)));
  }

  // dsp/main.ts
  var core = new Renderer((batch) => {
    __postNativeMessage__(JSON.stringify(batch));
  });
  var refs = new RefMap(core);
  var vfsPathHistory = new Array();
  var blockSizes = [512, 4096];
  var Slots = /* @__PURE__ */ new Map([
    ["LIGHT", { pathStem: "LIGHT", slotIndex: 0, att: 1 }],
    ["SURFACE", { pathStem: "SURFACE", slotIndex: 1, att: 0.96 }],
    ["TEMPLE", { pathStem: "TEMPLE", slotIndex: 2, att: 0.9 }],
    ["DEEPNESS", { pathStem: "DEEPNESS", slotIndex: 3, att: 0.675 }]
  ]);
  var User_IR_Map = /* @__PURE__ */ new Map();
  function IR_SlotRefFactory(scape, refs2, slotName, slotIndex, attenuation) {
    if (!scape || !refs2)
      return;
    const refConstructor = {
      [`${slotName}_0`]: refs2.getOrCreate(
        `${slotName}_0`,
        "convolver",
        {
          path: `${slotName}_0`,
          process: scape.vectorData[slotIndex],
          scale: attenuation,
          blockSizes,
          offset: scape.offset
        },
        [stdlib.tapIn({ name: `srvbOut:0` })]
      ),
      [`${slotName}_1`]: refs2.getOrCreate(
        `${slotName}_1`,
        "convolver",
        {
          path: `${slotName}_1`,
          process: scape.vectorData[slotIndex],
          scale: attenuation,
          blockSizes,
          offset: scape.offset
        },
        [stdlib.tapIn({ name: `srvbOut:1` })]
      )
    };
    return refConstructor;
  }
  function registerConvolverRefs(scape, refs2) {
    let convolvers = {};
    Slots.forEach((slotData, slotName) => {
      convolvers = {
        ...convolvers,
        ...IR_SlotRefFactory(scape, refs2, slotName, slotData.slotIndex, slotData.att)
      };
    });
    return convolvers;
  }
  function createHermiteVecInterp() {
    return ramp(
      // use a vector interpolation preset with the VEC3 API
      HERMITE_V(VEC3),
      // keyframes used for crossfading between 4 IRs
      [
        [0, [1, 0, 0, 0]],
        // a
        [0.45, [0, 1, 0, 0]],
        // b
        [0.65, [0, 0, 1, 0]],
        // c
        [1, [0, 0, 0, 1]]
        // d
      ]
    );
  }
  var HERMITE = createHermiteVecInterp();
  var defaultStructure = OEIS_SEQUENCES[0];
  var defaultMax = argMax(defaultStructure, 17);
  var structureData = {
    consts: castSequencesToRefs(defaultStructure, defaultMax, refs),
    max: defaultMax
  };
  function shouldRender(_mem, _curr) {
    const result = _mem === null || _curr === null || refs._map.size === 0 || !srvbProps || !scapeProps || _curr.sampleRate !== _mem?.sampleRate || Math.round(_curr.scapeBypass) !== _mem?.scapeBypass || Math.round(_curr.srvbBypass) !== _mem?.srvbBypass;
    return result;
  }
  var memoized = null;
  var srvbProps = {};
  var scapeProps = {};
  globalThis.__receiveStateChange__ = (stateReceivedFromNative) => {
    const { state, srvb, shared, scape } = parseNewState(stateReceivedFromNative);
    refs.getOrCreate("dryMix", "const", { value: shared.dryMix }, []);
    srvbProps = {
      key: "srvb",
      srvbBypass: srvb.bypass,
      dryMix: shared.dryMix,
      sampleRate: shared.sampleRate,
      size: refs.getOrCreate("size", "const", { value: srvb.size }, []),
      decay: refs.getOrCreate("diffuse", "const", { value: srvb.diffuse }, []),
      mix: refs.getOrCreate("mix", "const", { value: srvb.level }, []),
      tone: refs.getOrCreate("tone", "const", { value: srvb.tone }, []),
      position: refs.getOrCreate("position", "const", { value: srvb.position }, []),
      structure: srvb.structure,
      structureMax: refs.getOrCreate("structureMax", "const", { value: structureData.max, key: "structureMax" }, [])
    };
    scapeProps = {
      IRs: Slots,
      sampleRate: shared.sampleRate,
      scapeBypass: scape.bypass || 0,
      vectorData: scape.vectorData,
      offset: scape.offset,
      // RefNodes from now on
      srvbBypass: refs.getOrCreate("srvbBypass", "const", { value: srvb.bypass }, []),
      scapeLevel: refs.getOrCreate("scapeLevel", "const", { value: scape.level }, []),
      scapePosition: refs.getOrCreate("scapePosition", "const", { value: scape.position }, []),
      scapeMode: refs.getOrCreate("scapeMode", "const", { value: scape.mode }, []),
      // the Hermite vector interpolation values as signals
      v1: refs.getOrCreate("v1", "const", { value: scape.vectorData[0] }, []),
      v2: refs.getOrCreate("v2", "const", { value: scape.vectorData[1] }, []),
      v3: refs.getOrCreate("v3", "const", { value: scape.vectorData[2] }, []),
      v4: refs.getOrCreate("v4", "const", { value: scape.vectorData[3] }, []),
      ...registerConvolverRefs(scape, refs)
    };
    function getSRVBProps() {
      return srvbProps;
    }
    function getScapeProps() {
      return scapeProps;
    }
    if (!memoized || shouldRender(memoized, state)) {
      console.log("Render called");
      structureData = buildStructures(refs, srvb.structure) || structureData;
      if (srvbProps && scapeProps) {
        const graph = core.render(
          ...SCAPE(
            getScapeProps(),
            shared.dryInputs,
            ...SRVB(
              getSRVBProps(),
              shared.dryInputs,
              ...structureData.consts
            )
          ).map(
            (node, i) => stdlib.add(stdlib.mul(refs.get("dryMix"), shared.dryInputs[i]), node)
          )
        );
      }
    } else {
      if (!srvb.bypass) {
        refs.update("size", { value: srvb.size });
        refs.update("diffuse", { value: srvb.diffuse });
        refs.update("mix", { value: srvb.level });
        refs.update("tone", { value: srvb.tone });
        refs.update("position", { value: srvb.position });
        refs.update("structureMax", { value: srvb.structureMax });
        if (srvb.structure !== memoized.structure) {
          updateStructureConstants(refs, srvb);
        }
      }
      if (!scape.bypass) {
        refs.update("scapeLevel", { value: scape.level });
        refs.update("v1", { value: scape.vectorData[0] });
        refs.update("v2", { value: scape.vectorData[1] });
        refs.update("v3", { value: scape.vectorData[2] });
        refs.update("v4", { value: scape.vectorData[3] });
        refs.update("scapePosition", { value: scape.position });
        refs.update("scapeMode", { value: scape.mode });
        parseAndUpdateIRRefs(scape, shared);
      }
      refs.update("dryMix", { value: shared.dryMix });
      refs.update("srvbBypass", { value: srvb.bypass });
    }
    memoized = {
      ...state,
      structure: srvb.structure,
      scapeLength: scape.ir,
      structureMax: srvb.structureMax,
      reverse: scape.reverse,
      vectorData: scape.vectorData,
      scapeBypass: scape.bypass,
      srvbBypass: srvb.bypass,
      scapeMode: scape.mode,
      scapeOffset: scape.offset,
      userBank: scape.userBank
    };
    function parseNewState(stateReceivedFromNative2) {
      const state2 = JSON.parse(stateReceivedFromNative2);
      const shared2 = {
        sampleRate: state2.sampleRate,
        dryInputs: [stdlib.in({ channel: 0 }), stdlib.in({ channel: 1 })],
        dryMix: state2.dryMix
      };
      const srvb2 = {
        structure: Math.round((state2.structure || 0) * NUM_SEQUENCES),
        size: state2.size,
        diffuse: state2.diffuse,
        tone: clamp(state2.tone * 2 - 1, -0.99, 1),
        level: easeIn2(state2.mix),
        // DEPRECATING STRUCTURE MAX
        // doing the normalisation inside SRVB
        structureMax: Math.round(state2.structureMax) || 137,
        // handle the case where the max was not computed
        bypass: Math.round(state2.srvbBypass) || 0,
        position: remapPosition(state2.position)
      };
      const scape2 = {
        reverse: Math.round(state2.scapeReverse),
        level: state2.scapeLevel * 1.5,
        ir: state2.scapeLength,
        vectorData: HERMITE.at(state2.scapeLength),
        bypass: Math.round(state2.scapeBypass) || 0,
        mode: Math.round(state2.scapeMode) || 0,
        offset: state2.scapeOffset || 0,
        userBank: state2.userBank,
        position: state2.position
      };
      return { state: state2, srvb: srvb2, shared: shared2, scape: scape2 };
    }
  };
  globalThis.__receiveVFSKeys__ = function(vfsCurrent) {
    const vfsKeysArray = JSON.parse(vfsCurrent);
    const userVFSKeys = vfsKeysArray.filter((key) => key.includes("USER") && !key.includes("REVERSE"));
    const userVFSKeysCount = userVFSKeys.length;
    if (userVFSKeysCount > 0) {
      for (let i = 0; i < userVFSKeysCount; i++) {
        const slotIndex = Math.floor(i / 2);
        const userPathStem = `USER${slotIndex % 4}`;
        User_IR_Map.set(DEFAULT_IR_SLOTNAMES[slotIndex % 4], { pathStem: userPathStem, slotIndex: slotIndex % 4, att: 0.95 });
      }
    }
    console.log("VFS->", vfsKeysArray);
  };
  globalThis.__receiveHydrationData__ = (data) => {
    const payload = JSON.parse(data);
    const nodeMap = core._delegate.nodeMap;
    for (let [k, v] of Object.entries(payload)) {
      nodeMap.set(parseInt(k, 16), {
        symbol: "__ELEM_NODE__",
        kind: "__HYDRATED__",
        hash: parseInt(k, 16),
        props: v,
        generation: {
          current: 0
        }
      });
    }
  };
})();
