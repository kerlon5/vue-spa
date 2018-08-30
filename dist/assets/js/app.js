/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate
    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app__ = __webpack_require__(2);


__WEBPACK_IMPORTED_MODULE_0__app__["a" /* app */].$mount('#app');

// if (module.hot) {
//   module.hot.accept()
// }

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return app; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__theme_Layout_vue__ = __webpack_require__(6);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };




var app = new __WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */](_extends({}, __WEBPACK_IMPORTED_MODULE_1__theme_Layout_vue__["a" /* default */]));



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process, global) {/*!
 * Vue.js v2.4.2
 * (c) 2014-2017 Evan You
 * Released under the MIT License.
 */
/*  */

// these helpers produces better vm code in JS engines due to their
// explicitness and function inlining
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

var _toString = Object.prototype.toString;

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(val);
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : typeof val === 'object'
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert a input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if a attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,is');

/**
 * Remove an item from an array
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether the object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /([^-])([A-Z])/g;
var hyphenate = cached(function (str) {
  return str
    .replace(hyphenateRE, '$1-$2')
    .replace(hyphenateRE, '$1-$2')
    .toLowerCase()
});

/**
 * Simple bind, faster than native
 */
function bind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }
  // record original fn length
  boundFn._length = fn.length;
  return boundFn
}

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/)
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/**
 * Return same value
 */
var identity = function (_) { return _; };

/**
 * Generate a static keys string from compiler modules.
 */


/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var SSR_ATTR = 'data-server-rendered';

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated'
];

/*  */

var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: process.env.NODE_ENV !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: process.env.NODE_ENV !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

var emptyObject = Object.freeze({});

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = /[^\w.$]/;
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

var warn = noop;
var tip = noop;
var formatComponentName = (null); // work around flow check

if (process.env.NODE_ENV !== 'production') {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      return '<Root>'
    }
    var name = typeof vm === 'string'
      ? vm
      : typeof vm === 'function' && vm.options
        ? vm.options.name
        : vm._isVue
          ? vm.$options.name || vm.$options._componentTag
          : vm.name;

    var file = vm._isVue && vm.$options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  var generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm) {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */

function handleError (err, vm, info) {
  if (config.errorHandler) {
    config.errorHandler.call(null, err, vm, info);
  } else {
    if (process.env.NODE_ENV !== 'production') {
      warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
    }
    /* istanbul ignore else */
    if (inBrowser && typeof console !== 'undefined') {
      console.error(err);
    } else {
      throw err
    }
  }
}

/*  */
/* globals MutationObserver */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = UA && UA.indexOf('android') > 0;
var isIOS = UA && /iphone|ipad|ipod|ios/.test(UA);
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;

// Firefix has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;

var supportsPassive = false;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
        /* istanbul ignore next */
        supportsPassive = true;
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

/**
 * Defer a task to execute it asynchronously.
 */
var nextTick = (function () {
  var callbacks = [];
  var pending = false;
  var timerFunc;

  function nextTickHandler () {
    pending = false;
    var copies = callbacks.slice(0);
    callbacks.length = 0;
    for (var i = 0; i < copies.length; i++) {
      copies[i]();
    }
  }

  // the nextTick behavior leverages the microtask queue, which can be accessed
  // via either native Promise.then or MutationObserver.
  // MutationObserver has wider support, however it is seriously bugged in
  // UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
  // completely stops working after triggering a few times... so, if native
  // Promise is available, we will use it:
  /* istanbul ignore if */
  if (typeof Promise !== 'undefined' && isNative(Promise)) {
    var p = Promise.resolve();
    var logError = function (err) { console.error(err); };
    timerFunc = function () {
      p.then(nextTickHandler).catch(logError);
      // in problematic UIWebViews, Promise.then doesn't completely break, but
      // it can get stuck in a weird state where callbacks are pushed into the
      // microtask queue but the queue isn't being flushed, until the browser
      // needs to do some other work, e.g. handle a timer. Therefore we can
      // "force" the microtask queue to be flushed by adding an empty timer.
      if (isIOS) { setTimeout(noop); }
    };
  } else if (typeof MutationObserver !== 'undefined' && (
    isNative(MutationObserver) ||
    // PhantomJS and iOS 7.x
    MutationObserver.toString() === '[object MutationObserverConstructor]'
  )) {
    // use MutationObserver where native Promise is not available,
    // e.g. PhantomJS IE11, iOS7, Android 4.4
    var counter = 1;
    var observer = new MutationObserver(nextTickHandler);
    var textNode = document.createTextNode(String(counter));
    observer.observe(textNode, {
      characterData: true
    });
    timerFunc = function () {
      counter = (counter + 1) % 2;
      textNode.data = String(counter);
    };
  } else {
    // fallback to setTimeout
    /* istanbul ignore next */
    timerFunc = function () {
      setTimeout(nextTickHandler, 0);
    };
  }

  return function queueNextTick (cb, ctx) {
    var _resolve;
    callbacks.push(function () {
      if (cb) {
        try {
          cb.call(ctx);
        } catch (e) {
          handleError(e, ctx, 'nextTick');
        }
      } else if (_resolve) {
        _resolve(ctx);
      }
    });
    if (!pending) {
      pending = true;
      timerFunc();
    }
    if (!cb && typeof Promise !== 'undefined') {
      return new Promise(function (resolve, reject) {
        _resolve = resolve;
      })
    }
  }
})();

var _Set;
/* istanbul ignore if */
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = (function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */


var uid$1 = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid$1++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.target) {
    Dep.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// the current target watcher being evaluated.
// this is globally unique because there could be only one
// watcher being evaluated at any time.
Dep.target = null;
var targetStack = [];

function pushTarget (_target) {
  if (Dep.target) { targetStack.push(Dep.target); }
  Dep.target = _target;
}

function popTarget () {
  Dep.target = targetStack.pop();
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);[
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
]
.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * By default, when a reactive property is set, the new value is
 * also converted to become reactive. However when passing down props,
 * we don't want to force conversion because the value may be a nested value
 * under a frozen data structure. Converting it would defeat the optimization.
 */
var observerState = {
  shouldConvert: true
};

/**
 * Observer class that are attached to each observed
 * object. Once attached, the observer converts target
 * object's property keys into getter/setters that
 * collect dependencies and dispatches updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    var augment = hasProto
      ? protoAugment
      : copyAugment;
    augment(value, arrayMethods, arrayKeys);
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through each property and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i], obj[keys[i]]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment an target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src, keys) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment an target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value)) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    observerState.shouldConvert &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.target) {
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
        }
        if (Array.isArray(value)) {
          dependArray(value);
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if (process.env.NODE_ENV !== 'production' && customSetter) {
        customSetter();
      }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (hasOwn(target, key)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    process.env.NODE_ENV !== 'production' && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    process.env.NODE_ENV !== 'production' && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (process.env.NODE_ENV !== 'production') {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;
  var keys = Object.keys(from);
  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (isPlainObject(toVal) && isPlainObject(fromVal)) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this) : parentVal
      )
    }
  } else if (parentVal || childVal) {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm)
        : undefined;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
      process.env.NODE_ENV !== 'production' && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn.call(this, parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  return childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (parentVal, childVal) {
  var res = Object.create(parentVal || null);
  return childVal
    ? extend(res, childVal)
    : res
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (parentVal, childVal) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key in childVal) {
    var parent = ret[key];
    var child = childVal[key];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (parentVal, childVal) {
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    var lower = key.toLowerCase();
    if (isBuiltInTag(lower) || config.isReservedTag(lower)) {
      warn(
        'Do not use built-in or reserved HTML elements as component ' +
        'id: ' + key
      );
    }
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (process.env.NODE_ENV !== 'production') {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options) {
  var inject = options.inject;
  if (Array.isArray(inject)) {
    var normalized = options.inject = {};
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = inject[i];
    }
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def = dirs[key];
      if (typeof def === 'function') {
        dirs[key] = { bind: def, update: def };
      }
    }
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (process.env.NODE_ENV !== 'production') {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child);
  normalizeInject(child);
  normalizeDirectives(child);
  var extendsFrom = child.extends;
  if (extendsFrom) {
    parent = mergeOptions(parent, extendsFrom, vm);
  }
  if (child.mixins) {
    for (var i = 0, l = child.mixins.length; i < l; i++) {
      parent = mergeOptions(parent, child.mixins[i], vm);
    }
  }
  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if (process.env.NODE_ENV !== 'production' && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */

function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // handle boolean props
  if (isType(Boolean, prop.type)) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (!isType(String, prop.type) && (value === '' || value === hyphenate(key))) {
      value = true;
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldConvert = observerState.shouldConvert;
    observerState.shouldConvert = true;
    observe(value);
    observerState.shouldConvert = prevShouldConvert;
  }
  if (process.env.NODE_ENV !== 'production') {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if (process.env.NODE_ENV !== 'production' && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }
  if (!valid) {
    warn(
      'Invalid prop: type check failed for prop "' + name + '".' +
      ' Expected ' + expectedTypes.map(capitalize).join(', ') +
      ', got ' + Object.prototype.toString.call(value).slice(8, -1) + '.',
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    valid = typeof value === expectedType.toLowerCase();
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isType (type, fn) {
  if (!Array.isArray(fn)) {
    return getType(fn) === getType(type)
  }
  for (var i = 0, len = fn.length; i < len; i++) {
    if (getType(fn[i]) === getType(type)) {
      return true
    }
  }
  /* istanbul ignore next */
  return false
}

/*  */

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (process.env.NODE_ENV !== 'production') {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      "referenced during render. Make sure to declare reactive data " +
      "properties in the data option.",
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' &&
    Proxy.toString().match(/native code/);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) || key.charAt(0) === '_';
      if (!has && !isAllowed) {
        warnNonPresent(target, key);
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        warnNonPresent(target, key);
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

var mark;
var measure;

if (process.env.NODE_ENV !== 'production') {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      perf.clearMeasures(name);
    };
  }
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.functionalContext = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: {} };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    vnode.children,
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.isCloned = true;
  return cloned
}

function cloneVNodes (vnodes) {
  var len = vnodes.length;
  var res = new Array(len);
  for (var i = 0; i < len; i++) {
    res[i] = cloneVNode(vnodes[i]);
  }
  return res
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        cloned[i].apply(null, arguments$1);
      }
    } else {
      // return handler return value for single handlers
      return fns.apply(null, arguments)
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  vm
) {
  var name, cur, old, event;
  for (name in on) {
    cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
      process.env.NODE_ENV !== 'production' && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur);
      }
      add(event.name, cur, event.once, event.capture, event.passive);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

function mergeVNodeHook (def, hookKey, hook) {
  var invoker;
  var oldHook = def[hookKey];

  function wrappedHook () {
    hook.apply(this, arguments);
    // important: remove merged hook to ensure it's called only once
    // and prevent memory leak
    remove(invoker.fns, wrappedHook);
  }

  if (isUndef(oldHook)) {
    // no existing hook
    invoker = createFnInvoker([wrappedHook]);
  } else {
    /* istanbul ignore if */
    if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
      // already a merged invoker
      invoker = oldHook;
      invoker.fns.push(wrappedHook);
    } else {
      // existing plain hook
      invoker = createFnInvoker([oldHook, wrappedHook]);
    }
  }

  invoker.merged = true;
  def[hookKey] = invoker;
}

/*  */

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    return
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (process.env.NODE_ENV !== 'production') {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  return res
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    last = res[res.length - 1];
    //  nested
    if (Array.isArray(c)) {
      res.push.apply(res, normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i)));
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        (last).text += String(c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[res.length - 1] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function ensureCtor (comp, base) {
  if (comp.__esModule && comp.default) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor,
  context
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (isDef(factory.contexts)) {
    // already pending
    factory.contexts.push(context);
  } else {
    var contexts = factory.contexts = [context];
    var sync = true;

    var forceRender = function () {
      for (var i = 0, l = contexts.length; i < l; i++) {
        contexts[i].$forceUpdate();
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender();
      }
    });

    var reject = once(function (reason) {
      process.env.NODE_ENV !== 'production' && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender();
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (typeof res.then === 'function') {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isDef(res.component) && typeof res.component.then === 'function') {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            setTimeout(function () {
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender();
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          setTimeout(function () {
            if (isUndef(factory.resolved)) {
              reject(
                process.env.NODE_ENV !== 'production'
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : null
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && isDef(c.componentOptions)) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn, once$$1) {
  if (once$$1) {
    target.$once(event, fn);
  } else {
    target.$on(event, fn);
  }
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, vm);
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var this$1 = this;

    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        this$1.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var this$1 = this;

    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        this$1.$off(event[i$1], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (arguments.length === 1) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (process.env.NODE_ENV !== 'production') {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      for (var i = 0, l = cbs.length; i < l; i++) {
        try {
          cbs[i].apply(vm, args);
        } catch (e) {
          handleError(e, vm, ("event handler for \"" + event + "\""));
        }
      }
    }
    return vm
  };
}

/*  */

/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  var slots = {};
  if (!children) {
    return slots
  }
  var defaultSlot = [];
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.functionalContext === context) &&
      child.data && child.data.slot != null
    ) {
      var name = child.data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children);
      } else {
        slot.push(child);
      }
    } else {
      defaultSlot.push(child);
    }
  }
  // ignore whitespace
  if (!defaultSlot.every(isWhitespace)) {
    slots.default = defaultSlot;
  }
  return slots
}

function isWhitespace (node) {
  return node.isComment || node.text === ' '
}

function resolveScopedSlots (
  fns, // see flow/vnode
  res
) {
  res = res || {};
  for (var i = 0; i < fns.length; i++) {
    if (Array.isArray(fns[i])) {
      resolveScopedSlots(fns[i], res);
    } else {
      res[fns[i].key] = fns[i].fn;
    }
  }
  return res
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    if (vm._isMounted) {
      callHook(vm, 'beforeUpdate');
    }
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var prevActiveInstance = activeInstance;
    activeInstance = vm;
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(
        vm.$el, vnode, hydrating, false /* removeOnly */,
        vm.$options._parentElm,
        vm.$options._refElm
      );
      // no need for the ref nodes after initial patch
      // this prevents keeping a detached DOM tree in memory (#5851)
      vm.$options._parentElm = vm.$options._refElm = null;
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    activeInstance = prevActiveInstance;
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
  };
}

function mountComponent (
  vm,
  el,
  hydrating
) {
  vm.$el = el;
  if (!vm.$options.render) {
    vm.$options.render = createEmptyVNode;
    if (process.env.NODE_ENV !== 'production') {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  callHook(vm, 'beforeMount');

  var updateComponent;
  /* istanbul ignore if */
  if (process.env.NODE_ENV !== 'production' && config.performance && mark) {
    updateComponent = function () {
      var name = vm._name;
      var id = vm._uid;
      var startTag = "vue-perf-start:" + id;
      var endTag = "vue-perf-end:" + id;

      mark(startTag);
      var vnode = vm._render();
      mark(endTag);
      measure((name + " render"), startTag, endTag);

      mark(startTag);
      vm._update(vnode, hydrating);
      mark(endTag);
      measure((name + " patch"), startTag, endTag);
    };
  } else {
    updateComponent = function () {
      vm._update(vm._render(), hydrating);
    };
  }

  vm._watcher = new Watcher(vm, updateComponent, noop);
  hydrating = false;

  // manually mounted instance, call mounted on self
  // mounted is called for render-created child components in its inserted hook
  if (vm.$vnode == null) {
    vm._isMounted = true;
    callHook(vm, 'mounted');
  }
  return vm
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (process.env.NODE_ENV !== 'production') {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren
  var hasChildren = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    parentVnode.data.scopedSlots || // has new scoped slots
    vm.$scopedSlots !== emptyObject // has old scoped slots
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listensers hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data && parentVnode.data.attrs;
  vm.$listeners = listeners;

  // update props
  if (propsData && vm.$options.props) {
    observerState.shouldConvert = false;
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      props[key] = validateProp(key, vm.$options.props, propsData, vm);
    }
    observerState.shouldConvert = true;
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }

  // update listeners
  if (listeners) {
    var oldListeners = vm.$options._parentListeners;
    vm.$options._parentListeners = listeners;
    updateComponentListeners(vm, listeners, oldListeners);
  }
  // resolve slots + force update if has children
  if (hasChildren) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (process.env.NODE_ENV !== 'production') {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  var handlers = vm.$options[hook];
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      try {
        handlers[i].call(vm);
      } catch (e) {
        handleError(e, vm, (hook + " hook"));
      }
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
}

/*  */


var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (process.env.NODE_ENV !== 'production') {
    circular = {};
  }
  waiting = flushing = false;
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if (process.env.NODE_ENV !== 'production' && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */

var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options
) {
  this.vm = vm;
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression = process.env.NODE_ENV !== 'production'
    ? expOrFn.toString()
    : '';
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = function () {};
      process.env.NODE_ENV !== 'production' && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
    var this$1 = this;

  var i = this.deps.length;
  while (i--) {
    var dep = this$1.deps[i];
    if (!this$1.newDepIds.has(dep.id)) {
      dep.removeSub(this$1);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
    var this$1 = this;

  var i = this.deps.length;
  while (i--) {
    this$1.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
    var this$1 = this;

  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this$1.deps[i].removeSub(this$1);
    }
    this.active = false;
  }
};

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
var seenObjects = new _Set();
function traverse (val) {
  seenObjects.clear();
  _traverse(val, seenObjects);
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || !Object.isExtensible(val)) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function checkOptionType (vm, name) {
  var option = vm.$options[name];
  if (!isPlainObject(option)) {
    warn(
      ("component option \"" + name + "\" should be an object."),
      vm
    );
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  observerState.shouldConvert = isRoot;
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (process.env.NODE_ENV !== 'production') {
      if (isReservedAttribute(key) || config.isReservedAttr(key)) {
        warn(
          ("\"" + key + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(props, key, value, function () {
        if (vm.$parent && !isUpdatingChildComponent) {
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {
      defineReactive$$1(props, key, value);
    }
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  observerState.shouldConvert = true;
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
    process.env.NODE_ENV !== 'production' && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (process.env.NODE_ENV !== 'production') {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
      process.env.NODE_ENV !== 'production' && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  try {
    return data.call(vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  process.env.NODE_ENV !== 'production' && checkOptionType(vm, 'computed');
  var watchers = vm._computedWatchers = Object.create(null);

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if (process.env.NODE_ENV !== 'production' && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }
    // create internal watcher for the computed property.
    watchers[key] = new Watcher(vm, getter || noop, noop, computedWatcherOptions);

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (process.env.NODE_ENV !== 'production') {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (target, key, userDef) {
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = createComputedGetter(key);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? userDef.cache !== false
        ? createComputedGetter(key)
        : userDef.get
      : noop;
    sharedPropertyDefinition.set = userDef.set
      ? userDef.set
      : noop;
  }
  if (process.env.NODE_ENV !== 'production' &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.target) {
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function initMethods (vm, methods) {
  process.env.NODE_ENV !== 'production' && checkOptionType(vm, 'methods');
  var props = vm.$options.props;
  for (var key in methods) {
    vm[key] = methods[key] == null ? noop : bind(methods[key], vm);
    if (process.env.NODE_ENV !== 'production') {
      if (methods[key] == null) {
        warn(
          "method \"" + key + "\" has an undefined value in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
    }
  }
}

function initWatch (vm, watch) {
  process.env.NODE_ENV !== 'production' && checkOptionType(vm, 'watch');
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  keyOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(keyOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (process.env.NODE_ENV !== 'production') {
    dataDef.set = function (newData) {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      cb.call(vm, watcher.value);
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    observerState.shouldConvert = false;
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (process.env.NODE_ENV !== 'production') {
        defineReactive$$1(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {
        defineReactive$$1(vm, key, result[key]);
      }
    });
    observerState.shouldConvert = true;
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
        ? Reflect.ownKeys(inject)
        : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      var provideKey = inject[key];
      var source = vm;
      while (source) {
        if (source._provided && provideKey in source._provided) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (process.env.NODE_ENV !== 'production' && !source) {
        warn(("Injection \"" + key + "\" not found"), vm);
      }
    }
    return result
  }
}

/*  */

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  context,
  children
) {
  var props = {};
  var propOptions = Ctor.options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || {});
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var _context = Object.create(context);
  var h = function (a, b, c, d) { return createElement(_context, a, b, c, d, true); };
  var vnode = Ctor.options.render.call(null, h, {
    data: data,
    props: props,
    children: children,
    parent: context,
    listeners: data.on || {},
    injections: resolveInject(Ctor.options.inject, context),
    slots: function () { return resolveSlots(children, context); }
  });
  if (vnode instanceof VNode) {
    vnode.functionalContext = context;
    vnode.functionalOptions = Ctor.options;
    if (data.slot) {
      (vnode.data || (vnode.data = {})).slot = data.slot;
    }
  }
  return vnode
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

// hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (
    vnode,
    hydrating,
    parentElm,
    refElm
  ) {
    if (!vnode.componentInstance || vnode.componentInstance._isDestroyed) {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance,
        parentElm,
        refElm
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    } else if (vnode.data.keepAlive) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (process.env.NODE_ENV !== 'production') {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor, context);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag);

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // merge component management hooks onto the placeholder node
  mergeHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );
  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent, // activeInstance in lifecycle state
  parentElm,
  refElm
) {
  var vnodeComponentOptions = vnode.componentOptions;
  var options = {
    _isComponent: true,
    parent: parent,
    propsData: vnodeComponentOptions.propsData,
    _componentTag: vnodeComponentOptions.tag,
    _parentVnode: vnode,
    _parentListeners: vnodeComponentOptions.listeners,
    _renderChildren: vnodeComponentOptions.children,
    _parentElm: parentElm || null,
    _refElm: refElm || null
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnodeComponentOptions.Ctor(options)
}

function mergeHooks (data) {
  if (!data.hook) {
    data.hook = {};
  }
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var fromParent = data.hook[key];
    var ours = componentVNodeHooks[key];
    data.hook[key] = fromParent ? mergeHook$1(ours, fromParent) : ours;
  }
}

function mergeHook$1 (one, two) {
  return function (a, b, c, d) {
    one(a, b, c, d);
    two(a, b, c, d);
  }
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input';(data.props || (data.props = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  if (isDef(on[event])) {
    on[event] = [data.model.callback].concat(on[event]);
  } else {
    on[event] = data.model.callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
    process.env.NODE_ENV !== 'production' && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if (process.env.NODE_ENV !== 'production' &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    warn(
      'Avoid using non-primitive value as key, ' +
      'use string/number value instead.',
      context
    );
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if (isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (isDef(vnode)) {
    if (ns) { applyNS(vnode, ns); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    return
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && isUndef(child.ns)) {
        applyNS(child, ns);
      }
    }
  }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i);
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i);
    }
  } else if (isObject(val)) {
    keys = Object.keys(val);
    ret = new Array(keys.length);
    for (i = 0, l = keys.length; i < l; i++) {
      key = keys[i];
      ret[i] = render(val[key], key, i);
    }
  }
  if (isDef(ret)) {
    (ret)._isVList = true;
  }
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      props = extend(extend({}, bindObject), props);
    }
    return scopedSlotFn(props) || fallback
  } else {
    var slotNodes = this.$slots[name];
    // warn duplicate slot usage
    if (slotNodes && process.env.NODE_ENV !== 'production') {
      slotNodes._rendered && warn(
        "Duplicate presence of slot \"" + name + "\" found in the same render tree " +
        "- this will likely cause render errors.",
        this
      );
      slotNodes._rendered = true;
    }
    return slotNodes || fallback
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

/**
 * Runtime helper for checking keyCodes from config.
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInAlias
) {
  var keyCodes = config.keyCodes[key] || builtInAlias;
  if (Array.isArray(keyCodes)) {
    return keyCodes.indexOf(eventKeyCode) === -1
  } else {
    return keyCodes !== eventKeyCode
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
      process.env.NODE_ENV !== 'production' && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        if (!(key in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var tree = this._staticTrees[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree by doing a shallow clone.
  if (tree && !isInFor) {
    return Array.isArray(tree)
      ? cloneVNodes(tree)
      : cloneVNode(tree)
  }
  // otherwise, render a fresh tree.
  tree = this._staticTrees[index] =
    this.$options.staticRenderFns[index].call(this._renderProxy);
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
      process.env.NODE_ENV !== 'production' && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(ours, existing) : ours;
      }
    }
  }
  return data
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null;
  var parentVnode = vm.$vnode = vm.$options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(vm.$options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;
  /* istanbul ignore else */
  if (process.env.NODE_ENV !== 'production') {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', vm.$options._parentListeners, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs, null, true);
    defineReactive$$1(vm, '$listeners', vm.$options._parentListeners, null, true);
  }
}

function renderMixin (Vue) {
  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var staticRenderFns = ref.staticRenderFns;
    var _parentVnode = ref._parentVnode;

    if (vm._isMounted) {
      // clone slot nodes on re-renders
      for (var key in vm.$slots) {
        vm.$slots[key] = cloneVNodes(vm.$slots[key]);
      }
    }

    vm.$scopedSlots = (_parentVnode && _parentVnode.data.scopedSlots) || emptyObject;

    if (staticRenderFns && !vm._staticTrees) {
      vm._staticTrees = [];
    }
    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render function");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if (process.env.NODE_ENV !== 'production') {
        vnode = vm.$options.renderError
          ? vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e)
          : vm._vnode;
      } else {
        vnode = vm._vnode;
      }
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if (process.env.NODE_ENV !== 'production' && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };

  // internal render helpers.
  // these are exposed on the instance prototype to reduce generated render
  // code size.
  Vue.prototype._o = markOnce;
  Vue.prototype._n = toNumber;
  Vue.prototype._s = toString;
  Vue.prototype._l = renderList;
  Vue.prototype._t = renderSlot;
  Vue.prototype._q = looseEqual;
  Vue.prototype._i = looseIndexOf;
  Vue.prototype._m = renderStatic;
  Vue.prototype._f = resolveFilter;
  Vue.prototype._k = checkKeyCodes;
  Vue.prototype._b = bindObjectProps;
  Vue.prototype._v = createTextVNode;
  Vue.prototype._e = createEmptyVNode;
  Vue.prototype._u = resolveScopedSlots;
  Vue.prototype._g = bindObjectListeners;
}

/*  */

var uid = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid++;

    var startTag, endTag;
    /* istanbul ignore if */
    if (process.env.NODE_ENV !== 'production' && config.performance && mark) {
      startTag = "vue-perf-init:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (process.env.NODE_ENV !== 'production') {
      initProxy(vm);
    } else {
      vm._renderProxy = vm;
    }
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    initInjections(vm); // resolve injections before data/props
    initState(vm);
    initProvide(vm); // resolve provide after data/props
    callHook(vm, 'created');

    /* istanbul ignore if */
    if (process.env.NODE_ENV !== 'production' && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(((vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  opts.parent = options.parent;
  opts.propsData = options.propsData;
  opts._parentVnode = options._parentVnode;
  opts._parentListeners = options._parentListeners;
  opts._renderChildren = options._renderChildren;
  opts._componentTag = options._componentTag;
  opts._parentElm = options._parentElm;
  opts._refElm = options._refElm;
  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var extended = Ctor.extendOptions;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = dedupe(latest[key], extended[key], sealed[key]);
    }
  }
  return modified
}

function dedupe (latest, extended, sealed) {
  // compare latest and sealed to ensure lifecycle hooks won't be duplicated
  // between merges
  if (Array.isArray(latest)) {
    var res = [];
    sealed = Array.isArray(sealed) ? sealed : [sealed];
    extended = Array.isArray(extended) ? extended : [extended];
    for (var i = 0; i < latest.length; i++) {
      // push original options and not sealed options to exclude duplicated options
      if (extended.indexOf(latest[i]) >= 0 || sealed.indexOf(latest[i]) < 0) {
        res.push(latest[i]);
      }
    }
    return res
  } else {
    return latest
  }
}

function Vue$3 (options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue$3)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue$3);
stateMixin(Vue$3);
eventsMixin(Vue$3);
lifecycleMixin(Vue$3);
renderMixin(Vue$3);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if (process.env.NODE_ENV !== 'production') {
      if (!/^[a-zA-Z][\w-]*$/.test(name)) {
        warn(
          'Invalid component name: "' + name + '". Component names ' +
          'can only contain alphanumeric characters and the hyphen, ' +
          'and must start with a letter.'
        );
      }
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if (process.env.NODE_ENV !== 'production') {
          if (type === 'component' && config.isReservedTag(id)) {
            warn(
              'Do not use built-in or reserved HTML elements as component ' +
              'id: ' + id
            );
          }
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */

var patternTypes = [String, RegExp, Array];

function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (cache, current, filter) {
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        if (cachedNode !== current) {
          pruneCacheEntry(cachedNode);
        }
        cache[key] = null;
      }
    }
  }
}

function pruneCacheEntry (vnode) {
  if (vnode) {
    vnode.componentInstance.$destroy();
  }
}

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes
  },

  created: function created () {
    this.cache = Object.create(null);
  },

  destroyed: function destroyed () {
    var this$1 = this;

    for (var key in this$1.cache) {
      pruneCacheEntry(this$1.cache[key]);
    }
  },

  watch: {
    include: function include (val) {
      pruneCache(this.cache, this._vnode, function (name) { return matches(val, name); });
    },
    exclude: function exclude (val) {
      pruneCache(this.cache, this._vnode, function (name) { return !matches(val, name); });
    }
  },

  render: function render () {
    var vnode = getFirstComponentChild(this.$slots.default);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      if (name && (
        (this.include && !matches(this.include, name)) ||
        (this.exclude && matches(this.exclude, name))
      )) {
        return vnode
      }
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (this.cache[key]) {
        vnode.componentInstance = this.cache[key].componentInstance;
      } else {
        this.cache[key] = vnode;
      }
      vnode.data.keepAlive = true;
    }
    return vnode
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (process.env.NODE_ENV !== 'production') {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue$3);

Object.defineProperty(Vue$3.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue$3.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

Vue$3.version = '2.4.2';

/*  */

// these are reserved for web because they are directly compiled away
// during template compilation
var isReservedAttr = makeMap('style,class');

// attributes that should be using props for binding
var acceptValue = makeMap('input,textarea,option,select');
var mustUseProp = function (tag, type, attr) {
  return (
    (attr === 'value' && acceptValue(tag)) && type !== 'button' ||
    (attr === 'selected' && tag === 'option') ||
    (attr === 'checked' && tag === 'input') ||
    (attr === 'muted' && tag === 'video')
  )
};

var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');

var isBooleanAttr = makeMap(
  'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
  'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
  'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
  'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
  'required,reversed,scoped,seamless,selected,sortable,translate,' +
  'truespeed,typemustmatch,visible'
);

var xlinkNS = 'http://www.w3.org/1999/xlink';

var isXlink = function (name) {
  return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink'
};

var getXlinkProp = function (name) {
  return isXlink(name) ? name.slice(6, name.length) : ''
};

var isFalsyAttrValue = function (val) {
  return val == null || val === false
};

/*  */

function genClassForVnode (vnode) {
  var data = vnode.data;
  var parentNode = vnode;
  var childNode = vnode;
  while (isDef(childNode.componentInstance)) {
    childNode = childNode.componentInstance._vnode;
    if (childNode.data) {
      data = mergeClassData(childNode.data, data);
    }
  }
  while (isDef(parentNode = parentNode.parent)) {
    if (parentNode.data) {
      data = mergeClassData(data, parentNode.data);
    }
  }
  return renderClass(data.staticClass, data.class)
}

function mergeClassData (child, parent) {
  return {
    staticClass: concat(child.staticClass, parent.staticClass),
    class: isDef(child.class)
      ? [child.class, parent.class]
      : parent.class
  }
}

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var namespaceMap = {
  svg: 'http://www.w3.org/2000/svg',
  math: 'http://www.w3.org/1998/Math/MathML'
};

var isHTMLTag = makeMap(
  'html,body,base,head,link,meta,style,title,' +
  'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
  'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' +
  'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
  's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
  'embed,object,param,source,canvas,script,noscript,del,ins,' +
  'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
  'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
  'output,progress,select,textarea,' +
  'details,dialog,menu,menuitem,summary,' +
  'content,element,shadow,template,blockquote,iframe,tfoot'
);

// this map is intentionally selective, only covering SVG elements that may
// contain child elements.
var isSVG = makeMap(
  'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' +
  'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
  'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
  true
);



var isReservedTag = function (tag) {
  return isHTMLTag(tag) || isSVG(tag)
};

function getTagNamespace (tag) {
  if (isSVG(tag)) {
    return 'svg'
  }
  // basic support for MathML
  // note it doesn't support other MathML elements being component roots
  if (tag === 'math') {
    return 'math'
  }
}

var unknownElementCache = Object.create(null);
function isUnknownElement (tag) {
  /* istanbul ignore if */
  if (!inBrowser) {
    return true
  }
  if (isReservedTag(tag)) {
    return false
  }
  tag = tag.toLowerCase();
  /* istanbul ignore if */
  if (unknownElementCache[tag] != null) {
    return unknownElementCache[tag]
  }
  var el = document.createElement(tag);
  if (tag.indexOf('-') > -1) {
    // http://stackoverflow.com/a/28210364/1070244
    return (unknownElementCache[tag] = (
      el.constructor === window.HTMLUnknownElement ||
      el.constructor === window.HTMLElement
    ))
  } else {
    return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()))
  }
}

/*  */

/**
 * Query an element selector if it's not an element already.
 */
function query (el) {
  if (typeof el === 'string') {
    var selected = document.querySelector(el);
    if (!selected) {
      process.env.NODE_ENV !== 'production' && warn(
        'Cannot find element: ' + el
      );
      return document.createElement('div')
    }
    return selected
  } else {
    return el
  }
}

/*  */

function createElement$1 (tagName, vnode) {
  var elm = document.createElement(tagName);
  if (tagName !== 'select') {
    return elm
  }
  // false or null will remove the attribute but undefined will not
  if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
    elm.setAttribute('multiple', 'multiple');
  }
  return elm
}

function createElementNS (namespace, tagName) {
  return document.createElementNS(namespaceMap[namespace], tagName)
}

function createTextNode (text) {
  return document.createTextNode(text)
}

function createComment (text) {
  return document.createComment(text)
}

function insertBefore (parentNode, newNode, referenceNode) {
  parentNode.insertBefore(newNode, referenceNode);
}

function removeChild (node, child) {
  node.removeChild(child);
}

function appendChild (node, child) {
  node.appendChild(child);
}

function parentNode (node) {
  return node.parentNode
}

function nextSibling (node) {
  return node.nextSibling
}

function tagName (node) {
  return node.tagName
}

function setTextContent (node, text) {
  node.textContent = text;
}

function setAttribute (node, key, val) {
  node.setAttribute(key, val);
}


var nodeOps = Object.freeze({
	createElement: createElement$1,
	createElementNS: createElementNS,
	createTextNode: createTextNode,
	createComment: createComment,
	insertBefore: insertBefore,
	removeChild: removeChild,
	appendChild: appendChild,
	parentNode: parentNode,
	nextSibling: nextSibling,
	tagName: tagName,
	setTextContent: setTextContent,
	setAttribute: setAttribute
});

/*  */

var ref = {
  create: function create (_, vnode) {
    registerRef(vnode);
  },
  update: function update (oldVnode, vnode) {
    if (oldVnode.data.ref !== vnode.data.ref) {
      registerRef(oldVnode, true);
      registerRef(vnode);
    }
  },
  destroy: function destroy (vnode) {
    registerRef(vnode, true);
  }
};

function registerRef (vnode, isRemoval) {
  var key = vnode.data.ref;
  if (!key) { return }

  var vm = vnode.context;
  var ref = vnode.componentInstance || vnode.elm;
  var refs = vm.$refs;
  if (isRemoval) {
    if (Array.isArray(refs[key])) {
      remove(refs[key], ref);
    } else if (refs[key] === ref) {
      refs[key] = undefined;
    }
  } else {
    if (vnode.data.refInFor) {
      if (!Array.isArray(refs[key])) {
        refs[key] = [ref];
      } else if (refs[key].indexOf(ref) < 0) {
        // $flow-disable-line
        refs[key].push(ref);
      }
    } else {
      refs[key] = ref;
    }
  }
}

/**
 * Virtual DOM patching algorithm based on Snabbdom by
 * Simon Friis Vindum (@paldepind)
 * Licensed under the MIT License
 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
 *
 * modified by Evan You (@yyx990803)
 *

/*
 * Not type-checking this because this file is perf-critical and the cost
 * of making flow understand it is not worth it.
 */

var emptyNode = new VNode('', {}, []);

var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

function sameVnode (a, b) {
  return (
    a.key === b.key && (
      (
        a.tag === b.tag &&
        a.isComment === b.isComment &&
        isDef(a.data) === isDef(b.data) &&
        sameInputType(a, b)
      ) || (
        isTrue(a.isAsyncPlaceholder) &&
        a.asyncFactory === b.asyncFactory &&
        isUndef(b.asyncFactory.error)
      )
    )
  )
}

// Some browsers do not support dynamically changing type for <input>
// so they need to be treated as different nodes
function sameInputType (a, b) {
  if (a.tag !== 'input') { return true }
  var i;
  var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
  var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
  return typeA === typeB
}

function createKeyToOldIdx (children, beginIdx, endIdx) {
  var i, key;
  var map = {};
  for (i = beginIdx; i <= endIdx; ++i) {
    key = children[i].key;
    if (isDef(key)) { map[key] = i; }
  }
  return map
}

function createPatchFunction (backend) {
  var i, j;
  var cbs = {};

  var modules = backend.modules;
  var nodeOps = backend.nodeOps;

  for (i = 0; i < hooks.length; ++i) {
    cbs[hooks[i]] = [];
    for (j = 0; j < modules.length; ++j) {
      if (isDef(modules[j][hooks[i]])) {
        cbs[hooks[i]].push(modules[j][hooks[i]]);
      }
    }
  }

  function emptyNodeAt (elm) {
    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
  }

  function createRmCb (childElm, listeners) {
    function remove$$1 () {
      if (--remove$$1.listeners === 0) {
        removeNode(childElm);
      }
    }
    remove$$1.listeners = listeners;
    return remove$$1
  }

  function removeNode (el) {
    var parent = nodeOps.parentNode(el);
    // element may have already been removed due to v-html / v-text
    if (isDef(parent)) {
      nodeOps.removeChild(parent, el);
    }
  }

  var inPre = 0;
  function createElm (vnode, insertedVnodeQueue, parentElm, refElm, nested) {
    vnode.isRootInsert = !nested; // for transition enter check
    if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
      return
    }

    var data = vnode.data;
    var children = vnode.children;
    var tag = vnode.tag;
    if (isDef(tag)) {
      if (process.env.NODE_ENV !== 'production') {
        if (data && data.pre) {
          inPre++;
        }
        if (
          !inPre &&
          !vnode.ns &&
          !(config.ignoredElements.length && config.ignoredElements.indexOf(tag) > -1) &&
          config.isUnknownElement(tag)
        ) {
          warn(
            'Unknown custom element: <' + tag + '> - did you ' +
            'register the component correctly? For recursive components, ' +
            'make sure to provide the "name" option.',
            vnode.context
          );
        }
      }
      vnode.elm = vnode.ns
        ? nodeOps.createElementNS(vnode.ns, tag)
        : nodeOps.createElement(tag, vnode);
      setScope(vnode);

      /* istanbul ignore if */
      {
        createChildren(vnode, children, insertedVnodeQueue);
        if (isDef(data)) {
          invokeCreateHooks(vnode, insertedVnodeQueue);
        }
        insert(parentElm, vnode.elm, refElm);
      }

      if (process.env.NODE_ENV !== 'production' && data && data.pre) {
        inPre--;
      }
    } else if (isTrue(vnode.isComment)) {
      vnode.elm = nodeOps.createComment(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    } else {
      vnode.elm = nodeOps.createTextNode(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    }
  }

  function createComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i = vnode.data;
    if (isDef(i)) {
      var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
      if (isDef(i = i.hook) && isDef(i = i.init)) {
        i(vnode, false /* hydrating */, parentElm, refElm);
      }
      // after calling the init hook, if the vnode is a child component
      // it should've created a child instance and mounted it. the child
      // component also has set the placeholder vnode's elm.
      // in that case we can just return the element and be done.
      if (isDef(vnode.componentInstance)) {
        initComponent(vnode, insertedVnodeQueue);
        if (isTrue(isReactivated)) {
          reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
        }
        return true
      }
    }
  }

  function initComponent (vnode, insertedVnodeQueue) {
    if (isDef(vnode.data.pendingInsert)) {
      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
      vnode.data.pendingInsert = null;
    }
    vnode.elm = vnode.componentInstance.$el;
    if (isPatchable(vnode)) {
      invokeCreateHooks(vnode, insertedVnodeQueue);
      setScope(vnode);
    } else {
      // empty component root.
      // skip all element-related modules except for ref (#3455)
      registerRef(vnode);
      // make sure to invoke the insert hook
      insertedVnodeQueue.push(vnode);
    }
  }

  function reactivateComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i;
    // hack for #4339: a reactivated component with inner transition
    // does not trigger because the inner node's created hooks are not called
    // again. It's not ideal to involve module-specific logic in here but
    // there doesn't seem to be a better way to do it.
    var innerNode = vnode;
    while (innerNode.componentInstance) {
      innerNode = innerNode.componentInstance._vnode;
      if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
        for (i = 0; i < cbs.activate.length; ++i) {
          cbs.activate[i](emptyNode, innerNode);
        }
        insertedVnodeQueue.push(innerNode);
        break
      }
    }
    // unlike a newly created component,
    // a reactivated keep-alive component doesn't insert itself
    insert(parentElm, vnode.elm, refElm);
  }

  function insert (parent, elm, ref$$1) {
    if (isDef(parent)) {
      if (isDef(ref$$1)) {
        if (ref$$1.parentNode === parent) {
          nodeOps.insertBefore(parent, elm, ref$$1);
        }
      } else {
        nodeOps.appendChild(parent, elm);
      }
    }
  }

  function createChildren (vnode, children, insertedVnodeQueue) {
    if (Array.isArray(children)) {
      for (var i = 0; i < children.length; ++i) {
        createElm(children[i], insertedVnodeQueue, vnode.elm, null, true);
      }
    } else if (isPrimitive(vnode.text)) {
      nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(vnode.text));
    }
  }

  function isPatchable (vnode) {
    while (vnode.componentInstance) {
      vnode = vnode.componentInstance._vnode;
    }
    return isDef(vnode.tag)
  }

  function invokeCreateHooks (vnode, insertedVnodeQueue) {
    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
      cbs.create[i$1](emptyNode, vnode);
    }
    i = vnode.data.hook; // Reuse variable
    if (isDef(i)) {
      if (isDef(i.create)) { i.create(emptyNode, vnode); }
      if (isDef(i.insert)) { insertedVnodeQueue.push(vnode); }
    }
  }

  // set scope id attribute for scoped CSS.
  // this is implemented as a special case to avoid the overhead
  // of going through the normal attribute patching process.
  function setScope (vnode) {
    var i;
    var ancestor = vnode;
    while (ancestor) {
      if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
        nodeOps.setAttribute(vnode.elm, i, '');
      }
      ancestor = ancestor.parent;
    }
    // for slot content they should also get the scopeId from the host instance.
    if (isDef(i = activeInstance) &&
      i !== vnode.context &&
      isDef(i = i.$options._scopeId)
    ) {
      nodeOps.setAttribute(vnode.elm, i, '');
    }
  }

  function addVnodes (parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
    for (; startIdx <= endIdx; ++startIdx) {
      createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm);
    }
  }

  function invokeDestroyHook (vnode) {
    var i, j;
    var data = vnode.data;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.destroy)) { i(vnode); }
      for (i = 0; i < cbs.destroy.length; ++i) { cbs.destroy[i](vnode); }
    }
    if (isDef(i = vnode.children)) {
      for (j = 0; j < vnode.children.length; ++j) {
        invokeDestroyHook(vnode.children[j]);
      }
    }
  }

  function removeVnodes (parentElm, vnodes, startIdx, endIdx) {
    for (; startIdx <= endIdx; ++startIdx) {
      var ch = vnodes[startIdx];
      if (isDef(ch)) {
        if (isDef(ch.tag)) {
          removeAndInvokeRemoveHook(ch);
          invokeDestroyHook(ch);
        } else { // Text node
          removeNode(ch.elm);
        }
      }
    }
  }

  function removeAndInvokeRemoveHook (vnode, rm) {
    if (isDef(rm) || isDef(vnode.data)) {
      var i;
      var listeners = cbs.remove.length + 1;
      if (isDef(rm)) {
        // we have a recursively passed down rm callback
        // increase the listeners count
        rm.listeners += listeners;
      } else {
        // directly removing
        rm = createRmCb(vnode.elm, listeners);
      }
      // recursively invoke hooks on child component root node
      if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
        removeAndInvokeRemoveHook(i, rm);
      }
      for (i = 0; i < cbs.remove.length; ++i) {
        cbs.remove[i](vnode, rm);
      }
      if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
        i(vnode, rm);
      } else {
        rm();
      }
    } else {
      removeNode(vnode.elm);
    }
  }

  function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
    var oldStartIdx = 0;
    var newStartIdx = 0;
    var oldEndIdx = oldCh.length - 1;
    var oldStartVnode = oldCh[0];
    var oldEndVnode = oldCh[oldEndIdx];
    var newEndIdx = newCh.length - 1;
    var newStartVnode = newCh[0];
    var newEndVnode = newCh[newEndIdx];
    var oldKeyToIdx, idxInOld, elmToMove, refElm;

    // removeOnly is a special flag used only by <transition-group>
    // to ensure removed elements stay in correct relative positions
    // during leaving transitions
    var canMove = !removeOnly;

    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      if (isUndef(oldStartVnode)) {
        oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
      } else if (isUndef(oldEndVnode)) {
        oldEndVnode = oldCh[--oldEndIdx];
      } else if (sameVnode(oldStartVnode, newStartVnode)) {
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue);
        oldStartVnode = oldCh[++oldStartIdx];
        newStartVnode = newCh[++newStartIdx];
      } else if (sameVnode(oldEndVnode, newEndVnode)) {
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue);
        oldEndVnode = oldCh[--oldEndIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue);
        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
        oldStartVnode = oldCh[++oldStartIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue);
        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
        oldEndVnode = oldCh[--oldEndIdx];
        newStartVnode = newCh[++newStartIdx];
      } else {
        if (isUndef(oldKeyToIdx)) { oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx); }
        idxInOld = isDef(newStartVnode.key) ? oldKeyToIdx[newStartVnode.key] : null;
        if (isUndef(idxInOld)) { // New element
          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm);
          newStartVnode = newCh[++newStartIdx];
        } else {
          elmToMove = oldCh[idxInOld];
          /* istanbul ignore if */
          if (process.env.NODE_ENV !== 'production' && !elmToMove) {
            warn(
              'It seems there are duplicate keys that is causing an update error. ' +
              'Make sure each v-for item has a unique key.'
            );
          }
          if (sameVnode(elmToMove, newStartVnode)) {
            patchVnode(elmToMove, newStartVnode, insertedVnodeQueue);
            oldCh[idxInOld] = undefined;
            canMove && nodeOps.insertBefore(parentElm, elmToMove.elm, oldStartVnode.elm);
            newStartVnode = newCh[++newStartIdx];
          } else {
            // same key but different element. treat as new element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm);
            newStartVnode = newCh[++newStartIdx];
          }
        }
      }
    }
    if (oldStartIdx > oldEndIdx) {
      refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
      addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
    } else if (newStartIdx > newEndIdx) {
      removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
    }
  }

  function patchVnode (oldVnode, vnode, insertedVnodeQueue, removeOnly) {
    if (oldVnode === vnode) {
      return
    }

    var elm = vnode.elm = oldVnode.elm;

    if (isTrue(oldVnode.isAsyncPlaceholder)) {
      if (isDef(vnode.asyncFactory.resolved)) {
        hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
      } else {
        vnode.isAsyncPlaceholder = true;
      }
      return
    }

    // reuse element for static trees.
    // note we only do this if the vnode is cloned -
    // if the new node is not cloned it means the render functions have been
    // reset by the hot-reload-api and we need to do a proper re-render.
    if (isTrue(vnode.isStatic) &&
      isTrue(oldVnode.isStatic) &&
      vnode.key === oldVnode.key &&
      (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))
    ) {
      vnode.componentInstance = oldVnode.componentInstance;
      return
    }

    var i;
    var data = vnode.data;
    if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
      i(oldVnode, vnode);
    }

    var oldCh = oldVnode.children;
    var ch = vnode.children;
    if (isDef(data) && isPatchable(vnode)) {
      for (i = 0; i < cbs.update.length; ++i) { cbs.update[i](oldVnode, vnode); }
      if (isDef(i = data.hook) && isDef(i = i.update)) { i(oldVnode, vnode); }
    }
    if (isUndef(vnode.text)) {
      if (isDef(oldCh) && isDef(ch)) {
        if (oldCh !== ch) { updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly); }
      } else if (isDef(ch)) {
        if (isDef(oldVnode.text)) { nodeOps.setTextContent(elm, ''); }
        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
      } else if (isDef(oldCh)) {
        removeVnodes(elm, oldCh, 0, oldCh.length - 1);
      } else if (isDef(oldVnode.text)) {
        nodeOps.setTextContent(elm, '');
      }
    } else if (oldVnode.text !== vnode.text) {
      nodeOps.setTextContent(elm, vnode.text);
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.postpatch)) { i(oldVnode, vnode); }
    }
  }

  function invokeInsertHook (vnode, queue, initial) {
    // delay insert hooks for component root nodes, invoke them after the
    // element is really inserted
    if (isTrue(initial) && isDef(vnode.parent)) {
      vnode.parent.data.pendingInsert = queue;
    } else {
      for (var i = 0; i < queue.length; ++i) {
        queue[i].data.hook.insert(queue[i]);
      }
    }
  }

  var bailed = false;
  // list of modules that can skip create hook during hydration because they
  // are already rendered on the client or has no need for initialization
  var isRenderedModule = makeMap('attrs,style,class,staticClass,staticStyle,key');

  // Note: this is a browser-only function so we can assume elms are DOM nodes.
  function hydrate (elm, vnode, insertedVnodeQueue) {
    if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
      vnode.elm = elm;
      vnode.isAsyncPlaceholder = true;
      return true
    }
    if (process.env.NODE_ENV !== 'production') {
      if (!assertNodeMatch(elm, vnode)) {
        return false
      }
    }
    vnode.elm = elm;
    var tag = vnode.tag;
    var data = vnode.data;
    var children = vnode.children;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode, true /* hydrating */); }
      if (isDef(i = vnode.componentInstance)) {
        // child component. it should have hydrated its own tree.
        initComponent(vnode, insertedVnodeQueue);
        return true
      }
    }
    if (isDef(tag)) {
      if (isDef(children)) {
        // empty element, allow client to pick up and populate children
        if (!elm.hasChildNodes()) {
          createChildren(vnode, children, insertedVnodeQueue);
        } else {
          var childrenMatch = true;
          var childNode = elm.firstChild;
          for (var i$1 = 0; i$1 < children.length; i$1++) {
            if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue)) {
              childrenMatch = false;
              break
            }
            childNode = childNode.nextSibling;
          }
          // if childNode is not null, it means the actual childNodes list is
          // longer than the virtual children list.
          if (!childrenMatch || childNode) {
            if (process.env.NODE_ENV !== 'production' &&
              typeof console !== 'undefined' &&
              !bailed
            ) {
              bailed = true;
              console.warn('Parent: ', elm);
              console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
            }
            return false
          }
        }
      }
      if (isDef(data)) {
        for (var key in data) {
          if (!isRenderedModule(key)) {
            invokeCreateHooks(vnode, insertedVnodeQueue);
            break
          }
        }
      }
    } else if (elm.data !== vnode.text) {
      elm.data = vnode.text;
    }
    return true
  }

  function assertNodeMatch (node, vnode) {
    if (isDef(vnode.tag)) {
      return (
        vnode.tag.indexOf('vue-component') === 0 ||
        vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase())
      )
    } else {
      return node.nodeType === (vnode.isComment ? 8 : 3)
    }
  }

  return function patch (oldVnode, vnode, hydrating, removeOnly, parentElm, refElm) {
    if (isUndef(vnode)) {
      if (isDef(oldVnode)) { invokeDestroyHook(oldVnode); }
      return
    }

    var isInitialPatch = false;
    var insertedVnodeQueue = [];

    if (isUndef(oldVnode)) {
      // empty mount (likely as component), create new root element
      isInitialPatch = true;
      createElm(vnode, insertedVnodeQueue, parentElm, refElm);
    } else {
      var isRealElement = isDef(oldVnode.nodeType);
      if (!isRealElement && sameVnode(oldVnode, vnode)) {
        // patch existing root node
        patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly);
      } else {
        if (isRealElement) {
          // mounting to a real element
          // check if this is server-rendered content and if we can perform
          // a successful hydration.
          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
            oldVnode.removeAttribute(SSR_ATTR);
            hydrating = true;
          }
          if (isTrue(hydrating)) {
            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
              invokeInsertHook(vnode, insertedVnodeQueue, true);
              return oldVnode
            } else if (process.env.NODE_ENV !== 'production') {
              warn(
                'The client-side rendered virtual DOM tree is not matching ' +
                'server-rendered content. This is likely caused by incorrect ' +
                'HTML markup, for example nesting block-level elements inside ' +
                '<p>, or missing <tbody>. Bailing hydration and performing ' +
                'full client-side render.'
              );
            }
          }
          // either not server-rendered, or hydration failed.
          // create an empty node and replace it
          oldVnode = emptyNodeAt(oldVnode);
        }
        // replacing existing element
        var oldElm = oldVnode.elm;
        var parentElm$1 = nodeOps.parentNode(oldElm);
        createElm(
          vnode,
          insertedVnodeQueue,
          // extremely rare edge case: do not insert if old element is in a
          // leaving transition. Only happens when combining transition +
          // keep-alive + HOCs. (#4590)
          oldElm._leaveCb ? null : parentElm$1,
          nodeOps.nextSibling(oldElm)
        );

        if (isDef(vnode.parent)) {
          // component root element replaced.
          // update parent placeholder node element, recursively
          var ancestor = vnode.parent;
          while (ancestor) {
            ancestor.elm = vnode.elm;
            ancestor = ancestor.parent;
          }
          if (isPatchable(vnode)) {
            for (var i = 0; i < cbs.create.length; ++i) {
              cbs.create[i](emptyNode, vnode.parent);
            }
          }
        }

        if (isDef(parentElm$1)) {
          removeVnodes(parentElm$1, [oldVnode], 0, 0);
        } else if (isDef(oldVnode.tag)) {
          invokeDestroyHook(oldVnode);
        }
      }
    }

    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
    return vnode.elm
  }
}

/*  */

var directives = {
  create: updateDirectives,
  update: updateDirectives,
  destroy: function unbindDirectives (vnode) {
    updateDirectives(vnode, emptyNode);
  }
};

function updateDirectives (oldVnode, vnode) {
  if (oldVnode.data.directives || vnode.data.directives) {
    _update(oldVnode, vnode);
  }
}

function _update (oldVnode, vnode) {
  var isCreate = oldVnode === emptyNode;
  var isDestroy = vnode === emptyNode;
  var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
  var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);

  var dirsWithInsert = [];
  var dirsWithPostpatch = [];

  var key, oldDir, dir;
  for (key in newDirs) {
    oldDir = oldDirs[key];
    dir = newDirs[key];
    if (!oldDir) {
      // new directive, bind
      callHook$1(dir, 'bind', vnode, oldVnode);
      if (dir.def && dir.def.inserted) {
        dirsWithInsert.push(dir);
      }
    } else {
      // existing directive, update
      dir.oldValue = oldDir.value;
      callHook$1(dir, 'update', vnode, oldVnode);
      if (dir.def && dir.def.componentUpdated) {
        dirsWithPostpatch.push(dir);
      }
    }
  }

  if (dirsWithInsert.length) {
    var callInsert = function () {
      for (var i = 0; i < dirsWithInsert.length; i++) {
        callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
      }
    };
    if (isCreate) {
      mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'insert', callInsert);
    } else {
      callInsert();
    }
  }

  if (dirsWithPostpatch.length) {
    mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'postpatch', function () {
      for (var i = 0; i < dirsWithPostpatch.length; i++) {
        callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
      }
    });
  }

  if (!isCreate) {
    for (key in oldDirs) {
      if (!newDirs[key]) {
        // no longer present, unbind
        callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
      }
    }
  }
}

var emptyModifiers = Object.create(null);

function normalizeDirectives$1 (
  dirs,
  vm
) {
  var res = Object.create(null);
  if (!dirs) {
    return res
  }
  var i, dir;
  for (i = 0; i < dirs.length; i++) {
    dir = dirs[i];
    if (!dir.modifiers) {
      dir.modifiers = emptyModifiers;
    }
    res[getRawDirName(dir)] = dir;
    dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
  }
  return res
}

function getRawDirName (dir) {
  return dir.rawName || ((dir.name) + "." + (Object.keys(dir.modifiers || {}).join('.')))
}

function callHook$1 (dir, hook, vnode, oldVnode, isDestroy) {
  var fn = dir.def && dir.def[hook];
  if (fn) {
    try {
      fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
    } catch (e) {
      handleError(e, vnode.context, ("directive " + (dir.name) + " " + hook + " hook"));
    }
  }
}

var baseModules = [
  ref,
  directives
];

/*  */

function updateAttrs (oldVnode, vnode) {
  var opts = vnode.componentOptions;
  if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
    return
  }
  if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
    return
  }
  var key, cur, old;
  var elm = vnode.elm;
  var oldAttrs = oldVnode.data.attrs || {};
  var attrs = vnode.data.attrs || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(attrs.__ob__)) {
    attrs = vnode.data.attrs = extend({}, attrs);
  }

  for (key in attrs) {
    cur = attrs[key];
    old = oldAttrs[key];
    if (old !== cur) {
      setAttr(elm, key, cur);
    }
  }
  // #4391: in IE9, setting type can reset value for input[type=radio]
  /* istanbul ignore if */
  if (isIE9 && attrs.value !== oldAttrs.value) {
    setAttr(elm, 'value', attrs.value);
  }
  for (key in oldAttrs) {
    if (isUndef(attrs[key])) {
      if (isXlink(key)) {
        elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
      } else if (!isEnumeratedAttr(key)) {
        elm.removeAttribute(key);
      }
    }
  }
}

function setAttr (el, key, value) {
  if (isBooleanAttr(key)) {
    // set attribute for blank value
    // e.g. <option disabled>Select one</option>
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      el.setAttribute(key, key);
    }
  } else if (isEnumeratedAttr(key)) {
    el.setAttribute(key, isFalsyAttrValue(value) || value === 'false' ? 'false' : 'true');
  } else if (isXlink(key)) {
    if (isFalsyAttrValue(value)) {
      el.removeAttributeNS(xlinkNS, getXlinkProp(key));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      el.setAttribute(key, value);
    }
  }
}

var attrs = {
  create: updateAttrs,
  update: updateAttrs
};

/*  */

function updateClass (oldVnode, vnode) {
  var el = vnode.elm;
  var data = vnode.data;
  var oldData = oldVnode.data;
  if (
    isUndef(data.staticClass) &&
    isUndef(data.class) && (
      isUndef(oldData) || (
        isUndef(oldData.staticClass) &&
        isUndef(oldData.class)
      )
    )
  ) {
    return
  }

  var cls = genClassForVnode(vnode);

  // handle transition classes
  var transitionClass = el._transitionClasses;
  if (isDef(transitionClass)) {
    cls = concat(cls, stringifyClass(transitionClass));
  }

  // set the class
  if (cls !== el._prevClass) {
    el.setAttribute('class', cls);
    el._prevClass = cls;
  }
}

var klass = {
  create: updateClass,
  update: updateClass
};

/*  */

var validDivisionCharRE = /[\w).+\-_$\]]/;



function wrapFilter (exp, filter) {
  var i = filter.indexOf('(');
  if (i < 0) {
    // _f: resolveFilter
    return ("_f(\"" + filter + "\")(" + exp + ")")
  } else {
    var name = filter.slice(0, i);
    var args = filter.slice(i + 1);
    return ("_f(\"" + name + "\")(" + exp + "," + args)
  }
}

/*  */

/*  */

/**
 * Cross-platform code generation for component v-model
 */


/**
 * Cross-platform codegen helper for generating v-model value assignment code.
 */


/**
 * parse directive model to do the array update transform. a[idx] = val => $$a.splice($$idx, 1, val)
 *
 * for loop possible cases:
 *
 * - test
 * - test[idx]
 * - test[test1[idx]]
 * - test["a"][idx]
 * - xxx.test[a[a].test1[idx]]
 * - test.xxx.a["asa"][test1[idx]]
 *
 */

var str;
var index$1;

/*  */

// in some cases, the event used has to be determined at runtime
// so we used some reserved tokens during compile.
var RANGE_TOKEN = '__r';
var CHECKBOX_RADIO_TOKEN = '__c';

/*  */

// normalize v-model event tokens that can only be determined at runtime.
// it's important to place the event as the first in the array because
// the whole point is ensuring the v-model callback gets called before
// user-attached handlers.
function normalizeEvents (on) {
  var event;
  /* istanbul ignore if */
  if (isDef(on[RANGE_TOKEN])) {
    // IE input[type=range] only supports `change` event
    event = isIE ? 'change' : 'input';
    on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
    delete on[RANGE_TOKEN];
  }
  if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
    // Chrome fires microtasks in between click/change, leads to #4521
    event = isChrome ? 'click' : 'change';
    on[event] = [].concat(on[CHECKBOX_RADIO_TOKEN], on[event] || []);
    delete on[CHECKBOX_RADIO_TOKEN];
  }
}

var target$1;

function add$1 (
  event,
  handler,
  once$$1,
  capture,
  passive
) {
  if (once$$1) {
    var oldHandler = handler;
    var _target = target$1; // save current target element in closure
    handler = function (ev) {
      var res = arguments.length === 1
        ? oldHandler(ev)
        : oldHandler.apply(null, arguments);
      if (res !== null) {
        remove$2(event, handler, capture, _target);
      }
    };
  }
  target$1.addEventListener(
    event,
    handler,
    supportsPassive
      ? { capture: capture, passive: passive }
      : capture
  );
}

function remove$2 (
  event,
  handler,
  capture,
  _target
) {
  (_target || target$1).removeEventListener(event, handler, capture);
}

function updateDOMListeners (oldVnode, vnode) {
  if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
    return
  }
  var on = vnode.data.on || {};
  var oldOn = oldVnode.data.on || {};
  target$1 = vnode.elm;
  normalizeEvents(on);
  updateListeners(on, oldOn, add$1, remove$2, vnode.context);
}

var events = {
  create: updateDOMListeners,
  update: updateDOMListeners
};

/*  */

function updateDOMProps (oldVnode, vnode) {
  if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
    return
  }
  var key, cur;
  var elm = vnode.elm;
  var oldProps = oldVnode.data.domProps || {};
  var props = vnode.data.domProps || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(props.__ob__)) {
    props = vnode.data.domProps = extend({}, props);
  }

  for (key in oldProps) {
    if (isUndef(props[key])) {
      elm[key] = '';
    }
  }
  for (key in props) {
    cur = props[key];
    // ignore children if the node has textContent or innerHTML,
    // as these will throw away existing DOM nodes and cause removal errors
    // on subsequent patches (#3360)
    if (key === 'textContent' || key === 'innerHTML') {
      if (vnode.children) { vnode.children.length = 0; }
      if (cur === oldProps[key]) { continue }
    }

    if (key === 'value') {
      // store value as _value as well since
      // non-string values will be stringified
      elm._value = cur;
      // avoid resetting cursor position when value is the same
      var strCur = isUndef(cur) ? '' : String(cur);
      if (shouldUpdateValue(elm, vnode, strCur)) {
        elm.value = strCur;
      }
    } else {
      elm[key] = cur;
    }
  }
}

// check platforms/web/util/attrs.js acceptValue


function shouldUpdateValue (
  elm,
  vnode,
  checkVal
) {
  return (!elm.composing && (
    vnode.tag === 'option' ||
    isDirty(elm, checkVal) ||
    isInputChanged(elm, checkVal)
  ))
}

function isDirty (elm, checkVal) {
  // return true when textbox (.number and .trim) loses focus and its value is
  // not equal to the updated value
  var notInFocus = true;
  // #6157
  // work around IE bug when accessing document.activeElement in an iframe
  try { notInFocus = document.activeElement !== elm; } catch (e) {}
  return notInFocus && elm.value !== checkVal
}

function isInputChanged (elm, newVal) {
  var value = elm.value;
  var modifiers = elm._vModifiers; // injected by v-model runtime
  if (isDef(modifiers) && modifiers.number) {
    return toNumber(value) !== toNumber(newVal)
  }
  if (isDef(modifiers) && modifiers.trim) {
    return value.trim() !== newVal.trim()
  }
  return value !== newVal
}

var domProps = {
  create: updateDOMProps,
  update: updateDOMProps
};

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// merge static and dynamic style data on the same vnode
function normalizeStyleData (data) {
  var style = normalizeStyleBinding(data.style);
  // static style is pre-processed into an object during compilation
  // and is always a fresh object, so it's safe to merge into it
  return data.staticStyle
    ? extend(data.staticStyle, style)
    : style
}

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/**
 * parent component style should be after child's
 * so that parent component's style could override it
 */
function getStyle (vnode, checkChild) {
  var res = {};
  var styleData;

  if (checkChild) {
    var childNode = vnode;
    while (childNode.componentInstance) {
      childNode = childNode.componentInstance._vnode;
      if (childNode.data && (styleData = normalizeStyleData(childNode.data))) {
        extend(res, styleData);
      }
    }
  }

  if ((styleData = normalizeStyleData(vnode.data))) {
    extend(res, styleData);
  }

  var parentNode = vnode;
  while ((parentNode = parentNode.parent)) {
    if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
      extend(res, styleData);
    }
  }
  return res
}

/*  */

var cssVarRE = /^--/;
var importantRE = /\s*!important$/;
var setProp = function (el, name, val) {
  /* istanbul ignore if */
  if (cssVarRE.test(name)) {
    el.style.setProperty(name, val);
  } else if (importantRE.test(val)) {
    el.style.setProperty(name, val.replace(importantRE, ''), 'important');
  } else {
    var normalizedName = normalize(name);
    if (Array.isArray(val)) {
      // Support values array created by autoprefixer, e.g.
      // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
      // Set them one by one, and the browser will only set those it can recognize
      for (var i = 0, len = val.length; i < len; i++) {
        el.style[normalizedName] = val[i];
      }
    } else {
      el.style[normalizedName] = val;
    }
  }
};

var vendorNames = ['Webkit', 'Moz', 'ms'];

var emptyStyle;
var normalize = cached(function (prop) {
  emptyStyle = emptyStyle || document.createElement('div').style;
  prop = camelize(prop);
  if (prop !== 'filter' && (prop in emptyStyle)) {
    return prop
  }
  var capName = prop.charAt(0).toUpperCase() + prop.slice(1);
  for (var i = 0; i < vendorNames.length; i++) {
    var name = vendorNames[i] + capName;
    if (name in emptyStyle) {
      return name
    }
  }
});

function updateStyle (oldVnode, vnode) {
  var data = vnode.data;
  var oldData = oldVnode.data;

  if (isUndef(data.staticStyle) && isUndef(data.style) &&
    isUndef(oldData.staticStyle) && isUndef(oldData.style)
  ) {
    return
  }

  var cur, name;
  var el = vnode.elm;
  var oldStaticStyle = oldData.staticStyle;
  var oldStyleBinding = oldData.normalizedStyle || oldData.style || {};

  // if static style exists, stylebinding already merged into it when doing normalizeStyleData
  var oldStyle = oldStaticStyle || oldStyleBinding;

  var style = normalizeStyleBinding(vnode.data.style) || {};

  // store normalized style under a different key for next diff
  // make sure to clone it if it's reactive, since the user likley wants
  // to mutate it.
  vnode.data.normalizedStyle = isDef(style.__ob__)
    ? extend({}, style)
    : style;

  var newStyle = getStyle(vnode, true);

  for (name in oldStyle) {
    if (isUndef(newStyle[name])) {
      setProp(el, name, '');
    }
  }
  for (name in newStyle) {
    cur = newStyle[name];
    if (cur !== oldStyle[name]) {
      // ie9 setting to null has no effect, must use empty string
      setProp(el, name, cur == null ? '' : cur);
    }
  }
}

var style = {
  create: updateStyle,
  update: updateStyle
};

/*  */

/**
 * Add class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function addClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(/\s+/).forEach(function (c) { return el.classList.add(c); });
    } else {
      el.classList.add(cls);
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    if (cur.indexOf(' ' + cls + ' ') < 0) {
      el.setAttribute('class', (cur + cls).trim());
    }
  }
}

/**
 * Remove class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function removeClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(/\s+/).forEach(function (c) { return el.classList.remove(c); });
    } else {
      el.classList.remove(cls);
    }
    if (!el.classList.length) {
      el.removeAttribute('class');
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    var tar = ' ' + cls + ' ';
    while (cur.indexOf(tar) >= 0) {
      cur = cur.replace(tar, ' ');
    }
    cur = cur.trim();
    if (cur) {
      el.setAttribute('class', cur);
    } else {
      el.removeAttribute('class');
    }
  }
}

/*  */

function resolveTransition (def$$1) {
  if (!def$$1) {
    return
  }
  /* istanbul ignore else */
  if (typeof def$$1 === 'object') {
    var res = {};
    if (def$$1.css !== false) {
      extend(res, autoCssTransition(def$$1.name || 'v'));
    }
    extend(res, def$$1);
    return res
  } else if (typeof def$$1 === 'string') {
    return autoCssTransition(def$$1)
  }
}

var autoCssTransition = cached(function (name) {
  return {
    enterClass: (name + "-enter"),
    enterToClass: (name + "-enter-to"),
    enterActiveClass: (name + "-enter-active"),
    leaveClass: (name + "-leave"),
    leaveToClass: (name + "-leave-to"),
    leaveActiveClass: (name + "-leave-active")
  }
});

var hasTransition = inBrowser && !isIE9;
var TRANSITION = 'transition';
var ANIMATION = 'animation';

// Transition property/event sniffing
var transitionProp = 'transition';
var transitionEndEvent = 'transitionend';
var animationProp = 'animation';
var animationEndEvent = 'animationend';
if (hasTransition) {
  /* istanbul ignore if */
  if (window.ontransitionend === undefined &&
    window.onwebkittransitionend !== undefined
  ) {
    transitionProp = 'WebkitTransition';
    transitionEndEvent = 'webkitTransitionEnd';
  }
  if (window.onanimationend === undefined &&
    window.onwebkitanimationend !== undefined
  ) {
    animationProp = 'WebkitAnimation';
    animationEndEvent = 'webkitAnimationEnd';
  }
}

// binding to window is necessary to make hot reload work in IE in strict mode
var raf = inBrowser && window.requestAnimationFrame
  ? window.requestAnimationFrame.bind(window)
  : setTimeout;

function nextFrame (fn) {
  raf(function () {
    raf(fn);
  });
}

function addTransitionClass (el, cls) {
  var transitionClasses = el._transitionClasses || (el._transitionClasses = []);
  if (transitionClasses.indexOf(cls) < 0) {
    transitionClasses.push(cls);
    addClass(el, cls);
  }
}

function removeTransitionClass (el, cls) {
  if (el._transitionClasses) {
    remove(el._transitionClasses, cls);
  }
  removeClass(el, cls);
}

function whenTransitionEnds (
  el,
  expectedType,
  cb
) {
  var ref = getTransitionInfo(el, expectedType);
  var type = ref.type;
  var timeout = ref.timeout;
  var propCount = ref.propCount;
  if (!type) { return cb() }
  var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
  var ended = 0;
  var end = function () {
    el.removeEventListener(event, onEnd);
    cb();
  };
  var onEnd = function (e) {
    if (e.target === el) {
      if (++ended >= propCount) {
        end();
      }
    }
  };
  setTimeout(function () {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(event, onEnd);
}

var transformRE = /\b(transform|all)(,|$)/;

function getTransitionInfo (el, expectedType) {
  var styles = window.getComputedStyle(el);
  var transitionDelays = styles[transitionProp + 'Delay'].split(', ');
  var transitionDurations = styles[transitionProp + 'Duration'].split(', ');
  var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  var animationDelays = styles[animationProp + 'Delay'].split(', ');
  var animationDurations = styles[animationProp + 'Duration'].split(', ');
  var animationTimeout = getTimeout(animationDelays, animationDurations);

  var type;
  var timeout = 0;
  var propCount = 0;
  /* istanbul ignore if */
  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type = timeout > 0
      ? transitionTimeout > animationTimeout
        ? TRANSITION
        : ANIMATION
      : null;
    propCount = type
      ? type === TRANSITION
        ? transitionDurations.length
        : animationDurations.length
      : 0;
  }
  var hasTransform =
    type === TRANSITION &&
    transformRE.test(styles[transitionProp + 'Property']);
  return {
    type: type,
    timeout: timeout,
    propCount: propCount,
    hasTransform: hasTransform
  }
}

function getTimeout (delays, durations) {
  /* istanbul ignore next */
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }

  return Math.max.apply(null, durations.map(function (d, i) {
    return toMs(d) + toMs(delays[i])
  }))
}

function toMs (s) {
  return Number(s.slice(0, -1)) * 1000
}

/*  */

function enter (vnode, toggleDisplay) {
  var el = vnode.elm;

  // call leave callback now
  if (isDef(el._leaveCb)) {
    el._leaveCb.cancelled = true;
    el._leaveCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data)) {
    return
  }

  /* istanbul ignore if */
  if (isDef(el._enterCb) || el.nodeType !== 1) {
    return
  }

  var css = data.css;
  var type = data.type;
  var enterClass = data.enterClass;
  var enterToClass = data.enterToClass;
  var enterActiveClass = data.enterActiveClass;
  var appearClass = data.appearClass;
  var appearToClass = data.appearToClass;
  var appearActiveClass = data.appearActiveClass;
  var beforeEnter = data.beforeEnter;
  var enter = data.enter;
  var afterEnter = data.afterEnter;
  var enterCancelled = data.enterCancelled;
  var beforeAppear = data.beforeAppear;
  var appear = data.appear;
  var afterAppear = data.afterAppear;
  var appearCancelled = data.appearCancelled;
  var duration = data.duration;

  // activeInstance will always be the <transition> component managing this
  // transition. One edge case to check is when the <transition> is placed
  // as the root node of a child component. In that case we need to check
  // <transition>'s parent for appear check.
  var context = activeInstance;
  var transitionNode = activeInstance.$vnode;
  while (transitionNode && transitionNode.parent) {
    transitionNode = transitionNode.parent;
    context = transitionNode.context;
  }

  var isAppear = !context._isMounted || !vnode.isRootInsert;

  if (isAppear && !appear && appear !== '') {
    return
  }

  var startClass = isAppear && appearClass
    ? appearClass
    : enterClass;
  var activeClass = isAppear && appearActiveClass
    ? appearActiveClass
    : enterActiveClass;
  var toClass = isAppear && appearToClass
    ? appearToClass
    : enterToClass;

  var beforeEnterHook = isAppear
    ? (beforeAppear || beforeEnter)
    : beforeEnter;
  var enterHook = isAppear
    ? (typeof appear === 'function' ? appear : enter)
    : enter;
  var afterEnterHook = isAppear
    ? (afterAppear || afterEnter)
    : afterEnter;
  var enterCancelledHook = isAppear
    ? (appearCancelled || enterCancelled)
    : enterCancelled;

  var explicitEnterDuration = toNumber(
    isObject(duration)
      ? duration.enter
      : duration
  );

  if (process.env.NODE_ENV !== 'production' && explicitEnterDuration != null) {
    checkDuration(explicitEnterDuration, 'enter', vnode);
  }

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(enterHook);

  var cb = el._enterCb = once(function () {
    if (expectsCSS) {
      removeTransitionClass(el, toClass);
      removeTransitionClass(el, activeClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, startClass);
      }
      enterCancelledHook && enterCancelledHook(el);
    } else {
      afterEnterHook && afterEnterHook(el);
    }
    el._enterCb = null;
  });

  if (!vnode.data.show) {
    // remove pending leave element on enter by injecting an insert hook
    mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'insert', function () {
      var parent = el.parentNode;
      var pendingNode = parent && parent._pending && parent._pending[vnode.key];
      if (pendingNode &&
        pendingNode.tag === vnode.tag &&
        pendingNode.elm._leaveCb
      ) {
        pendingNode.elm._leaveCb();
      }
      enterHook && enterHook(el, cb);
    });
  }

  // start enter transition
  beforeEnterHook && beforeEnterHook(el);
  if (expectsCSS) {
    addTransitionClass(el, startClass);
    addTransitionClass(el, activeClass);
    nextFrame(function () {
      addTransitionClass(el, toClass);
      removeTransitionClass(el, startClass);
      if (!cb.cancelled && !userWantsControl) {
        if (isValidDuration(explicitEnterDuration)) {
          setTimeout(cb, explicitEnterDuration);
        } else {
          whenTransitionEnds(el, type, cb);
        }
      }
    });
  }

  if (vnode.data.show) {
    toggleDisplay && toggleDisplay();
    enterHook && enterHook(el, cb);
  }

  if (!expectsCSS && !userWantsControl) {
    cb();
  }
}

function leave (vnode, rm) {
  var el = vnode.elm;

  // call enter callback now
  if (isDef(el._enterCb)) {
    el._enterCb.cancelled = true;
    el._enterCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data)) {
    return rm()
  }

  /* istanbul ignore if */
  if (isDef(el._leaveCb) || el.nodeType !== 1) {
    return
  }

  var css = data.css;
  var type = data.type;
  var leaveClass = data.leaveClass;
  var leaveToClass = data.leaveToClass;
  var leaveActiveClass = data.leaveActiveClass;
  var beforeLeave = data.beforeLeave;
  var leave = data.leave;
  var afterLeave = data.afterLeave;
  var leaveCancelled = data.leaveCancelled;
  var delayLeave = data.delayLeave;
  var duration = data.duration;

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(leave);

  var explicitLeaveDuration = toNumber(
    isObject(duration)
      ? duration.leave
      : duration
  );

  if (process.env.NODE_ENV !== 'production' && isDef(explicitLeaveDuration)) {
    checkDuration(explicitLeaveDuration, 'leave', vnode);
  }

  var cb = el._leaveCb = once(function () {
    if (el.parentNode && el.parentNode._pending) {
      el.parentNode._pending[vnode.key] = null;
    }
    if (expectsCSS) {
      removeTransitionClass(el, leaveToClass);
      removeTransitionClass(el, leaveActiveClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, leaveClass);
      }
      leaveCancelled && leaveCancelled(el);
    } else {
      rm();
      afterLeave && afterLeave(el);
    }
    el._leaveCb = null;
  });

  if (delayLeave) {
    delayLeave(performLeave);
  } else {
    performLeave();
  }

  function performLeave () {
    // the delayed leave may have already been cancelled
    if (cb.cancelled) {
      return
    }
    // record leaving element
    if (!vnode.data.show) {
      (el.parentNode._pending || (el.parentNode._pending = {}))[(vnode.key)] = vnode;
    }
    beforeLeave && beforeLeave(el);
    if (expectsCSS) {
      addTransitionClass(el, leaveClass);
      addTransitionClass(el, leaveActiveClass);
      nextFrame(function () {
        addTransitionClass(el, leaveToClass);
        removeTransitionClass(el, leaveClass);
        if (!cb.cancelled && !userWantsControl) {
          if (isValidDuration(explicitLeaveDuration)) {
            setTimeout(cb, explicitLeaveDuration);
          } else {
            whenTransitionEnds(el, type, cb);
          }
        }
      });
    }
    leave && leave(el, cb);
    if (!expectsCSS && !userWantsControl) {
      cb();
    }
  }
}

// only used in dev mode
function checkDuration (val, name, vnode) {
  if (typeof val !== 'number') {
    warn(
      "<transition> explicit " + name + " duration is not a valid number - " +
      "got " + (JSON.stringify(val)) + ".",
      vnode.context
    );
  } else if (isNaN(val)) {
    warn(
      "<transition> explicit " + name + " duration is NaN - " +
      'the duration expression might be incorrect.',
      vnode.context
    );
  }
}

function isValidDuration (val) {
  return typeof val === 'number' && !isNaN(val)
}

/**
 * Normalize a transition hook's argument length. The hook may be:
 * - a merged hook (invoker) with the original in .fns
 * - a wrapped component method (check ._length)
 * - a plain function (.length)
 */
function getHookArgumentsLength (fn) {
  if (isUndef(fn)) {
    return false
  }
  var invokerFns = fn.fns;
  if (isDef(invokerFns)) {
    // invoker
    return getHookArgumentsLength(
      Array.isArray(invokerFns)
        ? invokerFns[0]
        : invokerFns
    )
  } else {
    return (fn._length || fn.length) > 1
  }
}

function _enter (_, vnode) {
  if (vnode.data.show !== true) {
    enter(vnode);
  }
}

var transition = inBrowser ? {
  create: _enter,
  activate: _enter,
  remove: function remove$$1 (vnode, rm) {
    /* istanbul ignore else */
    if (vnode.data.show !== true) {
      leave(vnode, rm);
    } else {
      rm();
    }
  }
} : {};

var platformModules = [
  attrs,
  klass,
  events,
  domProps,
  style,
  transition
];

/*  */

// the directive module should be applied last, after all
// built-in modules have been applied.
var modules = platformModules.concat(baseModules);

var patch = createPatchFunction({ nodeOps: nodeOps, modules: modules });

/**
 * Not type checking this file because flow doesn't like attaching
 * properties to Elements.
 */

var isTextInputType = makeMap('text,number,password,search,email,tel,url');

/* istanbul ignore if */
if (isIE9) {
  // http://www.matts411.com/post/internet-explorer-9-oninput/
  document.addEventListener('selectionchange', function () {
    var el = document.activeElement;
    if (el && el.vmodel) {
      trigger(el, 'input');
    }
  });
}

var model$1 = {
  inserted: function inserted (el, binding, vnode) {
    if (vnode.tag === 'select') {
      var cb = function () {
        setSelected(el, binding, vnode.context);
      };
      cb();
      /* istanbul ignore if */
      if (isIE || isEdge) {
        setTimeout(cb, 0);
      }
      el._vOptions = [].map.call(el.options, getValue);
    } else if (vnode.tag === 'textarea' || isTextInputType(el.type)) {
      el._vModifiers = binding.modifiers;
      if (!binding.modifiers.lazy) {
        // Safari < 10.2 & UIWebView doesn't fire compositionend when
        // switching focus before confirming composition choice
        // this also fixes the issue where some browsers e.g. iOS Chrome
        // fires "change" instead of "input" on autocomplete.
        el.addEventListener('change', onCompositionEnd);
        if (!isAndroid) {
          el.addEventListener('compositionstart', onCompositionStart);
          el.addEventListener('compositionend', onCompositionEnd);
        }
        /* istanbul ignore if */
        if (isIE9) {
          el.vmodel = true;
        }
      }
    }
  },
  componentUpdated: function componentUpdated (el, binding, vnode) {
    if (vnode.tag === 'select') {
      setSelected(el, binding, vnode.context);
      // in case the options rendered by v-for have changed,
      // it's possible that the value is out-of-sync with the rendered options.
      // detect such cases and filter out values that no longer has a matching
      // option in the DOM.
      var prevOptions = el._vOptions;
      var curOptions = el._vOptions = [].map.call(el.options, getValue);
      if (curOptions.some(function (o, i) { return !looseEqual(o, prevOptions[i]); })) {
        trigger(el, 'change');
      }
    }
  }
};

function setSelected (el, binding, vm) {
  var value = binding.value;
  var isMultiple = el.multiple;
  if (isMultiple && !Array.isArray(value)) {
    process.env.NODE_ENV !== 'production' && warn(
      "<select multiple v-model=\"" + (binding.expression) + "\"> " +
      "expects an Array value for its binding, but got " + (Object.prototype.toString.call(value).slice(8, -1)),
      vm
    );
    return
  }
  var selected, option;
  for (var i = 0, l = el.options.length; i < l; i++) {
    option = el.options[i];
    if (isMultiple) {
      selected = looseIndexOf(value, getValue(option)) > -1;
      if (option.selected !== selected) {
        option.selected = selected;
      }
    } else {
      if (looseEqual(getValue(option), value)) {
        if (el.selectedIndex !== i) {
          el.selectedIndex = i;
        }
        return
      }
    }
  }
  if (!isMultiple) {
    el.selectedIndex = -1;
  }
}

function getValue (option) {
  return '_value' in option
    ? option._value
    : option.value
}

function onCompositionStart (e) {
  e.target.composing = true;
}

function onCompositionEnd (e) {
  // prevent triggering an input event for no reason
  if (!e.target.composing) { return }
  e.target.composing = false;
  trigger(e.target, 'input');
}

function trigger (el, type) {
  var e = document.createEvent('HTMLEvents');
  e.initEvent(type, true, true);
  el.dispatchEvent(e);
}

/*  */

// recursively search for possible transition defined inside the component root
function locateNode (vnode) {
  return vnode.componentInstance && (!vnode.data || !vnode.data.transition)
    ? locateNode(vnode.componentInstance._vnode)
    : vnode
}

var show = {
  bind: function bind (el, ref, vnode) {
    var value = ref.value;

    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    var originalDisplay = el.__vOriginalDisplay =
      el.style.display === 'none' ? '' : el.style.display;
    if (value && transition$$1) {
      vnode.data.show = true;
      enter(vnode, function () {
        el.style.display = originalDisplay;
      });
    } else {
      el.style.display = value ? originalDisplay : 'none';
    }
  },

  update: function update (el, ref, vnode) {
    var value = ref.value;
    var oldValue = ref.oldValue;

    /* istanbul ignore if */
    if (value === oldValue) { return }
    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    if (transition$$1) {
      vnode.data.show = true;
      if (value) {
        enter(vnode, function () {
          el.style.display = el.__vOriginalDisplay;
        });
      } else {
        leave(vnode, function () {
          el.style.display = 'none';
        });
      }
    } else {
      el.style.display = value ? el.__vOriginalDisplay : 'none';
    }
  },

  unbind: function unbind (
    el,
    binding,
    vnode,
    oldVnode,
    isDestroy
  ) {
    if (!isDestroy) {
      el.style.display = el.__vOriginalDisplay;
    }
  }
};

var platformDirectives = {
  model: model$1,
  show: show
};

/*  */

// Provides transition support for a single element/component.
// supports transition mode (out-in / in-out)

var transitionProps = {
  name: String,
  appear: Boolean,
  css: Boolean,
  mode: String,
  type: String,
  enterClass: String,
  leaveClass: String,
  enterToClass: String,
  leaveToClass: String,
  enterActiveClass: String,
  leaveActiveClass: String,
  appearClass: String,
  appearActiveClass: String,
  appearToClass: String,
  duration: [Number, String, Object]
};

// in case the child is also an abstract component, e.g. <keep-alive>
// we want to recursively retrieve the real component to be rendered
function getRealChild (vnode) {
  var compOptions = vnode && vnode.componentOptions;
  if (compOptions && compOptions.Ctor.options.abstract) {
    return getRealChild(getFirstComponentChild(compOptions.children))
  } else {
    return vnode
  }
}

function extractTransitionData (comp) {
  var data = {};
  var options = comp.$options;
  // props
  for (var key in options.propsData) {
    data[key] = comp[key];
  }
  // events.
  // extract listeners and pass them directly to the transition methods
  var listeners = options._parentListeners;
  for (var key$1 in listeners) {
    data[camelize(key$1)] = listeners[key$1];
  }
  return data
}

function placeholder (h, rawChild) {
  if (/\d-keep-alive$/.test(rawChild.tag)) {
    return h('keep-alive', {
      props: rawChild.componentOptions.propsData
    })
  }
}

function hasParentTransition (vnode) {
  while ((vnode = vnode.parent)) {
    if (vnode.data.transition) {
      return true
    }
  }
}

function isSameChild (child, oldChild) {
  return oldChild.key === child.key && oldChild.tag === child.tag
}

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

var Transition = {
  name: 'transition',
  props: transitionProps,
  abstract: true,

  render: function render (h) {
    var this$1 = this;

    var children = this.$options._renderChildren;
    if (!children) {
      return
    }

    // filter out text nodes (possible whitespaces)
    children = children.filter(function (c) { return c.tag || isAsyncPlaceholder(c); });
    /* istanbul ignore if */
    if (!children.length) {
      return
    }

    // warn multiple elements
    if (process.env.NODE_ENV !== 'production' && children.length > 1) {
      warn(
        '<transition> can only be used on a single element. Use ' +
        '<transition-group> for lists.',
        this.$parent
      );
    }

    var mode = this.mode;

    // warn invalid mode
    if (process.env.NODE_ENV !== 'production' &&
      mode && mode !== 'in-out' && mode !== 'out-in'
    ) {
      warn(
        'invalid <transition> mode: ' + mode,
        this.$parent
      );
    }

    var rawChild = children[0];

    // if this is a component root node and the component's
    // parent container node also has transition, skip.
    if (hasParentTransition(this.$vnode)) {
      return rawChild
    }

    // apply transition data to child
    // use getRealChild() to ignore abstract components e.g. keep-alive
    var child = getRealChild(rawChild);
    /* istanbul ignore if */
    if (!child) {
      return rawChild
    }

    if (this._leaving) {
      return placeholder(h, rawChild)
    }

    // ensure a key that is unique to the vnode type and to this transition
    // component instance. This key will be used to remove pending leaving nodes
    // during entering.
    var id = "__transition-" + (this._uid) + "-";
    child.key = child.key == null
      ? child.isComment
        ? id + 'comment'
        : id + child.tag
      : isPrimitive(child.key)
        ? (String(child.key).indexOf(id) === 0 ? child.key : id + child.key)
        : child.key;

    var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
    var oldRawChild = this._vnode;
    var oldChild = getRealChild(oldRawChild);

    // mark v-show
    // so that the transition module can hand over the control to the directive
    if (child.data.directives && child.data.directives.some(function (d) { return d.name === 'show'; })) {
      child.data.show = true;
    }

    if (
      oldChild &&
      oldChild.data &&
      !isSameChild(child, oldChild) &&
      !isAsyncPlaceholder(oldChild)
    ) {
      // replace old child transition data with fresh one
      // important for dynamic transitions!
      var oldData = oldChild && (oldChild.data.transition = extend({}, data));
      // handle transition mode
      if (mode === 'out-in') {
        // return placeholder node and queue update when leave finishes
        this._leaving = true;
        mergeVNodeHook(oldData, 'afterLeave', function () {
          this$1._leaving = false;
          this$1.$forceUpdate();
        });
        return placeholder(h, rawChild)
      } else if (mode === 'in-out') {
        if (isAsyncPlaceholder(child)) {
          return oldRawChild
        }
        var delayedLeave;
        var performLeave = function () { delayedLeave(); };
        mergeVNodeHook(data, 'afterEnter', performLeave);
        mergeVNodeHook(data, 'enterCancelled', performLeave);
        mergeVNodeHook(oldData, 'delayLeave', function (leave) { delayedLeave = leave; });
      }
    }

    return rawChild
  }
};

/*  */

// Provides transition support for list items.
// supports move transitions using the FLIP technique.

// Because the vdom's children update algorithm is "unstable" - i.e.
// it doesn't guarantee the relative positioning of removed elements,
// we force transition-group to update its children into two passes:
// in the first pass, we remove all nodes that need to be removed,
// triggering their leaving transition; in the second pass, we insert/move
// into the final desired state. This way in the second pass removed
// nodes will remain where they should be.

var props = extend({
  tag: String,
  moveClass: String
}, transitionProps);

delete props.mode;

var TransitionGroup = {
  props: props,

  render: function render (h) {
    var tag = this.tag || this.$vnode.data.tag || 'span';
    var map = Object.create(null);
    var prevChildren = this.prevChildren = this.children;
    var rawChildren = this.$slots.default || [];
    var children = this.children = [];
    var transitionData = extractTransitionData(this);

    for (var i = 0; i < rawChildren.length; i++) {
      var c = rawChildren[i];
      if (c.tag) {
        if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
          children.push(c);
          map[c.key] = c
          ;(c.data || (c.data = {})).transition = transitionData;
        } else if (process.env.NODE_ENV !== 'production') {
          var opts = c.componentOptions;
          var name = opts ? (opts.Ctor.options.name || opts.tag || '') : c.tag;
          warn(("<transition-group> children must be keyed: <" + name + ">"));
        }
      }
    }

    if (prevChildren) {
      var kept = [];
      var removed = [];
      for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
        var c$1 = prevChildren[i$1];
        c$1.data.transition = transitionData;
        c$1.data.pos = c$1.elm.getBoundingClientRect();
        if (map[c$1.key]) {
          kept.push(c$1);
        } else {
          removed.push(c$1);
        }
      }
      this.kept = h(tag, null, kept);
      this.removed = removed;
    }

    return h(tag, null, children)
  },

  beforeUpdate: function beforeUpdate () {
    // force removing pass
    this.__patch__(
      this._vnode,
      this.kept,
      false, // hydrating
      true // removeOnly (!important, avoids unnecessary moves)
    );
    this._vnode = this.kept;
  },

  updated: function updated () {
    var children = this.prevChildren;
    var moveClass = this.moveClass || ((this.name || 'v') + '-move');
    if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
      return
    }

    // we divide the work into three loops to avoid mixing DOM reads and writes
    // in each iteration - which helps prevent layout thrashing.
    children.forEach(callPendingCbs);
    children.forEach(recordPosition);
    children.forEach(applyTranslation);

    // force reflow to put everything in position
    var body = document.body;
    var f = body.offsetHeight; // eslint-disable-line

    children.forEach(function (c) {
      if (c.data.moved) {
        var el = c.elm;
        var s = el.style;
        addTransitionClass(el, moveClass);
        s.transform = s.WebkitTransform = s.transitionDuration = '';
        el.addEventListener(transitionEndEvent, el._moveCb = function cb (e) {
          if (!e || /transform$/.test(e.propertyName)) {
            el.removeEventListener(transitionEndEvent, cb);
            el._moveCb = null;
            removeTransitionClass(el, moveClass);
          }
        });
      }
    });
  },

  methods: {
    hasMove: function hasMove (el, moveClass) {
      /* istanbul ignore if */
      if (!hasTransition) {
        return false
      }
      /* istanbul ignore if */
      if (this._hasMove) {
        return this._hasMove
      }
      // Detect whether an element with the move class applied has
      // CSS transitions. Since the element may be inside an entering
      // transition at this very moment, we make a clone of it and remove
      // all other transition classes applied to ensure only the move class
      // is applied.
      var clone = el.cloneNode();
      if (el._transitionClasses) {
        el._transitionClasses.forEach(function (cls) { removeClass(clone, cls); });
      }
      addClass(clone, moveClass);
      clone.style.display = 'none';
      this.$el.appendChild(clone);
      var info = getTransitionInfo(clone);
      this.$el.removeChild(clone);
      return (this._hasMove = info.hasTransform)
    }
  }
};

function callPendingCbs (c) {
  /* istanbul ignore if */
  if (c.elm._moveCb) {
    c.elm._moveCb();
  }
  /* istanbul ignore if */
  if (c.elm._enterCb) {
    c.elm._enterCb();
  }
}

function recordPosition (c) {
  c.data.newPos = c.elm.getBoundingClientRect();
}

function applyTranslation (c) {
  var oldPos = c.data.pos;
  var newPos = c.data.newPos;
  var dx = oldPos.left - newPos.left;
  var dy = oldPos.top - newPos.top;
  if (dx || dy) {
    c.data.moved = true;
    var s = c.elm.style;
    s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
    s.transitionDuration = '0s';
  }
}

var platformComponents = {
  Transition: Transition,
  TransitionGroup: TransitionGroup
};

/*  */

// install platform specific utils
Vue$3.config.mustUseProp = mustUseProp;
Vue$3.config.isReservedTag = isReservedTag;
Vue$3.config.isReservedAttr = isReservedAttr;
Vue$3.config.getTagNamespace = getTagNamespace;
Vue$3.config.isUnknownElement = isUnknownElement;

// install platform runtime directives & components
extend(Vue$3.options.directives, platformDirectives);
extend(Vue$3.options.components, platformComponents);

// install platform patch function
Vue$3.prototype.__patch__ = inBrowser ? patch : noop;

// public mount method
Vue$3.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && inBrowser ? query(el) : undefined;
  return mountComponent(this, el, hydrating)
};

// devtools global hook
/* istanbul ignore next */
setTimeout(function () {
  if (config.devtools) {
    if (devtools) {
      devtools.emit('init', Vue$3);
    } else if (process.env.NODE_ENV !== 'production' && isChrome) {
      console[console.info ? 'info' : 'log'](
        'Download the Vue Devtools extension for a better development experience:\n' +
        'https://github.com/vuejs/vue-devtools'
      );
    }
  }
  if (process.env.NODE_ENV !== 'production' &&
    config.productionTip !== false &&
    inBrowser && typeof console !== 'undefined'
  ) {
    console[console.info ? 'info' : 'log'](
      "You are running Vue in development mode.\n" +
      "Make sure to turn on production mode when deploying for production.\n" +
      "See more tips at https://vuejs.org/guide/deployment.html"
    );
  }
}, 0);

/*  */

/* harmony default export */ __webpack_exports__["a"] = (Vue$3);

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(4), __webpack_require__(5)))

/***/ }),
/* 4 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 5 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Layout_vue__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_20fe2492_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_Layout_vue__ = __webpack_require__(17);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(7)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Layout_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_20fe2492_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_Layout_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\theme\\Layout.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Layout.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-20fe2492", Component.options)
  } else {
    hotAPI.reload("data-v-20fe2492", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(8);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(10)("6b3f9bbb", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-20fe2492\",\"scoped\":false,\"hasInlineConfig\":false}!../../node_modules/sass-loader/lib/loader.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Layout.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-20fe2492\",\"scoped\":false,\"hasInlineConfig\":false}!../../node_modules/sass-loader/lib/loader.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Layout.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)(undefined);
// imports


// module
exports.push([module.i, "/*! bulma.io v0.7.1 | MIT License | github.com/jgthms/bulma */\n@keyframes spinAround {\nfrom {\n    transform: rotate(0deg);\n}\nto {\n    transform: rotate(359deg);\n}\n}\n.delete, .modal-close, .is-unselectable, .button, .file, .breadcrumb, .pagination-previous,\n.pagination-next,\n.pagination-link,\n.pagination-ellipsis, .tabs {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.select:not(.is-multiple):not(.is-loading)::after, .navbar-link::after {\n  border: 3px solid transparent;\n  border-radius: 2px;\n  border-right: 0;\n  border-top: 0;\n  content: \" \";\n  display: block;\n  height: 0.625em;\n  margin-top: -0.4375em;\n  pointer-events: none;\n  position: absolute;\n  top: 50%;\n  transform: rotate(-45deg);\n  transform-origin: center;\n  width: 0.625em;\n}\n.box:not(:last-child), .content:not(:last-child), .notification:not(:last-child), .progress:not(:last-child), .table:not(:last-child), .table-container:not(:last-child), .title:not(:last-child),\n.subtitle:not(:last-child), .block:not(:last-child), .highlight:not(:last-child), .breadcrumb:not(:last-child), .level:not(:last-child), .message:not(:last-child), .tabs:not(:last-child) {\n  margin-bottom: 1.5rem;\n}\n.delete, .modal-close {\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  background-color: rgba(10, 10, 10, 0.2);\n  border: none;\n  border-radius: 290486px;\n  cursor: pointer;\n  display: inline-block;\n  flex-grow: 0;\n  flex-shrink: 0;\n  font-size: 0;\n  height: 20px;\n  max-height: 20px;\n  max-width: 20px;\n  min-height: 20px;\n  min-width: 20px;\n  outline: none;\n  position: relative;\n  vertical-align: top;\n  width: 20px;\n}\n.delete::before, .modal-close::before, .delete::after, .modal-close::after {\n    background-color: white;\n    content: \"\";\n    display: block;\n    left: 50%;\n    position: absolute;\n    top: 50%;\n    transform: translateX(-50%) translateY(-50%) rotate(45deg);\n    transform-origin: center center;\n}\n.delete::before, .modal-close::before {\n    height: 2px;\n    width: 50%;\n}\n.delete::after, .modal-close::after {\n    height: 50%;\n    width: 2px;\n}\n.delete:hover, .modal-close:hover, .delete:focus, .modal-close:focus {\n    background-color: rgba(10, 10, 10, 0.3);\n}\n.delete:active, .modal-close:active {\n    background-color: rgba(10, 10, 10, 0.4);\n}\n.is-small.delete, .is-small.modal-close {\n    height: 16px;\n    max-height: 16px;\n    max-width: 16px;\n    min-height: 16px;\n    min-width: 16px;\n    width: 16px;\n}\n.is-medium.delete, .is-medium.modal-close {\n    height: 24px;\n    max-height: 24px;\n    max-width: 24px;\n    min-height: 24px;\n    min-width: 24px;\n    width: 24px;\n}\n.is-large.delete, .is-large.modal-close {\n    height: 32px;\n    max-height: 32px;\n    max-width: 32px;\n    min-height: 32px;\n    min-width: 32px;\n    width: 32px;\n}\n.button.is-loading::after, .select.is-loading::after, .control.is-loading::after, .loader {\n  animation: spinAround 500ms infinite linear;\n  border: 2px solid #dbdbdb;\n  border-radius: 290486px;\n  border-right-color: transparent;\n  border-top-color: transparent;\n  content: \"\";\n  display: block;\n  height: 1em;\n  position: relative;\n  width: 1em;\n}\n.is-overlay, .image.is-square img, .image.is-1by1 img, .image.is-5by4 img, .image.is-4by3 img, .image.is-3by2 img, .image.is-5by3 img, .image.is-16by9 img, .image.is-2by1 img, .image.is-3by1 img, .image.is-4by5 img, .image.is-3by4 img, .image.is-2by3 img, .image.is-3by5 img, .image.is-9by16 img, .image.is-1by2 img, .image.is-1by3 img, .modal, .modal-background, .hero-video {\n  bottom: 0;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n.button, .input,\n.textarea, .select select, .file-cta,\n.file-name, .pagination-previous,\n.pagination-next,\n.pagination-link,\n.pagination-ellipsis {\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  align-items: center;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  box-shadow: none;\n  display: inline-flex;\n  font-size: 1rem;\n  height: 2.25em;\n  justify-content: flex-start;\n  line-height: 1.5;\n  padding-bottom: calc(0.375em - 1px);\n  padding-left: calc(0.625em - 1px);\n  padding-right: calc(0.625em - 1px);\n  padding-top: calc(0.375em - 1px);\n  position: relative;\n  vertical-align: top;\n}\n.button:focus, .input:focus,\n  .textarea:focus, .select select:focus, .file-cta:focus,\n  .file-name:focus, .pagination-previous:focus,\n  .pagination-next:focus,\n  .pagination-link:focus,\n  .pagination-ellipsis:focus, .is-focused.button, .is-focused.input,\n  .is-focused.textarea, .select select.is-focused, .is-focused.file-cta,\n  .is-focused.file-name, .is-focused.pagination-previous,\n  .is-focused.pagination-next,\n  .is-focused.pagination-link,\n  .is-focused.pagination-ellipsis, .button:active, .input:active,\n  .textarea:active, .select select:active, .file-cta:active,\n  .file-name:active, .pagination-previous:active,\n  .pagination-next:active,\n  .pagination-link:active,\n  .pagination-ellipsis:active, .is-active.button, .is-active.input,\n  .is-active.textarea, .select select.is-active, .is-active.file-cta,\n  .is-active.file-name, .is-active.pagination-previous,\n  .is-active.pagination-next,\n  .is-active.pagination-link,\n  .is-active.pagination-ellipsis {\n    outline: none;\n}\n[disabled].button, [disabled].input,\n  [disabled].textarea, .select select[disabled], [disabled].file-cta,\n  [disabled].file-name, [disabled].pagination-previous,\n  [disabled].pagination-next,\n  [disabled].pagination-link,\n  [disabled].pagination-ellipsis {\n    cursor: not-allowed;\n}\n\n/*! minireset.css v0.0.3 | MIT License | github.com/jgthms/minireset.css */\nhtml,\nbody,\np,\nol,\nul,\nli,\ndl,\ndt,\ndd,\nblockquote,\nfigure,\nfieldset,\nlegend,\ntextarea,\npre,\niframe,\nhr,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin: 0;\n  padding: 0;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: 100%;\n  font-weight: normal;\n}\nul {\n  list-style: none;\n}\nbutton,\ninput,\nselect,\ntextarea {\n  margin: 0;\n}\nhtml {\n  box-sizing: border-box;\n}\n*, *::before, *::after {\n  box-sizing: inherit;\n}\nimg,\naudio,\nvideo {\n  height: auto;\n  max-width: 100%;\n}\niframe {\n  border: 0;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\ntd,\nth {\n  padding: 0;\n  text-align: left;\n}\nhtml {\n  background-color: white;\n  font-size: 16px;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  min-width: 300px;\n  overflow-x: hidden;\n  overflow-y: scroll;\n  text-rendering: optimizeLegibility;\n  text-size-adjust: 100%;\n}\narticle,\naside,\nfigure,\nfooter,\nheader,\nhgroup,\nsection {\n  display: block;\n}\nbody,\nbutton,\ninput,\nselect,\ntextarea {\n  font-family: BlinkMacSystemFont, -apple-system, \"Segoe UI\", \"Roboto\", \"Oxygen\", \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", \"Helvetica\", \"Arial\", sans-serif;\n}\ncode,\npre {\n  -moz-osx-font-smoothing: auto;\n  -webkit-font-smoothing: auto;\n  font-family: monospace;\n}\nbody {\n  color: #4a4a4a;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n}\na {\n  color: #3273dc;\n  cursor: pointer;\n  text-decoration: none;\n}\na strong {\n    color: currentColor;\n}\na:hover {\n    color: #363636;\n}\ncode {\n  background-color: whitesmoke;\n  color: #ff3860;\n  font-size: 0.875em;\n  font-weight: normal;\n  padding: 0.25em 0.5em 0.25em;\n}\nhr {\n  background-color: whitesmoke;\n  border: none;\n  display: block;\n  height: 2px;\n  margin: 1.5rem 0;\n}\nimg {\n  height: auto;\n  max-width: 100%;\n}\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  vertical-align: baseline;\n}\nsmall {\n  font-size: 0.875em;\n}\nspan {\n  font-style: inherit;\n  font-weight: inherit;\n}\nstrong {\n  color: #363636;\n  font-weight: 700;\n}\npre {\n  -webkit-overflow-scrolling: touch;\n  background-color: whitesmoke;\n  color: #4a4a4a;\n  font-size: 0.875em;\n  overflow-x: auto;\n  padding: 1.25rem 1.5rem;\n  white-space: pre;\n  word-wrap: normal;\n}\npre code {\n    background-color: transparent;\n    color: currentColor;\n    font-size: 1em;\n    padding: 0;\n}\ntable td,\ntable th {\n  text-align: left;\n  vertical-align: top;\n}\ntable th {\n  color: #363636;\n}\n.is-clearfix::after {\n  clear: both;\n  content: \" \";\n  display: table;\n}\n.is-pulled-left {\n  float: left !important;\n}\n.is-pulled-right {\n  float: right !important;\n}\n.is-clipped {\n  overflow: hidden !important;\n}\n.is-size-1 {\n  font-size: 3rem !important;\n}\n.is-size-2 {\n  font-size: 2.5rem !important;\n}\n.is-size-3 {\n  font-size: 2rem !important;\n}\n.is-size-4 {\n  font-size: 1.5rem !important;\n}\n.is-size-5 {\n  font-size: 1.25rem !important;\n}\n.is-size-6 {\n  font-size: 1rem !important;\n}\n.is-size-7 {\n  font-size: 0.75rem !important;\n}\n@media screen and (max-width: 768px) {\n.is-size-1-mobile {\n    font-size: 3rem !important;\n}\n.is-size-2-mobile {\n    font-size: 2.5rem !important;\n}\n.is-size-3-mobile {\n    font-size: 2rem !important;\n}\n.is-size-4-mobile {\n    font-size: 1.5rem !important;\n}\n.is-size-5-mobile {\n    font-size: 1.25rem !important;\n}\n.is-size-6-mobile {\n    font-size: 1rem !important;\n}\n.is-size-7-mobile {\n    font-size: 0.75rem !important;\n}\n}\n@media screen and (min-width: 769px), print {\n.is-size-1-tablet {\n    font-size: 3rem !important;\n}\n.is-size-2-tablet {\n    font-size: 2.5rem !important;\n}\n.is-size-3-tablet {\n    font-size: 2rem !important;\n}\n.is-size-4-tablet {\n    font-size: 1.5rem !important;\n}\n.is-size-5-tablet {\n    font-size: 1.25rem !important;\n}\n.is-size-6-tablet {\n    font-size: 1rem !important;\n}\n.is-size-7-tablet {\n    font-size: 0.75rem !important;\n}\n}\n@media screen and (max-width: 1087px) {\n.is-size-1-touch {\n    font-size: 3rem !important;\n}\n.is-size-2-touch {\n    font-size: 2.5rem !important;\n}\n.is-size-3-touch {\n    font-size: 2rem !important;\n}\n.is-size-4-touch {\n    font-size: 1.5rem !important;\n}\n.is-size-5-touch {\n    font-size: 1.25rem !important;\n}\n.is-size-6-touch {\n    font-size: 1rem !important;\n}\n.is-size-7-touch {\n    font-size: 0.75rem !important;\n}\n}\n@media screen and (min-width: 1088px) {\n.is-size-1-desktop {\n    font-size: 3rem !important;\n}\n.is-size-2-desktop {\n    font-size: 2.5rem !important;\n}\n.is-size-3-desktop {\n    font-size: 2rem !important;\n}\n.is-size-4-desktop {\n    font-size: 1.5rem !important;\n}\n.is-size-5-desktop {\n    font-size: 1.25rem !important;\n}\n.is-size-6-desktop {\n    font-size: 1rem !important;\n}\n.is-size-7-desktop {\n    font-size: 0.75rem !important;\n}\n}\n@media screen and (min-width: 1280px) {\n.is-size-1-widescreen {\n    font-size: 3rem !important;\n}\n.is-size-2-widescreen {\n    font-size: 2.5rem !important;\n}\n.is-size-3-widescreen {\n    font-size: 2rem !important;\n}\n.is-size-4-widescreen {\n    font-size: 1.5rem !important;\n}\n.is-size-5-widescreen {\n    font-size: 1.25rem !important;\n}\n.is-size-6-widescreen {\n    font-size: 1rem !important;\n}\n.is-size-7-widescreen {\n    font-size: 0.75rem !important;\n}\n}\n@media screen and (min-width: 1472px) {\n.is-size-1-fullhd {\n    font-size: 3rem !important;\n}\n.is-size-2-fullhd {\n    font-size: 2.5rem !important;\n}\n.is-size-3-fullhd {\n    font-size: 2rem !important;\n}\n.is-size-4-fullhd {\n    font-size: 1.5rem !important;\n}\n.is-size-5-fullhd {\n    font-size: 1.25rem !important;\n}\n.is-size-6-fullhd {\n    font-size: 1rem !important;\n}\n.is-size-7-fullhd {\n    font-size: 0.75rem !important;\n}\n}\n.has-text-centered {\n  text-align: center !important;\n}\n.has-text-justified {\n  text-align: justify !important;\n}\n.has-text-left {\n  text-align: left !important;\n}\n.has-text-right {\n  text-align: right !important;\n}\n@media screen and (max-width: 768px) {\n.has-text-centered-mobile {\n    text-align: center !important;\n}\n}\n@media screen and (min-width: 769px), print {\n.has-text-centered-tablet {\n    text-align: center !important;\n}\n}\n@media screen and (min-width: 769px) and (max-width: 1087px) {\n.has-text-centered-tablet-only {\n    text-align: center !important;\n}\n}\n@media screen and (max-width: 1087px) {\n.has-text-centered-touch {\n    text-align: center !important;\n}\n}\n@media screen and (min-width: 1088px) {\n.has-text-centered-desktop {\n    text-align: center !important;\n}\n}\n@media screen and (min-width: 1088px) and (max-width: 1279px) {\n.has-text-centered-desktop-only {\n    text-align: center !important;\n}\n}\n@media screen and (min-width: 1280px) {\n.has-text-centered-widescreen {\n    text-align: center !important;\n}\n}\n@media screen and (min-width: 1280px) and (max-width: 1471px) {\n.has-text-centered-widescreen-only {\n    text-align: center !important;\n}\n}\n@media screen and (min-width: 1472px) {\n.has-text-centered-fullhd {\n    text-align: center !important;\n}\n}\n@media screen and (max-width: 768px) {\n.has-text-justified-mobile {\n    text-align: justify !important;\n}\n}\n@media screen and (min-width: 769px), print {\n.has-text-justified-tablet {\n    text-align: justify !important;\n}\n}\n@media screen and (min-width: 769px) and (max-width: 1087px) {\n.has-text-justified-tablet-only {\n    text-align: justify !important;\n}\n}\n@media screen and (max-width: 1087px) {\n.has-text-justified-touch {\n    text-align: justify !important;\n}\n}\n@media screen and (min-width: 1088px) {\n.has-text-justified-desktop {\n    text-align: justify !important;\n}\n}\n@media screen and (min-width: 1088px) and (max-width: 1279px) {\n.has-text-justified-desktop-only {\n    text-align: justify !important;\n}\n}\n@media screen and (min-width: 1280px) {\n.has-text-justified-widescreen {\n    text-align: justify !important;\n}\n}\n@media screen and (min-width: 1280px) and (max-width: 1471px) {\n.has-text-justified-widescreen-only {\n    text-align: justify !important;\n}\n}\n@media screen and (min-width: 1472px) {\n.has-text-justified-fullhd {\n    text-align: justify !important;\n}\n}\n@media screen and (max-width: 768px) {\n.has-text-left-mobile {\n    text-align: left !important;\n}\n}\n@media screen and (min-width: 769px), print {\n.has-text-left-tablet {\n    text-align: left !important;\n}\n}\n@media screen and (min-width: 769px) and (max-width: 1087px) {\n.has-text-left-tablet-only {\n    text-align: left !important;\n}\n}\n@media screen and (max-width: 1087px) {\n.has-text-left-touch {\n    text-align: left !important;\n}\n}\n@media screen and (min-width: 1088px) {\n.has-text-left-desktop {\n    text-align: left !important;\n}\n}\n@media screen and (min-width: 1088px) and (max-width: 1279px) {\n.has-text-left-desktop-only {\n    text-align: left !important;\n}\n}\n@media screen and (min-width: 1280px) {\n.has-text-left-widescreen {\n    text-align: left !important;\n}\n}\n@media screen and (min-width: 1280px) and (max-width: 1471px) {\n.has-text-left-widescreen-only {\n    text-align: left !important;\n}\n}\n@media screen and (min-width: 1472px) {\n.has-text-left-fullhd {\n    text-align: left !important;\n}\n}\n@media screen and (max-width: 768px) {\n.has-text-right-mobile {\n    text-align: right !important;\n}\n}\n@media screen and (min-width: 769px), print {\n.has-text-right-tablet {\n    text-align: right !important;\n}\n}\n@media screen and (min-width: 769px) and (max-width: 1087px) {\n.has-text-right-tablet-only {\n    text-align: right !important;\n}\n}\n@media screen and (max-width: 1087px) {\n.has-text-right-touch {\n    text-align: right !important;\n}\n}\n@media screen and (min-width: 1088px) {\n.has-text-right-desktop {\n    text-align: right !important;\n}\n}\n@media screen and (min-width: 1088px) and (max-width: 1279px) {\n.has-text-right-desktop-only {\n    text-align: right !important;\n}\n}\n@media screen and (min-width: 1280px) {\n.has-text-right-widescreen {\n    text-align: right !important;\n}\n}\n@media screen and (min-width: 1280px) and (max-width: 1471px) {\n.has-text-right-widescreen-only {\n    text-align: right !important;\n}\n}\n@media screen and (min-width: 1472px) {\n.has-text-right-fullhd {\n    text-align: right !important;\n}\n}\n.is-capitalized {\n  text-transform: capitalize !important;\n}\n.is-lowercase {\n  text-transform: lowercase !important;\n}\n.is-uppercase {\n  text-transform: uppercase !important;\n}\n.is-italic {\n  font-style: italic !important;\n}\n.has-text-white {\n  color: white !important;\n}\na.has-text-white:hover, a.has-text-white:focus {\n  color: #e6e6e6 !important;\n}\n.has-background-white {\n  background-color: white !important;\n}\n.has-text-black {\n  color: #0a0a0a !important;\n}\na.has-text-black:hover, a.has-text-black:focus {\n  color: black !important;\n}\n.has-background-black {\n  background-color: #0a0a0a !important;\n}\n.has-text-light {\n  color: whitesmoke !important;\n}\na.has-text-light:hover, a.has-text-light:focus {\n  color: #dbdbdb !important;\n}\n.has-background-light {\n  background-color: whitesmoke !important;\n}\n.has-text-dark {\n  color: #363636 !important;\n}\na.has-text-dark:hover, a.has-text-dark:focus {\n  color: #1c1c1c !important;\n}\n.has-background-dark {\n  background-color: #363636 !important;\n}\n.has-text-primary {\n  color: #287ab1 !important;\n}\na.has-text-primary:hover, a.has-text-primary:focus {\n  color: #1f5d87 !important;\n}\n.has-background-primary {\n  background-color: #287ab1 !important;\n}\n.has-text-link {\n  color: #3273dc !important;\n}\na.has-text-link:hover, a.has-text-link:focus {\n  color: #205bbc !important;\n}\n.has-background-link {\n  background-color: #3273dc !important;\n}\n.has-text-info {\n  color: #209cee !important;\n}\na.has-text-info:hover, a.has-text-info:focus {\n  color: #0f81cc !important;\n}\n.has-background-info {\n  background-color: #209cee !important;\n}\n.has-text-success {\n  color: #23d160 !important;\n}\na.has-text-success:hover, a.has-text-success:focus {\n  color: #1ca64c !important;\n}\n.has-background-success {\n  background-color: #23d160 !important;\n}\n.has-text-warning {\n  color: #ffdd57 !important;\n}\na.has-text-warning:hover, a.has-text-warning:focus {\n  color: #ffd324 !important;\n}\n.has-background-warning {\n  background-color: #ffdd57 !important;\n}\n.has-text-danger {\n  color: #ff3860 !important;\n}\na.has-text-danger:hover, a.has-text-danger:focus {\n  color: #ff0537 !important;\n}\n.has-background-danger {\n  background-color: #ff3860 !important;\n}\n.has-text-black-bis {\n  color: #121212 !important;\n}\n.has-background-black-bis {\n  background-color: #121212 !important;\n}\n.has-text-black-ter {\n  color: #242424 !important;\n}\n.has-background-black-ter {\n  background-color: #242424 !important;\n}\n.has-text-grey-darker {\n  color: #363636 !important;\n}\n.has-background-grey-darker {\n  background-color: #363636 !important;\n}\n.has-text-grey-dark {\n  color: #4a4a4a !important;\n}\n.has-background-grey-dark {\n  background-color: #4a4a4a !important;\n}\n.has-text-grey {\n  color: #7a7a7a !important;\n}\n.has-background-grey {\n  background-color: #7a7a7a !important;\n}\n.has-text-grey-light {\n  color: #b5b5b5 !important;\n}\n.has-background-grey-light {\n  background-color: #b5b5b5 !important;\n}\n.has-text-grey-lighter {\n  color: #dbdbdb !important;\n}\n.has-background-grey-lighter {\n  background-color: #dbdbdb !important;\n}\n.has-text-white-ter {\n  color: whitesmoke !important;\n}\n.has-background-white-ter {\n  background-color: whitesmoke !important;\n}\n.has-text-white-bis {\n  color: #fafafa !important;\n}\n.has-background-white-bis {\n  background-color: #fafafa !important;\n}\n.has-text-weight-light {\n  font-weight: 300 !important;\n}\n.has-text-weight-normal {\n  font-weight: 400 !important;\n}\n.has-text-weight-semibold {\n  font-weight: 600 !important;\n}\n.has-text-weight-bold {\n  font-weight: 700 !important;\n}\n.is-block {\n  display: block !important;\n}\n@media screen and (max-width: 768px) {\n.is-block-mobile {\n    display: block !important;\n}\n}\n@media screen and (min-width: 769px), print {\n.is-block-tablet {\n    display: block !important;\n}\n}\n@media screen and (min-width: 769px) and (max-width: 1087px) {\n.is-block-tablet-only {\n    display: block !important;\n}\n}\n@media screen and (max-width: 1087px) {\n.is-block-touch {\n    display: block !important;\n}\n}\n@media screen and (min-width: 1088px) {\n.is-block-desktop {\n    display: block !important;\n}\n}\n@media screen and (min-width: 1088px) and (max-width: 1279px) {\n.is-block-desktop-only {\n    display: block !important;\n}\n}\n@media screen and (min-width: 1280px) {\n.is-block-widescreen {\n    display: block !important;\n}\n}\n@media screen and (min-width: 1280px) and (max-width: 1471px) {\n.is-block-widescreen-only {\n    display: block !important;\n}\n}\n@media screen and (min-width: 1472px) {\n.is-block-fullhd {\n    display: block !important;\n}\n}\n.is-flex {\n  display: flex !important;\n}\n@media screen and (max-width: 768px) {\n.is-flex-mobile {\n    display: flex !important;\n}\n}\n@media screen and (min-width: 769px), print {\n.is-flex-tablet {\n    display: flex !important;\n}\n}\n@media screen and (min-width: 769px) and (max-width: 1087px) {\n.is-flex-tablet-only {\n    display: flex !important;\n}\n}\n@media screen and (max-width: 1087px) {\n.is-flex-touch {\n    display: flex !important;\n}\n}\n@media screen and (min-width: 1088px) {\n.is-flex-desktop {\n    display: flex !important;\n}\n}\n@media screen and (min-width: 1088px) and (max-width: 1279px) {\n.is-flex-desktop-only {\n    display: flex !important;\n}\n}\n@media screen and (min-width: 1280px) {\n.is-flex-widescreen {\n    display: flex !important;\n}\n}\n@media screen and (min-width: 1280px) and (max-width: 1471px) {\n.is-flex-widescreen-only {\n    display: flex !important;\n}\n}\n@media screen and (min-width: 1472px) {\n.is-flex-fullhd {\n    display: flex !important;\n}\n}\n.is-inline {\n  display: inline !important;\n}\n@media screen and (max-width: 768px) {\n.is-inline-mobile {\n    display: inline !important;\n}\n}\n@media screen and (min-width: 769px), print {\n.is-inline-tablet {\n    display: inline !important;\n}\n}\n@media screen and (min-width: 769px) and (max-width: 1087px) {\n.is-inline-tablet-only {\n    display: inline !important;\n}\n}\n@media screen and (max-width: 1087px) {\n.is-inline-touch {\n    display: inline !important;\n}\n}\n@media screen and (min-width: 1088px) {\n.is-inline-desktop {\n    display: inline !important;\n}\n}\n@media screen and (min-width: 1088px) and (max-width: 1279px) {\n.is-inline-desktop-only {\n    display: inline !important;\n}\n}\n@media screen and (min-width: 1280px) {\n.is-inline-widescreen {\n    display: inline !important;\n}\n}\n@media screen and (min-width: 1280px) and (max-width: 1471px) {\n.is-inline-widescreen-only {\n    display: inline !important;\n}\n}\n@media screen and (min-width: 1472px) {\n.is-inline-fullhd {\n    display: inline !important;\n}\n}\n.is-inline-block {\n  display: inline-block !important;\n}\n@media screen and (max-width: 768px) {\n.is-inline-block-mobile {\n    display: inline-block !important;\n}\n}\n@media screen and (min-width: 769px), print {\n.is-inline-block-tablet {\n    display: inline-block !important;\n}\n}\n@media screen and (min-width: 769px) and (max-width: 1087px) {\n.is-inline-block-tablet-only {\n    display: inline-block !important;\n}\n}\n@media screen and (max-width: 1087px) {\n.is-inline-block-touch {\n    display: inline-block !important;\n}\n}\n@media screen and (min-width: 1088px) {\n.is-inline-block-desktop {\n    display: inline-block !important;\n}\n}\n@media screen and (min-width: 1088px) and (max-width: 1279px) {\n.is-inline-block-desktop-only {\n    display: inline-block !important;\n}\n}\n@media screen and (min-width: 1280px) {\n.is-inline-block-widescreen {\n    display: inline-block !important;\n}\n}\n@media screen and (min-width: 1280px) and (max-width: 1471px) {\n.is-inline-block-widescreen-only {\n    display: inline-block !important;\n}\n}\n@media screen and (min-width: 1472px) {\n.is-inline-block-fullhd {\n    display: inline-block !important;\n}\n}\n.is-inline-flex {\n  display: inline-flex !important;\n}\n@media screen and (max-width: 768px) {\n.is-inline-flex-mobile {\n    display: inline-flex !important;\n}\n}\n@media screen and (min-width: 769px), print {\n.is-inline-flex-tablet {\n    display: inline-flex !important;\n}\n}\n@media screen and (min-width: 769px) and (max-width: 1087px) {\n.is-inline-flex-tablet-only {\n    display: inline-flex !important;\n}\n}\n@media screen and (max-width: 1087px) {\n.is-inline-flex-touch {\n    display: inline-flex !important;\n}\n}\n@media screen and (min-width: 1088px) {\n.is-inline-flex-desktop {\n    display: inline-flex !important;\n}\n}\n@media screen and (min-width: 1088px) and (max-width: 1279px) {\n.is-inline-flex-desktop-only {\n    display: inline-flex !important;\n}\n}\n@media screen and (min-width: 1280px) {\n.is-inline-flex-widescreen {\n    display: inline-flex !important;\n}\n}\n@media screen and (min-width: 1280px) and (max-width: 1471px) {\n.is-inline-flex-widescreen-only {\n    display: inline-flex !important;\n}\n}\n@media screen and (min-width: 1472px) {\n.is-inline-flex-fullhd {\n    display: inline-flex !important;\n}\n}\n.is-hidden {\n  display: none !important;\n}\n@media screen and (max-width: 768px) {\n.is-hidden-mobile {\n    display: none !important;\n}\n}\n@media screen and (min-width: 769px), print {\n.is-hidden-tablet {\n    display: none !important;\n}\n}\n@media screen and (min-width: 769px) and (max-width: 1087px) {\n.is-hidden-tablet-only {\n    display: none !important;\n}\n}\n@media screen and (max-width: 1087px) {\n.is-hidden-touch {\n    display: none !important;\n}\n}\n@media screen and (min-width: 1088px) {\n.is-hidden-desktop {\n    display: none !important;\n}\n}\n@media screen and (min-width: 1088px) and (max-width: 1279px) {\n.is-hidden-desktop-only {\n    display: none !important;\n}\n}\n@media screen and (min-width: 1280px) {\n.is-hidden-widescreen {\n    display: none !important;\n}\n}\n@media screen and (min-width: 1280px) and (max-width: 1471px) {\n.is-hidden-widescreen-only {\n    display: none !important;\n}\n}\n@media screen and (min-width: 1472px) {\n.is-hidden-fullhd {\n    display: none !important;\n}\n}\n.is-invisible {\n  visibility: hidden !important;\n}\n@media screen and (max-width: 768px) {\n.is-invisible-mobile {\n    visibility: hidden !important;\n}\n}\n@media screen and (min-width: 769px), print {\n.is-invisible-tablet {\n    visibility: hidden !important;\n}\n}\n@media screen and (min-width: 769px) and (max-width: 1087px) {\n.is-invisible-tablet-only {\n    visibility: hidden !important;\n}\n}\n@media screen and (max-width: 1087px) {\n.is-invisible-touch {\n    visibility: hidden !important;\n}\n}\n@media screen and (min-width: 1088px) {\n.is-invisible-desktop {\n    visibility: hidden !important;\n}\n}\n@media screen and (min-width: 1088px) and (max-width: 1279px) {\n.is-invisible-desktop-only {\n    visibility: hidden !important;\n}\n}\n@media screen and (min-width: 1280px) {\n.is-invisible-widescreen {\n    visibility: hidden !important;\n}\n}\n@media screen and (min-width: 1280px) and (max-width: 1471px) {\n.is-invisible-widescreen-only {\n    visibility: hidden !important;\n}\n}\n@media screen and (min-width: 1472px) {\n.is-invisible-fullhd {\n    visibility: hidden !important;\n}\n}\n.is-marginless {\n  margin: 0 !important;\n}\n.is-paddingless {\n  padding: 0 !important;\n}\n.is-radiusless {\n  border-radius: 0 !important;\n}\n.is-shadowless {\n  box-shadow: none !important;\n}\n.box {\n  background-color: white;\n  border-radius: 6px;\n  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);\n  color: #4a4a4a;\n  display: block;\n  padding: 1.25rem;\n}\na.box:hover, a.box:focus {\n  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px #3273dc;\n}\na.box:active {\n  box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.2), 0 0 0 1px #3273dc;\n}\n.button {\n  background-color: white;\n  border-color: #dbdbdb;\n  border-width: 1px;\n  color: #363636;\n  cursor: pointer;\n  justify-content: center;\n  padding-bottom: calc(0.375em - 1px);\n  padding-left: 0.75em;\n  padding-right: 0.75em;\n  padding-top: calc(0.375em - 1px);\n  text-align: center;\n  white-space: nowrap;\n}\n.button strong {\n    color: inherit;\n}\n.button .icon, .button .icon.is-small, .button .icon.is-medium, .button .icon.is-large {\n    height: 1.5em;\n    width: 1.5em;\n}\n.button .icon:first-child:not(:last-child) {\n    margin-left: calc(-0.375em - 1px);\n    margin-right: 0.1875em;\n}\n.button .icon:last-child:not(:first-child) {\n    margin-left: 0.1875em;\n    margin-right: calc(-0.375em - 1px);\n}\n.button .icon:first-child:last-child {\n    margin-left: calc(-0.375em - 1px);\n    margin-right: calc(-0.375em - 1px);\n}\n.button:hover, .button.is-hovered {\n    border-color: #b5b5b5;\n    color: #363636;\n}\n.button:focus, .button.is-focused {\n    border-color: #3273dc;\n    color: #363636;\n}\n.button:focus:not(:active), .button.is-focused:not(:active) {\n      box-shadow: 0 0 0 0.125em rgba(50, 115, 220, 0.25);\n}\n.button:active, .button.is-active {\n    border-color: #4a4a4a;\n    color: #363636;\n}\n.button.is-text {\n    background-color: transparent;\n    border-color: transparent;\n    color: #4a4a4a;\n    text-decoration: underline;\n}\n.button.is-text:hover, .button.is-text.is-hovered, .button.is-text:focus, .button.is-text.is-focused {\n      background-color: whitesmoke;\n      color: #363636;\n}\n.button.is-text:active, .button.is-text.is-active {\n      background-color: #e8e8e8;\n      color: #363636;\n}\n.button.is-text[disabled] {\n      background-color: transparent;\n      border-color: transparent;\n      box-shadow: none;\n}\n.button.is-white {\n    background-color: white;\n    border-color: transparent;\n    color: #0a0a0a;\n}\n.button.is-white:hover, .button.is-white.is-hovered {\n      background-color: #f9f9f9;\n      border-color: transparent;\n      color: #0a0a0a;\n}\n.button.is-white:focus, .button.is-white.is-focused {\n      border-color: transparent;\n      color: #0a0a0a;\n}\n.button.is-white:focus:not(:active), .button.is-white.is-focused:not(:active) {\n        box-shadow: 0 0 0 0.125em rgba(255, 255, 255, 0.25);\n}\n.button.is-white:active, .button.is-white.is-active {\n      background-color: #f2f2f2;\n      border-color: transparent;\n      color: #0a0a0a;\n}\n.button.is-white[disabled] {\n      background-color: white;\n      border-color: transparent;\n      box-shadow: none;\n}\n.button.is-white.is-inverted {\n      background-color: #0a0a0a;\n      color: white;\n}\n.button.is-white.is-inverted:hover {\n        background-color: black;\n}\n.button.is-white.is-inverted[disabled] {\n        background-color: #0a0a0a;\n        border-color: transparent;\n        box-shadow: none;\n        color: white;\n}\n.button.is-white.is-loading::after {\n      border-color: transparent transparent #0a0a0a #0a0a0a !important;\n}\n.button.is-white.is-outlined {\n      background-color: transparent;\n      border-color: white;\n      color: white;\n}\n.button.is-white.is-outlined:hover, .button.is-white.is-outlined:focus {\n        background-color: white;\n        border-color: white;\n        color: #0a0a0a;\n}\n.button.is-white.is-outlined.is-loading::after {\n        border-color: transparent transparent white white !important;\n}\n.button.is-white.is-outlined[disabled] {\n        background-color: transparent;\n        border-color: white;\n        box-shadow: none;\n        color: white;\n}\n.button.is-white.is-inverted.is-outlined {\n      background-color: transparent;\n      border-color: #0a0a0a;\n      color: #0a0a0a;\n}\n.button.is-white.is-inverted.is-outlined:hover, .button.is-white.is-inverted.is-outlined:focus {\n        background-color: #0a0a0a;\n        color: white;\n}\n.button.is-white.is-inverted.is-outlined[disabled] {\n        background-color: transparent;\n        border-color: #0a0a0a;\n        box-shadow: none;\n        color: #0a0a0a;\n}\n.button.is-black {\n    background-color: #0a0a0a;\n    border-color: transparent;\n    color: white;\n}\n.button.is-black:hover, .button.is-black.is-hovered {\n      background-color: #040404;\n      border-color: transparent;\n      color: white;\n}\n.button.is-black:focus, .button.is-black.is-focused {\n      border-color: transparent;\n      color: white;\n}\n.button.is-black:focus:not(:active), .button.is-black.is-focused:not(:active) {\n        box-shadow: 0 0 0 0.125em rgba(10, 10, 10, 0.25);\n}\n.button.is-black:active, .button.is-black.is-active {\n      background-color: black;\n      border-color: transparent;\n      color: white;\n}\n.button.is-black[disabled] {\n      background-color: #0a0a0a;\n      border-color: transparent;\n      box-shadow: none;\n}\n.button.is-black.is-inverted {\n      background-color: white;\n      color: #0a0a0a;\n}\n.button.is-black.is-inverted:hover {\n        background-color: #f2f2f2;\n}\n.button.is-black.is-inverted[disabled] {\n        background-color: white;\n        border-color: transparent;\n        box-shadow: none;\n        color: #0a0a0a;\n}\n.button.is-black.is-loading::after {\n      border-color: transparent transparent white white !important;\n}\n.button.is-black.is-outlined {\n      background-color: transparent;\n      border-color: #0a0a0a;\n      color: #0a0a0a;\n}\n.button.is-black.is-outlined:hover, .button.is-black.is-outlined:focus {\n        background-color: #0a0a0a;\n        border-color: #0a0a0a;\n        color: white;\n}\n.button.is-black.is-outlined.is-loading::after {\n        border-color: transparent transparent #0a0a0a #0a0a0a !important;\n}\n.button.is-black.is-outlined[disabled] {\n        background-color: transparent;\n        border-color: #0a0a0a;\n        box-shadow: none;\n        color: #0a0a0a;\n}\n.button.is-black.is-inverted.is-outlined {\n      background-color: transparent;\n      border-color: white;\n      color: white;\n}\n.button.is-black.is-inverted.is-outlined:hover, .button.is-black.is-inverted.is-outlined:focus {\n        background-color: white;\n        color: #0a0a0a;\n}\n.button.is-black.is-inverted.is-outlined[disabled] {\n        background-color: transparent;\n        border-color: white;\n        box-shadow: none;\n        color: white;\n}\n.button.is-light {\n    background-color: whitesmoke;\n    border-color: transparent;\n    color: #363636;\n}\n.button.is-light:hover, .button.is-light.is-hovered {\n      background-color: #eeeeee;\n      border-color: transparent;\n      color: #363636;\n}\n.button.is-light:focus, .button.is-light.is-focused {\n      border-color: transparent;\n      color: #363636;\n}\n.button.is-light:focus:not(:active), .button.is-light.is-focused:not(:active) {\n        box-shadow: 0 0 0 0.125em rgba(245, 245, 245, 0.25);\n}\n.button.is-light:active, .button.is-light.is-active {\n      background-color: #e8e8e8;\n      border-color: transparent;\n      color: #363636;\n}\n.button.is-light[disabled] {\n      background-color: whitesmoke;\n      border-color: transparent;\n      box-shadow: none;\n}\n.button.is-light.is-inverted {\n      background-color: #363636;\n      color: whitesmoke;\n}\n.button.is-light.is-inverted:hover {\n        background-color: #292929;\n}\n.button.is-light.is-inverted[disabled] {\n        background-color: #363636;\n        border-color: transparent;\n        box-shadow: none;\n        color: whitesmoke;\n}\n.button.is-light.is-loading::after {\n      border-color: transparent transparent #363636 #363636 !important;\n}\n.button.is-light.is-outlined {\n      background-color: transparent;\n      border-color: whitesmoke;\n      color: whitesmoke;\n}\n.button.is-light.is-outlined:hover, .button.is-light.is-outlined:focus {\n        background-color: whitesmoke;\n        border-color: whitesmoke;\n        color: #363636;\n}\n.button.is-light.is-outlined.is-loading::after {\n        border-color: transparent transparent whitesmoke whitesmoke !important;\n}\n.button.is-light.is-outlined[disabled] {\n        background-color: transparent;\n        border-color: whitesmoke;\n        box-shadow: none;\n        color: whitesmoke;\n}\n.button.is-light.is-inverted.is-outlined {\n      background-color: transparent;\n      border-color: #363636;\n      color: #363636;\n}\n.button.is-light.is-inverted.is-outlined:hover, .button.is-light.is-inverted.is-outlined:focus {\n        background-color: #363636;\n        color: whitesmoke;\n}\n.button.is-light.is-inverted.is-outlined[disabled] {\n        background-color: transparent;\n        border-color: #363636;\n        box-shadow: none;\n        color: #363636;\n}\n.button.is-dark {\n    background-color: #363636;\n    border-color: transparent;\n    color: whitesmoke;\n}\n.button.is-dark:hover, .button.is-dark.is-hovered {\n      background-color: #2f2f2f;\n      border-color: transparent;\n      color: whitesmoke;\n}\n.button.is-dark:focus, .button.is-dark.is-focused {\n      border-color: transparent;\n      color: whitesmoke;\n}\n.button.is-dark:focus:not(:active), .button.is-dark.is-focused:not(:active) {\n        box-shadow: 0 0 0 0.125em rgba(54, 54, 54, 0.25);\n}\n.button.is-dark:active, .button.is-dark.is-active {\n      background-color: #292929;\n      border-color: transparent;\n      color: whitesmoke;\n}\n.button.is-dark[disabled] {\n      background-color: #363636;\n      border-color: transparent;\n      box-shadow: none;\n}\n.button.is-dark.is-inverted {\n      background-color: whitesmoke;\n      color: #363636;\n}\n.button.is-dark.is-inverted:hover {\n        background-color: #e8e8e8;\n}\n.button.is-dark.is-inverted[disabled] {\n        background-color: whitesmoke;\n        border-color: transparent;\n        box-shadow: none;\n        color: #363636;\n}\n.button.is-dark.is-loading::after {\n      border-color: transparent transparent whitesmoke whitesmoke !important;\n}\n.button.is-dark.is-outlined {\n      background-color: transparent;\n      border-color: #363636;\n      color: #363636;\n}\n.button.is-dark.is-outlined:hover, .button.is-dark.is-outlined:focus {\n        background-color: #363636;\n        border-color: #363636;\n        color: whitesmoke;\n}\n.button.is-dark.is-outlined.is-loading::after {\n        border-color: transparent transparent #363636 #363636 !important;\n}\n.button.is-dark.is-outlined[disabled] {\n        background-color: transparent;\n        border-color: #363636;\n        box-shadow: none;\n        color: #363636;\n}\n.button.is-dark.is-inverted.is-outlined {\n      background-color: transparent;\n      border-color: whitesmoke;\n      color: whitesmoke;\n}\n.button.is-dark.is-inverted.is-outlined:hover, .button.is-dark.is-inverted.is-outlined:focus {\n        background-color: whitesmoke;\n        color: #363636;\n}\n.button.is-dark.is-inverted.is-outlined[disabled] {\n        background-color: transparent;\n        border-color: whitesmoke;\n        box-shadow: none;\n        color: whitesmoke;\n}\n.button.is-primary {\n    background-color: #287ab1;\n    border-color: transparent;\n    color: #fff;\n}\n.button.is-primary:hover, .button.is-primary.is-hovered {\n      background-color: #2673a7;\n      border-color: transparent;\n      color: #fff;\n}\n.button.is-primary:focus, .button.is-primary.is-focused {\n      border-color: transparent;\n      color: #fff;\n}\n.button.is-primary:focus:not(:active), .button.is-primary.is-focused:not(:active) {\n        box-shadow: 0 0 0 0.125em rgba(40, 122, 177, 0.25);\n}\n.button.is-primary:active, .button.is-primary.is-active {\n      background-color: #236c9c;\n      border-color: transparent;\n      color: #fff;\n}\n.button.is-primary[disabled] {\n      background-color: #287ab1;\n      border-color: transparent;\n      box-shadow: none;\n}\n.button.is-primary.is-inverted {\n      background-color: #fff;\n      color: #287ab1;\n}\n.button.is-primary.is-inverted:hover {\n        background-color: #f2f2f2;\n}\n.button.is-primary.is-inverted[disabled] {\n        background-color: #fff;\n        border-color: transparent;\n        box-shadow: none;\n        color: #287ab1;\n}\n.button.is-primary.is-loading::after {\n      border-color: transparent transparent #fff #fff !important;\n}\n.button.is-primary.is-outlined {\n      background-color: transparent;\n      border-color: #287ab1;\n      color: #287ab1;\n}\n.button.is-primary.is-outlined:hover, .button.is-primary.is-outlined:focus {\n        background-color: #287ab1;\n        border-color: #287ab1;\n        color: #fff;\n}\n.button.is-primary.is-outlined.is-loading::after {\n        border-color: transparent transparent #287ab1 #287ab1 !important;\n}\n.button.is-primary.is-outlined[disabled] {\n        background-color: transparent;\n        border-color: #287ab1;\n        box-shadow: none;\n        color: #287ab1;\n}\n.button.is-primary.is-inverted.is-outlined {\n      background-color: transparent;\n      border-color: #fff;\n      color: #fff;\n}\n.button.is-primary.is-inverted.is-outlined:hover, .button.is-primary.is-inverted.is-outlined:focus {\n        background-color: #fff;\n        color: #287ab1;\n}\n.button.is-primary.is-inverted.is-outlined[disabled] {\n        background-color: transparent;\n        border-color: #fff;\n        box-shadow: none;\n        color: #fff;\n}\n.button.is-link {\n    background-color: #3273dc;\n    border-color: transparent;\n    color: #fff;\n}\n.button.is-link:hover, .button.is-link.is-hovered {\n      background-color: #276cda;\n      border-color: transparent;\n      color: #fff;\n}\n.button.is-link:focus, .button.is-link.is-focused {\n      border-color: transparent;\n      color: #fff;\n}\n.button.is-link:focus:not(:active), .button.is-link.is-focused:not(:active) {\n        box-shadow: 0 0 0 0.125em rgba(50, 115, 220, 0.25);\n}\n.button.is-link:active, .button.is-link.is-active {\n      background-color: #2366d1;\n      border-color: transparent;\n      color: #fff;\n}\n.button.is-link[disabled] {\n      background-color: #3273dc;\n      border-color: transparent;\n      box-shadow: none;\n}\n.button.is-link.is-inverted {\n      background-color: #fff;\n      color: #3273dc;\n}\n.button.is-link.is-inverted:hover {\n        background-color: #f2f2f2;\n}\n.button.is-link.is-inverted[disabled] {\n        background-color: #fff;\n        border-color: transparent;\n        box-shadow: none;\n        color: #3273dc;\n}\n.button.is-link.is-loading::after {\n      border-color: transparent transparent #fff #fff !important;\n}\n.button.is-link.is-outlined {\n      background-color: transparent;\n      border-color: #3273dc;\n      color: #3273dc;\n}\n.button.is-link.is-outlined:hover, .button.is-link.is-outlined:focus {\n        background-color: #3273dc;\n        border-color: #3273dc;\n        color: #fff;\n}\n.button.is-link.is-outlined.is-loading::after {\n        border-color: transparent transparent #3273dc #3273dc !important;\n}\n.button.is-link.is-outlined[disabled] {\n        background-color: transparent;\n        border-color: #3273dc;\n        box-shadow: none;\n        color: #3273dc;\n}\n.button.is-link.is-inverted.is-outlined {\n      background-color: transparent;\n      border-color: #fff;\n      color: #fff;\n}\n.button.is-link.is-inverted.is-outlined:hover, .button.is-link.is-inverted.is-outlined:focus {\n        background-color: #fff;\n        color: #3273dc;\n}\n.button.is-link.is-inverted.is-outlined[disabled] {\n        background-color: transparent;\n        border-color: #fff;\n        box-shadow: none;\n        color: #fff;\n}\n.button.is-info {\n    background-color: #209cee;\n    border-color: transparent;\n    color: #fff;\n}\n.button.is-info:hover, .button.is-info.is-hovered {\n      background-color: #1496ed;\n      border-color: transparent;\n      color: #fff;\n}\n.button.is-info:focus, .button.is-info.is-focused {\n      border-color: transparent;\n      color: #fff;\n}\n.button.is-info:focus:not(:active), .button.is-info.is-focused:not(:active) {\n        box-shadow: 0 0 0 0.125em rgba(32, 156, 238, 0.25);\n}\n.button.is-info:active, .button.is-info.is-active {\n      background-color: #118fe4;\n      border-color: transparent;\n      color: #fff;\n}\n.button.is-info[disabled] {\n      background-color: #209cee;\n      border-color: transparent;\n      box-shadow: none;\n}\n.button.is-info.is-inverted {\n      background-color: #fff;\n      color: #209cee;\n}\n.button.is-info.is-inverted:hover {\n        background-color: #f2f2f2;\n}\n.button.is-info.is-inverted[disabled] {\n        background-color: #fff;\n        border-color: transparent;\n        box-shadow: none;\n        color: #209cee;\n}\n.button.is-info.is-loading::after {\n      border-color: transparent transparent #fff #fff !important;\n}\n.button.is-info.is-outlined {\n      background-color: transparent;\n      border-color: #209cee;\n      color: #209cee;\n}\n.button.is-info.is-outlined:hover, .button.is-info.is-outlined:focus {\n        background-color: #209cee;\n        border-color: #209cee;\n        color: #fff;\n}\n.button.is-info.is-outlined.is-loading::after {\n        border-color: transparent transparent #209cee #209cee !important;\n}\n.button.is-info.is-outlined[disabled] {\n        background-color: transparent;\n        border-color: #209cee;\n        box-shadow: none;\n        color: #209cee;\n}\n.button.is-info.is-inverted.is-outlined {\n      background-color: transparent;\n      border-color: #fff;\n      color: #fff;\n}\n.button.is-info.is-inverted.is-outlined:hover, .button.is-info.is-inverted.is-outlined:focus {\n        background-color: #fff;\n        color: #209cee;\n}\n.button.is-info.is-inverted.is-outlined[disabled] {\n        background-color: transparent;\n        border-color: #fff;\n        box-shadow: none;\n        color: #fff;\n}\n.button.is-success {\n    background-color: #23d160;\n    border-color: transparent;\n    color: #fff;\n}\n.button.is-success:hover, .button.is-success.is-hovered {\n      background-color: #22c65b;\n      border-color: transparent;\n      color: #fff;\n}\n.button.is-success:focus, .button.is-success.is-focused {\n      border-color: transparent;\n      color: #fff;\n}\n.button.is-success:focus:not(:active), .button.is-success.is-focused:not(:active) {\n        box-shadow: 0 0 0 0.125em rgba(35, 209, 96, 0.25);\n}\n.button.is-success:active, .button.is-success.is-active {\n      background-color: #20bc56;\n      border-color: transparent;\n      color: #fff;\n}\n.button.is-success[disabled] {\n      background-color: #23d160;\n      border-color: transparent;\n      box-shadow: none;\n}\n.button.is-success.is-inverted {\n      background-color: #fff;\n      color: #23d160;\n}\n.button.is-success.is-inverted:hover {\n        background-color: #f2f2f2;\n}\n.button.is-success.is-inverted[disabled] {\n        background-color: #fff;\n        border-color: transparent;\n        box-shadow: none;\n        color: #23d160;\n}\n.button.is-success.is-loading::after {\n      border-color: transparent transparent #fff #fff !important;\n}\n.button.is-success.is-outlined {\n      background-color: transparent;\n      border-color: #23d160;\n      color: #23d160;\n}\n.button.is-success.is-outlined:hover, .button.is-success.is-outlined:focus {\n        background-color: #23d160;\n        border-color: #23d160;\n        color: #fff;\n}\n.button.is-success.is-outlined.is-loading::after {\n        border-color: transparent transparent #23d160 #23d160 !important;\n}\n.button.is-success.is-outlined[disabled] {\n        background-color: transparent;\n        border-color: #23d160;\n        box-shadow: none;\n        color: #23d160;\n}\n.button.is-success.is-inverted.is-outlined {\n      background-color: transparent;\n      border-color: #fff;\n      color: #fff;\n}\n.button.is-success.is-inverted.is-outlined:hover, .button.is-success.is-inverted.is-outlined:focus {\n        background-color: #fff;\n        color: #23d160;\n}\n.button.is-success.is-inverted.is-outlined[disabled] {\n        background-color: transparent;\n        border-color: #fff;\n        box-shadow: none;\n        color: #fff;\n}\n.button.is-warning {\n    background-color: #ffdd57;\n    border-color: transparent;\n    color: rgba(0, 0, 0, 0.7);\n}\n.button.is-warning:hover, .button.is-warning.is-hovered {\n      background-color: #ffdb4a;\n      border-color: transparent;\n      color: rgba(0, 0, 0, 0.7);\n}\n.button.is-warning:focus, .button.is-warning.is-focused {\n      border-color: transparent;\n      color: rgba(0, 0, 0, 0.7);\n}\n.button.is-warning:focus:not(:active), .button.is-warning.is-focused:not(:active) {\n        box-shadow: 0 0 0 0.125em rgba(255, 221, 87, 0.25);\n}\n.button.is-warning:active, .button.is-warning.is-active {\n      background-color: #ffd83d;\n      border-color: transparent;\n      color: rgba(0, 0, 0, 0.7);\n}\n.button.is-warning[disabled] {\n      background-color: #ffdd57;\n      border-color: transparent;\n      box-shadow: none;\n}\n.button.is-warning.is-inverted {\n      background-color: rgba(0, 0, 0, 0.7);\n      color: #ffdd57;\n}\n.button.is-warning.is-inverted:hover {\n        background-color: rgba(0, 0, 0, 0.7);\n}\n.button.is-warning.is-inverted[disabled] {\n        background-color: rgba(0, 0, 0, 0.7);\n        border-color: transparent;\n        box-shadow: none;\n        color: #ffdd57;\n}\n.button.is-warning.is-loading::after {\n      border-color: transparent transparent rgba(0, 0, 0, 0.7) rgba(0, 0, 0, 0.7) !important;\n}\n.button.is-warning.is-outlined {\n      background-color: transparent;\n      border-color: #ffdd57;\n      color: #ffdd57;\n}\n.button.is-warning.is-outlined:hover, .button.is-warning.is-outlined:focus {\n        background-color: #ffdd57;\n        border-color: #ffdd57;\n        color: rgba(0, 0, 0, 0.7);\n}\n.button.is-warning.is-outlined.is-loading::after {\n        border-color: transparent transparent #ffdd57 #ffdd57 !important;\n}\n.button.is-warning.is-outlined[disabled] {\n        background-color: transparent;\n        border-color: #ffdd57;\n        box-shadow: none;\n        color: #ffdd57;\n}\n.button.is-warning.is-inverted.is-outlined {\n      background-color: transparent;\n      border-color: rgba(0, 0, 0, 0.7);\n      color: rgba(0, 0, 0, 0.7);\n}\n.button.is-warning.is-inverted.is-outlined:hover, .button.is-warning.is-inverted.is-outlined:focus {\n        background-color: rgba(0, 0, 0, 0.7);\n        color: #ffdd57;\n}\n.button.is-warning.is-inverted.is-outlined[disabled] {\n        background-color: transparent;\n        border-color: rgba(0, 0, 0, 0.7);\n        box-shadow: none;\n        color: rgba(0, 0, 0, 0.7);\n}\n.button.is-danger {\n    background-color: #ff3860;\n    border-color: transparent;\n    color: #fff;\n}\n.button.is-danger:hover, .button.is-danger.is-hovered {\n      background-color: #ff2b56;\n      border-color: transparent;\n      color: #fff;\n}\n.button.is-danger:focus, .button.is-danger.is-focused {\n      border-color: transparent;\n      color: #fff;\n}\n.button.is-danger:focus:not(:active), .button.is-danger.is-focused:not(:active) {\n        box-shadow: 0 0 0 0.125em rgba(255, 56, 96, 0.25);\n}\n.button.is-danger:active, .button.is-danger.is-active {\n      background-color: #ff1f4b;\n      border-color: transparent;\n      color: #fff;\n}\n.button.is-danger[disabled] {\n      background-color: #ff3860;\n      border-color: transparent;\n      box-shadow: none;\n}\n.button.is-danger.is-inverted {\n      background-color: #fff;\n      color: #ff3860;\n}\n.button.is-danger.is-inverted:hover {\n        background-color: #f2f2f2;\n}\n.button.is-danger.is-inverted[disabled] {\n        background-color: #fff;\n        border-color: transparent;\n        box-shadow: none;\n        color: #ff3860;\n}\n.button.is-danger.is-loading::after {\n      border-color: transparent transparent #fff #fff !important;\n}\n.button.is-danger.is-outlined {\n      background-color: transparent;\n      border-color: #ff3860;\n      color: #ff3860;\n}\n.button.is-danger.is-outlined:hover, .button.is-danger.is-outlined:focus {\n        background-color: #ff3860;\n        border-color: #ff3860;\n        color: #fff;\n}\n.button.is-danger.is-outlined.is-loading::after {\n        border-color: transparent transparent #ff3860 #ff3860 !important;\n}\n.button.is-danger.is-outlined[disabled] {\n        background-color: transparent;\n        border-color: #ff3860;\n        box-shadow: none;\n        color: #ff3860;\n}\n.button.is-danger.is-inverted.is-outlined {\n      background-color: transparent;\n      border-color: #fff;\n      color: #fff;\n}\n.button.is-danger.is-inverted.is-outlined:hover, .button.is-danger.is-inverted.is-outlined:focus {\n        background-color: #fff;\n        color: #ff3860;\n}\n.button.is-danger.is-inverted.is-outlined[disabled] {\n        background-color: transparent;\n        border-color: #fff;\n        box-shadow: none;\n        color: #fff;\n}\n.button.is-small {\n    border-radius: 2px;\n    font-size: 0.75rem;\n}\n.button.is-medium {\n    font-size: 1.25rem;\n}\n.button.is-large {\n    font-size: 1.5rem;\n}\n.button[disabled] {\n    background-color: white;\n    border-color: #dbdbdb;\n    box-shadow: none;\n    opacity: 0.5;\n}\n.button.is-fullwidth {\n    display: flex;\n    width: 100%;\n}\n.button.is-loading {\n    color: transparent !important;\n    pointer-events: none;\n}\n.button.is-loading::after {\n      position: absolute;\n      left: calc(50% - (1em / 2));\n      top: calc(50% - (1em / 2));\n      position: absolute !important;\n}\n.button.is-static {\n    background-color: whitesmoke;\n    border-color: #dbdbdb;\n    color: #7a7a7a;\n    box-shadow: none;\n    pointer-events: none;\n}\n.button.is-rounded {\n    border-radius: 290486px;\n    padding-left: 1em;\n    padding-right: 1em;\n}\n.buttons {\n  align-items: center;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n}\n.buttons .button {\n    margin-bottom: 0.5rem;\n}\n.buttons .button:not(:last-child) {\n      margin-right: 0.5rem;\n}\n.buttons:last-child {\n    margin-bottom: -0.5rem;\n}\n.buttons:not(:last-child) {\n    margin-bottom: 1rem;\n}\n.buttons.has-addons .button:not(:first-child) {\n    border-bottom-left-radius: 0;\n    border-top-left-radius: 0;\n}\n.buttons.has-addons .button:not(:last-child) {\n    border-bottom-right-radius: 0;\n    border-top-right-radius: 0;\n    margin-right: -1px;\n}\n.buttons.has-addons .button:last-child {\n    margin-right: 0;\n}\n.buttons.has-addons .button:hover, .buttons.has-addons .button.is-hovered {\n    z-index: 2;\n}\n.buttons.has-addons .button:focus, .buttons.has-addons .button.is-focused, .buttons.has-addons .button:active, .buttons.has-addons .button.is-active, .buttons.has-addons .button.is-selected {\n    z-index: 3;\n}\n.buttons.has-addons .button:focus:hover, .buttons.has-addons .button.is-focused:hover, .buttons.has-addons .button:active:hover, .buttons.has-addons .button.is-active:hover, .buttons.has-addons .button.is-selected:hover {\n      z-index: 4;\n}\n.buttons.has-addons .button.is-expanded {\n    flex-grow: 1;\n}\n.buttons.is-centered {\n    justify-content: center;\n}\n.buttons.is-right {\n    justify-content: flex-end;\n}\n.container {\n  margin: 0 auto;\n  position: relative;\n}\n@media screen and (min-width: 1088px) {\n.container {\n      max-width: 960px;\n      width: 960px;\n}\n.container.is-fluid {\n        margin-left: 64px;\n        margin-right: 64px;\n        max-width: none;\n        width: auto;\n}\n}\n@media screen and (max-width: 1279px) {\n.container.is-widescreen {\n      max-width: 1152px;\n      width: auto;\n}\n}\n@media screen and (max-width: 1471px) {\n.container.is-fullhd {\n      max-width: 1344px;\n      width: auto;\n}\n}\n@media screen and (min-width: 1280px) {\n.container {\n      max-width: 1152px;\n      width: 1152px;\n}\n}\n@media screen and (min-width: 1472px) {\n.container {\n      max-width: 1344px;\n      width: 1344px;\n}\n}\n.content li + li {\n  margin-top: 0.25em;\n}\n.content p:not(:last-child),\n.content dl:not(:last-child),\n.content ol:not(:last-child),\n.content ul:not(:last-child),\n.content blockquote:not(:last-child),\n.content pre:not(:last-child),\n.content table:not(:last-child) {\n  margin-bottom: 1em;\n}\n.content h1,\n.content h2,\n.content h3,\n.content h4,\n.content h5,\n.content h6 {\n  color: #363636;\n  font-weight: 600;\n  line-height: 1.125;\n}\n.content h1 {\n  font-size: 2em;\n  margin-bottom: 0.5em;\n}\n.content h1:not(:first-child) {\n    margin-top: 1em;\n}\n.content h2 {\n  font-size: 1.75em;\n  margin-bottom: 0.5714em;\n}\n.content h2:not(:first-child) {\n    margin-top: 1.1428em;\n}\n.content h3 {\n  font-size: 1.5em;\n  margin-bottom: 0.6666em;\n}\n.content h3:not(:first-child) {\n    margin-top: 1.3333em;\n}\n.content h4 {\n  font-size: 1.25em;\n  margin-bottom: 0.8em;\n}\n.content h5 {\n  font-size: 1.125em;\n  margin-bottom: 0.8888em;\n}\n.content h6 {\n  font-size: 1em;\n  margin-bottom: 1em;\n}\n.content blockquote {\n  background-color: whitesmoke;\n  border-left: 5px solid #dbdbdb;\n  padding: 1.25em 1.5em;\n}\n.content ol {\n  list-style: decimal outside;\n  margin-left: 2em;\n  margin-top: 1em;\n}\n.content ul {\n  list-style: disc outside;\n  margin-left: 2em;\n  margin-top: 1em;\n}\n.content ul ul {\n    list-style-type: circle;\n    margin-top: 0.5em;\n}\n.content ul ul ul {\n      list-style-type: square;\n}\n.content dd {\n  margin-left: 2em;\n}\n.content figure {\n  margin-left: 2em;\n  margin-right: 2em;\n  text-align: center;\n}\n.content figure:not(:first-child) {\n    margin-top: 2em;\n}\n.content figure:not(:last-child) {\n    margin-bottom: 2em;\n}\n.content figure img {\n    display: inline-block;\n}\n.content figure figcaption {\n    font-style: italic;\n}\n.content pre {\n  -webkit-overflow-scrolling: touch;\n  overflow-x: auto;\n  padding: 1.25em 1.5em;\n  white-space: pre;\n  word-wrap: normal;\n}\n.content sup,\n.content sub {\n  font-size: 75%;\n}\n.content table {\n  width: 100%;\n}\n.content table td,\n  .content table th {\n    border: 1px solid #dbdbdb;\n    border-width: 0 0 1px;\n    padding: 0.5em 0.75em;\n    vertical-align: top;\n}\n.content table th {\n    color: #363636;\n    text-align: left;\n}\n.content table thead td,\n  .content table thead th {\n    border-width: 0 0 2px;\n    color: #363636;\n}\n.content table tfoot td,\n  .content table tfoot th {\n    border-width: 2px 0 0;\n    color: #363636;\n}\n.content table tbody tr:last-child td,\n  .content table tbody tr:last-child th {\n    border-bottom-width: 0;\n}\n.content.is-small {\n  font-size: 0.75rem;\n}\n.content.is-medium {\n  font-size: 1.25rem;\n}\n.content.is-large {\n  font-size: 1.5rem;\n}\n.input,\n.textarea {\n  background-color: white;\n  border-color: #dbdbdb;\n  color: #363636;\n  box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.1);\n  max-width: 100%;\n  width: 100%;\n}\n.input::-moz-placeholder,\n  .textarea::-moz-placeholder {\n    color: rgba(54, 54, 54, 0.3);\n}\n.input::-webkit-input-placeholder,\n  .textarea::-webkit-input-placeholder {\n    color: rgba(54, 54, 54, 0.3);\n}\n.input:-moz-placeholder,\n  .textarea:-moz-placeholder {\n    color: rgba(54, 54, 54, 0.3);\n}\n.input:-ms-input-placeholder,\n  .textarea:-ms-input-placeholder {\n    color: rgba(54, 54, 54, 0.3);\n}\n.input:hover, .input.is-hovered,\n  .textarea:hover,\n  .textarea.is-hovered {\n    border-color: #b5b5b5;\n}\n.input:focus, .input.is-focused, .input:active, .input.is-active,\n  .textarea:focus,\n  .textarea.is-focused,\n  .textarea:active,\n  .textarea.is-active {\n    border-color: #3273dc;\n    box-shadow: 0 0 0 0.125em rgba(50, 115, 220, 0.25);\n}\n.input[disabled],\n  .textarea[disabled] {\n    background-color: whitesmoke;\n    border-color: whitesmoke;\n    box-shadow: none;\n    color: #7a7a7a;\n}\n.input[disabled]::-moz-placeholder,\n    .textarea[disabled]::-moz-placeholder {\n      color: rgba(122, 122, 122, 0.3);\n}\n.input[disabled]::-webkit-input-placeholder,\n    .textarea[disabled]::-webkit-input-placeholder {\n      color: rgba(122, 122, 122, 0.3);\n}\n.input[disabled]:-moz-placeholder,\n    .textarea[disabled]:-moz-placeholder {\n      color: rgba(122, 122, 122, 0.3);\n}\n.input[disabled]:-ms-input-placeholder,\n    .textarea[disabled]:-ms-input-placeholder {\n      color: rgba(122, 122, 122, 0.3);\n}\n.input[readonly],\n  .textarea[readonly] {\n    box-shadow: none;\n}\n.input.is-white,\n  .textarea.is-white {\n    border-color: white;\n}\n.input.is-white:focus, .input.is-white.is-focused, .input.is-white:active, .input.is-white.is-active,\n    .textarea.is-white:focus,\n    .textarea.is-white.is-focused,\n    .textarea.is-white:active,\n    .textarea.is-white.is-active {\n      box-shadow: 0 0 0 0.125em rgba(255, 255, 255, 0.25);\n}\n.input.is-black,\n  .textarea.is-black {\n    border-color: #0a0a0a;\n}\n.input.is-black:focus, .input.is-black.is-focused, .input.is-black:active, .input.is-black.is-active,\n    .textarea.is-black:focus,\n    .textarea.is-black.is-focused,\n    .textarea.is-black:active,\n    .textarea.is-black.is-active {\n      box-shadow: 0 0 0 0.125em rgba(10, 10, 10, 0.25);\n}\n.input.is-light,\n  .textarea.is-light {\n    border-color: whitesmoke;\n}\n.input.is-light:focus, .input.is-light.is-focused, .input.is-light:active, .input.is-light.is-active,\n    .textarea.is-light:focus,\n    .textarea.is-light.is-focused,\n    .textarea.is-light:active,\n    .textarea.is-light.is-active {\n      box-shadow: 0 0 0 0.125em rgba(245, 245, 245, 0.25);\n}\n.input.is-dark,\n  .textarea.is-dark {\n    border-color: #363636;\n}\n.input.is-dark:focus, .input.is-dark.is-focused, .input.is-dark:active, .input.is-dark.is-active,\n    .textarea.is-dark:focus,\n    .textarea.is-dark.is-focused,\n    .textarea.is-dark:active,\n    .textarea.is-dark.is-active {\n      box-shadow: 0 0 0 0.125em rgba(54, 54, 54, 0.25);\n}\n.input.is-primary,\n  .textarea.is-primary {\n    border-color: #287ab1;\n}\n.input.is-primary:focus, .input.is-primary.is-focused, .input.is-primary:active, .input.is-primary.is-active,\n    .textarea.is-primary:focus,\n    .textarea.is-primary.is-focused,\n    .textarea.is-primary:active,\n    .textarea.is-primary.is-active {\n      box-shadow: 0 0 0 0.125em rgba(40, 122, 177, 0.25);\n}\n.input.is-link,\n  .textarea.is-link {\n    border-color: #3273dc;\n}\n.input.is-link:focus, .input.is-link.is-focused, .input.is-link:active, .input.is-link.is-active,\n    .textarea.is-link:focus,\n    .textarea.is-link.is-focused,\n    .textarea.is-link:active,\n    .textarea.is-link.is-active {\n      box-shadow: 0 0 0 0.125em rgba(50, 115, 220, 0.25);\n}\n.input.is-info,\n  .textarea.is-info {\n    border-color: #209cee;\n}\n.input.is-info:focus, .input.is-info.is-focused, .input.is-info:active, .input.is-info.is-active,\n    .textarea.is-info:focus,\n    .textarea.is-info.is-focused,\n    .textarea.is-info:active,\n    .textarea.is-info.is-active {\n      box-shadow: 0 0 0 0.125em rgba(32, 156, 238, 0.25);\n}\n.input.is-success,\n  .textarea.is-success {\n    border-color: #23d160;\n}\n.input.is-success:focus, .input.is-success.is-focused, .input.is-success:active, .input.is-success.is-active,\n    .textarea.is-success:focus,\n    .textarea.is-success.is-focused,\n    .textarea.is-success:active,\n    .textarea.is-success.is-active {\n      box-shadow: 0 0 0 0.125em rgba(35, 209, 96, 0.25);\n}\n.input.is-warning,\n  .textarea.is-warning {\n    border-color: #ffdd57;\n}\n.input.is-warning:focus, .input.is-warning.is-focused, .input.is-warning:active, .input.is-warning.is-active,\n    .textarea.is-warning:focus,\n    .textarea.is-warning.is-focused,\n    .textarea.is-warning:active,\n    .textarea.is-warning.is-active {\n      box-shadow: 0 0 0 0.125em rgba(255, 221, 87, 0.25);\n}\n.input.is-danger,\n  .textarea.is-danger {\n    border-color: #ff3860;\n}\n.input.is-danger:focus, .input.is-danger.is-focused, .input.is-danger:active, .input.is-danger.is-active,\n    .textarea.is-danger:focus,\n    .textarea.is-danger.is-focused,\n    .textarea.is-danger:active,\n    .textarea.is-danger.is-active {\n      box-shadow: 0 0 0 0.125em rgba(255, 56, 96, 0.25);\n}\n.input.is-small,\n  .textarea.is-small {\n    border-radius: 2px;\n    font-size: 0.75rem;\n}\n.input.is-medium,\n  .textarea.is-medium {\n    font-size: 1.25rem;\n}\n.input.is-large,\n  .textarea.is-large {\n    font-size: 1.5rem;\n}\n.input.is-fullwidth,\n  .textarea.is-fullwidth {\n    display: block;\n    width: 100%;\n}\n.input.is-inline,\n  .textarea.is-inline {\n    display: inline;\n    width: auto;\n}\n.input.is-rounded {\n  border-radius: 290486px;\n  padding-left: 1em;\n  padding-right: 1em;\n}\n.input.is-static {\n  background-color: transparent;\n  border-color: transparent;\n  box-shadow: none;\n  padding-left: 0;\n  padding-right: 0;\n}\n.textarea {\n  display: block;\n  max-width: 100%;\n  min-width: 100%;\n  padding: 0.625em;\n  resize: vertical;\n}\n.textarea:not([rows]) {\n    max-height: 600px;\n    min-height: 120px;\n}\n.textarea[rows] {\n    height: initial;\n}\n.textarea.has-fixed-size {\n    resize: none;\n}\n.checkbox,\n.radio {\n  cursor: pointer;\n  display: inline-block;\n  line-height: 1.25;\n  position: relative;\n}\n.checkbox input,\n  .radio input {\n    cursor: pointer;\n}\n.checkbox:hover,\n  .radio:hover {\n    color: #363636;\n}\n.checkbox[disabled],\n  .radio[disabled] {\n    color: #7a7a7a;\n    cursor: not-allowed;\n}\n.radio + .radio {\n  margin-left: 0.5em;\n}\n.select {\n  display: inline-block;\n  max-width: 100%;\n  position: relative;\n  vertical-align: top;\n}\n.select:not(.is-multiple) {\n    height: 2.25em;\n}\n.select:not(.is-multiple):not(.is-loading)::after {\n    border-color: #3273dc;\n    right: 1.125em;\n    z-index: 4;\n}\n.select.is-rounded select {\n    border-radius: 290486px;\n    padding-left: 1em;\n}\n.select select {\n    background-color: white;\n    border-color: #dbdbdb;\n    color: #363636;\n    cursor: pointer;\n    display: block;\n    font-size: 1em;\n    max-width: 100%;\n    outline: none;\n}\n.select select::-moz-placeholder {\n      color: rgba(54, 54, 54, 0.3);\n}\n.select select::-webkit-input-placeholder {\n      color: rgba(54, 54, 54, 0.3);\n}\n.select select:-moz-placeholder {\n      color: rgba(54, 54, 54, 0.3);\n}\n.select select:-ms-input-placeholder {\n      color: rgba(54, 54, 54, 0.3);\n}\n.select select:hover, .select select.is-hovered {\n      border-color: #b5b5b5;\n}\n.select select:focus, .select select.is-focused, .select select:active, .select select.is-active {\n      border-color: #3273dc;\n      box-shadow: 0 0 0 0.125em rgba(50, 115, 220, 0.25);\n}\n.select select[disabled] {\n      background-color: whitesmoke;\n      border-color: whitesmoke;\n      box-shadow: none;\n      color: #7a7a7a;\n}\n.select select[disabled]::-moz-placeholder {\n        color: rgba(122, 122, 122, 0.3);\n}\n.select select[disabled]::-webkit-input-placeholder {\n        color: rgba(122, 122, 122, 0.3);\n}\n.select select[disabled]:-moz-placeholder {\n        color: rgba(122, 122, 122, 0.3);\n}\n.select select[disabled]:-ms-input-placeholder {\n        color: rgba(122, 122, 122, 0.3);\n}\n.select select::-ms-expand {\n      display: none;\n}\n.select select[disabled]:hover {\n      border-color: whitesmoke;\n}\n.select select:not([multiple]) {\n      padding-right: 2.5em;\n}\n.select select[multiple] {\n      height: initial;\n      padding: 0;\n}\n.select select[multiple] option {\n        padding: 0.5em 1em;\n}\n.select:not(.is-multiple):not(.is-loading):hover::after {\n    border-color: #363636;\n}\n.select.is-white:not(:hover)::after {\n    border-color: white;\n}\n.select.is-white select {\n    border-color: white;\n}\n.select.is-white select:hover, .select.is-white select.is-hovered {\n      border-color: #f2f2f2;\n}\n.select.is-white select:focus, .select.is-white select.is-focused, .select.is-white select:active, .select.is-white select.is-active {\n      box-shadow: 0 0 0 0.125em rgba(255, 255, 255, 0.25);\n}\n.select.is-black:not(:hover)::after {\n    border-color: #0a0a0a;\n}\n.select.is-black select {\n    border-color: #0a0a0a;\n}\n.select.is-black select:hover, .select.is-black select.is-hovered {\n      border-color: black;\n}\n.select.is-black select:focus, .select.is-black select.is-focused, .select.is-black select:active, .select.is-black select.is-active {\n      box-shadow: 0 0 0 0.125em rgba(10, 10, 10, 0.25);\n}\n.select.is-light:not(:hover)::after {\n    border-color: whitesmoke;\n}\n.select.is-light select {\n    border-color: whitesmoke;\n}\n.select.is-light select:hover, .select.is-light select.is-hovered {\n      border-color: #e8e8e8;\n}\n.select.is-light select:focus, .select.is-light select.is-focused, .select.is-light select:active, .select.is-light select.is-active {\n      box-shadow: 0 0 0 0.125em rgba(245, 245, 245, 0.25);\n}\n.select.is-dark:not(:hover)::after {\n    border-color: #363636;\n}\n.select.is-dark select {\n    border-color: #363636;\n}\n.select.is-dark select:hover, .select.is-dark select.is-hovered {\n      border-color: #292929;\n}\n.select.is-dark select:focus, .select.is-dark select.is-focused, .select.is-dark select:active, .select.is-dark select.is-active {\n      box-shadow: 0 0 0 0.125em rgba(54, 54, 54, 0.25);\n}\n.select.is-primary:not(:hover)::after {\n    border-color: #287ab1;\n}\n.select.is-primary select {\n    border-color: #287ab1;\n}\n.select.is-primary select:hover, .select.is-primary select.is-hovered {\n      border-color: #236c9c;\n}\n.select.is-primary select:focus, .select.is-primary select.is-focused, .select.is-primary select:active, .select.is-primary select.is-active {\n      box-shadow: 0 0 0 0.125em rgba(40, 122, 177, 0.25);\n}\n.select.is-link:not(:hover)::after {\n    border-color: #3273dc;\n}\n.select.is-link select {\n    border-color: #3273dc;\n}\n.select.is-link select:hover, .select.is-link select.is-hovered {\n      border-color: #2366d1;\n}\n.select.is-link select:focus, .select.is-link select.is-focused, .select.is-link select:active, .select.is-link select.is-active {\n      box-shadow: 0 0 0 0.125em rgba(50, 115, 220, 0.25);\n}\n.select.is-info:not(:hover)::after {\n    border-color: #209cee;\n}\n.select.is-info select {\n    border-color: #209cee;\n}\n.select.is-info select:hover, .select.is-info select.is-hovered {\n      border-color: #118fe4;\n}\n.select.is-info select:focus, .select.is-info select.is-focused, .select.is-info select:active, .select.is-info select.is-active {\n      box-shadow: 0 0 0 0.125em rgba(32, 156, 238, 0.25);\n}\n.select.is-success:not(:hover)::after {\n    border-color: #23d160;\n}\n.select.is-success select {\n    border-color: #23d160;\n}\n.select.is-success select:hover, .select.is-success select.is-hovered {\n      border-color: #20bc56;\n}\n.select.is-success select:focus, .select.is-success select.is-focused, .select.is-success select:active, .select.is-success select.is-active {\n      box-shadow: 0 0 0 0.125em rgba(35, 209, 96, 0.25);\n}\n.select.is-warning:not(:hover)::after {\n    border-color: #ffdd57;\n}\n.select.is-warning select {\n    border-color: #ffdd57;\n}\n.select.is-warning select:hover, .select.is-warning select.is-hovered {\n      border-color: #ffd83d;\n}\n.select.is-warning select:focus, .select.is-warning select.is-focused, .select.is-warning select:active, .select.is-warning select.is-active {\n      box-shadow: 0 0 0 0.125em rgba(255, 221, 87, 0.25);\n}\n.select.is-danger:not(:hover)::after {\n    border-color: #ff3860;\n}\n.select.is-danger select {\n    border-color: #ff3860;\n}\n.select.is-danger select:hover, .select.is-danger select.is-hovered {\n      border-color: #ff1f4b;\n}\n.select.is-danger select:focus, .select.is-danger select.is-focused, .select.is-danger select:active, .select.is-danger select.is-active {\n      box-shadow: 0 0 0 0.125em rgba(255, 56, 96, 0.25);\n}\n.select.is-small {\n    border-radius: 2px;\n    font-size: 0.75rem;\n}\n.select.is-medium {\n    font-size: 1.25rem;\n}\n.select.is-large {\n    font-size: 1.5rem;\n}\n.select.is-disabled::after {\n    border-color: #7a7a7a;\n}\n.select.is-fullwidth {\n    width: 100%;\n}\n.select.is-fullwidth select {\n      width: 100%;\n}\n.select.is-loading::after {\n    margin-top: 0;\n    position: absolute;\n    right: 0.625em;\n    top: 0.625em;\n    transform: none;\n}\n.select.is-loading.is-small:after {\n    font-size: 0.75rem;\n}\n.select.is-loading.is-medium:after {\n    font-size: 1.25rem;\n}\n.select.is-loading.is-large:after {\n    font-size: 1.5rem;\n}\n.file {\n  align-items: stretch;\n  display: flex;\n  justify-content: flex-start;\n  position: relative;\n}\n.file.is-white .file-cta {\n    background-color: white;\n    border-color: transparent;\n    color: #0a0a0a;\n}\n.file.is-white:hover .file-cta, .file.is-white.is-hovered .file-cta {\n    background-color: #f9f9f9;\n    border-color: transparent;\n    color: #0a0a0a;\n}\n.file.is-white:focus .file-cta, .file.is-white.is-focused .file-cta {\n    border-color: transparent;\n    box-shadow: 0 0 0.5em rgba(255, 255, 255, 0.25);\n    color: #0a0a0a;\n}\n.file.is-white:active .file-cta, .file.is-white.is-active .file-cta {\n    background-color: #f2f2f2;\n    border-color: transparent;\n    color: #0a0a0a;\n}\n.file.is-black .file-cta {\n    background-color: #0a0a0a;\n    border-color: transparent;\n    color: white;\n}\n.file.is-black:hover .file-cta, .file.is-black.is-hovered .file-cta {\n    background-color: #040404;\n    border-color: transparent;\n    color: white;\n}\n.file.is-black:focus .file-cta, .file.is-black.is-focused .file-cta {\n    border-color: transparent;\n    box-shadow: 0 0 0.5em rgba(10, 10, 10, 0.25);\n    color: white;\n}\n.file.is-black:active .file-cta, .file.is-black.is-active .file-cta {\n    background-color: black;\n    border-color: transparent;\n    color: white;\n}\n.file.is-light .file-cta {\n    background-color: whitesmoke;\n    border-color: transparent;\n    color: #363636;\n}\n.file.is-light:hover .file-cta, .file.is-light.is-hovered .file-cta {\n    background-color: #eeeeee;\n    border-color: transparent;\n    color: #363636;\n}\n.file.is-light:focus .file-cta, .file.is-light.is-focused .file-cta {\n    border-color: transparent;\n    box-shadow: 0 0 0.5em rgba(245, 245, 245, 0.25);\n    color: #363636;\n}\n.file.is-light:active .file-cta, .file.is-light.is-active .file-cta {\n    background-color: #e8e8e8;\n    border-color: transparent;\n    color: #363636;\n}\n.file.is-dark .file-cta {\n    background-color: #363636;\n    border-color: transparent;\n    color: whitesmoke;\n}\n.file.is-dark:hover .file-cta, .file.is-dark.is-hovered .file-cta {\n    background-color: #2f2f2f;\n    border-color: transparent;\n    color: whitesmoke;\n}\n.file.is-dark:focus .file-cta, .file.is-dark.is-focused .file-cta {\n    border-color: transparent;\n    box-shadow: 0 0 0.5em rgba(54, 54, 54, 0.25);\n    color: whitesmoke;\n}\n.file.is-dark:active .file-cta, .file.is-dark.is-active .file-cta {\n    background-color: #292929;\n    border-color: transparent;\n    color: whitesmoke;\n}\n.file.is-primary .file-cta {\n    background-color: #287ab1;\n    border-color: transparent;\n    color: #fff;\n}\n.file.is-primary:hover .file-cta, .file.is-primary.is-hovered .file-cta {\n    background-color: #2673a7;\n    border-color: transparent;\n    color: #fff;\n}\n.file.is-primary:focus .file-cta, .file.is-primary.is-focused .file-cta {\n    border-color: transparent;\n    box-shadow: 0 0 0.5em rgba(40, 122, 177, 0.25);\n    color: #fff;\n}\n.file.is-primary:active .file-cta, .file.is-primary.is-active .file-cta {\n    background-color: #236c9c;\n    border-color: transparent;\n    color: #fff;\n}\n.file.is-link .file-cta {\n    background-color: #3273dc;\n    border-color: transparent;\n    color: #fff;\n}\n.file.is-link:hover .file-cta, .file.is-link.is-hovered .file-cta {\n    background-color: #276cda;\n    border-color: transparent;\n    color: #fff;\n}\n.file.is-link:focus .file-cta, .file.is-link.is-focused .file-cta {\n    border-color: transparent;\n    box-shadow: 0 0 0.5em rgba(50, 115, 220, 0.25);\n    color: #fff;\n}\n.file.is-link:active .file-cta, .file.is-link.is-active .file-cta {\n    background-color: #2366d1;\n    border-color: transparent;\n    color: #fff;\n}\n.file.is-info .file-cta {\n    background-color: #209cee;\n    border-color: transparent;\n    color: #fff;\n}\n.file.is-info:hover .file-cta, .file.is-info.is-hovered .file-cta {\n    background-color: #1496ed;\n    border-color: transparent;\n    color: #fff;\n}\n.file.is-info:focus .file-cta, .file.is-info.is-focused .file-cta {\n    border-color: transparent;\n    box-shadow: 0 0 0.5em rgba(32, 156, 238, 0.25);\n    color: #fff;\n}\n.file.is-info:active .file-cta, .file.is-info.is-active .file-cta {\n    background-color: #118fe4;\n    border-color: transparent;\n    color: #fff;\n}\n.file.is-success .file-cta {\n    background-color: #23d160;\n    border-color: transparent;\n    color: #fff;\n}\n.file.is-success:hover .file-cta, .file.is-success.is-hovered .file-cta {\n    background-color: #22c65b;\n    border-color: transparent;\n    color: #fff;\n}\n.file.is-success:focus .file-cta, .file.is-success.is-focused .file-cta {\n    border-color: transparent;\n    box-shadow: 0 0 0.5em rgba(35, 209, 96, 0.25);\n    color: #fff;\n}\n.file.is-success:active .file-cta, .file.is-success.is-active .file-cta {\n    background-color: #20bc56;\n    border-color: transparent;\n    color: #fff;\n}\n.file.is-warning .file-cta {\n    background-color: #ffdd57;\n    border-color: transparent;\n    color: rgba(0, 0, 0, 0.7);\n}\n.file.is-warning:hover .file-cta, .file.is-warning.is-hovered .file-cta {\n    background-color: #ffdb4a;\n    border-color: transparent;\n    color: rgba(0, 0, 0, 0.7);\n}\n.file.is-warning:focus .file-cta, .file.is-warning.is-focused .file-cta {\n    border-color: transparent;\n    box-shadow: 0 0 0.5em rgba(255, 221, 87, 0.25);\n    color: rgba(0, 0, 0, 0.7);\n}\n.file.is-warning:active .file-cta, .file.is-warning.is-active .file-cta {\n    background-color: #ffd83d;\n    border-color: transparent;\n    color: rgba(0, 0, 0, 0.7);\n}\n.file.is-danger .file-cta {\n    background-color: #ff3860;\n    border-color: transparent;\n    color: #fff;\n}\n.file.is-danger:hover .file-cta, .file.is-danger.is-hovered .file-cta {\n    background-color: #ff2b56;\n    border-color: transparent;\n    color: #fff;\n}\n.file.is-danger:focus .file-cta, .file.is-danger.is-focused .file-cta {\n    border-color: transparent;\n    box-shadow: 0 0 0.5em rgba(255, 56, 96, 0.25);\n    color: #fff;\n}\n.file.is-danger:active .file-cta, .file.is-danger.is-active .file-cta {\n    background-color: #ff1f4b;\n    border-color: transparent;\n    color: #fff;\n}\n.file.is-small {\n    font-size: 0.75rem;\n}\n.file.is-medium {\n    font-size: 1.25rem;\n}\n.file.is-medium .file-icon .fa {\n      font-size: 21px;\n}\n.file.is-large {\n    font-size: 1.5rem;\n}\n.file.is-large .file-icon .fa {\n      font-size: 28px;\n}\n.file.has-name .file-cta {\n    border-bottom-right-radius: 0;\n    border-top-right-radius: 0;\n}\n.file.has-name .file-name {\n    border-bottom-left-radius: 0;\n    border-top-left-radius: 0;\n}\n.file.has-name.is-empty .file-cta {\n    border-radius: 4px;\n}\n.file.has-name.is-empty .file-name {\n    display: none;\n}\n.file.is-boxed .file-label {\n    flex-direction: column;\n}\n.file.is-boxed .file-cta {\n    flex-direction: column;\n    height: auto;\n    padding: 1em 3em;\n}\n.file.is-boxed .file-name {\n    border-width: 0 1px 1px;\n}\n.file.is-boxed .file-icon {\n    height: 1.5em;\n    width: 1.5em;\n}\n.file.is-boxed .file-icon .fa {\n      font-size: 21px;\n}\n.file.is-boxed.is-small .file-icon .fa {\n    font-size: 14px;\n}\n.file.is-boxed.is-medium .file-icon .fa {\n    font-size: 28px;\n}\n.file.is-boxed.is-large .file-icon .fa {\n    font-size: 35px;\n}\n.file.is-boxed.has-name .file-cta {\n    border-radius: 4px 4px 0 0;\n}\n.file.is-boxed.has-name .file-name {\n    border-radius: 0 0 4px 4px;\n    border-width: 0 1px 1px;\n}\n.file.is-centered {\n    justify-content: center;\n}\n.file.is-fullwidth .file-label {\n    width: 100%;\n}\n.file.is-fullwidth .file-name {\n    flex-grow: 1;\n    max-width: none;\n}\n.file.is-right {\n    justify-content: flex-end;\n}\n.file.is-right .file-cta {\n      border-radius: 0 4px 4px 0;\n}\n.file.is-right .file-name {\n      border-radius: 4px 0 0 4px;\n      border-width: 1px 0 1px 1px;\n      order: -1;\n}\n.file-label {\n  align-items: stretch;\n  display: flex;\n  cursor: pointer;\n  justify-content: flex-start;\n  overflow: hidden;\n  position: relative;\n}\n.file-label:hover .file-cta {\n    background-color: #eeeeee;\n    color: #363636;\n}\n.file-label:hover .file-name {\n    border-color: #d5d5d5;\n}\n.file-label:active .file-cta {\n    background-color: #e8e8e8;\n    color: #363636;\n}\n.file-label:active .file-name {\n    border-color: #cfcfcf;\n}\n.file-input {\n  height: 0.01em;\n  left: 0;\n  outline: none;\n  position: absolute;\n  top: 0;\n  width: 0.01em;\n}\n.file-cta,\n.file-name {\n  border-color: #dbdbdb;\n  border-radius: 4px;\n  font-size: 1em;\n  padding-left: 1em;\n  padding-right: 1em;\n  white-space: nowrap;\n}\n.file-cta {\n  background-color: whitesmoke;\n  color: #4a4a4a;\n}\n.file-name {\n  border-color: #dbdbdb;\n  border-style: solid;\n  border-width: 1px 1px 1px 0;\n  display: block;\n  max-width: 16em;\n  overflow: hidden;\n  text-align: left;\n  text-overflow: ellipsis;\n}\n.file-icon {\n  align-items: center;\n  display: flex;\n  height: 1em;\n  justify-content: center;\n  margin-right: 0.5em;\n  width: 1em;\n}\n.file-icon .fa {\n    font-size: 14px;\n}\n.label {\n  color: #363636;\n  display: block;\n  font-size: 1rem;\n  font-weight: 700;\n}\n.label:not(:last-child) {\n    margin-bottom: 0.5em;\n}\n.label.is-small {\n    font-size: 0.75rem;\n}\n.label.is-medium {\n    font-size: 1.25rem;\n}\n.label.is-large {\n    font-size: 1.5rem;\n}\n.help {\n  display: block;\n  font-size: 0.75rem;\n  margin-top: 0.25rem;\n}\n.help.is-white {\n    color: white;\n}\n.help.is-black {\n    color: #0a0a0a;\n}\n.help.is-light {\n    color: whitesmoke;\n}\n.help.is-dark {\n    color: #363636;\n}\n.help.is-primary {\n    color: #287ab1;\n}\n.help.is-link {\n    color: #3273dc;\n}\n.help.is-info {\n    color: #209cee;\n}\n.help.is-success {\n    color: #23d160;\n}\n.help.is-warning {\n    color: #ffdd57;\n}\n.help.is-danger {\n    color: #ff3860;\n}\n.field:not(:last-child) {\n  margin-bottom: 0.75rem;\n}\n.field.has-addons {\n  display: flex;\n  justify-content: flex-start;\n}\n.field.has-addons .control:not(:last-child) {\n    margin-right: -1px;\n}\n.field.has-addons .control:not(:first-child):not(:last-child) .button,\n  .field.has-addons .control:not(:first-child):not(:last-child) .input,\n  .field.has-addons .control:not(:first-child):not(:last-child) .select select {\n    border-radius: 0;\n}\n.field.has-addons .control:first-child .button,\n  .field.has-addons .control:first-child .input,\n  .field.has-addons .control:first-child .select select {\n    border-bottom-right-radius: 0;\n    border-top-right-radius: 0;\n}\n.field.has-addons .control:last-child .button,\n  .field.has-addons .control:last-child .input,\n  .field.has-addons .control:last-child .select select {\n    border-bottom-left-radius: 0;\n    border-top-left-radius: 0;\n}\n.field.has-addons .control .button:hover, .field.has-addons .control .button.is-hovered,\n  .field.has-addons .control .input:hover,\n  .field.has-addons .control .input.is-hovered,\n  .field.has-addons .control .select select:hover,\n  .field.has-addons .control .select select.is-hovered {\n    z-index: 2;\n}\n.field.has-addons .control .button:focus, .field.has-addons .control .button.is-focused, .field.has-addons .control .button:active, .field.has-addons .control .button.is-active,\n  .field.has-addons .control .input:focus,\n  .field.has-addons .control .input.is-focused,\n  .field.has-addons .control .input:active,\n  .field.has-addons .control .input.is-active,\n  .field.has-addons .control .select select:focus,\n  .field.has-addons .control .select select.is-focused,\n  .field.has-addons .control .select select:active,\n  .field.has-addons .control .select select.is-active {\n    z-index: 3;\n}\n.field.has-addons .control .button:focus:hover, .field.has-addons .control .button.is-focused:hover, .field.has-addons .control .button:active:hover, .field.has-addons .control .button.is-active:hover,\n    .field.has-addons .control .input:focus:hover,\n    .field.has-addons .control .input.is-focused:hover,\n    .field.has-addons .control .input:active:hover,\n    .field.has-addons .control .input.is-active:hover,\n    .field.has-addons .control .select select:focus:hover,\n    .field.has-addons .control .select select.is-focused:hover,\n    .field.has-addons .control .select select:active:hover,\n    .field.has-addons .control .select select.is-active:hover {\n      z-index: 4;\n}\n.field.has-addons .control.is-expanded {\n    flex-grow: 1;\n}\n.field.has-addons.has-addons-centered {\n    justify-content: center;\n}\n.field.has-addons.has-addons-right {\n    justify-content: flex-end;\n}\n.field.has-addons.has-addons-fullwidth .control {\n    flex-grow: 1;\n    flex-shrink: 0;\n}\n.field.is-grouped {\n  display: flex;\n  justify-content: flex-start;\n}\n.field.is-grouped > .control {\n    flex-shrink: 0;\n}\n.field.is-grouped > .control:not(:last-child) {\n      margin-bottom: 0;\n      margin-right: 0.75rem;\n}\n.field.is-grouped > .control.is-expanded {\n      flex-grow: 1;\n      flex-shrink: 1;\n}\n.field.is-grouped.is-grouped-centered {\n    justify-content: center;\n}\n.field.is-grouped.is-grouped-right {\n    justify-content: flex-end;\n}\n.field.is-grouped.is-grouped-multiline {\n    flex-wrap: wrap;\n}\n.field.is-grouped.is-grouped-multiline > .control:last-child, .field.is-grouped.is-grouped-multiline > .control:not(:last-child) {\n      margin-bottom: 0.75rem;\n}\n.field.is-grouped.is-grouped-multiline:last-child {\n      margin-bottom: -0.75rem;\n}\n.field.is-grouped.is-grouped-multiline:not(:last-child) {\n      margin-bottom: 0;\n}\n@media screen and (min-width: 769px), print {\n.field.is-horizontal {\n    display: flex;\n}\n}\n.field-label .label {\n  font-size: inherit;\n}\n@media screen and (max-width: 768px) {\n.field-label {\n    margin-bottom: 0.5rem;\n}\n}\n@media screen and (min-width: 769px), print {\n.field-label {\n    flex-basis: 0;\n    flex-grow: 1;\n    flex-shrink: 0;\n    margin-right: 1.5rem;\n    text-align: right;\n}\n.field-label.is-small {\n      font-size: 0.75rem;\n      padding-top: 0.375em;\n}\n.field-label.is-normal {\n      padding-top: 0.375em;\n}\n.field-label.is-medium {\n      font-size: 1.25rem;\n      padding-top: 0.375em;\n}\n.field-label.is-large {\n      font-size: 1.5rem;\n      padding-top: 0.375em;\n}\n}\n.field-body .field .field {\n  margin-bottom: 0;\n}\n@media screen and (min-width: 769px), print {\n.field-body {\n    display: flex;\n    flex-basis: 0;\n    flex-grow: 5;\n    flex-shrink: 1;\n}\n.field-body .field {\n      margin-bottom: 0;\n}\n.field-body > .field {\n      flex-shrink: 1;\n}\n.field-body > .field:not(.is-narrow) {\n        flex-grow: 1;\n}\n.field-body > .field:not(:last-child) {\n        margin-right: 0.75rem;\n}\n}\n.control {\n  font-size: 1rem;\n  position: relative;\n  text-align: left;\n}\n.control.has-icon .icon {\n    color: #dbdbdb;\n    height: 2.25em;\n    pointer-events: none;\n    position: absolute;\n    top: 0;\n    width: 2.25em;\n    z-index: 4;\n}\n.control.has-icon .input:focus + .icon {\n    color: #7a7a7a;\n}\n.control.has-icon .input.is-small + .icon {\n    font-size: 0.75rem;\n}\n.control.has-icon .input.is-medium + .icon {\n    font-size: 1.25rem;\n}\n.control.has-icon .input.is-large + .icon {\n    font-size: 1.5rem;\n}\n.control.has-icon:not(.has-icon-right) .icon {\n    left: 0;\n}\n.control.has-icon:not(.has-icon-right) .input {\n    padding-left: 2.25em;\n}\n.control.has-icon.has-icon-right .icon {\n    right: 0;\n}\n.control.has-icon.has-icon-right .input {\n    padding-right: 2.25em;\n}\n.control.has-icons-left .input:focus ~ .icon,\n  .control.has-icons-left .select:focus ~ .icon, .control.has-icons-right .input:focus ~ .icon,\n  .control.has-icons-right .select:focus ~ .icon {\n    color: #7a7a7a;\n}\n.control.has-icons-left .input.is-small ~ .icon,\n  .control.has-icons-left .select.is-small ~ .icon, .control.has-icons-right .input.is-small ~ .icon,\n  .control.has-icons-right .select.is-small ~ .icon {\n    font-size: 0.75rem;\n}\n.control.has-icons-left .input.is-medium ~ .icon,\n  .control.has-icons-left .select.is-medium ~ .icon, .control.has-icons-right .input.is-medium ~ .icon,\n  .control.has-icons-right .select.is-medium ~ .icon {\n    font-size: 1.25rem;\n}\n.control.has-icons-left .input.is-large ~ .icon,\n  .control.has-icons-left .select.is-large ~ .icon, .control.has-icons-right .input.is-large ~ .icon,\n  .control.has-icons-right .select.is-large ~ .icon {\n    font-size: 1.5rem;\n}\n.control.has-icons-left .icon, .control.has-icons-right .icon {\n    color: #dbdbdb;\n    height: 2.25em;\n    pointer-events: none;\n    position: absolute;\n    top: 0;\n    width: 2.25em;\n    z-index: 4;\n}\n.control.has-icons-left .input,\n  .control.has-icons-left .select select {\n    padding-left: 2.25em;\n}\n.control.has-icons-left .icon.is-left {\n    left: 0;\n}\n.control.has-icons-right .input,\n  .control.has-icons-right .select select {\n    padding-right: 2.25em;\n}\n.control.has-icons-right .icon.is-right {\n    right: 0;\n}\n.control.is-loading::after {\n    position: absolute !important;\n    right: 0.625em;\n    top: 0.625em;\n    z-index: 4;\n}\n.control.is-loading.is-small:after {\n    font-size: 0.75rem;\n}\n.control.is-loading.is-medium:after {\n    font-size: 1.25rem;\n}\n.control.is-loading.is-large:after {\n    font-size: 1.5rem;\n}\n.icon {\n  align-items: center;\n  display: inline-flex;\n  justify-content: center;\n  height: 1.5rem;\n  width: 1.5rem;\n}\n.icon.is-small {\n    height: 1rem;\n    width: 1rem;\n}\n.icon.is-medium {\n    height: 2rem;\n    width: 2rem;\n}\n.icon.is-large {\n    height: 3rem;\n    width: 3rem;\n}\n.image {\n  display: block;\n  position: relative;\n}\n.image img {\n    display: block;\n    height: auto;\n    width: 100%;\n}\n.image img.is-rounded {\n      border-radius: 290486px;\n}\n.image.is-square img, .image.is-1by1 img, .image.is-5by4 img, .image.is-4by3 img, .image.is-3by2 img, .image.is-5by3 img, .image.is-16by9 img, .image.is-2by1 img, .image.is-3by1 img, .image.is-4by5 img, .image.is-3by4 img, .image.is-2by3 img, .image.is-3by5 img, .image.is-9by16 img, .image.is-1by2 img, .image.is-1by3 img {\n    height: 100%;\n    width: 100%;\n}\n.image.is-square, .image.is-1by1 {\n    padding-top: 100%;\n}\n.image.is-5by4 {\n    padding-top: 80%;\n}\n.image.is-4by3 {\n    padding-top: 75%;\n}\n.image.is-3by2 {\n    padding-top: 66.6666%;\n}\n.image.is-5by3 {\n    padding-top: 60%;\n}\n.image.is-16by9 {\n    padding-top: 56.25%;\n}\n.image.is-2by1 {\n    padding-top: 50%;\n}\n.image.is-3by1 {\n    padding-top: 33.3333%;\n}\n.image.is-4by5 {\n    padding-top: 125%;\n}\n.image.is-3by4 {\n    padding-top: 133.3333%;\n}\n.image.is-2by3 {\n    padding-top: 150%;\n}\n.image.is-3by5 {\n    padding-top: 166.6666%;\n}\n.image.is-9by16 {\n    padding-top: 177.7777%;\n}\n.image.is-1by2 {\n    padding-top: 200%;\n}\n.image.is-1by3 {\n    padding-top: 300%;\n}\n.image.is-16x16 {\n    height: 16px;\n    width: 16px;\n}\n.image.is-24x24 {\n    height: 24px;\n    width: 24px;\n}\n.image.is-32x32 {\n    height: 32px;\n    width: 32px;\n}\n.image.is-48x48 {\n    height: 48px;\n    width: 48px;\n}\n.image.is-64x64 {\n    height: 64px;\n    width: 64px;\n}\n.image.is-96x96 {\n    height: 96px;\n    width: 96px;\n}\n.image.is-128x128 {\n    height: 128px;\n    width: 128px;\n}\n.notification {\n  background-color: whitesmoke;\n  border-radius: 4px;\n  padding: 1.25rem 2.5rem 1.25rem 1.5rem;\n  position: relative;\n}\n.notification a:not(.button) {\n    color: currentColor;\n    text-decoration: underline;\n}\n.notification strong {\n    color: currentColor;\n}\n.notification code,\n  .notification pre {\n    background: white;\n}\n.notification pre code {\n    background: transparent;\n}\n.notification > .delete {\n    position: absolute;\n    right: 0.5rem;\n    top: 0.5rem;\n}\n.notification .title,\n  .notification .subtitle,\n  .notification .content {\n    color: currentColor;\n}\n.notification.is-white {\n    background-color: white;\n    color: #0a0a0a;\n}\n.notification.is-black {\n    background-color: #0a0a0a;\n    color: white;\n}\n.notification.is-light {\n    background-color: whitesmoke;\n    color: #363636;\n}\n.notification.is-dark {\n    background-color: #363636;\n    color: whitesmoke;\n}\n.notification.is-primary {\n    background-color: #287ab1;\n    color: #fff;\n}\n.notification.is-link {\n    background-color: #3273dc;\n    color: #fff;\n}\n.notification.is-info {\n    background-color: #209cee;\n    color: #fff;\n}\n.notification.is-success {\n    background-color: #23d160;\n    color: #fff;\n}\n.notification.is-warning {\n    background-color: #ffdd57;\n    color: rgba(0, 0, 0, 0.7);\n}\n.notification.is-danger {\n    background-color: #ff3860;\n    color: #fff;\n}\n.progress {\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  border: none;\n  border-radius: 290486px;\n  display: block;\n  height: 1rem;\n  overflow: hidden;\n  padding: 0;\n  width: 100%;\n}\n.progress::-webkit-progress-bar {\n    background-color: #dbdbdb;\n}\n.progress::-webkit-progress-value {\n    background-color: #4a4a4a;\n}\n.progress::-moz-progress-bar {\n    background-color: #4a4a4a;\n}\n.progress::-ms-fill {\n    background-color: #4a4a4a;\n    border: none;\n}\n.progress.is-white::-webkit-progress-value {\n    background-color: white;\n}\n.progress.is-white::-moz-progress-bar {\n    background-color: white;\n}\n.progress.is-white::-ms-fill {\n    background-color: white;\n}\n.progress.is-black::-webkit-progress-value {\n    background-color: #0a0a0a;\n}\n.progress.is-black::-moz-progress-bar {\n    background-color: #0a0a0a;\n}\n.progress.is-black::-ms-fill {\n    background-color: #0a0a0a;\n}\n.progress.is-light::-webkit-progress-value {\n    background-color: whitesmoke;\n}\n.progress.is-light::-moz-progress-bar {\n    background-color: whitesmoke;\n}\n.progress.is-light::-ms-fill {\n    background-color: whitesmoke;\n}\n.progress.is-dark::-webkit-progress-value {\n    background-color: #363636;\n}\n.progress.is-dark::-moz-progress-bar {\n    background-color: #363636;\n}\n.progress.is-dark::-ms-fill {\n    background-color: #363636;\n}\n.progress.is-primary::-webkit-progress-value {\n    background-color: #287ab1;\n}\n.progress.is-primary::-moz-progress-bar {\n    background-color: #287ab1;\n}\n.progress.is-primary::-ms-fill {\n    background-color: #287ab1;\n}\n.progress.is-link::-webkit-progress-value {\n    background-color: #3273dc;\n}\n.progress.is-link::-moz-progress-bar {\n    background-color: #3273dc;\n}\n.progress.is-link::-ms-fill {\n    background-color: #3273dc;\n}\n.progress.is-info::-webkit-progress-value {\n    background-color: #209cee;\n}\n.progress.is-info::-moz-progress-bar {\n    background-color: #209cee;\n}\n.progress.is-info::-ms-fill {\n    background-color: #209cee;\n}\n.progress.is-success::-webkit-progress-value {\n    background-color: #23d160;\n}\n.progress.is-success::-moz-progress-bar {\n    background-color: #23d160;\n}\n.progress.is-success::-ms-fill {\n    background-color: #23d160;\n}\n.progress.is-warning::-webkit-progress-value {\n    background-color: #ffdd57;\n}\n.progress.is-warning::-moz-progress-bar {\n    background-color: #ffdd57;\n}\n.progress.is-warning::-ms-fill {\n    background-color: #ffdd57;\n}\n.progress.is-danger::-webkit-progress-value {\n    background-color: #ff3860;\n}\n.progress.is-danger::-moz-progress-bar {\n    background-color: #ff3860;\n}\n.progress.is-danger::-ms-fill {\n    background-color: #ff3860;\n}\n.progress.is-small {\n    height: 0.75rem;\n}\n.progress.is-medium {\n    height: 1.25rem;\n}\n.progress.is-large {\n    height: 1.5rem;\n}\n.table {\n  background-color: white;\n  color: #363636;\n}\n.table td,\n  .table th {\n    border: 1px solid #dbdbdb;\n    border-width: 0 0 1px;\n    padding: 0.5em 0.75em;\n    vertical-align: top;\n}\n.table td.is-white,\n    .table th.is-white {\n      background-color: white;\n      border-color: white;\n      color: #0a0a0a;\n}\n.table td.is-black,\n    .table th.is-black {\n      background-color: #0a0a0a;\n      border-color: #0a0a0a;\n      color: white;\n}\n.table td.is-light,\n    .table th.is-light {\n      background-color: whitesmoke;\n      border-color: whitesmoke;\n      color: #363636;\n}\n.table td.is-dark,\n    .table th.is-dark {\n      background-color: #363636;\n      border-color: #363636;\n      color: whitesmoke;\n}\n.table td.is-primary,\n    .table th.is-primary {\n      background-color: #287ab1;\n      border-color: #287ab1;\n      color: #fff;\n}\n.table td.is-link,\n    .table th.is-link {\n      background-color: #3273dc;\n      border-color: #3273dc;\n      color: #fff;\n}\n.table td.is-info,\n    .table th.is-info {\n      background-color: #209cee;\n      border-color: #209cee;\n      color: #fff;\n}\n.table td.is-success,\n    .table th.is-success {\n      background-color: #23d160;\n      border-color: #23d160;\n      color: #fff;\n}\n.table td.is-warning,\n    .table th.is-warning {\n      background-color: #ffdd57;\n      border-color: #ffdd57;\n      color: rgba(0, 0, 0, 0.7);\n}\n.table td.is-danger,\n    .table th.is-danger {\n      background-color: #ff3860;\n      border-color: #ff3860;\n      color: #fff;\n}\n.table td.is-narrow,\n    .table th.is-narrow {\n      white-space: nowrap;\n      width: 1%;\n}\n.table td.is-selected,\n    .table th.is-selected {\n      background-color: #287ab1;\n      color: #fff;\n}\n.table td.is-selected a,\n      .table td.is-selected strong,\n      .table th.is-selected a,\n      .table th.is-selected strong {\n        color: currentColor;\n}\n.table th {\n    color: #363636;\n    text-align: left;\n}\n.table tr.is-selected {\n    background-color: #287ab1;\n    color: #fff;\n}\n.table tr.is-selected a,\n    .table tr.is-selected strong {\n      color: currentColor;\n}\n.table tr.is-selected td,\n    .table tr.is-selected th {\n      border-color: #fff;\n      color: currentColor;\n}\n.table thead td,\n  .table thead th {\n    border-width: 0 0 2px;\n    color: #363636;\n}\n.table tfoot td,\n  .table tfoot th {\n    border-width: 2px 0 0;\n    color: #363636;\n}\n.table tbody tr:last-child td,\n  .table tbody tr:last-child th {\n    border-bottom-width: 0;\n}\n.table.is-bordered td,\n  .table.is-bordered th {\n    border-width: 1px;\n}\n.table.is-bordered tr:last-child td,\n  .table.is-bordered tr:last-child th {\n    border-bottom-width: 1px;\n}\n.table.is-fullwidth {\n    width: 100%;\n}\n.table.is-hoverable tbody tr:not(.is-selected):hover {\n    background-color: #fafafa;\n}\n.table.is-hoverable.is-striped tbody tr:not(.is-selected):hover {\n    background-color: whitesmoke;\n}\n.table.is-narrow td,\n  .table.is-narrow th {\n    padding: 0.25em 0.5em;\n}\n.table.is-striped tbody tr:not(.is-selected):nth-child(even) {\n    background-color: #fafafa;\n}\n.table-container {\n  -webkit-overflow-scrolling: touch;\n  overflow: auto;\n  overflow-y: hidden;\n  max-width: 100%;\n}\n.tags {\n  align-items: center;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n}\n.tags .tag {\n    margin-bottom: 0.5rem;\n}\n.tags .tag:not(:last-child) {\n      margin-right: 0.5rem;\n}\n.tags:last-child {\n    margin-bottom: -0.5rem;\n}\n.tags:not(:last-child) {\n    margin-bottom: 1rem;\n}\n.tags.has-addons .tag {\n    margin-right: 0;\n}\n.tags.has-addons .tag:not(:first-child) {\n      border-bottom-left-radius: 0;\n      border-top-left-radius: 0;\n}\n.tags.has-addons .tag:not(:last-child) {\n      border-bottom-right-radius: 0;\n      border-top-right-radius: 0;\n}\n.tags.is-centered {\n    justify-content: center;\n}\n.tags.is-centered .tag {\n      margin-right: 0.25rem;\n      margin-left: 0.25rem;\n}\n.tags.is-right {\n    justify-content: flex-end;\n}\n.tags.is-right .tag:not(:first-child) {\n      margin-left: 0.5rem;\n}\n.tags.is-right .tag:not(:last-child) {\n      margin-right: 0;\n}\n.tag:not(body) {\n  align-items: center;\n  background-color: whitesmoke;\n  border-radius: 4px;\n  color: #4a4a4a;\n  display: inline-flex;\n  font-size: 0.75rem;\n  height: 2em;\n  justify-content: center;\n  line-height: 1.5;\n  padding-left: 0.75em;\n  padding-right: 0.75em;\n  white-space: nowrap;\n}\n.tag:not(body) .delete {\n    margin-left: 0.25rem;\n    margin-right: -0.375rem;\n}\n.tag:not(body).is-white {\n    background-color: white;\n    color: #0a0a0a;\n}\n.tag:not(body).is-black {\n    background-color: #0a0a0a;\n    color: white;\n}\n.tag:not(body).is-light {\n    background-color: whitesmoke;\n    color: #363636;\n}\n.tag:not(body).is-dark {\n    background-color: #363636;\n    color: whitesmoke;\n}\n.tag:not(body).is-primary {\n    background-color: #287ab1;\n    color: #fff;\n}\n.tag:not(body).is-link {\n    background-color: #3273dc;\n    color: #fff;\n}\n.tag:not(body).is-info {\n    background-color: #209cee;\n    color: #fff;\n}\n.tag:not(body).is-success {\n    background-color: #23d160;\n    color: #fff;\n}\n.tag:not(body).is-warning {\n    background-color: #ffdd57;\n    color: rgba(0, 0, 0, 0.7);\n}\n.tag:not(body).is-danger {\n    background-color: #ff3860;\n    color: #fff;\n}\n.tag:not(body).is-medium {\n    font-size: 1rem;\n}\n.tag:not(body).is-large {\n    font-size: 1.25rem;\n}\n.tag:not(body) .icon:first-child:not(:last-child) {\n    margin-left: -0.375em;\n    margin-right: 0.1875em;\n}\n.tag:not(body) .icon:last-child:not(:first-child) {\n    margin-left: 0.1875em;\n    margin-right: -0.375em;\n}\n.tag:not(body) .icon:first-child:last-child {\n    margin-left: -0.375em;\n    margin-right: -0.375em;\n}\n.tag:not(body).is-delete {\n    margin-left: 1px;\n    padding: 0;\n    position: relative;\n    width: 2em;\n}\n.tag:not(body).is-delete::before, .tag:not(body).is-delete::after {\n      background-color: currentColor;\n      content: \"\";\n      display: block;\n      left: 50%;\n      position: absolute;\n      top: 50%;\n      transform: translateX(-50%) translateY(-50%) rotate(45deg);\n      transform-origin: center center;\n}\n.tag:not(body).is-delete::before {\n      height: 1px;\n      width: 50%;\n}\n.tag:not(body).is-delete::after {\n      height: 50%;\n      width: 1px;\n}\n.tag:not(body).is-delete:hover, .tag:not(body).is-delete:focus {\n      background-color: #e8e8e8;\n}\n.tag:not(body).is-delete:active {\n      background-color: #dbdbdb;\n}\n.tag:not(body).is-rounded {\n    border-radius: 290486px;\n}\na.tag:hover {\n  text-decoration: underline;\n}\n.title,\n.subtitle {\n  word-break: break-word;\n}\n.title em,\n  .title span,\n  .subtitle em,\n  .subtitle span {\n    font-weight: inherit;\n}\n.title sub,\n  .subtitle sub {\n    font-size: 0.75em;\n}\n.title sup,\n  .subtitle sup {\n    font-size: 0.75em;\n}\n.title .tag,\n  .subtitle .tag {\n    vertical-align: middle;\n}\n.title {\n  color: #363636;\n  font-size: 2rem;\n  font-weight: 600;\n  line-height: 1.125;\n}\n.title strong {\n    color: inherit;\n    font-weight: inherit;\n}\n.title + .highlight {\n    margin-top: -0.75rem;\n}\n.title:not(.is-spaced) + .subtitle {\n    margin-top: -1.25rem;\n}\n.title.is-1 {\n    font-size: 3rem;\n}\n.title.is-2 {\n    font-size: 2.5rem;\n}\n.title.is-3 {\n    font-size: 2rem;\n}\n.title.is-4 {\n    font-size: 1.5rem;\n}\n.title.is-5 {\n    font-size: 1.25rem;\n}\n.title.is-6 {\n    font-size: 1rem;\n}\n.title.is-7 {\n    font-size: 0.75rem;\n}\n.subtitle {\n  color: #4a4a4a;\n  font-size: 1.25rem;\n  font-weight: 400;\n  line-height: 1.25;\n}\n.subtitle strong {\n    color: #363636;\n    font-weight: 600;\n}\n.subtitle:not(.is-spaced) + .title {\n    margin-top: -1.25rem;\n}\n.subtitle.is-1 {\n    font-size: 3rem;\n}\n.subtitle.is-2 {\n    font-size: 2.5rem;\n}\n.subtitle.is-3 {\n    font-size: 2rem;\n}\n.subtitle.is-4 {\n    font-size: 1.5rem;\n}\n.subtitle.is-5 {\n    font-size: 1.25rem;\n}\n.subtitle.is-6 {\n    font-size: 1rem;\n}\n.subtitle.is-7 {\n    font-size: 0.75rem;\n}\n.heading {\n  display: block;\n  font-size: 11px;\n  letter-spacing: 1px;\n  margin-bottom: 5px;\n  text-transform: uppercase;\n}\n.highlight {\n  font-weight: 400;\n  max-width: 100%;\n  overflow: hidden;\n  padding: 0;\n}\n.highlight pre {\n    overflow: auto;\n    max-width: 100%;\n}\n.number {\n  align-items: center;\n  background-color: whitesmoke;\n  border-radius: 290486px;\n  display: inline-flex;\n  font-size: 1.25rem;\n  height: 2em;\n  justify-content: center;\n  margin-right: 1.5rem;\n  min-width: 2.5em;\n  padding: 0.25rem 0.5rem;\n  text-align: center;\n  vertical-align: top;\n}\n.breadcrumb {\n  font-size: 1rem;\n  white-space: nowrap;\n}\n.breadcrumb a {\n    align-items: center;\n    color: #3273dc;\n    display: flex;\n    justify-content: center;\n    padding: 0 0.75em;\n}\n.breadcrumb a:hover {\n      color: #363636;\n}\n.breadcrumb li {\n    align-items: center;\n    display: flex;\n}\n.breadcrumb li:first-child a {\n      padding-left: 0;\n}\n.breadcrumb li.is-active a {\n      color: #363636;\n      cursor: default;\n      pointer-events: none;\n}\n.breadcrumb li + li::before {\n      color: #b5b5b5;\n      content: \"/\";\n}\n.breadcrumb ul,\n  .breadcrumb ol {\n    align-items: flex-start;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: flex-start;\n}\n.breadcrumb .icon:first-child {\n    margin-right: 0.5em;\n}\n.breadcrumb .icon:last-child {\n    margin-left: 0.5em;\n}\n.breadcrumb.is-centered ol,\n  .breadcrumb.is-centered ul {\n    justify-content: center;\n}\n.breadcrumb.is-right ol,\n  .breadcrumb.is-right ul {\n    justify-content: flex-end;\n}\n.breadcrumb.is-small {\n    font-size: 0.75rem;\n}\n.breadcrumb.is-medium {\n    font-size: 1.25rem;\n}\n.breadcrumb.is-large {\n    font-size: 1.5rem;\n}\n.breadcrumb.has-arrow-separator li + li::before {\n    content: \"\\2192\";\n}\n.breadcrumb.has-bullet-separator li + li::before {\n    content: \"\\2022\";\n}\n.breadcrumb.has-dot-separator li + li::before {\n    content: \"\\B7\";\n}\n.breadcrumb.has-succeeds-separator li + li::before {\n    content: \"\\227B\";\n}\n.card {\n  background-color: white;\n  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);\n  color: #4a4a4a;\n  max-width: 100%;\n  position: relative;\n}\n.card-header {\n  background-color: none;\n  align-items: stretch;\n  box-shadow: 0 1px 2px rgba(10, 10, 10, 0.1);\n  display: flex;\n}\n.card-header-title {\n  align-items: center;\n  color: #363636;\n  display: flex;\n  flex-grow: 1;\n  font-weight: 700;\n  padding: 0.75rem;\n}\n.card-header-title.is-centered {\n    justify-content: center;\n}\n.card-header-icon {\n  align-items: center;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  padding: 0.75rem;\n}\n.card-image {\n  display: block;\n  position: relative;\n}\n.card-content {\n  background-color: none;\n  padding: 1.5rem;\n}\n.card-footer {\n  background-color: none;\n  border-top: 1px solid #dbdbdb;\n  align-items: stretch;\n  display: flex;\n}\n.card-footer-item {\n  align-items: center;\n  display: flex;\n  flex-basis: 0;\n  flex-grow: 1;\n  flex-shrink: 0;\n  justify-content: center;\n  padding: 0.75rem;\n}\n.card-footer-item:not(:last-child) {\n    border-right: 1px solid #dbdbdb;\n}\n.card .media:not(:last-child) {\n  margin-bottom: 0.75rem;\n}\n.dropdown {\n  display: inline-flex;\n  position: relative;\n  vertical-align: top;\n}\n.dropdown.is-active .dropdown-menu, .dropdown.is-hoverable:hover .dropdown-menu {\n    display: block;\n}\n.dropdown.is-right .dropdown-menu {\n    left: auto;\n    right: 0;\n}\n.dropdown.is-up .dropdown-menu {\n    bottom: 100%;\n    padding-bottom: 4px;\n    padding-top: initial;\n    top: auto;\n}\n.dropdown-menu {\n  display: none;\n  left: 0;\n  min-width: 12rem;\n  padding-top: 4px;\n  position: absolute;\n  top: 100%;\n  z-index: 20;\n}\n.dropdown-content {\n  background-color: white;\n  border-radius: 4px;\n  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);\n  padding-bottom: 0.5rem;\n  padding-top: 0.5rem;\n}\n.dropdown-item {\n  color: #4a4a4a;\n  display: block;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  padding: 0.375rem 1rem;\n  position: relative;\n}\na.dropdown-item {\n  padding-right: 3rem;\n  white-space: nowrap;\n}\na.dropdown-item:hover {\n    background-color: whitesmoke;\n    color: #0a0a0a;\n}\na.dropdown-item.is-active {\n    background-color: #3273dc;\n    color: #fff;\n}\n.dropdown-divider {\n  background-color: #dbdbdb;\n  border: none;\n  display: block;\n  height: 1px;\n  margin: 0.5rem 0;\n}\n.level {\n  align-items: center;\n  justify-content: space-between;\n}\n.level code {\n    border-radius: 4px;\n}\n.level img {\n    display: inline-block;\n    vertical-align: top;\n}\n.level.is-mobile {\n    display: flex;\n}\n.level.is-mobile .level-left,\n    .level.is-mobile .level-right {\n      display: flex;\n}\n.level.is-mobile .level-left + .level-right {\n      margin-top: 0;\n}\n.level.is-mobile .level-item {\n      margin-right: 0.75rem;\n}\n.level.is-mobile .level-item:not(:last-child) {\n        margin-bottom: 0;\n}\n.level.is-mobile .level-item:not(.is-narrow) {\n        flex-grow: 1;\n}\n@media screen and (min-width: 769px), print {\n.level {\n      display: flex;\n}\n.level > .level-item:not(.is-narrow) {\n        flex-grow: 1;\n}\n}\n.level-item {\n  align-items: center;\n  display: flex;\n  flex-basis: auto;\n  flex-grow: 0;\n  flex-shrink: 0;\n  justify-content: center;\n}\n.level-item .title,\n  .level-item .subtitle {\n    margin-bottom: 0;\n}\n@media screen and (max-width: 768px) {\n.level-item:not(:last-child) {\n      margin-bottom: 0.75rem;\n}\n}\n.level-left,\n.level-right {\n  flex-basis: auto;\n  flex-grow: 0;\n  flex-shrink: 0;\n}\n.level-left .level-item.is-flexible,\n  .level-right .level-item.is-flexible {\n    flex-grow: 1;\n}\n@media screen and (min-width: 769px), print {\n.level-left .level-item:not(:last-child),\n    .level-right .level-item:not(:last-child) {\n      margin-right: 0.75rem;\n}\n}\n.level-left {\n  align-items: center;\n  justify-content: flex-start;\n}\n@media screen and (max-width: 768px) {\n.level-left + .level-right {\n      margin-top: 1.5rem;\n}\n}\n@media screen and (min-width: 769px), print {\n.level-left {\n      display: flex;\n}\n}\n.level-right {\n  align-items: center;\n  justify-content: flex-end;\n}\n@media screen and (min-width: 769px), print {\n.level-right {\n      display: flex;\n}\n}\n.media {\n  align-items: flex-start;\n  display: flex;\n  text-align: left;\n}\n.media .content:not(:last-child) {\n    margin-bottom: 0.75rem;\n}\n.media .media {\n    border-top: 1px solid rgba(219, 219, 219, 0.5);\n    display: flex;\n    padding-top: 0.75rem;\n}\n.media .media .content:not(:last-child),\n    .media .media .control:not(:last-child) {\n      margin-bottom: 0.5rem;\n}\n.media .media .media {\n      padding-top: 0.5rem;\n}\n.media .media .media + .media {\n        margin-top: 0.5rem;\n}\n.media + .media {\n    border-top: 1px solid rgba(219, 219, 219, 0.5);\n    margin-top: 1rem;\n    padding-top: 1rem;\n}\n.media.is-large + .media {\n    margin-top: 1.5rem;\n    padding-top: 1.5rem;\n}\n.media-left,\n.media-right {\n  flex-basis: auto;\n  flex-grow: 0;\n  flex-shrink: 0;\n}\n.media-left {\n  margin-right: 1rem;\n}\n.media-right {\n  margin-left: 1rem;\n}\n.media-content {\n  flex-basis: auto;\n  flex-grow: 1;\n  flex-shrink: 1;\n  text-align: left;\n}\n.menu {\n  font-size: 1rem;\n}\n.menu.is-small {\n    font-size: 0.75rem;\n}\n.menu.is-medium {\n    font-size: 1.25rem;\n}\n.menu.is-large {\n    font-size: 1.5rem;\n}\n.menu-list {\n  line-height: 1.25;\n}\n.menu-list a {\n    border-radius: 2px;\n    color: #4a4a4a;\n    display: block;\n    padding: 0.5em 0.75em;\n}\n.menu-list a:hover {\n      background-color: whitesmoke;\n      color: #363636;\n}\n.menu-list a.is-active {\n      background-color: #3273dc;\n      color: #fff;\n}\n.menu-list li ul {\n    border-left: 1px solid #dbdbdb;\n    margin: 0.75em;\n    padding-left: 0.75em;\n}\n.menu-label {\n  color: #7a7a7a;\n  font-size: 0.75em;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n}\n.menu-label:not(:first-child) {\n    margin-top: 1em;\n}\n.menu-label:not(:last-child) {\n    margin-bottom: 1em;\n}\n.message {\n  background-color: whitesmoke;\n  border-radius: 4px;\n  font-size: 1rem;\n}\n.message strong {\n    color: currentColor;\n}\n.message a:not(.button):not(.tag) {\n    color: currentColor;\n    text-decoration: underline;\n}\n.message.is-small {\n    font-size: 0.75rem;\n}\n.message.is-medium {\n    font-size: 1.25rem;\n}\n.message.is-large {\n    font-size: 1.5rem;\n}\n.message.is-white {\n    background-color: white;\n}\n.message.is-white .message-header {\n      background-color: white;\n      color: #0a0a0a;\n}\n.message.is-white .message-body {\n      border-color: white;\n      color: #4d4d4d;\n}\n.message.is-black {\n    background-color: #fafafa;\n}\n.message.is-black .message-header {\n      background-color: #0a0a0a;\n      color: white;\n}\n.message.is-black .message-body {\n      border-color: #0a0a0a;\n      color: #090909;\n}\n.message.is-light {\n    background-color: #fafafa;\n}\n.message.is-light .message-header {\n      background-color: whitesmoke;\n      color: #363636;\n}\n.message.is-light .message-body {\n      border-color: whitesmoke;\n      color: #505050;\n}\n.message.is-dark {\n    background-color: #fafafa;\n}\n.message.is-dark .message-header {\n      background-color: #363636;\n      color: whitesmoke;\n}\n.message.is-dark .message-body {\n      border-color: #363636;\n      color: #2a2a2a;\n}\n.message.is-primary {\n    background-color: #f7fbfd;\n}\n.message.is-primary .message-header {\n      background-color: #287ab1;\n      color: #fff;\n}\n.message.is-primary .message-body {\n      border-color: #287ab1;\n      color: #1e4b6a;\n}\n.message.is-link {\n    background-color: #f6f9fe;\n}\n.message.is-link .message-header {\n      background-color: #3273dc;\n      color: #fff;\n}\n.message.is-link .message-body {\n      border-color: #3273dc;\n      color: #22509a;\n}\n.message.is-info {\n    background-color: #f6fbfe;\n}\n.message.is-info .message-header {\n      background-color: #209cee;\n      color: #fff;\n}\n.message.is-info .message-body {\n      border-color: #209cee;\n      color: #12537e;\n}\n.message.is-success {\n    background-color: #f6fef9;\n}\n.message.is-success .message-header {\n      background-color: #23d160;\n      color: #fff;\n}\n.message.is-success .message-body {\n      border-color: #23d160;\n      color: #0e301a;\n}\n.message.is-warning {\n    background-color: #fffdf5;\n}\n.message.is-warning .message-header {\n      background-color: #ffdd57;\n      color: rgba(0, 0, 0, 0.7);\n}\n.message.is-warning .message-body {\n      border-color: #ffdd57;\n      color: #3b3108;\n}\n.message.is-danger {\n    background-color: #fff5f7;\n}\n.message.is-danger .message-header {\n      background-color: #ff3860;\n      color: #fff;\n}\n.message.is-danger .message-body {\n      border-color: #ff3860;\n      color: #cd0930;\n}\n.message-header {\n  align-items: center;\n  background-color: #4a4a4a;\n  border-radius: 4px 4px 0 0;\n  color: #fff;\n  display: flex;\n  font-weight: 700;\n  justify-content: space-between;\n  line-height: 1.25;\n  padding: 0.75em 1em;\n  position: relative;\n}\n.message-header .delete {\n    flex-grow: 0;\n    flex-shrink: 0;\n    margin-left: 0.75em;\n}\n.message-header + .message-body {\n    border-width: 0;\n    border-top-left-radius: 0;\n    border-top-right-radius: 0;\n}\n.message-body {\n  border-color: #dbdbdb;\n  border-radius: 4px;\n  border-style: solid;\n  border-width: 0 0 0 4px;\n  color: #4a4a4a;\n  padding: 1.25em 1.5em;\n}\n.message-body code,\n  .message-body pre {\n    background-color: white;\n}\n.message-body pre code {\n    background-color: transparent;\n}\n.modal {\n  align-items: center;\n  display: none;\n  justify-content: center;\n  overflow: hidden;\n  position: fixed;\n  z-index: 40;\n}\n.modal.is-active {\n    display: flex;\n}\n.modal-background {\n  background-color: rgba(10, 10, 10, 0.86);\n}\n.modal-content,\n.modal-card {\n  margin: 0 20px;\n  max-height: calc(100vh - 160px);\n  overflow: auto;\n  position: relative;\n  width: 100%;\n}\n@media screen and (min-width: 769px), print {\n.modal-content,\n    .modal-card {\n      margin: 0 auto;\n      max-height: calc(100vh - 40px);\n      width: 640px;\n}\n}\n.modal-close {\n  background: none;\n  height: 40px;\n  position: fixed;\n  right: 20px;\n  top: 20px;\n  width: 40px;\n}\n.modal-card {\n  display: flex;\n  flex-direction: column;\n  max-height: calc(100vh - 40px);\n  overflow: hidden;\n}\n.modal-card-head,\n.modal-card-foot {\n  align-items: center;\n  background-color: whitesmoke;\n  display: flex;\n  flex-shrink: 0;\n  justify-content: flex-start;\n  padding: 20px;\n  position: relative;\n}\n.modal-card-head {\n  border-bottom: 1px solid #dbdbdb;\n  border-top-left-radius: 6px;\n  border-top-right-radius: 6px;\n}\n.modal-card-title {\n  color: #363636;\n  flex-grow: 1;\n  flex-shrink: 0;\n  font-size: 1.5rem;\n  line-height: 1;\n}\n.modal-card-foot {\n  border-bottom-left-radius: 6px;\n  border-bottom-right-radius: 6px;\n  border-top: 1px solid #dbdbdb;\n}\n.modal-card-foot .button:not(:last-child) {\n    margin-right: 10px;\n}\n.modal-card-body {\n  -webkit-overflow-scrolling: touch;\n  background-color: white;\n  flex-grow: 1;\n  flex-shrink: 1;\n  overflow: auto;\n  padding: 20px;\n}\n.navbar {\n  background-color: white;\n  min-height: 3.25rem;\n  position: relative;\n  z-index: 30;\n}\n.navbar.is-white {\n    background-color: white;\n    color: #0a0a0a;\n}\n.navbar.is-white .navbar-brand > .navbar-item,\n    .navbar.is-white .navbar-brand .navbar-link {\n      color: #0a0a0a;\n}\n.navbar.is-white .navbar-brand > a.navbar-item:hover, .navbar.is-white .navbar-brand > a.navbar-item.is-active,\n    .navbar.is-white .navbar-brand .navbar-link:hover,\n    .navbar.is-white .navbar-brand .navbar-link.is-active {\n      background-color: #f2f2f2;\n      color: #0a0a0a;\n}\n.navbar.is-white .navbar-brand .navbar-link::after {\n      border-color: #0a0a0a;\n}\n@media screen and (min-width: 1088px) {\n.navbar.is-white .navbar-start > .navbar-item,\n      .navbar.is-white .navbar-start .navbar-link,\n      .navbar.is-white .navbar-end > .navbar-item,\n      .navbar.is-white .navbar-end .navbar-link {\n        color: #0a0a0a;\n}\n.navbar.is-white .navbar-start > a.navbar-item:hover, .navbar.is-white .navbar-start > a.navbar-item.is-active,\n      .navbar.is-white .navbar-start .navbar-link:hover,\n      .navbar.is-white .navbar-start .navbar-link.is-active,\n      .navbar.is-white .navbar-end > a.navbar-item:hover,\n      .navbar.is-white .navbar-end > a.navbar-item.is-active,\n      .navbar.is-white .navbar-end .navbar-link:hover,\n      .navbar.is-white .navbar-end .navbar-link.is-active {\n        background-color: #f2f2f2;\n        color: #0a0a0a;\n}\n.navbar.is-white .navbar-start .navbar-link::after,\n      .navbar.is-white .navbar-end .navbar-link::after {\n        border-color: #0a0a0a;\n}\n.navbar.is-white .navbar-item.has-dropdown:hover .navbar-link,\n      .navbar.is-white .navbar-item.has-dropdown.is-active .navbar-link {\n        background-color: #f2f2f2;\n        color: #0a0a0a;\n}\n.navbar.is-white .navbar-dropdown a.navbar-item.is-active {\n        background-color: white;\n        color: #0a0a0a;\n}\n}\n.navbar.is-black {\n    background-color: #0a0a0a;\n    color: white;\n}\n.navbar.is-black .navbar-brand > .navbar-item,\n    .navbar.is-black .navbar-brand .navbar-link {\n      color: white;\n}\n.navbar.is-black .navbar-brand > a.navbar-item:hover, .navbar.is-black .navbar-brand > a.navbar-item.is-active,\n    .navbar.is-black .navbar-brand .navbar-link:hover,\n    .navbar.is-black .navbar-brand .navbar-link.is-active {\n      background-color: black;\n      color: white;\n}\n.navbar.is-black .navbar-brand .navbar-link::after {\n      border-color: white;\n}\n@media screen and (min-width: 1088px) {\n.navbar.is-black .navbar-start > .navbar-item,\n      .navbar.is-black .navbar-start .navbar-link,\n      .navbar.is-black .navbar-end > .navbar-item,\n      .navbar.is-black .navbar-end .navbar-link {\n        color: white;\n}\n.navbar.is-black .navbar-start > a.navbar-item:hover, .navbar.is-black .navbar-start > a.navbar-item.is-active,\n      .navbar.is-black .navbar-start .navbar-link:hover,\n      .navbar.is-black .navbar-start .navbar-link.is-active,\n      .navbar.is-black .navbar-end > a.navbar-item:hover,\n      .navbar.is-black .navbar-end > a.navbar-item.is-active,\n      .navbar.is-black .navbar-end .navbar-link:hover,\n      .navbar.is-black .navbar-end .navbar-link.is-active {\n        background-color: black;\n        color: white;\n}\n.navbar.is-black .navbar-start .navbar-link::after,\n      .navbar.is-black .navbar-end .navbar-link::after {\n        border-color: white;\n}\n.navbar.is-black .navbar-item.has-dropdown:hover .navbar-link,\n      .navbar.is-black .navbar-item.has-dropdown.is-active .navbar-link {\n        background-color: black;\n        color: white;\n}\n.navbar.is-black .navbar-dropdown a.navbar-item.is-active {\n        background-color: #0a0a0a;\n        color: white;\n}\n}\n.navbar.is-light {\n    background-color: whitesmoke;\n    color: #363636;\n}\n.navbar.is-light .navbar-brand > .navbar-item,\n    .navbar.is-light .navbar-brand .navbar-link {\n      color: #363636;\n}\n.navbar.is-light .navbar-brand > a.navbar-item:hover, .navbar.is-light .navbar-brand > a.navbar-item.is-active,\n    .navbar.is-light .navbar-brand .navbar-link:hover,\n    .navbar.is-light .navbar-brand .navbar-link.is-active {\n      background-color: #e8e8e8;\n      color: #363636;\n}\n.navbar.is-light .navbar-brand .navbar-link::after {\n      border-color: #363636;\n}\n@media screen and (min-width: 1088px) {\n.navbar.is-light .navbar-start > .navbar-item,\n      .navbar.is-light .navbar-start .navbar-link,\n      .navbar.is-light .navbar-end > .navbar-item,\n      .navbar.is-light .navbar-end .navbar-link {\n        color: #363636;\n}\n.navbar.is-light .navbar-start > a.navbar-item:hover, .navbar.is-light .navbar-start > a.navbar-item.is-active,\n      .navbar.is-light .navbar-start .navbar-link:hover,\n      .navbar.is-light .navbar-start .navbar-link.is-active,\n      .navbar.is-light .navbar-end > a.navbar-item:hover,\n      .navbar.is-light .navbar-end > a.navbar-item.is-active,\n      .navbar.is-light .navbar-end .navbar-link:hover,\n      .navbar.is-light .navbar-end .navbar-link.is-active {\n        background-color: #e8e8e8;\n        color: #363636;\n}\n.navbar.is-light .navbar-start .navbar-link::after,\n      .navbar.is-light .navbar-end .navbar-link::after {\n        border-color: #363636;\n}\n.navbar.is-light .navbar-item.has-dropdown:hover .navbar-link,\n      .navbar.is-light .navbar-item.has-dropdown.is-active .navbar-link {\n        background-color: #e8e8e8;\n        color: #363636;\n}\n.navbar.is-light .navbar-dropdown a.navbar-item.is-active {\n        background-color: whitesmoke;\n        color: #363636;\n}\n}\n.navbar.is-dark {\n    background-color: #363636;\n    color: whitesmoke;\n}\n.navbar.is-dark .navbar-brand > .navbar-item,\n    .navbar.is-dark .navbar-brand .navbar-link {\n      color: whitesmoke;\n}\n.navbar.is-dark .navbar-brand > a.navbar-item:hover, .navbar.is-dark .navbar-brand > a.navbar-item.is-active,\n    .navbar.is-dark .navbar-brand .navbar-link:hover,\n    .navbar.is-dark .navbar-brand .navbar-link.is-active {\n      background-color: #292929;\n      color: whitesmoke;\n}\n.navbar.is-dark .navbar-brand .navbar-link::after {\n      border-color: whitesmoke;\n}\n@media screen and (min-width: 1088px) {\n.navbar.is-dark .navbar-start > .navbar-item,\n      .navbar.is-dark .navbar-start .navbar-link,\n      .navbar.is-dark .navbar-end > .navbar-item,\n      .navbar.is-dark .navbar-end .navbar-link {\n        color: whitesmoke;\n}\n.navbar.is-dark .navbar-start > a.navbar-item:hover, .navbar.is-dark .navbar-start > a.navbar-item.is-active,\n      .navbar.is-dark .navbar-start .navbar-link:hover,\n      .navbar.is-dark .navbar-start .navbar-link.is-active,\n      .navbar.is-dark .navbar-end > a.navbar-item:hover,\n      .navbar.is-dark .navbar-end > a.navbar-item.is-active,\n      .navbar.is-dark .navbar-end .navbar-link:hover,\n      .navbar.is-dark .navbar-end .navbar-link.is-active {\n        background-color: #292929;\n        color: whitesmoke;\n}\n.navbar.is-dark .navbar-start .navbar-link::after,\n      .navbar.is-dark .navbar-end .navbar-link::after {\n        border-color: whitesmoke;\n}\n.navbar.is-dark .navbar-item.has-dropdown:hover .navbar-link,\n      .navbar.is-dark .navbar-item.has-dropdown.is-active .navbar-link {\n        background-color: #292929;\n        color: whitesmoke;\n}\n.navbar.is-dark .navbar-dropdown a.navbar-item.is-active {\n        background-color: #363636;\n        color: whitesmoke;\n}\n}\n.navbar.is-primary {\n    background-color: #287ab1;\n    color: #fff;\n}\n.navbar.is-primary .navbar-brand > .navbar-item,\n    .navbar.is-primary .navbar-brand .navbar-link {\n      color: #fff;\n}\n.navbar.is-primary .navbar-brand > a.navbar-item:hover, .navbar.is-primary .navbar-brand > a.navbar-item.is-active,\n    .navbar.is-primary .navbar-brand .navbar-link:hover,\n    .navbar.is-primary .navbar-brand .navbar-link.is-active {\n      background-color: #236c9c;\n      color: #fff;\n}\n.navbar.is-primary .navbar-brand .navbar-link::after {\n      border-color: #fff;\n}\n@media screen and (min-width: 1088px) {\n.navbar.is-primary .navbar-start > .navbar-item,\n      .navbar.is-primary .navbar-start .navbar-link,\n      .navbar.is-primary .navbar-end > .navbar-item,\n      .navbar.is-primary .navbar-end .navbar-link {\n        color: #fff;\n}\n.navbar.is-primary .navbar-start > a.navbar-item:hover, .navbar.is-primary .navbar-start > a.navbar-item.is-active,\n      .navbar.is-primary .navbar-start .navbar-link:hover,\n      .navbar.is-primary .navbar-start .navbar-link.is-active,\n      .navbar.is-primary .navbar-end > a.navbar-item:hover,\n      .navbar.is-primary .navbar-end > a.navbar-item.is-active,\n      .navbar.is-primary .navbar-end .navbar-link:hover,\n      .navbar.is-primary .navbar-end .navbar-link.is-active {\n        background-color: #236c9c;\n        color: #fff;\n}\n.navbar.is-primary .navbar-start .navbar-link::after,\n      .navbar.is-primary .navbar-end .navbar-link::after {\n        border-color: #fff;\n}\n.navbar.is-primary .navbar-item.has-dropdown:hover .navbar-link,\n      .navbar.is-primary .navbar-item.has-dropdown.is-active .navbar-link {\n        background-color: #236c9c;\n        color: #fff;\n}\n.navbar.is-primary .navbar-dropdown a.navbar-item.is-active {\n        background-color: #287ab1;\n        color: #fff;\n}\n}\n.navbar.is-link {\n    background-color: #3273dc;\n    color: #fff;\n}\n.navbar.is-link .navbar-brand > .navbar-item,\n    .navbar.is-link .navbar-brand .navbar-link {\n      color: #fff;\n}\n.navbar.is-link .navbar-brand > a.navbar-item:hover, .navbar.is-link .navbar-brand > a.navbar-item.is-active,\n    .navbar.is-link .navbar-brand .navbar-link:hover,\n    .navbar.is-link .navbar-brand .navbar-link.is-active {\n      background-color: #2366d1;\n      color: #fff;\n}\n.navbar.is-link .navbar-brand .navbar-link::after {\n      border-color: #fff;\n}\n@media screen and (min-width: 1088px) {\n.navbar.is-link .navbar-start > .navbar-item,\n      .navbar.is-link .navbar-start .navbar-link,\n      .navbar.is-link .navbar-end > .navbar-item,\n      .navbar.is-link .navbar-end .navbar-link {\n        color: #fff;\n}\n.navbar.is-link .navbar-start > a.navbar-item:hover, .navbar.is-link .navbar-start > a.navbar-item.is-active,\n      .navbar.is-link .navbar-start .navbar-link:hover,\n      .navbar.is-link .navbar-start .navbar-link.is-active,\n      .navbar.is-link .navbar-end > a.navbar-item:hover,\n      .navbar.is-link .navbar-end > a.navbar-item.is-active,\n      .navbar.is-link .navbar-end .navbar-link:hover,\n      .navbar.is-link .navbar-end .navbar-link.is-active {\n        background-color: #2366d1;\n        color: #fff;\n}\n.navbar.is-link .navbar-start .navbar-link::after,\n      .navbar.is-link .navbar-end .navbar-link::after {\n        border-color: #fff;\n}\n.navbar.is-link .navbar-item.has-dropdown:hover .navbar-link,\n      .navbar.is-link .navbar-item.has-dropdown.is-active .navbar-link {\n        background-color: #2366d1;\n        color: #fff;\n}\n.navbar.is-link .navbar-dropdown a.navbar-item.is-active {\n        background-color: #3273dc;\n        color: #fff;\n}\n}\n.navbar.is-info {\n    background-color: #209cee;\n    color: #fff;\n}\n.navbar.is-info .navbar-brand > .navbar-item,\n    .navbar.is-info .navbar-brand .navbar-link {\n      color: #fff;\n}\n.navbar.is-info .navbar-brand > a.navbar-item:hover, .navbar.is-info .navbar-brand > a.navbar-item.is-active,\n    .navbar.is-info .navbar-brand .navbar-link:hover,\n    .navbar.is-info .navbar-brand .navbar-link.is-active {\n      background-color: #118fe4;\n      color: #fff;\n}\n.navbar.is-info .navbar-brand .navbar-link::after {\n      border-color: #fff;\n}\n@media screen and (min-width: 1088px) {\n.navbar.is-info .navbar-start > .navbar-item,\n      .navbar.is-info .navbar-start .navbar-link,\n      .navbar.is-info .navbar-end > .navbar-item,\n      .navbar.is-info .navbar-end .navbar-link {\n        color: #fff;\n}\n.navbar.is-info .navbar-start > a.navbar-item:hover, .navbar.is-info .navbar-start > a.navbar-item.is-active,\n      .navbar.is-info .navbar-start .navbar-link:hover,\n      .navbar.is-info .navbar-start .navbar-link.is-active,\n      .navbar.is-info .navbar-end > a.navbar-item:hover,\n      .navbar.is-info .navbar-end > a.navbar-item.is-active,\n      .navbar.is-info .navbar-end .navbar-link:hover,\n      .navbar.is-info .navbar-end .navbar-link.is-active {\n        background-color: #118fe4;\n        color: #fff;\n}\n.navbar.is-info .navbar-start .navbar-link::after,\n      .navbar.is-info .navbar-end .navbar-link::after {\n        border-color: #fff;\n}\n.navbar.is-info .navbar-item.has-dropdown:hover .navbar-link,\n      .navbar.is-info .navbar-item.has-dropdown.is-active .navbar-link {\n        background-color: #118fe4;\n        color: #fff;\n}\n.navbar.is-info .navbar-dropdown a.navbar-item.is-active {\n        background-color: #209cee;\n        color: #fff;\n}\n}\n.navbar.is-success {\n    background-color: #23d160;\n    color: #fff;\n}\n.navbar.is-success .navbar-brand > .navbar-item,\n    .navbar.is-success .navbar-brand .navbar-link {\n      color: #fff;\n}\n.navbar.is-success .navbar-brand > a.navbar-item:hover, .navbar.is-success .navbar-brand > a.navbar-item.is-active,\n    .navbar.is-success .navbar-brand .navbar-link:hover,\n    .navbar.is-success .navbar-brand .navbar-link.is-active {\n      background-color: #20bc56;\n      color: #fff;\n}\n.navbar.is-success .navbar-brand .navbar-link::after {\n      border-color: #fff;\n}\n@media screen and (min-width: 1088px) {\n.navbar.is-success .navbar-start > .navbar-item,\n      .navbar.is-success .navbar-start .navbar-link,\n      .navbar.is-success .navbar-end > .navbar-item,\n      .navbar.is-success .navbar-end .navbar-link {\n        color: #fff;\n}\n.navbar.is-success .navbar-start > a.navbar-item:hover, .navbar.is-success .navbar-start > a.navbar-item.is-active,\n      .navbar.is-success .navbar-start .navbar-link:hover,\n      .navbar.is-success .navbar-start .navbar-link.is-active,\n      .navbar.is-success .navbar-end > a.navbar-item:hover,\n      .navbar.is-success .navbar-end > a.navbar-item.is-active,\n      .navbar.is-success .navbar-end .navbar-link:hover,\n      .navbar.is-success .navbar-end .navbar-link.is-active {\n        background-color: #20bc56;\n        color: #fff;\n}\n.navbar.is-success .navbar-start .navbar-link::after,\n      .navbar.is-success .navbar-end .navbar-link::after {\n        border-color: #fff;\n}\n.navbar.is-success .navbar-item.has-dropdown:hover .navbar-link,\n      .navbar.is-success .navbar-item.has-dropdown.is-active .navbar-link {\n        background-color: #20bc56;\n        color: #fff;\n}\n.navbar.is-success .navbar-dropdown a.navbar-item.is-active {\n        background-color: #23d160;\n        color: #fff;\n}\n}\n.navbar.is-warning {\n    background-color: #ffdd57;\n    color: rgba(0, 0, 0, 0.7);\n}\n.navbar.is-warning .navbar-brand > .navbar-item,\n    .navbar.is-warning .navbar-brand .navbar-link {\n      color: rgba(0, 0, 0, 0.7);\n}\n.navbar.is-warning .navbar-brand > a.navbar-item:hover, .navbar.is-warning .navbar-brand > a.navbar-item.is-active,\n    .navbar.is-warning .navbar-brand .navbar-link:hover,\n    .navbar.is-warning .navbar-brand .navbar-link.is-active {\n      background-color: #ffd83d;\n      color: rgba(0, 0, 0, 0.7);\n}\n.navbar.is-warning .navbar-brand .navbar-link::after {\n      border-color: rgba(0, 0, 0, 0.7);\n}\n@media screen and (min-width: 1088px) {\n.navbar.is-warning .navbar-start > .navbar-item,\n      .navbar.is-warning .navbar-start .navbar-link,\n      .navbar.is-warning .navbar-end > .navbar-item,\n      .navbar.is-warning .navbar-end .navbar-link {\n        color: rgba(0, 0, 0, 0.7);\n}\n.navbar.is-warning .navbar-start > a.navbar-item:hover, .navbar.is-warning .navbar-start > a.navbar-item.is-active,\n      .navbar.is-warning .navbar-start .navbar-link:hover,\n      .navbar.is-warning .navbar-start .navbar-link.is-active,\n      .navbar.is-warning .navbar-end > a.navbar-item:hover,\n      .navbar.is-warning .navbar-end > a.navbar-item.is-active,\n      .navbar.is-warning .navbar-end .navbar-link:hover,\n      .navbar.is-warning .navbar-end .navbar-link.is-active {\n        background-color: #ffd83d;\n        color: rgba(0, 0, 0, 0.7);\n}\n.navbar.is-warning .navbar-start .navbar-link::after,\n      .navbar.is-warning .navbar-end .navbar-link::after {\n        border-color: rgba(0, 0, 0, 0.7);\n}\n.navbar.is-warning .navbar-item.has-dropdown:hover .navbar-link,\n      .navbar.is-warning .navbar-item.has-dropdown.is-active .navbar-link {\n        background-color: #ffd83d;\n        color: rgba(0, 0, 0, 0.7);\n}\n.navbar.is-warning .navbar-dropdown a.navbar-item.is-active {\n        background-color: #ffdd57;\n        color: rgba(0, 0, 0, 0.7);\n}\n}\n.navbar.is-danger {\n    background-color: #ff3860;\n    color: #fff;\n}\n.navbar.is-danger .navbar-brand > .navbar-item,\n    .navbar.is-danger .navbar-brand .navbar-link {\n      color: #fff;\n}\n.navbar.is-danger .navbar-brand > a.navbar-item:hover, .navbar.is-danger .navbar-brand > a.navbar-item.is-active,\n    .navbar.is-danger .navbar-brand .navbar-link:hover,\n    .navbar.is-danger .navbar-brand .navbar-link.is-active {\n      background-color: #ff1f4b;\n      color: #fff;\n}\n.navbar.is-danger .navbar-brand .navbar-link::after {\n      border-color: #fff;\n}\n@media screen and (min-width: 1088px) {\n.navbar.is-danger .navbar-start > .navbar-item,\n      .navbar.is-danger .navbar-start .navbar-link,\n      .navbar.is-danger .navbar-end > .navbar-item,\n      .navbar.is-danger .navbar-end .navbar-link {\n        color: #fff;\n}\n.navbar.is-danger .navbar-start > a.navbar-item:hover, .navbar.is-danger .navbar-start > a.navbar-item.is-active,\n      .navbar.is-danger .navbar-start .navbar-link:hover,\n      .navbar.is-danger .navbar-start .navbar-link.is-active,\n      .navbar.is-danger .navbar-end > a.navbar-item:hover,\n      .navbar.is-danger .navbar-end > a.navbar-item.is-active,\n      .navbar.is-danger .navbar-end .navbar-link:hover,\n      .navbar.is-danger .navbar-end .navbar-link.is-active {\n        background-color: #ff1f4b;\n        color: #fff;\n}\n.navbar.is-danger .navbar-start .navbar-link::after,\n      .navbar.is-danger .navbar-end .navbar-link::after {\n        border-color: #fff;\n}\n.navbar.is-danger .navbar-item.has-dropdown:hover .navbar-link,\n      .navbar.is-danger .navbar-item.has-dropdown.is-active .navbar-link {\n        background-color: #ff1f4b;\n        color: #fff;\n}\n.navbar.is-danger .navbar-dropdown a.navbar-item.is-active {\n        background-color: #ff3860;\n        color: #fff;\n}\n}\n.navbar > .container {\n    align-items: stretch;\n    display: flex;\n    min-height: 3.25rem;\n    width: 100%;\n}\n.navbar.has-shadow {\n    box-shadow: 0 2px 0 0 whitesmoke;\n}\n.navbar.is-fixed-bottom, .navbar.is-fixed-top {\n    left: 0;\n    position: fixed;\n    right: 0;\n    z-index: 30;\n}\n.navbar.is-fixed-bottom {\n    bottom: 0;\n}\n.navbar.is-fixed-bottom.has-shadow {\n      box-shadow: 0 -2px 0 0 whitesmoke;\n}\n.navbar.is-fixed-top {\n    top: 0;\n}\nhtml.has-navbar-fixed-top,\nbody.has-navbar-fixed-top {\n  padding-top: 3.25rem;\n}\nhtml.has-navbar-fixed-bottom,\nbody.has-navbar-fixed-bottom {\n  padding-bottom: 3.25rem;\n}\n.navbar-brand,\n.navbar-tabs {\n  align-items: stretch;\n  display: flex;\n  flex-shrink: 0;\n  min-height: 3.25rem;\n}\n.navbar-brand a.navbar-item:hover {\n  background-color: transparent;\n}\n.navbar-tabs {\n  -webkit-overflow-scrolling: touch;\n  max-width: 100vw;\n  overflow-x: auto;\n  overflow-y: hidden;\n}\n.navbar-burger {\n  cursor: pointer;\n  display: block;\n  height: 3.25rem;\n  position: relative;\n  width: 3.25rem;\n  margin-left: auto;\n}\n.navbar-burger span {\n    background-color: currentColor;\n    display: block;\n    height: 1px;\n    left: calc(50% - 8px);\n    position: absolute;\n    transform-origin: center;\n    transition-duration: 86ms;\n    transition-property: background-color, opacity, transform;\n    transition-timing-function: ease-out;\n    width: 16px;\n}\n.navbar-burger span:nth-child(1) {\n      top: calc(50% - 6px);\n}\n.navbar-burger span:nth-child(2) {\n      top: calc(50% - 1px);\n}\n.navbar-burger span:nth-child(3) {\n      top: calc(50% + 4px);\n}\n.navbar-burger:hover {\n    background-color: rgba(0, 0, 0, 0.05);\n}\n.navbar-burger.is-active span:nth-child(1) {\n    transform: translateY(5px) rotate(45deg);\n}\n.navbar-burger.is-active span:nth-child(2) {\n    opacity: 0;\n}\n.navbar-burger.is-active span:nth-child(3) {\n    transform: translateY(-5px) rotate(-45deg);\n}\n.navbar-menu {\n  display: none;\n}\n.navbar-item,\n.navbar-link {\n  color: #4a4a4a;\n  display: block;\n  line-height: 1.5;\n  padding: 0.5rem 0.75rem;\n  position: relative;\n}\n.navbar-item .icon:only-child,\n  .navbar-link .icon:only-child {\n    margin-left: -0.25rem;\n    margin-right: -0.25rem;\n}\na.navbar-item,\n.navbar-link {\n  cursor: pointer;\n}\na.navbar-item:hover, a.navbar-item.is-active,\n  .navbar-link:hover,\n  .navbar-link.is-active {\n    background-color: #fafafa;\n    color: #3273dc;\n}\n.navbar-item {\n  display: block;\n  flex-grow: 0;\n  flex-shrink: 0;\n}\n.navbar-item img {\n    max-height: 1.75rem;\n}\n.navbar-item.has-dropdown {\n    padding: 0;\n}\n.navbar-item.is-expanded {\n    flex-grow: 1;\n    flex-shrink: 1;\n}\n.navbar-item.is-tab {\n    border-bottom: 1px solid transparent;\n    min-height: 3.25rem;\n    padding-bottom: calc(0.5rem - 1px);\n}\n.navbar-item.is-tab:hover {\n      background-color: transparent;\n      border-bottom-color: #3273dc;\n}\n.navbar-item.is-tab.is-active {\n      background-color: transparent;\n      border-bottom-color: #3273dc;\n      border-bottom-style: solid;\n      border-bottom-width: 3px;\n      color: #3273dc;\n      padding-bottom: calc(0.5rem - 3px);\n}\n.navbar-content {\n  flex-grow: 1;\n  flex-shrink: 1;\n}\n.navbar-link {\n  padding-right: 2.5em;\n}\n.navbar-link::after {\n    border-color: #3273dc;\n    margin-top: -0.375em;\n    right: 1.125em;\n}\n.navbar-dropdown {\n  font-size: 0.875rem;\n  padding-bottom: 0.5rem;\n  padding-top: 0.5rem;\n}\n.navbar-dropdown .navbar-item {\n    padding-left: 1.5rem;\n    padding-right: 1.5rem;\n}\n.navbar-divider {\n  background-color: whitesmoke;\n  border: none;\n  display: none;\n  height: 2px;\n  margin: 0.5rem 0;\n}\n@media screen and (max-width: 1087px) {\n.navbar > .container {\n    display: block;\n}\n.navbar-brand .navbar-item,\n  .navbar-tabs .navbar-item {\n    align-items: center;\n    display: flex;\n}\n.navbar-link::after {\n    display: none;\n}\n.navbar-menu {\n    background-color: white;\n    box-shadow: 0 8px 16px rgba(10, 10, 10, 0.1);\n    padding: 0.5rem 0;\n}\n.navbar-menu.is-active {\n      display: block;\n}\n.navbar.is-fixed-bottom-touch, .navbar.is-fixed-top-touch {\n    left: 0;\n    position: fixed;\n    right: 0;\n    z-index: 30;\n}\n.navbar.is-fixed-bottom-touch {\n    bottom: 0;\n}\n.navbar.is-fixed-bottom-touch.has-shadow {\n      box-shadow: 0 -2px 3px rgba(10, 10, 10, 0.1);\n}\n.navbar.is-fixed-top-touch {\n    top: 0;\n}\n.navbar.is-fixed-top .navbar-menu, .navbar.is-fixed-top-touch .navbar-menu {\n    -webkit-overflow-scrolling: touch;\n    max-height: calc(100vh - 3.25rem);\n    overflow: auto;\n}\nhtml.has-navbar-fixed-top-touch,\n  body.has-navbar-fixed-top-touch {\n    padding-top: 3.25rem;\n}\nhtml.has-navbar-fixed-bottom-touch,\n  body.has-navbar-fixed-bottom-touch {\n    padding-bottom: 3.25rem;\n}\n}\n@media screen and (min-width: 1088px) {\n.navbar,\n  .navbar-menu,\n  .navbar-start,\n  .navbar-end {\n    align-items: stretch;\n    display: flex;\n}\n.navbar {\n    min-height: 3.25rem;\n}\n.navbar.is-spaced {\n      padding: 1rem 2rem;\n}\n.navbar.is-spaced .navbar-start,\n      .navbar.is-spaced .navbar-end {\n        align-items: center;\n}\n.navbar.is-spaced a.navbar-item,\n      .navbar.is-spaced .navbar-link {\n        border-radius: 4px;\n}\n.navbar.is-transparent a.navbar-item:hover, .navbar.is-transparent a.navbar-item.is-active,\n    .navbar.is-transparent .navbar-link:hover,\n    .navbar.is-transparent .navbar-link.is-active {\n      background-color: transparent !important;\n}\n.navbar.is-transparent .navbar-item.has-dropdown.is-active .navbar-link, .navbar.is-transparent .navbar-item.has-dropdown.is-hoverable:hover .navbar-link {\n      background-color: transparent !important;\n}\n.navbar.is-transparent .navbar-dropdown a.navbar-item:hover {\n      background-color: whitesmoke;\n      color: #0a0a0a;\n}\n.navbar.is-transparent .navbar-dropdown a.navbar-item.is-active {\n      background-color: whitesmoke;\n      color: #3273dc;\n}\n.navbar-burger {\n    display: none;\n}\n.navbar-item,\n  .navbar-link {\n    align-items: center;\n    display: flex;\n}\n.navbar-item {\n    display: flex;\n}\n.navbar-item.has-dropdown {\n      align-items: stretch;\n}\n.navbar-item.has-dropdown-up .navbar-link::after {\n      transform: rotate(135deg) translate(0.25em, -0.25em);\n}\n.navbar-item.has-dropdown-up .navbar-dropdown {\n      border-bottom: 2px solid #dbdbdb;\n      border-radius: 6px 6px 0 0;\n      border-top: none;\n      bottom: 100%;\n      box-shadow: 0 -8px 8px rgba(10, 10, 10, 0.1);\n      top: auto;\n}\n.navbar-item.is-active .navbar-dropdown, .navbar-item.is-hoverable:hover .navbar-dropdown {\n      display: block;\n}\n.navbar.is-spaced .navbar-item.is-active .navbar-dropdown, .navbar-item.is-active .navbar-dropdown.is-boxed, .navbar.is-spaced .navbar-item.is-hoverable:hover .navbar-dropdown, .navbar-item.is-hoverable:hover .navbar-dropdown.is-boxed {\n        opacity: 1;\n        pointer-events: auto;\n        transform: translateY(0);\n}\n.navbar-menu {\n    flex-grow: 1;\n    flex-shrink: 0;\n}\n.navbar-start {\n    justify-content: flex-start;\n    margin-right: auto;\n}\n.navbar-end {\n    justify-content: flex-end;\n    margin-left: auto;\n}\n.navbar-dropdown {\n    background-color: white;\n    border-bottom-left-radius: 6px;\n    border-bottom-right-radius: 6px;\n    border-top: 2px solid #dbdbdb;\n    box-shadow: 0 8px 8px rgba(10, 10, 10, 0.1);\n    display: none;\n    font-size: 0.875rem;\n    left: 0;\n    min-width: 100%;\n    position: absolute;\n    top: 100%;\n    z-index: 20;\n}\n.navbar-dropdown .navbar-item {\n      padding: 0.375rem 1rem;\n      white-space: nowrap;\n}\n.navbar-dropdown a.navbar-item {\n      padding-right: 3rem;\n}\n.navbar-dropdown a.navbar-item:hover {\n        background-color: whitesmoke;\n        color: #0a0a0a;\n}\n.navbar-dropdown a.navbar-item.is-active {\n        background-color: whitesmoke;\n        color: #3273dc;\n}\n.navbar.is-spaced .navbar-dropdown, .navbar-dropdown.is-boxed {\n      border-radius: 6px;\n      border-top: none;\n      box-shadow: 0 8px 8px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);\n      display: block;\n      opacity: 0;\n      pointer-events: none;\n      top: calc(100% + (-4px));\n      transform: translateY(-5px);\n      transition-duration: 86ms;\n      transition-property: opacity, transform;\n}\n.navbar-dropdown.is-right {\n      left: auto;\n      right: 0;\n}\n.navbar-divider {\n    display: block;\n}\n.navbar > .container .navbar-brand,\n  .container > .navbar .navbar-brand {\n    margin-left: -1rem;\n}\n.navbar > .container .navbar-menu,\n  .container > .navbar .navbar-menu {\n    margin-right: -1rem;\n}\n.navbar.is-fixed-bottom-desktop, .navbar.is-fixed-top-desktop {\n    left: 0;\n    position: fixed;\n    right: 0;\n    z-index: 30;\n}\n.navbar.is-fixed-bottom-desktop {\n    bottom: 0;\n}\n.navbar.is-fixed-bottom-desktop.has-shadow {\n      box-shadow: 0 -2px 3px rgba(10, 10, 10, 0.1);\n}\n.navbar.is-fixed-top-desktop {\n    top: 0;\n}\nhtml.has-navbar-fixed-top-desktop,\n  body.has-navbar-fixed-top-desktop {\n    padding-top: 3.25rem;\n}\nhtml.has-navbar-fixed-bottom-desktop,\n  body.has-navbar-fixed-bottom-desktop {\n    padding-bottom: 3.25rem;\n}\nhtml.has-spaced-navbar-fixed-top,\n  body.has-spaced-navbar-fixed-top {\n    padding-top: 5.25rem;\n}\nhtml.has-spaced-navbar-fixed-bottom,\n  body.has-spaced-navbar-fixed-bottom {\n    padding-bottom: 5.25rem;\n}\na.navbar-item.is-active,\n  .navbar-link.is-active {\n    color: #0a0a0a;\n}\na.navbar-item.is-active:not(:hover),\n  .navbar-link.is-active:not(:hover) {\n    background-color: transparent;\n}\n.navbar-item.has-dropdown:hover .navbar-link, .navbar-item.has-dropdown.is-active .navbar-link {\n    background-color: #fafafa;\n}\n}\n.pagination {\n  font-size: 1rem;\n  margin: -0.25rem;\n}\n.pagination.is-small {\n    font-size: 0.75rem;\n}\n.pagination.is-medium {\n    font-size: 1.25rem;\n}\n.pagination.is-large {\n    font-size: 1.5rem;\n}\n.pagination.is-rounded .pagination-previous,\n  .pagination.is-rounded .pagination-next {\n    padding-left: 1em;\n    padding-right: 1em;\n    border-radius: 290486px;\n}\n.pagination.is-rounded .pagination-link {\n    border-radius: 290486px;\n}\n.pagination,\n.pagination-list {\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  text-align: center;\n}\n.pagination-previous,\n.pagination-next,\n.pagination-link,\n.pagination-ellipsis {\n  font-size: 1em;\n  padding-left: 0.5em;\n  padding-right: 0.5em;\n  justify-content: center;\n  margin: 0.25rem;\n  text-align: center;\n}\n.pagination-previous,\n.pagination-next,\n.pagination-link {\n  border-color: #dbdbdb;\n  color: #363636;\n  min-width: 2.25em;\n}\n.pagination-previous:hover,\n  .pagination-next:hover,\n  .pagination-link:hover {\n    border-color: #b5b5b5;\n    color: #363636;\n}\n.pagination-previous:focus,\n  .pagination-next:focus,\n  .pagination-link:focus {\n    border-color: #3273dc;\n}\n.pagination-previous:active,\n  .pagination-next:active,\n  .pagination-link:active {\n    box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.2);\n}\n.pagination-previous[disabled],\n  .pagination-next[disabled],\n  .pagination-link[disabled] {\n    background-color: #dbdbdb;\n    border-color: #dbdbdb;\n    box-shadow: none;\n    color: #7a7a7a;\n    opacity: 0.5;\n}\n.pagination-previous,\n.pagination-next {\n  padding-left: 0.75em;\n  padding-right: 0.75em;\n  white-space: nowrap;\n}\n.pagination-link.is-current {\n  background-color: #3273dc;\n  border-color: #3273dc;\n  color: #fff;\n}\n.pagination-ellipsis {\n  color: #b5b5b5;\n  pointer-events: none;\n}\n.pagination-list {\n  flex-wrap: wrap;\n}\n@media screen and (max-width: 768px) {\n.pagination {\n    flex-wrap: wrap;\n}\n.pagination-previous,\n  .pagination-next {\n    flex-grow: 1;\n    flex-shrink: 1;\n}\n.pagination-list li {\n    flex-grow: 1;\n    flex-shrink: 1;\n}\n}\n@media screen and (min-width: 769px), print {\n.pagination-list {\n    flex-grow: 1;\n    flex-shrink: 1;\n    justify-content: flex-start;\n    order: 1;\n}\n.pagination-previous {\n    order: 2;\n}\n.pagination-next {\n    order: 3;\n}\n.pagination {\n    justify-content: space-between;\n}\n.pagination.is-centered .pagination-previous {\n      order: 1;\n}\n.pagination.is-centered .pagination-list {\n      justify-content: center;\n      order: 2;\n}\n.pagination.is-centered .pagination-next {\n      order: 3;\n}\n.pagination.is-right .pagination-previous {\n      order: 1;\n}\n.pagination.is-right .pagination-next {\n      order: 2;\n}\n.pagination.is-right .pagination-list {\n      justify-content: flex-end;\n      order: 3;\n}\n}\n.panel {\n  font-size: 1rem;\n}\n.panel:not(:last-child) {\n    margin-bottom: 1.5rem;\n}\n.panel-heading,\n.panel-tabs,\n.panel-block {\n  border-bottom: 1px solid #dbdbdb;\n  border-left: 1px solid #dbdbdb;\n  border-right: 1px solid #dbdbdb;\n}\n.panel-heading:first-child,\n  .panel-tabs:first-child,\n  .panel-block:first-child {\n    border-top: 1px solid #dbdbdb;\n}\n.panel-heading {\n  background-color: whitesmoke;\n  border-radius: 4px 4px 0 0;\n  color: #363636;\n  font-size: 1.25em;\n  font-weight: 300;\n  line-height: 1.25;\n  padding: 0.5em 0.75em;\n}\n.panel-tabs {\n  align-items: flex-end;\n  display: flex;\n  font-size: 0.875em;\n  justify-content: center;\n}\n.panel-tabs a {\n    border-bottom: 1px solid #dbdbdb;\n    margin-bottom: -1px;\n    padding: 0.5em;\n}\n.panel-tabs a.is-active {\n      border-bottom-color: #4a4a4a;\n      color: #363636;\n}\n.panel-list a {\n  color: #4a4a4a;\n}\n.panel-list a:hover {\n    color: #3273dc;\n}\n.panel-block {\n  align-items: center;\n  color: #363636;\n  display: flex;\n  justify-content: flex-start;\n  padding: 0.5em 0.75em;\n}\n.panel-block input[type=\"checkbox\"] {\n    margin-right: 0.75em;\n}\n.panel-block > .control {\n    flex-grow: 1;\n    flex-shrink: 1;\n    width: 100%;\n}\n.panel-block.is-wrapped {\n    flex-wrap: wrap;\n}\n.panel-block.is-active {\n    border-left-color: #3273dc;\n    color: #363636;\n}\n.panel-block.is-active .panel-icon {\n      color: #3273dc;\n}\na.panel-block,\nlabel.panel-block {\n  cursor: pointer;\n}\na.panel-block:hover,\n  label.panel-block:hover {\n    background-color: whitesmoke;\n}\n.panel-icon {\n  display: inline-block;\n  font-size: 14px;\n  height: 1em;\n  line-height: 1em;\n  text-align: center;\n  vertical-align: top;\n  width: 1em;\n  color: #7a7a7a;\n  margin-right: 0.75em;\n}\n.panel-icon .fa {\n    font-size: inherit;\n    line-height: inherit;\n}\n.tabs {\n  -webkit-overflow-scrolling: touch;\n  align-items: stretch;\n  display: flex;\n  font-size: 1rem;\n  justify-content: space-between;\n  overflow: hidden;\n  overflow-x: auto;\n  white-space: nowrap;\n}\n.tabs a {\n    align-items: center;\n    border-bottom-color: #dbdbdb;\n    border-bottom-style: solid;\n    border-bottom-width: 1px;\n    color: #4a4a4a;\n    display: flex;\n    justify-content: center;\n    margin-bottom: -1px;\n    padding: 0.5em 1em;\n    vertical-align: top;\n}\n.tabs a:hover {\n      border-bottom-color: #363636;\n      color: #363636;\n}\n.tabs li {\n    display: block;\n}\n.tabs li.is-active a {\n      border-bottom-color: #3273dc;\n      color: #3273dc;\n}\n.tabs ul {\n    align-items: center;\n    border-bottom-color: #dbdbdb;\n    border-bottom-style: solid;\n    border-bottom-width: 1px;\n    display: flex;\n    flex-grow: 1;\n    flex-shrink: 0;\n    justify-content: flex-start;\n}\n.tabs ul.is-left {\n      padding-right: 0.75em;\n}\n.tabs ul.is-center {\n      flex: none;\n      justify-content: center;\n      padding-left: 0.75em;\n      padding-right: 0.75em;\n}\n.tabs ul.is-right {\n      justify-content: flex-end;\n      padding-left: 0.75em;\n}\n.tabs .icon:first-child {\n    margin-right: 0.5em;\n}\n.tabs .icon:last-child {\n    margin-left: 0.5em;\n}\n.tabs.is-centered ul {\n    justify-content: center;\n}\n.tabs.is-right ul {\n    justify-content: flex-end;\n}\n.tabs.is-boxed a {\n    border: 1px solid transparent;\n    border-radius: 4px 4px 0 0;\n}\n.tabs.is-boxed a:hover {\n      background-color: whitesmoke;\n      border-bottom-color: #dbdbdb;\n}\n.tabs.is-boxed li.is-active a {\n    background-color: white;\n    border-color: #dbdbdb;\n    border-bottom-color: transparent !important;\n}\n.tabs.is-fullwidth li {\n    flex-grow: 1;\n    flex-shrink: 0;\n}\n.tabs.is-toggle a {\n    border-color: #dbdbdb;\n    border-style: solid;\n    border-width: 1px;\n    margin-bottom: 0;\n    position: relative;\n}\n.tabs.is-toggle a:hover {\n      background-color: whitesmoke;\n      border-color: #b5b5b5;\n      z-index: 2;\n}\n.tabs.is-toggle li + li {\n    margin-left: -1px;\n}\n.tabs.is-toggle li:first-child a {\n    border-radius: 4px 0 0 4px;\n}\n.tabs.is-toggle li:last-child a {\n    border-radius: 0 4px 4px 0;\n}\n.tabs.is-toggle li.is-active a {\n    background-color: #3273dc;\n    border-color: #3273dc;\n    color: #fff;\n    z-index: 1;\n}\n.tabs.is-toggle ul {\n    border-bottom: none;\n}\n.tabs.is-toggle.is-toggle-rounded li:first-child a {\n    border-bottom-left-radius: 290486px;\n    border-top-left-radius: 290486px;\n    padding-left: 1.25em;\n}\n.tabs.is-toggle.is-toggle-rounded li:last-child a {\n    border-bottom-right-radius: 290486px;\n    border-top-right-radius: 290486px;\n    padding-right: 1.25em;\n}\n.tabs.is-small {\n    font-size: 0.75rem;\n}\n.tabs.is-medium {\n    font-size: 1.25rem;\n}\n.tabs.is-large {\n    font-size: 1.5rem;\n}\n.column {\n  display: block;\n  flex-basis: 0;\n  flex-grow: 1;\n  flex-shrink: 1;\n  padding: 0.75rem;\n}\n.columns.is-mobile > .column.is-narrow {\n    flex: none;\n}\n.columns.is-mobile > .column.is-full {\n    flex: none;\n    width: 100%;\n}\n.columns.is-mobile > .column.is-three-quarters {\n    flex: none;\n    width: 75%;\n}\n.columns.is-mobile > .column.is-two-thirds {\n    flex: none;\n    width: 66.6666%;\n}\n.columns.is-mobile > .column.is-half {\n    flex: none;\n    width: 50%;\n}\n.columns.is-mobile > .column.is-one-third {\n    flex: none;\n    width: 33.3333%;\n}\n.columns.is-mobile > .column.is-one-quarter {\n    flex: none;\n    width: 25%;\n}\n.columns.is-mobile > .column.is-one-fifth {\n    flex: none;\n    width: 20%;\n}\n.columns.is-mobile > .column.is-two-fifths {\n    flex: none;\n    width: 40%;\n}\n.columns.is-mobile > .column.is-three-fifths {\n    flex: none;\n    width: 60%;\n}\n.columns.is-mobile > .column.is-four-fifths {\n    flex: none;\n    width: 80%;\n}\n.columns.is-mobile > .column.is-offset-three-quarters {\n    margin-left: 75%;\n}\n.columns.is-mobile > .column.is-offset-two-thirds {\n    margin-left: 66.6666%;\n}\n.columns.is-mobile > .column.is-offset-half {\n    margin-left: 50%;\n}\n.columns.is-mobile > .column.is-offset-one-third {\n    margin-left: 33.3333%;\n}\n.columns.is-mobile > .column.is-offset-one-quarter {\n    margin-left: 25%;\n}\n.columns.is-mobile > .column.is-offset-one-fifth {\n    margin-left: 20%;\n}\n.columns.is-mobile > .column.is-offset-two-fifths {\n    margin-left: 40%;\n}\n.columns.is-mobile > .column.is-offset-three-fifths {\n    margin-left: 60%;\n}\n.columns.is-mobile > .column.is-offset-four-fifths {\n    margin-left: 80%;\n}\n.columns.is-mobile > .column.is-1 {\n    flex: none;\n    width: 8.33333%;\n}\n.columns.is-mobile > .column.is-offset-1 {\n    margin-left: 8.33333%;\n}\n.columns.is-mobile > .column.is-2 {\n    flex: none;\n    width: 16.66667%;\n}\n.columns.is-mobile > .column.is-offset-2 {\n    margin-left: 16.66667%;\n}\n.columns.is-mobile > .column.is-3 {\n    flex: none;\n    width: 25%;\n}\n.columns.is-mobile > .column.is-offset-3 {\n    margin-left: 25%;\n}\n.columns.is-mobile > .column.is-4 {\n    flex: none;\n    width: 33.33333%;\n}\n.columns.is-mobile > .column.is-offset-4 {\n    margin-left: 33.33333%;\n}\n.columns.is-mobile > .column.is-5 {\n    flex: none;\n    width: 41.66667%;\n}\n.columns.is-mobile > .column.is-offset-5 {\n    margin-left: 41.66667%;\n}\n.columns.is-mobile > .column.is-6 {\n    flex: none;\n    width: 50%;\n}\n.columns.is-mobile > .column.is-offset-6 {\n    margin-left: 50%;\n}\n.columns.is-mobile > .column.is-7 {\n    flex: none;\n    width: 58.33333%;\n}\n.columns.is-mobile > .column.is-offset-7 {\n    margin-left: 58.33333%;\n}\n.columns.is-mobile > .column.is-8 {\n    flex: none;\n    width: 66.66667%;\n}\n.columns.is-mobile > .column.is-offset-8 {\n    margin-left: 66.66667%;\n}\n.columns.is-mobile > .column.is-9 {\n    flex: none;\n    width: 75%;\n}\n.columns.is-mobile > .column.is-offset-9 {\n    margin-left: 75%;\n}\n.columns.is-mobile > .column.is-10 {\n    flex: none;\n    width: 83.33333%;\n}\n.columns.is-mobile > .column.is-offset-10 {\n    margin-left: 83.33333%;\n}\n.columns.is-mobile > .column.is-11 {\n    flex: none;\n    width: 91.66667%;\n}\n.columns.is-mobile > .column.is-offset-11 {\n    margin-left: 91.66667%;\n}\n.columns.is-mobile > .column.is-12 {\n    flex: none;\n    width: 100%;\n}\n.columns.is-mobile > .column.is-offset-12 {\n    margin-left: 100%;\n}\n@media screen and (max-width: 768px) {\n.column.is-narrow-mobile {\n      flex: none;\n}\n.column.is-full-mobile {\n      flex: none;\n      width: 100%;\n}\n.column.is-three-quarters-mobile {\n      flex: none;\n      width: 75%;\n}\n.column.is-two-thirds-mobile {\n      flex: none;\n      width: 66.6666%;\n}\n.column.is-half-mobile {\n      flex: none;\n      width: 50%;\n}\n.column.is-one-third-mobile {\n      flex: none;\n      width: 33.3333%;\n}\n.column.is-one-quarter-mobile {\n      flex: none;\n      width: 25%;\n}\n.column.is-one-fifth-mobile {\n      flex: none;\n      width: 20%;\n}\n.column.is-two-fifths-mobile {\n      flex: none;\n      width: 40%;\n}\n.column.is-three-fifths-mobile {\n      flex: none;\n      width: 60%;\n}\n.column.is-four-fifths-mobile {\n      flex: none;\n      width: 80%;\n}\n.column.is-offset-three-quarters-mobile {\n      margin-left: 75%;\n}\n.column.is-offset-two-thirds-mobile {\n      margin-left: 66.6666%;\n}\n.column.is-offset-half-mobile {\n      margin-left: 50%;\n}\n.column.is-offset-one-third-mobile {\n      margin-left: 33.3333%;\n}\n.column.is-offset-one-quarter-mobile {\n      margin-left: 25%;\n}\n.column.is-offset-one-fifth-mobile {\n      margin-left: 20%;\n}\n.column.is-offset-two-fifths-mobile {\n      margin-left: 40%;\n}\n.column.is-offset-three-fifths-mobile {\n      margin-left: 60%;\n}\n.column.is-offset-four-fifths-mobile {\n      margin-left: 80%;\n}\n.column.is-1-mobile {\n      flex: none;\n      width: 8.33333%;\n}\n.column.is-offset-1-mobile {\n      margin-left: 8.33333%;\n}\n.column.is-2-mobile {\n      flex: none;\n      width: 16.66667%;\n}\n.column.is-offset-2-mobile {\n      margin-left: 16.66667%;\n}\n.column.is-3-mobile {\n      flex: none;\n      width: 25%;\n}\n.column.is-offset-3-mobile {\n      margin-left: 25%;\n}\n.column.is-4-mobile {\n      flex: none;\n      width: 33.33333%;\n}\n.column.is-offset-4-mobile {\n      margin-left: 33.33333%;\n}\n.column.is-5-mobile {\n      flex: none;\n      width: 41.66667%;\n}\n.column.is-offset-5-mobile {\n      margin-left: 41.66667%;\n}\n.column.is-6-mobile {\n      flex: none;\n      width: 50%;\n}\n.column.is-offset-6-mobile {\n      margin-left: 50%;\n}\n.column.is-7-mobile {\n      flex: none;\n      width: 58.33333%;\n}\n.column.is-offset-7-mobile {\n      margin-left: 58.33333%;\n}\n.column.is-8-mobile {\n      flex: none;\n      width: 66.66667%;\n}\n.column.is-offset-8-mobile {\n      margin-left: 66.66667%;\n}\n.column.is-9-mobile {\n      flex: none;\n      width: 75%;\n}\n.column.is-offset-9-mobile {\n      margin-left: 75%;\n}\n.column.is-10-mobile {\n      flex: none;\n      width: 83.33333%;\n}\n.column.is-offset-10-mobile {\n      margin-left: 83.33333%;\n}\n.column.is-11-mobile {\n      flex: none;\n      width: 91.66667%;\n}\n.column.is-offset-11-mobile {\n      margin-left: 91.66667%;\n}\n.column.is-12-mobile {\n      flex: none;\n      width: 100%;\n}\n.column.is-offset-12-mobile {\n      margin-left: 100%;\n}\n}\n@media screen and (min-width: 769px), print {\n.column.is-narrow, .column.is-narrow-tablet {\n      flex: none;\n}\n.column.is-full, .column.is-full-tablet {\n      flex: none;\n      width: 100%;\n}\n.column.is-three-quarters, .column.is-three-quarters-tablet {\n      flex: none;\n      width: 75%;\n}\n.column.is-two-thirds, .column.is-two-thirds-tablet {\n      flex: none;\n      width: 66.6666%;\n}\n.column.is-half, .column.is-half-tablet {\n      flex: none;\n      width: 50%;\n}\n.column.is-one-third, .column.is-one-third-tablet {\n      flex: none;\n      width: 33.3333%;\n}\n.column.is-one-quarter, .column.is-one-quarter-tablet {\n      flex: none;\n      width: 25%;\n}\n.column.is-one-fifth, .column.is-one-fifth-tablet {\n      flex: none;\n      width: 20%;\n}\n.column.is-two-fifths, .column.is-two-fifths-tablet {\n      flex: none;\n      width: 40%;\n}\n.column.is-three-fifths, .column.is-three-fifths-tablet {\n      flex: none;\n      width: 60%;\n}\n.column.is-four-fifths, .column.is-four-fifths-tablet {\n      flex: none;\n      width: 80%;\n}\n.column.is-offset-three-quarters, .column.is-offset-three-quarters-tablet {\n      margin-left: 75%;\n}\n.column.is-offset-two-thirds, .column.is-offset-two-thirds-tablet {\n      margin-left: 66.6666%;\n}\n.column.is-offset-half, .column.is-offset-half-tablet {\n      margin-left: 50%;\n}\n.column.is-offset-one-third, .column.is-offset-one-third-tablet {\n      margin-left: 33.3333%;\n}\n.column.is-offset-one-quarter, .column.is-offset-one-quarter-tablet {\n      margin-left: 25%;\n}\n.column.is-offset-one-fifth, .column.is-offset-one-fifth-tablet {\n      margin-left: 20%;\n}\n.column.is-offset-two-fifths, .column.is-offset-two-fifths-tablet {\n      margin-left: 40%;\n}\n.column.is-offset-three-fifths, .column.is-offset-three-fifths-tablet {\n      margin-left: 60%;\n}\n.column.is-offset-four-fifths, .column.is-offset-four-fifths-tablet {\n      margin-left: 80%;\n}\n.column.is-1, .column.is-1-tablet {\n      flex: none;\n      width: 8.33333%;\n}\n.column.is-offset-1, .column.is-offset-1-tablet {\n      margin-left: 8.33333%;\n}\n.column.is-2, .column.is-2-tablet {\n      flex: none;\n      width: 16.66667%;\n}\n.column.is-offset-2, .column.is-offset-2-tablet {\n      margin-left: 16.66667%;\n}\n.column.is-3, .column.is-3-tablet {\n      flex: none;\n      width: 25%;\n}\n.column.is-offset-3, .column.is-offset-3-tablet {\n      margin-left: 25%;\n}\n.column.is-4, .column.is-4-tablet {\n      flex: none;\n      width: 33.33333%;\n}\n.column.is-offset-4, .column.is-offset-4-tablet {\n      margin-left: 33.33333%;\n}\n.column.is-5, .column.is-5-tablet {\n      flex: none;\n      width: 41.66667%;\n}\n.column.is-offset-5, .column.is-offset-5-tablet {\n      margin-left: 41.66667%;\n}\n.column.is-6, .column.is-6-tablet {\n      flex: none;\n      width: 50%;\n}\n.column.is-offset-6, .column.is-offset-6-tablet {\n      margin-left: 50%;\n}\n.column.is-7, .column.is-7-tablet {\n      flex: none;\n      width: 58.33333%;\n}\n.column.is-offset-7, .column.is-offset-7-tablet {\n      margin-left: 58.33333%;\n}\n.column.is-8, .column.is-8-tablet {\n      flex: none;\n      width: 66.66667%;\n}\n.column.is-offset-8, .column.is-offset-8-tablet {\n      margin-left: 66.66667%;\n}\n.column.is-9, .column.is-9-tablet {\n      flex: none;\n      width: 75%;\n}\n.column.is-offset-9, .column.is-offset-9-tablet {\n      margin-left: 75%;\n}\n.column.is-10, .column.is-10-tablet {\n      flex: none;\n      width: 83.33333%;\n}\n.column.is-offset-10, .column.is-offset-10-tablet {\n      margin-left: 83.33333%;\n}\n.column.is-11, .column.is-11-tablet {\n      flex: none;\n      width: 91.66667%;\n}\n.column.is-offset-11, .column.is-offset-11-tablet {\n      margin-left: 91.66667%;\n}\n.column.is-12, .column.is-12-tablet {\n      flex: none;\n      width: 100%;\n}\n.column.is-offset-12, .column.is-offset-12-tablet {\n      margin-left: 100%;\n}\n}\n@media screen and (max-width: 1087px) {\n.column.is-narrow-touch {\n      flex: none;\n}\n.column.is-full-touch {\n      flex: none;\n      width: 100%;\n}\n.column.is-three-quarters-touch {\n      flex: none;\n      width: 75%;\n}\n.column.is-two-thirds-touch {\n      flex: none;\n      width: 66.6666%;\n}\n.column.is-half-touch {\n      flex: none;\n      width: 50%;\n}\n.column.is-one-third-touch {\n      flex: none;\n      width: 33.3333%;\n}\n.column.is-one-quarter-touch {\n      flex: none;\n      width: 25%;\n}\n.column.is-one-fifth-touch {\n      flex: none;\n      width: 20%;\n}\n.column.is-two-fifths-touch {\n      flex: none;\n      width: 40%;\n}\n.column.is-three-fifths-touch {\n      flex: none;\n      width: 60%;\n}\n.column.is-four-fifths-touch {\n      flex: none;\n      width: 80%;\n}\n.column.is-offset-three-quarters-touch {\n      margin-left: 75%;\n}\n.column.is-offset-two-thirds-touch {\n      margin-left: 66.6666%;\n}\n.column.is-offset-half-touch {\n      margin-left: 50%;\n}\n.column.is-offset-one-third-touch {\n      margin-left: 33.3333%;\n}\n.column.is-offset-one-quarter-touch {\n      margin-left: 25%;\n}\n.column.is-offset-one-fifth-touch {\n      margin-left: 20%;\n}\n.column.is-offset-two-fifths-touch {\n      margin-left: 40%;\n}\n.column.is-offset-three-fifths-touch {\n      margin-left: 60%;\n}\n.column.is-offset-four-fifths-touch {\n      margin-left: 80%;\n}\n.column.is-1-touch {\n      flex: none;\n      width: 8.33333%;\n}\n.column.is-offset-1-touch {\n      margin-left: 8.33333%;\n}\n.column.is-2-touch {\n      flex: none;\n      width: 16.66667%;\n}\n.column.is-offset-2-touch {\n      margin-left: 16.66667%;\n}\n.column.is-3-touch {\n      flex: none;\n      width: 25%;\n}\n.column.is-offset-3-touch {\n      margin-left: 25%;\n}\n.column.is-4-touch {\n      flex: none;\n      width: 33.33333%;\n}\n.column.is-offset-4-touch {\n      margin-left: 33.33333%;\n}\n.column.is-5-touch {\n      flex: none;\n      width: 41.66667%;\n}\n.column.is-offset-5-touch {\n      margin-left: 41.66667%;\n}\n.column.is-6-touch {\n      flex: none;\n      width: 50%;\n}\n.column.is-offset-6-touch {\n      margin-left: 50%;\n}\n.column.is-7-touch {\n      flex: none;\n      width: 58.33333%;\n}\n.column.is-offset-7-touch {\n      margin-left: 58.33333%;\n}\n.column.is-8-touch {\n      flex: none;\n      width: 66.66667%;\n}\n.column.is-offset-8-touch {\n      margin-left: 66.66667%;\n}\n.column.is-9-touch {\n      flex: none;\n      width: 75%;\n}\n.column.is-offset-9-touch {\n      margin-left: 75%;\n}\n.column.is-10-touch {\n      flex: none;\n      width: 83.33333%;\n}\n.column.is-offset-10-touch {\n      margin-left: 83.33333%;\n}\n.column.is-11-touch {\n      flex: none;\n      width: 91.66667%;\n}\n.column.is-offset-11-touch {\n      margin-left: 91.66667%;\n}\n.column.is-12-touch {\n      flex: none;\n      width: 100%;\n}\n.column.is-offset-12-touch {\n      margin-left: 100%;\n}\n}\n@media screen and (min-width: 1088px) {\n.column.is-narrow-desktop {\n      flex: none;\n}\n.column.is-full-desktop {\n      flex: none;\n      width: 100%;\n}\n.column.is-three-quarters-desktop {\n      flex: none;\n      width: 75%;\n}\n.column.is-two-thirds-desktop {\n      flex: none;\n      width: 66.6666%;\n}\n.column.is-half-desktop {\n      flex: none;\n      width: 50%;\n}\n.column.is-one-third-desktop {\n      flex: none;\n      width: 33.3333%;\n}\n.column.is-one-quarter-desktop {\n      flex: none;\n      width: 25%;\n}\n.column.is-one-fifth-desktop {\n      flex: none;\n      width: 20%;\n}\n.column.is-two-fifths-desktop {\n      flex: none;\n      width: 40%;\n}\n.column.is-three-fifths-desktop {\n      flex: none;\n      width: 60%;\n}\n.column.is-four-fifths-desktop {\n      flex: none;\n      width: 80%;\n}\n.column.is-offset-three-quarters-desktop {\n      margin-left: 75%;\n}\n.column.is-offset-two-thirds-desktop {\n      margin-left: 66.6666%;\n}\n.column.is-offset-half-desktop {\n      margin-left: 50%;\n}\n.column.is-offset-one-third-desktop {\n      margin-left: 33.3333%;\n}\n.column.is-offset-one-quarter-desktop {\n      margin-left: 25%;\n}\n.column.is-offset-one-fifth-desktop {\n      margin-left: 20%;\n}\n.column.is-offset-two-fifths-desktop {\n      margin-left: 40%;\n}\n.column.is-offset-three-fifths-desktop {\n      margin-left: 60%;\n}\n.column.is-offset-four-fifths-desktop {\n      margin-left: 80%;\n}\n.column.is-1-desktop {\n      flex: none;\n      width: 8.33333%;\n}\n.column.is-offset-1-desktop {\n      margin-left: 8.33333%;\n}\n.column.is-2-desktop {\n      flex: none;\n      width: 16.66667%;\n}\n.column.is-offset-2-desktop {\n      margin-left: 16.66667%;\n}\n.column.is-3-desktop {\n      flex: none;\n      width: 25%;\n}\n.column.is-offset-3-desktop {\n      margin-left: 25%;\n}\n.column.is-4-desktop {\n      flex: none;\n      width: 33.33333%;\n}\n.column.is-offset-4-desktop {\n      margin-left: 33.33333%;\n}\n.column.is-5-desktop {\n      flex: none;\n      width: 41.66667%;\n}\n.column.is-offset-5-desktop {\n      margin-left: 41.66667%;\n}\n.column.is-6-desktop {\n      flex: none;\n      width: 50%;\n}\n.column.is-offset-6-desktop {\n      margin-left: 50%;\n}\n.column.is-7-desktop {\n      flex: none;\n      width: 58.33333%;\n}\n.column.is-offset-7-desktop {\n      margin-left: 58.33333%;\n}\n.column.is-8-desktop {\n      flex: none;\n      width: 66.66667%;\n}\n.column.is-offset-8-desktop {\n      margin-left: 66.66667%;\n}\n.column.is-9-desktop {\n      flex: none;\n      width: 75%;\n}\n.column.is-offset-9-desktop {\n      margin-left: 75%;\n}\n.column.is-10-desktop {\n      flex: none;\n      width: 83.33333%;\n}\n.column.is-offset-10-desktop {\n      margin-left: 83.33333%;\n}\n.column.is-11-desktop {\n      flex: none;\n      width: 91.66667%;\n}\n.column.is-offset-11-desktop {\n      margin-left: 91.66667%;\n}\n.column.is-12-desktop {\n      flex: none;\n      width: 100%;\n}\n.column.is-offset-12-desktop {\n      margin-left: 100%;\n}\n}\n@media screen and (min-width: 1280px) {\n.column.is-narrow-widescreen {\n      flex: none;\n}\n.column.is-full-widescreen {\n      flex: none;\n      width: 100%;\n}\n.column.is-three-quarters-widescreen {\n      flex: none;\n      width: 75%;\n}\n.column.is-two-thirds-widescreen {\n      flex: none;\n      width: 66.6666%;\n}\n.column.is-half-widescreen {\n      flex: none;\n      width: 50%;\n}\n.column.is-one-third-widescreen {\n      flex: none;\n      width: 33.3333%;\n}\n.column.is-one-quarter-widescreen {\n      flex: none;\n      width: 25%;\n}\n.column.is-one-fifth-widescreen {\n      flex: none;\n      width: 20%;\n}\n.column.is-two-fifths-widescreen {\n      flex: none;\n      width: 40%;\n}\n.column.is-three-fifths-widescreen {\n      flex: none;\n      width: 60%;\n}\n.column.is-four-fifths-widescreen {\n      flex: none;\n      width: 80%;\n}\n.column.is-offset-three-quarters-widescreen {\n      margin-left: 75%;\n}\n.column.is-offset-two-thirds-widescreen {\n      margin-left: 66.6666%;\n}\n.column.is-offset-half-widescreen {\n      margin-left: 50%;\n}\n.column.is-offset-one-third-widescreen {\n      margin-left: 33.3333%;\n}\n.column.is-offset-one-quarter-widescreen {\n      margin-left: 25%;\n}\n.column.is-offset-one-fifth-widescreen {\n      margin-left: 20%;\n}\n.column.is-offset-two-fifths-widescreen {\n      margin-left: 40%;\n}\n.column.is-offset-three-fifths-widescreen {\n      margin-left: 60%;\n}\n.column.is-offset-four-fifths-widescreen {\n      margin-left: 80%;\n}\n.column.is-1-widescreen {\n      flex: none;\n      width: 8.33333%;\n}\n.column.is-offset-1-widescreen {\n      margin-left: 8.33333%;\n}\n.column.is-2-widescreen {\n      flex: none;\n      width: 16.66667%;\n}\n.column.is-offset-2-widescreen {\n      margin-left: 16.66667%;\n}\n.column.is-3-widescreen {\n      flex: none;\n      width: 25%;\n}\n.column.is-offset-3-widescreen {\n      margin-left: 25%;\n}\n.column.is-4-widescreen {\n      flex: none;\n      width: 33.33333%;\n}\n.column.is-offset-4-widescreen {\n      margin-left: 33.33333%;\n}\n.column.is-5-widescreen {\n      flex: none;\n      width: 41.66667%;\n}\n.column.is-offset-5-widescreen {\n      margin-left: 41.66667%;\n}\n.column.is-6-widescreen {\n      flex: none;\n      width: 50%;\n}\n.column.is-offset-6-widescreen {\n      margin-left: 50%;\n}\n.column.is-7-widescreen {\n      flex: none;\n      width: 58.33333%;\n}\n.column.is-offset-7-widescreen {\n      margin-left: 58.33333%;\n}\n.column.is-8-widescreen {\n      flex: none;\n      width: 66.66667%;\n}\n.column.is-offset-8-widescreen {\n      margin-left: 66.66667%;\n}\n.column.is-9-widescreen {\n      flex: none;\n      width: 75%;\n}\n.column.is-offset-9-widescreen {\n      margin-left: 75%;\n}\n.column.is-10-widescreen {\n      flex: none;\n      width: 83.33333%;\n}\n.column.is-offset-10-widescreen {\n      margin-left: 83.33333%;\n}\n.column.is-11-widescreen {\n      flex: none;\n      width: 91.66667%;\n}\n.column.is-offset-11-widescreen {\n      margin-left: 91.66667%;\n}\n.column.is-12-widescreen {\n      flex: none;\n      width: 100%;\n}\n.column.is-offset-12-widescreen {\n      margin-left: 100%;\n}\n}\n@media screen and (min-width: 1472px) {\n.column.is-narrow-fullhd {\n      flex: none;\n}\n.column.is-full-fullhd {\n      flex: none;\n      width: 100%;\n}\n.column.is-three-quarters-fullhd {\n      flex: none;\n      width: 75%;\n}\n.column.is-two-thirds-fullhd {\n      flex: none;\n      width: 66.6666%;\n}\n.column.is-half-fullhd {\n      flex: none;\n      width: 50%;\n}\n.column.is-one-third-fullhd {\n      flex: none;\n      width: 33.3333%;\n}\n.column.is-one-quarter-fullhd {\n      flex: none;\n      width: 25%;\n}\n.column.is-one-fifth-fullhd {\n      flex: none;\n      width: 20%;\n}\n.column.is-two-fifths-fullhd {\n      flex: none;\n      width: 40%;\n}\n.column.is-three-fifths-fullhd {\n      flex: none;\n      width: 60%;\n}\n.column.is-four-fifths-fullhd {\n      flex: none;\n      width: 80%;\n}\n.column.is-offset-three-quarters-fullhd {\n      margin-left: 75%;\n}\n.column.is-offset-two-thirds-fullhd {\n      margin-left: 66.6666%;\n}\n.column.is-offset-half-fullhd {\n      margin-left: 50%;\n}\n.column.is-offset-one-third-fullhd {\n      margin-left: 33.3333%;\n}\n.column.is-offset-one-quarter-fullhd {\n      margin-left: 25%;\n}\n.column.is-offset-one-fifth-fullhd {\n      margin-left: 20%;\n}\n.column.is-offset-two-fifths-fullhd {\n      margin-left: 40%;\n}\n.column.is-offset-three-fifths-fullhd {\n      margin-left: 60%;\n}\n.column.is-offset-four-fifths-fullhd {\n      margin-left: 80%;\n}\n.column.is-1-fullhd {\n      flex: none;\n      width: 8.33333%;\n}\n.column.is-offset-1-fullhd {\n      margin-left: 8.33333%;\n}\n.column.is-2-fullhd {\n      flex: none;\n      width: 16.66667%;\n}\n.column.is-offset-2-fullhd {\n      margin-left: 16.66667%;\n}\n.column.is-3-fullhd {\n      flex: none;\n      width: 25%;\n}\n.column.is-offset-3-fullhd {\n      margin-left: 25%;\n}\n.column.is-4-fullhd {\n      flex: none;\n      width: 33.33333%;\n}\n.column.is-offset-4-fullhd {\n      margin-left: 33.33333%;\n}\n.column.is-5-fullhd {\n      flex: none;\n      width: 41.66667%;\n}\n.column.is-offset-5-fullhd {\n      margin-left: 41.66667%;\n}\n.column.is-6-fullhd {\n      flex: none;\n      width: 50%;\n}\n.column.is-offset-6-fullhd {\n      margin-left: 50%;\n}\n.column.is-7-fullhd {\n      flex: none;\n      width: 58.33333%;\n}\n.column.is-offset-7-fullhd {\n      margin-left: 58.33333%;\n}\n.column.is-8-fullhd {\n      flex: none;\n      width: 66.66667%;\n}\n.column.is-offset-8-fullhd {\n      margin-left: 66.66667%;\n}\n.column.is-9-fullhd {\n      flex: none;\n      width: 75%;\n}\n.column.is-offset-9-fullhd {\n      margin-left: 75%;\n}\n.column.is-10-fullhd {\n      flex: none;\n      width: 83.33333%;\n}\n.column.is-offset-10-fullhd {\n      margin-left: 83.33333%;\n}\n.column.is-11-fullhd {\n      flex: none;\n      width: 91.66667%;\n}\n.column.is-offset-11-fullhd {\n      margin-left: 91.66667%;\n}\n.column.is-12-fullhd {\n      flex: none;\n      width: 100%;\n}\n.column.is-offset-12-fullhd {\n      margin-left: 100%;\n}\n}\n.columns {\n  margin-left: -0.75rem;\n  margin-right: -0.75rem;\n  margin-top: -0.75rem;\n}\n.columns:last-child {\n    margin-bottom: -0.75rem;\n}\n.columns:not(:last-child) {\n    margin-bottom: calc(1.5rem - 0.75rem);\n}\n.columns.is-centered {\n    justify-content: center;\n}\n.columns.is-gapless {\n    margin-left: 0;\n    margin-right: 0;\n    margin-top: 0;\n}\n.columns.is-gapless > .column {\n      margin: 0;\n      padding: 0 !important;\n}\n.columns.is-gapless:not(:last-child) {\n      margin-bottom: 1.5rem;\n}\n.columns.is-gapless:last-child {\n      margin-bottom: 0;\n}\n.columns.is-mobile {\n    display: flex;\n}\n.columns.is-multiline {\n    flex-wrap: wrap;\n}\n.columns.is-vcentered {\n    align-items: center;\n}\n@media screen and (min-width: 769px), print {\n.columns:not(.is-desktop) {\n      display: flex;\n}\n}\n@media screen and (min-width: 1088px) {\n.columns.is-desktop {\n      display: flex;\n}\n}\n.columns.is-variable {\n  --columnGap: 0.75rem;\n  margin-left: calc(-1 * var(--columnGap));\n  margin-right: calc(-1 * var(--columnGap));\n}\n.columns.is-variable .column {\n    padding-left: var(--columnGap);\n    padding-right: var(--columnGap);\n}\n.columns.is-variable.is-0 {\n    --columnGap: 0rem;\n}\n.columns.is-variable.is-1 {\n    --columnGap: 0.25rem;\n}\n.columns.is-variable.is-2 {\n    --columnGap: 0.5rem;\n}\n.columns.is-variable.is-3 {\n    --columnGap: 0.75rem;\n}\n.columns.is-variable.is-4 {\n    --columnGap: 1rem;\n}\n.columns.is-variable.is-5 {\n    --columnGap: 1.25rem;\n}\n.columns.is-variable.is-6 {\n    --columnGap: 1.5rem;\n}\n.columns.is-variable.is-7 {\n    --columnGap: 1.75rem;\n}\n.columns.is-variable.is-8 {\n    --columnGap: 2rem;\n}\n.tile {\n  align-items: stretch;\n  display: block;\n  flex-basis: 0;\n  flex-grow: 1;\n  flex-shrink: 1;\n  min-height: min-content;\n}\n.tile.is-ancestor {\n    margin-left: -0.75rem;\n    margin-right: -0.75rem;\n    margin-top: -0.75rem;\n}\n.tile.is-ancestor:last-child {\n      margin-bottom: -0.75rem;\n}\n.tile.is-ancestor:not(:last-child) {\n      margin-bottom: 0.75rem;\n}\n.tile.is-child {\n    margin: 0 !important;\n}\n.tile.is-parent {\n    padding: 0.75rem;\n}\n.tile.is-vertical {\n    flex-direction: column;\n}\n.tile.is-vertical > .tile.is-child:not(:last-child) {\n      margin-bottom: 1.5rem !important;\n}\n@media screen and (min-width: 769px), print {\n.tile:not(.is-child) {\n      display: flex;\n}\n.tile.is-1 {\n      flex: none;\n      width: 8.33333%;\n}\n.tile.is-2 {\n      flex: none;\n      width: 16.66667%;\n}\n.tile.is-3 {\n      flex: none;\n      width: 25%;\n}\n.tile.is-4 {\n      flex: none;\n      width: 33.33333%;\n}\n.tile.is-5 {\n      flex: none;\n      width: 41.66667%;\n}\n.tile.is-6 {\n      flex: none;\n      width: 50%;\n}\n.tile.is-7 {\n      flex: none;\n      width: 58.33333%;\n}\n.tile.is-8 {\n      flex: none;\n      width: 66.66667%;\n}\n.tile.is-9 {\n      flex: none;\n      width: 75%;\n}\n.tile.is-10 {\n      flex: none;\n      width: 83.33333%;\n}\n.tile.is-11 {\n      flex: none;\n      width: 91.66667%;\n}\n.tile.is-12 {\n      flex: none;\n      width: 100%;\n}\n}\n.hero {\n  align-items: stretch;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.hero .navbar {\n    background: none;\n}\n.hero .tabs ul {\n    border-bottom: none;\n}\n.hero.is-white {\n    background-color: white;\n    color: #0a0a0a;\n}\n.hero.is-white a:not(.button):not(.dropdown-item):not(.tag),\n    .hero.is-white strong {\n      color: inherit;\n}\n.hero.is-white .title {\n      color: #0a0a0a;\n}\n.hero.is-white .subtitle {\n      color: rgba(10, 10, 10, 0.9);\n}\n.hero.is-white .subtitle a:not(.button),\n      .hero.is-white .subtitle strong {\n        color: #0a0a0a;\n}\n@media screen and (max-width: 1087px) {\n.hero.is-white .navbar-menu {\n        background-color: white;\n}\n}\n.hero.is-white .navbar-item,\n    .hero.is-white .navbar-link {\n      color: rgba(10, 10, 10, 0.7);\n}\n.hero.is-white a.navbar-item:hover, .hero.is-white a.navbar-item.is-active,\n    .hero.is-white .navbar-link:hover,\n    .hero.is-white .navbar-link.is-active {\n      background-color: #f2f2f2;\n      color: #0a0a0a;\n}\n.hero.is-white .tabs a {\n      color: #0a0a0a;\n      opacity: 0.9;\n}\n.hero.is-white .tabs a:hover {\n        opacity: 1;\n}\n.hero.is-white .tabs li.is-active a {\n      opacity: 1;\n}\n.hero.is-white .tabs.is-boxed a, .hero.is-white .tabs.is-toggle a {\n      color: #0a0a0a;\n}\n.hero.is-white .tabs.is-boxed a:hover, .hero.is-white .tabs.is-toggle a:hover {\n        background-color: rgba(10, 10, 10, 0.1);\n}\n.hero.is-white .tabs.is-boxed li.is-active a, .hero.is-white .tabs.is-boxed li.is-active a:hover, .hero.is-white .tabs.is-toggle li.is-active a, .hero.is-white .tabs.is-toggle li.is-active a:hover {\n      background-color: #0a0a0a;\n      border-color: #0a0a0a;\n      color: white;\n}\n.hero.is-white.is-bold {\n      background-image: linear-gradient(141deg, #e6e6e6 0%, white 71%, white 100%);\n}\n@media screen and (max-width: 768px) {\n.hero.is-white.is-bold .navbar-menu {\n          background-image: linear-gradient(141deg, #e6e6e6 0%, white 71%, white 100%);\n}\n}\n.hero.is-black {\n    background-color: #0a0a0a;\n    color: white;\n}\n.hero.is-black a:not(.button):not(.dropdown-item):not(.tag),\n    .hero.is-black strong {\n      color: inherit;\n}\n.hero.is-black .title {\n      color: white;\n}\n.hero.is-black .subtitle {\n      color: rgba(255, 255, 255, 0.9);\n}\n.hero.is-black .subtitle a:not(.button),\n      .hero.is-black .subtitle strong {\n        color: white;\n}\n@media screen and (max-width: 1087px) {\n.hero.is-black .navbar-menu {\n        background-color: #0a0a0a;\n}\n}\n.hero.is-black .navbar-item,\n    .hero.is-black .navbar-link {\n      color: rgba(255, 255, 255, 0.7);\n}\n.hero.is-black a.navbar-item:hover, .hero.is-black a.navbar-item.is-active,\n    .hero.is-black .navbar-link:hover,\n    .hero.is-black .navbar-link.is-active {\n      background-color: black;\n      color: white;\n}\n.hero.is-black .tabs a {\n      color: white;\n      opacity: 0.9;\n}\n.hero.is-black .tabs a:hover {\n        opacity: 1;\n}\n.hero.is-black .tabs li.is-active a {\n      opacity: 1;\n}\n.hero.is-black .tabs.is-boxed a, .hero.is-black .tabs.is-toggle a {\n      color: white;\n}\n.hero.is-black .tabs.is-boxed a:hover, .hero.is-black .tabs.is-toggle a:hover {\n        background-color: rgba(10, 10, 10, 0.1);\n}\n.hero.is-black .tabs.is-boxed li.is-active a, .hero.is-black .tabs.is-boxed li.is-active a:hover, .hero.is-black .tabs.is-toggle li.is-active a, .hero.is-black .tabs.is-toggle li.is-active a:hover {\n      background-color: white;\n      border-color: white;\n      color: #0a0a0a;\n}\n.hero.is-black.is-bold {\n      background-image: linear-gradient(141deg, black 0%, #0a0a0a 71%, #181616 100%);\n}\n@media screen and (max-width: 768px) {\n.hero.is-black.is-bold .navbar-menu {\n          background-image: linear-gradient(141deg, black 0%, #0a0a0a 71%, #181616 100%);\n}\n}\n.hero.is-light {\n    background-color: whitesmoke;\n    color: #363636;\n}\n.hero.is-light a:not(.button):not(.dropdown-item):not(.tag),\n    .hero.is-light strong {\n      color: inherit;\n}\n.hero.is-light .title {\n      color: #363636;\n}\n.hero.is-light .subtitle {\n      color: rgba(54, 54, 54, 0.9);\n}\n.hero.is-light .subtitle a:not(.button),\n      .hero.is-light .subtitle strong {\n        color: #363636;\n}\n@media screen and (max-width: 1087px) {\n.hero.is-light .navbar-menu {\n        background-color: whitesmoke;\n}\n}\n.hero.is-light .navbar-item,\n    .hero.is-light .navbar-link {\n      color: rgba(54, 54, 54, 0.7);\n}\n.hero.is-light a.navbar-item:hover, .hero.is-light a.navbar-item.is-active,\n    .hero.is-light .navbar-link:hover,\n    .hero.is-light .navbar-link.is-active {\n      background-color: #e8e8e8;\n      color: #363636;\n}\n.hero.is-light .tabs a {\n      color: #363636;\n      opacity: 0.9;\n}\n.hero.is-light .tabs a:hover {\n        opacity: 1;\n}\n.hero.is-light .tabs li.is-active a {\n      opacity: 1;\n}\n.hero.is-light .tabs.is-boxed a, .hero.is-light .tabs.is-toggle a {\n      color: #363636;\n}\n.hero.is-light .tabs.is-boxed a:hover, .hero.is-light .tabs.is-toggle a:hover {\n        background-color: rgba(10, 10, 10, 0.1);\n}\n.hero.is-light .tabs.is-boxed li.is-active a, .hero.is-light .tabs.is-boxed li.is-active a:hover, .hero.is-light .tabs.is-toggle li.is-active a, .hero.is-light .tabs.is-toggle li.is-active a:hover {\n      background-color: #363636;\n      border-color: #363636;\n      color: whitesmoke;\n}\n.hero.is-light.is-bold {\n      background-image: linear-gradient(141deg, #dfd8d9 0%, whitesmoke 71%, white 100%);\n}\n@media screen and (max-width: 768px) {\n.hero.is-light.is-bold .navbar-menu {\n          background-image: linear-gradient(141deg, #dfd8d9 0%, whitesmoke 71%, white 100%);\n}\n}\n.hero.is-dark {\n    background-color: #363636;\n    color: whitesmoke;\n}\n.hero.is-dark a:not(.button):not(.dropdown-item):not(.tag),\n    .hero.is-dark strong {\n      color: inherit;\n}\n.hero.is-dark .title {\n      color: whitesmoke;\n}\n.hero.is-dark .subtitle {\n      color: rgba(245, 245, 245, 0.9);\n}\n.hero.is-dark .subtitle a:not(.button),\n      .hero.is-dark .subtitle strong {\n        color: whitesmoke;\n}\n@media screen and (max-width: 1087px) {\n.hero.is-dark .navbar-menu {\n        background-color: #363636;\n}\n}\n.hero.is-dark .navbar-item,\n    .hero.is-dark .navbar-link {\n      color: rgba(245, 245, 245, 0.7);\n}\n.hero.is-dark a.navbar-item:hover, .hero.is-dark a.navbar-item.is-active,\n    .hero.is-dark .navbar-link:hover,\n    .hero.is-dark .navbar-link.is-active {\n      background-color: #292929;\n      color: whitesmoke;\n}\n.hero.is-dark .tabs a {\n      color: whitesmoke;\n      opacity: 0.9;\n}\n.hero.is-dark .tabs a:hover {\n        opacity: 1;\n}\n.hero.is-dark .tabs li.is-active a {\n      opacity: 1;\n}\n.hero.is-dark .tabs.is-boxed a, .hero.is-dark .tabs.is-toggle a {\n      color: whitesmoke;\n}\n.hero.is-dark .tabs.is-boxed a:hover, .hero.is-dark .tabs.is-toggle a:hover {\n        background-color: rgba(10, 10, 10, 0.1);\n}\n.hero.is-dark .tabs.is-boxed li.is-active a, .hero.is-dark .tabs.is-boxed li.is-active a:hover, .hero.is-dark .tabs.is-toggle li.is-active a, .hero.is-dark .tabs.is-toggle li.is-active a:hover {\n      background-color: whitesmoke;\n      border-color: whitesmoke;\n      color: #363636;\n}\n.hero.is-dark.is-bold {\n      background-image: linear-gradient(141deg, #1f191a 0%, #363636 71%, #46403f 100%);\n}\n@media screen and (max-width: 768px) {\n.hero.is-dark.is-bold .navbar-menu {\n          background-image: linear-gradient(141deg, #1f191a 0%, #363636 71%, #46403f 100%);\n}\n}\n.hero.is-primary {\n    background-color: #287ab1;\n    color: #fff;\n}\n.hero.is-primary a:not(.button):not(.dropdown-item):not(.tag),\n    .hero.is-primary strong {\n      color: inherit;\n}\n.hero.is-primary .title {\n      color: #fff;\n}\n.hero.is-primary .subtitle {\n      color: rgba(255, 255, 255, 0.9);\n}\n.hero.is-primary .subtitle a:not(.button),\n      .hero.is-primary .subtitle strong {\n        color: #fff;\n}\n@media screen and (max-width: 1087px) {\n.hero.is-primary .navbar-menu {\n        background-color: #287ab1;\n}\n}\n.hero.is-primary .navbar-item,\n    .hero.is-primary .navbar-link {\n      color: rgba(255, 255, 255, 0.7);\n}\n.hero.is-primary a.navbar-item:hover, .hero.is-primary a.navbar-item.is-active,\n    .hero.is-primary .navbar-link:hover,\n    .hero.is-primary .navbar-link.is-active {\n      background-color: #236c9c;\n      color: #fff;\n}\n.hero.is-primary .tabs a {\n      color: #fff;\n      opacity: 0.9;\n}\n.hero.is-primary .tabs a:hover {\n        opacity: 1;\n}\n.hero.is-primary .tabs li.is-active a {\n      opacity: 1;\n}\n.hero.is-primary .tabs.is-boxed a, .hero.is-primary .tabs.is-toggle a {\n      color: #fff;\n}\n.hero.is-primary .tabs.is-boxed a:hover, .hero.is-primary .tabs.is-toggle a:hover {\n        background-color: rgba(10, 10, 10, 0.1);\n}\n.hero.is-primary .tabs.is-boxed li.is-active a, .hero.is-primary .tabs.is-boxed li.is-active a:hover, .hero.is-primary .tabs.is-toggle li.is-active a, .hero.is-primary .tabs.is-toggle li.is-active a:hover {\n      background-color: #fff;\n      border-color: #fff;\n      color: #287ab1;\n}\n.hero.is-primary.is-bold {\n      background-image: linear-gradient(141deg, #167390 0%, #287ab1 71%, #276ecc 100%);\n}\n@media screen and (max-width: 768px) {\n.hero.is-primary.is-bold .navbar-menu {\n          background-image: linear-gradient(141deg, #167390 0%, #287ab1 71%, #276ecc 100%);\n}\n}\n.hero.is-link {\n    background-color: #3273dc;\n    color: #fff;\n}\n.hero.is-link a:not(.button):not(.dropdown-item):not(.tag),\n    .hero.is-link strong {\n      color: inherit;\n}\n.hero.is-link .title {\n      color: #fff;\n}\n.hero.is-link .subtitle {\n      color: rgba(255, 255, 255, 0.9);\n}\n.hero.is-link .subtitle a:not(.button),\n      .hero.is-link .subtitle strong {\n        color: #fff;\n}\n@media screen and (max-width: 1087px) {\n.hero.is-link .navbar-menu {\n        background-color: #3273dc;\n}\n}\n.hero.is-link .navbar-item,\n    .hero.is-link .navbar-link {\n      color: rgba(255, 255, 255, 0.7);\n}\n.hero.is-link a.navbar-item:hover, .hero.is-link a.navbar-item.is-active,\n    .hero.is-link .navbar-link:hover,\n    .hero.is-link .navbar-link.is-active {\n      background-color: #2366d1;\n      color: #fff;\n}\n.hero.is-link .tabs a {\n      color: #fff;\n      opacity: 0.9;\n}\n.hero.is-link .tabs a:hover {\n        opacity: 1;\n}\n.hero.is-link .tabs li.is-active a {\n      opacity: 1;\n}\n.hero.is-link .tabs.is-boxed a, .hero.is-link .tabs.is-toggle a {\n      color: #fff;\n}\n.hero.is-link .tabs.is-boxed a:hover, .hero.is-link .tabs.is-toggle a:hover {\n        background-color: rgba(10, 10, 10, 0.1);\n}\n.hero.is-link .tabs.is-boxed li.is-active a, .hero.is-link .tabs.is-boxed li.is-active a:hover, .hero.is-link .tabs.is-toggle li.is-active a, .hero.is-link .tabs.is-toggle li.is-active a:hover {\n      background-color: #fff;\n      border-color: #fff;\n      color: #3273dc;\n}\n.hero.is-link.is-bold {\n      background-image: linear-gradient(141deg, #1577c6 0%, #3273dc 71%, #4366e5 100%);\n}\n@media screen and (max-width: 768px) {\n.hero.is-link.is-bold .navbar-menu {\n          background-image: linear-gradient(141deg, #1577c6 0%, #3273dc 71%, #4366e5 100%);\n}\n}\n.hero.is-info {\n    background-color: #209cee;\n    color: #fff;\n}\n.hero.is-info a:not(.button):not(.dropdown-item):not(.tag),\n    .hero.is-info strong {\n      color: inherit;\n}\n.hero.is-info .title {\n      color: #fff;\n}\n.hero.is-info .subtitle {\n      color: rgba(255, 255, 255, 0.9);\n}\n.hero.is-info .subtitle a:not(.button),\n      .hero.is-info .subtitle strong {\n        color: #fff;\n}\n@media screen and (max-width: 1087px) {\n.hero.is-info .navbar-menu {\n        background-color: #209cee;\n}\n}\n.hero.is-info .navbar-item,\n    .hero.is-info .navbar-link {\n      color: rgba(255, 255, 255, 0.7);\n}\n.hero.is-info a.navbar-item:hover, .hero.is-info a.navbar-item.is-active,\n    .hero.is-info .navbar-link:hover,\n    .hero.is-info .navbar-link.is-active {\n      background-color: #118fe4;\n      color: #fff;\n}\n.hero.is-info .tabs a {\n      color: #fff;\n      opacity: 0.9;\n}\n.hero.is-info .tabs a:hover {\n        opacity: 1;\n}\n.hero.is-info .tabs li.is-active a {\n      opacity: 1;\n}\n.hero.is-info .tabs.is-boxed a, .hero.is-info .tabs.is-toggle a {\n      color: #fff;\n}\n.hero.is-info .tabs.is-boxed a:hover, .hero.is-info .tabs.is-toggle a:hover {\n        background-color: rgba(10, 10, 10, 0.1);\n}\n.hero.is-info .tabs.is-boxed li.is-active a, .hero.is-info .tabs.is-boxed li.is-active a:hover, .hero.is-info .tabs.is-toggle li.is-active a, .hero.is-info .tabs.is-toggle li.is-active a:hover {\n      background-color: #fff;\n      border-color: #fff;\n      color: #209cee;\n}\n.hero.is-info.is-bold {\n      background-image: linear-gradient(141deg, #04a6d7 0%, #209cee 71%, #3287f5 100%);\n}\n@media screen and (max-width: 768px) {\n.hero.is-info.is-bold .navbar-menu {\n          background-image: linear-gradient(141deg, #04a6d7 0%, #209cee 71%, #3287f5 100%);\n}\n}\n.hero.is-success {\n    background-color: #23d160;\n    color: #fff;\n}\n.hero.is-success a:not(.button):not(.dropdown-item):not(.tag),\n    .hero.is-success strong {\n      color: inherit;\n}\n.hero.is-success .title {\n      color: #fff;\n}\n.hero.is-success .subtitle {\n      color: rgba(255, 255, 255, 0.9);\n}\n.hero.is-success .subtitle a:not(.button),\n      .hero.is-success .subtitle strong {\n        color: #fff;\n}\n@media screen and (max-width: 1087px) {\n.hero.is-success .navbar-menu {\n        background-color: #23d160;\n}\n}\n.hero.is-success .navbar-item,\n    .hero.is-success .navbar-link {\n      color: rgba(255, 255, 255, 0.7);\n}\n.hero.is-success a.navbar-item:hover, .hero.is-success a.navbar-item.is-active,\n    .hero.is-success .navbar-link:hover,\n    .hero.is-success .navbar-link.is-active {\n      background-color: #20bc56;\n      color: #fff;\n}\n.hero.is-success .tabs a {\n      color: #fff;\n      opacity: 0.9;\n}\n.hero.is-success .tabs a:hover {\n        opacity: 1;\n}\n.hero.is-success .tabs li.is-active a {\n      opacity: 1;\n}\n.hero.is-success .tabs.is-boxed a, .hero.is-success .tabs.is-toggle a {\n      color: #fff;\n}\n.hero.is-success .tabs.is-boxed a:hover, .hero.is-success .tabs.is-toggle a:hover {\n        background-color: rgba(10, 10, 10, 0.1);\n}\n.hero.is-success .tabs.is-boxed li.is-active a, .hero.is-success .tabs.is-boxed li.is-active a:hover, .hero.is-success .tabs.is-toggle li.is-active a, .hero.is-success .tabs.is-toggle li.is-active a:hover {\n      background-color: #fff;\n      border-color: #fff;\n      color: #23d160;\n}\n.hero.is-success.is-bold {\n      background-image: linear-gradient(141deg, #12af2f 0%, #23d160 71%, #2ce28a 100%);\n}\n@media screen and (max-width: 768px) {\n.hero.is-success.is-bold .navbar-menu {\n          background-image: linear-gradient(141deg, #12af2f 0%, #23d160 71%, #2ce28a 100%);\n}\n}\n.hero.is-warning {\n    background-color: #ffdd57;\n    color: rgba(0, 0, 0, 0.7);\n}\n.hero.is-warning a:not(.button):not(.dropdown-item):not(.tag),\n    .hero.is-warning strong {\n      color: inherit;\n}\n.hero.is-warning .title {\n      color: rgba(0, 0, 0, 0.7);\n}\n.hero.is-warning .subtitle {\n      color: rgba(0, 0, 0, 0.9);\n}\n.hero.is-warning .subtitle a:not(.button),\n      .hero.is-warning .subtitle strong {\n        color: rgba(0, 0, 0, 0.7);\n}\n@media screen and (max-width: 1087px) {\n.hero.is-warning .navbar-menu {\n        background-color: #ffdd57;\n}\n}\n.hero.is-warning .navbar-item,\n    .hero.is-warning .navbar-link {\n      color: rgba(0, 0, 0, 0.7);\n}\n.hero.is-warning a.navbar-item:hover, .hero.is-warning a.navbar-item.is-active,\n    .hero.is-warning .navbar-link:hover,\n    .hero.is-warning .navbar-link.is-active {\n      background-color: #ffd83d;\n      color: rgba(0, 0, 0, 0.7);\n}\n.hero.is-warning .tabs a {\n      color: rgba(0, 0, 0, 0.7);\n      opacity: 0.9;\n}\n.hero.is-warning .tabs a:hover {\n        opacity: 1;\n}\n.hero.is-warning .tabs li.is-active a {\n      opacity: 1;\n}\n.hero.is-warning .tabs.is-boxed a, .hero.is-warning .tabs.is-toggle a {\n      color: rgba(0, 0, 0, 0.7);\n}\n.hero.is-warning .tabs.is-boxed a:hover, .hero.is-warning .tabs.is-toggle a:hover {\n        background-color: rgba(10, 10, 10, 0.1);\n}\n.hero.is-warning .tabs.is-boxed li.is-active a, .hero.is-warning .tabs.is-boxed li.is-active a:hover, .hero.is-warning .tabs.is-toggle li.is-active a, .hero.is-warning .tabs.is-toggle li.is-active a:hover {\n      background-color: rgba(0, 0, 0, 0.7);\n      border-color: rgba(0, 0, 0, 0.7);\n      color: #ffdd57;\n}\n.hero.is-warning.is-bold {\n      background-image: linear-gradient(141deg, #ffaf24 0%, #ffdd57 71%, #fffa70 100%);\n}\n@media screen and (max-width: 768px) {\n.hero.is-warning.is-bold .navbar-menu {\n          background-image: linear-gradient(141deg, #ffaf24 0%, #ffdd57 71%, #fffa70 100%);\n}\n}\n.hero.is-danger {\n    background-color: #ff3860;\n    color: #fff;\n}\n.hero.is-danger a:not(.button):not(.dropdown-item):not(.tag),\n    .hero.is-danger strong {\n      color: inherit;\n}\n.hero.is-danger .title {\n      color: #fff;\n}\n.hero.is-danger .subtitle {\n      color: rgba(255, 255, 255, 0.9);\n}\n.hero.is-danger .subtitle a:not(.button),\n      .hero.is-danger .subtitle strong {\n        color: #fff;\n}\n@media screen and (max-width: 1087px) {\n.hero.is-danger .navbar-menu {\n        background-color: #ff3860;\n}\n}\n.hero.is-danger .navbar-item,\n    .hero.is-danger .navbar-link {\n      color: rgba(255, 255, 255, 0.7);\n}\n.hero.is-danger a.navbar-item:hover, .hero.is-danger a.navbar-item.is-active,\n    .hero.is-danger .navbar-link:hover,\n    .hero.is-danger .navbar-link.is-active {\n      background-color: #ff1f4b;\n      color: #fff;\n}\n.hero.is-danger .tabs a {\n      color: #fff;\n      opacity: 0.9;\n}\n.hero.is-danger .tabs a:hover {\n        opacity: 1;\n}\n.hero.is-danger .tabs li.is-active a {\n      opacity: 1;\n}\n.hero.is-danger .tabs.is-boxed a, .hero.is-danger .tabs.is-toggle a {\n      color: #fff;\n}\n.hero.is-danger .tabs.is-boxed a:hover, .hero.is-danger .tabs.is-toggle a:hover {\n        background-color: rgba(10, 10, 10, 0.1);\n}\n.hero.is-danger .tabs.is-boxed li.is-active a, .hero.is-danger .tabs.is-boxed li.is-active a:hover, .hero.is-danger .tabs.is-toggle li.is-active a, .hero.is-danger .tabs.is-toggle li.is-active a:hover {\n      background-color: #fff;\n      border-color: #fff;\n      color: #ff3860;\n}\n.hero.is-danger.is-bold {\n      background-image: linear-gradient(141deg, #ff0561 0%, #ff3860 71%, #ff5257 100%);\n}\n@media screen and (max-width: 768px) {\n.hero.is-danger.is-bold .navbar-menu {\n          background-image: linear-gradient(141deg, #ff0561 0%, #ff3860 71%, #ff5257 100%);\n}\n}\n.hero.is-small .hero-body {\n    padding-bottom: 1.5rem;\n    padding-top: 1.5rem;\n}\n@media screen and (min-width: 769px), print {\n.hero.is-medium .hero-body {\n      padding-bottom: 9rem;\n      padding-top: 9rem;\n}\n}\n@media screen and (min-width: 769px), print {\n.hero.is-large .hero-body {\n      padding-bottom: 18rem;\n      padding-top: 18rem;\n}\n}\n.hero.is-halfheight .hero-body, .hero.is-fullheight .hero-body {\n    align-items: center;\n    display: flex;\n}\n.hero.is-halfheight .hero-body > .container, .hero.is-fullheight .hero-body > .container {\n      flex-grow: 1;\n      flex-shrink: 1;\n}\n.hero.is-halfheight {\n    min-height: 50vh;\n}\n.hero.is-fullheight {\n    min-height: 100vh;\n}\n.hero-video {\n  overflow: hidden;\n}\n.hero-video video {\n    left: 50%;\n    min-height: 100%;\n    min-width: 100%;\n    position: absolute;\n    top: 50%;\n    transform: translate3d(-50%, -50%, 0);\n}\n.hero-video.is-transparent {\n    opacity: 0.3;\n}\n@media screen and (max-width: 768px) {\n.hero-video {\n      display: none;\n}\n}\n.hero-buttons {\n  margin-top: 1.5rem;\n}\n@media screen and (max-width: 768px) {\n.hero-buttons .button {\n      display: flex;\n}\n.hero-buttons .button:not(:last-child) {\n        margin-bottom: 0.75rem;\n}\n}\n@media screen and (min-width: 769px), print {\n.hero-buttons {\n      display: flex;\n      justify-content: center;\n}\n.hero-buttons .button:not(:last-child) {\n        margin-right: 1.5rem;\n}\n}\n.hero-head,\n.hero-foot {\n  flex-grow: 0;\n  flex-shrink: 0;\n}\n.hero-body {\n  flex-grow: 1;\n  flex-shrink: 0;\n  padding: 3rem 1.5rem;\n}\n.section {\n  padding: 3rem 1.5rem;\n}\n@media screen and (min-width: 1088px) {\n.section.is-medium {\n      padding: 9rem 1.5rem;\n}\n.section.is-large {\n      padding: 18rem 1.5rem;\n}\n}\n.footer {\n  background-color: #fafafa;\n  padding: 3rem 1.5rem 6rem;\n}\n.columns {\n  flex-wrap: wrap;\n}\n.hero.welcome.is-info {\n  background: linear-gradient(to right, #5B86E5, #36D1DC);\n}\n.fa-globe {\n  width: 50%;\n}\n", ""]);

// exports


/***/ }),
/* 9 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(11)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),
/* 11 */
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__AppHeader_vue__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__AppFooter_vue__ = __webpack_require__(15);
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
  components: {
    'app-header': __WEBPACK_IMPORTED_MODULE_0__AppHeader_vue__["a" /* default */],
    'app-footer': __WEBPACK_IMPORTED_MODULE_1__AppFooter_vue__["a" /* default */]
  }
});

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_template_compiler_index_id_data_v_38bdf9d6_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_AppHeader_vue__ = __webpack_require__(14);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = null
/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_template_compiler_index_id_data_v_38bdf9d6_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_AppHeader_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\theme\\AppHeader.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] AppHeader.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-38bdf9d6", Component.options)
  } else {
    hotAPI.reload("data-v-38bdf9d6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('nav', {
    staticClass: "navbar has-shadow"
  }, [_c('div', {
    staticClass: "container"
  }, [_c('router-link', {
    attrs: {
      "to": "/",
      "exact": ""
    }
  }, [_c('img', {
    staticStyle: {
      "width": "48px"
    },
    attrs: {
      "src": "https://toppng.com/public/uploads/preview/weather-icon-11530957523kyheyffhqd.png",
      "alt": "Vue SPA"
    }
  })]), _vm._v(" "), _c('router-link', {
    staticClass: "navbar-item is-tab",
    attrs: {
      "to": "/",
      "exact": ""
    }
  }, [_vm._v("Home")]), _vm._v(" "), _c('router-link', {
    staticClass: "navbar-item is-tab",
    attrs: {
      "to": "/card?id=1"
    }
  }, [_vm._v("Card")])], 1)])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-38bdf9d6", esExports)
  }
}

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_template_compiler_index_id_data_v_178b95e4_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_AppFooter_vue__ = __webpack_require__(16);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = null
/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_template_compiler_index_id_data_v_178b95e4_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_AppFooter_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\theme\\AppFooter.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] AppFooter.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-178b95e4", Component.options)
  } else {
    hotAPI.reload("data-v-178b95e4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('footer', {
    staticClass: "footer"
  }, [_c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "content has-text-centered"
  }, [_vm._v("\r\n      Fork me on\r\n      "), _c('a', {
    attrs: {
      "href": "https://github.com/kerlon5/vue-spa",
      "target": "_blank"
    }
  }, [_vm._v("Github")])])])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-178b95e4", esExports)
  }
}

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('app-header'), _vm._v(" "), _c('section', {
    staticClass: "main-section section"
  }, [_c('div', {
    staticClass: "container content"
  }, [_c('router-view')], 1)]), _vm._v(" "), _c('app-footer')], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-20fe2492", esExports)
  }
}

/***/ })
/******/ ]);