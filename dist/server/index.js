import * as __viteRscAsyncHooks from "node:async_hooks";
import { AsyncLocalStorage as AsyncLocalStorage$1 } from "node:async_hooks";
import assetsManifest from "./__vite_rsc_assets_manifest.js";
//#region \0rolldown/runtime.js
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJSMin = (cb, mod) => () => (mod || cb((mod = { exports: {} }).exports, mod), mod.exports);
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var __copyProps = (to, from, except, desc) => {
	if (from && typeof from === "object" || typeof from === "function") for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++) {
		key = keys[i];
		if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
			get: ((k) => from[k]).bind(null, key),
			enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
		});
	}
	return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
	value: mod,
	enumerable: true
}) : target, mod));
//#endregion
//#region node_modules/@vitejs/plugin-rsc/dist/dist-yW9-EeG1.js
function tinyassert(value, message) {
	if (value) return;
	if (message instanceof Error) throw message;
	throw new TinyAssertionError(message, tinyassert);
}
var TinyAssertionError = class extends Error {
	constructor(message, stackStartFunction) {
		super(message ?? "TinyAssertionError");
		if (stackStartFunction && "captureStackTrace" in Error) Error.captureStackTrace(this, stackStartFunction);
	}
};
function safeFunctionCast(f) {
	return f;
}
function memoize(f, options) {
	const keyFn = options?.keyFn ?? ((...args) => args[0]);
	const cache = options?.cache ?? /* @__PURE__ */ new Map();
	return safeFunctionCast(function(...args) {
		const key = keyFn(...args);
		const value = cache.get(key);
		if (typeof value !== "undefined") return value;
		const newValue = f.apply(this, args);
		cache.set(key, newValue);
		return newValue;
	});
}
//#endregion
//#region node_modules/@vitejs/plugin-rsc/dist/shared-Dhw3vs8e.js
var SERVER_REFERENCE_PREFIX = "$$server:";
var SERVER_DECODE_CLIENT_PREFIX = "$$decode-client:";
function removeReferenceCacheTag(id) {
	return id.split("$$cache=")[0];
}
function setInternalRequire() {
	globalThis.__vite_rsc_require__ = (id) => {
		if (id.startsWith("$$server:")) {
			id = id.slice(9);
			return globalThis.__vite_rsc_server_require__(id);
		}
		return globalThis.__vite_rsc_client_require__(id);
	};
}
//#endregion
//#region node_modules/react/cjs/react.react-server.production.js
/**
* @license React
* react.react-server.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_react_react_server_production = /* @__PURE__ */ __commonJSMin(((exports) => {
	var ReactSharedInternals = {
		H: null,
		A: null
	};
	function formatProdErrorMessage(code) {
		var url = "https://react.dev/errors/" + code;
		if (1 < arguments.length) {
			url += "?args[]=" + encodeURIComponent(arguments[1]);
			for (var i = 2; i < arguments.length; i++) url += "&args[]=" + encodeURIComponent(arguments[i]);
		}
		return "Minified React error #" + code + "; visit " + url + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
	}
	var isArrayImpl = Array.isArray;
	function noop() {}
	var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
	function getIteratorFn(maybeIterable) {
		if (null === maybeIterable || "object" !== typeof maybeIterable) return null;
		maybeIterable = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable["@@iterator"];
		return "function" === typeof maybeIterable ? maybeIterable : null;
	}
	var hasOwnProperty = Object.prototype.hasOwnProperty, assign = Object.assign;
	function ReactElement(type, key, props) {
		var refProp = props.ref;
		return {
			$$typeof: REACT_ELEMENT_TYPE,
			type,
			key,
			ref: void 0 !== refProp ? refProp : null,
			props
		};
	}
	function cloneAndReplaceKey(oldElement, newKey) {
		return ReactElement(oldElement.type, newKey, oldElement.props);
	}
	function isValidElement(object) {
		return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
	}
	function escape(key) {
		var escaperLookup = {
			"=": "=0",
			":": "=2"
		};
		return "$" + key.replace(/[=:]/g, function(match) {
			return escaperLookup[match];
		});
	}
	var userProvidedKeyEscapeRegex = /\/+/g;
	function getElementKey(element, index) {
		return "object" === typeof element && null !== element && null != element.key ? escape("" + element.key) : index.toString(36);
	}
	function resolveThenable(thenable) {
		switch (thenable.status) {
			case "fulfilled": return thenable.value;
			case "rejected": throw thenable.reason;
			default: switch ("string" === typeof thenable.status ? thenable.then(noop, noop) : (thenable.status = "pending", thenable.then(function(fulfilledValue) {
				"pending" === thenable.status && (thenable.status = "fulfilled", thenable.value = fulfilledValue);
			}, function(error) {
				"pending" === thenable.status && (thenable.status = "rejected", thenable.reason = error);
			})), thenable.status) {
				case "fulfilled": return thenable.value;
				case "rejected": throw thenable.reason;
			}
		}
		throw thenable;
	}
	function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
		var type = typeof children;
		if ("undefined" === type || "boolean" === type) children = null;
		var invokeCallback = !1;
		if (null === children) invokeCallback = !0;
		else switch (type) {
			case "bigint":
			case "string":
			case "number":
				invokeCallback = !0;
				break;
			case "object": switch (children.$$typeof) {
				case REACT_ELEMENT_TYPE:
				case REACT_PORTAL_TYPE:
					invokeCallback = !0;
					break;
				case REACT_LAZY_TYPE: return invokeCallback = children._init, mapIntoArray(invokeCallback(children._payload), array, escapedPrefix, nameSoFar, callback);
			}
		}
		if (invokeCallback) return callback = callback(children), invokeCallback = "" === nameSoFar ? "." + getElementKey(children, 0) : nameSoFar, isArrayImpl(callback) ? (escapedPrefix = "", null != invokeCallback && (escapedPrefix = invokeCallback.replace(userProvidedKeyEscapeRegex, "$&/") + "/"), mapIntoArray(callback, array, escapedPrefix, "", function(c) {
			return c;
		})) : null != callback && (isValidElement(callback) && (callback = cloneAndReplaceKey(callback, escapedPrefix + (null == callback.key || children && children.key === callback.key ? "" : ("" + callback.key).replace(userProvidedKeyEscapeRegex, "$&/") + "/") + invokeCallback)), array.push(callback)), 1;
		invokeCallback = 0;
		var nextNamePrefix = "" === nameSoFar ? "." : nameSoFar + ":";
		if (isArrayImpl(children)) for (var i = 0; i < children.length; i++) nameSoFar = children[i], type = nextNamePrefix + getElementKey(nameSoFar, i), invokeCallback += mapIntoArray(nameSoFar, array, escapedPrefix, type, callback);
		else if (i = getIteratorFn(children), "function" === typeof i) for (children = i.call(children), i = 0; !(nameSoFar = children.next()).done;) nameSoFar = nameSoFar.value, type = nextNamePrefix + getElementKey(nameSoFar, i++), invokeCallback += mapIntoArray(nameSoFar, array, escapedPrefix, type, callback);
		else if ("object" === type) {
			if ("function" === typeof children.then) return mapIntoArray(resolveThenable(children), array, escapedPrefix, nameSoFar, callback);
			array = String(children);
			throw Error(formatProdErrorMessage(31, "[object Object]" === array ? "object with keys {" + Object.keys(children).join(", ") + "}" : array));
		}
		return invokeCallback;
	}
	function mapChildren(children, func, context) {
		if (null == children) return children;
		var result = [], count = 0;
		mapIntoArray(children, result, "", "", function(child) {
			return func.call(context, child, count++);
		});
		return result;
	}
	function lazyInitializer(payload) {
		if (-1 === payload._status) {
			var ctor = payload._result;
			ctor = ctor();
			ctor.then(function(moduleObject) {
				if (0 === payload._status || -1 === payload._status) payload._status = 1, payload._result = moduleObject;
			}, function(error) {
				if (0 === payload._status || -1 === payload._status) payload._status = 2, payload._result = error;
			});
			-1 === payload._status && (payload._status = 0, payload._result = ctor);
		}
		if (1 === payload._status) return payload._result.default;
		throw payload._result;
	}
	function createCacheRoot() {
		return /* @__PURE__ */ new WeakMap();
	}
	function createCacheNode() {
		return {
			s: 0,
			v: void 0,
			o: null,
			p: null
		};
	}
	exports.Children = {
		map: mapChildren,
		forEach: function(children, forEachFunc, forEachContext) {
			mapChildren(children, function() {
				forEachFunc.apply(this, arguments);
			}, forEachContext);
		},
		count: function(children) {
			var n = 0;
			mapChildren(children, function() {
				n++;
			});
			return n;
		},
		toArray: function(children) {
			return mapChildren(children, function(child) {
				return child;
			}) || [];
		},
		only: function(children) {
			if (!isValidElement(children)) throw Error(formatProdErrorMessage(143));
			return children;
		}
	};
	exports.Fragment = REACT_FRAGMENT_TYPE;
	exports.Profiler = REACT_PROFILER_TYPE;
	exports.StrictMode = REACT_STRICT_MODE_TYPE;
	exports.Suspense = REACT_SUSPENSE_TYPE;
	exports.__SERVER_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = ReactSharedInternals;
	exports.cache = function(fn) {
		return function() {
			var dispatcher = ReactSharedInternals.A;
			if (!dispatcher) return fn.apply(null, arguments);
			var fnMap = dispatcher.getCacheForType(createCacheRoot);
			dispatcher = fnMap.get(fn);
			void 0 === dispatcher && (dispatcher = createCacheNode(), fnMap.set(fn, dispatcher));
			fnMap = 0;
			for (var l = arguments.length; fnMap < l; fnMap++) {
				var arg = arguments[fnMap];
				if ("function" === typeof arg || "object" === typeof arg && null !== arg) {
					var objectCache = dispatcher.o;
					null === objectCache && (dispatcher.o = objectCache = /* @__PURE__ */ new WeakMap());
					dispatcher = objectCache.get(arg);
					void 0 === dispatcher && (dispatcher = createCacheNode(), objectCache.set(arg, dispatcher));
				} else objectCache = dispatcher.p, null === objectCache && (dispatcher.p = objectCache = /* @__PURE__ */ new Map()), dispatcher = objectCache.get(arg), void 0 === dispatcher && (dispatcher = createCacheNode(), objectCache.set(arg, dispatcher));
			}
			if (1 === dispatcher.s) return dispatcher.v;
			if (2 === dispatcher.s) throw dispatcher.v;
			try {
				var result = fn.apply(null, arguments);
				fnMap = dispatcher;
				fnMap.s = 1;
				return fnMap.v = result;
			} catch (error) {
				throw result = dispatcher, result.s = 2, result.v = error, error;
			}
		};
	};
	exports.cacheSignal = function() {
		var dispatcher = ReactSharedInternals.A;
		return dispatcher ? dispatcher.cacheSignal() : null;
	};
	exports.captureOwnerStack = function() {
		return null;
	};
	exports.cloneElement = function(element, config, children) {
		if (null === element || void 0 === element) throw Error(formatProdErrorMessage(267, element));
		var props = assign({}, element.props), key = element.key;
		if (null != config) for (propName in void 0 !== config.key && (key = "" + config.key), config) !hasOwnProperty.call(config, propName) || "key" === propName || "__self" === propName || "__source" === propName || "ref" === propName && void 0 === config.ref || (props[propName] = config[propName]);
		var propName = arguments.length - 2;
		if (1 === propName) props.children = children;
		else if (1 < propName) {
			for (var childArray = Array(propName), i = 0; i < propName; i++) childArray[i] = arguments[i + 2];
			props.children = childArray;
		}
		return ReactElement(element.type, key, props);
	};
	exports.createElement = function(type, config, children) {
		var propName, props = {}, key = null;
		if (null != config) for (propName in void 0 !== config.key && (key = "" + config.key), config) hasOwnProperty.call(config, propName) && "key" !== propName && "__self" !== propName && "__source" !== propName && (props[propName] = config[propName]);
		var childrenLength = arguments.length - 2;
		if (1 === childrenLength) props.children = children;
		else if (1 < childrenLength) {
			for (var childArray = Array(childrenLength), i = 0; i < childrenLength; i++) childArray[i] = arguments[i + 2];
			props.children = childArray;
		}
		if (type && type.defaultProps) for (propName in childrenLength = type.defaultProps, childrenLength) void 0 === props[propName] && (props[propName] = childrenLength[propName]);
		return ReactElement(type, key, props);
	};
	exports.createRef = function() {
		return { current: null };
	};
	exports.forwardRef = function(render) {
		return {
			$$typeof: REACT_FORWARD_REF_TYPE,
			render
		};
	};
	exports.isValidElement = isValidElement;
	exports.lazy = function(ctor) {
		return {
			$$typeof: REACT_LAZY_TYPE,
			_payload: {
				_status: -1,
				_result: ctor
			},
			_init: lazyInitializer
		};
	};
	exports.memo = function(type, compare) {
		return {
			$$typeof: REACT_MEMO_TYPE,
			type,
			compare: void 0 === compare ? null : compare
		};
	};
	exports.use = function(usable) {
		return ReactSharedInternals.H.use(usable);
	};
	exports.useCallback = function(callback, deps) {
		return ReactSharedInternals.H.useCallback(callback, deps);
	};
	exports.useDebugValue = function() {};
	exports.useId = function() {
		return ReactSharedInternals.H.useId();
	};
	exports.useMemo = function(create, deps) {
		return ReactSharedInternals.H.useMemo(create, deps);
	};
	exports.version = "19.2.4";
}));
//#endregion
//#region node_modules/react/react.react-server.js
var require_react_react_server = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require_react_react_server_production();
}));
//#endregion
//#region node_modules/react-dom/cjs/react-dom.react-server.production.js
/**
* @license React
* react-dom.react-server.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_react_dom_react_server_production = /* @__PURE__ */ __commonJSMin(((exports) => {
	var React = require_react_react_server();
	function noop() {}
	var Internals = {
		d: {
			f: noop,
			r: function() {
				throw Error("Invalid form element. requestFormReset must be passed a form that was rendered by React.");
			},
			D: noop,
			C: noop,
			L: noop,
			m: noop,
			X: noop,
			S: noop,
			M: noop
		},
		p: 0,
		findDOMNode: null
	};
	if (!React.__SERVER_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE) throw Error("The \"react\" package in this environment is not configured correctly. The \"react-server\" condition must be enabled in any environment that runs React Server Components.");
	function getCrossOriginStringAs(as, input) {
		if ("font" === as) return "";
		if ("string" === typeof input) return "use-credentials" === input ? input : "";
	}
	exports.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Internals;
	exports.preconnect = function(href, options) {
		"string" === typeof href && (options ? (options = options.crossOrigin, options = "string" === typeof options ? "use-credentials" === options ? options : "" : void 0) : options = null, Internals.d.C(href, options));
	};
	exports.prefetchDNS = function(href) {
		"string" === typeof href && Internals.d.D(href);
	};
	exports.preinit = function(href, options) {
		if ("string" === typeof href && options && "string" === typeof options.as) {
			var as = options.as, crossOrigin = getCrossOriginStringAs(as, options.crossOrigin), integrity = "string" === typeof options.integrity ? options.integrity : void 0, fetchPriority = "string" === typeof options.fetchPriority ? options.fetchPriority : void 0;
			"style" === as ? Internals.d.S(href, "string" === typeof options.precedence ? options.precedence : void 0, {
				crossOrigin,
				integrity,
				fetchPriority
			}) : "script" === as && Internals.d.X(href, {
				crossOrigin,
				integrity,
				fetchPriority,
				nonce: "string" === typeof options.nonce ? options.nonce : void 0
			});
		}
	};
	exports.preinitModule = function(href, options) {
		if ("string" === typeof href) if ("object" === typeof options && null !== options) {
			if (null == options.as || "script" === options.as) {
				var crossOrigin = getCrossOriginStringAs(options.as, options.crossOrigin);
				Internals.d.M(href, {
					crossOrigin,
					integrity: "string" === typeof options.integrity ? options.integrity : void 0,
					nonce: "string" === typeof options.nonce ? options.nonce : void 0
				});
			}
		} else options ?? Internals.d.M(href);
	};
	exports.preload = function(href, options) {
		if ("string" === typeof href && "object" === typeof options && null !== options && "string" === typeof options.as) {
			var as = options.as, crossOrigin = getCrossOriginStringAs(as, options.crossOrigin);
			Internals.d.L(href, as, {
				crossOrigin,
				integrity: "string" === typeof options.integrity ? options.integrity : void 0,
				nonce: "string" === typeof options.nonce ? options.nonce : void 0,
				type: "string" === typeof options.type ? options.type : void 0,
				fetchPriority: "string" === typeof options.fetchPriority ? options.fetchPriority : void 0,
				referrerPolicy: "string" === typeof options.referrerPolicy ? options.referrerPolicy : void 0,
				imageSrcSet: "string" === typeof options.imageSrcSet ? options.imageSrcSet : void 0,
				imageSizes: "string" === typeof options.imageSizes ? options.imageSizes : void 0,
				media: "string" === typeof options.media ? options.media : void 0
			});
		}
	};
	exports.preloadModule = function(href, options) {
		if ("string" === typeof href) if (options) {
			var crossOrigin = getCrossOriginStringAs(options.as, options.crossOrigin);
			Internals.d.m(href, {
				as: "string" === typeof options.as && "script" !== options.as ? options.as : void 0,
				crossOrigin,
				integrity: "string" === typeof options.integrity ? options.integrity : void 0
			});
		} else Internals.d.m(href);
	};
	exports.version = "19.2.4";
}));
//#endregion
//#region node_modules/react-dom/react-dom.react-server.js
var require_react_dom_react_server = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require_react_dom_react_server_production();
}));
//#endregion
//#region node_modules/react-server-dom-webpack/cjs/react-server-dom-webpack-server.edge.production.js
var require_react_server_dom_webpack_server_edge_production = /* @__PURE__ */ __commonJSMin(((exports) => {
	globalThis.AsyncLocalStorage = __viteRscAsyncHooks.AsyncLocalStorage;
	var ReactDOM = require_react_dom_react_server(), React = require_react_react_server(), REACT_LEGACY_ELEMENT_TYPE = Symbol.for("react.element"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_MEMO_CACHE_SENTINEL = Symbol.for("react.memo_cache_sentinel");
	var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
	function getIteratorFn(maybeIterable) {
		if (null === maybeIterable || "object" !== typeof maybeIterable) return null;
		maybeIterable = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable["@@iterator"];
		return "function" === typeof maybeIterable ? maybeIterable : null;
	}
	var ASYNC_ITERATOR = Symbol.asyncIterator;
	function handleErrorInNextTick(error) {
		setTimeout(function() {
			throw error;
		});
	}
	var LocalPromise = Promise, scheduleMicrotask = "function" === typeof queueMicrotask ? queueMicrotask : function(callback) {
		LocalPromise.resolve(null).then(callback).catch(handleErrorInNextTick);
	}, currentView = null, writtenBytes = 0;
	function writeChunkAndReturn(destination, chunk) {
		if (0 !== chunk.byteLength) if (2048 < chunk.byteLength) 0 < writtenBytes && (destination.enqueue(new Uint8Array(currentView.buffer, 0, writtenBytes)), currentView = new Uint8Array(2048), writtenBytes = 0), destination.enqueue(chunk);
		else {
			var allowableBytes = currentView.length - writtenBytes;
			allowableBytes < chunk.byteLength && (0 === allowableBytes ? destination.enqueue(currentView) : (currentView.set(chunk.subarray(0, allowableBytes), writtenBytes), destination.enqueue(currentView), chunk = chunk.subarray(allowableBytes)), currentView = new Uint8Array(2048), writtenBytes = 0);
			currentView.set(chunk, writtenBytes);
			writtenBytes += chunk.byteLength;
		}
		return !0;
	}
	var textEncoder = new TextEncoder();
	function stringToChunk(content) {
		return textEncoder.encode(content);
	}
	function byteLengthOfChunk(chunk) {
		return chunk.byteLength;
	}
	function closeWithError(destination, error) {
		"function" === typeof destination.error ? destination.error(error) : destination.close();
	}
	var CLIENT_REFERENCE_TAG$1 = Symbol.for("react.client.reference"), SERVER_REFERENCE_TAG = Symbol.for("react.server.reference");
	function registerClientReferenceImpl(proxyImplementation, id, async) {
		return Object.defineProperties(proxyImplementation, {
			$$typeof: { value: CLIENT_REFERENCE_TAG$1 },
			$$id: { value: id },
			$$async: { value: async }
		});
	}
	var FunctionBind = Function.prototype.bind, ArraySlice = Array.prototype.slice;
	function bind() {
		var newFn = FunctionBind.apply(this, arguments);
		if (this.$$typeof === SERVER_REFERENCE_TAG) {
			var args = ArraySlice.call(arguments, 1), $$typeof = { value: SERVER_REFERENCE_TAG }, $$id = { value: this.$$id };
			args = { value: this.$$bound ? this.$$bound.concat(args) : args };
			return Object.defineProperties(newFn, {
				$$typeof,
				$$id,
				$$bound: args,
				bind: {
					value: bind,
					configurable: !0
				}
			});
		}
		return newFn;
	}
	var serverReferenceToString = {
		value: function() {
			return "function () { [omitted code] }";
		},
		configurable: !0,
		writable: !0
	}, PROMISE_PROTOTYPE = Promise.prototype, deepProxyHandlers = {
		get: function(target, name) {
			switch (name) {
				case "$$typeof": return target.$$typeof;
				case "$$id": return target.$$id;
				case "$$async": return target.$$async;
				case "name": return target.name;
				case "displayName": return;
				case "defaultProps": return;
				case "_debugInfo": return;
				case "toJSON": return;
				case Symbol.toPrimitive: return Object.prototype[Symbol.toPrimitive];
				case Symbol.toStringTag: return Object.prototype[Symbol.toStringTag];
				case "Provider": throw Error("Cannot render a Client Context Provider on the Server. Instead, you can export a Client Component wrapper that itself renders a Client Context Provider.");
				case "then": throw Error("Cannot await or return from a thenable. You cannot await a client module from a server component.");
			}
			throw Error("Cannot access " + (String(target.name) + "." + String(name)) + " on the server. You cannot dot into a client module from a server component. You can only pass the imported name through.");
		},
		set: function() {
			throw Error("Cannot assign to a client module from a server module.");
		}
	};
	function getReference(target, name) {
		switch (name) {
			case "$$typeof": return target.$$typeof;
			case "$$id": return target.$$id;
			case "$$async": return target.$$async;
			case "name": return target.name;
			case "defaultProps": return;
			case "_debugInfo": return;
			case "toJSON": return;
			case Symbol.toPrimitive: return Object.prototype[Symbol.toPrimitive];
			case Symbol.toStringTag: return Object.prototype[Symbol.toStringTag];
			case "__esModule":
				var moduleId = target.$$id;
				target.default = registerClientReferenceImpl(function() {
					throw Error("Attempted to call the default export of " + moduleId + " from the server but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
				}, target.$$id + "#", target.$$async);
				return !0;
			case "then":
				if (target.then) return target.then;
				if (target.$$async) return;
				var clientReference = registerClientReferenceImpl({}, target.$$id, !0), proxy = new Proxy(clientReference, proxyHandlers$1);
				target.status = "fulfilled";
				target.value = proxy;
				return target.then = registerClientReferenceImpl(function(resolve) {
					return Promise.resolve(resolve(proxy));
				}, target.$$id + "#then", !1);
		}
		if ("symbol" === typeof name) throw Error("Cannot read Symbol exports. Only named exports are supported on a client module imported on the server.");
		clientReference = target[name];
		clientReference || (clientReference = registerClientReferenceImpl(function() {
			throw Error("Attempted to call " + String(name) + "() from the server but " + String(name) + " is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
		}, target.$$id + "#" + name, target.$$async), Object.defineProperty(clientReference, "name", { value: name }), clientReference = target[name] = new Proxy(clientReference, deepProxyHandlers));
		return clientReference;
	}
	var proxyHandlers$1 = {
		get: function(target, name) {
			return getReference(target, name);
		},
		getOwnPropertyDescriptor: function(target, name) {
			var descriptor = Object.getOwnPropertyDescriptor(target, name);
			descriptor || (descriptor = {
				value: getReference(target, name),
				writable: !1,
				configurable: !1,
				enumerable: !1
			}, Object.defineProperty(target, name, descriptor));
			return descriptor;
		},
		getPrototypeOf: function() {
			return PROMISE_PROTOTYPE;
		},
		set: function() {
			throw Error("Cannot assign to a client module from a server module.");
		}
	}, ReactDOMSharedInternals = ReactDOM.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, previousDispatcher = ReactDOMSharedInternals.d;
	ReactDOMSharedInternals.d = {
		f: previousDispatcher.f,
		r: previousDispatcher.r,
		D: prefetchDNS,
		C: preconnect,
		L: preload,
		m: preloadModule$1,
		X: preinitScript,
		S: preinitStyle,
		M: preinitModuleScript
	};
	function prefetchDNS(href) {
		if ("string" === typeof href && href) {
			var request = resolveRequest();
			if (request) {
				var hints = request.hints, key = "D|" + href;
				hints.has(key) || (hints.add(key), emitHint(request, "D", href));
			} else previousDispatcher.D(href);
		}
	}
	function preconnect(href, crossOrigin) {
		if ("string" === typeof href) {
			var request = resolveRequest();
			if (request) {
				var hints = request.hints, key = "C|" + (null == crossOrigin ? "null" : crossOrigin) + "|" + href;
				hints.has(key) || (hints.add(key), "string" === typeof crossOrigin ? emitHint(request, "C", [href, crossOrigin]) : emitHint(request, "C", href));
			} else previousDispatcher.C(href, crossOrigin);
		}
	}
	function preload(href, as, options) {
		if ("string" === typeof href) {
			var request = resolveRequest();
			if (request) {
				var hints = request.hints, key = "L";
				if ("image" === as && options) {
					var imageSrcSet = options.imageSrcSet, imageSizes = options.imageSizes, uniquePart = "";
					"string" === typeof imageSrcSet && "" !== imageSrcSet ? (uniquePart += "[" + imageSrcSet + "]", "string" === typeof imageSizes && (uniquePart += "[" + imageSizes + "]")) : uniquePart += "[][]" + href;
					key += "[image]" + uniquePart;
				} else key += "[" + as + "]" + href;
				hints.has(key) || (hints.add(key), (options = trimOptions(options)) ? emitHint(request, "L", [
					href,
					as,
					options
				]) : emitHint(request, "L", [href, as]));
			} else previousDispatcher.L(href, as, options);
		}
	}
	function preloadModule$1(href, options) {
		if ("string" === typeof href) {
			var request = resolveRequest();
			if (request) {
				var hints = request.hints, key = "m|" + href;
				if (hints.has(key)) return;
				hints.add(key);
				return (options = trimOptions(options)) ? emitHint(request, "m", [href, options]) : emitHint(request, "m", href);
			}
			previousDispatcher.m(href, options);
		}
	}
	function preinitStyle(href, precedence, options) {
		if ("string" === typeof href) {
			var request = resolveRequest();
			if (request) {
				var hints = request.hints, key = "S|" + href;
				if (hints.has(key)) return;
				hints.add(key);
				return (options = trimOptions(options)) ? emitHint(request, "S", [
					href,
					"string" === typeof precedence ? precedence : 0,
					options
				]) : "string" === typeof precedence ? emitHint(request, "S", [href, precedence]) : emitHint(request, "S", href);
			}
			previousDispatcher.S(href, precedence, options);
		}
	}
	function preinitScript(src, options) {
		if ("string" === typeof src) {
			var request = resolveRequest();
			if (request) {
				var hints = request.hints, key = "X|" + src;
				if (hints.has(key)) return;
				hints.add(key);
				return (options = trimOptions(options)) ? emitHint(request, "X", [src, options]) : emitHint(request, "X", src);
			}
			previousDispatcher.X(src, options);
		}
	}
	function preinitModuleScript(src, options) {
		if ("string" === typeof src) {
			var request = resolveRequest();
			if (request) {
				var hints = request.hints, key = "M|" + src;
				if (hints.has(key)) return;
				hints.add(key);
				return (options = trimOptions(options)) ? emitHint(request, "M", [src, options]) : emitHint(request, "M", src);
			}
			previousDispatcher.M(src, options);
		}
	}
	function trimOptions(options) {
		if (null == options) return null;
		var hasProperties = !1, trimmed = {}, key;
		for (key in options) null != options[key] && (hasProperties = !0, trimmed[key] = options[key]);
		return hasProperties ? trimmed : null;
	}
	function getChildFormatContext(parentContext, type, props) {
		switch (type) {
			case "img":
				type = props.src;
				var srcSet = props.srcSet;
				if (!("lazy" === props.loading || !type && !srcSet || "string" !== typeof type && null != type || "string" !== typeof srcSet && null != srcSet || "low" === props.fetchPriority || parentContext & 3) && ("string" !== typeof type || ":" !== type[4] || "d" !== type[0] && "D" !== type[0] || "a" !== type[1] && "A" !== type[1] || "t" !== type[2] && "T" !== type[2] || "a" !== type[3] && "A" !== type[3]) && ("string" !== typeof srcSet || ":" !== srcSet[4] || "d" !== srcSet[0] && "D" !== srcSet[0] || "a" !== srcSet[1] && "A" !== srcSet[1] || "t" !== srcSet[2] && "T" !== srcSet[2] || "a" !== srcSet[3] && "A" !== srcSet[3])) {
					var sizes = "string" === typeof props.sizes ? props.sizes : void 0;
					var input = props.crossOrigin;
					preload(type || "", "image", {
						imageSrcSet: srcSet,
						imageSizes: sizes,
						crossOrigin: "string" === typeof input ? "use-credentials" === input ? input : "" : void 0,
						integrity: props.integrity,
						type: props.type,
						fetchPriority: props.fetchPriority,
						referrerPolicy: props.referrerPolicy
					});
				}
				return parentContext;
			case "link":
				type = props.rel;
				srcSet = props.href;
				if (!(parentContext & 1 || null != props.itemProp || "string" !== typeof type || "string" !== typeof srcSet || "" === srcSet)) switch (type) {
					case "preload":
						preload(srcSet, props.as, {
							crossOrigin: props.crossOrigin,
							integrity: props.integrity,
							nonce: props.nonce,
							type: props.type,
							fetchPriority: props.fetchPriority,
							referrerPolicy: props.referrerPolicy,
							imageSrcSet: props.imageSrcSet,
							imageSizes: props.imageSizes,
							media: props.media
						});
						break;
					case "modulepreload":
						preloadModule$1(srcSet, {
							as: props.as,
							crossOrigin: props.crossOrigin,
							integrity: props.integrity,
							nonce: props.nonce
						});
						break;
					case "stylesheet": preload(srcSet, "stylesheet", {
						crossOrigin: props.crossOrigin,
						integrity: props.integrity,
						nonce: props.nonce,
						type: props.type,
						fetchPriority: props.fetchPriority,
						referrerPolicy: props.referrerPolicy,
						media: props.media
					});
				}
				return parentContext;
			case "picture": return parentContext | 2;
			case "noscript": return parentContext | 1;
			default: return parentContext;
		}
	}
	var supportsRequestStorage = "function" === typeof AsyncLocalStorage, requestStorage = supportsRequestStorage ? new AsyncLocalStorage() : null, TEMPORARY_REFERENCE_TAG = Symbol.for("react.temporary.reference"), proxyHandlers = {
		get: function(target, name) {
			switch (name) {
				case "$$typeof": return target.$$typeof;
				case "name": return;
				case "displayName": return;
				case "defaultProps": return;
				case "_debugInfo": return;
				case "toJSON": return;
				case Symbol.toPrimitive: return Object.prototype[Symbol.toPrimitive];
				case Symbol.toStringTag: return Object.prototype[Symbol.toStringTag];
				case "Provider": throw Error("Cannot render a Client Context Provider on the Server. Instead, you can export a Client Component wrapper that itself renders a Client Context Provider.");
				case "then": return;
			}
			throw Error("Cannot access " + String(name) + " on the server. You cannot dot into a temporary client reference from a server component. You can only pass the value through to the client.");
		},
		set: function() {
			throw Error("Cannot assign to a temporary client reference from a server module.");
		}
	};
	function createTemporaryReference(temporaryReferences, id) {
		var reference = Object.defineProperties(function() {
			throw Error("Attempted to call a temporary Client Reference from the server but it is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
		}, { $$typeof: { value: TEMPORARY_REFERENCE_TAG } });
		reference = new Proxy(reference, proxyHandlers);
		temporaryReferences.set(reference, id);
		return reference;
	}
	function noop() {}
	var SuspenseException = Error("Suspense Exception: This is not a real error! It's an implementation detail of `use` to interrupt the current render. You must either rethrow it immediately, or move the `use` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary, or call the promise's `.catch` method and pass the result to `use`.");
	function trackUsedThenable(thenableState, thenable, index) {
		index = thenableState[index];
		void 0 === index ? thenableState.push(thenable) : index !== thenable && (thenable.then(noop, noop), thenable = index);
		switch (thenable.status) {
			case "fulfilled": return thenable.value;
			case "rejected": throw thenable.reason;
			default:
				"string" === typeof thenable.status ? thenable.then(noop, noop) : (thenableState = thenable, thenableState.status = "pending", thenableState.then(function(fulfilledValue) {
					if ("pending" === thenable.status) {
						var fulfilledThenable = thenable;
						fulfilledThenable.status = "fulfilled";
						fulfilledThenable.value = fulfilledValue;
					}
				}, function(error) {
					if ("pending" === thenable.status) {
						var rejectedThenable = thenable;
						rejectedThenable.status = "rejected";
						rejectedThenable.reason = error;
					}
				}));
				switch (thenable.status) {
					case "fulfilled": return thenable.value;
					case "rejected": throw thenable.reason;
				}
				suspendedThenable = thenable;
				throw SuspenseException;
		}
	}
	var suspendedThenable = null;
	function getSuspendedThenable() {
		if (null === suspendedThenable) throw Error("Expected a suspended thenable. This is a bug in React. Please file an issue.");
		var thenable = suspendedThenable;
		suspendedThenable = null;
		return thenable;
	}
	var currentRequest$1 = null, thenableIndexCounter = 0, thenableState = null;
	function getThenableStateAfterSuspending() {
		var state = thenableState || [];
		thenableState = null;
		return state;
	}
	var HooksDispatcher = {
		readContext: unsupportedContext,
		use,
		useCallback: function(callback) {
			return callback;
		},
		useContext: unsupportedContext,
		useEffect: unsupportedHook,
		useImperativeHandle: unsupportedHook,
		useLayoutEffect: unsupportedHook,
		useInsertionEffect: unsupportedHook,
		useMemo: function(nextCreate) {
			return nextCreate();
		},
		useReducer: unsupportedHook,
		useRef: unsupportedHook,
		useState: unsupportedHook,
		useDebugValue: function() {},
		useDeferredValue: unsupportedHook,
		useTransition: unsupportedHook,
		useSyncExternalStore: unsupportedHook,
		useId,
		useHostTransitionStatus: unsupportedHook,
		useFormState: unsupportedHook,
		useActionState: unsupportedHook,
		useOptimistic: unsupportedHook,
		useMemoCache: function(size) {
			for (var data = Array(size), i = 0; i < size; i++) data[i] = REACT_MEMO_CACHE_SENTINEL;
			return data;
		},
		useCacheRefresh: function() {
			return unsupportedRefresh;
		}
	};
	HooksDispatcher.useEffectEvent = unsupportedHook;
	function unsupportedHook() {
		throw Error("This Hook is not supported in Server Components.");
	}
	function unsupportedRefresh() {
		throw Error("Refreshing the cache is not supported in Server Components.");
	}
	function unsupportedContext() {
		throw Error("Cannot read a Client Context from a Server Component.");
	}
	function useId() {
		if (null === currentRequest$1) throw Error("useId can only be used while React is rendering");
		var id = currentRequest$1.identifierCount++;
		return "_" + currentRequest$1.identifierPrefix + "S_" + id.toString(32) + "_";
	}
	function use(usable) {
		if (null !== usable && "object" === typeof usable || "function" === typeof usable) {
			if ("function" === typeof usable.then) {
				var index = thenableIndexCounter;
				thenableIndexCounter += 1;
				null === thenableState && (thenableState = []);
				return trackUsedThenable(thenableState, usable, index);
			}
			usable.$$typeof === REACT_CONTEXT_TYPE && unsupportedContext();
		}
		if (usable.$$typeof === CLIENT_REFERENCE_TAG$1) {
			if (null != usable.value && usable.value.$$typeof === REACT_CONTEXT_TYPE) throw Error("Cannot read a Client Context from a Server Component.");
			throw Error("Cannot use() an already resolved Client Reference.");
		}
		throw Error("An unsupported type was passed to use(): " + String(usable));
	}
	var DefaultAsyncDispatcher = {
		getCacheForType: function(resourceType) {
			var JSCompiler_inline_result = (JSCompiler_inline_result = resolveRequest()) ? JSCompiler_inline_result.cache : /* @__PURE__ */ new Map();
			var entry = JSCompiler_inline_result.get(resourceType);
			void 0 === entry && (entry = resourceType(), JSCompiler_inline_result.set(resourceType, entry));
			return entry;
		},
		cacheSignal: function() {
			var request = resolveRequest();
			return request ? request.cacheController.signal : null;
		}
	}, ReactSharedInternalsServer = React.__SERVER_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
	if (!ReactSharedInternalsServer) throw Error("The \"react\" package in this environment is not configured correctly. The \"react-server\" condition must be enabled in any environment that runs React Server Components.");
	var isArrayImpl = Array.isArray, getPrototypeOf = Object.getPrototypeOf;
	function objectName(object) {
		object = Object.prototype.toString.call(object);
		return object.slice(8, object.length - 1);
	}
	function describeValueForErrorMessage(value) {
		switch (typeof value) {
			case "string": return JSON.stringify(10 >= value.length ? value : value.slice(0, 10) + "...");
			case "object":
				if (isArrayImpl(value)) return "[...]";
				if (null !== value && value.$$typeof === CLIENT_REFERENCE_TAG) return "client";
				value = objectName(value);
				return "Object" === value ? "{...}" : value;
			case "function": return value.$$typeof === CLIENT_REFERENCE_TAG ? "client" : (value = value.displayName || value.name) ? "function " + value : "function";
			default: return String(value);
		}
	}
	function describeElementType(type) {
		if ("string" === typeof type) return type;
		switch (type) {
			case REACT_SUSPENSE_TYPE: return "Suspense";
			case REACT_SUSPENSE_LIST_TYPE: return "SuspenseList";
		}
		if ("object" === typeof type) switch (type.$$typeof) {
			case REACT_FORWARD_REF_TYPE: return describeElementType(type.render);
			case REACT_MEMO_TYPE: return describeElementType(type.type);
			case REACT_LAZY_TYPE:
				var payload = type._payload;
				type = type._init;
				try {
					return describeElementType(type(payload));
				} catch (x) {}
		}
		return "";
	}
	var CLIENT_REFERENCE_TAG = Symbol.for("react.client.reference");
	function describeObjectForErrorMessage(objectOrArray, expandedName) {
		var objKind = objectName(objectOrArray);
		if ("Object" !== objKind && "Array" !== objKind) return objKind;
		objKind = -1;
		var length = 0;
		if (isArrayImpl(objectOrArray)) {
			var str = "[";
			for (var i = 0; i < objectOrArray.length; i++) {
				0 < i && (str += ", ");
				var value = objectOrArray[i];
				value = "object" === typeof value && null !== value ? describeObjectForErrorMessage(value) : describeValueForErrorMessage(value);
				"" + i === expandedName ? (objKind = str.length, length = value.length, str += value) : str = 10 > value.length && 40 > str.length + value.length ? str + value : str + "...";
			}
			str += "]";
		} else if (objectOrArray.$$typeof === REACT_ELEMENT_TYPE) str = "<" + describeElementType(objectOrArray.type) + "/>";
		else {
			if (objectOrArray.$$typeof === CLIENT_REFERENCE_TAG) return "client";
			str = "{";
			i = Object.keys(objectOrArray);
			for (value = 0; value < i.length; value++) {
				0 < value && (str += ", ");
				var name = i[value], encodedKey = JSON.stringify(name);
				str += ("\"" + name + "\"" === encodedKey ? name : encodedKey) + ": ";
				encodedKey = objectOrArray[name];
				encodedKey = "object" === typeof encodedKey && null !== encodedKey ? describeObjectForErrorMessage(encodedKey) : describeValueForErrorMessage(encodedKey);
				name === expandedName ? (objKind = str.length, length = encodedKey.length, str += encodedKey) : str = 10 > encodedKey.length && 40 > str.length + encodedKey.length ? str + encodedKey : str + "...";
			}
			str += "}";
		}
		return void 0 === expandedName ? str : -1 < objKind && 0 < length ? (objectOrArray = " ".repeat(objKind) + "^".repeat(length), "\n  " + str + "\n  " + objectOrArray) : "\n  " + str;
	}
	var hasOwnProperty = Object.prototype.hasOwnProperty, ObjectPrototype$1 = Object.prototype, stringify = JSON.stringify;
	function defaultErrorHandler(error) {
		console.error(error);
	}
	function RequestInstance(type, model, bundlerConfig, onError, onPostpone, onAllReady, onFatalError, identifierPrefix, temporaryReferences) {
		if (null !== ReactSharedInternalsServer.A && ReactSharedInternalsServer.A !== DefaultAsyncDispatcher) throw Error("Currently React only supports one RSC renderer at a time.");
		ReactSharedInternalsServer.A = DefaultAsyncDispatcher;
		var abortSet = /* @__PURE__ */ new Set(), pingedTasks = [], hints = /* @__PURE__ */ new Set();
		this.type = type;
		this.status = 10;
		this.flushScheduled = !1;
		this.destination = this.fatalError = null;
		this.bundlerConfig = bundlerConfig;
		this.cache = /* @__PURE__ */ new Map();
		this.cacheController = new AbortController();
		this.pendingChunks = this.nextChunkId = 0;
		this.hints = hints;
		this.abortableTasks = abortSet;
		this.pingedTasks = pingedTasks;
		this.completedImportChunks = [];
		this.completedHintChunks = [];
		this.completedRegularChunks = [];
		this.completedErrorChunks = [];
		this.writtenSymbols = /* @__PURE__ */ new Map();
		this.writtenClientReferences = /* @__PURE__ */ new Map();
		this.writtenServerReferences = /* @__PURE__ */ new Map();
		this.writtenObjects = /* @__PURE__ */ new WeakMap();
		this.temporaryReferences = temporaryReferences;
		this.identifierPrefix = identifierPrefix || "";
		this.identifierCount = 1;
		this.taintCleanupQueue = [];
		this.onError = void 0 === onError ? defaultErrorHandler : onError;
		this.onPostpone = void 0 === onPostpone ? noop : onPostpone;
		this.onAllReady = onAllReady;
		this.onFatalError = onFatalError;
		type = createTask(this, model, null, !1, 0, abortSet);
		pingedTasks.push(type);
	}
	var currentRequest = null;
	function resolveRequest() {
		if (currentRequest) return currentRequest;
		if (supportsRequestStorage) {
			var store = requestStorage.getStore();
			if (store) return store;
		}
		return null;
	}
	function serializeThenable(request, task, thenable) {
		var newTask = createTask(request, thenable, task.keyPath, task.implicitSlot, task.formatContext, request.abortableTasks);
		switch (thenable.status) {
			case "fulfilled": return newTask.model = thenable.value, pingTask(request, newTask), newTask.id;
			case "rejected": return erroredTask(request, newTask, thenable.reason), newTask.id;
			default:
				if (12 === request.status) return request.abortableTasks.delete(newTask), 21 === request.type ? (haltTask(newTask), finishHaltedTask(newTask, request)) : (task = request.fatalError, abortTask(newTask), finishAbortedTask(newTask, request, task)), newTask.id;
				"string" !== typeof thenable.status && (thenable.status = "pending", thenable.then(function(fulfilledValue) {
					"pending" === thenable.status && (thenable.status = "fulfilled", thenable.value = fulfilledValue);
				}, function(error) {
					"pending" === thenable.status && (thenable.status = "rejected", thenable.reason = error);
				}));
		}
		thenable.then(function(value) {
			newTask.model = value;
			pingTask(request, newTask);
		}, function(reason) {
			0 === newTask.status && (erroredTask(request, newTask, reason), enqueueFlush(request));
		});
		return newTask.id;
	}
	function serializeReadableStream(request, task, stream) {
		function progress(entry) {
			if (0 === streamTask.status) if (entry.done) streamTask.status = 1, entry = streamTask.id.toString(16) + ":C\n", request.completedRegularChunks.push(stringToChunk(entry)), request.abortableTasks.delete(streamTask), request.cacheController.signal.removeEventListener("abort", abortStream), enqueueFlush(request), callOnAllReadyIfReady(request);
			else try {
				streamTask.model = entry.value, request.pendingChunks++, tryStreamTask(request, streamTask), enqueueFlush(request), reader.read().then(progress, error);
			} catch (x$11) {
				error(x$11);
			}
		}
		function error(reason) {
			0 === streamTask.status && (request.cacheController.signal.removeEventListener("abort", abortStream), erroredTask(request, streamTask, reason), enqueueFlush(request), reader.cancel(reason).then(error, error));
		}
		function abortStream() {
			if (0 === streamTask.status) {
				var signal = request.cacheController.signal;
				signal.removeEventListener("abort", abortStream);
				signal = signal.reason;
				21 === request.type ? (request.abortableTasks.delete(streamTask), haltTask(streamTask), finishHaltedTask(streamTask, request)) : (erroredTask(request, streamTask, signal), enqueueFlush(request));
				reader.cancel(signal).then(error, error);
			}
		}
		var supportsBYOB = stream.supportsBYOB;
		if (void 0 === supportsBYOB) try {
			stream.getReader({ mode: "byob" }).releaseLock(), supportsBYOB = !0;
		} catch (x) {
			supportsBYOB = !1;
		}
		var reader = stream.getReader(), streamTask = createTask(request, task.model, task.keyPath, task.implicitSlot, task.formatContext, request.abortableTasks);
		request.pendingChunks++;
		task = streamTask.id.toString(16) + ":" + (supportsBYOB ? "r" : "R") + "\n";
		request.completedRegularChunks.push(stringToChunk(task));
		request.cacheController.signal.addEventListener("abort", abortStream);
		reader.read().then(progress, error);
		return serializeByValueID(streamTask.id);
	}
	function serializeAsyncIterable(request, task, iterable, iterator) {
		function progress(entry) {
			if (0 === streamTask.status) if (entry.done) {
				streamTask.status = 1;
				if (void 0 === entry.value) var endStreamRow = streamTask.id.toString(16) + ":C\n";
				else try {
					var chunkId = outlineModelWithFormatContext(request, entry.value, 0);
					endStreamRow = streamTask.id.toString(16) + ":C" + stringify(serializeByValueID(chunkId)) + "\n";
				} catch (x) {
					error(x);
					return;
				}
				request.completedRegularChunks.push(stringToChunk(endStreamRow));
				request.abortableTasks.delete(streamTask);
				request.cacheController.signal.removeEventListener("abort", abortIterable);
				enqueueFlush(request);
				callOnAllReadyIfReady(request);
			} else try {
				streamTask.model = entry.value, request.pendingChunks++, tryStreamTask(request, streamTask), enqueueFlush(request), iterator.next().then(progress, error);
			} catch (x$12) {
				error(x$12);
			}
		}
		function error(reason) {
			0 === streamTask.status && (request.cacheController.signal.removeEventListener("abort", abortIterable), erroredTask(request, streamTask, reason), enqueueFlush(request), "function" === typeof iterator.throw && iterator.throw(reason).then(error, error));
		}
		function abortIterable() {
			if (0 === streamTask.status) {
				var signal = request.cacheController.signal;
				signal.removeEventListener("abort", abortIterable);
				var reason = signal.reason;
				21 === request.type ? (request.abortableTasks.delete(streamTask), haltTask(streamTask), finishHaltedTask(streamTask, request)) : (erroredTask(request, streamTask, signal.reason), enqueueFlush(request));
				"function" === typeof iterator.throw && iterator.throw(reason).then(error, error);
			}
		}
		iterable = iterable === iterator;
		var streamTask = createTask(request, task.model, task.keyPath, task.implicitSlot, task.formatContext, request.abortableTasks);
		request.pendingChunks++;
		task = streamTask.id.toString(16) + ":" + (iterable ? "x" : "X") + "\n";
		request.completedRegularChunks.push(stringToChunk(task));
		request.cacheController.signal.addEventListener("abort", abortIterable);
		iterator.next().then(progress, error);
		return serializeByValueID(streamTask.id);
	}
	function emitHint(request, code, model) {
		model = stringify(model);
		code = stringToChunk(":H" + code + model + "\n");
		request.completedHintChunks.push(code);
		enqueueFlush(request);
	}
	function readThenable(thenable) {
		if ("fulfilled" === thenable.status) return thenable.value;
		if ("rejected" === thenable.status) throw thenable.reason;
		throw thenable;
	}
	function createLazyWrapperAroundWakeable(request, task, wakeable) {
		switch (wakeable.status) {
			case "fulfilled": return wakeable.value;
			case "rejected": break;
			default: "string" !== typeof wakeable.status && (wakeable.status = "pending", wakeable.then(function(fulfilledValue) {
				"pending" === wakeable.status && (wakeable.status = "fulfilled", wakeable.value = fulfilledValue);
			}, function(error) {
				"pending" === wakeable.status && (wakeable.status = "rejected", wakeable.reason = error);
			}));
		}
		return {
			$$typeof: REACT_LAZY_TYPE,
			_payload: wakeable,
			_init: readThenable
		};
	}
	function voidHandler() {}
	function processServerComponentReturnValue(request, task, Component, result) {
		if ("object" !== typeof result || null === result || result.$$typeof === CLIENT_REFERENCE_TAG$1) return result;
		if ("function" === typeof result.then) return createLazyWrapperAroundWakeable(request, task, result);
		var iteratorFn = getIteratorFn(result);
		return iteratorFn ? (request = {}, request[Symbol.iterator] = function() {
			return iteratorFn.call(result);
		}, request) : "function" !== typeof result[ASYNC_ITERATOR] || "function" === typeof ReadableStream && result instanceof ReadableStream ? result : (request = {}, request[ASYNC_ITERATOR] = function() {
			return result[ASYNC_ITERATOR]();
		}, request);
	}
	function renderFunctionComponent(request, task, key, Component, props) {
		var prevThenableState = task.thenableState;
		task.thenableState = null;
		thenableIndexCounter = 0;
		thenableState = prevThenableState;
		props = Component(props, void 0);
		if (12 === request.status) throw "object" === typeof props && null !== props && "function" === typeof props.then && props.$$typeof !== CLIENT_REFERENCE_TAG$1 && props.then(voidHandler, voidHandler), null;
		props = processServerComponentReturnValue(request, task, Component, props);
		Component = task.keyPath;
		prevThenableState = task.implicitSlot;
		null !== key ? task.keyPath = null === Component ? key : Component + "," + key : null === Component && (task.implicitSlot = !0);
		request = renderModelDestructive(request, task, emptyRoot, "", props);
		task.keyPath = Component;
		task.implicitSlot = prevThenableState;
		return request;
	}
	function renderFragment(request, task, children) {
		return null !== task.keyPath ? (request = [
			REACT_ELEMENT_TYPE,
			REACT_FRAGMENT_TYPE,
			task.keyPath,
			{ children }
		], task.implicitSlot ? [request] : request) : children;
	}
	var serializedSize = 0;
	function deferTask(request, task) {
		task = createTask(request, task.model, task.keyPath, task.implicitSlot, task.formatContext, request.abortableTasks);
		pingTask(request, task);
		return serializeLazyID(task.id);
	}
	function renderElement(request, task, type, key, ref, props) {
		if (null !== ref && void 0 !== ref) throw Error("Refs cannot be used in Server Components, nor passed to Client Components.");
		if ("function" === typeof type && type.$$typeof !== CLIENT_REFERENCE_TAG$1 && type.$$typeof !== TEMPORARY_REFERENCE_TAG) return renderFunctionComponent(request, task, key, type, props);
		if (type === REACT_FRAGMENT_TYPE && null === key) return type = task.implicitSlot, null === task.keyPath && (task.implicitSlot = !0), props = renderModelDestructive(request, task, emptyRoot, "", props.children), task.implicitSlot = type, props;
		if (null != type && "object" === typeof type && type.$$typeof !== CLIENT_REFERENCE_TAG$1) switch (type.$$typeof) {
			case REACT_LAZY_TYPE:
				var init = type._init;
				type = init(type._payload);
				if (12 === request.status) throw null;
				return renderElement(request, task, type, key, ref, props);
			case REACT_FORWARD_REF_TYPE: return renderFunctionComponent(request, task, key, type.render, props);
			case REACT_MEMO_TYPE: return renderElement(request, task, type.type, key, ref, props);
		}
		else "string" === typeof type && (ref = task.formatContext, init = getChildFormatContext(ref, type, props), ref !== init && null != props.children && outlineModelWithFormatContext(request, props.children, init));
		request = key;
		key = task.keyPath;
		null === request ? request = key : null !== key && (request = key + "," + request);
		props = [
			REACT_ELEMENT_TYPE,
			type,
			request,
			props
		];
		task = task.implicitSlot && null !== request ? [props] : props;
		return task;
	}
	function pingTask(request, task) {
		var pingedTasks = request.pingedTasks;
		pingedTasks.push(task);
		1 === pingedTasks.length && (request.flushScheduled = null !== request.destination, 21 === request.type || 10 === request.status ? scheduleMicrotask(function() {
			return performWork(request);
		}) : setTimeout(function() {
			return performWork(request);
		}, 0));
	}
	function createTask(request, model, keyPath, implicitSlot, formatContext, abortSet) {
		request.pendingChunks++;
		var id = request.nextChunkId++;
		"object" !== typeof model || null === model || null !== keyPath || implicitSlot || request.writtenObjects.set(model, serializeByValueID(id));
		var task = {
			id,
			status: 0,
			model,
			keyPath,
			implicitSlot,
			formatContext,
			ping: function() {
				return pingTask(request, task);
			},
			toJSON: function(parentPropertyName, value) {
				serializedSize += parentPropertyName.length;
				var prevKeyPath = task.keyPath, prevImplicitSlot = task.implicitSlot;
				try {
					var JSCompiler_inline_result = renderModelDestructive(request, task, this, parentPropertyName, value);
				} catch (thrownValue) {
					if (parentPropertyName = task.model, parentPropertyName = "object" === typeof parentPropertyName && null !== parentPropertyName && (parentPropertyName.$$typeof === REACT_ELEMENT_TYPE || parentPropertyName.$$typeof === REACT_LAZY_TYPE), 12 === request.status) task.status = 3, 21 === request.type ? (prevKeyPath = request.nextChunkId++, prevKeyPath = parentPropertyName ? serializeLazyID(prevKeyPath) : serializeByValueID(prevKeyPath), JSCompiler_inline_result = prevKeyPath) : (prevKeyPath = request.fatalError, JSCompiler_inline_result = parentPropertyName ? serializeLazyID(prevKeyPath) : serializeByValueID(prevKeyPath));
					else if (value = thrownValue === SuspenseException ? getSuspendedThenable() : thrownValue, "object" === typeof value && null !== value && "function" === typeof value.then) {
						JSCompiler_inline_result = createTask(request, task.model, task.keyPath, task.implicitSlot, task.formatContext, request.abortableTasks);
						var ping = JSCompiler_inline_result.ping;
						value.then(ping, ping);
						JSCompiler_inline_result.thenableState = getThenableStateAfterSuspending();
						task.keyPath = prevKeyPath;
						task.implicitSlot = prevImplicitSlot;
						JSCompiler_inline_result = parentPropertyName ? serializeLazyID(JSCompiler_inline_result.id) : serializeByValueID(JSCompiler_inline_result.id);
					} else task.keyPath = prevKeyPath, task.implicitSlot = prevImplicitSlot, request.pendingChunks++, prevKeyPath = request.nextChunkId++, prevImplicitSlot = logRecoverableError(request, value, task), emitErrorChunk(request, prevKeyPath, prevImplicitSlot), JSCompiler_inline_result = parentPropertyName ? serializeLazyID(prevKeyPath) : serializeByValueID(prevKeyPath);
				}
				return JSCompiler_inline_result;
			},
			thenableState: null
		};
		abortSet.add(task);
		return task;
	}
	function serializeByValueID(id) {
		return "$" + id.toString(16);
	}
	function serializeLazyID(id) {
		return "$L" + id.toString(16);
	}
	function encodeReferenceChunk(request, id, reference) {
		request = stringify(reference);
		id = id.toString(16) + ":" + request + "\n";
		return stringToChunk(id);
	}
	function serializeClientReference(request, parent, parentPropertyName, clientReference) {
		var clientReferenceKey = clientReference.$$async ? clientReference.$$id + "#async" : clientReference.$$id, writtenClientReferences = request.writtenClientReferences, existingId = writtenClientReferences.get(clientReferenceKey);
		if (void 0 !== existingId) return parent[0] === REACT_ELEMENT_TYPE && "1" === parentPropertyName ? serializeLazyID(existingId) : serializeByValueID(existingId);
		try {
			var config = request.bundlerConfig, modulePath = clientReference.$$id;
			existingId = "";
			var resolvedModuleData = config[modulePath];
			if (resolvedModuleData) existingId = resolvedModuleData.name;
			else {
				var idx = modulePath.lastIndexOf("#");
				-1 !== idx && (existingId = modulePath.slice(idx + 1), resolvedModuleData = config[modulePath.slice(0, idx)]);
				if (!resolvedModuleData) throw Error("Could not find the module \"" + modulePath + "\" in the React Client Manifest. This is probably a bug in the React Server Components bundler.");
			}
			if (!0 === resolvedModuleData.async && !0 === clientReference.$$async) throw Error("The module \"" + modulePath + "\" is marked as an async ESM module but was loaded as a CJS proxy. This is probably a bug in the React Server Components bundler.");
			var JSCompiler_inline_result = !0 === resolvedModuleData.async || !0 === clientReference.$$async ? [
				resolvedModuleData.id,
				resolvedModuleData.chunks,
				existingId,
				1
			] : [
				resolvedModuleData.id,
				resolvedModuleData.chunks,
				existingId
			];
			request.pendingChunks++;
			var importId = request.nextChunkId++, json = stringify(JSCompiler_inline_result), processedChunk = stringToChunk(importId.toString(16) + ":I" + json + "\n");
			request.completedImportChunks.push(processedChunk);
			writtenClientReferences.set(clientReferenceKey, importId);
			return parent[0] === REACT_ELEMENT_TYPE && "1" === parentPropertyName ? serializeLazyID(importId) : serializeByValueID(importId);
		} catch (x) {
			return request.pendingChunks++, parent = request.nextChunkId++, parentPropertyName = logRecoverableError(request, x, null), emitErrorChunk(request, parent, parentPropertyName), serializeByValueID(parent);
		}
	}
	function outlineModelWithFormatContext(request, value, formatContext) {
		value = createTask(request, value, null, !1, formatContext, request.abortableTasks);
		retryTask(request, value);
		return value.id;
	}
	function serializeTypedArray(request, tag, typedArray) {
		request.pendingChunks++;
		var bufferId = request.nextChunkId++;
		emitTypedArrayChunk(request, bufferId, tag, typedArray, !1);
		return serializeByValueID(bufferId);
	}
	function serializeBlob(request, blob) {
		function progress(entry) {
			if (0 === newTask.status) if (entry.done) request.cacheController.signal.removeEventListener("abort", abortBlob), pingTask(request, newTask);
			else return model.push(entry.value), reader.read().then(progress).catch(error);
		}
		function error(reason) {
			0 === newTask.status && (request.cacheController.signal.removeEventListener("abort", abortBlob), erroredTask(request, newTask, reason), enqueueFlush(request), reader.cancel(reason).then(error, error));
		}
		function abortBlob() {
			if (0 === newTask.status) {
				var signal = request.cacheController.signal;
				signal.removeEventListener("abort", abortBlob);
				signal = signal.reason;
				21 === request.type ? (request.abortableTasks.delete(newTask), haltTask(newTask), finishHaltedTask(newTask, request)) : (erroredTask(request, newTask, signal), enqueueFlush(request));
				reader.cancel(signal).then(error, error);
			}
		}
		var model = [blob.type], newTask = createTask(request, model, null, !1, 0, request.abortableTasks), reader = blob.stream().getReader();
		request.cacheController.signal.addEventListener("abort", abortBlob);
		reader.read().then(progress).catch(error);
		return "$B" + newTask.id.toString(16);
	}
	var modelRoot = !1;
	function renderModelDestructive(request, task, parent, parentPropertyName, value) {
		task.model = value;
		if (value === REACT_ELEMENT_TYPE) return "$";
		if (null === value) return null;
		if ("object" === typeof value) {
			switch (value.$$typeof) {
				case REACT_ELEMENT_TYPE:
					var elementReference = null, writtenObjects = request.writtenObjects;
					if (null === task.keyPath && !task.implicitSlot) {
						var existingReference = writtenObjects.get(value);
						if (void 0 !== existingReference) if (modelRoot === value) modelRoot = null;
						else return existingReference;
						else -1 === parentPropertyName.indexOf(":") && (parent = writtenObjects.get(parent), void 0 !== parent && (elementReference = parent + ":" + parentPropertyName, writtenObjects.set(value, elementReference)));
					}
					if (3200 < serializedSize) return deferTask(request, task);
					parentPropertyName = value.props;
					parent = parentPropertyName.ref;
					request = renderElement(request, task, value.type, value.key, void 0 !== parent ? parent : null, parentPropertyName);
					"object" === typeof request && null !== request && null !== elementReference && (writtenObjects.has(request) || writtenObjects.set(request, elementReference));
					return request;
				case REACT_LAZY_TYPE:
					if (3200 < serializedSize) return deferTask(request, task);
					task.thenableState = null;
					parentPropertyName = value._init;
					value = parentPropertyName(value._payload);
					if (12 === request.status) throw null;
					return renderModelDestructive(request, task, emptyRoot, "", value);
				case REACT_LEGACY_ELEMENT_TYPE: throw Error("A React Element from an older version of React was rendered. This is not supported. It can happen if:\n- Multiple copies of the \"react\" package is used.\n- A library pre-bundled an old copy of \"react\" or \"react/jsx-runtime\".\n- A compiler tries to \"inline\" JSX instead of using the runtime.");
			}
			if (value.$$typeof === CLIENT_REFERENCE_TAG$1) return serializeClientReference(request, parent, parentPropertyName, value);
			if (void 0 !== request.temporaryReferences && (elementReference = request.temporaryReferences.get(value), void 0 !== elementReference)) return "$T" + elementReference;
			elementReference = request.writtenObjects;
			writtenObjects = elementReference.get(value);
			if ("function" === typeof value.then) {
				if (void 0 !== writtenObjects) {
					if (null !== task.keyPath || task.implicitSlot) return "$@" + serializeThenable(request, task, value).toString(16);
					if (modelRoot === value) modelRoot = null;
					else return writtenObjects;
				}
				request = "$@" + serializeThenable(request, task, value).toString(16);
				elementReference.set(value, request);
				return request;
			}
			if (void 0 !== writtenObjects) if (modelRoot === value) {
				if (writtenObjects !== serializeByValueID(task.id)) return writtenObjects;
				modelRoot = null;
			} else return writtenObjects;
			else if (-1 === parentPropertyName.indexOf(":") && (writtenObjects = elementReference.get(parent), void 0 !== writtenObjects)) {
				existingReference = parentPropertyName;
				if (isArrayImpl(parent) && parent[0] === REACT_ELEMENT_TYPE) switch (parentPropertyName) {
					case "1":
						existingReference = "type";
						break;
					case "2":
						existingReference = "key";
						break;
					case "3":
						existingReference = "props";
						break;
					case "4": existingReference = "_owner";
				}
				elementReference.set(value, writtenObjects + ":" + existingReference);
			}
			if (isArrayImpl(value)) return renderFragment(request, task, value);
			if (value instanceof Map) return value = Array.from(value), "$Q" + outlineModelWithFormatContext(request, value, 0).toString(16);
			if (value instanceof Set) return value = Array.from(value), "$W" + outlineModelWithFormatContext(request, value, 0).toString(16);
			if ("function" === typeof FormData && value instanceof FormData) return value = Array.from(value.entries()), "$K" + outlineModelWithFormatContext(request, value, 0).toString(16);
			if (value instanceof Error) return "$Z";
			if (value instanceof ArrayBuffer) return serializeTypedArray(request, "A", new Uint8Array(value));
			if (value instanceof Int8Array) return serializeTypedArray(request, "O", value);
			if (value instanceof Uint8Array) return serializeTypedArray(request, "o", value);
			if (value instanceof Uint8ClampedArray) return serializeTypedArray(request, "U", value);
			if (value instanceof Int16Array) return serializeTypedArray(request, "S", value);
			if (value instanceof Uint16Array) return serializeTypedArray(request, "s", value);
			if (value instanceof Int32Array) return serializeTypedArray(request, "L", value);
			if (value instanceof Uint32Array) return serializeTypedArray(request, "l", value);
			if (value instanceof Float32Array) return serializeTypedArray(request, "G", value);
			if (value instanceof Float64Array) return serializeTypedArray(request, "g", value);
			if (value instanceof BigInt64Array) return serializeTypedArray(request, "M", value);
			if (value instanceof BigUint64Array) return serializeTypedArray(request, "m", value);
			if (value instanceof DataView) return serializeTypedArray(request, "V", value);
			if ("function" === typeof Blob && value instanceof Blob) return serializeBlob(request, value);
			if (elementReference = getIteratorFn(value)) return parentPropertyName = elementReference.call(value), parentPropertyName === value ? (value = Array.from(parentPropertyName), "$i" + outlineModelWithFormatContext(request, value, 0).toString(16)) : renderFragment(request, task, Array.from(parentPropertyName));
			if ("function" === typeof ReadableStream && value instanceof ReadableStream) return serializeReadableStream(request, task, value);
			elementReference = value[ASYNC_ITERATOR];
			if ("function" === typeof elementReference) return null !== task.keyPath ? (request = [
				REACT_ELEMENT_TYPE,
				REACT_FRAGMENT_TYPE,
				task.keyPath,
				{ children: value }
			], request = task.implicitSlot ? [request] : request) : (parentPropertyName = elementReference.call(value), request = serializeAsyncIterable(request, task, value, parentPropertyName)), request;
			if (value instanceof Date) return "$D" + value.toJSON();
			request = getPrototypeOf(value);
			if (request !== ObjectPrototype$1 && (null === request || null !== getPrototypeOf(request))) throw Error("Only plain objects, and a few built-ins, can be passed to Client Components from Server Components. Classes or null prototypes are not supported." + describeObjectForErrorMessage(parent, parentPropertyName));
			return value;
		}
		if ("string" === typeof value) {
			serializedSize += value.length;
			if ("Z" === value[value.length - 1] && parent[parentPropertyName] instanceof Date) return "$D" + value;
			if (1024 <= value.length && null !== byteLengthOfChunk) return request.pendingChunks++, task = request.nextChunkId++, emitTextChunk(request, task, value, !1), serializeByValueID(task);
			request = "$" === value[0] ? "$" + value : value;
			return request;
		}
		if ("boolean" === typeof value) return value;
		if ("number" === typeof value) return Number.isFinite(value) ? 0 === value && -Infinity === 1 / value ? "$-0" : value : Infinity === value ? "$Infinity" : -Infinity === value ? "$-Infinity" : "$NaN";
		if ("undefined" === typeof value) return "$undefined";
		if ("function" === typeof value) {
			if (value.$$typeof === CLIENT_REFERENCE_TAG$1) return serializeClientReference(request, parent, parentPropertyName, value);
			if (value.$$typeof === SERVER_REFERENCE_TAG) return task = request.writtenServerReferences, parentPropertyName = task.get(value), void 0 !== parentPropertyName ? request = "$h" + parentPropertyName.toString(16) : (parentPropertyName = value.$$bound, parentPropertyName = null === parentPropertyName ? null : Promise.resolve(parentPropertyName), request = outlineModelWithFormatContext(request, {
				id: value.$$id,
				bound: parentPropertyName
			}, 0), task.set(value, request), request = "$h" + request.toString(16)), request;
			if (void 0 !== request.temporaryReferences && (request = request.temporaryReferences.get(value), void 0 !== request)) return "$T" + request;
			if (value.$$typeof === TEMPORARY_REFERENCE_TAG) throw Error("Could not reference an opaque temporary reference. This is likely due to misconfiguring the temporaryReferences options on the server.");
			if (/^on[A-Z]/.test(parentPropertyName)) throw Error("Event handlers cannot be passed to Client Component props." + describeObjectForErrorMessage(parent, parentPropertyName) + "\nIf you need interactivity, consider converting part of this to a Client Component.");
			throw Error("Functions cannot be passed directly to Client Components unless you explicitly expose it by marking it with \"use server\". Or maybe you meant to call this function rather than return it." + describeObjectForErrorMessage(parent, parentPropertyName));
		}
		if ("symbol" === typeof value) {
			task = request.writtenSymbols;
			elementReference = task.get(value);
			if (void 0 !== elementReference) return serializeByValueID(elementReference);
			elementReference = value.description;
			if (Symbol.for(elementReference) !== value) throw Error("Only global symbols received from Symbol.for(...) can be passed to Client Components. The symbol Symbol.for(" + (value.description + ") cannot be found among global symbols.") + describeObjectForErrorMessage(parent, parentPropertyName));
			request.pendingChunks++;
			parentPropertyName = request.nextChunkId++;
			parent = encodeReferenceChunk(request, parentPropertyName, "$S" + elementReference);
			request.completedImportChunks.push(parent);
			task.set(value, parentPropertyName);
			return serializeByValueID(parentPropertyName);
		}
		if ("bigint" === typeof value) return "$n" + value.toString(10);
		throw Error("Type " + typeof value + " is not supported in Client Component props." + describeObjectForErrorMessage(parent, parentPropertyName));
	}
	function logRecoverableError(request, error) {
		var prevRequest = currentRequest;
		currentRequest = null;
		try {
			var onError = request.onError;
			var errorDigest = supportsRequestStorage ? requestStorage.run(void 0, onError, error) : onError(error);
		} finally {
			currentRequest = prevRequest;
		}
		if (null != errorDigest && "string" !== typeof errorDigest) throw Error("onError returned something with a type other than \"string\". onError should return a string and may return null or undefined but must not return anything else. It received something of type \"" + typeof errorDigest + "\" instead");
		return errorDigest || "";
	}
	function fatalError(request, error) {
		var onFatalError = request.onFatalError;
		onFatalError(error);
		null !== request.destination ? (request.status = 14, closeWithError(request.destination, error)) : (request.status = 13, request.fatalError = error);
		request.cacheController.abort(Error("The render was aborted due to a fatal error.", { cause: error }));
	}
	function emitErrorChunk(request, id, digest) {
		digest = { digest };
		id = id.toString(16) + ":E" + stringify(digest) + "\n";
		id = stringToChunk(id);
		request.completedErrorChunks.push(id);
	}
	function emitModelChunk(request, id, json) {
		id = id.toString(16) + ":" + json + "\n";
		id = stringToChunk(id);
		request.completedRegularChunks.push(id);
	}
	function emitTypedArrayChunk(request, id, tag, typedArray, debug) {
		debug ? request.pendingDebugChunks++ : request.pendingChunks++;
		debug = new Uint8Array(typedArray.buffer, typedArray.byteOffset, typedArray.byteLength);
		typedArray = 2048 < typedArray.byteLength ? debug.slice() : debug;
		debug = typedArray.byteLength;
		id = id.toString(16) + ":" + tag + debug.toString(16) + ",";
		id = stringToChunk(id);
		request.completedRegularChunks.push(id, typedArray);
	}
	function emitTextChunk(request, id, text, debug) {
		if (null === byteLengthOfChunk) throw Error("Existence of byteLengthOfChunk should have already been checked. This is a bug in React.");
		debug ? request.pendingDebugChunks++ : request.pendingChunks++;
		text = stringToChunk(text);
		debug = text.byteLength;
		id = id.toString(16) + ":T" + debug.toString(16) + ",";
		id = stringToChunk(id);
		request.completedRegularChunks.push(id, text);
	}
	function emitChunk(request, task, value) {
		var id = task.id;
		"string" === typeof value && null !== byteLengthOfChunk ? emitTextChunk(request, id, value, !1) : value instanceof ArrayBuffer ? emitTypedArrayChunk(request, id, "A", new Uint8Array(value), !1) : value instanceof Int8Array ? emitTypedArrayChunk(request, id, "O", value, !1) : value instanceof Uint8Array ? emitTypedArrayChunk(request, id, "o", value, !1) : value instanceof Uint8ClampedArray ? emitTypedArrayChunk(request, id, "U", value, !1) : value instanceof Int16Array ? emitTypedArrayChunk(request, id, "S", value, !1) : value instanceof Uint16Array ? emitTypedArrayChunk(request, id, "s", value, !1) : value instanceof Int32Array ? emitTypedArrayChunk(request, id, "L", value, !1) : value instanceof Uint32Array ? emitTypedArrayChunk(request, id, "l", value, !1) : value instanceof Float32Array ? emitTypedArrayChunk(request, id, "G", value, !1) : value instanceof Float64Array ? emitTypedArrayChunk(request, id, "g", value, !1) : value instanceof BigInt64Array ? emitTypedArrayChunk(request, id, "M", value, !1) : value instanceof BigUint64Array ? emitTypedArrayChunk(request, id, "m", value, !1) : value instanceof DataView ? emitTypedArrayChunk(request, id, "V", value, !1) : (value = stringify(value, task.toJSON), emitModelChunk(request, task.id, value));
	}
	function erroredTask(request, task, error) {
		task.status = 4;
		error = logRecoverableError(request, error, task);
		emitErrorChunk(request, task.id, error);
		request.abortableTasks.delete(task);
		callOnAllReadyIfReady(request);
	}
	var emptyRoot = {};
	function retryTask(request, task) {
		if (0 === task.status) {
			task.status = 5;
			var parentSerializedSize = serializedSize;
			try {
				modelRoot = task.model;
				var resolvedModel = renderModelDestructive(request, task, emptyRoot, "", task.model);
				modelRoot = resolvedModel;
				task.keyPath = null;
				task.implicitSlot = !1;
				if ("object" === typeof resolvedModel && null !== resolvedModel) request.writtenObjects.set(resolvedModel, serializeByValueID(task.id)), emitChunk(request, task, resolvedModel);
				else {
					var json = stringify(resolvedModel);
					emitModelChunk(request, task.id, json);
				}
				task.status = 1;
				request.abortableTasks.delete(task);
				callOnAllReadyIfReady(request);
			} catch (thrownValue) {
				if (12 === request.status) if (request.abortableTasks.delete(task), task.status = 0, 21 === request.type) haltTask(task), finishHaltedTask(task, request);
				else {
					var errorId = request.fatalError;
					abortTask(task);
					finishAbortedTask(task, request, errorId);
				}
				else {
					var x = thrownValue === SuspenseException ? getSuspendedThenable() : thrownValue;
					if ("object" === typeof x && null !== x && "function" === typeof x.then) {
						task.status = 0;
						task.thenableState = getThenableStateAfterSuspending();
						var ping = task.ping;
						x.then(ping, ping);
					} else erroredTask(request, task, x);
				}
			} finally {
				serializedSize = parentSerializedSize;
			}
		}
	}
	function tryStreamTask(request, task) {
		var parentSerializedSize = serializedSize;
		try {
			emitChunk(request, task, task.model);
		} finally {
			serializedSize = parentSerializedSize;
		}
	}
	function performWork(request) {
		var prevDispatcher = ReactSharedInternalsServer.H;
		ReactSharedInternalsServer.H = HooksDispatcher;
		var prevRequest = currentRequest;
		currentRequest$1 = currentRequest = request;
		try {
			var pingedTasks = request.pingedTasks;
			request.pingedTasks = [];
			for (var i = 0; i < pingedTasks.length; i++) retryTask(request, pingedTasks[i]);
			flushCompletedChunks(request);
		} catch (error) {
			logRecoverableError(request, error, null), fatalError(request, error);
		} finally {
			ReactSharedInternalsServer.H = prevDispatcher, currentRequest$1 = null, currentRequest = prevRequest;
		}
	}
	function abortTask(task) {
		0 === task.status && (task.status = 3);
	}
	function finishAbortedTask(task, request, errorId) {
		3 === task.status && (errorId = serializeByValueID(errorId), task = encodeReferenceChunk(request, task.id, errorId), request.completedErrorChunks.push(task));
	}
	function haltTask(task) {
		0 === task.status && (task.status = 3);
	}
	function finishHaltedTask(task, request) {
		3 === task.status && request.pendingChunks--;
	}
	function flushCompletedChunks(request) {
		var destination = request.destination;
		if (null !== destination) {
			currentView = new Uint8Array(2048);
			writtenBytes = 0;
			try {
				for (var importsChunks = request.completedImportChunks, i = 0; i < importsChunks.length; i++) request.pendingChunks--, writeChunkAndReturn(destination, importsChunks[i]);
				importsChunks.splice(0, i);
				var hintChunks = request.completedHintChunks;
				for (i = 0; i < hintChunks.length; i++) writeChunkAndReturn(destination, hintChunks[i]);
				hintChunks.splice(0, i);
				var regularChunks = request.completedRegularChunks;
				for (i = 0; i < regularChunks.length; i++) request.pendingChunks--, writeChunkAndReturn(destination, regularChunks[i]);
				regularChunks.splice(0, i);
				var errorChunks = request.completedErrorChunks;
				for (i = 0; i < errorChunks.length; i++) request.pendingChunks--, writeChunkAndReturn(destination, errorChunks[i]);
				errorChunks.splice(0, i);
			} finally {
				request.flushScheduled = !1, currentView && 0 < writtenBytes && (destination.enqueue(new Uint8Array(currentView.buffer, 0, writtenBytes)), currentView = null, writtenBytes = 0);
			}
		}
		0 === request.pendingChunks && (12 > request.status && request.cacheController.abort(Error("This render completed successfully. All cacheSignals are now aborted to allow clean up of any unused resources.")), null !== request.destination && (request.status = 14, request.destination.close(), request.destination = null));
	}
	function startWork(request) {
		request.flushScheduled = null !== request.destination;
		supportsRequestStorage ? scheduleMicrotask(function() {
			requestStorage.run(request, performWork, request);
		}) : scheduleMicrotask(function() {
			return performWork(request);
		});
		setTimeout(function() {
			10 === request.status && (request.status = 11);
		}, 0);
	}
	function enqueueFlush(request) {
		!1 === request.flushScheduled && 0 === request.pingedTasks.length && null !== request.destination && (request.flushScheduled = !0, setTimeout(function() {
			request.flushScheduled = !1;
			flushCompletedChunks(request);
		}, 0));
	}
	function callOnAllReadyIfReady(request) {
		0 === request.abortableTasks.size && (request = request.onAllReady, request());
	}
	function startFlowing(request, destination) {
		if (13 === request.status) request.status = 14, closeWithError(destination, request.fatalError);
		else if (14 !== request.status && null === request.destination) {
			request.destination = destination;
			try {
				flushCompletedChunks(request);
			} catch (error) {
				logRecoverableError(request, error, null), fatalError(request, error);
			}
		}
	}
	function finishHalt(request, abortedTasks) {
		try {
			abortedTasks.forEach(function(task) {
				return finishHaltedTask(task, request);
			});
			var onAllReady = request.onAllReady;
			onAllReady();
			flushCompletedChunks(request);
		} catch (error) {
			logRecoverableError(request, error, null), fatalError(request, error);
		}
	}
	function finishAbort(request, abortedTasks, errorId) {
		try {
			abortedTasks.forEach(function(task) {
				return finishAbortedTask(task, request, errorId);
			});
			var onAllReady = request.onAllReady;
			onAllReady();
			flushCompletedChunks(request);
		} catch (error) {
			logRecoverableError(request, error, null), fatalError(request, error);
		}
	}
	function abort(request, reason) {
		if (!(11 < request.status)) try {
			request.status = 12;
			request.cacheController.abort(reason);
			var abortableTasks = request.abortableTasks;
			if (0 < abortableTasks.size) if (21 === request.type) abortableTasks.forEach(function(task) {
				return haltTask(task, request);
			}), setTimeout(function() {
				return finishHalt(request, abortableTasks);
			}, 0);
			else {
				var error = void 0 === reason ? Error("The render was aborted by the server without a reason.") : "object" === typeof reason && null !== reason && "function" === typeof reason.then ? Error("The render was aborted by the server with a promise.") : reason, digest = logRecoverableError(request, error, null), errorId = request.nextChunkId++;
				request.fatalError = errorId;
				request.pendingChunks++;
				emitErrorChunk(request, errorId, digest, error, !1, null);
				abortableTasks.forEach(function(task) {
					return abortTask(task, request, errorId);
				});
				setTimeout(function() {
					return finishAbort(request, abortableTasks, errorId);
				}, 0);
			}
			else {
				var onAllReady = request.onAllReady;
				onAllReady();
				flushCompletedChunks(request);
			}
		} catch (error$26) {
			logRecoverableError(request, error$26, null), fatalError(request, error$26);
		}
	}
	function resolveServerReference(bundlerConfig, id) {
		var name = "", resolvedModuleData = bundlerConfig[id];
		if (resolvedModuleData) name = resolvedModuleData.name;
		else {
			var idx = id.lastIndexOf("#");
			-1 !== idx && (name = id.slice(idx + 1), resolvedModuleData = bundlerConfig[id.slice(0, idx)]);
			if (!resolvedModuleData) throw Error("Could not find the module \"" + id + "\" in the React Server Manifest. This is probably a bug in the React Server Components bundler.");
		}
		return resolvedModuleData.async ? [
			resolvedModuleData.id,
			resolvedModuleData.chunks,
			name,
			1
		] : [
			resolvedModuleData.id,
			resolvedModuleData.chunks,
			name
		];
	}
	var chunkCache = /* @__PURE__ */ new Map();
	function requireAsyncModule(id) {
		var promise = __vite_rsc_require__(id);
		if ("function" !== typeof promise.then || "fulfilled" === promise.status) return null;
		promise.then(function(value) {
			promise.status = "fulfilled";
			promise.value = value;
		}, function(reason) {
			promise.status = "rejected";
			promise.reason = reason;
		});
		return promise;
	}
	function ignoreReject() {}
	function preloadModule(metadata) {
		for (var chunks = metadata[1], promises = [], i = 0; i < chunks.length;) {
			var chunkId = chunks[i++];
			chunks[i++];
			var entry = chunkCache.get(chunkId);
			if (void 0 === entry) {
				entry = __webpack_chunk_load__(chunkId);
				promises.push(entry);
				var resolve = chunkCache.set.bind(chunkCache, chunkId, null);
				entry.then(resolve, ignoreReject);
				chunkCache.set(chunkId, entry);
			} else null !== entry && promises.push(entry);
		}
		return 4 === metadata.length ? 0 === promises.length ? requireAsyncModule(metadata[0]) : Promise.all(promises).then(function() {
			return requireAsyncModule(metadata[0]);
		}) : 0 < promises.length ? Promise.all(promises) : null;
	}
	function requireModule(metadata) {
		var moduleExports = __vite_rsc_require__(metadata[0]);
		if (4 === metadata.length && "function" === typeof moduleExports.then) if ("fulfilled" === moduleExports.status) moduleExports = moduleExports.value;
		else throw moduleExports.reason;
		if ("*" === metadata[2]) return moduleExports;
		if ("" === metadata[2]) return moduleExports.__esModule ? moduleExports.default : moduleExports;
		if (hasOwnProperty.call(moduleExports, metadata[2])) return moduleExports[metadata[2]];
	}
	var RESPONSE_SYMBOL = Symbol();
	function ReactPromise(status, value, reason) {
		this.status = status;
		this.value = value;
		this.reason = reason;
	}
	ReactPromise.prototype = Object.create(Promise.prototype);
	ReactPromise.prototype.then = function(resolve, reject) {
		switch (this.status) {
			case "resolved_model": initializeModelChunk(this);
		}
		switch (this.status) {
			case "fulfilled":
				if ("function" === typeof resolve) {
					for (var inspectedValue = this.value, cycleProtection = 0, visited = /* @__PURE__ */ new Set(); inspectedValue instanceof ReactPromise;) {
						cycleProtection++;
						if (inspectedValue === this || visited.has(inspectedValue) || 1e3 < cycleProtection) {
							"function" === typeof reject && reject(Error("Cannot have cyclic thenables."));
							return;
						}
						visited.add(inspectedValue);
						if ("fulfilled" === inspectedValue.status) inspectedValue = inspectedValue.value;
						else break;
					}
					resolve(this.value);
				}
				break;
			case "pending":
			case "blocked":
				"function" === typeof resolve && (null === this.value && (this.value = []), this.value.push(resolve));
				"function" === typeof reject && (null === this.reason && (this.reason = []), this.reason.push(reject));
				break;
			default: "function" === typeof reject && reject(this.reason);
		}
	};
	var ObjectPrototype = Object.prototype, ArrayPrototype = Array.prototype;
	function wakeChunk(response, listeners, value, chunk) {
		for (var i = 0; i < listeners.length; i++) {
			var listener = listeners[i];
			"function" === typeof listener ? listener(value) : fulfillReference(response, listener, value, chunk.reason);
		}
	}
	function rejectChunk(response, listeners, error) {
		for (var i = 0; i < listeners.length; i++) {
			var listener = listeners[i];
			"function" === typeof listener ? listener(error) : rejectReference(response, listener.handler, error);
		}
	}
	function triggerErrorOnChunk(response, chunk, error) {
		if ("pending" !== chunk.status && "blocked" !== chunk.status) chunk.reason.error(error);
		else {
			var listeners = chunk.reason;
			chunk.status = "rejected";
			chunk.reason = error;
			null !== listeners && rejectChunk(response, listeners, error);
		}
	}
	function createResolvedModelChunk(response, value, id) {
		var $jscomp$compprop2 = {};
		return new ReactPromise("resolved_model", value, ($jscomp$compprop2.id = id, $jscomp$compprop2[RESPONSE_SYMBOL] = response, $jscomp$compprop2));
	}
	function resolveModelChunk(response, chunk, value, id) {
		if ("pending" !== chunk.status) chunk = chunk.reason, "C" === value[0] ? chunk.close("C" === value ? "\"$undefined\"" : value.slice(1)) : chunk.enqueueModel(value);
		else {
			var resolveListeners = chunk.value, rejectListeners = chunk.reason;
			chunk.status = "resolved_model";
			chunk.value = value;
			value = {};
			chunk.reason = (value.id = id, value[RESPONSE_SYMBOL] = response, value);
			if (null !== resolveListeners) switch (initializeModelChunk(chunk), chunk.status) {
				case "fulfilled":
					wakeChunk(response, resolveListeners, chunk.value, chunk);
					break;
				case "blocked":
				case "pending":
					if (chunk.value) for (response = 0; response < resolveListeners.length; response++) chunk.value.push(resolveListeners[response]);
					else chunk.value = resolveListeners;
					if (chunk.reason) {
						if (rejectListeners) for (resolveListeners = 0; resolveListeners < rejectListeners.length; resolveListeners++) chunk.reason.push(rejectListeners[resolveListeners]);
					} else chunk.reason = rejectListeners;
					break;
				case "rejected": rejectListeners && rejectChunk(response, rejectListeners, chunk.reason);
			}
		}
	}
	function createResolvedIteratorResultChunk(response, value, done) {
		var $jscomp$compprop4 = {};
		return new ReactPromise("resolved_model", (done ? "{\"done\":true,\"value\":" : "{\"done\":false,\"value\":") + value + "}", ($jscomp$compprop4.id = -1, $jscomp$compprop4[RESPONSE_SYMBOL] = response, $jscomp$compprop4));
	}
	function resolveIteratorResultChunk(response, chunk, value, done) {
		resolveModelChunk(response, chunk, (done ? "{\"done\":true,\"value\":" : "{\"done\":false,\"value\":") + value + "}", -1);
	}
	function loadServerReference$1(response, metaData, parentObject, key) {
		function reject(error) {
			var rejectListeners = blockedPromise.reason, erroredPromise = blockedPromise;
			erroredPromise.status = "rejected";
			erroredPromise.value = null;
			erroredPromise.reason = error;
			null !== rejectListeners && rejectChunk(response, rejectListeners, error);
			rejectReference(response, handler, error);
		}
		var id = metaData.id;
		if ("string" !== typeof id || "then" === key) return null;
		var cachedPromise = metaData.$$promise;
		if (void 0 !== cachedPromise) {
			if ("fulfilled" === cachedPromise.status) return cachedPromise = cachedPromise.value, "__proto__" === key ? null : parentObject[key] = cachedPromise;
			initializingHandler ? (id = initializingHandler, id.deps++) : id = initializingHandler = {
				chunk: null,
				value: null,
				reason: null,
				deps: 1,
				errored: !1
			};
			cachedPromise.then(resolveReference.bind(null, response, id, parentObject, key), rejectReference.bind(null, response, id));
			return null;
		}
		var blockedPromise = new ReactPromise("blocked", null, null);
		metaData.$$promise = blockedPromise;
		var serverReference = resolveServerReference(response._bundlerConfig, id);
		cachedPromise = metaData.bound;
		if (id = preloadModule(serverReference)) cachedPromise instanceof ReactPromise && (id = Promise.all([id, cachedPromise]));
		else if (cachedPromise instanceof ReactPromise) id = Promise.resolve(cachedPromise);
		else return cachedPromise = requireModule(serverReference), id = blockedPromise, id.status = "fulfilled", id.value = cachedPromise;
		if (initializingHandler) {
			var handler = initializingHandler;
			handler.deps++;
		} else handler = initializingHandler = {
			chunk: null,
			value: null,
			reason: null,
			deps: 1,
			errored: !1
		};
		id.then(function() {
			var resolvedValue = requireModule(serverReference);
			if (metaData.bound) {
				var promiseValue = metaData.bound.value;
				promiseValue = isArrayImpl(promiseValue) ? promiseValue.slice(0) : [];
				if (1e3 < promiseValue.length) {
					reject(Error("Server Function has too many bound arguments. Received " + promiseValue.length + " but the limit is 1000."));
					return;
				}
				promiseValue.unshift(null);
				resolvedValue = resolvedValue.bind.apply(resolvedValue, promiseValue);
			}
			promiseValue = blockedPromise.value;
			var initializedPromise = blockedPromise;
			initializedPromise.status = "fulfilled";
			initializedPromise.value = resolvedValue;
			initializedPromise.reason = null;
			null !== promiseValue && wakeChunk(response, promiseValue, resolvedValue, initializedPromise);
			resolveReference(response, handler, parentObject, key, resolvedValue);
		}, reject);
		return null;
	}
	function reviveModel(response, parentObj, parentKey, value, reference, arrayRoot) {
		if ("string" === typeof value) return parseModelString(response, parentObj, parentKey, value, reference, arrayRoot);
		if ("object" === typeof value && null !== value) if (void 0 !== reference && void 0 !== response._temporaryReferences && response._temporaryReferences.set(value, reference), isArrayImpl(value)) {
			if (null === arrayRoot) {
				var childContext = {
					count: 0,
					fork: !1
				};
				response._rootArrayContexts.set(value, childContext);
			} else childContext = arrayRoot;
			1 < value.length && (childContext.fork = !0);
			bumpArrayCount(childContext, value.length + 1, response);
			for (parentObj = 0; parentObj < value.length; parentObj++) value[parentObj] = reviveModel(response, value, "" + parentObj, value[parentObj], void 0 !== reference ? reference + ":" + parentObj : void 0, childContext);
		} else for (childContext in value) hasOwnProperty.call(value, childContext) && ("__proto__" === childContext ? delete value[childContext] : (parentObj = void 0 !== reference && -1 === childContext.indexOf(":") ? reference + ":" + childContext : void 0, parentObj = reviveModel(response, value, childContext, value[childContext], parentObj, null), void 0 !== parentObj ? value[childContext] = parentObj : delete value[childContext]));
		return value;
	}
	function bumpArrayCount(arrayContext, slots, response) {
		if ((arrayContext.count += slots) > response._arraySizeLimit && arrayContext.fork) throw Error("Maximum array nesting exceeded. Large nested arrays can be dangerous. Try adding intermediate objects.");
	}
	var initializingHandler = null;
	function initializeModelChunk(chunk) {
		var prevHandler = initializingHandler;
		initializingHandler = null;
		var _chunk$reason = chunk.reason, response = _chunk$reason[RESPONSE_SYMBOL];
		_chunk$reason = _chunk$reason.id;
		_chunk$reason = -1 === _chunk$reason ? void 0 : _chunk$reason.toString(16);
		var resolvedModel = chunk.value;
		chunk.status = "blocked";
		chunk.value = null;
		chunk.reason = null;
		try {
			var rawModel = JSON.parse(resolvedModel);
			resolvedModel = {
				count: 0,
				fork: !1
			};
			var value = reviveModel(response, { "": rawModel }, "", rawModel, _chunk$reason, resolvedModel), resolveListeners = chunk.value;
			if (null !== resolveListeners) for (chunk.value = null, chunk.reason = null, rawModel = 0; rawModel < resolveListeners.length; rawModel++) {
				var listener = resolveListeners[rawModel];
				"function" === typeof listener ? listener(value) : fulfillReference(response, listener, value, resolvedModel);
			}
			if (null !== initializingHandler) {
				if (initializingHandler.errored) throw initializingHandler.reason;
				if (0 < initializingHandler.deps) {
					initializingHandler.value = value;
					initializingHandler.reason = resolvedModel;
					initializingHandler.chunk = chunk;
					return;
				}
			}
			chunk.status = "fulfilled";
			chunk.value = value;
			chunk.reason = resolvedModel;
		} catch (error) {
			chunk.status = "rejected", chunk.reason = error;
		} finally {
			initializingHandler = prevHandler;
		}
	}
	function reportGlobalError(response, error) {
		response._closed = !0;
		response._closedReason = error;
		response._chunks.forEach(function(chunk) {
			"pending" === chunk.status ? triggerErrorOnChunk(response, chunk, error) : "fulfilled" === chunk.status && null !== chunk.reason && (chunk = chunk.reason, "function" === typeof chunk.error && chunk.error(error));
		});
	}
	function getChunk(response, id) {
		var chunks = response._chunks, chunk = chunks.get(id);
		chunk || (chunk = response._formData.get(response._prefix + id), chunk = "string" === typeof chunk ? createResolvedModelChunk(response, chunk, id) : response._closed ? new ReactPromise("rejected", null, response._closedReason) : new ReactPromise("pending", null, null), chunks.set(id, chunk));
		return chunk;
	}
	function fulfillReference(response, reference, value, arrayRoot) {
		var handler = reference.handler, parentObject = reference.parentObject, key = reference.key, map = reference.map, path = reference.path;
		try {
			for (var localLength = 0, rootArrayContexts = response._rootArrayContexts, i = 1; i < path.length; i++) {
				var name = path[i];
				if ("object" !== typeof value || null === value || getPrototypeOf(value) !== ObjectPrototype && getPrototypeOf(value) !== ArrayPrototype || !hasOwnProperty.call(value, name)) throw Error("Invalid reference.");
				value = value[name];
				if (isArrayImpl(value)) localLength = 0, arrayRoot = rootArrayContexts.get(value) || arrayRoot;
				else if (arrayRoot = null, "string" === typeof value) localLength = value.length;
				else if ("bigint" === typeof value) {
					var n = Math.abs(Number(value));
					localLength = 0 === n ? 1 : Math.floor(Math.log10(n)) + 1;
				} else localLength = ArrayBuffer.isView(value) ? value.byteLength : 0;
			}
			var resolvedValue = map(response, value, parentObject, key);
			var referenceArrayRoot = reference.arrayRoot;
			null !== referenceArrayRoot && (null !== arrayRoot ? (arrayRoot.fork && (referenceArrayRoot.fork = !0), bumpArrayCount(referenceArrayRoot, arrayRoot.count, response)) : 0 < localLength && bumpArrayCount(referenceArrayRoot, localLength, response));
		} catch (error) {
			rejectReference(response, handler, error);
			return;
		}
		resolveReference(response, handler, parentObject, key, resolvedValue);
	}
	function resolveReference(response, handler, parentObject, key, resolvedValue) {
		"__proto__" !== key && (parentObject[key] = resolvedValue);
		"" === key && null === handler.value && (handler.value = resolvedValue);
		handler.deps--;
		0 === handler.deps && (parentObject = handler.chunk, null !== parentObject && "blocked" === parentObject.status && (key = parentObject.value, parentObject.status = "fulfilled", parentObject.value = handler.value, parentObject.reason = handler.reason, null !== key && wakeChunk(response, key, handler.value, parentObject)));
	}
	function rejectReference(response, handler, error) {
		handler.errored || (handler.errored = !0, handler.value = null, handler.reason = error, handler = handler.chunk, null !== handler && "blocked" === handler.status && triggerErrorOnChunk(response, handler, error));
	}
	function getOutlinedModel(response, reference, parentObject, key, referenceArrayRoot, map) {
		reference = reference.split(":");
		var id = parseInt(reference[0], 16), chunk = getChunk(response, id);
		switch (chunk.status) {
			case "resolved_model": initializeModelChunk(chunk);
		}
		switch (chunk.status) {
			case "fulfilled":
				id = chunk.value;
				chunk = chunk.reason;
				for (var localLength = 0, rootArrayContexts = response._rootArrayContexts, i = 1; i < reference.length; i++) {
					localLength = reference[i];
					if ("object" !== typeof id || null === id || getPrototypeOf(id) !== ObjectPrototype && getPrototypeOf(id) !== ArrayPrototype || !hasOwnProperty.call(id, localLength)) throw Error("Invalid reference.");
					id = id[localLength];
					isArrayImpl(id) ? (localLength = 0, chunk = rootArrayContexts.get(id) || chunk) : (chunk = null, "string" === typeof id ? localLength = id.length : "bigint" === typeof id ? (localLength = Math.abs(Number(id)), localLength = 0 === localLength ? 1 : Math.floor(Math.log10(localLength)) + 1) : localLength = ArrayBuffer.isView(id) ? id.byteLength : 0);
				}
				parentObject = map(response, id, parentObject, key);
				null !== referenceArrayRoot && (null !== chunk ? (chunk.fork && (referenceArrayRoot.fork = !0), bumpArrayCount(referenceArrayRoot, chunk.count, response)) : 0 < localLength && bumpArrayCount(referenceArrayRoot, localLength, response));
				return parentObject;
			case "blocked": return initializingHandler ? (response = initializingHandler, response.deps++) : response = initializingHandler = {
				chunk: null,
				value: null,
				reason: null,
				deps: 1,
				errored: !1
			}, referenceArrayRoot = {
				handler: response,
				parentObject,
				key,
				map,
				path: reference,
				arrayRoot: referenceArrayRoot
			}, null === chunk.value ? chunk.value = [referenceArrayRoot] : chunk.value.push(referenceArrayRoot), null === chunk.reason ? chunk.reason = [referenceArrayRoot] : chunk.reason.push(referenceArrayRoot), null;
			case "pending": throw Error("Invalid forward reference.");
			default: return initializingHandler ? (initializingHandler.errored = !0, initializingHandler.value = null, initializingHandler.reason = chunk.reason) : initializingHandler = {
				chunk: null,
				value: null,
				reason: chunk.reason,
				deps: 0,
				errored: !0
			}, null;
		}
	}
	function createMap(response, model) {
		if (!isArrayImpl(model)) throw Error("Invalid Map initializer.");
		if (!0 === model.$$consumed) throw Error("Already initialized Map.");
		response = new Map(model);
		model.$$consumed = !0;
		return response;
	}
	function createSet(response, model) {
		if (!isArrayImpl(model)) throw Error("Invalid Set initializer.");
		if (!0 === model.$$consumed) throw Error("Already initialized Set.");
		response = new Set(model);
		model.$$consumed = !0;
		return response;
	}
	function extractIterator(response, model) {
		if (!isArrayImpl(model)) throw Error("Invalid Iterator initializer.");
		if (!0 === model.$$consumed) throw Error("Already initialized Iterator.");
		response = model[Symbol.iterator]();
		model.$$consumed = !0;
		return response;
	}
	function createModel(response, model, parentObject, key) {
		return "then" === key && "function" === typeof model ? null : model;
	}
	function parseTypedArray(response, reference, constructor, bytesPerElement, parentObject, parentKey, referenceArrayRoot) {
		function reject(error) {
			if (!handler.errored) {
				handler.errored = !0;
				handler.value = null;
				handler.reason = error;
				var chunk = handler.chunk;
				null !== chunk && "blocked" === chunk.status && triggerErrorOnChunk(response, chunk, error);
			}
		}
		reference = parseInt(reference.slice(2), 16);
		var key = response._prefix + reference;
		bytesPerElement = response._chunks;
		if (bytesPerElement.has(reference)) throw Error("Already initialized typed array.");
		bytesPerElement.set(reference, new ReactPromise("rejected", null, Error("Already initialized typed array.")));
		reference = response._formData.get(key).arrayBuffer();
		if (initializingHandler) {
			var handler = initializingHandler;
			handler.deps++;
		} else handler = initializingHandler = {
			chunk: null,
			value: null,
			reason: null,
			deps: 1,
			errored: !1
		};
		reference.then(function(buffer) {
			try {
				null !== referenceArrayRoot && bumpArrayCount(referenceArrayRoot, buffer.byteLength, response);
				var resolvedValue = constructor === ArrayBuffer ? buffer : new constructor(buffer);
				"__proto__" !== key && (parentObject[parentKey] = resolvedValue);
				"" === parentKey && null === handler.value && (handler.value = resolvedValue);
			} catch (x) {
				reject(x);
				return;
			}
			handler.deps--;
			0 === handler.deps && (buffer = handler.chunk, null !== buffer && "blocked" === buffer.status && (resolvedValue = buffer.value, buffer.status = "fulfilled", buffer.value = handler.value, buffer.reason = null, null !== resolvedValue && wakeChunk(response, resolvedValue, handler.value, buffer)));
		}, reject);
		return null;
	}
	function resolveStream(response, id, stream, controller) {
		var chunks = response._chunks;
		stream = new ReactPromise("fulfilled", stream, controller);
		chunks.set(id, stream);
		response = response._formData.getAll(response._prefix + id);
		for (id = 0; id < response.length; id++) chunks = response[id], "string" === typeof chunks && ("C" === chunks[0] ? controller.close("C" === chunks ? "\"$undefined\"" : chunks.slice(1)) : controller.enqueueModel(chunks));
	}
	function parseReadableStream(response, reference, type) {
		function enqueue(value) {
			"bytes" !== type || ArrayBuffer.isView(value) ? controller.enqueue(value) : flightController.error(Error("Invalid data for bytes stream."));
		}
		reference = parseInt(reference.slice(2), 16);
		if (response._chunks.has(reference)) throw Error("Already initialized stream.");
		var controller = null, closed = !1, stream = new ReadableStream({
			type,
			start: function(c) {
				controller = c;
			}
		}), previousBlockedChunk = null, flightController = {
			enqueueModel: function(json) {
				if (null === previousBlockedChunk) {
					var chunk = createResolvedModelChunk(response, json, -1);
					initializeModelChunk(chunk);
					"fulfilled" === chunk.status ? enqueue(chunk.value) : (chunk.then(enqueue, flightController.error), previousBlockedChunk = chunk);
				} else {
					chunk = previousBlockedChunk;
					var chunk$31 = new ReactPromise("pending", null, null);
					chunk$31.then(enqueue, flightController.error);
					previousBlockedChunk = chunk$31;
					chunk.then(function() {
						previousBlockedChunk === chunk$31 && (previousBlockedChunk = null);
						resolveModelChunk(response, chunk$31, json, -1);
					});
				}
			},
			close: function() {
				if (!closed) if (closed = !0, null === previousBlockedChunk) controller.close();
				else {
					var blockedChunk = previousBlockedChunk;
					previousBlockedChunk = null;
					blockedChunk.then(function() {
						return controller.close();
					});
				}
			},
			error: function(error) {
				if (!closed) if (closed = !0, null === previousBlockedChunk) controller.error(error);
				else {
					var blockedChunk = previousBlockedChunk;
					previousBlockedChunk = null;
					blockedChunk.then(function() {
						return controller.error(error);
					});
				}
			}
		};
		resolveStream(response, reference, stream, flightController);
		return stream;
	}
	function FlightIterator(next) {
		this.next = next;
	}
	FlightIterator.prototype = {};
	FlightIterator.prototype[ASYNC_ITERATOR] = function() {
		return this;
	};
	function parseAsyncIterable(response, reference, iterator) {
		reference = parseInt(reference.slice(2), 16);
		if (response._chunks.has(reference)) throw Error("Already initialized stream.");
		var buffer = [], closed = !1, nextWriteIndex = 0, $jscomp$compprop5 = {};
		$jscomp$compprop5 = ($jscomp$compprop5[ASYNC_ITERATOR] = function() {
			var nextReadIndex = 0;
			return new FlightIterator(function(arg) {
				if (void 0 !== arg) throw Error("Values cannot be passed to next() of AsyncIterables passed to Client Components.");
				if (nextReadIndex === buffer.length) {
					if (closed) return new ReactPromise("fulfilled", {
						done: !0,
						value: void 0
					}, null);
					buffer[nextReadIndex] = new ReactPromise("pending", null, null);
				}
				return buffer[nextReadIndex++];
			});
		}, $jscomp$compprop5);
		iterator = iterator ? $jscomp$compprop5[ASYNC_ITERATOR]() : $jscomp$compprop5;
		resolveStream(response, reference, iterator, {
			enqueueModel: function(value) {
				nextWriteIndex === buffer.length ? buffer[nextWriteIndex] = createResolvedIteratorResultChunk(response, value, !1) : resolveIteratorResultChunk(response, buffer[nextWriteIndex], value, !1);
				nextWriteIndex++;
			},
			close: function(value) {
				if (!closed) for (closed = !0, nextWriteIndex === buffer.length ? buffer[nextWriteIndex] = createResolvedIteratorResultChunk(response, value, !0) : resolveIteratorResultChunk(response, buffer[nextWriteIndex], value, !0), nextWriteIndex++; nextWriteIndex < buffer.length;) resolveIteratorResultChunk(response, buffer[nextWriteIndex++], "\"$undefined\"", !0);
			},
			error: function(error) {
				if (!closed) for (closed = !0, nextWriteIndex === buffer.length && (buffer[nextWriteIndex] = new ReactPromise("pending", null, null)); nextWriteIndex < buffer.length;) triggerErrorOnChunk(response, buffer[nextWriteIndex++], error);
			}
		});
		return iterator;
	}
	function parseModelString(response, obj, key, value, reference, arrayRoot) {
		if ("$" === value[0]) {
			switch (value[1]) {
				case "$": return null !== arrayRoot && bumpArrayCount(arrayRoot, value.length - 1, response), value.slice(1);
				case "@": return obj = parseInt(value.slice(2), 16), getChunk(response, obj);
				case "h": return arrayRoot = value.slice(2), getOutlinedModel(response, arrayRoot, obj, key, null, loadServerReference$1);
				case "T":
					if (void 0 === reference || void 0 === response._temporaryReferences) throw Error("Could not reference an opaque temporary reference. This is likely due to misconfiguring the temporaryReferences options on the server.");
					return createTemporaryReference(response._temporaryReferences, reference);
				case "Q": return arrayRoot = value.slice(2), getOutlinedModel(response, arrayRoot, obj, key, null, createMap);
				case "W": return arrayRoot = value.slice(2), getOutlinedModel(response, arrayRoot, obj, key, null, createSet);
				case "K":
					obj = value.slice(2);
					obj = response._prefix + obj + "_";
					key = new FormData();
					response = response._formData;
					arrayRoot = Array.from(response.keys());
					for (value = 0; value < arrayRoot.length; value++) if (reference = arrayRoot[value], reference.startsWith(obj)) {
						for (var entries = response.getAll(reference), newKey = reference.slice(obj.length), j = 0; j < entries.length; j++) key.append(newKey, entries[j]);
						response.delete(reference);
					}
					return key;
				case "i": return arrayRoot = value.slice(2), getOutlinedModel(response, arrayRoot, obj, key, null, extractIterator);
				case "I": return Infinity;
				case "-": return "$-0" === value ? -0 : -Infinity;
				case "N": return NaN;
				case "u": return;
				case "D": return new Date(Date.parse(value.slice(2)));
				case "n":
					obj = value.slice(2);
					if (300 < obj.length) throw Error("BigInt is too large. Received " + obj.length + " digits but the limit is 300.");
					null !== arrayRoot && bumpArrayCount(arrayRoot, obj.length, response);
					return BigInt(obj);
				case "A": return parseTypedArray(response, value, ArrayBuffer, 1, obj, key, arrayRoot);
				case "O": return parseTypedArray(response, value, Int8Array, 1, obj, key, arrayRoot);
				case "o": return parseTypedArray(response, value, Uint8Array, 1, obj, key, arrayRoot);
				case "U": return parseTypedArray(response, value, Uint8ClampedArray, 1, obj, key, arrayRoot);
				case "S": return parseTypedArray(response, value, Int16Array, 2, obj, key, arrayRoot);
				case "s": return parseTypedArray(response, value, Uint16Array, 2, obj, key, arrayRoot);
				case "L": return parseTypedArray(response, value, Int32Array, 4, obj, key, arrayRoot);
				case "l": return parseTypedArray(response, value, Uint32Array, 4, obj, key, arrayRoot);
				case "G": return parseTypedArray(response, value, Float32Array, 4, obj, key, arrayRoot);
				case "g": return parseTypedArray(response, value, Float64Array, 8, obj, key, arrayRoot);
				case "M": return parseTypedArray(response, value, BigInt64Array, 8, obj, key, arrayRoot);
				case "m": return parseTypedArray(response, value, BigUint64Array, 8, obj, key, arrayRoot);
				case "V": return parseTypedArray(response, value, DataView, 1, obj, key, arrayRoot);
				case "B": return obj = parseInt(value.slice(2), 16), response._formData.get(response._prefix + obj);
				case "R": return parseReadableStream(response, value, void 0);
				case "r": return parseReadableStream(response, value, "bytes");
				case "X": return parseAsyncIterable(response, value, !1);
				case "x": return parseAsyncIterable(response, value, !0);
			}
			value = value.slice(1);
			return getOutlinedModel(response, value, obj, key, arrayRoot, createModel);
		}
		null !== arrayRoot && bumpArrayCount(arrayRoot, value.length, response);
		return value;
	}
	function createResponse(bundlerConfig, formFieldPrefix, temporaryReferences) {
		var backingFormData = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : new FormData(), arraySizeLimit = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : 1e6;
		return {
			_bundlerConfig: bundlerConfig,
			_prefix: formFieldPrefix,
			_formData: backingFormData,
			_chunks: /* @__PURE__ */ new Map(),
			_closed: !1,
			_closedReason: null,
			_temporaryReferences: temporaryReferences,
			_rootArrayContexts: /* @__PURE__ */ new WeakMap(),
			_arraySizeLimit: arraySizeLimit
		};
	}
	function close(response) {
		reportGlobalError(response, Error("Connection closed."));
	}
	function loadServerReference(bundlerConfig, metaData) {
		var id = metaData.id;
		if ("string" !== typeof id) return null;
		var serverReference = resolveServerReference(bundlerConfig, id);
		bundlerConfig = preloadModule(serverReference);
		metaData = metaData.bound;
		return metaData instanceof Promise ? Promise.all([metaData, bundlerConfig]).then(function(_ref) {
			_ref = _ref[0];
			var fn = requireModule(serverReference);
			if (1e3 < _ref.length) throw Error("Server Function has too many bound arguments. Received " + _ref.length + " but the limit is 1000.");
			return fn.bind.apply(fn, [null].concat(_ref));
		}) : bundlerConfig ? Promise.resolve(bundlerConfig).then(function() {
			return requireModule(serverReference);
		}) : Promise.resolve(requireModule(serverReference));
	}
	function decodeBoundActionMetaData(body, serverManifest, formFieldPrefix, arraySizeLimit) {
		body = createResponse(serverManifest, formFieldPrefix, void 0, body, arraySizeLimit);
		close(body);
		body = getChunk(body, 0);
		body.then(function() {});
		if ("fulfilled" !== body.status) throw body.reason;
		return body.value;
	}
	exports.createClientModuleProxy = function(moduleId) {
		moduleId = registerClientReferenceImpl({}, moduleId, !1);
		return new Proxy(moduleId, proxyHandlers$1);
	};
	exports.createTemporaryReferenceSet = function() {
		return /* @__PURE__ */ new WeakMap();
	};
	exports.decodeAction = function(body, serverManifest) {
		var formData = new FormData(), action = null, seenActions = /* @__PURE__ */ new Set();
		body.forEach(function(value, key) {
			key.startsWith("$ACTION_") ? key.startsWith("$ACTION_REF_") ? seenActions.has(key) || (seenActions.add(key), value = "$ACTION_" + key.slice(12) + ":", value = decodeBoundActionMetaData(body, serverManifest, value), action = loadServerReference(serverManifest, value)) : key.startsWith("$ACTION_ID_") && !seenActions.has(key) && (seenActions.add(key), value = key.slice(11), action = loadServerReference(serverManifest, {
				id: value,
				bound: null
			})) : formData.append(key, value);
		});
		return null === action ? null : action.then(function(fn) {
			return fn.bind(null, formData);
		});
	};
	exports.decodeFormState = function(actionResult, body, serverManifest) {
		var keyPath = body.get("$ACTION_KEY");
		if ("string" !== typeof keyPath) return Promise.resolve(null);
		var metaData = null;
		body.forEach(function(value, key) {
			key.startsWith("$ACTION_REF_") && (value = "$ACTION_" + key.slice(12) + ":", metaData = decodeBoundActionMetaData(body, serverManifest, value));
		});
		if (null === metaData) return Promise.resolve(null);
		var referenceId = metaData.id;
		return Promise.resolve(metaData.bound).then(function(bound) {
			return null === bound ? null : [
				actionResult,
				keyPath,
				referenceId,
				bound.length - 1
			];
		});
	};
	exports.decodeReply = function(body, webpackMap, options) {
		if ("string" === typeof body) {
			var form = new FormData();
			form.append("0", body);
			body = form;
		}
		body = createResponse(webpackMap, "", options ? options.temporaryReferences : void 0, body, options ? options.arraySizeLimit : void 0);
		webpackMap = getChunk(body, 0);
		close(body);
		return webpackMap;
	};
	exports.decodeReplyFromAsyncIterable = function(iterable, webpackMap, options) {
		function progress(entry) {
			if (entry.done) close(response);
			else {
				entry = entry.value;
				var name = entry[0];
				entry = entry[1];
				if ("string" === typeof entry) {
					response._formData.append(name, entry);
					var prefix = response._prefix;
					if (name.startsWith(prefix)) {
						var chunks = response._chunks;
						name = +name.slice(prefix.length);
						(chunks = chunks.get(name)) && resolveModelChunk(response, chunks, entry, name);
					}
				} else response._formData.append(name, entry);
				iterator.next().then(progress, error);
			}
		}
		function error(reason) {
			reportGlobalError(response, reason);
			"function" === typeof iterator.throw && iterator.throw(reason).then(error, error);
		}
		var iterator = iterable[ASYNC_ITERATOR](), response = createResponse(webpackMap, "", options ? options.temporaryReferences : void 0, void 0, options ? options.arraySizeLimit : void 0);
		iterator.next().then(progress, error);
		return getChunk(response, 0);
	};
	exports.prerender = function(model, webpackMap, options) {
		return new Promise(function(resolve, reject) {
			var request = new RequestInstance(21, model, webpackMap, options ? options.onError : void 0, options ? options.onPostpone : void 0, function() {
				resolve({ prelude: new ReadableStream({
					type: "bytes",
					pull: function(controller) {
						startFlowing(request, controller);
					},
					cancel: function(reason) {
						request.destination = null;
						abort(request, reason);
					}
				}, { highWaterMark: 0 }) });
			}, reject, options ? options.identifierPrefix : void 0, options ? options.temporaryReferences : void 0);
			if (options && options.signal) {
				var signal = options.signal;
				if (signal.aborted) abort(request, signal.reason);
				else {
					var listener = function() {
						abort(request, signal.reason);
						signal.removeEventListener("abort", listener);
					};
					signal.addEventListener("abort", listener);
				}
			}
			startWork(request);
		});
	};
	exports.registerClientReference = function(proxyImplementation, id, exportName) {
		return registerClientReferenceImpl(proxyImplementation, id + "#" + exportName, !1);
	};
	exports.registerServerReference = function(reference, id, exportName) {
		return Object.defineProperties(reference, {
			$$typeof: { value: SERVER_REFERENCE_TAG },
			$$id: {
				value: null === exportName ? id : id + "#" + exportName,
				configurable: !0
			},
			$$bound: {
				value: null,
				configurable: !0
			},
			bind: {
				value: bind,
				configurable: !0
			},
			toString: serverReferenceToString
		});
	};
	exports.renderToReadableStream = function(model, webpackMap, options) {
		var request = new RequestInstance(20, model, webpackMap, options ? options.onError : void 0, options ? options.onPostpone : void 0, noop, noop, options ? options.identifierPrefix : void 0, options ? options.temporaryReferences : void 0);
		if (options && options.signal) {
			var signal = options.signal;
			if (signal.aborted) abort(request, signal.reason);
			else {
				var listener = function() {
					abort(request, signal.reason);
					signal.removeEventListener("abort", listener);
				};
				signal.addEventListener("abort", listener);
			}
		}
		return new ReadableStream({
			type: "bytes",
			start: function() {
				startWork(request);
			},
			pull: function(controller) {
				startFlowing(request, controller);
			},
			cancel: function(reason) {
				request.destination = null;
				abort(request, reason);
			}
		}, { highWaterMark: 0 });
	};
}));
//#endregion
//#region node_modules/@vitejs/plugin-rsc/dist/core/rsc.js
var import_server_edge = /* @__PURE__ */ __toESM((/* @__PURE__ */ __commonJSMin(((exports) => {
	var s = require_react_server_dom_webpack_server_edge_production();
	exports.renderToReadableStream = s.renderToReadableStream;
	exports.decodeReply = s.decodeReply;
	exports.decodeReplyFromAsyncIterable = s.decodeReplyFromAsyncIterable;
	exports.decodeAction = s.decodeAction;
	exports.decodeFormState = s.decodeFormState;
	exports.registerServerReference = s.registerServerReference;
	exports.registerClientReference = s.registerClientReference;
	exports.createClientModuleProxy = s.createClientModuleProxy;
	exports.createTemporaryReferenceSet = s.createTemporaryReferenceSet;
})))(), 1);
var init = false;
var requireModule;
function setRequireModule(options) {
	if (init) return;
	init = true;
	requireModule = (id) => {
		return options.load(removeReferenceCacheTag(id));
	};
	globalThis.__vite_rsc_server_require__ = memoize(async (id) => {
		if (id.startsWith("$$decode-client:")) {
			id = id.slice(SERVER_DECODE_CLIENT_PREFIX.length);
			id = removeReferenceCacheTag(id);
			const target = {};
			const getOrCreateClientReference = (name) => {
				return target[name] ??= import_server_edge.registerClientReference(() => {
					throw new Error(`Unexpectedly client reference export '${name}' is called on server`);
				}, id, name);
			};
			return new Proxy(target, { getOwnPropertyDescriptor(_target, name) {
				if (typeof name !== "string" || name === "then") return Reflect.getOwnPropertyDescriptor(target, name);
				getOrCreateClientReference(name);
				return Reflect.getOwnPropertyDescriptor(target, name);
			} });
		}
		return requireModule(id);
	});
	setInternalRequire();
}
async function loadServerAction(id) {
	const [file, name] = id.split("#");
	return (await requireModule(file))[name];
}
function createServerManifest() {
	const cacheTag = "";
	return new Proxy({}, { get(_target, $$id, _receiver) {
		tinyassert(typeof $$id === "string");
		let [id, name] = $$id.split("#");
		tinyassert(id);
		tinyassert(name);
		return {
			id: SERVER_REFERENCE_PREFIX + id + cacheTag,
			name,
			chunks: [],
			async: true
		};
	} });
}
function createClientManifest(options) {
	const cacheTag = "";
	return new Proxy({}, { get(_target, $$id, _receiver) {
		tinyassert(typeof $$id === "string");
		let [id, name] = $$id.split("#");
		tinyassert(id);
		tinyassert(name);
		options?.onClientReference?.({
			id,
			name
		});
		return {
			id: id + cacheTag,
			name,
			chunks: [],
			async: true
		};
	} });
}
//#endregion
//#region node_modules/react-server-dom-webpack/cjs/react-server-dom-webpack-client.edge.production.js
/**
* @license React
* react-server-dom-webpack-client.edge.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_react_server_dom_webpack_client_edge_production = /* @__PURE__ */ __commonJSMin(((exports) => {
	var ReactDOM = require_react_dom_react_server(), hasOwnProperty = Object.prototype.hasOwnProperty;
	function requireModule(metadata) {
		var moduleExports = __vite_rsc_require__(metadata[0]);
		if (4 === metadata.length && "function" === typeof moduleExports.then) if ("fulfilled" === moduleExports.status) moduleExports = moduleExports.value;
		else throw moduleExports.reason;
		if ("*" === metadata[2]) return moduleExports;
		if ("" === metadata[2]) return moduleExports.__esModule ? moduleExports.default : moduleExports;
		if (hasOwnProperty.call(moduleExports, metadata[2])) return moduleExports[metadata[2]];
	}
	ReactDOM.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
	var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
	function getIteratorFn(maybeIterable) {
		if (null === maybeIterable || "object" !== typeof maybeIterable) return null;
		maybeIterable = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable["@@iterator"];
		return "function" === typeof maybeIterable ? maybeIterable : null;
	}
	var ASYNC_ITERATOR = Symbol.asyncIterator, isArrayImpl = Array.isArray, getPrototypeOf = Object.getPrototypeOf, ObjectPrototype = Object.prototype, knownServerReferences = /* @__PURE__ */ new WeakMap();
	function serializeNumber(number) {
		return Number.isFinite(number) ? 0 === number && -Infinity === 1 / number ? "$-0" : number : Infinity === number ? "$Infinity" : -Infinity === number ? "$-Infinity" : "$NaN";
	}
	function processReply(root, formFieldPrefix, temporaryReferences, resolve, reject) {
		function serializeTypedArray(tag, typedArray) {
			typedArray = new Blob([new Uint8Array(typedArray.buffer, typedArray.byteOffset, typedArray.byteLength)]);
			var blobId = nextPartId++;
			null === formData && (formData = new FormData());
			formData.append(formFieldPrefix + blobId, typedArray);
			return "$" + tag + blobId.toString(16);
		}
		function serializeBinaryReader(reader) {
			function progress(entry) {
				entry.done ? (entry = nextPartId++, data.append(formFieldPrefix + entry, new Blob(buffer)), data.append(formFieldPrefix + streamId, "\"$o" + entry.toString(16) + "\""), data.append(formFieldPrefix + streamId, "C"), pendingParts--, 0 === pendingParts && resolve(data)) : (buffer.push(entry.value), reader.read(new Uint8Array(1024)).then(progress, reject));
			}
			null === formData && (formData = new FormData());
			var data = formData;
			pendingParts++;
			var streamId = nextPartId++, buffer = [];
			reader.read(new Uint8Array(1024)).then(progress, reject);
			return "$r" + streamId.toString(16);
		}
		function serializeReader(reader) {
			function progress(entry) {
				if (entry.done) data.append(formFieldPrefix + streamId, "C"), pendingParts--, 0 === pendingParts && resolve(data);
				else try {
					var partJSON = JSON.stringify(entry.value, resolveToJSON);
					data.append(formFieldPrefix + streamId, partJSON);
					reader.read().then(progress, reject);
				} catch (x) {
					reject(x);
				}
			}
			null === formData && (formData = new FormData());
			var data = formData;
			pendingParts++;
			var streamId = nextPartId++;
			reader.read().then(progress, reject);
			return "$R" + streamId.toString(16);
		}
		function serializeReadableStream(stream) {
			try {
				var binaryReader = stream.getReader({ mode: "byob" });
			} catch (x) {
				return serializeReader(stream.getReader());
			}
			return serializeBinaryReader(binaryReader);
		}
		function serializeAsyncIterable(iterable, iterator) {
			function progress(entry) {
				if (entry.done) {
					if (void 0 === entry.value) data.append(formFieldPrefix + streamId, "C");
					else try {
						var partJSON = JSON.stringify(entry.value, resolveToJSON);
						data.append(formFieldPrefix + streamId, "C" + partJSON);
					} catch (x) {
						reject(x);
						return;
					}
					pendingParts--;
					0 === pendingParts && resolve(data);
				} else try {
					var partJSON$21 = JSON.stringify(entry.value, resolveToJSON);
					data.append(formFieldPrefix + streamId, partJSON$21);
					iterator.next().then(progress, reject);
				} catch (x$22) {
					reject(x$22);
				}
			}
			null === formData && (formData = new FormData());
			var data = formData;
			pendingParts++;
			var streamId = nextPartId++;
			iterable = iterable === iterator;
			iterator.next().then(progress, reject);
			return "$" + (iterable ? "x" : "X") + streamId.toString(16);
		}
		function resolveToJSON(key, value) {
			if (null === value) return null;
			if ("object" === typeof value) {
				switch (value.$$typeof) {
					case REACT_ELEMENT_TYPE:
						if (void 0 !== temporaryReferences && -1 === key.indexOf(":")) {
							var parentReference = writtenObjects.get(this);
							if (void 0 !== parentReference) return temporaryReferences.set(parentReference + ":" + key, value), "$T";
						}
						throw Error("React Element cannot be passed to Server Functions from the Client without a temporary reference set. Pass a TemporaryReferenceSet to the options.");
					case REACT_LAZY_TYPE:
						parentReference = value._payload;
						var init = value._init;
						null === formData && (formData = new FormData());
						pendingParts++;
						try {
							var resolvedModel = init(parentReference), lazyId = nextPartId++, partJSON = serializeModel(resolvedModel, lazyId);
							formData.append(formFieldPrefix + lazyId, partJSON);
							return "$" + lazyId.toString(16);
						} catch (x) {
							if ("object" === typeof x && null !== x && "function" === typeof x.then) {
								pendingParts++;
								var lazyId$23 = nextPartId++;
								parentReference = function() {
									try {
										var partJSON$24 = serializeModel(value, lazyId$23), data$25 = formData;
										data$25.append(formFieldPrefix + lazyId$23, partJSON$24);
										pendingParts--;
										0 === pendingParts && resolve(data$25);
									} catch (reason) {
										reject(reason);
									}
								};
								x.then(parentReference, parentReference);
								return "$" + lazyId$23.toString(16);
							}
							reject(x);
							return null;
						} finally {
							pendingParts--;
						}
				}
				parentReference = writtenObjects.get(value);
				if ("function" === typeof value.then) {
					if (void 0 !== parentReference) if (modelRoot === value) modelRoot = null;
					else return parentReference;
					null === formData && (formData = new FormData());
					pendingParts++;
					var promiseId = nextPartId++;
					key = "$@" + promiseId.toString(16);
					writtenObjects.set(value, key);
					value.then(function(partValue) {
						try {
							var previousReference = writtenObjects.get(partValue);
							var partJSON$27 = void 0 !== previousReference ? JSON.stringify(previousReference) : serializeModel(partValue, promiseId);
							partValue = formData;
							partValue.append(formFieldPrefix + promiseId, partJSON$27);
							pendingParts--;
							0 === pendingParts && resolve(partValue);
						} catch (reason) {
							reject(reason);
						}
					}, reject);
					return key;
				}
				if (void 0 !== parentReference) if (modelRoot === value) modelRoot = null;
				else return parentReference;
				else -1 === key.indexOf(":") && (parentReference = writtenObjects.get(this), void 0 !== parentReference && (key = parentReference + ":" + key, writtenObjects.set(value, key), void 0 !== temporaryReferences && temporaryReferences.set(key, value)));
				if (isArrayImpl(value)) return value;
				if (value instanceof FormData) {
					null === formData && (formData = new FormData());
					var data$31 = formData;
					key = nextPartId++;
					var prefix = formFieldPrefix + key + "_";
					value.forEach(function(originalValue, originalKey) {
						data$31.append(prefix + originalKey, originalValue);
					});
					return "$K" + key.toString(16);
				}
				if (value instanceof Map) return key = nextPartId++, parentReference = serializeModel(Array.from(value), key), null === formData && (formData = new FormData()), formData.append(formFieldPrefix + key, parentReference), "$Q" + key.toString(16);
				if (value instanceof Set) return key = nextPartId++, parentReference = serializeModel(Array.from(value), key), null === formData && (formData = new FormData()), formData.append(formFieldPrefix + key, parentReference), "$W" + key.toString(16);
				if (value instanceof ArrayBuffer) return key = new Blob([value]), parentReference = nextPartId++, null === formData && (formData = new FormData()), formData.append(formFieldPrefix + parentReference, key), "$A" + parentReference.toString(16);
				if (value instanceof Int8Array) return serializeTypedArray("O", value);
				if (value instanceof Uint8Array) return serializeTypedArray("o", value);
				if (value instanceof Uint8ClampedArray) return serializeTypedArray("U", value);
				if (value instanceof Int16Array) return serializeTypedArray("S", value);
				if (value instanceof Uint16Array) return serializeTypedArray("s", value);
				if (value instanceof Int32Array) return serializeTypedArray("L", value);
				if (value instanceof Uint32Array) return serializeTypedArray("l", value);
				if (value instanceof Float32Array) return serializeTypedArray("G", value);
				if (value instanceof Float64Array) return serializeTypedArray("g", value);
				if (value instanceof BigInt64Array) return serializeTypedArray("M", value);
				if (value instanceof BigUint64Array) return serializeTypedArray("m", value);
				if (value instanceof DataView) return serializeTypedArray("V", value);
				if ("function" === typeof Blob && value instanceof Blob) return null === formData && (formData = new FormData()), key = nextPartId++, formData.append(formFieldPrefix + key, value), "$B" + key.toString(16);
				if (key = getIteratorFn(value)) return parentReference = key.call(value), parentReference === value ? (key = nextPartId++, parentReference = serializeModel(Array.from(parentReference), key), null === formData && (formData = new FormData()), formData.append(formFieldPrefix + key, parentReference), "$i" + key.toString(16)) : Array.from(parentReference);
				if ("function" === typeof ReadableStream && value instanceof ReadableStream) return serializeReadableStream(value);
				key = value[ASYNC_ITERATOR];
				if ("function" === typeof key) return serializeAsyncIterable(value, key.call(value));
				key = getPrototypeOf(value);
				if (key !== ObjectPrototype && (null === key || null !== getPrototypeOf(key))) {
					if (void 0 === temporaryReferences) throw Error("Only plain objects, and a few built-ins, can be passed to Server Functions. Classes or null prototypes are not supported.");
					return "$T";
				}
				return value;
			}
			if ("string" === typeof value) {
				if ("Z" === value[value.length - 1] && this[key] instanceof Date) return "$D" + value;
				key = "$" === value[0] ? "$" + value : value;
				return key;
			}
			if ("boolean" === typeof value) return value;
			if ("number" === typeof value) return serializeNumber(value);
			if ("undefined" === typeof value) return "$undefined";
			if ("function" === typeof value) {
				parentReference = knownServerReferences.get(value);
				if (void 0 !== parentReference) {
					key = writtenObjects.get(value);
					if (void 0 !== key) return key;
					key = JSON.stringify({
						id: parentReference.id,
						bound: parentReference.bound
					}, resolveToJSON);
					null === formData && (formData = new FormData());
					parentReference = nextPartId++;
					formData.set(formFieldPrefix + parentReference, key);
					key = "$h" + parentReference.toString(16);
					writtenObjects.set(value, key);
					return key;
				}
				if (void 0 !== temporaryReferences && -1 === key.indexOf(":") && (parentReference = writtenObjects.get(this), void 0 !== parentReference)) return temporaryReferences.set(parentReference + ":" + key, value), "$T";
				throw Error("Client Functions cannot be passed directly to Server Functions. Only Functions passed from the Server can be passed back again.");
			}
			if ("symbol" === typeof value) {
				if (void 0 !== temporaryReferences && -1 === key.indexOf(":") && (parentReference = writtenObjects.get(this), void 0 !== parentReference)) return temporaryReferences.set(parentReference + ":" + key, value), "$T";
				throw Error("Symbols cannot be passed to a Server Function without a temporary reference set. Pass a TemporaryReferenceSet to the options.");
			}
			if ("bigint" === typeof value) return "$n" + value.toString(10);
			throw Error("Type " + typeof value + " is not supported as an argument to a Server Function.");
		}
		function serializeModel(model, id) {
			"object" === typeof model && null !== model && (id = "$" + id.toString(16), writtenObjects.set(model, id), void 0 !== temporaryReferences && temporaryReferences.set(id, model));
			modelRoot = model;
			return JSON.stringify(model, resolveToJSON);
		}
		var nextPartId = 1, pendingParts = 0, formData = null, writtenObjects = /* @__PURE__ */ new WeakMap(), modelRoot = root, json = serializeModel(root, 0);
		null === formData ? resolve(json) : (formData.set(formFieldPrefix + "0", json), 0 === pendingParts && resolve(formData));
		return function() {
			0 < pendingParts && (pendingParts = 0, null === formData ? resolve(json) : resolve(formData));
		};
	}
	Function.prototype.bind;
	Array.prototype.slice;
	function ReactPromise(status, value, reason) {
		this.status = status;
		this.value = value;
		this.reason = reason;
	}
	ReactPromise.prototype = Object.create(Promise.prototype);
	ReactPromise.prototype.then = function(resolve, reject) {
		switch (this.status) {
			case "resolved_model":
				initializeModelChunk(this);
				break;
			case "resolved_module": initializeModuleChunk(this);
		}
		switch (this.status) {
			case "fulfilled":
				"function" === typeof resolve && resolve(this.value);
				break;
			case "pending":
			case "blocked":
				"function" === typeof resolve && (null === this.value && (this.value = []), this.value.push(resolve));
				"function" === typeof reject && (null === this.reason && (this.reason = []), this.reason.push(reject));
				break;
			case "halted": break;
			default: "function" === typeof reject && reject(this.reason);
		}
	};
	function wakeChunk(listeners, value, chunk) {
		for (var i = 0; i < listeners.length; i++) {
			var listener = listeners[i];
			"function" === typeof listener ? listener(value) : fulfillReference(listener, value, chunk);
		}
	}
	function rejectChunk(listeners, error) {
		for (var i = 0; i < listeners.length; i++) {
			var listener = listeners[i];
			"function" === typeof listener ? listener(error) : rejectReference(listener, error);
		}
	}
	function resolveBlockedCycle(resolvedChunk, reference) {
		var referencedChunk = reference.handler.chunk;
		if (null === referencedChunk) return null;
		if (referencedChunk === resolvedChunk) return reference.handler;
		reference = referencedChunk.value;
		if (null !== reference) for (referencedChunk = 0; referencedChunk < reference.length; referencedChunk++) {
			var listener = reference[referencedChunk];
			if ("function" !== typeof listener && (listener = resolveBlockedCycle(resolvedChunk, listener), null !== listener)) return listener;
		}
		return null;
	}
	function triggerErrorOnChunk(response, chunk, error) {
		"pending" !== chunk.status && "blocked" !== chunk.status ? chunk.reason.error(error) : (response = chunk.reason, chunk.status = "rejected", chunk.reason = error, null !== response && rejectChunk(response, error));
	}
	var initializingHandler = null;
	function initializeModelChunk(chunk) {
		var prevHandler = initializingHandler;
		initializingHandler = null;
		var resolvedModel = chunk.value, response = chunk.reason;
		chunk.status = "blocked";
		chunk.value = null;
		chunk.reason = null;
		try {
			var value = JSON.parse(resolvedModel, response._fromJSON), resolveListeners = chunk.value;
			if (null !== resolveListeners) for (chunk.value = null, chunk.reason = null, resolvedModel = 0; resolvedModel < resolveListeners.length; resolvedModel++) {
				var listener = resolveListeners[resolvedModel];
				"function" === typeof listener ? listener(value) : fulfillReference(listener, value, chunk);
			}
			if (null !== initializingHandler) {
				if (initializingHandler.errored) throw initializingHandler.reason;
				if (0 < initializingHandler.deps) {
					initializingHandler.value = value;
					initializingHandler.chunk = chunk;
					return;
				}
			}
			chunk.status = "fulfilled";
			chunk.value = value;
		} catch (error) {
			chunk.status = "rejected", chunk.reason = error;
		} finally {
			initializingHandler = prevHandler;
		}
	}
	function initializeModuleChunk(chunk) {
		try {
			var value = requireModule(chunk.value);
			chunk.status = "fulfilled";
			chunk.value = value;
		} catch (error) {
			chunk.status = "rejected", chunk.reason = error;
		}
	}
	function fulfillReference(reference, value) {
		var response = reference.response, handler = reference.handler, parentObject = reference.parentObject, key = reference.key, map = reference.map, path = reference.path;
		try {
			for (var i = 1; i < path.length; i++) {
				for (; "object" === typeof value && null !== value && value.$$typeof === REACT_LAZY_TYPE;) {
					var referencedChunk = value._payload;
					if (referencedChunk === handler.chunk) value = handler.value;
					else {
						switch (referencedChunk.status) {
							case "resolved_model":
								initializeModelChunk(referencedChunk);
								break;
							case "resolved_module": initializeModuleChunk(referencedChunk);
						}
						switch (referencedChunk.status) {
							case "fulfilled":
								value = referencedChunk.value;
								continue;
							case "blocked":
								var cyclicHandler = resolveBlockedCycle(referencedChunk, reference);
								if (null !== cyclicHandler) {
									value = cyclicHandler.value;
									continue;
								}
							case "pending":
								path.splice(0, i - 1);
								null === referencedChunk.value ? referencedChunk.value = [reference] : referencedChunk.value.push(reference);
								null === referencedChunk.reason ? referencedChunk.reason = [reference] : referencedChunk.reason.push(reference);
								return;
							case "halted": return;
							default:
								rejectReference(reference, referencedChunk.reason);
								return;
						}
					}
				}
				var name = path[i];
				if ("object" === typeof value && null !== value && hasOwnProperty.call(value, name)) value = value[name];
				else throw Error("Invalid reference.");
			}
			for (; "object" === typeof value && null !== value && value.$$typeof === REACT_LAZY_TYPE;) {
				var referencedChunk$44 = value._payload;
				if (referencedChunk$44 === handler.chunk) value = handler.value;
				else {
					switch (referencedChunk$44.status) {
						case "resolved_model":
							initializeModelChunk(referencedChunk$44);
							break;
						case "resolved_module": initializeModuleChunk(referencedChunk$44);
					}
					switch (referencedChunk$44.status) {
						case "fulfilled":
							value = referencedChunk$44.value;
							continue;
					}
					break;
				}
			}
			var mappedValue = map(response, value, parentObject, key);
			"__proto__" !== key && (parentObject[key] = mappedValue);
			"" === key && null === handler.value && (handler.value = mappedValue);
			if (parentObject[0] === REACT_ELEMENT_TYPE && "object" === typeof handler.value && null !== handler.value && handler.value.$$typeof === REACT_ELEMENT_TYPE) {
				var element = handler.value;
				switch (key) {
					case "3": element.props = mappedValue;
				}
			}
		} catch (error) {
			rejectReference(reference, error);
			return;
		}
		handler.deps--;
		0 === handler.deps && (reference = handler.chunk, null !== reference && "blocked" === reference.status && (value = reference.value, reference.status = "fulfilled", reference.value = handler.value, reference.reason = handler.reason, null !== value && wakeChunk(value, handler.value, reference)));
	}
	function rejectReference(reference, error) {
		var handler = reference.handler;
		reference = reference.response;
		handler.errored || (handler.errored = !0, handler.value = null, handler.reason = error, handler = handler.chunk, null !== handler && "blocked" === handler.status && triggerErrorOnChunk(reference, handler, error));
	}
	exports.createTemporaryReferenceSet = function() {
		return /* @__PURE__ */ new Map();
	};
	exports.encodeReply = function(value, options) {
		return new Promise(function(resolve, reject) {
			var abort = processReply(value, "", options && options.temporaryReferences ? options.temporaryReferences : void 0, resolve, reject);
			if (options && options.signal) {
				var signal = options.signal;
				if (signal.aborted) abort(signal.reason);
				else {
					var listener = function() {
						abort(signal.reason);
						signal.removeEventListener("abort", listener);
					};
					signal.addEventListener("abort", listener);
				}
			}
		});
	};
}));
//#endregion
//#region node_modules/@vitejs/plugin-rsc/dist/react/rsc.js
var import_client_edge = /* @__PURE__ */ __toESM((/* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require_react_server_dom_webpack_client_edge_production();
})))(), 1);
function renderToReadableStream$2(data, options, extraOptions) {
	return import_server_edge.renderToReadableStream(data, createClientManifest({ onClientReference: extraOptions?.onClientReference }), options);
}
function registerClientReference(proxy, id, name) {
	return import_server_edge.registerClientReference(proxy, id, name);
}
import_server_edge.registerServerReference;
function decodeReply(body, options) {
	return import_server_edge.decodeReply(body, createServerManifest(), options);
}
var createTemporaryReferenceSet = import_server_edge.createTemporaryReferenceSet;
import_client_edge.encodeReply;
import_client_edge.createTemporaryReferenceSet;
//#endregion
//#region \0virtual:vite-rsc/server-references
var server_references_default = {};
//#endregion
//#region node_modules/@vitejs/plugin-rsc/dist/rsc.js
initialize();
function initialize() {
	setRequireModule({ load: async (id) => {
		{
			const import_ = server_references_default[id];
			if (!import_) throw new Error(`server reference not found '${id}'`);
			return import_();
		}
	} });
}
function renderToReadableStream$1(data, options, extraOptions) {
	return renderToReadableStream$2(data, options, { onClientReference(metadata) {
		const deps = assetsManifest.clientReferenceDeps[metadata.id] ?? {
			js: [],
			css: []
		};
		extraOptions?.onClientReference?.({
			id: metadata.id,
			name: metadata.name,
			deps
		});
	} });
}
//#endregion
//#region node_modules/vinext/dist/utils/base-path.js
var import_react_react_server = /* @__PURE__ */ __toESM(require_react_react_server(), 1);
/**
* Shared basePath helpers.
*
* Next.js only treats a pathname as being under basePath when it is an exact
* match ("/app") or starts with the basePath followed by a path separator
* ("/app/..."). Prefix-only matches like "/application" must be left intact.
*/
/**
* Check whether a pathname is inside the configured basePath.
*/
function hasBasePath(pathname, basePath) {
	if (!basePath) return false;
	return pathname === basePath || pathname.startsWith(basePath + "/");
}
/**
* Strip the basePath prefix from a pathname when it matches on a segment
* boundary. Returns the original pathname when it is outside the basePath.
*/
function stripBasePath(pathname, basePath) {
	if (!hasBasePath(pathname, basePath)) return pathname;
	return pathname.slice(basePath.length) || "/";
}
//#endregion
//#region node_modules/vinext/dist/shims/readonly-url-search-params.js
var ReadonlyURLSearchParamsError = class extends Error {
	constructor() {
		super("Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams");
	}
};
/**
* Read-only URLSearchParams wrapper matching Next.js runtime behavior.
* Mutation methods remain present for instanceof/API compatibility but throw.
*/
var ReadonlyURLSearchParams = class extends URLSearchParams {
	append(_name, _value) {
		throw new ReadonlyURLSearchParamsError();
	}
	delete(_name, _value) {
		throw new ReadonlyURLSearchParamsError();
	}
	set(_name, _value) {
		throw new ReadonlyURLSearchParamsError();
	}
	sort() {
		throw new ReadonlyURLSearchParamsError();
	}
};
var _SERVER_INSERTED_HTML_CTX_KEY = Symbol.for("vinext.serverInsertedHTMLContext");
function getServerInsertedHTMLContext() {
	if (typeof import_react_react_server.createContext !== "function") return null;
	const globalState = globalThis;
	if (!globalState[_SERVER_INSERTED_HTML_CTX_KEY]) globalState[_SERVER_INSERTED_HTML_CTX_KEY] = import_react_react_server.createContext(null);
	return globalState[_SERVER_INSERTED_HTML_CTX_KEY] ?? null;
}
getServerInsertedHTMLContext();
var _serverContext = null;
var _getServerContext = () => _serverContext;
var _setServerContext = (ctx) => {
	_serverContext = ctx;
};
/**
* Register ALS-backed state accessors. Called by navigation-state.ts on import.
* @internal
*/
function _registerStateAccessors(accessors) {
	_getServerContext = accessors.getServerContext;
	_setServerContext = accessors.setServerContext;
	accessors.getInsertedHTMLCallbacks;
	accessors.clearInsertedHTMLCallbacks;
}
/**
* Get the navigation context for the current SSR/RSC render.
* Reads from AsyncLocalStorage when available (concurrent-safe),
* otherwise falls back to module-level state.
*/
function getNavigationContext() {
	return _getServerContext();
}
/**
* Set the navigation context for the current SSR/RSC render.
* Called by the framework entry before rendering each request.
*/
function setNavigationContext$1(ctx) {
	_setServerContext(ctx);
}
var isServer = typeof window === "undefined";
/** basePath from next.config.js, injected by the plugin at build time */
var __basePath$1 = "";
var _listeners = /* @__PURE__ */ new Set();
function notifyListeners() {
	for (const fn of _listeners) fn();
}
new ReadonlyURLSearchParams(!isServer ? window.location.search : "");
!isServer && stripBasePath(window.location.pathname, __basePath$1);
!isServer && window.history.replaceState.bind(window.history);
/**
* Restore scroll position from a history state object (used on popstate).
*
* When an RSC navigation is in flight (back/forward triggers both this
* handler and the browser entry's popstate handler which calls
* __VINEXT_RSC_NAVIGATE__), we must wait for the new content to render
* before scrolling. Otherwise the user sees old content flash at the
* restored scroll position.
*
* This handler fires before the browser entry's popstate handler (because
* navigation.ts is loaded before hydration completes), so we defer via a
* microtask to give the browser entry handler a chance to set
* __VINEXT_RSC_PENDING__ first.
*/
function restoreScrollPosition(state) {
	if (state && typeof state === "object" && "__vinext_scrollY" in state) {
		const { __vinext_scrollX: x, __vinext_scrollY: y } = state;
		Promise.resolve().then(() => {
			const pending = window.__VINEXT_RSC_PENDING__ ?? null;
			if (pending) pending.then(() => {
				requestAnimationFrame(() => {
					window.scrollTo(x, y);
				});
			});
			else requestAnimationFrame(() => {
				window.scrollTo(x, y);
			});
		});
	}
}
/**
* HTTP Access Fallback error code — shared prefix for notFound/forbidden/unauthorized.
* Matches Next.js 16's unified error handling approach.
*/
var HTTP_ERROR_FALLBACK_ERROR_CODE = "NEXT_HTTP_ERROR_FALLBACK";
/**
* Internal error class used by redirect/notFound/forbidden/unauthorized.
* The `digest` field is the serialised control-flow signal read by the
* framework's error boundary and server-side request handlers.
*/
var VinextNavigationError = class extends Error {
	digest;
	constructor(message, digest) {
		super(message);
		this.digest = digest;
	}
};
/**
* Trigger a not-found response (404). Caught by the framework.
*/
function notFound() {
	throw new VinextNavigationError("NEXT_NOT_FOUND", `${HTTP_ERROR_FALLBACK_ERROR_CODE};404`);
}
if (!isServer) {
	window.addEventListener("popstate", (event) => {
		notifyListeners();
		restoreScrollPosition(event.state);
	});
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	window.history.pushState = function patchedPushState(data, unused, url) {
		originalPushState(data, unused, url);
		notifyListeners();
	};
	window.history.replaceState = function patchedReplaceState(data, unused, url) {
		originalReplaceState(data, unused, url);
		notifyListeners();
	};
}
//#endregion
//#region node_modules/vinext/dist/shims/internal/parse-cookie-header.js
/**
* Port of the current Next.js/@edge-runtime request cookie parser semantics.
*
* Important details:
* - split on a semicolon-plus-optional-spaces pattern
* - preserve whitespace around names/values otherwise
* - bare tokens become "true"
* - malformed percent-encoded values are skipped
* - duplicate names collapse to the last value via Map.set()
*/
function parseCookieHeader(cookieHeader) {
	const cookies = /* @__PURE__ */ new Map();
	for (const pair of cookieHeader.split(/; */)) {
		if (!pair) continue;
		const splitAt = pair.indexOf("=");
		if (splitAt === -1) {
			cookies.set(pair, "true");
			continue;
		}
		const key = pair.slice(0, splitAt);
		const value = pair.slice(splitAt + 1);
		try {
			cookies.set(key, decodeURIComponent(value));
		} catch {}
	}
	return cookies;
}
//#endregion
//#region node_modules/vinext/dist/shims/unified-request-context.js
/**
* Unified per-request context backed by a single AsyncLocalStorage.
*
* Consolidates the 5–6 nested ALS scopes that previously wrapped every
* App Router request (headers, navigation, cache-state, private-cache,
* fetch-cache, execution-context) into one flat store.
*
* Each shim module checks `isInsideUnifiedScope()` and reads its sub-fields
* from the unified store, falling back to its own standalone ALS when
* outside (SSR environment, Pages Router, tests).
*/
var _ALS_KEY$5 = Symbol.for("vinext.unifiedRequestContext.als");
var _REQUEST_CONTEXT_ALS_KEY = Symbol.for("vinext.requestContext.als");
var _g$5 = globalThis;
var _als$4 = _g$5[_ALS_KEY$5] ??= new AsyncLocalStorage$1();
function _getInheritedExecutionContext() {
	const unifiedStore = _als$4.getStore();
	if (unifiedStore) return unifiedStore.executionContext;
	return _g$5[_REQUEST_CONTEXT_ALS_KEY]?.getStore() ?? null;
}
/**
* Create a fresh `UnifiedRequestContext` with defaults for all fields.
* Pass partial overrides for the fields you need to pre-populate.
*/
function createRequestContext(opts) {
	return {
		headersContext: null,
		dynamicUsageDetected: false,
		pendingSetCookies: [],
		draftModeCookieHeader: null,
		phase: "render",
		i18nContext: null,
		serverContext: null,
		serverInsertedHTMLCallbacks: [],
		requestScopedCacheLife: null,
		_privateCache: null,
		currentRequestTags: [],
		executionContext: _getInheritedExecutionContext(),
		ssrContext: null,
		ssrHeadChildren: [],
		...opts
	};
}
/**
* Run `fn` within a unified request context scope.
* All shim modules will read/write their state from `ctx` for the
* duration of the call, including async continuations.
*/
function runWithRequestContext(ctx, fn) {
	return _als$4.run(ctx, fn);
}
/**
* Get the current unified request context.
* Returns the ALS store when inside a `runWithRequestContext()` scope,
* or a fresh detached context otherwise. Unlike the legacy per-shim fallback
* singletons, this detached value is ephemeral — mutations do not persist
* across calls. This is intentional to prevent state leakage outside request
* scopes.
*
* Only direct callers observe this detached fallback. Shim `_getState()`
* helpers should continue to gate on `isInsideUnifiedScope()` and fall back
* to their standalone ALS/fallback singletons outside the unified scope.
* If called inside a standalone `runWithExecutionContext()` scope, the
* detached context still reflects that inherited `executionContext`.
*/
function getRequestContext() {
	return _als$4.getStore() ?? createRequestContext();
}
/**
* Check whether the current execution is inside a `runWithRequestContext()` scope.
* Shim modules use this to decide whether to read from the unified store
* or fall back to their own standalone ALS.
*/
function isInsideUnifiedScope() {
	return _als$4.getStore() != null;
}
//#endregion
//#region node_modules/vinext/dist/shims/headers.js
/**
* next/headers shim
*
* Provides cookies() and headers() functions for App Router Server Components.
* These read from a request context set by the RSC handler before rendering.
*
* In Next.js 15+, cookies() and headers() return Promises (async).
* We support both the sync (legacy) and async patterns.
*/
var _ALS_KEY$4 = Symbol.for("vinext.nextHeadersShim.als");
var _FALLBACK_KEY$3 = Symbol.for("vinext.nextHeadersShim.fallback");
var _g$4 = globalThis;
var _als$3 = _g$4[_ALS_KEY$4] ??= new AsyncLocalStorage$1();
var _fallbackState$2 = _g$4[_FALLBACK_KEY$3] ??= {
	headersContext: null,
	dynamicUsageDetected: false,
	pendingSetCookies: [],
	draftModeCookieHeader: null,
	phase: "render"
};
(/* @__PURE__ */ new Date(0)).toUTCString();
function _getState$2() {
	if (isInsideUnifiedScope()) return getRequestContext();
	return _als$3.getStore() ?? _fallbackState$2;
}
/**
* Dynamic usage flag — set when a component calls connection(), cookies(),
* headers(), or noStore() during rendering. When true, ISR caching is
* bypassed and the response gets Cache-Control: no-store.
*/
/**
* Mark the current render as requiring dynamic (uncached) rendering.
* Called by connection(), cookies(), headers(), and noStore().
*/
function markDynamicUsage() {
	_getState$2().dynamicUsageDetected = true;
}
/**
* Check and reset the dynamic usage flag.
* Called by the server after rendering to decide on caching.
*/
function consumeDynamicUsage() {
	const state = _getState$2();
	const used = state.dynamicUsageDetected;
	state.dynamicUsageDetected = false;
	return used;
}
function _setStatePhase(state, phase) {
	const previous = state.phase;
	state.phase = phase;
	return previous;
}
function setHeadersAccessPhase(phase) {
	return _setStatePhase(_getState$2(), phase);
}
/**
* Set the headers/cookies context for the current RSC render.
* Called by the framework's RSC entry before rendering each request.
*
* @deprecated Prefer runWithHeadersContext() which uses als.run() for
* proper per-request isolation. This function mutates the ALS store
* in-place and is only safe for cleanup (ctx=null) within an existing
* als.run() scope.
*/
/**
* Returns the current live HeadersContext from ALS (or the fallback).
* Used after applyMiddlewareRequestHeaders() to build a post-middleware
* request context for afterFiles/fallback rewrite has/missing evaluation.
*/
function getHeadersContext() {
	return _getState$2().headersContext;
}
function setHeadersContext(ctx) {
	const state = _getState$2();
	if (ctx !== null) {
		state.headersContext = ctx;
		state.dynamicUsageDetected = false;
		state.pendingSetCookies = [];
		state.draftModeCookieHeader = null;
		state.phase = "render";
	} else {
		state.headersContext = null;
		state.phase = "render";
	}
}
/** Methods on `Headers` that mutate state. Hoisted to module scope — static. */
var _HEADERS_MUTATING_METHODS = new Set([
	"set",
	"delete",
	"append"
]);
/**
* Create a HeadersContext from a standard Request object.
*
* Performance note: In Workerd (Cloudflare Workers), `new Headers(request.headers)`
* copies the entire header map across the V8/C++ boundary, which shows up as
* ~815 ms self-time in production profiles when requests carry many headers.
* We defer this copy with a lazy proxy:
*
* - Reads (`get`, `has`, `entries`, …) are forwarded directly to the original
*   immutable `request.headers` — zero copy cost on the hot path.
* - The first mutating call (`set`, `delete`, `append`) materialises
*   `new Headers(request.headers)` once, then applies the mutation to the copy.
*   All subsequent operations go to the copy.
*
* This means the ~815 ms copy only occurs when middleware actually rewrites
* request headers via `NextResponse.next({ request: { headers } })`, which is
* uncommon.  Pure read requests (the vast majority) pay zero copy cost.
*
* Cookie parsing is also deferred: the `cookie` header string is not split
* until the first call to `cookies()` or `draftMode()`.
*/
function headersContextFromRequest(request) {
	let _mutable = null;
	const headersProxy = new Proxy(request.headers, { get(target, prop) {
		const src = _mutable ?? target;
		if (typeof prop === "string" && _HEADERS_MUTATING_METHODS.has(prop)) return (...args) => {
			if (!_mutable) _mutable = new Headers(target);
			return _mutable[prop](...args);
		};
		const value = Reflect.get(src, prop, src);
		return typeof value === "function" ? value.bind(src) : value;
	} });
	let _cookies = null;
	function getCookies() {
		if (_cookies) return _cookies;
		_cookies = parseCookieHeader(headersProxy.get("cookie") || "");
		return _cookies;
	}
	return {
		headers: headersProxy,
		get cookies() {
			return getCookies();
		}
	};
}
/** Accumulated Set-Cookie headers from cookies().set() / .delete() calls */
/**
* Get and clear all pending Set-Cookie headers generated by cookies().set()/delete().
* Called by the framework after rendering to attach headers to the response.
*/
function getAndClearPendingCookies() {
	const state = _getState$2();
	const cookies = state.pendingSetCookies;
	state.pendingSetCookies = [];
	return cookies;
}
/**
* Get any Set-Cookie header generated by draftMode().enable()/disable().
* Called by the framework after rendering to attach the header to the response.
*/
function getDraftModeCookieHeader() {
	const state = _getState$2();
	const header = state.draftModeCookieHeader;
	state.draftModeCookieHeader = null;
	return header;
}
//#endregion
//#region node_modules/vinext/dist/shims/request-context.js
/**
* Request ExecutionContext — AsyncLocalStorage-backed accessor.
*
* Makes the Cloudflare Workers `ExecutionContext` (which provides
* `waitUntil`) available to any code on the call stack during a request
* without requiring it to be threaded through every function signature.
*
* Usage:
*
*   // In the worker entry, wrap the handler:
*   import { runWithExecutionContext } from "vinext/shims/request-context";
*   export default {
*     fetch(request, env, ctx) {
*       return runWithExecutionContext(ctx, () => handler.fetch(request, env, ctx));
*     }
*   };
*
*   // Anywhere downstream:
*   import { getRequestExecutionContext } from "vinext/shims/request-context";
*   const ctx = getRequestExecutionContext(); // null on Node.js dev
*   ctx?.waitUntil(somePromise);
*/
var _ALS_KEY$3 = Symbol.for("vinext.requestContext.als");
var _g$3 = globalThis;
var _als$2 = _g$3[_ALS_KEY$3] ??= new AsyncLocalStorage$1();
/**
* Get the `ExecutionContext` for the current request, or `null` when called
* outside a `runWithExecutionContext()` scope (e.g. on Node.js dev server).
*
* Use `ctx?.waitUntil(promise)` to schedule background work that must
* complete before the Worker isolate is torn down.
*/
function getRequestExecutionContext() {
	if (isInsideUnifiedScope()) return getRequestContext().executionContext;
	return _als$2.getStore() ?? null;
}
globalThis.URLPattern;
//#endregion
//#region node_modules/vinext/dist/shims/error-boundary.js
/**
* Generic ErrorBoundary used to wrap route segments with error.tsx.
* This must be a client component since error boundaries use
* componentDidCatch / getDerivedStateFromError.
*/
/**
* Inner class component that catches notFound() errors and renders the
* not-found.tsx fallback. Resets when the pathname changes (client navigation)
* so a previous notFound() doesn't permanently stick.
*
* The ErrorBoundary above re-throws notFound errors so they propagate up to this
* boundary. This must be placed above the ErrorBoundary in the component tree.
*/
/**
* Wrapper that reads the current pathname and passes it to the inner class
* component. This enables automatic reset on client-side navigation.
*/
var ErrorBoundary = /* @__PURE__ */ registerClientReference(() => {
	throw new Error("Unexpectedly client reference export 'ErrorBoundary' is called on server");
}, "f29e6e234fea", "ErrorBoundary");
var NotFoundBoundary = /* @__PURE__ */ registerClientReference(() => {
	throw new Error("Unexpectedly client reference export 'NotFoundBoundary' is called on server");
}, "f29e6e234fea", "NotFoundBoundary");
//#endregion
//#region node_modules/vinext/dist/shims/layout-segment-context.js
/**
* Layout segment context provider.
*
* This is a "use client" module because it needs React's createContext
* and useContext, which are NOT available in the react-server condition.
* The RSC entry renders this as a client component boundary.
*
* The context is shared with navigation.ts via getLayoutSegmentContext()
* to avoid creating separate contexts in different modules.
*/
/**
* Wraps children with the layout segment context.
* Each layout in the App Router tree wraps its children with this provider,
* passing the remaining route tree segments below that layout level.
* Segments include route groups and resolved dynamic param values.
*/
var LayoutSegmentProvider = /* @__PURE__ */ registerClientReference(() => {
	throw new Error("Unexpectedly client reference export 'LayoutSegmentProvider' is called on server");
}, "0deffcb8ffd7", "LayoutSegmentProvider");
//#endregion
//#region node_modules/react/cjs/react-jsx-runtime.react-server.production.js
/**
* @license React
* react-jsx-runtime.react-server.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_react_jsx_runtime_react_server_production = /* @__PURE__ */ __commonJSMin(((exports) => {
	var React = require_react_react_server(), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
	if (!React.__SERVER_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE) throw Error("The \"react\" package in this environment is not configured correctly. The \"react-server\" condition must be enabled in any environment that runs React Server Components.");
	function jsxProd(type, config, maybeKey) {
		var key = null;
		void 0 !== maybeKey && (key = "" + maybeKey);
		void 0 !== config.key && (key = "" + config.key);
		if ("key" in config) {
			maybeKey = {};
			for (var propName in config) "key" !== propName && (maybeKey[propName] = config[propName]);
		} else maybeKey = config;
		config = maybeKey.ref;
		return {
			$$typeof: REACT_ELEMENT_TYPE,
			type,
			key,
			ref: void 0 !== config ? config : null,
			props: maybeKey
		};
	}
	exports.Fragment = REACT_FRAGMENT_TYPE;
	exports.jsx = jsxProd;
	exports.jsxs = jsxProd;
}));
//#endregion
//#region node_modules/vinext/dist/shims/metadata.js
var import_jsx_runtime_react_server = (/* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require_react_jsx_runtime_react_server_production();
})))();
/**
* Normalize null-prototype objects from matchPattern() into thenable objects.
* See entries/app-rsc-entry.ts makeThenableParams() for full explanation.
*/
function makeThenableParams$1(obj) {
	const plain = { ...obj };
	return Object.assign(Promise.resolve(plain), plain);
}
/**
* Resolve viewport config from a module. Handles both static `viewport` export
* and async `generateViewport()` function.
*/
async function resolveModuleViewport(mod, params) {
	if (typeof mod.generateViewport === "function") {
		const asyncParams = makeThenableParams$1(params);
		return await mod.generateViewport({ params: asyncParams });
	}
	if (mod.viewport && typeof mod.viewport === "object") return mod.viewport;
	return null;
}
/**
* Merge viewport configs from multiple sources (layouts + page).
* Later entries override earlier ones.
*/
var DEFAULT_VIEWPORT = {
	width: "device-width",
	initialScale: 1
};
function mergeViewport(viewportList) {
	const merged = { ...DEFAULT_VIEWPORT };
	for (const vp of viewportList) Object.assign(merged, vp);
	return merged;
}
/**
* React component that renders viewport meta tags into <head>.
*/
function ViewportHead({ viewport }) {
	const elements = [];
	let key = 0;
	const parts = [];
	if (viewport.width !== void 0) parts.push(`width=${viewport.width}`);
	if (viewport.height !== void 0) parts.push(`height=${viewport.height}`);
	if (viewport.initialScale !== void 0) parts.push(`initial-scale=${viewport.initialScale}`);
	if (viewport.minimumScale !== void 0) parts.push(`minimum-scale=${viewport.minimumScale}`);
	if (viewport.maximumScale !== void 0) parts.push(`maximum-scale=${viewport.maximumScale}`);
	if (viewport.userScalable !== void 0) parts.push(`user-scalable=${viewport.userScalable ? "yes" : "no"}`);
	if (parts.length > 0) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
		name: "viewport",
		content: parts.join(", ")
	}, key++));
	if (viewport.themeColor) {
		if (typeof viewport.themeColor === "string") elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
			name: "theme-color",
			content: viewport.themeColor
		}, key++));
		else if (Array.isArray(viewport.themeColor)) for (const entry of viewport.themeColor) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
			name: "theme-color",
			content: entry.color,
			...entry.media ? { media: entry.media } : {}
		}, key++));
	}
	if (viewport.colorScheme) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
		name: "color-scheme",
		content: viewport.colorScheme
	}, key++));
	return /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)(import_jsx_runtime_react_server.Fragment, { children: elements });
}
/**
* Merge metadata from multiple sources (layouts + page).
*
* The list is ordered [rootLayout, nestedLayout, ..., page].
* Title template from layouts applies to the page title but NOT to
* the segment that defines the template itself. `title.absolute`
* skips all templates. `title.default` is the fallback when no
* child provides a title.
*
* Shallow merge: later entries override earlier ones (per Next.js docs).
*/
function mergeMetadata(metadataList) {
	if (metadataList.length === 0) return {};
	const merged = {};
	let parentTemplate;
	for (let i = 0; i < metadataList.length; i++) {
		const meta = metadataList[i];
		if (!(i === metadataList.length - 1) && meta.title && typeof meta.title === "object" && meta.title.template) parentTemplate = meta.title.template;
		for (const key of Object.keys(meta)) {
			if (key === "title") continue;
			merged[key] = meta[key];
		}
		if (meta.title !== void 0) merged.title = meta.title;
	}
	const finalTitle = merged.title;
	if (finalTitle) {
		if (typeof finalTitle === "string") {
			if (parentTemplate) merged.title = parentTemplate.replace("%s", finalTitle);
		} else if (typeof finalTitle === "object") {
			if (finalTitle.absolute) merged.title = finalTitle.absolute;
			else if (finalTitle.default) merged.title = finalTitle.default;
			else if (finalTitle.template && !finalTitle.default && !finalTitle.absolute) merged.title = void 0;
		}
	}
	return merged;
}
/**
* Resolve metadata from a module. Handles both static `metadata` export
* and async `generateMetadata()` function.
*
* @param parent - A Promise that resolves to the accumulated (merged) metadata
*   from all ancestor segments. Passed as the second argument to
*   `generateMetadata()`, matching Next.js's eager-execution-with-serial-
*   resolution approach. If not provided, defaults to a promise that resolves
*   to an empty object (so `await parent` never throws).
*/
async function resolveModuleMetadata(mod, params = {}, searchParams, parent = Promise.resolve({})) {
	if (typeof mod.generateMetadata === "function") {
		const asyncParams = makeThenableParams$1(params);
		const asyncSp = makeThenableParams$1(searchParams ?? {});
		return await mod.generateMetadata({
			params: asyncParams,
			searchParams: asyncSp
		}, parent);
	}
	if (mod.metadata && typeof mod.metadata === "object") return mod.metadata;
	return null;
}
/**
* React component that renders metadata as HTML head elements.
* Used by the RSC entry to inject into the <head>.
*/
function MetadataHead({ metadata }) {
	const elements = [];
	let key = 0;
	const base = metadata.metadataBase;
	function resolveUrl(url) {
		if (!url) return void 0;
		const s = typeof url === "string" ? url : url instanceof URL ? url.toString() : String(url);
		if (!base) return s;
		if (s.startsWith("http://") || s.startsWith("https://") || s.startsWith("//")) return s;
		try {
			return new URL(s, base).toString();
		} catch {
			return s;
		}
	}
	const title = typeof metadata.title === "string" ? metadata.title : typeof metadata.title === "object" ? metadata.title.absolute || metadata.title.default : void 0;
	if (title) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("title", { children: title }, key++));
	if (metadata.description) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
		name: "description",
		content: metadata.description
	}, key++));
	if (metadata.generator) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
		name: "generator",
		content: metadata.generator
	}, key++));
	if (metadata.applicationName) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
		name: "application-name",
		content: metadata.applicationName
	}, key++));
	if (metadata.referrer) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
		name: "referrer",
		content: metadata.referrer
	}, key++));
	if (metadata.keywords) {
		const kw = Array.isArray(metadata.keywords) ? metadata.keywords.join(",") : metadata.keywords;
		elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
			name: "keywords",
			content: kw
		}, key++));
	}
	if (metadata.authors) {
		const authorList = Array.isArray(metadata.authors) ? metadata.authors : [metadata.authors];
		for (const author of authorList) {
			if (author.name) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
				name: "author",
				content: author.name
			}, key++));
			if (author.url) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("link", {
				rel: "author",
				href: author.url
			}, key++));
		}
	}
	if (metadata.creator) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
		name: "creator",
		content: metadata.creator
	}, key++));
	if (metadata.publisher) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
		name: "publisher",
		content: metadata.publisher
	}, key++));
	if (metadata.formatDetection) {
		const parts = [];
		if (metadata.formatDetection.telephone === false) parts.push("telephone=no");
		if (metadata.formatDetection.address === false) parts.push("address=no");
		if (metadata.formatDetection.email === false) parts.push("email=no");
		if (parts.length > 0) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
			name: "format-detection",
			content: parts.join(", ")
		}, key++));
	}
	if (metadata.category) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
		name: "category",
		content: metadata.category
	}, key++));
	if (metadata.robots) if (typeof metadata.robots === "string") elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
		name: "robots",
		content: metadata.robots
	}, key++));
	else {
		const { googleBot, ...robotsRest } = metadata.robots;
		const robotParts = [];
		for (const [k, v] of Object.entries(robotsRest)) if (v === true) robotParts.push(k);
		else if (v === false) robotParts.push(`no${k}`);
		else if (typeof v === "string" || typeof v === "number") robotParts.push(`${k}:${v}`);
		if (robotParts.length > 0) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
			name: "robots",
			content: robotParts.join(", ")
		}, key++));
		if (googleBot) if (typeof googleBot === "string") elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
			name: "googlebot",
			content: googleBot
		}, key++));
		else {
			const gbParts = [];
			for (const [k, v] of Object.entries(googleBot)) if (v === true) gbParts.push(k);
			else if (v === false) gbParts.push(`no${k}`);
			else if (typeof v === "string" || typeof v === "number") gbParts.push(`${k}:${v}`);
			if (gbParts.length > 0) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
				name: "googlebot",
				content: gbParts.join(", ")
			}, key++));
		}
	}
	if (metadata.openGraph) {
		const og = metadata.openGraph;
		if (og.title) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
			property: "og:title",
			content: og.title
		}, key++));
		if (og.description) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
			property: "og:description",
			content: og.description
		}, key++));
		if (og.url) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
			property: "og:url",
			content: resolveUrl(og.url)
		}, key++));
		if (og.siteName) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
			property: "og:site_name",
			content: og.siteName
		}, key++));
		if (og.type) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
			property: "og:type",
			content: og.type
		}, key++));
		if (og.locale) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
			property: "og:locale",
			content: og.locale
		}, key++));
		if (og.publishedTime) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
			property: "article:published_time",
			content: og.publishedTime
		}, key++));
		if (og.modifiedTime) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
			property: "article:modified_time",
			content: og.modifiedTime
		}, key++));
		if (og.authors) for (const author of og.authors) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
			property: "article:author",
			content: author
		}, key++));
		if (og.images) {
			const imgList = typeof og.images === "string" || og.images instanceof URL ? [{ url: og.images }] : Array.isArray(og.images) ? og.images : [og.images];
			for (const img of imgList) {
				const imgUrl = typeof img === "string" || img instanceof URL ? img : img.url;
				elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
					property: "og:image",
					content: resolveUrl(imgUrl)
				}, key++));
				if (typeof img !== "string" && !(img instanceof URL)) {
					if (img.width) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
						property: "og:image:width",
						content: String(img.width)
					}, key++));
					if (img.height) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
						property: "og:image:height",
						content: String(img.height)
					}, key++));
					if (img.alt) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
						property: "og:image:alt",
						content: img.alt
					}, key++));
				}
			}
		}
		if (og.videos) for (const video of og.videos) {
			elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
				property: "og:video",
				content: resolveUrl(video.url)
			}, key++));
			if (video.width) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
				property: "og:video:width",
				content: String(video.width)
			}, key++));
			if (video.height) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
				property: "og:video:height",
				content: String(video.height)
			}, key++));
		}
		if (og.audio) for (const audio of og.audio) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
			property: "og:audio",
			content: resolveUrl(audio.url)
		}, key++));
	}
	if (metadata.twitter) {
		const tw = metadata.twitter;
		if (tw.card) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
			name: "twitter:card",
			content: tw.card
		}, key++));
		if (tw.site) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
			name: "twitter:site",
			content: tw.site
		}, key++));
		if (tw.siteId) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
			name: "twitter:site:id",
			content: tw.siteId
		}, key++));
		if (tw.title) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
			name: "twitter:title",
			content: tw.title
		}, key++));
		if (tw.description) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
			name: "twitter:description",
			content: tw.description
		}, key++));
		if (tw.creator) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
			name: "twitter:creator",
			content: tw.creator
		}, key++));
		if (tw.creatorId) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
			name: "twitter:creator:id",
			content: tw.creatorId
		}, key++));
		if (tw.images) {
			const imgList = typeof tw.images === "string" || tw.images instanceof URL ? [tw.images] : Array.isArray(tw.images) ? tw.images : [tw.images];
			for (const img of imgList) {
				const imgUrl = typeof img === "string" || img instanceof URL ? img : img.url;
				elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
					name: "twitter:image",
					content: resolveUrl(imgUrl)
				}, key++));
				if (typeof img !== "string" && !(img instanceof URL) && img.alt) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
					name: "twitter:image:alt",
					content: img.alt
				}, key++));
			}
		}
		if (tw.players) {
			const players = Array.isArray(tw.players) ? tw.players : [tw.players];
			for (const player of players) {
				const playerUrl = player.playerUrl.toString();
				const streamUrl = player.streamUrl.toString();
				elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
					name: "twitter:player",
					content: resolveUrl(playerUrl)
				}, key++));
				elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
					name: "twitter:player:stream",
					content: resolveUrl(streamUrl)
				}, key++));
				elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
					name: "twitter:player:width",
					content: String(player.width)
				}, key++));
				elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
					name: "twitter:player:height",
					content: String(player.height)
				}, key++));
			}
		}
		if (tw.app) {
			const { app } = tw;
			for (const platform of [
				"iphone",
				"ipad",
				"googleplay"
			]) {
				if (app.name) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
					name: `twitter:app:name:${platform}`,
					content: app.name
				}, key++));
				if (app.id[platform] !== void 0) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
					name: `twitter:app:id:${platform}`,
					content: String(app.id[platform])
				}, key++));
				if (app.url?.[platform] !== void 0) {
					const appUrl = app.url[platform].toString();
					elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
						name: `twitter:app:url:${platform}`,
						content: resolveUrl(appUrl)
					}, key++));
				}
			}
		}
	}
	if (metadata.icons) {
		const { icon, shortcut, apple, other } = metadata.icons;
		if (shortcut) {
			const shortcuts = Array.isArray(shortcut) ? shortcut : [shortcut];
			for (const s of shortcuts) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("link", {
				rel: "shortcut icon",
				href: resolveUrl(s)
			}, key++));
		}
		if (icon) {
			const icons = typeof icon === "string" || icon instanceof URL ? [{ url: icon }] : icon;
			for (const i of icons) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("link", {
				rel: "icon",
				href: resolveUrl(i.url),
				...i.sizes ? { sizes: i.sizes } : {},
				...i.type ? { type: i.type } : {},
				...i.media ? { media: i.media } : {}
			}, key++));
		}
		if (apple) {
			const apples = typeof apple === "string" || apple instanceof URL ? [{ url: apple }] : apple;
			for (const a of apples) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("link", {
				rel: "apple-touch-icon",
				href: resolveUrl(a.url),
				...a.sizes ? { sizes: a.sizes } : {},
				...a.type ? { type: a.type } : {}
			}, key++));
		}
		if (other) for (const o of other) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("link", {
			rel: o.rel,
			href: resolveUrl(o.url),
			...o.sizes ? { sizes: o.sizes } : {}
		}, key++));
	}
	if (metadata.manifest) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("link", {
		rel: "manifest",
		href: resolveUrl(metadata.manifest)
	}, key++));
	if (metadata.alternates) {
		const alt = metadata.alternates;
		if (alt.canonical) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("link", {
			rel: "canonical",
			href: resolveUrl(alt.canonical)
		}, key++));
		if (alt.languages) for (const [lang, href] of Object.entries(alt.languages)) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("link", {
			rel: "alternate",
			hrefLang: lang,
			href: resolveUrl(href)
		}, key++));
		if (alt.media) for (const [media, href] of Object.entries(alt.media)) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("link", {
			rel: "alternate",
			media,
			href: resolveUrl(href)
		}, key++));
		if (alt.types) for (const [type, href] of Object.entries(alt.types)) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("link", {
			rel: "alternate",
			type,
			href: resolveUrl(href)
		}, key++));
	}
	if (metadata.verification) {
		const v = metadata.verification;
		if (v.google) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
			name: "google-site-verification",
			content: v.google
		}, key++));
		if (v.yahoo) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
			name: "y_key",
			content: v.yahoo
		}, key++));
		if (v.yandex) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
			name: "yandex-verification",
			content: v.yandex
		}, key++));
		if (v.other) for (const [name, content] of Object.entries(v.other)) {
			const values = Array.isArray(content) ? content : [content];
			for (const val of values) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
				name,
				content: val
			}, key++));
		}
	}
	if (metadata.appleWebApp) {
		const awa = metadata.appleWebApp;
		if (awa.capable !== false) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
			name: "mobile-web-app-capable",
			content: "yes"
		}, key++));
		if (awa.title) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
			name: "apple-mobile-web-app-title",
			content: awa.title
		}, key++));
		if (awa.statusBarStyle) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
			name: "apple-mobile-web-app-status-bar-style",
			content: awa.statusBarStyle
		}, key++));
		if (awa.startupImage) {
			const imgs = typeof awa.startupImage === "string" ? [{ url: awa.startupImage }] : awa.startupImage;
			for (const img of imgs) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("link", {
				rel: "apple-touch-startup-image",
				href: resolveUrl(img.url),
				...img.media ? { media: img.media } : {}
			}, key++));
		}
	}
	if (metadata.itunes) {
		const { appId, appArgument } = metadata.itunes;
		let content = `app-id=${appId}`;
		if (appArgument) content += `, app-argument=${appArgument}`;
		elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
			name: "apple-itunes-app",
			content
		}, key++));
	}
	if (metadata.appLinks) {
		const al = metadata.appLinks;
		for (const platform of [
			"ios",
			"iphone",
			"ipad",
			"android",
			"windows_phone",
			"windows",
			"windows_universal",
			"web"
		]) {
			const entries = al[platform];
			if (!entries) continue;
			const list = Array.isArray(entries) ? entries : [entries];
			for (const entry of list) for (const [k, v] of Object.entries(entry)) {
				if (v === void 0 || v === null) continue;
				const str = String(v);
				const content = k === "url" ? resolveUrl(str) : str;
				elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
					property: `al:${platform}:${k}`,
					content
				}, key++));
			}
		}
	}
	if (metadata.other) for (const [name, content] of Object.entries(metadata.other)) {
		const values = Array.isArray(content) ? content : [content];
		for (const val of values) elements.push(/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("meta", {
			name,
			content: val
		}, key++));
	}
	return /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)(import_jsx_runtime_react_server.Fragment, { children: elements });
}
//#endregion
//#region node_modules/vinext/dist/server/metadata-routes.js
/** Escape the five XML special characters in text content and attribute values. */
function escapeXml(s) {
	return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}
/**
* Convert a sitemap array to XML string.
*/
function sitemapToXml(entries) {
	const hasAlternates = entries.some((entry) => Object.keys(entry.alternates ?? {}).length > 0);
	const hasImages = entries.some((entry) => Boolean(entry.images?.length));
	const hasVideos = entries.some((entry) => Boolean(entry.videos?.length));
	let content = "";
	content += "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n";
	content += "<urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\"";
	if (hasImages) content += " xmlns:image=\"http://www.google.com/schemas/sitemap-image/1.1\"";
	if (hasVideos) content += " xmlns:video=\"http://www.google.com/schemas/sitemap-video/1.1\"";
	if (hasAlternates) content += " xmlns:xhtml=\"http://www.w3.org/1999/xhtml\">\n";
	else content += ">\n";
	for (const entry of entries) {
		content += "<url>\n";
		content += `<loc>${escapeXml(entry.url)}</loc>\n`;
		const languages = entry.alternates?.languages;
		if (languages && Object.keys(languages).length) for (const language in languages) content += `<xhtml:link rel="alternate" hreflang="${escapeXml(language)}" href="${escapeXml(languages[language])}" />\n`;
		if (entry.images?.length) for (const image of entry.images) content += `<image:image>\n<image:loc>${escapeXml(image)}</image:loc>\n</image:image>\n`;
		if (entry.videos?.length) for (const video of entry.videos) {
			const videoFields = [
				"<video:video>",
				`<video:title>${escapeXml(String(video.title))}</video:title>`,
				`<video:thumbnail_loc>${escapeXml(String(video.thumbnail_loc))}</video:thumbnail_loc>`,
				`<video:description>${escapeXml(String(video.description))}</video:description>`,
				video.content_loc && `<video:content_loc>${escapeXml(String(video.content_loc))}</video:content_loc>`,
				video.player_loc && `<video:player_loc>${escapeXml(String(video.player_loc))}</video:player_loc>`,
				video.duration && `<video:duration>${video.duration}</video:duration>`,
				video.view_count && `<video:view_count>${video.view_count}</video:view_count>`,
				video.tag && `<video:tag>${escapeXml(String(video.tag))}</video:tag>`,
				video.rating && `<video:rating>${video.rating}</video:rating>`,
				video.expiration_date && `<video:expiration_date>${escapeXml(String(video.expiration_date))}</video:expiration_date>`,
				video.publication_date && `<video:publication_date>${escapeXml(String(video.publication_date))}</video:publication_date>`,
				video.family_friendly && `<video:family_friendly>${video.family_friendly}</video:family_friendly>`,
				video.requires_subscription && `<video:requires_subscription>${video.requires_subscription}</video:requires_subscription>`,
				video.live && `<video:live>${video.live}</video:live>`,
				video.restriction && `<video:restriction relationship="${escapeXml(String(video.restriction.relationship))}">${escapeXml(String(video.restriction.content))}</video:restriction>`,
				video.platform && `<video:platform relationship="${escapeXml(String(video.platform.relationship))}">${escapeXml(String(video.platform.content))}</video:platform>`,
				video.uploader && `<video:uploader${video.uploader.info ? ` info="${escapeXml(String(video.uploader.info))}"` : ""}>${escapeXml(String(video.uploader.content))}</video:uploader>`,
				"</video:video>\n"
			].filter(Boolean);
			content += videoFields.join("\n");
		}
		if (entry.lastModified) content += `<lastmod>${serializeDate(entry.lastModified)}</lastmod>\n`;
		if (entry.changeFrequency) content += `<changefreq>${entry.changeFrequency}</changefreq>\n`;
		if (typeof entry.priority === "number") content += `<priority>${entry.priority}</priority>\n`;
		content += "</url>\n";
	}
	content += "</urlset>\n";
	return content;
}
/**
* Convert a robots config to text format.
*/
function robotsToText(config) {
	const lines = [];
	const rules = Array.isArray(config.rules) ? config.rules : [config.rules];
	for (const rule of rules) {
		const agents = Array.isArray(rule.userAgent) ? rule.userAgent : [rule.userAgent ?? "*"];
		for (const agent of agents) lines.push(`User-Agent: ${agent}`);
		if (rule.allow) {
			const allows = Array.isArray(rule.allow) ? rule.allow : [rule.allow];
			for (const allow of allows) lines.push(`Allow: ${allow}`);
		}
		if (rule.disallow) {
			const disallows = Array.isArray(rule.disallow) ? rule.disallow : [rule.disallow];
			for (const disallow of disallows) lines.push(`Disallow: ${disallow}`);
		}
		if (rule.crawlDelay !== void 0) lines.push(`Crawl-delay: ${rule.crawlDelay}`);
		lines.push("");
	}
	if (config.sitemap) {
		const sitemaps = Array.isArray(config.sitemap) ? config.sitemap : [config.sitemap];
		for (const sitemap of sitemaps) lines.push(`Sitemap: ${sitemap}`);
	}
	if (config.host) lines.push(`Host: ${config.host}`);
	return lines.join("\n").trim() + "\n";
}
/**
* Convert a manifest config to JSON string.
*/
function manifestToJson(config) {
	return JSON.stringify(config, null, 2);
}
function serializeDate(value) {
	return value instanceof Date ? value.toISOString() : value;
}
//#endregion
//#region node_modules/vinext/dist/config/config-matchers.js
/**
* Cache for compiled regex patterns in matchConfigPattern.
*
* Redirect/rewrite patterns are static — they come from next.config.js and
* never change at runtime. Without caching, every request that hits the regex
* branch re-runs the full tokeniser walk + isSafeRegex + new RegExp() for
* every rule in the array. On apps with many locale-prefixed rules (which all
* contain `(` and therefore enter the regex branch) this dominated profiling
* at ~2.4 seconds of CPU self-time.
*
* Value is `null` when safeRegExp rejected the pattern (ReDoS risk), so we
* skip it on subsequent requests too without re-running the scanner.
*/
var _compiledPatternCache = /* @__PURE__ */ new Map();
/**
* Cache for compiled header source regexes in matchHeaders.
*
* Each NextHeader rule has a `source` that is run through escapeHeaderSource()
* then safeRegExp() to produce a RegExp. Both are pure functions of the source
* string and the result never changes. Without caching, every request
* re-runs the full escapeHeaderSource tokeniser + isSafeRegex scan + new RegExp()
* for every header rule.
*
* Value is `null` when safeRegExp rejected the pattern (ReDoS risk).
*/
var _compiledHeaderSourceCache = /* @__PURE__ */ new Map();
/**
* Cache for compiled has/missing condition value regexes in checkSingleCondition.
*
* Each has/missing condition may carry a `value` string that is passed directly
* to safeRegExp() for matching against header/cookie/query/host values. The
* condition objects are static (from next.config.js) so the compiled RegExp
* never changes. Without caching, safeRegExp() is called on every request for
* every condition on every rule.
*
* Value is `null` when safeRegExp rejected the pattern, or `false` when the
* value string was undefined (no regex needed — use exact string comparison).
*/
var _compiledConditionCache = /* @__PURE__ */ new Map();
/**
* Cache for destination substitution regexes in substituteDestinationParams.
*
* The regex depends only on the set of param keys captured from the matched
* source pattern. Caching by sorted key list avoids recompiling a new RegExp
* for repeated redirect/rewrite calls that use the same param shape.
*/
var _compiledDestinationParamCache = /* @__PURE__ */ new Map();
/**
* Redirect index for O(1) locale-static rule lookup.
*
* Many Next.js apps generate 50-100 redirect rules of the form:
*   /:locale(en|es|fr|...)?/some-static-path  →  /some-destination
*
* The compiled regex for each is like:
*   ^/(en|es|fr|...)?/some-static-path$
*
* When no redirect matches (the common case for ordinary page loads),
* matchRedirect previously ran exec() on every one of those regexes —
* ~2ms per call, ~2992ms total self-time in profiles.
*
* The index splits rules into two buckets:
*
*   localeStatic — rules whose source is exactly /:paramName(alt1|alt2|...)?/suffix
*     where `suffix` is a static path with no further params or regex groups.
*     These are indexed in a Map<suffix, entry[]> for O(1) lookup after a
*     single fast strip of the optional locale prefix.
*
*   linear — all other rules. Matched with the original O(n) loop.
*
* The index is stored in a WeakMap keyed by the redirects array so it is
* computed once per config load and GC'd when the array is no longer live.
*
* ## Ordering invariant
*
* Redirect rules must be evaluated in their original order (first match wins).
* Each locale-static entry stores its `originalIndex` so that, when a
* locale-static fast-path match is found, any linear rules that appear earlier
* in the array are still checked first.
*/
/** Matches `/:param(alternation)?/static/suffix` — the locale-static pattern. */
var _LOCALE_STATIC_RE = /^\/:[\w-]+\(([^)]+)\)\?\/([a-zA-Z0-9_~.%@!$&'*+,;=:/-]+)$/;
var _redirectIndexCache = /* @__PURE__ */ new WeakMap();
/**
* Build (or retrieve from cache) the redirect index for a given redirects array.
*
* Called once per config load from matchRedirect. The WeakMap ensures the index
* is recomputed if the config is reloaded (new array reference) and GC'd when
* the array is collected.
*/
function _getRedirectIndex(redirects) {
	let index = _redirectIndexCache.get(redirects);
	if (index !== void 0) return index;
	const localeStatic = /* @__PURE__ */ new Map();
	const linear = [];
	for (let i = 0; i < redirects.length; i++) {
		const redirect = redirects[i];
		const m = _LOCALE_STATIC_RE.exec(redirect.source);
		if (m) {
			const paramName = redirect.source.slice(2, redirect.source.indexOf("("));
			const alternation = m[1];
			const suffix = "/" + m[2];
			const altRe = safeRegExp("^(?:" + alternation + ")$");
			if (!altRe) {
				linear.push([i, redirect]);
				continue;
			}
			const entry = {
				paramName,
				altRe,
				redirect,
				originalIndex: i
			};
			const bucket = localeStatic.get(suffix);
			if (bucket) bucket.push(entry);
			else localeStatic.set(suffix, [entry]);
		} else linear.push([i, redirect]);
	}
	index = {
		localeStatic,
		linear
	};
	_redirectIndexCache.set(redirects, index);
	return index;
}
/** Hop-by-hop headers that should not be forwarded through a proxy. */
var HOP_BY_HOP_HEADERS = new Set([
	"connection",
	"keep-alive",
	"proxy-authenticate",
	"proxy-authorization",
	"te",
	"trailers",
	"transfer-encoding",
	"upgrade"
]);
/**
* Request hop-by-hop headers to strip before proxying with fetch().
* Intentionally narrower than HOP_BY_HOP_HEADERS: external rewrite proxying
* still forwards proxy auth credentials, while response sanitization strips
* them before returning data to the client.
*/
var REQUEST_HOP_BY_HOP_HEADERS = new Set([
	"connection",
	"keep-alive",
	"te",
	"trailers",
	"transfer-encoding",
	"upgrade"
]);
function stripHopByHopRequestHeaders(headers) {
	const connectionTokens = (headers.get("connection") || "").split(",").map((value) => value.trim().toLowerCase()).filter(Boolean);
	for (const header of REQUEST_HOP_BY_HOP_HEADERS) headers.delete(header);
	for (const token of connectionTokens) headers.delete(token);
}
/**
* Detect regex patterns vulnerable to catastrophic backtracking (ReDoS).
*
* Uses a lightweight heuristic: scans the pattern string for nested quantifiers
* (a quantifier applied to a group that itself contains a quantifier). This
* catches the most common pathological patterns like `(a+)+`, `(.*)*`,
* `([^/]+)+`, `(a|a+)+` without needing a full regex parser.
*
* Returns true if the pattern appears safe, false if it's potentially dangerous.
*/
function isSafeRegex(pattern) {
	const quantifierAtDepth = [];
	let depth = 0;
	let i = 0;
	while (i < pattern.length) {
		const ch = pattern[i];
		if (ch === "\\") {
			i += 2;
			continue;
		}
		if (ch === "[") {
			i++;
			while (i < pattern.length && pattern[i] !== "]") {
				if (pattern[i] === "\\") i++;
				i++;
			}
			i++;
			continue;
		}
		if (ch === "(") {
			depth++;
			if (quantifierAtDepth.length <= depth) quantifierAtDepth.push(false);
			else quantifierAtDepth[depth] = false;
			i++;
			continue;
		}
		if (ch === ")") {
			const hadQuantifier = depth > 0 && quantifierAtDepth[depth];
			if (depth > 0) depth--;
			const next = pattern[i + 1];
			if (next === "+" || next === "*" || next === "{") {
				if (hadQuantifier) return false;
				if (depth >= 0 && depth < quantifierAtDepth.length) quantifierAtDepth[depth] = true;
			}
			i++;
			continue;
		}
		if (ch === "+" || ch === "*") {
			if (depth > 0) quantifierAtDepth[depth] = true;
			i++;
			continue;
		}
		if (ch === "?") {
			const prev = i > 0 ? pattern[i - 1] : "";
			if (prev !== "+" && prev !== "*" && prev !== "?" && prev !== "}") {
				if (depth > 0) quantifierAtDepth[depth] = true;
			}
			i++;
			continue;
		}
		if (ch === "{") {
			let j = i + 1;
			while (j < pattern.length && /[\d,]/.test(pattern[j])) j++;
			if (j < pattern.length && pattern[j] === "}" && j > i + 1) {
				if (depth > 0) quantifierAtDepth[depth] = true;
				i = j + 1;
				continue;
			}
		}
		i++;
	}
	return true;
}
/**
* Compile a regex pattern safely. Returns the compiled RegExp or null if the
* pattern is invalid or vulnerable to ReDoS.
*
* Logs a warning when a pattern is rejected so developers can fix their config.
*/
function safeRegExp(pattern, flags) {
	if (!isSafeRegex(pattern)) {
		console.warn(`[vinext] Ignoring potentially unsafe regex pattern (ReDoS risk): ${pattern}\n  Patterns with nested quantifiers (e.g. (a+)+) can cause catastrophic backtracking.\n  Simplify the pattern to avoid nested repetition.`);
		return null;
	}
	try {
		return new RegExp(pattern, flags);
	} catch {
		return null;
	}
}
/**
* Convert a Next.js header/rewrite/redirect source pattern into a regex string.
*
* Regex groups in the source (e.g. `(\d+)`) are extracted first, the remaining
* text is escaped/converted in a **single pass** (avoiding chained `.replace()`
* which CodeQL flags as incomplete sanitization), then groups are restored.
*/
function escapeHeaderSource(source) {
	const S = "";
	const groups = [];
	const withPlaceholders = source.replace(/\(([^)]+)\)/g, (_m, inner) => {
		groups.push(inner);
		return `${S}G${groups.length - 1}${S}`;
	});
	let result = "";
	const re = new RegExp(`${S}G(\\d+)${S}|:[\\w-]+|[.+?*]|[^.+?*:\\uE000]+`, "g");
	let m;
	while ((m = re.exec(withPlaceholders)) !== null) if (m[1] !== void 0) result += `(${groups[Number(m[1])]})`;
	else if (m[0].startsWith(":")) {
		const constraintMatch = withPlaceholders.slice(re.lastIndex).match(new RegExp(`^${S}G(\\d+)${S}`));
		if (constraintMatch) {
			re.lastIndex += constraintMatch[0].length;
			result += `(${groups[Number(constraintMatch[1])]})`;
		} else result += "[^/]+";
	} else switch (m[0]) {
		case ".":
			result += "\\.";
			break;
		case "+":
			result += "\\+";
			break;
		case "?":
			result += "\\?";
			break;
		case "*":
			result += ".*";
			break;
		default:
			result += m[0];
			break;
	}
	return result;
}
/**
* Parse a Cookie header string into a key-value record.
*/
function parseCookies(cookieHeader) {
	if (!cookieHeader) return {};
	const cookies = {};
	for (const part of cookieHeader.split(";")) {
		const eq = part.indexOf("=");
		if (eq === -1) continue;
		const key = part.slice(0, eq).trim();
		const value = part.slice(eq + 1).trim();
		if (key) cookies[key] = value;
	}
	return cookies;
}
/**
* Build a RequestContext from a Web Request object.
*/
function requestContextFromRequest(request) {
	const url = new URL(request.url);
	return {
		headers: request.headers,
		cookies: parseCookies(request.headers.get("cookie")),
		query: url.searchParams,
		host: normalizeHost(request.headers.get("host"), url.hostname)
	};
}
function normalizeHost(hostHeader, fallbackHostname) {
	return (hostHeader ?? fallbackHostname).split(":", 1)[0].toLowerCase();
}
function _emptyParams() {
	return Object.create(null);
}
function _matchConditionValue(actualValue, expectedValue) {
	if (expectedValue === void 0) return _emptyParams();
	const re = _cachedConditionRegex(expectedValue);
	if (re) {
		const match = re.exec(actualValue);
		if (!match) return null;
		const params = _emptyParams();
		if (match.groups) {
			for (const [key, value] of Object.entries(match.groups)) if (value !== void 0) params[key] = value;
		}
		return params;
	}
	return actualValue === expectedValue ? _emptyParams() : null;
}
/**
* Check a single has/missing condition against request context.
* Returns captured params when the condition is satisfied, or null otherwise.
*/
function matchSingleCondition(condition, ctx) {
	switch (condition.type) {
		case "header": {
			const headerValue = ctx.headers.get(condition.key);
			if (headerValue === null) return null;
			return _matchConditionValue(headerValue, condition.value);
		}
		case "cookie": {
			const cookieValue = ctx.cookies[condition.key];
			if (cookieValue === void 0) return null;
			return _matchConditionValue(cookieValue, condition.value);
		}
		case "query": {
			const queryValue = ctx.query.get(condition.key);
			if (queryValue === null) return null;
			return _matchConditionValue(queryValue, condition.value);
		}
		case "host":
			if (condition.value !== void 0) return _matchConditionValue(ctx.host, condition.value);
			return ctx.host === condition.key ? _emptyParams() : null;
		default: return null;
	}
}
/**
* Return a cached RegExp for a has/missing condition value string, compiling
* on first use. Returns null if safeRegExp rejected the pattern or if the
* value is not a valid regex (fall back to exact string comparison).
*/
function _cachedConditionRegex(value) {
	let re = _compiledConditionCache.get(value);
	if (re === void 0) {
		re = safeRegExp(value);
		_compiledConditionCache.set(value, re);
	}
	return re;
}
/**
* Check all has/missing conditions for a config rule.
* Returns true if the rule should be applied (all has conditions pass, all missing conditions pass).
*
* - has: every condition must match (the request must have it)
* - missing: every condition must NOT match (the request must not have it)
*/
function collectConditionParams(has, missing, ctx) {
	const params = _emptyParams();
	if (has) for (const condition of has) {
		const conditionParams = matchSingleCondition(condition, ctx);
		if (!conditionParams) return null;
		Object.assign(params, conditionParams);
	}
	if (missing) {
		for (const condition of missing) if (matchSingleCondition(condition, ctx)) return null;
	}
	return params;
}
function checkHasConditions(has, missing, ctx) {
	return collectConditionParams(has, missing, ctx) !== null;
}
/**
* If the current position in `str` starts with a parenthesized group, consume
* it and advance `re.lastIndex` past the closing `)`. Returns the group
* contents or null if no group is present.
*/
function extractConstraint(str, re) {
	if (str[re.lastIndex] !== "(") return null;
	const start = re.lastIndex + 1;
	let depth = 1;
	let i = start;
	while (i < str.length && depth > 0) {
		if (str[i] === "(") depth++;
		else if (str[i] === ")") depth--;
		i++;
	}
	if (depth !== 0) return null;
	re.lastIndex = i;
	return str.slice(start, i - 1);
}
/**
* Match a Next.js config pattern (from redirects/rewrites sources) against a pathname.
* Returns matched params or null.
*
* Supports:
*   :param     - matches a single path segment
*   :param*    - matches zero or more segments (catch-all)
*   :param+    - matches one or more segments
*   (regex)    - inline regex patterns in the source
*   :param(constraint) - named param with inline regex constraint
*/
function matchConfigPattern(pathname, pattern) {
	if (pattern.includes("(") || pattern.includes("\\") || /:[\w-]+[*+][^/]/.test(pattern) || /:[\w-]+\./.test(pattern)) try {
		let compiled = _compiledPatternCache.get(pattern);
		if (compiled === void 0) {
			const paramNames = [];
			let regexStr = "";
			const tokenRe = /:([\w-]+)|[.]|[^:.]+/g;
			let tok;
			while ((tok = tokenRe.exec(pattern)) !== null) if (tok[1] !== void 0) {
				const name = tok[1];
				const rest = pattern.slice(tokenRe.lastIndex);
				if (rest.startsWith("*") || rest.startsWith("+")) {
					const quantifier = rest[0];
					tokenRe.lastIndex += 1;
					const constraint = extractConstraint(pattern, tokenRe);
					paramNames.push(name);
					if (constraint !== null) regexStr += `(${constraint})`;
					else regexStr += quantifier === "*" ? "(.*)" : "(.+)";
				} else {
					const constraint = extractConstraint(pattern, tokenRe);
					paramNames.push(name);
					regexStr += constraint !== null ? `(${constraint})` : "([^/]+)";
				}
			} else if (tok[0] === ".") regexStr += "\\.";
			else regexStr += tok[0];
			const re = safeRegExp("^" + regexStr + "$");
			compiled = re ? {
				re,
				paramNames
			} : null;
			_compiledPatternCache.set(pattern, compiled);
		}
		if (!compiled) return null;
		const match = compiled.re.exec(pathname);
		if (!match) return null;
		const params = Object.create(null);
		for (let i = 0; i < compiled.paramNames.length; i++) params[compiled.paramNames[i]] = match[i + 1] ?? "";
		return params;
	} catch {}
	const catchAllMatch = pattern.match(/:([\w-]+)(\*|\+)$/);
	if (catchAllMatch) {
		const prefix = pattern.slice(0, pattern.lastIndexOf(":"));
		const paramName = catchAllMatch[1];
		const isPlus = catchAllMatch[2] === "+";
		const prefixNoSlash = prefix.replace(/\/$/, "");
		if (!pathname.startsWith(prefixNoSlash)) return null;
		const charAfter = pathname[prefixNoSlash.length];
		if (charAfter !== void 0 && charAfter !== "/") return null;
		const rest = pathname.slice(prefixNoSlash.length);
		if (isPlus && (!rest || rest === "/")) return null;
		let restValue = rest.startsWith("/") ? rest.slice(1) : rest;
		return { [paramName]: restValue };
	}
	const parts = pattern.split("/");
	const pathParts = pathname.split("/");
	if (parts.length !== pathParts.length) return null;
	const params = Object.create(null);
	for (let i = 0; i < parts.length; i++) if (parts[i].startsWith(":")) params[parts[i].slice(1)] = pathParts[i];
	else if (parts[i] !== pathParts[i]) return null;
	return params;
}
/**
* Apply redirect rules from next.config.js.
* Returns the redirect info if a redirect was matched, or null.
*
* `ctx` provides the request context (cookies, headers, query, host) used
* to evaluate has/missing conditions. Next.js always has request context
* when evaluating redirects, so this parameter is required.
*
* ## Performance
*
* Rules with a locale-capture-group prefix (the dominant pattern in large
* Next.js apps — e.g. `/:locale(en|es|fr|...)?/some-path`) are handled via
* a pre-built index. Instead of running exec() on each locale regex
* individually, we:
*
*   1. Strip the optional locale prefix from the pathname with one cheap
*      string-slice check (no regex exec on the hot path).
*   2. Look up the stripped suffix in a Map<suffix, entry[]>.
*   3. For each matching entry, validate the captured locale string against
*      a small, anchored alternation regex.
*
* This reduces the per-request cost from O(n × regex) to O(1) map lookup +
* O(matches × tiny-regex), eliminating the ~2992ms self-time reported in
* profiles for apps with 63+ locale-prefixed rules.
*
* Rules that don't fit the locale-static pattern fall back to the original
* linear matchConfigPattern scan.
*
* ## Ordering invariant
*
* First match wins, preserving the original redirect array order. When a
* locale-static fast-path match is found at position N, all linear rules with
* an original index < N are checked via matchConfigPattern first — they are
* few in practice (typically zero) so this is not a hot-path concern.
*/
function matchRedirect(pathname, redirects, ctx) {
	if (redirects.length === 0) return null;
	const index = _getRedirectIndex(redirects);
	let localeMatch = null;
	let localeMatchIndex = Infinity;
	if (index.localeStatic.size > 0) {
		const noLocaleBucket = index.localeStatic.get(pathname);
		if (noLocaleBucket) for (const entry of noLocaleBucket) {
			if (entry.originalIndex >= localeMatchIndex) continue;
			const redirect = entry.redirect;
			const conditionParams = redirect.has || redirect.missing ? collectConditionParams(redirect.has, redirect.missing, ctx) : _emptyParams();
			if (!conditionParams) continue;
			let dest = substituteDestinationParams(redirect.destination, {
				[entry.paramName]: "",
				...conditionParams
			});
			dest = sanitizeDestination(dest);
			localeMatch = {
				destination: dest,
				permanent: redirect.permanent
			};
			localeMatchIndex = entry.originalIndex;
			break;
		}
		const slashTwo = pathname.indexOf("/", 1);
		if (slashTwo !== -1) {
			const suffix = pathname.slice(slashTwo);
			const localePart = pathname.slice(1, slashTwo);
			const localeBucket = index.localeStatic.get(suffix);
			if (localeBucket) for (const entry of localeBucket) {
				if (entry.originalIndex >= localeMatchIndex) continue;
				if (!entry.altRe.test(localePart)) continue;
				const redirect = entry.redirect;
				const conditionParams = redirect.has || redirect.missing ? collectConditionParams(redirect.has, redirect.missing, ctx) : _emptyParams();
				if (!conditionParams) continue;
				let dest = substituteDestinationParams(redirect.destination, {
					[entry.paramName]: localePart,
					...conditionParams
				});
				dest = sanitizeDestination(dest);
				localeMatch = {
					destination: dest,
					permanent: redirect.permanent
				};
				localeMatchIndex = entry.originalIndex;
				break;
			}
		}
	}
	for (const [origIdx, redirect] of index.linear) {
		if (origIdx >= localeMatchIndex) break;
		const params = matchConfigPattern(pathname, redirect.source);
		if (params) {
			const conditionParams = redirect.has || redirect.missing ? collectConditionParams(redirect.has, redirect.missing, ctx) : _emptyParams();
			if (!conditionParams) continue;
			let dest = substituteDestinationParams(redirect.destination, {
				...params,
				...conditionParams
			});
			dest = sanitizeDestination(dest);
			return {
				destination: dest,
				permanent: redirect.permanent
			};
		}
	}
	return localeMatch;
}
/**
* Apply rewrite rules from next.config.js.
* Returns the rewritten URL or null if no rewrite matched.
*
* `ctx` provides the request context (cookies, headers, query, host) used
* to evaluate has/missing conditions. Next.js always has request context
* when evaluating rewrites, so this parameter is required.
*/
function matchRewrite(pathname, rewrites, ctx) {
	for (const rewrite of rewrites) {
		const params = matchConfigPattern(pathname, rewrite.source);
		if (params) {
			const conditionParams = rewrite.has || rewrite.missing ? collectConditionParams(rewrite.has, rewrite.missing, ctx) : _emptyParams();
			if (!conditionParams) continue;
			let dest = substituteDestinationParams(rewrite.destination, {
				...params,
				...conditionParams
			});
			dest = sanitizeDestination(dest);
			return dest;
		}
	}
	return null;
}
/**
* Substitute all matched route params into a redirect/rewrite destination.
*
* Handles repeated params (e.g. `/api/:id/:id`) and catch-all suffix forms
* (`:path*`, `:path+`) in a single pass. Unknown params are left intact.
*/
function substituteDestinationParams(destination, params) {
	const keys = Object.keys(params);
	if (keys.length === 0) return destination;
	const sortedKeys = [...keys].sort((a, b) => b.length - a.length);
	const cacheKey = sortedKeys.join("\0");
	let paramRe = _compiledDestinationParamCache.get(cacheKey);
	if (!paramRe) {
		const paramAlternation = sortedKeys.map((key) => key.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|");
		paramRe = new RegExp(`:(${paramAlternation})([+*])?(?![A-Za-z0-9_])`, "g");
		_compiledDestinationParamCache.set(cacheKey, paramRe);
	}
	return destination.replace(paramRe, (_token, key) => params[key]);
}
/**
* Sanitize a redirect/rewrite destination to collapse protocol-relative URLs.
*
* After parameter substitution, a destination like `/:path*` can become
* `//evil.com` if the catch-all captured a decoded `%2F` (`/evil.com`).
* Browsers interpret `//evil.com` as a protocol-relative URL, redirecting
* users off-site.
*
* This function collapses any leading double (or more) slashes to a single
* slash for non-external (relative) destinations.
*/
function sanitizeDestination(dest) {
	if (dest.startsWith("http://") || dest.startsWith("https://")) return dest;
	dest = dest.replace(/^[\\/]+/, "/");
	return dest;
}
/**
* Check if a URL is external (absolute URL or protocol-relative).
* Detects any URL scheme (http:, https:, data:, javascript:, blob:, etc.)
* per RFC 3986, plus protocol-relative URLs (//).
*/
function isExternalUrl(url) {
	return /^[a-z][a-z0-9+.-]*:/i.test(url) || url.startsWith("//");
}
/**
* Proxy an incoming request to an external URL and return the upstream response.
*
* Used for external rewrites (e.g. `/ph/:path*` → `https://us.i.posthog.com/:path*`).
* Next.js handles these as server-side reverse proxies, forwarding the request
* method, headers, and body to the external destination.
*
* Works in all runtimes (Node.js, Cloudflare Workers) via the standard fetch() API.
*/
async function proxyExternalRequest(request, externalUrl) {
	const originalUrl = new URL(request.url);
	const targetUrl = new URL(externalUrl);
	const destinationKeys = new Set(targetUrl.searchParams.keys());
	for (const [key, value] of originalUrl.searchParams) if (!destinationKeys.has(key)) targetUrl.searchParams.append(key, value);
	const headers = new Headers(request.headers);
	headers.set("host", targetUrl.host);
	stripHopByHopRequestHeaders(headers);
	const keysToDelete = [];
	for (const key of headers.keys()) if (key.startsWith("x-middleware-")) keysToDelete.push(key);
	for (const key of keysToDelete) headers.delete(key);
	const method = request.method;
	const hasBody = method !== "GET" && method !== "HEAD";
	const init = {
		method,
		headers,
		redirect: "manual"
	};
	if (hasBody && request.body) {
		init.body = request.body;
		init.duplex = "half";
	}
	const controller = new AbortController();
	const timeout = setTimeout(() => controller.abort(), 3e4);
	let upstreamResponse;
	try {
		upstreamResponse = await fetch(targetUrl.href, {
			...init,
			signal: controller.signal
		});
	} catch (e) {
		if (e?.name === "AbortError") {
			console.error("[vinext] External rewrite proxy timeout:", targetUrl.href);
			return new Response("Gateway Timeout", { status: 504 });
		}
		console.error("[vinext] External rewrite proxy error:", e);
		return new Response("Bad Gateway", { status: 502 });
	} finally {
		clearTimeout(timeout);
	}
	const isNodeRuntime = typeof process !== "undefined" && !!process.versions?.node;
	const responseHeaders = new Headers();
	upstreamResponse.headers.forEach((value, key) => {
		const lower = key.toLowerCase();
		if (HOP_BY_HOP_HEADERS.has(lower)) return;
		if (isNodeRuntime && (lower === "content-encoding" || lower === "content-length")) return;
		responseHeaders.append(key, value);
	});
	return new Response(upstreamResponse.body, {
		status: upstreamResponse.status,
		statusText: upstreamResponse.statusText,
		headers: responseHeaders
	});
}
/**
* Apply custom header rules from next.config.js.
* Returns an array of { key, value } pairs to set on the response.
*
* `ctx` provides the request context (cookies, headers, query, host) used
* to evaluate has/missing conditions. Next.js always has request context
* when evaluating headers, so this parameter is required.
*/
function matchHeaders(pathname, headers, ctx) {
	const result = [];
	for (const rule of headers) {
		let sourceRegex = _compiledHeaderSourceCache.get(rule.source);
		if (sourceRegex === void 0) {
			sourceRegex = safeRegExp("^" + escapeHeaderSource(rule.source) + "$");
			_compiledHeaderSourceCache.set(rule.source, sourceRegex);
		}
		if (sourceRegex && sourceRegex.test(pathname)) {
			if (rule.has || rule.missing) {
				if (!checkHasConditions(rule.has, rule.missing, ctx)) continue;
			}
			result.push(...rule.headers);
		}
	}
	return result;
}
//#endregion
//#region node_modules/vinext/dist/server/request-pipeline.js
/**
* Shared request pipeline utilities.
*
* Extracted from the App Router RSC entry (entries/app-rsc-entry.ts) to enable
* reuse across entry points. Currently consumed by app-rsc-entry.ts;
* dev-server.ts, prod-server.ts, and index.ts still have inline versions
* that should be migrated in follow-up work.
*
* These utilities handle the common request lifecycle steps: protocol-
* relative URL guards, basePath stripping, trailing slash normalization,
* and CSRF origin validation.
*/
/**
* Guard against protocol-relative URL open redirects.
*
* Paths like `//example.com/` would be redirected to `//example.com` by the
* trailing-slash normalizer, which browsers interpret as `http://example.com`.
* Backslashes are equivalent to forward slashes in the URL spec
* (e.g. `/\evil.com` is treated as `//evil.com` by browsers).
*
* Next.js returns 404 for these paths. We check the RAW pathname before
* normalization so the guard fires before normalizePath collapses `//`.
*
* @param rawPathname - The raw pathname from the URL, before any normalization
* @returns A 404 Response if the path is protocol-relative, or null to continue
*/
function guardProtocolRelativeUrl(rawPathname) {
	if (rawPathname.replaceAll("\\", "/").startsWith("//")) return new Response("404 Not Found", { status: 404 });
	return null;
}
/**
* Check if the pathname needs a trailing slash redirect, and return the
* redirect Response if so.
*
* Follows Next.js behavior:
* - `/api` routes are never redirected
* - The root path `/` is never redirected
* - If `trailingSlash` is true, redirect `/about` → `/about/`
* - If `trailingSlash` is false (default), redirect `/about/` → `/about`
*
* @param pathname - The basePath-stripped pathname
* @param basePath - The basePath to prepend to the redirect Location
* @param trailingSlash - Whether trailing slashes should be enforced
* @param search - The query string (including `?`) to preserve in the redirect
* @returns A 308 redirect Response, or null if no redirect is needed
*/
function normalizeTrailingSlash(pathname, basePath, trailingSlash, search) {
	if (pathname === "/" || pathname === "/api" || pathname.startsWith("/api/")) return null;
	const hasTrailing = pathname.endsWith("/");
	if (trailingSlash && !hasTrailing && !pathname.endsWith(".rsc")) return new Response(null, {
		status: 308,
		headers: { Location: basePath + pathname + "/" + search }
	});
	if (!trailingSlash && hasTrailing) return new Response(null, {
		status: 308,
		headers: { Location: basePath + pathname.replace(/\/+$/, "") + search }
	});
	return null;
}
/**
* Validate CSRF origin for server action requests.
*
* Matches Next.js behavior: compares the Origin header against the Host
* header. If they don't match, the request is rejected with 403 unless
* the origin is in the allowedOrigins list.
*
* @param request - The incoming Request
* @param allowedOrigins - Origins from experimental.serverActions.allowedOrigins
* @returns A 403 Response if origin validation fails, or null to continue
*/
function validateCsrfOrigin(request, allowedOrigins = []) {
	const originHeader = request.headers.get("origin");
	if (!originHeader) return null;
	if (originHeader === "null") {
		if (allowedOrigins.includes("null")) return null;
		console.warn(`[vinext] CSRF origin "null" blocked for server action. To allow requests from sandboxed contexts, add "null" to experimental.serverActions.allowedOrigins.`);
		return new Response("Forbidden", {
			status: 403,
			headers: { "Content-Type": "text/plain" }
		});
	}
	let originHost;
	try {
		originHost = new URL(originHeader).host.toLowerCase();
	} catch {
		return new Response("Forbidden", {
			status: 403,
			headers: { "Content-Type": "text/plain" }
		});
	}
	const hostHeader = (request.headers.get("host") || "").split(",")[0].trim().toLowerCase() || new URL(request.url).host.toLowerCase();
	if (originHost === hostHeader) return null;
	if (allowedOrigins.length > 0 && isOriginAllowed(originHost, allowedOrigins)) return null;
	console.warn(`[vinext] CSRF origin mismatch: origin "${originHost}" does not match host "${hostHeader}". Blocking server action request.`);
	return new Response("Forbidden", {
		status: 403,
		headers: { "Content-Type": "text/plain" }
	});
}
/**
* Check if an origin matches any pattern in the allowed origins list.
* Supports wildcard subdomains (e.g. `*.example.com`).
*/
function isOriginAllowed(origin, allowed) {
	for (const pattern of allowed) if (pattern.startsWith("*.")) {
		const suffix = pattern.slice(1);
		if (origin === pattern.slice(2) || origin.endsWith(suffix)) return true;
	} else if (origin === pattern) return true;
	return false;
}
/**
* Validate an image optimization URL parameter.
*
* Ensures the URL is a relative path that doesn't escape the origin:
* - Must start with "/" but not "//"
* - Backslashes are normalized (browsers treat `\` as `/`)
* - Origin validation as defense-in-depth
*
* @param rawUrl - The raw `url` query parameter value
* @param requestUrl - The full request URL for origin comparison
* @returns An error Response if validation fails, or the normalized image URL
*/
function validateImageUrl(rawUrl, requestUrl) {
	const imgUrl = rawUrl?.replaceAll("\\", "/") ?? null;
	if (!imgUrl || !imgUrl.startsWith("/") || imgUrl.startsWith("//")) return new Response(!rawUrl ? "Missing url parameter" : "Only relative URLs allowed", { status: 400 });
	const url = new URL(requestUrl);
	if (new URL(imgUrl, url.origin).origin !== url.origin) return new Response("Only relative URLs allowed", { status: 400 });
	return imgUrl;
}
//#endregion
//#region node_modules/vinext/dist/shims/cache.js
var MemoryCacheHandler = class {
	store = /* @__PURE__ */ new Map();
	tagRevalidatedAt = /* @__PURE__ */ new Map();
	async get(key, _ctx) {
		const entry = this.store.get(key);
		if (!entry) return null;
		for (const tag of entry.tags) {
			const revalidatedAt = this.tagRevalidatedAt.get(tag);
			if (revalidatedAt && revalidatedAt >= entry.lastModified) {
				this.store.delete(key);
				return null;
			}
		}
		if (entry.revalidateAt !== null && Date.now() > entry.revalidateAt) return {
			lastModified: entry.lastModified,
			value: entry.value,
			cacheState: "stale"
		};
		return {
			lastModified: entry.lastModified,
			value: entry.value
		};
	}
	async set(key, data, ctx) {
		const typedCtx = ctx;
		const tagSet = /* @__PURE__ */ new Set();
		if (data && "tags" in data && Array.isArray(data.tags)) for (const t of data.tags) tagSet.add(t);
		if (typedCtx && Array.isArray(typedCtx.tags)) for (const t of typedCtx.tags) tagSet.add(t);
		const tags = [...tagSet];
		let effectiveRevalidate;
		if (typedCtx) {
			const revalidate = typedCtx.cacheControl?.revalidate ?? typedCtx.revalidate;
			if (typeof revalidate === "number") effectiveRevalidate = revalidate;
		}
		if (data && "revalidate" in data && typeof data.revalidate === "number") effectiveRevalidate = data.revalidate;
		if (effectiveRevalidate === 0) return;
		const revalidateAt = typeof effectiveRevalidate === "number" && effectiveRevalidate > 0 ? Date.now() + effectiveRevalidate * 1e3 : null;
		this.store.set(key, {
			value: data,
			tags,
			lastModified: Date.now(),
			revalidateAt
		});
	}
	async revalidateTag(tags, _durations) {
		const tagList = Array.isArray(tags) ? tags : [tags];
		const now = Date.now();
		for (const tag of tagList) this.tagRevalidatedAt.set(tag, now);
	}
	resetRequestCache() {}
};
var _HANDLER_KEY = Symbol.for("vinext.cacheHandler");
var _gHandler = globalThis;
function _getActiveHandler() {
	return _gHandler[_HANDLER_KEY] ?? (_gHandler[_HANDLER_KEY] = new MemoryCacheHandler());
}
/**
* Get the active CacheHandler (for internal use or testing).
*/
function getCacheHandler() {
	return _getActiveHandler();
}
var _ALS_KEY$2 = Symbol.for("vinext.cache.als");
var _FALLBACK_KEY$2 = Symbol.for("vinext.cache.fallback");
var _g$2 = globalThis;
var _cacheAls = _g$2[_ALS_KEY$2] ??= new AsyncLocalStorage$1();
var _cacheFallbackState = _g$2[_FALLBACK_KEY$2] ??= { requestScopedCacheLife: null };
function _getCacheState() {
	if (isInsideUnifiedScope()) return getRequestContext();
	return _cacheAls.getStore() ?? _cacheFallbackState;
}
/**
* Consume and reset the request-scoped cache life. Returns null if none was set.
* @internal
*/
function _consumeRequestScopedCacheLife() {
	const state = _getCacheState();
	const config = state.requestScopedCacheLife;
	state.requestScopedCacheLife = null;
	return config;
}
/**
* AsyncLocalStorage to track whether we're inside an unstable_cache() callback.
* Stored on globalThis via Symbol so headers.ts can detect the scope without
* a direct import (avoiding circular dependencies).
*/
var _UNSTABLE_CACHE_ALS_KEY = Symbol.for("vinext.unstableCache.als");
_g$2[_UNSTABLE_CACHE_ALS_KEY] ??= new AsyncLocalStorage$1();
//#endregion
//#region node_modules/vinext/dist/shims/fetch-cache.js
/**
* Extended fetch() with Next.js caching semantics.
*
* Patches `globalThis.fetch` during server rendering to support:
*
*   fetch(url, { next: { revalidate: 60, tags: ['posts'] } })
*   fetch(url, { cache: 'force-cache' })
*   fetch(url, { cache: 'no-store' })
*
* Cached responses are stored via the pluggable CacheHandler, so
* revalidateTag() and revalidatePath() invalidate fetch-level caches.
*
* Usage (in server entry):
*   import { withFetchCache, cleanupFetchCache } from './fetch-cache';
*   const cleanup = withFetchCache();
*   try { ... render ... } finally { cleanup(); }
*
* Or use the async helper:
*   await runWithFetchCache(async () => { ... render ... });
*/
/**
* Headers excluded from the cache key. These are W3C trace context headers
* that can break request caching and deduplication.
* All other headers ARE included in the cache key, matching Next.js behavior.
*/
var HEADER_BLOCKLIST = ["traceparent", "tracestate"];
var CACHE_KEY_PREFIX = "v3";
var MAX_CACHE_KEY_BODY_BYTES = 1024 * 1024;
var BodyTooLargeForCacheKeyError = class extends Error {
	constructor() {
		super("Fetch body too large for cache key generation");
	}
};
var SkipCacheKeyGenerationError = class extends Error {
	constructor() {
		super("Fetch body could not be serialized for cache key generation");
	}
};
/**
* Collect all headers from the request, excluding the blocklist.
* Merges headers from both the Request object and the init object,
* with init taking precedence (matching fetch() spec behavior).
*/
function collectHeaders(input, init) {
	const merged = {};
	if (input instanceof Request && input.headers) input.headers.forEach((v, k) => {
		merged[k] = v;
	});
	if (init?.headers) (init.headers instanceof Headers ? init.headers : new Headers(init.headers)).forEach((v, k) => {
		merged[k] = v;
	});
	for (const blocked of HEADER_BLOCKLIST) delete merged[blocked];
	return merged;
}
/**
* Check whether a fetch request carries any per-user auth headers.
* Used for the safety bypass (skip caching when auth headers are present
* without an explicit cache opt-in).
*/
var AUTH_HEADERS = [
	"authorization",
	"cookie",
	"x-api-key"
];
function hasAuthHeaders(input, init) {
	const headers = collectHeaders(input, init);
	return AUTH_HEADERS.some((name) => name in headers);
}
async function serializeFormData(formData, pushBodyChunk, getTotalBodyBytes) {
	for (const [key, val] of formData.entries()) {
		if (typeof val === "string") {
			pushBodyChunk(JSON.stringify([key, {
				kind: "string",
				value: val
			}]));
			continue;
		}
		if (val.size > MAX_CACHE_KEY_BODY_BYTES || getTotalBodyBytes() + val.size > MAX_CACHE_KEY_BODY_BYTES) throw new BodyTooLargeForCacheKeyError();
		pushBodyChunk(JSON.stringify([key, {
			kind: "file",
			name: val.name,
			type: val.type,
			value: await val.text()
		}]));
	}
}
function getParsedFormContentType(contentType) {
	const mediaType = contentType?.split(";")[0]?.trim().toLowerCase();
	if (mediaType === "multipart/form-data" || mediaType === "application/x-www-form-urlencoded") return mediaType;
}
function stripMultipartBoundary(contentType) {
	const [type, ...params] = contentType.split(";");
	const keptParams = params.map((param) => param.trim()).filter(Boolean).filter((param) => !/^boundary\s*=/i.test(param));
	const normalizedType = type.trim().toLowerCase();
	return keptParams.length > 0 ? `${normalizedType}; ${keptParams.join("; ")}` : normalizedType;
}
async function readRequestBodyChunksWithinLimit(request) {
	const contentLengthHeader = request.headers.get("content-length");
	if (contentLengthHeader) {
		const contentLength = Number(contentLengthHeader);
		if (Number.isFinite(contentLength) && contentLength > MAX_CACHE_KEY_BODY_BYTES) throw new BodyTooLargeForCacheKeyError();
	}
	const requestClone = request.clone();
	const contentType = requestClone.headers.get("content-type") ?? void 0;
	const reader = requestClone.body?.getReader();
	if (!reader) return {
		chunks: [],
		contentType
	};
	const chunks = [];
	let totalBodyBytes = 0;
	try {
		while (true) {
			const { done, value } = await reader.read();
			if (done) break;
			totalBodyBytes += value.byteLength;
			if (totalBodyBytes > MAX_CACHE_KEY_BODY_BYTES) throw new BodyTooLargeForCacheKeyError();
			chunks.push(value);
		}
	} catch (err) {
		reader.cancel().catch(() => {});
		throw err;
	}
	return {
		chunks,
		contentType
	};
}
/**
* Serialize request body into string chunks for cache key inclusion.
* Handles all body types: string, Uint8Array, ReadableStream, FormData, Blob,
* and Request object bodies.
* Returns the serialized body chunks and optionally stashes the original body
* on init as `_ogBody` so it can still be used after stream consumption.
*/
async function serializeBody(input, init) {
	if (!init?.body && !(input instanceof Request && input.body)) return { bodyChunks: [] };
	const bodyChunks = [];
	const encoder = new TextEncoder();
	const decoder = new TextDecoder();
	let totalBodyBytes = 0;
	let canonicalizedContentType;
	const pushBodyChunk = (chunk) => {
		totalBodyBytes += encoder.encode(chunk).byteLength;
		if (totalBodyBytes > MAX_CACHE_KEY_BODY_BYTES) throw new BodyTooLargeForCacheKeyError();
		bodyChunks.push(chunk);
	};
	const getTotalBodyBytes = () => totalBodyBytes;
	if (init?.body instanceof Uint8Array) {
		if (init.body.byteLength > MAX_CACHE_KEY_BODY_BYTES) throw new BodyTooLargeForCacheKeyError();
		pushBodyChunk(decoder.decode(init.body));
		init._ogBody = init.body;
	} else if (init?.body && typeof init.body.getReader === "function") {
		const [bodyForHashing, bodyForFetch] = init.body.tee();
		init._ogBody = bodyForFetch;
		const reader = bodyForHashing.getReader();
		try {
			while (true) {
				const { done, value } = await reader.read();
				if (done) break;
				if (typeof value === "string") pushBodyChunk(value);
				else {
					totalBodyBytes += value.byteLength;
					if (totalBodyBytes > MAX_CACHE_KEY_BODY_BYTES) throw new BodyTooLargeForCacheKeyError();
					bodyChunks.push(decoder.decode(value, { stream: true }));
				}
			}
			const finalChunk = decoder.decode();
			if (finalChunk) pushBodyChunk(finalChunk);
		} catch (err) {
			await reader.cancel();
			if (err instanceof BodyTooLargeForCacheKeyError) throw err;
			throw new SkipCacheKeyGenerationError();
		}
	} else if (init?.body instanceof URLSearchParams) {
		init._ogBody = init.body;
		pushBodyChunk(init.body.toString());
	} else if (init?.body && typeof init.body.keys === "function") {
		const formData = init.body;
		init._ogBody = init.body;
		await serializeFormData(formData, pushBodyChunk, getTotalBodyBytes);
	} else if (init?.body && typeof init.body.arrayBuffer === "function") {
		const blob = init.body;
		if (blob.size > MAX_CACHE_KEY_BODY_BYTES) throw new BodyTooLargeForCacheKeyError();
		pushBodyChunk(await blob.text());
		const arrayBuffer = await blob.arrayBuffer();
		init._ogBody = new Blob([arrayBuffer], { type: blob.type });
	} else if (typeof init?.body === "string") {
		if (init.body.length > MAX_CACHE_KEY_BODY_BYTES) throw new BodyTooLargeForCacheKeyError();
		pushBodyChunk(init.body);
		init._ogBody = init.body;
	} else if (input instanceof Request && input.body) {
		let chunks;
		let contentType;
		try {
			({chunks, contentType} = await readRequestBodyChunksWithinLimit(input));
		} catch (err) {
			if (err instanceof BodyTooLargeForCacheKeyError) throw err;
			throw new SkipCacheKeyGenerationError();
		}
		const formContentType = getParsedFormContentType(contentType);
		if (formContentType) try {
			await serializeFormData(await new Request(input.url, {
				method: input.method,
				headers: contentType ? { "content-type": contentType } : void 0,
				body: new Blob(chunks)
			}).formData(), pushBodyChunk, getTotalBodyBytes);
			canonicalizedContentType = formContentType === "multipart/form-data" && contentType ? stripMultipartBoundary(contentType) : void 0;
			return {
				bodyChunks,
				canonicalizedContentType
			};
		} catch (err) {
			if (err instanceof BodyTooLargeForCacheKeyError) throw err;
			throw new SkipCacheKeyGenerationError();
		}
		for (const chunk of chunks) pushBodyChunk(decoder.decode(chunk, { stream: true }));
		const finalChunk = decoder.decode();
		if (finalChunk) pushBodyChunk(finalChunk);
	}
	return {
		bodyChunks,
		canonicalizedContentType
	};
}
/**
* Generate a deterministic cache key from a fetch request.
*
* Matches Next.js behavior: the key is a SHA-256 hash of a JSON array
* containing URL, method, all headers (minus blocklist), all RequestInit
* options, and the serialized body.
*/
async function buildFetchCacheKey(input, init) {
	let url;
	let method = "GET";
	if (typeof input === "string") url = input;
	else if (input instanceof URL) url = input.toString();
	else {
		url = input.url;
		method = input.method || "GET";
	}
	if (init?.method) method = init.method;
	const headers = collectHeaders(input, init);
	const { bodyChunks, canonicalizedContentType } = await serializeBody(input, init);
	if (canonicalizedContentType) headers["content-type"] = canonicalizedContentType;
	const cacheString = JSON.stringify([
		CACHE_KEY_PREFIX,
		url,
		method,
		headers,
		init?.mode,
		init?.redirect,
		init?.credentials,
		init?.referrer,
		init?.referrerPolicy,
		init?.integrity,
		init?.cache,
		bodyChunks
	]);
	const buffer = new TextEncoder().encode(cacheString);
	const hashBuffer = await crypto.subtle.digest("SHA-256", buffer);
	return Array.prototype.map.call(new Uint8Array(hashBuffer), (b) => b.toString(16).padStart(2, "0")).join("");
}
var _PENDING_KEY = Symbol.for("vinext.fetchCache.pendingRefetches");
var _gPending = globalThis;
var pendingRefetches = _gPending[_PENDING_KEY] ??= /* @__PURE__ */ new Map();
var DEDUP_TIMEOUT_MS = 6e4;
var _ORIG_FETCH_KEY = Symbol.for("vinext.fetchCache.originalFetch");
var _gFetch = globalThis;
var originalFetch = _gFetch[_ORIG_FETCH_KEY] ??= globalThis.fetch;
var _ALS_KEY$1 = Symbol.for("vinext.fetchCache.als");
var _FALLBACK_KEY$1 = Symbol.for("vinext.fetchCache.fallback");
var _g$1 = globalThis;
var _als$1 = _g$1[_ALS_KEY$1] ??= new AsyncLocalStorage$1();
var _fallbackState$1 = _g$1[_FALLBACK_KEY$1] ??= { currentRequestTags: [] };
function _getState$1() {
	if (isInsideUnifiedScope()) return getRequestContext();
	return _als$1.getStore() ?? _fallbackState$1;
}
/**
* Get tags collected during the current render pass.
* Useful for associating page-level cache entries with all the
* fetch tags used during rendering.
*/
function getCollectedFetchTags() {
	return [..._getState$1().currentRequestTags];
}
/**
* Create a patched fetch function with Next.js caching semantics.
*
* The patched fetch:
* 1. Checks `cache` and `next` options to determine caching behavior
* 2. On cache hit, returns the cached response without hitting the network
* 3. On cache miss, fetches from network, stores in cache, returns response
* 4. Respects `next.revalidate` for TTL-based revalidation
* 5. Respects `next.tags` for tag-based invalidation via revalidateTag()
*/
function createPatchedFetch() {
	return async function patchedFetch(input, init) {
		const nextOpts = init?.next;
		const cacheDirective = init?.cache;
		if (!nextOpts && !cacheDirective) return originalFetch(input, init);
		if (cacheDirective === "no-store" || cacheDirective === "no-cache" || nextOpts?.revalidate === false || nextOpts?.revalidate === 0) return originalFetch(input, stripNextFromInit(init));
		if (!(cacheDirective === "force-cache" || typeof nextOpts?.revalidate === "number" && nextOpts.revalidate > 0) && hasAuthHeaders(input, init)) return originalFetch(input, stripNextFromInit(init));
		let revalidateSeconds;
		if (cacheDirective === "force-cache") revalidateSeconds = nextOpts?.revalidate && typeof nextOpts.revalidate === "number" ? nextOpts.revalidate : 31536e3;
		else if (typeof nextOpts?.revalidate === "number" && nextOpts.revalidate > 0) revalidateSeconds = nextOpts.revalidate;
		else if (nextOpts?.tags && nextOpts.tags.length > 0) revalidateSeconds = 31536e3;
		else return originalFetch(input, stripNextFromInit(init));
		const tags = nextOpts?.tags ?? [];
		let cacheKey;
		try {
			cacheKey = await buildFetchCacheKey(input, init);
		} catch (err) {
			if (err instanceof BodyTooLargeForCacheKeyError || err instanceof SkipCacheKeyGenerationError) return originalFetch(input, stripNextFromInit(init));
			throw err;
		}
		const handler = getCacheHandler();
		const reqTags = _getState$1().currentRequestTags;
		if (tags.length > 0) {
			for (const tag of tags) if (!reqTags.includes(tag)) reqTags.push(tag);
		}
		try {
			const cached = await handler.get(cacheKey, {
				kind: "FETCH",
				tags
			});
			if (cached?.value && cached.value.kind === "FETCH" && cached.cacheState !== "stale") {
				const cachedData = cached.value.data;
				return new Response(cachedData.body, {
					status: cachedData.status ?? 200,
					headers: cachedData.headers
				});
			}
			if (cached?.value && cached.value.kind === "FETCH" && cached.cacheState === "stale") {
				const staleData = cached.value.data;
				if (!pendingRefetches.has(cacheKey)) {
					const refetchPromise = originalFetch(input, stripNextFromInit(init)).then(async (freshResp) => {
						if (freshResp.status !== 200) return;
						const freshBody = await freshResp.text();
						const freshHeaders = {};
						freshResp.headers.forEach((v, k) => {
							freshHeaders[k] = v;
						});
						const freshValue = {
							kind: "FETCH",
							data: {
								headers: freshHeaders,
								body: freshBody,
								url: typeof input === "string" ? input : input instanceof URL ? input.toString() : input.url,
								status: freshResp.status
							},
							tags,
							revalidate: revalidateSeconds
						};
						await handler.set(cacheKey, freshValue, {
							fetchCache: true,
							tags,
							revalidate: revalidateSeconds
						});
					}).catch((err) => {
						const url = typeof input === "string" ? input : input instanceof URL ? input.toString() : input.url;
						console.error(`[vinext] fetch cache background revalidation failed for ${url} (key=${cacheKey.slice(0, 12)}...):`, err);
					}).finally(() => {
						if (pendingRefetches.get(cacheKey) === refetchPromise) pendingRefetches.delete(cacheKey);
						clearTimeout(timeoutId);
					});
					pendingRefetches.set(cacheKey, refetchPromise);
					const timeoutId = setTimeout(() => {
						if (pendingRefetches.get(cacheKey) === refetchPromise) pendingRefetches.delete(cacheKey);
					}, DEDUP_TIMEOUT_MS);
					getRequestExecutionContext()?.waitUntil(refetchPromise);
				}
				return new Response(staleData.body, {
					status: staleData.status ?? 200,
					headers: staleData.headers
				});
			}
		} catch (cacheErr) {
			console.error("[vinext] fetch cache read error:", cacheErr);
		}
		const response = await originalFetch(input, stripNextFromInit(init));
		if (response.status === 200) {
			const cloned = response.clone();
			const body = await cloned.text();
			const headers = {};
			cloned.headers.forEach((v, k) => {
				headers[k] = v;
			});
			const cacheValue = {
				kind: "FETCH",
				data: {
					headers,
					body,
					url: typeof input === "string" ? input : input instanceof URL ? input.toString() : input.url,
					status: cloned.status
				},
				tags,
				revalidate: revalidateSeconds
			};
			handler.set(cacheKey, cacheValue, {
				fetchCache: true,
				tags,
				revalidate: revalidateSeconds
			}).catch((err) => {
				console.error("[vinext] fetch cache write error:", err);
			});
		}
		return response;
	};
}
/**
* Strip the `next` property from RequestInit before passing to real fetch.
* The `next` property is not a standard fetch option and would cause warnings
* in some environments.
*/
function stripNextFromInit(init) {
	if (!init) return init;
	const { next: _next, _ogBody, ...rest } = init;
	if (_ogBody !== void 0) rest.body = _ogBody;
	return Object.keys(rest).length > 0 ? rest : void 0;
}
var _PATCH_KEY = Symbol.for("vinext.fetchCache.patchInstalled");
function _ensurePatchInstalled() {
	if (_g$1[_PATCH_KEY]) return;
	_g$1[_PATCH_KEY] = true;
	globalThis.fetch = createPatchedFetch();
}
/**
* Install the patched fetch without creating a standalone ALS scope.
*
* `runWithFetchCache()` is the standalone helper: it installs the patch and
* creates an isolated per-request tag store. The unified request context owns
* that isolation itself via `currentRequestTags`, so callers inside
* `runWithRequestContext()` only need the process-global fetch monkey-patch.
*/
function ensureFetchPatch() {
	_ensurePatchInstalled();
}
//#endregion
//#region node_modules/vinext/dist/routing/route-trie.js
function createNode() {
	return {
		staticChildren: /* @__PURE__ */ new Map(),
		dynamicChild: null,
		catchAllChild: null,
		optionalCatchAllChild: null,
		route: null
	};
}
/**
* Build a trie from pre-sorted routes.
*
* Routes must have a `patternParts` property (string[] of URL segments).
* Pattern segment conventions:
*   - `:name`  — dynamic segment
*   - `:name+` — catch-all (1+ segments)
*   - `:name*` — optional catch-all (0+ segments)
*   - anything else — static segment
*
* First route to claim a terminal position wins (routes are pre-sorted
* by precedence, so insertion order preserves correct priority).
*/
function buildRouteTrie(routes) {
	const root = createNode();
	for (const route of routes) {
		const parts = route.patternParts;
		if (parts.length === 0) {
			if (root.route === null) root.route = route;
			continue;
		}
		let node = root;
		for (let i = 0; i < parts.length; i++) {
			const part = parts[i];
			if (part.endsWith("+") && part.startsWith(":")) {
				if (i !== parts.length - 1) break;
				const paramName = part.slice(1, -1);
				if (node.catchAllChild === null) node.catchAllChild = {
					paramName,
					route
				};
				break;
			}
			if (part.endsWith("*") && part.startsWith(":")) {
				if (i !== parts.length - 1) break;
				const paramName = part.slice(1, -1);
				if (node.optionalCatchAllChild === null) node.optionalCatchAllChild = {
					paramName,
					route
				};
				break;
			}
			if (part.startsWith(":")) {
				const paramName = part.slice(1);
				if (node.dynamicChild === null) node.dynamicChild = {
					paramName,
					node: createNode()
				};
				node = node.dynamicChild.node;
				if (i === parts.length - 1) {
					if (node.route === null) node.route = route;
				}
				continue;
			}
			let child = node.staticChildren.get(part);
			if (!child) {
				child = createNode();
				node.staticChildren.set(part, child);
			}
			node = child;
			if (i === parts.length - 1) {
				if (node.route === null) node.route = route;
			}
		}
	}
	return root;
}
/**
* Match a URL against the trie.
*
* @param root - Trie root built by `buildRouteTrie`
* @param urlParts - Pre-split URL segments (no empty strings)
* @returns Match result with route and extracted params, or null
*/
function trieMatch(root, urlParts) {
	return match(root, urlParts, 0);
}
function match(node, urlParts, index) {
	if (index === urlParts.length) {
		if (node.route !== null) return {
			route: node.route,
			params: Object.create(null)
		};
		if (node.optionalCatchAllChild !== null) {
			const params = Object.create(null);
			params[node.optionalCatchAllChild.paramName] = [];
			return {
				route: node.optionalCatchAllChild.route,
				params
			};
		}
		return null;
	}
	const segment = urlParts[index];
	const staticChild = node.staticChildren.get(segment);
	if (staticChild) {
		const result = match(staticChild, urlParts, index + 1);
		if (result !== null) return result;
	}
	if (node.dynamicChild !== null) {
		const result = match(node.dynamicChild.node, urlParts, index + 1);
		if (result !== null) {
			result.params[node.dynamicChild.paramName] = segment;
			return result;
		}
	}
	if (node.catchAllChild !== null) {
		const remaining = urlParts.slice(index);
		const params = Object.create(null);
		params[node.catchAllChild.paramName] = remaining;
		return {
			route: node.catchAllChild.route,
			params
		};
	}
	if (node.optionalCatchAllChild !== null) {
		const remaining = urlParts.slice(index);
		const params = Object.create(null);
		params[node.optionalCatchAllChild.paramName] = remaining;
		return {
			route: node.optionalCatchAllChild.route,
			params
		};
	}
	return null;
}
//#endregion
//#region node_modules/vinext/dist/shims/navigation-state.js
/**
* Server-only navigation state backed by AsyncLocalStorage.
*
* This module provides request-scoped isolation for navigation context
* and useServerInsertedHTML callbacks. Without ALS, concurrent requests
* on Cloudflare Workers would share module-level state and leak data
* (pathnames, params, CSS-in-JS styles) between requests.
*
* This module is server-only — it imports node:async_hooks and must NOT
* be bundled for the browser. The dual-environment navigation.ts shim
* uses a registration pattern so it works in both environments.
*/
var _ALS_KEY = Symbol.for("vinext.navigation.als");
var _FALLBACK_KEY = Symbol.for("vinext.navigation.fallback");
var _g = globalThis;
var _als = _g[_ALS_KEY] ??= new AsyncLocalStorage$1();
var _fallbackState = _g[_FALLBACK_KEY] ??= {
	serverContext: null,
	serverInsertedHTMLCallbacks: []
};
function _getState() {
	if (isInsideUnifiedScope()) return getRequestContext();
	return _als.getStore() ?? _fallbackState;
}
_registerStateAccessors({
	getServerContext() {
		return _getState().serverContext;
	},
	setServerContext(ctx) {
		_getState().serverContext = ctx;
	},
	getInsertedHTMLCallbacks() {
		return _getState().serverInsertedHTMLCallbacks;
	},
	clearInsertedHTMLCallbacks() {
		_getState().serverInsertedHTMLCallbacks = [];
	}
});
//#endregion
//#region node_modules/vinext/dist/server/instrumentation.js
/**
* Get the registered onRequestError handler (if any).
*
* Reads from globalThis so it works across Vite environment boundaries.
*/
function getOnRequestErrorHandler() {
	return globalThis.__VINEXT_onRequestErrorHandler__ ?? null;
}
/**
* Report a request error via the instrumentation handler.
*
* No-op if no onRequestError handler is registered.
*
* Reads the handler from globalThis so this function works correctly regardless
* of which environment it is called from.
*/
function reportRequestError(error, request, context) {
	const handler = getOnRequestErrorHandler();
	if (!handler) return Promise.resolve();
	const promise = (async () => {
		try {
			await handler(error, request, context);
		} catch (reportErr) {
			console.error("[vinext] onRequestError handler threw:", reportErr instanceof Error ? reportErr.message : String(reportErr));
		}
	})();
	getRequestExecutionContext()?.waitUntil(promise);
	return promise;
}
//#endregion
//#region node_modules/vinext/dist/shims/font-google-base.js
/**
* next/font/google shim
*
* Provides a compatible shim for Next.js Google Fonts.
*
* Two modes:
* 1. **Dev / CDN mode** (default): Loads fonts from Google Fonts CDN via <link> tags.
* 2. **Self-hosted mode** (production build): The vinext:google-fonts Vite plugin
*    fetches font CSS + .woff2 files at build time, caches them locally, and injects
*    @font-face CSS pointing at local assets. No requests to Google at runtime.
*
* Usage:
*   import { Inter } from 'next/font/google';
*   const inter = Inter({ subsets: ['latin'], weight: ['400', '700'] });
*   // inter.className -> unique CSS class
*   // inter.style -> { fontFamily: "'Inter', sans-serif" }
*   // inter.variable -> CSS variable name like '--font-inter'
*/
/**
* Escape a string for safe interpolation inside a CSS single-quoted string.
*
* Prevents CSS injection by escaping characters that could break out of
* a `'...'` CSS string context: backslashes, single quotes, and newlines.
*/
function escapeCSSString(value) {
	return value.replace(/\\/g, "\\\\").replace(/'/g, "\\'").replace(/\n/g, "\\a ").replace(/\r/g, "\\d ");
}
/**
* Validate a CSS custom property name (e.g. `--font-inter`).
*
* Custom properties must start with `--` and only contain alphanumeric
* characters, hyphens, and underscores. Anything else could be used to
* break out of the CSS declaration and inject arbitrary rules.
*
* Returns the name if valid, undefined otherwise.
*/
function sanitizeCSSVarName(name) {
	if (/^--[a-zA-Z0-9_-]+$/.test(name)) return name;
}
/**
* Sanitize a CSS font-family fallback name.
*
* Generic family names (sans-serif, serif, monospace, etc.) are used as-is.
* Named families are wrapped in escaped quotes. This prevents injection via
* crafted fallback values like `); } body { color: red; } .x {`.
*/
function sanitizeFallback(name) {
	const generics = new Set([
		"serif",
		"sans-serif",
		"monospace",
		"cursive",
		"fantasy",
		"system-ui",
		"ui-serif",
		"ui-sans-serif",
		"ui-monospace",
		"ui-rounded",
		"emoji",
		"math",
		"fangsong"
	]);
	const trimmed = name.trim();
	if (generics.has(trimmed)) return trimmed;
	return `'${escapeCSSString(trimmed)}'`;
}
var classCounter = 0;
var injectedFonts = /* @__PURE__ */ new Set();
/**
* Convert a font family name to a CSS variable name.
* e.g., "Inter" -> "--font-inter", "Roboto Mono" -> "--font-roboto-mono"
*/
function toVarName(family) {
	return "--font-" + family.toLowerCase().replace(/\s+/g, "-");
}
/**
* Build a Google Fonts CSS URL.
*/
function buildGoogleFontsUrl(family, options) {
	const params = new URLSearchParams();
	let spec = family;
	const weights = options.weight ? Array.isArray(options.weight) ? options.weight : [options.weight] : [];
	const styles = options.style ? Array.isArray(options.style) ? options.style : [options.style] : [];
	if (weights.length > 0 || styles.length > 0) {
		const hasItalic = styles.includes("italic");
		if (weights.length > 0) if (hasItalic) {
			const pairs = [];
			for (const w of weights) {
				pairs.push(`0,${w}`);
				pairs.push(`1,${w}`);
			}
			spec += `:ital,wght@${pairs.join(";")}`;
		} else spec += `:wght@${weights.join(";")}`;
	} else spec += `:wght@100..900`;
	params.set("family", spec);
	params.set("display", options.display ?? "swap");
	return `https://fonts.googleapis.com/css2?${params.toString()}`;
}
/**
* Inject a <link> tag for the font (client-side only).
* On the server, we track font URLs for SSR head injection.
*/
function injectFontStylesheet(url) {
	if (injectedFonts.has(url)) return;
	injectedFonts.add(url);
	if (typeof document !== "undefined") {
		const link = document.createElement("link");
		link.rel = "stylesheet";
		link.href = url;
		document.head.appendChild(link);
	}
}
/** Track which className CSS rules have been injected. */
var injectedClassRules = /* @__PURE__ */ new Set();
/**
* Inject a CSS rule that maps a className to a font-family.
*
* This is what makes `<div className={inter.className}>` apply the font.
* Next.js generates equivalent rules at build time.
*
* In Next.js, the .className class ONLY sets font-family — it does NOT
* set CSS variables. CSS variables are handled separately by the .variable class.
*/
function injectClassNameRule(className, fontFamily) {
	if (injectedClassRules.has(className)) return;
	injectedClassRules.add(className);
	const css = `.${className} { font-family: ${fontFamily}; }\n`;
	if (typeof document === "undefined") {
		ssrFontStyles$1.push(css);
		return;
	}
	const style = document.createElement("style");
	style.textContent = css;
	style.setAttribute("data-vinext-font-class", className);
	document.head.appendChild(style);
}
/** Track which variable class CSS rules have been injected. */
var injectedVariableRules = /* @__PURE__ */ new Set();
/** Track which :root CSS variable rules have been injected. */
var injectedRootVariables = /* @__PURE__ */ new Set();
/**
* Inject a CSS rule that sets a CSS variable on an element.
* This is what makes `<html className={inter.variable}>` set the CSS variable
* that can be referenced by other styles (e.g., Tailwind's font-sans).
*
* In Next.js, the .variable class ONLY sets the CSS variable — it does NOT
* set font-family. This is critical because apps commonly apply multiple
* .variable classes to <body> (e.g., geistSans.variable + geistMono.variable).
* If we also set font-family here, the last class wins due to CSS cascade,
* causing all text to use that font (e.g., everything becomes monospace).
*/
function injectVariableClassRule(variableClassName, cssVarName, fontFamily) {
	if (injectedVariableRules.has(variableClassName)) return;
	injectedVariableRules.add(variableClassName);
	let css = `.${variableClassName} { ${cssVarName}: ${fontFamily}; }\n`;
	if (!injectedRootVariables.has(cssVarName)) {
		injectedRootVariables.add(cssVarName);
		css += `:root { ${cssVarName}: ${fontFamily}; }\n`;
	}
	if (typeof document === "undefined") {
		ssrFontStyles$1.push(css);
		return;
	}
	const style = document.createElement("style");
	style.textContent = css;
	style.setAttribute("data-vinext-font-variable", variableClassName);
	document.head.appendChild(style);
}
var ssrFontStyles$1 = [];
/**
* Get collected SSR font class styles (used by the renderer).
* Note: We don't clear the arrays because fonts are loaded at module import
* time and need to persist across all requests in the Workers environment.
*/
function getSSRFontStyles$1() {
	return [...ssrFontStyles$1];
}
var ssrFontUrls = [];
/**
* Get collected SSR font URLs (used by the renderer).
* Note: We don't clear the arrays because fonts are loaded at module import
* time and need to persist across all requests in the Workers environment.
*/
function getSSRFontLinks() {
	return [...ssrFontUrls];
}
var ssrFontPreloads$1 = [];
var ssrFontPreloadHrefs = /* @__PURE__ */ new Set();
/**
* Get collected SSR font preload data (used by the renderer).
* Returns an array of { href, type } objects for emitting
* <link rel="preload" as="font" ...> tags.
*/
function getSSRFontPreloads$1() {
	return [...ssrFontPreloads$1];
}
/**
* Determine the MIME type for a font file based on its extension.
*/
function getFontMimeType(pathOrUrl) {
	if (pathOrUrl.endsWith(".woff2")) return "font/woff2";
	if (pathOrUrl.endsWith(".woff")) return "font/woff";
	if (pathOrUrl.endsWith(".ttf")) return "font/ttf";
	if (pathOrUrl.endsWith(".otf")) return "font/opentype";
	return "font/woff2";
}
/**
* Extract font file URLs from @font-face CSS rules.
* Parses url('...') references from the CSS text.
*/
function extractFontUrlsFromCSS(css) {
	const urls = [];
	const urlRegex = /url\(['"]?([^'")]+)['"]?\)/g;
	let match;
	while ((match = urlRegex.exec(css)) !== null) {
		const url = match[1];
		if (url && url.startsWith("/")) urls.push(url);
	}
	return urls;
}
/**
* Collect font file URLs from self-hosted CSS for preload link generation.
* Only collects on the server (SSR). Deduplicates by href using a Set for O(1) lookups.
*/
function collectFontPreloadsFromCSS(css) {
	if (typeof document !== "undefined") return;
	const urls = extractFontUrlsFromCSS(css);
	for (const href of urls) if (!ssrFontPreloadHrefs.has(href)) {
		ssrFontPreloadHrefs.add(href);
		ssrFontPreloads$1.push({
			href,
			type: getFontMimeType(href)
		});
	}
}
/** Track injected self-hosted @font-face blocks (deduplicate) */
var injectedSelfHosted = /* @__PURE__ */ new Set();
/**
* Inject self-hosted @font-face CSS (from the build plugin).
* This replaces the CDN <link> tag with inline CSS.
*/
function injectSelfHostedCSS(css) {
	if (injectedSelfHosted.has(css)) return;
	injectedSelfHosted.add(css);
	collectFontPreloadsFromCSS(css);
	if (typeof document === "undefined") {
		ssrFontStyles$1.push(css);
		return;
	}
	const style = document.createElement("style");
	style.textContent = css;
	style.setAttribute("data-vinext-font-selfhosted", "true");
	document.head.appendChild(style);
}
function createFontLoader(family) {
	return function fontLoader(options = {}) {
		const id = classCounter++;
		const className = `__font_${family.toLowerCase().replace(/\s+/g, "_")}_${id}`;
		const fallback = options.fallback ?? ["sans-serif"];
		const fontFamily = `'${escapeCSSString(family)}', ${fallback.map(sanitizeFallback).join(", ")}`;
		const defaultVarName = toVarName(family);
		const cssVarName = options.variable ? sanitizeCSSVarName(options.variable) ?? defaultVarName : defaultVarName;
		const variableClassName = `__variable_${family.toLowerCase().replace(/\s+/g, "_")}_${id}`;
		if (options._selfHostedCSS) injectSelfHostedCSS(options._selfHostedCSS);
		else {
			const url = buildGoogleFontsUrl(family, options);
			injectFontStylesheet(url);
			if (typeof document === "undefined") {
				if (!ssrFontUrls.includes(url)) ssrFontUrls.push(url);
			}
		}
		injectClassNameRule(className, fontFamily);
		injectVariableClassRule(variableClassName, cssVarName, fontFamily);
		return {
			className,
			style: { fontFamily },
			variable: variableClassName
		};
	};
}
var googleFonts = new Proxy({}, { get(_target, prop) {
	if (prop === "__esModule") return true;
	if (prop === "default") return googleFonts;
	return createFontLoader(prop.replace(/([a-z])([A-Z])/g, "$1 $2"));
} });
//#endregion
//#region node_modules/vinext/dist/shims/font-google.generated.js
var Geist = /* @__PURE__ */ createFontLoader("Geist");
//#endregion
//#region node_modules/vinext/dist/shims/font-local.js
var ssrFontStyles = [];
var ssrFontPreloads = [];
/**
* Get collected SSR font styles (used by the renderer).
* Note: We don't clear the arrays because fonts are loaded at module import
* time and need to persist across all requests in the Workers environment.
*/
function getSSRFontStyles() {
	return [...ssrFontStyles];
}
/**
* Get collected SSR font preload data (used by the renderer).
* Returns an array of { href, type } objects for emitting
* <link rel="preload" as="font" ...> tags.
*/
function getSSRFontPreloads() {
	return [...ssrFontPreloads];
}
//#endregion
//#region node_modules/vinext/dist/shims/link.js
/**
* next/link shim
*
* Renders an <a> tag with client-side navigation support.
* On click, prevents full page reload and triggers client-side
* page swap via the router's navigation system.
*/
/**
* useLinkStatus returns the pending state of the enclosing <Link>.
* In Next.js, this is used to show loading indicators while a
* prefetch-triggered navigation is in progress.
*/
/** basePath from next.config.js, injected by the plugin at build time */
/**
* Check if a href is only a hash change (same pathname, different/added hash).
* Handles relative hashes like "#foo" and "?query#foo".
*/
/**
* Scroll to a hash target element, or to the top if no hash.
*/
/**
* Prefetch a URL for faster navigation.
*
* For App Router (RSC): fetches the .rsc payload in the background and
* stores it in an in-memory cache for instant use during navigation.
* For Pages Router: injects a <link rel="prefetch"> for the page module.
*
* Uses `requestIdleCallback` (or `setTimeout` fallback) to avoid blocking
* the main thread during initial page load.
*/
/**
* Shared IntersectionObserver for viewport-based prefetching.
* All Link elements use the same observer to minimize resource usage.
*/
/**
* Apply locale prefix to a URL path based on the locale prop.
* - locale="fr" → prepend /fr (unless it already has a locale prefix)
* - locale={false} → use the href as-is (no locale prefix, link to default)
* - locale=undefined → use current locale (href as-is in most cases)
*/
var link_default = /* @__PURE__ */ registerClientReference(() => {
	throw new Error("Unexpectedly client reference export 'default' is called on server");
}, "c2747888630f", "default");
//#endregion
//#region lib/github.ts
var BASE$1 = "https://api.github.com";
var token = process.env.GITHUB_TOKEN;
var headers = {
	Accept: "application/vnd.github+json",
	...token && { Authorization: `Bearer ${token}` }
};
async function searchUsers(query, page = 1) {
	const res = await fetch(`${BASE$1}/search/users?q=${encodeURIComponent(query)}&per_page=10&page=${page}`, { headers });
	if (!res.ok) throw new Error("Search failed");
	return res.json();
}
async function getUser(username) {
	const res = await fetch(`${BASE$1}/users/${username}`, { headers });
	if (!res.ok) throw new Error(`User not found: ${username}`);
	return res.json();
}
async function getUserRepos(username) {
	const res = await fetch(`${BASE$1}/users/${username}/repos?sort=stars&per_page=30`, { headers });
	if (!res.ok) throw new Error("Failed to fetch repos");
	return res.json();
}
async function getRepo(username, repoName) {
	const res = await fetch(`${BASE$1}/repos/${username}/${repoName}`, { headers });
	if (!res.ok) throw new Error("Repo not found");
	return res.json();
}
async function getRepoLanguages(username, repoName) {
	const res = await fetch(`${BASE$1}/repos/${username}/${repoName}/languages`, { headers });
	if (!res.ok) return {};
	return res.json();
}
async function getRepoReadme(username, repoName) {
	const res = await fetch(`${BASE$1}/repos/${username}/${repoName}/readme`, { headers: {
		...headers,
		Accept: "application/vnd.github.raw"
	} });
	if (!res.ok) return null;
	return res.text();
}
async function getTrendingRepos() {
	const res = await fetch(`${BASE$1}/search/repositories?q=stars:>1000&sort=stars&per_page=20`, { headers });
	if (!res.ok) throw new Error("Failed to fetch trending");
	return res.json();
}
//#endregion
//#region node_modules/lucide-react/dist/esm/shared/src/utils/mergeClasses.js
/**
* @license lucide-react v0.577.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var mergeClasses = (...classes) => classes.filter((className, index, array) => {
	return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
}).join(" ").trim();
//#endregion
//#region node_modules/lucide-react/dist/esm/shared/src/utils/toKebabCase.js
/**
* @license lucide-react v0.577.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
//#endregion
//#region node_modules/lucide-react/dist/esm/shared/src/utils/toCamelCase.js
/**
* @license lucide-react v0.577.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var toCamelCase = (string) => string.replace(/^([A-Z])|[\s-_]+(\w)/g, (match, p1, p2) => p2 ? p2.toUpperCase() : p1.toLowerCase());
//#endregion
//#region node_modules/lucide-react/dist/esm/shared/src/utils/toPascalCase.js
/**
* @license lucide-react v0.577.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var toPascalCase = (string) => {
	const camelCase = toCamelCase(string);
	return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
//#endregion
//#region node_modules/lucide-react/dist/esm/defaultAttributes.js
/**
* @license lucide-react v0.577.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var defaultAttributes = {
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: 2,
	strokeLinecap: "round",
	strokeLinejoin: "round"
};
//#endregion
//#region node_modules/lucide-react/dist/esm/shared/src/utils/hasA11yProp.js
/**
* @license lucide-react v0.577.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var hasA11yProp = (props) => {
	for (const prop in props) if (prop.startsWith("aria-") || prop === "role" || prop === "title") return true;
	return false;
};
//#endregion
//#region node_modules/lucide-react/dist/esm/Icon.js
/**
* @license lucide-react v0.577.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Icon = (0, import_react_react_server.forwardRef)(({ color = "currentColor", size = 24, strokeWidth = 2, absoluteStrokeWidth, className = "", children, iconNode, ...rest }, ref) => (0, import_react_react_server.createElement)("svg", {
	ref,
	...defaultAttributes,
	width: size,
	height: size,
	stroke: color,
	strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
	className: mergeClasses("lucide", className),
	...!children && !hasA11yProp(rest) && { "aria-hidden": "true" },
	...rest
}, [...iconNode.map(([tag, attrs]) => (0, import_react_react_server.createElement)(tag, attrs)), ...Array.isArray(children) ? children : [children]]));
//#endregion
//#region node_modules/lucide-react/dist/esm/createLucideIcon.js
/**
* @license lucide-react v0.577.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var createLucideIcon = (iconName, iconNode) => {
	const Component = (0, import_react_react_server.forwardRef)(({ className, ...props }, ref) => (0, import_react_react_server.createElement)(Icon, {
		ref,
		iconNode,
		className: mergeClasses(`lucide-${toKebabCase(toPascalCase(iconName))}`, `lucide-${iconName}`, className),
		...props
	}));
	Component.displayName = toPascalCase(iconName);
	return Component;
};
var ArrowLeft = createLucideIcon("arrow-left", [["path", {
	d: "m12 19-7-7 7-7",
	key: "1l729n"
}], ["path", {
	d: "M19 12H5",
	key: "x3x0zl"
}]]);
var BookOpen = createLucideIcon("book-open", [["path", {
	d: "M12 7v14",
	key: "1akyts"
}], ["path", {
	d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",
	key: "ruj8y"
}]]);
var Building2 = createLucideIcon("building-2", [
	["path", {
		d: "M10 12h4",
		key: "a56b0p"
	}],
	["path", {
		d: "M10 8h4",
		key: "1sr2af"
	}],
	["path", {
		d: "M14 21v-3a2 2 0 0 0-4 0v3",
		key: "1rgiei"
	}],
	["path", {
		d: "M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2",
		key: "secmi2"
	}],
	["path", {
		d: "M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16",
		key: "16ra0t"
	}]
]);
var Calendar = createLucideIcon("calendar", [
	["path", {
		d: "M8 2v4",
		key: "1cmpym"
	}],
	["path", {
		d: "M16 2v4",
		key: "4m81vk"
	}],
	["rect", {
		width: "18",
		height: "18",
		x: "3",
		y: "4",
		rx: "2",
		key: "1hopcy"
	}],
	["path", {
		d: "M3 10h18",
		key: "8toen8"
	}]
]);
var ChevronLeft = createLucideIcon("chevron-left", [["path", {
	d: "m15 18-6-6 6-6",
	key: "1wnfg3"
}]]);
var ChevronRight = createLucideIcon("chevron-right", [["path", {
	d: "m9 18 6-6-6-6",
	key: "mthhwq"
}]]);
var CircleAlert = createLucideIcon("circle-alert", [
	["circle", {
		cx: "12",
		cy: "12",
		r: "10",
		key: "1mglay"
	}],
	["line", {
		x1: "12",
		x2: "12",
		y1: "8",
		y2: "12",
		key: "1pkeuh"
	}],
	["line", {
		x1: "12",
		x2: "12.01",
		y1: "16",
		y2: "16",
		key: "4dfq90"
	}]
]);
var ExternalLink = createLucideIcon("external-link", [
	["path", {
		d: "M15 3h6v6",
		key: "1q9fwt"
	}],
	["path", {
		d: "M10 14 21 3",
		key: "gplh6r"
	}],
	["path", {
		d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
		key: "a6xqqp"
	}]
]);
var Eye = createLucideIcon("eye", [["path", {
	d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
	key: "1nclc0"
}], ["circle", {
	cx: "12",
	cy: "12",
	r: "3",
	key: "1v7zrd"
}]]);
var GitBranch = createLucideIcon("git-branch", [
	["path", {
		d: "M15 6a9 9 0 0 0-9 9V3",
		key: "1cii5b"
	}],
	["circle", {
		cx: "18",
		cy: "6",
		r: "3",
		key: "1h7g24"
	}],
	["circle", {
		cx: "6",
		cy: "18",
		r: "3",
		key: "fqmcym"
	}]
]);
var GitFork = createLucideIcon("git-fork", [
	["circle", {
		cx: "12",
		cy: "18",
		r: "3",
		key: "1mpf1b"
	}],
	["circle", {
		cx: "6",
		cy: "6",
		r: "3",
		key: "1lh9wr"
	}],
	["circle", {
		cx: "18",
		cy: "6",
		r: "3",
		key: "1h7g24"
	}],
	["path", {
		d: "M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9",
		key: "1uq4wg"
	}],
	["path", {
		d: "M12 12v3",
		key: "158kv8"
	}]
]);
var Link2 = createLucideIcon("link-2", [
	["path", {
		d: "M9 17H7A5 5 0 0 1 7 7h2",
		key: "8i5ue5"
	}],
	["path", {
		d: "M15 7h2a5 5 0 1 1 0 10h-2",
		key: "1b9ql8"
	}],
	["line", {
		x1: "8",
		x2: "16",
		y1: "12",
		y2: "12",
		key: "1jonct"
	}]
]);
var MapPin = createLucideIcon("map-pin", [["path", {
	d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
	key: "1r0f0z"
}], ["circle", {
	cx: "12",
	cy: "10",
	r: "3",
	key: "ilqhr7"
}]]);
var Scale = createLucideIcon("scale", [
	["path", {
		d: "M12 3v18",
		key: "108xh3"
	}],
	["path", {
		d: "m19 8 3 8a5 5 0 0 1-6 0zV7",
		key: "zcdpyk"
	}],
	["path", {
		d: "M3 7h1a17 17 0 0 0 8-2 17 17 0 0 0 8 2h1",
		key: "1yorad"
	}],
	["path", {
		d: "m5 8 3 8a5 5 0 0 1-6 0zV7",
		key: "eua70x"
	}],
	["path", {
		d: "M7 21h10",
		key: "1b0cd5"
	}]
]);
var Star = createLucideIcon("star", [["path", {
	d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
	key: "r04s7s"
}]]);
var Users = createLucideIcon("users", [
	["path", {
		d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
		key: "1yyitq"
	}],
	["path", {
		d: "M16 3.128a4 4 0 0 1 0 7.744",
		key: "16gr8j"
	}],
	["path", {
		d: "M22 21v-2a4 4 0 0 0-3-3.87",
		key: "kshegd"
	}],
	["circle", {
		cx: "9",
		cy: "7",
		r: "4",
		key: "nufk8"
	}]
]);
//#endregion
//#region app/users/[username]/repos/ReposClient.tsx
var ReposClient_default = /* @__PURE__ */ registerClientReference(() => {
	throw new Error("Unexpectedly client reference export 'default' is called on server");
}, "5022a32106f3", "default");
//#endregion
//#region app/users/[username]/repos/page.tsx
var page_exports$6 = /* @__PURE__ */ __exportAll({
	default: () => ReposPage,
	generateMetadata: () => generateMetadata$2
});
async function generateMetadata$2({ params }) {
	const { username } = await params;
	try {
		const user = await getUser(username);
		return {
			title: `${user.login} Repositories — GitHub`,
			description: `${user.public_repos} public repositories by ${user.login}`,
			openGraph: { images: [{ url: user.avatar_url }] }
		};
	} catch {
		return { title: "Repositories — GitHub Explorer" };
	}
}
async function ReposPage({ params }) {
	const { username } = await params;
	let user;
	let repos = [];
	try {
		user = await getUser(username);
	} catch {
		notFound();
	}
	try {
		repos = await getUserRepos(username);
	} catch {
		repos = [];
	}
	return /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsxs)("div", {
		className: "max-w-4xl mx-auto px-4 py-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsxs)(link_default, {
				href: `/users/${username}`,
				className: "inline-flex items-center gap-2 text-slate-400 hover:text-blue-600 transition mb-10 text-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)(ArrowLeft, { className: "w-4 h-4" }),
					" Back to ",
					username
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsxs)("div", {
				className: "mb-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsxs)("h1", {
					className: "text-3xl font-bold mb-1 text-slate-900",
					children: [user.name || username, "'s Repositories"]
				}), /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsxs)("p", {
					className: "text-slate-500",
					children: [user.public_repos, " public repositories"]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)(ReposClient_default, {
				repos,
				username
			})
		]
	});
}
var Resources = ((React, deps, RemoveDuplicateServerCss, precedence) => {
	return function Resources() {
		return React.createElement(React.Fragment, null, [...deps.css.map((href) => React.createElement("link", {
			key: "css:" + href,
			rel: "stylesheet",
			...precedence ? { precedence } : {},
			href,
			"data-rsc-css-href": href
		})), RemoveDuplicateServerCss && React.createElement(RemoveDuplicateServerCss, { key: "remove-duplicate-css" })]);
	};
})(import_react_react_server.default, assetsManifest.serverResources["app/layout.tsx"], void 0, "vite-rsc/importer-resources");
//#endregion
//#region components/Navbar.tsx
var Navbar_default = /* @__PURE__ */ registerClientReference(() => {
	throw new Error("Unexpectedly client reference export 'default' is called on server");
}, "e7b4dc739728", "default");
//#endregion
//#region components/Footer.tsx
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("footer", {
		className: "border-t border-slate-200 py-8 mt-16 bg-white relative z-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsxs)("div", {
			className: "max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsxs)("p", {
				className: "text-slate-400 text-sm",
				children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" GitHub Explorer"
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsxs)("div", {
				className: "flex gap-6 text-sm text-slate-400",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)(link_default, {
						href: "/",
						className: "hover:text-blue-600 transition",
						children: "Search"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)(link_default, {
						href: "/trending",
						className: "hover:text-blue-600 transition",
						children: "Trending"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)(link_default, {
						href: "/bookmarks",
						className: "hover:text-blue-600 transition",
						children: "Bookmarks"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)(link_default, {
						href: "/about",
						className: "hover:text-blue-600 transition",
						children: "About"
					})
				]
			})]
		})
	});
}
//#endregion
//#region context/BookmarkContext.tsx
var BookmarkProvider = /* @__PURE__ */ registerClientReference(() => {
	throw new Error("Unexpectedly client reference export 'BookmarkProvider' is called on server");
}, "0974d08b1f02", "BookmarkProvider");
//#endregion
//#region app/layout.tsx
var layout_exports = /* @__PURE__ */ __exportAll({
	default: () => $$wrap_RootLayout,
	metadata: () => metadata$4
});
var geist = Geist({
	subsets: ["latin"],
	variable: "--font-sans"
});
var metadata$4 = {
	metadataBase: new URL("https://github-user-explorer-6p7j.vercel.app"),
	title: "GitHub User Explorer",
	description: "Search any GitHub user and explore their repositories",
	openGraph: { images: [{ url: "/og-image.png" }] }
};
function RootLayout({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("html", {
		lang: "en",
		className: geist.variable,
		children: /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("body", {
			className: "bg-slate-50 text-slate-900 min-h-screen antialiased flex flex-col",
			children: /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsxs)(BookmarkProvider, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)(Navbar_default, {}),
				/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("main", {
					className: "max-w-7xl mx-auto px-6 py-12 flex-1 w-full",
					children
				}),
				/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)(Footer, {})
			] })
		})
	});
}
var $$wrap_RootLayout = /* @__PURE__ */ __vite_rsc_wrap_css__(RootLayout, "default");
function __vite_rsc_wrap_css__(value, name) {
	if (typeof value !== "function") return value;
	function __wrapper(props) {
		return import_react_react_server.createElement(import_react_react_server.Fragment, null, import_react_react_server.createElement(Resources), import_react_react_server.createElement(value, props));
	}
	Object.defineProperty(__wrapper, "name", { value: name });
	return __wrapper;
}
//#endregion
//#region app/users/[username]/repos/loading.tsx
var loading_exports$5 = /* @__PURE__ */ __exportAll({ default: () => ReposLoading });
function ReposLoading() {
	return /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsxs)("div", {
		className: "max-w-4xl mx-auto px-4 py-10 animate-pulse",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("div", { className: "h-4 w-24 bg-zinc-800 rounded mb-8" }),
			/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("div", { className: "h-8 w-64 bg-zinc-800 rounded mb-2" }),
			/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("div", { className: "h-4 w-40 bg-zinc-800 rounded mb-8" }),
			/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsxs)("div", {
				className: "flex gap-3 mb-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("div", { className: "h-10 w-32 bg-zinc-800 rounded-xl" }), /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("div", { className: "h-10 w-40 bg-zinc-800 rounded-xl" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("div", {
				className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
				children: Array.from({ length: 6 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsxs)("div", {
					className: "bg-zinc-900 border border-zinc-800 rounded-2xl p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("div", { className: "h-5 w-3/4 bg-zinc-800 rounded mb-3" }),
						/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("div", { className: "h-4 w-full bg-zinc-800 rounded mb-2" }),
						/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("div", { className: "h-4 w-2/3 bg-zinc-800 rounded mb-4" }),
						/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsxs)("div", {
							className: "flex gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("div", { className: "h-3 w-16 bg-zinc-800 rounded" }), /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("div", { className: "h-3 w-16 bg-zinc-800 rounded" })]
						})
					]
				}, i))
			})
		]
	});
}
//#endregion
//#region app/users/[username]/repos/error.tsx
var error_exports$3 = /* @__PURE__ */ __exportAll({ default: () => error_default$3 });
var error_default$3 = /* @__PURE__ */ registerClientReference(() => {
	throw new Error("Unexpectedly client reference export 'default' is called on server");
}, "f0c285f7e4e6", "default");
//#endregion
//#region app/error.tsx
var error_exports$2 = /* @__PURE__ */ __exportAll({ default: () => error_default$2 });
var error_default$2 = /* @__PURE__ */ registerClientReference(() => {
	throw new Error("Unexpectedly client reference export 'default' is called on server");
}, "a9bbde40cf2d", "default");
//#endregion
//#region components/Breadcrumb.tsx
function Breadcrumb({ crumbs }) {
	return /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("nav", {
		className: "flex items-center gap-1.5 text-sm text-zinc-500 mb-8 flex-wrap",
		children: crumbs.map((crumb, i) => /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsxs)("span", {
			className: "flex items-center gap-1.5",
			children: [i > 0 && /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)(ChevronRight, { className: "w-3.5 h-3.5" }), crumb.href ? /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)(link_default, {
				href: crumb.href,
				className: "hover:text-white transition",
				children: crumb.label
			}) : /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("span", {
				className: "text-zinc-300",
				children: crumb.label
			})]
		}, i))
	});
}
//#endregion
//#region components/BookmarkButton.tsx
var BookmarkButton_default = /* @__PURE__ */ registerClientReference(() => {
	throw new Error("Unexpectedly client reference export 'default' is called on server");
}, "bb5b54ebadbb", "default");
//#endregion
//#region app/users/[username]/repos/[repo]/page.tsx
var page_exports$5 = /* @__PURE__ */ __exportAll({
	default: () => RepoPage,
	generateMetadata: () => generateMetadata$1
});
async function generateMetadata$1({ params }) {
	const { username, repo } = await params;
	try {
		const repoData = await getRepo(username, repo);
		return {
			title: `${repoData.full_name} — GitHub`,
			description: repoData.description ?? `${repo} by ${username}`,
			openGraph: { images: [{ url: `https://opengraph.githubassets.com/1/${username}/${repo}` }] }
		};
	} catch {
		return { title: "Repository — GitHub Explorer" };
	}
}
function getLanguageColor(lang) {
	return {
		TypeScript: "bg-blue-500",
		JavaScript: "bg-yellow-400",
		Python: "bg-green-500",
		Rust: "bg-orange-500",
		Go: "bg-cyan-500",
		Java: "bg-red-500",
		"C++": "bg-pink-500",
		C: "bg-purple-500",
		Ruby: "bg-rose-500",
		Swift: "bg-orange-400",
		Kotlin: "bg-violet-500",
		CSS: "bg-indigo-500",
		HTML: "bg-orange-500",
		Shell: "bg-slate-400"
	}[lang] || "bg-slate-400";
}
function markdownToHtml(markdown) {
	return markdown.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/^### (.*$)/gim, "<h3>$1</h3>").replace(/^## (.*$)/gim, "<h2>$1</h2>").replace(/^# (.*$)/gim, "<h1>$1</h1>").replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>").replace(/\*(.*?)\*/g, "<em>$1</em>").replace(/`([^`]+)`/g, "<code>$1</code>").replace(/\[([^\]]+)\]\(([^)]+)\)/g, "<a href=\"$2\" target=\"_blank\" rel=\"noopener noreferrer\">$1</a>").replace(/^- (.*$)/gim, "<li>$1</li>").replace(/\n\n/g, "</p><p>").replace(/\n/g, "<br />");
}
async function RepoPage({ params }) {
	const { username, repo } = await params;
	let repoData;
	let languages = {};
	let readme = null;
	try {
		repoData = await getRepo(username, repo);
	} catch {
		notFound();
	}
	try {
		languages = await getRepoLanguages(username, repo);
	} catch {
		languages = {};
	}
	try {
		readme = await getRepoReadme(username, repo);
	} catch {
		readme = null;
	}
	const totalBytes = Object.values(languages).reduce((a, b) => a + b, 0);
	const languageEntries = Object.entries(languages).sort((a, b) => b[1] - a[1]);
	const updatedAt = new Date(repoData.updated_at).toLocaleDateString("en-US", {
		year: "numeric",
		month: "short",
		day: "numeric"
	});
	return /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsxs)("div", {
		className: "max-w-4xl mx-auto px-4 py-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)(Breadcrumb, { crumbs: [
				{
					label: "Home",
					href: "/"
				},
				{
					label: username,
					href: `/users/${username}`
				},
				{
					label: "Repos",
					href: `/users/${username}/repos`
				},
				{ label: repoData.name }
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsxs)("div", {
				className: "bg-white border border-slate-200 rounded-3xl p-8 sm:p-10 mb-6 shadow-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsxs)("div", {
						className: "flex items-start justify-between gap-4 flex-wrap",
						children: [/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsxs)("div", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("p", {
								className: "text-slate-400 text-sm mb-1",
								children: username
							}), /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("h1", {
								className: "text-3xl font-bold break-words text-slate-900",
								children: repoData.name
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsxs)("div", {
							className: "flex gap-3 flex-shrink-0 flex-wrap",
							children: [/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsxs)("a", {
								href: repoData.html_url,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 text-white text-sm font-medium hover:bg-slate-700 transition",
								children: [/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)(ExternalLink, { className: "w-4 h-4" }), " View on GitHub"]
							}), /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)(BookmarkButton_default, { bookmark: {
								type: "repo",
								id: repoData.id,
								full_name: repoData.full_name,
								description: repoData.description ?? void 0,
								html_url: repoData.html_url
							} })]
						})]
					}),
					repoData.description && /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("p", {
						className: "mt-4 text-slate-600 text-base leading-relaxed",
						children: repoData.description
					}),
					/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsxs)("div", {
						className: "mt-6 flex flex-wrap gap-4 text-sm text-slate-500",
						children: [
							repoData.license && /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsxs)("span", {
								className: "flex items-center gap-1.5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)(Scale, { className: "w-4 h-4" }),
									" ",
									repoData.license.name
								]
							}),
							repoData.language && /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsxs)("span", {
								className: "flex items-center gap-1.5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)(GitBranch, { className: "w-4 h-4" }),
									" ",
									repoData.language
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsxs)("span", {
								className: "flex items-center gap-1.5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)(Calendar, { className: "w-4 h-4" }),
									" Updated ",
									updatedAt
								]
							})
						]
					}),
					repoData.topics?.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("div", {
						className: "mt-5 flex flex-wrap gap-2",
						children: repoData.topics.map((topic) => /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("span", {
							className: "px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs border border-blue-100",
							children: topic
						}, topic))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("div", {
				className: "grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6",
				children: [
					{
						label: "Stars",
						value: repoData.stargazers_count.toLocaleString(),
						icon: /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)(Star, { className: "w-4 h-4" })
					},
					{
						label: "Forks",
						value: repoData.forks_count.toLocaleString(),
						icon: /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)(GitFork, { className: "w-4 h-4" })
					},
					{
						label: "Watchers",
						value: repoData.watchers_count.toLocaleString(),
						icon: /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)(Eye, { className: "w-4 h-4" })
					},
					{
						label: "Issues",
						value: repoData.open_issues_count.toLocaleString(),
						icon: /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)(CircleAlert, { className: "w-4 h-4" })
					}
				].map(({ label, value, icon }) => /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsxs)("div", {
					className: "bg-white border border-slate-200 rounded-2xl p-5 text-center shadow-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsxs)("div", {
						className: "flex items-center justify-center gap-1.5 text-slate-400 text-xs mb-2",
						children: [
							icon,
							" ",
							label
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("p", {
						className: "text-2xl font-bold text-slate-900",
						children: value
					})]
				}, label))
			}),
			languageEntries.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsxs)("div", {
				className: "bg-white border border-slate-200 rounded-3xl p-8 mb-6 shadow-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("h2", {
						className: "text-xl font-bold mb-5 text-slate-900",
						children: "Languages"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("div", {
						className: "flex rounded-full overflow-hidden h-3 mb-6",
						children: languageEntries.map(([lang, bytes]) => /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("div", {
							className: `${getLanguageColor(lang)} h-full`,
							style: { width: `${bytes / totalBytes * 100}%` },
							title: `${lang}: ${(bytes / totalBytes * 100).toFixed(1)}%`
						}, lang))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("div", {
						className: "flex flex-wrap gap-x-6 gap-y-3",
						children: languageEntries.map(([lang, bytes]) => /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsxs)("div", {
							className: "flex items-center gap-2 text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("span", { className: `w-3 h-3 rounded-full ${getLanguageColor(lang)}` }),
								/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("span", {
									className: "text-slate-700",
									children: lang
								}),
								/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsxs)("span", {
									className: "text-slate-400",
									children: [(bytes / totalBytes * 100).toFixed(1), "%"]
								})
							]
						}, lang))
					})
				]
			}),
			readme && /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsxs)("div", {
				className: "bg-white border border-slate-200 rounded-3xl p-8 shadow-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("h2", {
					className: "text-xl font-bold mb-5 text-slate-900",
					children: "README"
				}), /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("div", {
					className: "prose prose-slate prose-sm max-w-none\n              prose-headings:text-slate-900 prose-headings:font-bold\n              prose-p:text-slate-600 prose-p:leading-relaxed\n              prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline\n              prose-code:text-blue-600 prose-code:bg-blue-50 prose-code:px-1 prose-code:rounded\n              prose-pre:bg-slate-50 prose-pre:border prose-pre:border-slate-200\n              prose-blockquote:border-slate-300 prose-blockquote:text-slate-500\n              prose-strong:text-slate-900 prose-li:text-slate-600",
					dangerouslySetInnerHTML: { __html: markdownToHtml(readme) }
				})]
			})
		]
	});
}
//#endregion
//#region app/users/[username]/repos/[repo]/loading.tsx
var loading_exports$4 = /* @__PURE__ */ __exportAll({ default: () => RepoLoading });
function RepoLoading() {
	return /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsxs)("div", {
		className: "max-w-4xl mx-auto px-4 py-10 animate-pulse",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsxs)("div", {
				className: "flex gap-2 mb-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("div", { className: "h-4 w-12 bg-zinc-800 rounded" }),
					/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("div", { className: "h-4 w-4 bg-zinc-800 rounded" }),
					/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("div", { className: "h-4 w-20 bg-zinc-800 rounded" }),
					/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("div", { className: "h-4 w-4 bg-zinc-800 rounded" }),
					/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("div", { className: "h-4 w-16 bg-zinc-800 rounded" }),
					/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("div", { className: "h-4 w-4 bg-zinc-800 rounded" }),
					/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("div", { className: "h-4 w-24 bg-zinc-800 rounded" })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsxs)("div", {
				className: "bg-zinc-900 border border-zinc-800 rounded-3xl p-8 mb-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("div", { className: "h-4 w-20 bg-zinc-800 rounded mb-2" }),
					/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("div", { className: "h-8 w-1/2 bg-zinc-800 rounded mb-4" }),
					/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("div", { className: "h-4 w-full bg-zinc-800 rounded mb-2" }),
					/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("div", { className: "h-4 w-3/4 bg-zinc-800 rounded mb-6" }),
					/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsxs)("div", {
						className: "flex gap-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("div", { className: "h-4 w-24 bg-zinc-800 rounded" }),
							/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("div", { className: "h-4 w-24 bg-zinc-800 rounded" }),
							/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("div", { className: "h-4 w-24 bg-zinc-800 rounded" })
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("div", {
				className: "grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6",
				children: Array.from({ length: 4 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("div", { className: "bg-zinc-900 border border-zinc-800 rounded-2xl p-5 h-24" }, i))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsxs)("div", {
				className: "bg-zinc-900 border border-zinc-800 rounded-3xl p-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("div", { className: "h-6 w-32 bg-zinc-800 rounded mb-5" }),
					/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("div", { className: "h-3 w-full bg-zinc-800 rounded mb-6" }),
					/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsxs)("div", {
						className: "flex gap-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("div", { className: "h-4 w-20 bg-zinc-800 rounded" }),
							/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("div", { className: "h-4 w-20 bg-zinc-800 rounded" }),
							/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("div", { className: "h-4 w-20 bg-zinc-800 rounded" })
						]
					})
				]
			})
		]
	});
}
//#endregion
//#region app/users/[username]/repos/[repo]/error.tsx
var error_exports$1 = /* @__PURE__ */ __exportAll({ default: () => error_default$1 });
var error_default$1 = /* @__PURE__ */ registerClientReference(() => {
	throw new Error("Unexpectedly client reference export 'default' is called on server");
}, "51d01d201116", "default");
//#endregion
//#region components/SearchInput.tsx
var SearchInput_default = /* @__PURE__ */ registerClientReference(() => {
	throw new Error("Unexpectedly client reference export 'default' is called on server");
}, "bccf86c93377", "default");
//#endregion
//#region node_modules/vinext/dist/shims/image-config.js
/**
* Convert a glob pattern (with `*` and `**`) to a RegExp.
*
* For hostnames, segments are separated by `.`:
*   - `*` matches a single segment (no dots): [^.]+
*   - `**` matches any number of segments: .+
*
* For pathnames, segments are separated by `/`:
*   - `*` matches a single segment (no slashes): [^/]+
*   - `**` matches any number of segments (including empty): .*
*
* Literal characters are escaped for regex safety.
*/
function globToRegex(pattern, separator) {
	let regexStr = "^";
	const doubleStar = separator === "." ? ".+" : ".*";
	const singleStar = separator === "." ? "[^.]+" : "[^/]+";
	const parts = pattern.split("**");
	for (let i = 0; i < parts.length; i++) {
		if (i > 0) regexStr += doubleStar;
		const subParts = parts[i].split("*");
		for (let j = 0; j < subParts.length; j++) {
			if (j > 0) regexStr += singleStar;
			regexStr += subParts[j].replace(/[.+?^${}()|[\]\\]/g, "\\$&");
		}
	}
	regexStr += "$";
	return new RegExp(regexStr);
}
/**
* Check whether a URL matches a single remote pattern.
* Follows the same semantics as Next.js's matchRemotePattern().
*/
function matchRemotePattern(pattern, url) {
	if (pattern.protocol !== void 0) {
		if (pattern.protocol.replace(/:$/, "") !== url.protocol.replace(/:$/, "")) return false;
	}
	if (pattern.port !== void 0) {
		if (pattern.port !== url.port) return false;
	}
	if (!globToRegex(pattern.hostname, ".").test(url.hostname)) return false;
	if (pattern.search !== void 0) {
		if (pattern.search !== url.search) return false;
	}
	if (!globToRegex(pattern.pathname ?? "**", "/").test(url.pathname)) return false;
	return true;
}
/**
* Check whether a URL matches any configured remote pattern or legacy domain.
*/
function hasRemoteMatch(domains, remotePatterns, url) {
	return domains.some((domain) => url.hostname === domain) || remotePatterns.some((p) => matchRemotePattern(p, url));
}
//#endregion
//#region node_modules/@unpic/react/dist/chunk-VTEFGNYT.mjs
var nestedKeys = /* @__PURE__ */ new Set(["style"]);
var fixedMap = {
	srcset: "srcSet",
	fetchpriority: "use" in import_react_react_server ? "fetchPriority" : "fetchpriority"
};
var camelize = (key) => {
	if (key.startsWith("data-") || key.startsWith("aria-")) return key;
	return fixedMap[key] || key.replace(/-./g, (suffix) => suffix[1].toUpperCase());
};
function camelizeProps(props) {
	return Object.fromEntries(Object.entries(props).map(([k, v]) => [camelize(k), nestedKeys.has(k) && v && typeof v !== "string" ? camelizeProps(v) : v]));
}
//#endregion
//#region node_modules/@unpic/core/dist/chunk-7DG3H6KO.mjs
var getSizes = (width, layout) => {
	if (!width || !layout) return;
	switch (layout) {
		case `constrained`: return `(min-width: ${width}px) ${width}px, 100vw`;
		case `fixed`: return `${width}px`;
		case `fullWidth`: return `100vw`;
		default: return;
	}
};
var pixelate = (value) => value || value === 0 ? `${value}px` : void 0;
var getStyle = ({ width, height, aspectRatio, layout, objectFit = "cover", background }) => {
	const styleEntries = [["object-fit", objectFit]];
	if (background?.startsWith("https:") || background?.startsWith("http:") || background?.startsWith("data:") || background?.startsWith("/")) {
		styleEntries.push(["background-image", `url(${background})`]);
		styleEntries.push(["background-size", "cover"]);
		styleEntries.push(["background-repeat", "no-repeat"]);
	} else styleEntries.push(["background", background]);
	if (layout === "fixed") {
		styleEntries.push(["width", pixelate(width)]);
		styleEntries.push(["height", pixelate(height)]);
	}
	if (layout === "constrained") {
		styleEntries.push(["max-width", pixelate(width)]);
		styleEntries.push(["max-height", pixelate(height)]);
		styleEntries.push(["aspect-ratio", aspectRatio ? `${aspectRatio}` : void 0]);
		styleEntries.push(["width", "100%"]);
	}
	if (layout === "fullWidth") {
		styleEntries.push(["width", "100%"]);
		styleEntries.push(["aspect-ratio", aspectRatio ? `${aspectRatio}` : void 0]);
		styleEntries.push(["height", pixelate(height)]);
	}
	return Object.fromEntries(styleEntries.filter(([, value]) => value));
};
var DEFAULT_RESOLUTIONS = [
	6016,
	5120,
	4480,
	3840,
	3200,
	2560,
	2048,
	1920,
	1668,
	1280,
	1080,
	960,
	828,
	750,
	640
];
var LOW_RES_WIDTH = 24;
var getBreakpoints = ({ width, layout, resolutions = DEFAULT_RESOLUTIONS }) => {
	if (layout === "fullWidth") return resolutions;
	if (!width) return [];
	const doubleWidth = width * 2;
	if (layout === "fixed") return [width, doubleWidth];
	if (layout === "constrained") return [
		width,
		doubleWidth,
		...resolutions.filter((w) => w < doubleWidth)
	];
	return [];
};
var getSrcSetEntries = ({ src, width, layout = "constrained", height, aspectRatio, breakpoints, format }) => {
	breakpoints ||= getBreakpoints({
		width,
		layout
	});
	return breakpoints.sort((a, b) => a - b).map((bp) => {
		let transformedHeight;
		if (height && aspectRatio) transformedHeight = Math.round(bp / aspectRatio);
		return {
			url: src,
			width: bp,
			height: transformedHeight,
			format
		};
	});
};
var getSrcSet = (options) => {
	let { src, transformer, operations } = options;
	if (!transformer) return "";
	return getSrcSetEntries(options).map(({ url: _, ...transform }) => {
		return `${transformer(src, {
			...operations,
			...transform
		}, options.options)?.toString()} ${transform.width}w`;
	}).join(",\n");
};
function transformSharedProps({ width, height, priority, layout = "constrained", aspectRatio, ...props }) {
	width = width && Number(width) || void 0;
	height = height && Number(height) || void 0;
	if (priority) {
		props.loading ||= "eager";
		props.fetchpriority ||= "high";
	} else {
		props.loading ||= "lazy";
		props.decoding ||= "async";
	}
	if (props.alt === "") props.role ||= "presentation";
	if (aspectRatio) {
		if (width) if (height) {} else height = Math.round(width / aspectRatio);
		else if (height) width = Math.round(height * aspectRatio);
		else if (layout !== "fullWidth") {}
	} else if (width && height) aspectRatio = width / height;
	else if (layout !== "fullWidth") {}
	return {
		width,
		height,
		aspectRatio,
		layout,
		...props
	};
}
function transformBaseImageProps(props) {
	let { src, transformer, background, layout, objectFit, breakpoints, width, height, aspectRatio, unstyled, operations, options, ...transformedProps } = transformSharedProps(props);
	if (transformer && background === "auto") {
		const lowResHeight = aspectRatio ? Math.round(LOW_RES_WIDTH / aspectRatio) : void 0;
		const lowResImage = transformer(src, {
			width: LOW_RES_WIDTH,
			height: lowResHeight
		}, options);
		if (lowResImage) background = lowResImage.toString();
	}
	const styleProps = {
		width,
		height,
		aspectRatio,
		layout,
		objectFit,
		background
	};
	transformedProps.sizes ||= getSizes(width, layout);
	if (!unstyled) transformedProps.style = {
		...getStyle(styleProps),
		...transformedProps.style
	};
	if (transformer) {
		transformedProps.srcset = getSrcSet({
			src,
			width,
			height,
			aspectRatio,
			layout,
			breakpoints,
			transformer,
			operations,
			options
		});
		const transformed = transformer(src, {
			...operations,
			width,
			height
		}, options);
		if (transformed) src = transformed;
		if (layout === "fullWidth" || layout === "constrained") {
			width = void 0;
			height = void 0;
		}
	}
	return {
		...transformedProps,
		src: src?.toString(),
		width,
		height
	};
}
function normalizeImageType(type) {
	if (!type) return {};
	if (type.startsWith("image/")) return {
		format: type.slice(6),
		mimeType: type
	};
	return {
		format: type,
		mimeType: `image/${type === "jpg" ? "jpeg" : type}`
	};
}
function transformBaseSourceProps({ media, type, ...props }) {
	let { src, transformer, layout, breakpoints, width, height, aspectRatio, sizes, loading, decoding, operations, options, ...rest } = transformSharedProps(props);
	if (!transformer) return {};
	const { format, mimeType } = normalizeImageType(type);
	sizes ||= getSizes(width, layout);
	const srcset = getSrcSet({
		src,
		width,
		height,
		aspectRatio,
		layout,
		breakpoints,
		transformer,
		format,
		operations,
		options
	});
	const transformed = transformer(src, {
		...operations,
		width,
		height
	}, options);
	if (transformed) src = transformed;
	const returnObject = {
		...rest,
		sizes,
		srcset
	};
	if (media) returnObject.media = media;
	if (mimeType) returnObject.type = mimeType;
	return returnObject;
}
//#endregion
//#region node_modules/unpic/esm/data/domains.js
var domains_default = {
	"images.ctfassets.net": "contentful",
	"cdn.builder.io": "builder.io",
	"images.prismic.io": "imgix",
	"www.datocms-assets.com": "imgix",
	"cdn.sanity.io": "imgix",
	"images.unsplash.com": "imgix",
	"cdn.shopify.com": "shopify",
	"s7d1.scene7.com": "scene7",
	"ip.keycdn.com": "keycdn",
	"assets.caisy.io": "bunny",
	"images.contentstack.io": "contentstack",
	"ucarecdn.com": "uploadcare",
	"imagedelivery.net": "cloudflare_images",
	"wsrv.nl": "wsrv"
};
//#endregion
//#region node_modules/unpic/esm/data/subdomains.js
var subdomains_default = {
	"imgix.net": "imgix",
	"wp.com": "wordpress",
	"files.wordpress.com": "wordpress",
	"b-cdn.net": "bunny",
	"storyblok.com": "storyblok",
	"kc-usercontent.com": "kontent.ai",
	"cloudinary.com": "cloudinary",
	"kxcdn.com": "keycdn",
	"imgeng.in": "imageengine",
	"imagekit.io": "imagekit",
	"cloudimg.io": "cloudimage",
	"ucarecdn.com": "uploadcare",
	"supabase.co": "supabase",
	"graphassets.com": "hygraph"
};
//#endregion
//#region node_modules/unpic/esm/data/paths.js
var paths_default = {
	"/cdn-cgi/image/": "cloudflare",
	"/cdn-cgi/imagedelivery/": "cloudflare_images",
	"/_next/image": "nextjs",
	"/_vercel/image": "vercel",
	"/is/image": "scene7",
	"/_ipx/": "ipx",
	"/_image": "astro",
	"/.netlify/images": "netlify",
	"/storage/v1/object/public/": "supabase",
	"/storage/v1/render/image/public/": "supabase",
	"/v1/storage/buckets/": "appwrite"
};
//#endregion
//#region node_modules/unpic/esm/src/utils.js
function roundIfNumeric(value) {
	if (!value) return value;
	const num = Number(value);
	if (isNaN(num)) return value;
	return Math.round(num);
}
/**
* Given a URL object, returns path and query params
*/
var toRelativeUrl = (url) => {
	const { pathname, search } = url;
	return `${pathname}${search}`;
};
/**
* Returns a URL string that may be relative or absolute
*/
var toCanonicalUrlString = (url) => {
	return url.hostname === "n" ? toRelativeUrl(url) : url.toString();
};
/**
* Normalises a URL object or string URL to a URL object.
*/
var toUrl = (url, base) => {
	return typeof url === "string" ? new URL(url, base ?? "http://n/") : url;
};
/**
* Escapes a string, even if it's URL-safe
*/
var escapeChar = (text) => text === " " ? "+" : "%" + text.charCodeAt(0).toString(16).toUpperCase().padStart(2, "0");
var stripLeadingSlash = (str) => str?.startsWith("/") ? str.slice(1) : str;
var stripTrailingSlash = (str) => str?.endsWith("/") ? str.slice(0, -1) : str;
var addTrailingSlash = (str) => str?.endsWith("/") ? str : `${str}/`;
/**
* Creates a formatter given an operation joiner and key/value joiner
*/
var createFormatter = (kvSeparator, paramSeparator) => {
	const encodedValueJoiner = escapeChar(kvSeparator);
	const encodedOperationJoiner = escapeChar(paramSeparator);
	function escape(value) {
		return encodeURIComponent(value).replaceAll(kvSeparator, encodedValueJoiner).replaceAll(paramSeparator, encodedOperationJoiner);
	}
	function format(key, value) {
		return `${escape(key)}${kvSeparator}${escape(String(value))}`;
	}
	return (operations) => {
		return (Array.isArray(operations) ? operations : Object.entries(operations)).flatMap(([key, value]) => {
			if (value === void 0 || value === null) return [];
			if (Array.isArray(value)) return value.map((v) => format(key, v));
			return format(key, value);
		}).join(paramSeparator);
	};
};
/**
* Creates a parser given an operation joiner and key/value joiner
*/
var createParser = (kvSeparator, paramSeparator) => {
	if (kvSeparator === "=" && paramSeparator === "&") return queryParser;
	return (url) => {
		const urlString = url.toString();
		return Object.fromEntries(urlString.split(paramSeparator).map((pair) => {
			const [key, value] = pair.split(kvSeparator);
			return [decodeURI(key), decodeURI(value)];
		}));
	};
};
/**
* Clamp width and height, maintaining aspect ratio
*/
function clampDimensions(operations, maxWidth = 4e3, maxHeight = 4e3) {
	let { width, height } = operations;
	width = Number(width) || void 0;
	height = Number(height) || void 0;
	if (width && width > maxWidth) {
		if (height) height = Math.round(height * maxWidth / width);
		width = maxWidth;
	}
	if (height && height > maxHeight) {
		if (width) width = Math.round(width * maxHeight / height);
		height = maxHeight;
	}
	return {
		width,
		height
	};
}
function extractFromURL(url) {
	const parsedUrl = toUrl(url);
	const operations = Object.fromEntries(parsedUrl.searchParams.entries());
	for (const key in [
		"width",
		"height",
		"quality"
	]) {
		const value = operations[key];
		if (value) {
			const newVal = Number(value);
			if (!isNaN(newVal)) operations[key] = newVal;
		}
	}
	parsedUrl.search = "";
	return {
		operations,
		src: toCanonicalUrlString(parsedUrl)
	};
}
function normaliseOperations({ keyMap = {}, formatMap = {}, defaults = {} }, operations) {
	if (operations.format && operations.format in formatMap) operations.format = formatMap[operations.format];
	if (operations.width) operations.width = roundIfNumeric(operations.width);
	if (operations.height) operations.height = roundIfNumeric(operations.height);
	for (const k in keyMap) {
		if (!Object.prototype.hasOwnProperty.call(keyMap, k)) continue;
		const key = k;
		if (keyMap[key] === false) {
			delete operations[key];
			continue;
		}
		if (keyMap[key] && operations[key]) {
			operations[keyMap[key]] = operations[key];
			delete operations[key];
		}
	}
	for (const k in defaults) {
		if (!Object.prototype.hasOwnProperty.call(defaults, k)) continue;
		const key = k;
		const value = defaults[key];
		if (!operations[key] && value !== void 0) {
			if (keyMap[key] === false) continue;
			const resolvedKey = keyMap[key] ?? key;
			if (resolvedKey in operations) continue;
			operations[resolvedKey] = value;
		}
	}
	return operations;
}
var invertMap = (map) => Object.fromEntries(Object.entries(map).map(([k, v]) => [v, k]));
function denormaliseOperations({ keyMap = {}, formatMap = {}, defaults = {} }, operations) {
	const ops = normaliseOperations({
		keyMap: invertMap(keyMap),
		formatMap: invertMap(formatMap),
		defaults
	}, operations);
	if (ops.width) ops.width = roundIfNumeric(ops.width);
	if (ops.height) ops.height = roundIfNumeric(ops.height);
	const q = Number(ops.quality);
	if (!isNaN(q)) ops.quality = q;
	return ops;
}
var queryParser = (url) => {
	const parsedUrl = toUrl(url);
	return Object.fromEntries(parsedUrl.searchParams.entries());
};
function createOperationsGenerator({ kvSeparator = "=", paramSeparator = "&", ...options } = {}) {
	const formatter = createFormatter(kvSeparator, paramSeparator);
	return (operations) => {
		return formatter(normaliseOperations(options, operations));
	};
}
function createOperationsParser({ kvSeparator = "=", paramSeparator = "&", defaults: _, ...options } = {}) {
	const parser = createParser(kvSeparator, paramSeparator);
	return (url) => {
		return denormaliseOperations(options, url ? parser(url) : {});
	};
}
function createOperationsHandlers(config) {
	return {
		operationsGenerator: createOperationsGenerator(config),
		operationsParser: createOperationsParser(config)
	};
}
function paramToBoolean(value) {
	if (value === void 0 || value === null) return;
	try {
		return Boolean(JSON.parse(value?.toString()));
	} catch {
		return Boolean(value);
	}
}
var removeUndefined = (obj) => Object.fromEntries(Object.entries(obj).filter(([, value]) => value !== void 0));
function createExtractAndGenerate(extract, generate) {
	return ((src, operations, options) => {
		const base = extract(src, options);
		if (!base) return generate(src, operations, options);
		return generate(base.src, {
			...base.operations,
			...removeUndefined(operations)
		}, {
			...base.options,
			...options
		});
	});
}
//#endregion
//#region node_modules/unpic/esm/src/detect.js
var cdnDomains = new Map(Object.entries(domains_default));
var cdnSubdomains = Object.entries(subdomains_default);
var cdnPaths = Object.entries(paths_default);
/**
* Detects the image CDN provider for a given URL.
*/
function getProviderForUrl(url) {
	return getProviderForUrlByDomain(url) || getProviderForUrlByPath(url);
}
function getProviderForUrlByDomain(url) {
	if (typeof url === "string" && !url.startsWith("https://")) return false;
	const { hostname } = toUrl(url);
	const cdn = cdnDomains.get(hostname);
	if (cdn) return cdn;
	return cdnSubdomains.find(([subdomain]) => hostname.endsWith(subdomain))?.[1] || false;
}
/**
* Gets the image CDN provider for a given URL by its path.
*/
function getProviderForUrlByPath(url) {
	const { pathname } = toUrl(url);
	return cdnPaths.find(([path]) => pathname.startsWith(path))?.[1] || false;
}
//#endregion
//#region node_modules/unpic/esm/src/providers/appwrite.js
var VIEW_URL_SUFFIX = "/view?";
var PREVIEW_URL_SUFFIX = "/preview?";
var { operationsGenerator: operationsGenerator$25, operationsParser: operationsParser$20 } = createOperationsHandlers({
	keyMap: { format: "output" },
	kvSeparator: "=",
	paramSeparator: "&"
});
var generate$26 = (src, modifiers) => {
	const url = toUrl(src.toString().replace(VIEW_URL_SUFFIX, PREVIEW_URL_SUFFIX));
	const projectParam = url.searchParams.get("project") ?? "";
	url.search = operationsGenerator$25(modifiers);
	url.searchParams.append("project", projectParam);
	return toCanonicalUrlString(url);
};
var extract$26 = (url) => {
	if (getProviderForUrlByPath(url) !== "appwrite") return null;
	const parsedUrl = toUrl(url);
	const operations = operationsParser$20(parsedUrl);
	delete operations.project;
	const projectParam = parsedUrl.searchParams.get("project") ?? "";
	parsedUrl.search = "";
	parsedUrl.searchParams.append("project", projectParam);
	return {
		src: parsedUrl.href,
		operations
	};
};
var transform$27 = createExtractAndGenerate(extract$26, generate$26);
//#endregion
//#region node_modules/unpic/esm/src/providers/astro.js
var DEFAULT_ENDPOINT = "/_image";
var { operationsParser: operationsParser$19, operationsGenerator: operationsGenerator$24 } = createOperationsHandlers({
	keyMap: {
		format: "f",
		width: "w",
		height: "h",
		quality: "q"
	},
	defaults: { fit: "cover" }
});
var generate$25 = (src, modifiers, options) => {
	const url = toUrl(`${stripTrailingSlash(options?.baseUrl ?? "")}${options?.endpoint ?? DEFAULT_ENDPOINT}`);
	url.search = operationsGenerator$24(modifiers);
	url.searchParams.set("href", src.toString());
	return toCanonicalUrlString(url);
};
var extract$25 = (url) => {
	const parsedUrl = toUrl(url);
	const src = parsedUrl.searchParams.get("href");
	if (!src) return null;
	parsedUrl.searchParams.delete("href");
	return {
		src,
		operations: operationsParser$19(parsedUrl),
		options: { baseUrl: parsedUrl.origin }
	};
};
var transform$26 = (src, operations, options = {}) => {
	if (toUrl(src).pathname !== (options?.endpoint ?? DEFAULT_ENDPOINT)) return generate$25(src, operations, options);
	const base = extract$25(src);
	if (!base) return generate$25(src, operations, options);
	options.baseUrl ??= base.options.baseUrl;
	return generate$25(base.src, {
		...base.operations,
		...operations
	}, options);
};
//#endregion
//#region node_modules/unpic/esm/src/providers/builder.io.js
var operationsGenerator$23 = createOperationsGenerator({ defaults: {
	fit: "cover",
	format: "webp",
	sharp: true
} });
var extract$24 = extractFromURL;
var generate$24 = (src, modifiers) => {
	const operations = operationsGenerator$23(modifiers);
	const url = toUrl(src);
	url.search = operations;
	return toCanonicalUrlString(url);
};
var transform$25 = createExtractAndGenerate(extract$24, generate$24);
//#endregion
//#region node_modules/unpic/esm/src/providers/bunny.js
var operationsGenerator$22 = createOperationsGenerator({ keyMap: { format: "output" } });
var extract$23 = extractFromURL;
var generate$23 = (src, modifiers) => {
	const operations = operationsGenerator$22(modifiers);
	const url = toUrl(src);
	url.search = operations;
	return toCanonicalUrlString(url);
};
var extractAndGenerate$1 = createExtractAndGenerate(extract$23, generate$23);
var transform$24 = (src, operations) => {
	const { width, height } = operations;
	if (width && height) operations.aspect_ratio ??= `${Math.round(Number(width))}:${Math.round(Number(height))}`;
	return extractAndGenerate$1(src, operations);
};
//#endregion
//#region node_modules/unpic/esm/src/providers/cloudflare.js
var { operationsGenerator: operationsGenerator$21, operationsParser: operationsParser$18 } = createOperationsHandlers({
	keyMap: { "format": "f" },
	defaults: {
		format: "auto",
		fit: "cover"
	},
	formatMap: { jpg: "jpeg" },
	kvSeparator: "=",
	paramSeparator: ","
});
var generate$22 = (src, operations, options) => {
	const modifiers = operationsGenerator$21(operations);
	const url = toUrl(options?.domain ? `https://${options.domain}` : "/");
	url.pathname = `/cdn-cgi/image/${modifiers}/${stripLeadingSlash(src.toString())}`;
	return toCanonicalUrlString(url);
};
var extract$22 = (url, options) => {
	if (getProviderForUrlByPath(url) !== "cloudflare") return null;
	const parsedUrl = toUrl(url);
	const [, , , modifiers, ...src] = parsedUrl.pathname.split("/");
	const operations = operationsParser$18(modifiers);
	return {
		src: toCanonicalUrlString(toUrl(src.join("/"))),
		operations,
		options: { domain: options?.domain ?? (parsedUrl.hostname === "n" ? void 0 : parsedUrl.hostname) }
	};
};
var transform$23 = createExtractAndGenerate(extract$22, generate$22);
//#endregion
//#region node_modules/unpic/esm/src/providers/cloudflare_images.js
var cloudflareImagesRegex = /https?:\/\/(?<host>[^\/]+)\/cdn-cgi\/imagedelivery\/(?<accountHash>[^\/]+)\/(?<imageId>[^\/]+)\/*(?<transformations>[^\/]+)*$/g;
var imagedeliveryRegex = /https?:\/\/(?<host>imagedelivery.net)\/(?<accountHash>[^\/]+)\/(?<imageId>[^\/]+)\/*(?<transformations>[^\/]+)*$/g;
var { operationsGenerator: operationsGenerator$20, operationsParser: operationsParser$17 } = createOperationsHandlers({
	keyMap: {
		width: "w",
		height: "h",
		format: "f"
	},
	defaults: { fit: "cover" },
	kvSeparator: "=",
	paramSeparator: ","
});
function formatUrl(options, transformations) {
	const { host, accountHash, imageId } = options;
	if (!host || !accountHash || !imageId) throw new Error("Missing required Cloudflare Images options");
	return [
		"https:/",
		...host === "imagedelivery.net" ? [host] : [
			host,
			"cdn-cgi",
			"imagedelivery"
		],
		accountHash,
		imageId,
		transformations
	].filter(Boolean).join("/");
}
var generate$21 = (_src, operations, options = {}) => {
	return toCanonicalUrlString(toUrl(formatUrl(options, operationsGenerator$20(operations))));
};
var extract$21 = (url) => {
	const parsedUrl = toUrl(url);
	const matches = [...parsedUrl.toString().matchAll(cloudflareImagesRegex), ...parsedUrl.toString().matchAll(imagedeliveryRegex)];
	if (!matches[0]?.groups) return null;
	const { host, accountHash, imageId, transformations } = matches[0].groups;
	const operations = operationsParser$17(transformations || "");
	const options = {
		host,
		accountHash,
		imageId
	};
	return {
		src: formatUrl(options),
		operations,
		options
	};
};
var transform$22 = (src, operations, options = {}) => {
	const extracted = extract$21(src);
	if (!extracted) throw new Error("Invalid Cloudflare Images URL");
	const newOperations = {
		...extracted.operations,
		...operations
	};
	return generate$21(extracted.src, newOperations, {
		...extracted.options,
		...options
	});
};
//#endregion
//#region node_modules/unpic/esm/src/providers/cloudimage.js
var { operationsGenerator: operationsGenerator$19, operationsParser: operationsParser$16 } = createOperationsHandlers({
	keyMap: {
		format: "force_format",
		width: "w",
		height: "h",
		quality: "q"
	},
	defaults: { org_if_sml: 1 }
});
var generate$20 = (src, modifiers = {}, { token } = {}) => {
	if (!token) throw new Error("Token is required for Cloudimage URLs" + src);
	let srcString = src.toString();
	srcString = srcString.replace(/^https?:\/\//, "");
	if (srcString.includes("?")) {
		modifiers.ci_url_encoded = 1;
		srcString = encodeURIComponent(srcString);
	}
	const operations = operationsGenerator$19(modifiers);
	const url = new URL(`https://${token}.cloudimg.io/`);
	url.pathname = srcString;
	url.search = operations;
	return url.toString();
};
var extract$20 = (src, options = {}) => {
	const url = toUrl(src);
	if (getProviderForUrl(url) !== "cloudimage") return null;
	const operations = operationsParser$16(url);
	let originalSrc = url.pathname;
	if (operations.ci_url_encoded) {
		originalSrc = decodeURIComponent(originalSrc);
		delete operations.ci_url_encoded;
	}
	options.token ??= url.hostname.replace(".cloudimg.io", "");
	return {
		src: `${url.protocol}/${originalSrc}`,
		operations,
		options
	};
};
var transform$21 = createExtractAndGenerate(extract$20, generate$20);
//#endregion
//#region node_modules/unpic/esm/src/providers/cloudinary.js
var publicRegex = /https?:\/\/(?<host>res\.cloudinary\.com)\/(?<cloudName>[a-zA-Z0-9-]+)\/(?<assetType>image|video|raw)\/(?<deliveryType>upload|fetch|private|authenticated|sprite|facebook|twitter|youtube|vimeo)\/?(?<signature>s\-\-[a-zA-Z0-9]+\-\-)?\/?(?<transformations>(?:[^_\/]+_[^,\/]+,?)*)?\/(?:(?<version>v\d+)\/)?(?<id>(?:[^\s\/]+\/)*[^\s\/]+(?:\.[a-zA-Z0-9]+)?)$/;
var privateRegex = /https?:\/\/(?<host>(?<cloudName>[a-zA-Z0-9-]+)-res\.cloudinary\.com|[a-zA-Z0-9.-]+)\/(?<assetType>image|video|raw)\/(?<deliveryType>upload|fetch|private|authenticated|sprite|facebook|twitter|youtube|vimeo)\/?(?<signature>s\-\-[a-zA-Z0-9]+\-\-)?\/?(?<transformations>(?:[^_\/]+_[^,\/]+,?)*)?\/(?:(?<version>v\d+)\/)?(?<id>(?:[^\s\/]+\/)*[^\s\/]+(?:\.[a-zA-Z0-9]+)?)$/;
var { operationsGenerator: operationsGenerator$18, operationsParser: operationsParser$15 } = createOperationsHandlers({
	keyMap: {
		width: "w",
		height: "h",
		format: "f",
		quality: "q"
	},
	defaults: {
		format: "auto",
		c: "lfill"
	},
	kvSeparator: "_",
	paramSeparator: ","
});
function formatCloudinaryUrl({ host, cloudName, assetType, deliveryType, signature, transformations, version, id }) {
	return [
		"https:/",
		host,
		host === "res.cloudinary.com" ? cloudName : void 0,
		assetType,
		deliveryType,
		signature,
		transformations,
		version,
		id
	].filter(Boolean).join("/");
}
function parseCloudinaryUrl(url) {
	let matches = url.toString().match(publicRegex);
	if (!matches?.length) matches = url.toString().match(privateRegex);
	if (!matches?.length) return null;
	return matches.groups || {};
}
var transform$20 = (src, operations) => {
	const group = parseCloudinaryUrl(src.toString());
	if (!group) return src.toString();
	group.transformations = operationsGenerator$18({
		...operationsParser$15(group.transformations || ""),
		...operations
	});
	return formatCloudinaryUrl(group);
};
//#endregion
//#region node_modules/unpic/esm/src/providers/contentful.js
var operationsGenerator$17 = createOperationsGenerator({
	keyMap: {
		format: "fm",
		width: "w",
		height: "h",
		quality: "q"
	},
	defaults: { fit: "fill" }
});
var generate$19 = (src, modifiers) => {
	const operations = operationsGenerator$17(modifiers);
	const url = new URL(src);
	url.search = operations;
	return toCanonicalUrlString(url);
};
var extractAndGenerate = createExtractAndGenerate(extractFromURL, generate$19);
var transform$19 = (src, operations) => {
	const { width, height } = clampDimensions(operations, 4e3, 4e3);
	return extractAndGenerate(src, {
		...operations,
		width,
		height
	});
};
//#endregion
//#region node_modules/unpic/esm/src/providers/contentstack.js
var operationsGenerator$16 = createOperationsGenerator({ defaults: {
	auto: "webp",
	disable: "upscale"
} });
var generate$18 = (src, operations, { baseURL = "https://images.contentstack.io/" } = {}) => {
	if (operations.width && operations.height) operations.fit ??= "crop";
	const modifiers = operationsGenerator$16(operations);
	const url = toUrl(src);
	if (url.hostname === "n") {
		url.protocol = "https:";
		url.hostname = new URL(baseURL).hostname;
	}
	url.search = modifiers;
	return toCanonicalUrlString(url);
};
var extract$18 = (url) => {
	const { src, operations } = extractFromURL(url) ?? {};
	if (!operations || !src) return null;
	const { origin } = toUrl(url);
	return {
		src,
		operations,
		options: { baseURL: origin }
	};
};
var transform$18 = createExtractAndGenerate(extract$18, generate$18);
//#endregion
//#region node_modules/unpic/esm/src/providers/directus.js
var operationsGenerator$15 = createOperationsGenerator({ defaults: {
	withoutEnlargement: true,
	fit: "cover"
} });
var generate$17 = (src, operations) => {
	if (Array.isArray(operations.transforms)) operations.transforms = JSON.stringify(operations.transforms);
	const modifiers = operationsGenerator$15(operations);
	const url = toUrl(src);
	url.search = modifiers;
	return toCanonicalUrlString(url);
};
var extract$17 = (url) => {
	const base = extractFromURL(url);
	if (base?.operations?.transforms && typeof base.operations.transforms === "string") try {
		base.operations.transforms = JSON.parse(base.operations.transforms);
	} catch {
		return null;
	}
	return base;
};
var transform$17 = createExtractAndGenerate(extract$17, generate$17);
//#endregion
//#region node_modules/unpic/esm/src/providers/hygraph.js
var hygraphRegex = /https:\/\/(?<region>[a-z0-9-]+)\.graphassets\.com\/(?<envId>[a-zA-Z0-9]+)(?:\/(?<transformations>.*?))?\/(?<handle>[a-zA-Z0-9]+)$/;
var { operationsGenerator: operationsGenerator$14, operationsParser: operationsParser$14 } = createOperationsHandlers({
	keyMap: {
		width: "width",
		height: "height",
		format: "format"
	},
	defaults: {
		format: "auto",
		fit: "crop"
	}
});
var extract$16 = (url) => {
	const matches = toUrl(url).toString().match(hygraphRegex);
	if (!matches?.groups) return null;
	const { region, envId, handle, transformations } = matches.groups;
	const operations = {};
	if (transformations) transformations.split("/").forEach((part) => {
		const [operation, params] = part.split("=");
		if (operation === "resize" && params) params.split(",").forEach((param) => {
			const [key, value] = param.split(":");
			if (key === "width" || key === "height") operations[key] = Number(value);
			else if (key === "fit") operations.fit = value;
		});
		else if (operation === "output" && params) params.split(",").forEach((param) => {
			const [key, value] = param.split(":");
			if (key === "format") operations.format = value;
		});
		else if (operation === "auto_image") operations.format = "auto";
	});
	return {
		src: `https://${region}.graphassets.com/${envId}/${handle}`,
		operations,
		options: {
			region,
			envId,
			handle
		}
	};
};
var generate$16 = (src, operations, options = {}) => {
	const extracted = extract$16(src);
	if (!extracted) throw new Error("Invalid Hygraph URL");
	const { region, envId, handle } = {
		...extracted.options,
		...options
	};
	const transforms = [];
	if (operations.width || operations.height) {
		const resize = [];
		if (operations.width && operations.height) resize.push("fit:crop");
		else if (operations.fit) resize.push(`fit:${operations.fit}`);
		if (operations.width) resize.push(`width:${operations.width}`);
		if (operations.height) resize.push(`height:${operations.height}`);
		if (resize.length) transforms.push(`resize=${resize.join(",")}`);
	}
	if (operations.format === "auto" || !operations.format && !extracted.operations.format) transforms.push("auto_image");
	else if (operations.format) transforms.push(`output=format:${operations.format}`);
	return toCanonicalUrlString(toUrl(`${`https://${region}.graphassets.com/${envId}`}${transforms.length > 0 ? "/" + transforms.join("/") : ""}/${handle}`));
};
var transform$16 = createExtractAndGenerate(extract$16, generate$16);
//#endregion
//#region node_modules/unpic/esm/src/providers/imageengine.js
var { operationsGenerator: operationsGenerator$13, operationsParser: operationsParser$13 } = createOperationsHandlers({
	keyMap: {
		width: "w",
		height: "h",
		format: "f"
	},
	defaults: { m: "cropbox" },
	kvSeparator: "_",
	paramSeparator: "/"
});
var generate$15 = (src, operations) => {
	const modifiers = operationsGenerator$13(operations);
	const url = toUrl(src);
	url.searchParams.set("imgeng", modifiers);
	return toCanonicalUrlString(url);
};
var extract$15 = (url) => {
	const parsedUrl = toUrl(url);
	const imgeng = parsedUrl.searchParams.get("imgeng");
	if (!imgeng) return null;
	const operations = operationsParser$13(imgeng);
	parsedUrl.searchParams.delete("imgeng");
	return {
		src: toCanonicalUrlString(parsedUrl),
		operations
	};
};
var transform$15 = createExtractAndGenerate(extract$15, generate$15);
//#endregion
//#region node_modules/unpic/esm/src/providers/imagekit.js
var { operationsGenerator: operationsGenerator$12, operationsParser: operationsParser$12 } = createOperationsHandlers({
	keyMap: {
		width: "w",
		height: "h",
		format: "f",
		quality: "q"
	},
	defaults: {
		c: "maintain_ratio",
		fo: "auto"
	},
	kvSeparator: "-",
	paramSeparator: ","
});
var generate$14 = (src, operations) => {
	const modifiers = operationsGenerator$12(operations);
	const url = toUrl(src);
	url.searchParams.set("tr", modifiers);
	return toCanonicalUrlString(url);
};
var extract$14 = (url) => {
	const parsedUrl = toUrl(url);
	let trPart = null;
	let path = parsedUrl.pathname;
	if (parsedUrl.searchParams.has("tr")) {
		trPart = parsedUrl.searchParams.get("tr");
		parsedUrl.searchParams.delete("tr");
	} else {
		const pathParts = parsedUrl.pathname.split("/");
		const trIndex = pathParts.findIndex((part) => part.startsWith("tr:"));
		if (trIndex !== -1) {
			trPart = pathParts[trIndex].slice(3);
			path = pathParts.slice(0, trIndex).concat(pathParts.slice(trIndex + 1)).join("/");
		}
	}
	if (!trPart) return null;
	parsedUrl.pathname = path;
	const operations = operationsParser$12(trPart);
	return {
		src: toCanonicalUrlString(parsedUrl),
		operations
	};
};
var transform$14 = createExtractAndGenerate(extract$14, generate$14);
//#endregion
//#region node_modules/unpic/esm/src/providers/imgix.js
var { operationsGenerator: operationsGenerator$11, operationsParser: operationsParser$11 } = createOperationsHandlers({
	keyMap: {
		format: "fm",
		width: "w",
		height: "h",
		quality: "q"
	},
	defaults: {
		fit: "min",
		auto: "format"
	}
});
var extract$13 = (url) => {
	const src = toUrl(url);
	const operations = operationsParser$11(url);
	src.search = "";
	return {
		src: toCanonicalUrlString(src),
		operations
	};
};
var generate$13 = (src, operations) => {
	const modifiers = operationsGenerator$11(operations);
	const url = toUrl(src);
	url.search = modifiers;
	if (url.searchParams.has("fm") && url.searchParams.get("auto") === "format") url.searchParams.delete("auto");
	return toCanonicalUrlString(url);
};
var transform$13 = createExtractAndGenerate(extract$13, generate$13);
//#endregion
//#region node_modules/unpic/esm/src/providers/ipx.js
var { operationsGenerator: operationsGenerator$10, operationsParser: operationsParser$10 } = createOperationsHandlers({
	keyMap: {
		width: "w",
		height: "h",
		quality: "q",
		format: "f"
	},
	defaults: { f: "auto" },
	kvSeparator: "_",
	paramSeparator: ","
});
var generate$12 = (src, operations, options) => {
	if (operations.width && operations.height) {
		operations.s = `${operations.width}x${operations.height}`;
		delete operations.width;
		delete operations.height;
	}
	const modifiers = operationsGenerator$10(operations);
	const url = toUrl(options?.baseURL ?? "/_ipx");
	url.pathname = `${stripTrailingSlash(url.pathname)}/${modifiers}/${stripLeadingSlash(src.toString())}`;
	return toCanonicalUrlString(url);
};
var extract$12 = (url) => {
	const parsedUrl = toUrl(url);
	const [, baseUrlPart, modifiers, ...srcParts] = parsedUrl.pathname.split("/");
	if (!modifiers || !srcParts.length) return null;
	const operations = operationsParser$10(modifiers);
	if (operations.s) {
		const [width, height] = operations.s.split("x").map(Number);
		operations.width = width;
		operations.height = height;
		delete operations.s;
	}
	return {
		src: "/" + srcParts.join("/"),
		operations,
		options: { baseURL: `${parsedUrl.origin}/${baseUrlPart}` }
	};
};
var transform$12 = (src, operations, options) => {
	const url = toUrl(src);
	const baseURL = options?.baseURL;
	if (baseURL && url.toString().startsWith(baseURL) || url.pathname.startsWith("/_ipx")) {
		const extracted = extract$12(src);
		if (extracted) return generate$12(extracted.src, {
			...extracted.operations,
			...operations
		}, { baseURL: extracted.options.baseURL });
	}
	return generate$12(src, operations, { baseURL });
};
//#endregion
//#region node_modules/unpic/esm/src/providers/keycdn.js
var BOOLEAN_PARAMS = [
	"enlarge",
	"flip",
	"flop",
	"negate",
	"normalize",
	"grayscale",
	"removealpha",
	"olrepeat",
	"progressive",
	"adaptive",
	"lossless",
	"nearlossless",
	"metadata"
];
var { operationsGenerator: operationsGenerator$9, operationsParser: operationsParser$9 } = createOperationsHandlers({
	defaults: { fit: "cover" },
	formatMap: { jpg: "jpeg" }
});
var generate$11 = (src, operations) => {
	const url = toUrl(src);
	for (const key of BOOLEAN_PARAMS) if (operations[key] !== void 0) operations[key] = operations[key] ? 1 : 0;
	url.search = operationsGenerator$9(operations);
	return toCanonicalUrlString(url);
};
var extract$11 = (url) => {
	const parsedUrl = toUrl(url);
	const operations = operationsParser$9(parsedUrl);
	for (const key of BOOLEAN_PARAMS) if (operations[key] !== void 0) operations[key] = paramToBoolean(operations[key]);
	parsedUrl.search = "";
	return {
		src: toCanonicalUrlString(parsedUrl),
		operations
	};
};
var transform$11 = createExtractAndGenerate(extract$11, generate$11);
//#endregion
//#region node_modules/unpic/esm/src/providers/kontent.ai.js
var { operationsGenerator: operationsGenerator$8, operationsParser: operationsParser$8 } = createOperationsHandlers({
	formatMap: { jpg: "jpeg" },
	keyMap: {
		format: "fm",
		width: "w",
		height: "h",
		quality: "q"
	}
});
var generate$10 = (src, operations) => {
	const url = toUrl(src);
	if (operations.lossless !== void 0) operations.lossless = operations.lossless ? 1 : 0;
	if (operations.width && operations.height) operations.fit = "crop";
	url.search = operationsGenerator$8(operations);
	return toCanonicalUrlString(url);
};
var extract$10 = (url) => {
	const parsedUrl = toUrl(url);
	const operations = operationsParser$8(parsedUrl);
	if (operations.lossless !== void 0) operations.lossless = paramToBoolean(operations.lossless);
	parsedUrl.search = "";
	return {
		src: toCanonicalUrlString(parsedUrl),
		operations
	};
};
var transform$10 = createExtractAndGenerate(extract$10, generate$10);
//#endregion
//#region node_modules/unpic/esm/src/providers/netlify.js
var { operationsGenerator: operationsGenerator$7, operationsParser: operationsParser$7 } = createOperationsHandlers({
	defaults: { fit: "cover" },
	keyMap: {
		format: "fm",
		width: "w",
		height: "h",
		quality: "q"
	}
});
var generate$9 = (src, operations, options = {}) => {
	const url = toUrl(`${options.baseUrl || ""}/.netlify/images`);
	url.search = operationsGenerator$7(operations);
	url.searchParams.set("url", src.toString());
	return toCanonicalUrlString(url);
};
var extract$9 = (url) => {
	if (getProviderForUrlByPath(url) !== "netlify") return null;
	const parsedUrl = toUrl(url);
	const operations = operationsParser$7(parsedUrl);
	delete operations.url;
	const sourceUrl = parsedUrl.searchParams.get("url") || "";
	parsedUrl.search = "";
	return {
		src: sourceUrl,
		operations,
		options: { baseUrl: parsedUrl.hostname === "n" ? void 0 : parsedUrl.origin }
	};
};
var transform$9 = createExtractAndGenerate(extract$9, generate$9);
//#endregion
//#region node_modules/unpic/esm/src/providers/vercel.js
var { operationsGenerator: operationsGenerator$6, operationsParser: operationsParser$6 } = createOperationsHandlers({
	keyMap: {
		width: "w",
		quality: "q",
		height: false,
		format: false
	},
	defaults: { q: 75 }
});
var generate$8 = (src, operations, options = {}) => {
	const url = toUrl(`${options.baseUrl || ""}/${options.prefix || "_vercel"}/image`);
	url.search = operationsGenerator$6(operations);
	url.searchParams.append("url", src.toString());
	return toCanonicalUrlString(url);
};
var extract$8 = (url, options = {}) => {
	if (!["vercel", "nextjs"].includes(getProviderForUrlByPath(url) || "")) return null;
	const parsedUrl = toUrl(url);
	const sourceUrl = parsedUrl.searchParams.get("url") || "";
	parsedUrl.searchParams.delete("url");
	const operations = operationsParser$6(parsedUrl);
	parsedUrl.search = "";
	return {
		src: sourceUrl,
		operations,
		options: { baseUrl: options.baseUrl ?? parsedUrl.origin }
	};
};
var transform$8 = createExtractAndGenerate(extract$8, generate$8);
//#endregion
//#region node_modules/unpic/esm/src/providers/nextjs.js
var generate$7 = (src, operations, options = {}) => generate$8(src, operations, {
	...options,
	prefix: "_next"
});
var extract$7 = (url, options) => extract$8(url, options);
var transform$7 = createExtractAndGenerate(extract$7, generate$7);
//#endregion
//#region node_modules/unpic/esm/src/providers/scene7.js
var { operationsGenerator: operationsGenerator$5, operationsParser: operationsParser$5 } = createOperationsHandlers({
	keyMap: {
		width: "wid",
		height: "hei",
		quality: "qlt",
		format: "fmt"
	},
	defaults: { fit: "crop,0" }
});
var BASE = "https://s7d1.scene7.com/is/image/";
var generate$6 = (src, operations) => {
	const url = new URL(src, BASE);
	url.search = operationsGenerator$5(operations);
	return toCanonicalUrlString(url);
};
var extract$6 = (url) => {
	if (getProviderForUrl(url) !== "scene7") return null;
	const parsedUrl = new URL(url, BASE);
	const operations = operationsParser$5(parsedUrl);
	parsedUrl.search = "";
	return {
		src: parsedUrl.toString(),
		operations
	};
};
var transform$6 = createExtractAndGenerate(extract$6, generate$6);
//#endregion
//#region node_modules/unpic/esm/src/providers/shopify.js
var shopifyRegex = /(.+?)(?:_(?:(pico|icon|thumb|small|compact|medium|large|grande|original|master)|(\d*)x(\d*)))?(?:_crop_([a-z]+))?(\.[a-zA-Z]+)(\.png|\.jpg|\.webp|\.avif)?$/;
var { operationsGenerator: operationsGenerator$4, operationsParser: operationsParser$4 } = createOperationsHandlers({ keyMap: { format: false } });
var generate$5 = (src, operations) => {
	const url = toUrl(src);
	url.pathname = url.pathname.replace(shopifyRegex, "$1$6");
	url.search = operationsGenerator$4(operations);
	return toCanonicalUrlString(url);
};
var extract$5 = (url) => {
	const parsedUrl = toUrl(url);
	const match = shopifyRegex.exec(parsedUrl.pathname);
	const operations = operationsParser$4(parsedUrl);
	if (match) {
		const [, , , width, height, crop] = match;
		if (width && height && !operations.width && !operations.height) {
			operations.width = parseInt(width, 10);
			operations.height = parseInt(height, 10);
		}
		if (crop) operations.crop ??= crop;
	}
	parsedUrl.pathname = parsedUrl.pathname.replace(shopifyRegex, "$1$6");
	for (const key of [
		"width",
		"height",
		"crop",
		"pad_color",
		"format"
	]) parsedUrl.searchParams.delete(key);
	return {
		src: parsedUrl.toString(),
		operations
	};
};
var transform$5 = createExtractAndGenerate(extract$5, generate$5);
//#endregion
//#region node_modules/unpic/esm/src/providers/storyblok.js
var storyBlokAssets = /(?<id>\/f\/\d+\/\d+x\d+\/\w+\/[^\/]+)\/?(?<modifiers>m\/?(?<crop>\d+x\d+:\d+x\d+)?\/?(?<resize>(?<flipx>\-)?(?<width>\d+)x(?<flipy>\-)?(?<height>\d+))?\/?(filters\:(?<filters>[^\/]+))?)?$/;
var storyBlokImg2 = /^(?<modifiers>\/(?<crop>\d+x\d+:\d+x\d+)?\/?(?<resize>(?<flipx>\-)?(?<width>\d+)x(?<flipy>\-)?(?<height>\d+))?\/?(filters\:(?<filters>[^\/]+))?\/?)?(?<id>\/f\/.+)$/;
var filterSplitterRegex = /:(?![^(]*\))/;
var splitFilters = (filters) => {
	if (!filters) return {};
	return Object.fromEntries(filters.split(filterSplitterRegex).map((filter) => {
		if (!filter) return [];
		const [key, value] = filter.split("(");
		return [key, value.replace(")", "")];
	}));
};
var generateFilters = (filters) => {
	if (!filters) return;
	const filterItems = Object.entries(filters).map(([key, value]) => `${key}(${value ?? ""})`);
	if (filterItems.length === 0) return;
	return `filters:${filterItems.join(":")}`;
};
var extract$4 = (url) => {
	const parsedUrl = toUrl(url);
	const matches = (parsedUrl.hostname === "img2.storyblok.com" ? storyBlokImg2 : storyBlokAssets).exec(parsedUrl.pathname);
	if (!matches || !matches.groups) return null;
	const { id, crop, width, height, filters, flipx, flipy } = matches.groups;
	const { format, ...filterMap } = splitFilters(filters ?? "");
	if (parsedUrl.hostname === "img2.storyblok.com") parsedUrl.hostname = "a.storyblok.com";
	const operations = Object.fromEntries([
		["width", Number(width) || void 0],
		["height", Number(height) || void 0],
		["format", format],
		["crop", crop],
		["filters", filterMap],
		["flipx", flipx],
		["flipy", flipy]
	].filter(([_, value]) => value !== void 0));
	return {
		src: `${parsedUrl.origin}${id}`,
		operations
	};
};
var generate$4 = (src, operations) => {
	const url = toUrl(src);
	const { width = 0, height = 0, format, crop, filters = {}, flipx = "", flipy = "" } = operations;
	const size = `${flipx}${width}x${flipy}${height}`;
	if (format) filters.format = format;
	url.pathname = [
		url.pathname,
		"m",
		crop,
		size,
		generateFilters(filters)
	].filter(Boolean).join("/");
	return toCanonicalUrlString(url);
};
var transform$4 = createExtractAndGenerate(extract$4, generate$4);
//#endregion
//#region node_modules/unpic/esm/src/providers/supabase.js
var STORAGE_URL_PREFIX = "/storage/v1/object/public/";
var RENDER_URL_PREFIX = "/storage/v1/render/image/public/";
var isRenderUrl = (url) => url.pathname.startsWith(RENDER_URL_PREFIX);
var { operationsGenerator: operationsGenerator$3, operationsParser: operationsParser$3 } = createOperationsHandlers({});
var generate$3 = (src, operations) => {
	const url = toUrl(src);
	url.pathname = url.pathname.replace(RENDER_URL_PREFIX, STORAGE_URL_PREFIX);
	if (operations.format && operations.format !== "origin") delete operations.format;
	url.search = operationsGenerator$3(operations);
	return toCanonicalUrlString(url).replace(STORAGE_URL_PREFIX, RENDER_URL_PREFIX);
};
var extract$3 = (url) => {
	const parsedUrl = toUrl(url);
	const operations = operationsParser$3(parsedUrl);
	const isRender = isRenderUrl(parsedUrl);
	const imagePath = parsedUrl.pathname.replace(RENDER_URL_PREFIX, "").replace(STORAGE_URL_PREFIX, "");
	if (!isRender) return {
		src: toCanonicalUrlString(parsedUrl),
		operations
	};
	return {
		src: `${parsedUrl.origin}${STORAGE_URL_PREFIX}${imagePath}`,
		operations
	};
};
var transform$3 = createExtractAndGenerate(extract$3, generate$3);
//#endregion
//#region node_modules/unpic/esm/src/providers/uploadcare.js
var uploadcareRegex = /^https?:\/\/(?<host>[^\/]+)\/(?<uuid>[^\/]+)(?:\/(?<filename>[^\/]+)?)?/;
var { operationsGenerator: operationsGenerator$2, operationsParser: operationsParser$2 } = createOperationsHandlers({
	keyMap: {
		width: false,
		height: false
	},
	defaults: { format: "auto" },
	kvSeparator: "/",
	paramSeparator: "/-/"
});
var extract$2 = (url) => {
	const parsedUrl = toUrl(url);
	const match = uploadcareRegex.exec(parsedUrl.toString());
	if (!match || !match.groups) return null;
	const { host, uuid } = match.groups;
	const [, ...operationsString] = parsedUrl.pathname.split("/-/");
	const operations = operationsParser$2(operationsString.join("/-/") || "");
	if (operations.resize) {
		const [width, height] = operations.resize.split("x");
		if (width) operations.width = parseInt(width);
		if (height) operations.height = parseInt(height);
		delete operations.resize;
	}
	return {
		src: `https://${host}/${uuid}/`,
		operations,
		options: { host }
	};
};
var generate$2 = (src, operations, options = {}) => {
	const url = toUrl(src);
	const host = options.host || url.hostname;
	const match = uploadcareRegex.exec(url.toString());
	if (match?.groups) url.pathname = `/${match.groups.uuid}/`;
	operations.resize = operations.resize || `${operations.width ?? ""}x${operations.height ?? ""}`;
	delete operations.width;
	delete operations.height;
	const modifiers = addTrailingSlash(operationsGenerator$2(operations));
	url.hostname = host;
	url.pathname = stripTrailingSlash(url.pathname) + (modifiers ? `/-/${modifiers}` : "") + (match?.groups?.filename ?? "");
	return toCanonicalUrlString(url);
};
var transform$2 = createExtractAndGenerate(extract$2, generate$2);
//#endregion
//#region node_modules/unpic/esm/src/providers/wordpress.js
var { operationsGenerator: operationsGenerator$1, operationsParser: operationsParser$1 } = createOperationsHandlers({
	keyMap: {
		width: "w",
		height: "h"
	},
	defaults: { crop: "1" }
});
var generate$1 = (src, operations) => {
	const url = toUrl(src);
	const { crop } = operations;
	if (typeof crop !== "undefined" && crop !== "0") operations.crop = crop ? "1" : "0";
	url.search = operationsGenerator$1(operations);
	return toCanonicalUrlString(url);
};
var extract$1 = (url) => {
	const parsedUrl = toUrl(url);
	const operations = operationsParser$1(parsedUrl);
	if (operations.crop !== void 0) operations.crop = operations.crop === "1";
	parsedUrl.search = "";
	return {
		src: toCanonicalUrlString(parsedUrl),
		operations
	};
};
var transform$1 = createExtractAndGenerate(extract$1, generate$1);
//#endregion
//#region node_modules/unpic/esm/src/providers/wsrv.js
var { operationsGenerator, operationsParser } = createOperationsHandlers({
	keyMap: {
		width: "w",
		height: "h",
		format: "output",
		quality: "q"
	},
	defaults: { fit: "cover" }
});
var extract = (url) => {
	const urlObj = toUrl(url);
	const srcParam = urlObj.searchParams.get("url");
	if (!srcParam) return null;
	let src = srcParam;
	if (!src.startsWith("http://") && !src.startsWith("https://")) src = "https://" + src;
	urlObj.searchParams.delete("url");
	const operations = operationsParser(urlObj);
	return {
		src,
		operations
	};
};
var generate = (src, operations) => {
	const url = new URL("https://wsrv.nl/");
	const cleanSrc = (typeof src === "string" ? src : src.toString()).replace(/^https?:\/\//, "");
	url.searchParams.set("url", cleanSrc);
	const params = operationsGenerator(operations);
	const searchParams = new URLSearchParams(params);
	for (const [key, value] of searchParams) if (key !== "url") url.searchParams.set(key, value);
	return toCanonicalUrlString(url);
};
var transform = createExtractAndGenerate(extract, generate);
//#endregion
//#region node_modules/unpic/esm/src/transform.js
var transformerMap = {
	appwrite: transform$27,
	astro: transform$26,
	"builder.io": transform$25,
	bunny: transform$24,
	cloudflare: transform$23,
	cloudflare_images: transform$22,
	cloudimage: transform$21,
	cloudinary: transform$20,
	contentful: transform$19,
	contentstack: transform$18,
	directus: transform$17,
	hygraph: transform$16,
	imageengine: transform$15,
	imagekit: transform$14,
	imgix: transform$13,
	ipx: transform$12,
	keycdn: transform$11,
	"kontent.ai": transform$10,
	netlify: transform$9,
	nextjs: transform$7,
	scene7: transform$6,
	shopify: transform$5,
	storyblok: transform$4,
	supabase: transform$3,
	uploadcare: transform$2,
	vercel: transform$8,
	wordpress: transform$1,
	wsrv: transform
};
/**
* Returns a transformer function if the given CDN is supported
*/
function getTransformerForCdn(cdn) {
	if (!cdn) return;
	return transformerMap[cdn];
}
//#endregion
//#region node_modules/@unpic/core/dist/auto.mjs
function transformProps({ cdn, fallback, operations = {}, options, ...props }) {
	cdn ??= getProviderForUrl(props.src) || fallback;
	if (!cdn) return props;
	const transformer = getTransformerForCdn(cdn);
	if (!transformer) return props;
	return transformBaseImageProps({
		...props,
		operations: operations?.[cdn],
		options: options?.[cdn],
		transformer
	});
}
function transformSourceProps({ cdn, fallback, operations, options, ...props }) {
	cdn ??= getProviderForUrl(props.src) || fallback;
	if (!cdn) return props;
	const transformer = getTransformerForCdn(cdn);
	if (!transformer) return props;
	return transformBaseSourceProps({
		...props,
		operations: operations?.[cdn],
		options: options?.[cdn],
		transformer
	});
}
//#endregion
//#region node_modules/@unpic/react/dist/chunk-SNIEDJZS.mjs
var Image$1 = import_react_react_server.forwardRef(function Image2(props, ref) {
	return /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("img", {
		...camelizeProps(transformProps(props)),
		ref
	});
});
import_react_react_server.forwardRef(function Source2(props, ref) {
	return /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("source", {
		...camelizeProps(transformSourceProps(props)),
		ref
	});
});
//#endregion
//#region node_modules/vinext/dist/shims/image.js
/**
* next/image shim
*
* Translates Next.js Image props to @unpic/react Image component.
* @unpic/react auto-detects CDN from URL and uses native transforms.
* For local images (relative paths), routes through `/_vinext/image`
* for server-side optimization (resize, format negotiation, quality).
*
* Remote images are validated against `images.remotePatterns` and
* `images.domains` from next.config.js. Unmatched URLs are blocked
* in production and warn in development, matching Next.js behavior.
*/
/**
* Image config injected at build time via Vite define.
* Serialized as JSON — parsed once at module level.
*/
var __imageRemotePatterns = (() => {
	try {
		return JSON.parse("[{\"protocol\":\"https\",\"hostname\":\"avatars.githubusercontent.com\"},{\"protocol\":\"https\",\"hostname\":\"github.com\"}]");
	} catch {
		return [];
	}
})();
var __imageDomains = (() => {
	try {
		return JSON.parse("[]");
	} catch {
		return [];
	}
})();
var __hasImageConfig = __imageRemotePatterns.length > 0 || __imageDomains.length > 0;
var __imageDeviceSizes = (() => {
	try {
		return JSON.parse("[640,750,828,1080,1200,1920,2048,3840]");
	} catch {
		return [
			640,
			750,
			828,
			1080,
			1200,
			1920,
			2048,
			3840
		];
	}
})();
/**
* Validate that a remote URL is allowed by the configured remote patterns.
* Returns true if the URL is allowed, false otherwise.
*
* When no remotePatterns/domains are configured, all remote URLs are allowed
* (backwards-compatible — user hasn't opted into restriction).
*
* When patterns ARE configured, only matching URLs are allowed.
* In development, non-matching URLs produce a console warning.
* In production, non-matching URLs are blocked (src replaced with empty string).
*/
function validateRemoteUrl(src) {
	if (!__hasImageConfig) return { allowed: true };
	let url;
	try {
		url = new URL(src, "http://n");
	} catch {
		return {
			allowed: false,
			reason: `Invalid URL: ${src}`
		};
	}
	if (hasRemoteMatch(__imageDomains, __imageRemotePatterns, url)) return { allowed: true };
	return {
		allowed: false,
		reason: `Image URL "${src}" is not configured in images.remotePatterns or images.domains in next.config.js. See: https://nextjs.org/docs/messages/next-image-unconfigured-host`
	};
}
/**
* Sanitize a blurDataURL to prevent CSS injection.
*
* A crafted data URL containing `)` can break out of the `url()` CSS function,
* allowing injection of arbitrary CSS properties or rules. Characters like `{`,
* `}`, and `\` can also assist in crafting injection payloads.
*
* This validates the URL starts with `data:image/` and rejects characters that
* could escape the `url()` context. Semicolons are allowed since they're part
* of valid data URLs (`data:image/png;base64,...`) and harmless inside `url()`.
*
* Returns undefined for invalid URLs, which causes the blur placeholder to be
* skipped gracefully.
*/
function sanitizeBlurDataURL(url) {
	if (!url.startsWith("data:image/")) return void 0;
	if (/[)(}{\\'"\n\r]/.test(url)) return void 0;
	return url;
}
/**
* Determine if a src is a remote URL (CDN-optimizable) or local.
*/
function isRemoteUrl(src) {
	return src.startsWith("http://") || src.startsWith("https://") || src.startsWith("//");
}
/**
* Responsive image widths matching Next.js's device sizes config.
* These are the breakpoints used for srcSet generation.
* Configurable via `images.deviceSizes` in next.config.js.
*/
var RESPONSIVE_WIDTHS = __imageDeviceSizes;
/**
* Build a `/_vinext/image` optimization URL.
*
* In production (Cloudflare Workers), the worker intercepts this path and uses
* the Images binding to resize/transcode on the fly. In dev, the Vite dev
* server handles it as a passthrough (serves the original file).
*/
function imageOptimizationUrl(src, width, quality = 75) {
	return `/_vinext/image?url=${encodeURIComponent(src)}&w=${width}&q=${quality}`;
}
/**
* Generate a srcSet string for responsive images.
*
* Each width points to the `/_vinext/image` optimization endpoint so the
* server can resize and transcode the image. Only includes widths that are
* <= 2x the original image width to avoid pointless upscaling.
*/
function generateSrcSet(src, originalWidth, quality = 75) {
	const widths = RESPONSIVE_WIDTHS.filter((w) => w <= originalWidth * 2);
	if (widths.length === 0) return `${imageOptimizationUrl(src, originalWidth, quality)} ${originalWidth}w`;
	return widths.map((w) => `${imageOptimizationUrl(src, w, quality)} ${w}w`).join(", ");
}
var Image = (0, import_react_react_server.forwardRef)(function Image({ src: srcProp, alt, width, height, fill, priority, quality, placeholder, blurDataURL, loader, sizes, className, style, onLoad, onLoadingComplete, unoptimized: _unoptimized, overrideSrc: _overrideSrc, loading, ...rest }, ref) {
	const handleLoad = onLoadingComplete ? (e) => {
		onLoad?.(e);
		onLoadingComplete(e.currentTarget);
	} : onLoad;
	const src = typeof srcProp === "string" ? srcProp : srcProp.src;
	const imgWidth = width ?? (typeof srcProp === "object" ? srcProp.width : void 0);
	const imgHeight = height ?? (typeof srcProp === "object" ? srcProp.height : void 0);
	const imgBlurDataURL = blurDataURL ?? (typeof srcProp === "object" ? srcProp.blurDataURL : void 0);
	if (loader) return /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("img", {
		ref,
		src: loader({
			src,
			width: imgWidth ?? 0,
			quality: quality ?? 75
		}),
		alt,
		width: fill ? void 0 : imgWidth,
		height: fill ? void 0 : imgHeight,
		loading: priority ? "eager" : loading ?? "lazy",
		decoding: "async",
		sizes,
		className,
		onLoad: handleLoad,
		style: fill ? {
			position: "absolute",
			inset: 0,
			width: "100%",
			height: "100%",
			objectFit: "cover",
			...style
		} : style,
		...rest
	});
	if (isRemoteUrl(src)) {
		const validation = validateRemoteUrl(src);
		if (!validation.allowed) {
			console.error(`[next/image] ${validation.reason}`);
			return null;
		}
		const sanitizedBlur = imgBlurDataURL ? sanitizeBlurDataURL(imgBlurDataURL) : void 0;
		const bg = placeholder === "blur" && sanitizedBlur ? `url(${sanitizedBlur})` : void 0;
		if (fill) return /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)(Image$1, {
			src,
			alt,
			layout: "fullWidth",
			priority,
			sizes,
			className,
			background: bg,
			onLoad: handleLoad
		});
		if (imgWidth && imgHeight) return /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)(Image$1, {
			src,
			alt,
			width: imgWidth,
			height: imgHeight,
			layout: "constrained",
			priority,
			sizes,
			className,
			background: bg,
			onLoad: handleLoad
		});
	}
	const imgQuality = quality ?? 75;
	const isSvg = src.endsWith(".svg");
	const skipOptimization = _unoptimized === true || isSvg && true;
	const srcSet = imgWidth && !fill && !skipOptimization ? generateSrcSet(src, imgWidth, imgQuality) : imgWidth && !fill ? RESPONSIVE_WIDTHS.filter((w) => w <= imgWidth * 2).map((w) => `${src} ${w}w`).join(", ") || `${src} ${imgWidth}w` : void 0;
	const optimizedSrc = skipOptimization ? src : imgWidth ? imageOptimizationUrl(src, imgWidth, imgQuality) : imageOptimizationUrl(src, RESPONSIVE_WIDTHS[0], imgQuality);
	const sanitizedLocalBlur = imgBlurDataURL ? sanitizeBlurDataURL(imgBlurDataURL) : void 0;
	const blurStyle = placeholder === "blur" && sanitizedLocalBlur ? {
		backgroundImage: `url(${sanitizedLocalBlur})`,
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
		backgroundPosition: "center"
	} : void 0;
	return /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("img", {
		ref,
		src: optimizedSrc,
		alt,
		width: fill ? void 0 : imgWidth,
		height: fill ? void 0 : imgHeight,
		loading: priority ? "eager" : loading ?? "lazy",
		fetchPriority: priority ? "high" : void 0,
		decoding: "async",
		srcSet,
		sizes: sizes ?? (fill ? "100vw" : void 0),
		className,
		"data-nimg": fill ? "fill" : "1",
		onLoad: handleLoad,
		style: fill ? {
			position: "absolute",
			inset: 0,
			width: "100%",
			height: "100%",
			objectFit: "cover",
			...blurStyle,
			...style
		} : {
			...blurStyle,
			...style
		},
		...rest
	});
});
//#endregion
//#region components/UserCard.tsx
function UserCard({ user }) {
	return /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)(link_default, {
		href: `/users/${user.login}`,
		className: "block group",
		children: /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("div", {
			className: "bg-white border border-slate-200 rounded-2xl p-5 hover:border-blue-300 hover:shadow-md transition-all duration-200",
			children: /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsxs)("div", {
				className: "flex items-start gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)(Image, {
					src: user.avatar_url,
					alt: `${user.login}'s avatar`,
					width: 52,
					height: 52,
					className: "rounded-xl flex-shrink-0 ring-1 ring-slate-200",
					priority: false
				}), /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsxs)("div", {
					className: "flex-1 min-w-0",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("h3", {
							className: "text-sm font-semibold text-slate-900 truncate group-hover:text-blue-600 transition-colors",
							children: user.name || user.login
						}),
						/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsxs)("p", {
							className: "text-slate-400 text-xs mt-0.5",
							children: ["@", user.login]
						}),
						user.bio && /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("p", {
							className: "mt-2 text-xs text-slate-500 line-clamp-2 leading-relaxed",
							children: user.bio
						}),
						user.followers !== void 0 || user.public_repos !== void 0 ? /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsxs)("div", {
							className: "mt-3 flex flex-wrap gap-3 text-xs text-slate-400",
							children: [user.followers !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsxs)("span", {
								className: "flex items-center gap-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)(Users, { className: "w-3 h-3" }),
									/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("span", {
										className: "text-slate-600 font-medium",
										children: user.followers.toLocaleString()
									}),
									" followers"
								]
							}), user.public_repos !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsxs)("span", {
								className: "flex items-center gap-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)(BookOpen, { className: "w-3 h-3" }),
									/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("span", {
										className: "text-slate-600 font-medium",
										children: user.public_repos.toLocaleString()
									}),
									" repos"
								]
							})]
						}) : /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("p", {
							className: "mt-3 text-xs text-slate-400",
							children: "View full profile →"
						})
					]
				})]
			})
		})
	});
}
//#endregion
//#region components/EmptyState.tsx
function EmptyState({ query }) {
	return /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsxs)("div", {
		className: "text-center py-20",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("p", {
				className: "text-5xl mb-4",
				children: "🔍"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("p", {
				className: "text-xl font-semibold mb-2",
				children: "No results found"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsxs)("p", {
				className: "text-zinc-400",
				children: [
					"No GitHub users found for \"",
					query,
					"\". Try a different username."
				]
			})
		]
	});
}
//#endregion
//#region app/page.tsx
var page_exports$4 = /* @__PURE__ */ __exportAll({
	default: () => Home,
	metadata: () => metadata$3
});
var metadata$3 = {
	title: "GitHub User Explorer — Search",
	description: "Find any GitHub user and explore their profile, followers, and repositories.",
	openGraph: { images: [{ url: "/og-image.png" }] }
};
async function Home({ searchParams }) {
	const params = await searchParams;
	const query = typeof params.q === "string" ? params.q : Array.isArray(params.q) ? params.q[0] || "" : "";
	const page = typeof params.page === "string" ? Math.max(1, parseInt(params.page) || 1) : 1;
	let users = [];
	let totalCount = 0;
	let errorMessage = null;
	if (query.trim()) try {
		const result = await searchUsers(query, page);
		users = result?.items || [];
		totalCount = result?.total_count || 0;
	} catch (err) {
		console.error("GitHub API error:", err);
		errorMessage = "Failed to load users. GitHub might be rate-limited. Try again later.";
	}
	const totalPages = Math.ceil(Math.min(totalCount, 1e3) / 10);
	const hasPrev = page > 1;
	const hasNext = page < totalPages;
	return /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsxs)("div", {
		className: "max-w-7xl mx-auto px-6 py-16 sm:py-24",
		children: [
			!query && /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsxs)("section", {
				className: "text-center mb-14 animate-fade-up-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsxs)("div", {
						className: "inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-200 bg-blue-50 text-blue-700 text-xs font-medium mb-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("span", { className: "w-1.5 h-1.5 rounded-full bg-blue-500" }), "Powered by GitHub REST API"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsxs)("h1", {
						className: "text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-5 text-slate-900 leading-tight",
						children: ["Explore GitHub", /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("span", {
							className: "block text-blue-600",
							children: "Developers"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("p", {
						className: "text-lg text-slate-500 max-w-lg mx-auto leading-relaxed",
						children: "Search any developer on GitHub and explore their profile, repositories, and language breakdown."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("div", {
				className: `max-w-2xl mx-auto ${!query ? "animate-fade-up-2 mb-16" : "mb-10"}`,
				children: /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)(SearchInput_default, { defaultValue: query })
			}),
			query && /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("section", { children: errorMessage ? /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsxs)("div", {
				className: "text-center border border-red-200 bg-red-50 rounded-2xl p-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("p", {
					className: "text-red-600 mb-4",
					children: errorMessage
				}), /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)(link_default, {
					href: `/?q=${encodeURIComponent(query)}`,
					className: "px-5 py-2.5 rounded-xl bg-white border border-slate-200 hover:border-slate-300 transition text-sm font-medium text-slate-700 shadow-sm",
					children: "Retry"
				})]
			}) : /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsxs)(import_jsx_runtime_react_server.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsxs)("p", {
				className: "text-slate-400 mb-8 text-center text-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("span", {
						className: "text-blue-600 font-semibold",
						children: totalCount.toLocaleString()
					}),
					" results for",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsxs)("span", {
						className: "text-slate-700 font-medium",
						children: [
							"\"",
							query,
							"\""
						]
					})
				]
			}), users.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsxs)(import_jsx_runtime_react_server.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("div", {
				className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4",
				children: users.map((user) => /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)(UserCard, { user }, user.id))
			}), totalPages > 1 && /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsxs)("div", {
				className: "flex items-center justify-center gap-3 mt-12",
				children: [
					hasPrev ? /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsxs)(link_default, {
						href: `/?q=${encodeURIComponent(query)}&page=${page - 1}`,
						className: "flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white border border-slate-200 hover:border-blue-300 hover:text-blue-600 transition text-sm font-medium shadow-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)(ChevronLeft, { className: "w-4 h-4" }), " Previous"]
					}) : /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsxs)("span", {
						className: "flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-50 border border-slate-100 text-slate-300 text-sm cursor-not-allowed",
						children: [/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)(ChevronLeft, { className: "w-4 h-4" }), " Previous"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsxs)("span", {
						className: "text-slate-400 text-sm px-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("span", {
								className: "text-slate-700 font-semibold",
								children: page
							}),
							" of",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("span", {
								className: "text-slate-700 font-semibold",
								children: totalPages
							})
						]
					}),
					hasNext ? /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsxs)(link_default, {
						href: `/?q=${encodeURIComponent(query)}&page=${page + 1}`,
						className: "flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white border border-slate-200 hover:border-blue-300 hover:text-blue-600 transition text-sm font-medium shadow-sm",
						children: ["Next ", /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)(ChevronRight, { className: "w-4 h-4" })]
					}) : /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsxs)("span", {
						className: "flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-50 border border-slate-100 text-slate-300 text-sm cursor-not-allowed",
						children: ["Next ", /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)(ChevronRight, { className: "w-4 h-4" })]
					})
				]
			})] }) : /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)(EmptyState, { query })] }) })
		]
	});
}
//#endregion
//#region app/loading.tsx
var loading_exports$3 = /* @__PURE__ */ __exportAll({ default: () => Loading$1 });
function Loading$1() {
	return /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsxs)("div", {
		className: "max-w-7xl mx-auto px-6 py-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsxs)("div", {
				className: "text-center mb-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("div", { className: "h-16 sm:h-20 w-3/4 mx-auto bg-zinc-800 rounded-xl skeleton mb-4" }), /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("div", { className: "h-6 sm:h-8 w-1/2 mx-auto bg-zinc-800 rounded skeleton" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("div", { className: "h-12 w-full max-w-lg mx-auto bg-zinc-800 rounded-xl skeleton mb-16" }),
			/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("div", {
				className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8",
				children: Array.from({ length: 6 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsxs)("div", {
					className: "bg-zinc-900/80 rounded-xl overflow-hidden border border-zinc-800 shadow-lg",
					children: [/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("div", { className: "h-48 bg-zinc-800 skeleton" }), /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsxs)("div", {
						className: "p-5 sm:p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("div", { className: "h-6 w-3/4 bg-zinc-800 rounded skeleton mb-3" }),
							/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("div", { className: "h-4 w-2/3 bg-zinc-800 rounded skeleton mb-4" }),
							/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsxs)("div", {
								className: "flex gap-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("div", { className: "h-4 w-1/3 bg-zinc-800 rounded skeleton" }), /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("div", { className: "h-4 w-1/3 bg-zinc-800 rounded skeleton" })]
							})
						]
					})]
				}, i))
			})
		]
	});
}
//#endregion
//#region app/about/page.tsx
var page_exports$3 = /* @__PURE__ */ __exportAll({
	default: () => AboutPage,
	metadata: () => metadata$2
});
var metadata$2 = {
	title: "About — GitHub Explorer",
	description: "About this app"
};
function AboutPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsxs)("div", {
		className: "max-w-2xl mx-auto px-4 py-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("h1", {
				className: "text-4xl font-bold mb-6 text-slate-900",
				children: "About"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("p", {
				className: "text-slate-600 mb-4 leading-relaxed",
				children: "GitHub User Explorer is a Next.js application that lets you search for any GitHub user, explore their public repositories, view language breakdowns, and browse trending repositories across GitHub."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("p", {
				className: "text-slate-600 mb-4 leading-relaxed",
				children: "Built with Next.js 14 App Router, TypeScript, and Tailwind CSS. Data is fetched from the GitHub REST API with ISR caching for optimal performance."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("h2", {
				className: "text-xl font-bold mt-10 mb-4 text-slate-900",
				children: "Tech Stack"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("div", {
				className: "space-y-3",
				children: [
					{
						icon: "⚡",
						label: "Next.js 16 (App Router)"
					},
					{
						icon: "🔷",
						label: "TypeScript (strict mode)"
					},
					{
						icon: "🎨",
						label: "Tailwind CSS"
					},
					{
						icon: "🐙",
						label: "GitHub REST API"
					},
					{
						icon: "🚀",
						label: "Deployed on Vercel"
					}
				].map(({ icon, label }) => /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsxs)("div", {
					className: "flex items-center gap-3 bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-700 text-sm shadow-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("span", { children: icon }),
						" ",
						label
					]
				}, label))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)(link_default, {
				href: "/",
				className: "inline-flex items-center gap-2 mt-10 text-slate-400 hover:text-blue-600 transition text-sm",
				children: "← Back to Search"
			})
		]
	});
}
//#endregion
//#region app/about/loading.tsx
var loading_exports$2 = /* @__PURE__ */ __exportAll({ default: () => Loading });
function Loading() {
	return /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsxs)("div", {
		className: "max-w-5xl mx-auto px-6 py-16 animate-pulse",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("div", { className: "h-10 bg-zinc-800 rounded w-1/3 mx-auto mb-6" }),
			/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("div", { className: "h-4 bg-zinc-800 rounded w-2/3 mx-auto mb-16" }),
			/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("div", {
				className: "grid md:grid-cols-2 gap-8 mb-16",
				children: [
					1,
					2,
					3,
					4
				].map((item) => /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsxs)("div", {
					className: "bg-zinc-900 border border-zinc-800 rounded-2xl p-6 space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("div", { className: "h-6 w-40 bg-zinc-800 rounded" }),
						/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("div", { className: "h-4 w-full bg-zinc-800 rounded" }),
						/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("div", { className: "h-4 w-5/6 bg-zinc-800 rounded" })
					]
				}, item))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("div", {
				className: "flex flex-wrap justify-center gap-4",
				children: [
					1,
					2,
					3,
					4
				].map((item) => /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("div", { className: "h-10 w-28 bg-zinc-800 rounded-xl" }, item))
			})
		]
	});
}
//#endregion
//#region app/bookmarks/BookmarksClient.tsx
var BookmarksClient_default = /* @__PURE__ */ registerClientReference(() => {
	throw new Error("Unexpectedly client reference export 'default' is called on server");
}, "cbd92ab4df0f", "default");
//#endregion
//#region app/bookmarks/page.tsx
var page_exports$2 = /* @__PURE__ */ __exportAll({
	default: () => BookmarksPage,
	metadata: () => metadata$1
});
var metadata$1 = {
	title: "Bookmarks — GitHub Explorer",
	description: "Your saved GitHub users and repositories"
};
function BookmarksPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)(BookmarksClient_default, {});
}
//#endregion
//#region app/trending/page.tsx
var page_exports$1 = /* @__PURE__ */ __exportAll({
	default: () => TrendingPage,
	metadata: () => metadata
});
var metadata = {
	title: "Trending Repositories — GitHub Explorer",
	description: "Top starred GitHub repositories right now",
	openGraph: { images: [{ url: "/og-image.png" }] }
};
async function TrendingPage() {
	let repos = [];
	try {
		repos = (await getTrendingRepos())?.items || [];
	} catch {
		return /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("div", {
			className: "text-center py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("p", {
				className: "text-red-500",
				children: "Failed to load trending repos. Try again later."
			})
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsxs)("div", {
		className: "max-w-5xl mx-auto px-4 py-10",
		children: [/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsxs)("div", {
			className: "mb-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("h1", {
				className: "text-3xl font-bold mb-2 text-slate-900",
				children: "Trending Repositories"
			}), /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("p", {
				className: "text-slate-500",
				children: "Most starred GitHub repositories right now"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("div", {
			className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
			children: repos.map((repo) => /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsxs)("a", {
				href: repo.html_url,
				target: "_blank",
				rel: "noopener noreferrer",
				className: "bg-white border border-slate-200 rounded-2xl p-6 hover:border-blue-300 hover:shadow-md transition-all duration-200 flex flex-col gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsxs)("div", {
						className: "flex items-start justify-between gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsxs)("div", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("p", {
								className: "text-xs text-slate-400 mb-1",
								children: repo.owner?.login
							}), /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("h3", {
								className: "font-semibold text-slate-900 truncate",
								children: repo.name
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)(ExternalLink, { className: "w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5" })]
					}),
					repo.description && /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("p", {
						className: "text-sm text-slate-500 line-clamp-2 leading-relaxed",
						children: repo.description
					}),
					/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsxs)("div", {
						className: "flex items-center gap-4 text-xs text-slate-400 mt-auto",
						children: [
							repo.language && /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsxs)("span", {
								className: "flex items-center gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("span", { className: "w-2.5 h-2.5 rounded-full bg-blue-400" }), repo.language]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsxs)("span", {
								className: "flex items-center gap-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)(Star, { className: "w-3.5 h-3.5" }),
									" ",
									repo.stargazers_count.toLocaleString()
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsxs)("span", {
								className: "flex items-center gap-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)(GitFork, { className: "w-3.5 h-3.5" }),
									" ",
									repo.forks_count.toLocaleString()
								]
							})
						]
					}),
					repo.topics?.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("div", {
						className: "flex flex-wrap gap-1.5",
						children: repo.topics.slice(0, 3).map((topic) => /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("span", {
							className: "px-2 py-0.5 rounded-full bg-blue-50 text-blue-600 text-xs border border-blue-100",
							children: topic
						}, topic))
					})
				]
			}, repo.id))
		})]
	});
}
//#endregion
//#region app/trending/loading.tsx
var loading_exports$1 = /* @__PURE__ */ __exportAll({ default: () => TrendingLoading });
function TrendingLoading() {
	return /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsxs)("div", {
		className: "max-w-5xl mx-auto px-4 py-10",
		children: [/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("div", { className: "h-8 w-48 bg-zinc-800 rounded-xl mb-8 animate-pulse" }), /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("div", {
			className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
			children: Array.from({ length: 6 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsxs)("div", {
				className: "bg-zinc-900 border border-zinc-800 rounded-2xl p-6 animate-pulse",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("div", { className: "h-5 w-3/4 bg-zinc-800 rounded mb-3" }),
					/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("div", { className: "h-4 w-full bg-zinc-800 rounded mb-2" }),
					/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("div", { className: "h-4 w-2/3 bg-zinc-800 rounded" })
				]
			}, i))
		})]
	});
}
//#endregion
//#region app/users/[username]/page.tsx
var page_exports = /* @__PURE__ */ __exportAll({
	default: () => UserPage,
	generateMetadata: () => generateMetadata
});
async function generateMetadata({ params }) {
	const { username } = await params;
	try {
		const user = await getUser(username);
		return {
			title: `${user.name ?? user.login} (@${user.login}) — GitHub`,
			description: user.bio ?? `GitHub profile of ${user.login}`,
			openGraph: { images: [{ url: user.avatar_url }] }
		};
	} catch {
		return { title: "User not found — GitHub Explorer" };
	}
}
async function UserPage({ params }) {
	const { username } = await params;
	let user;
	let repos = [];
	try {
		user = await getUser(username);
	} catch {
		notFound();
	}
	try {
		repos = await getUserRepos(username);
	} catch {
		repos = [];
	}
	const topRepos = repos.filter((r) => !r.fork).sort((a, b) => b.stargazers_count - a.stargazers_count).slice(0, 6);
	const totalStars = repos.reduce((sum, r) => sum + r.stargazers_count, 0);
	const memberSince = new Date(user.created_at).toLocaleDateString("en-US", {
		month: "short",
		year: "numeric"
	});
	return /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsxs)("div", {
		className: "max-w-5xl mx-auto px-4 py-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsxs)(link_default, {
				href: "/",
				className: "inline-flex items-center gap-2 text-slate-400 hover:text-blue-600 transition mb-10 text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)(ArrowLeft, { className: "w-4 h-4" }), " Back to search"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("div", {
				className: "bg-white border border-slate-200 rounded-3xl p-8 sm:p-10 mb-6 shadow-sm",
				children: /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsxs)("div", {
					className: "flex flex-col sm:flex-row items-start sm:items-center gap-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)(Image, {
							src: user.avatar_url,
							alt: user.login,
							width: 110,
							height: 110,
							priority: true,
							className: "rounded-2xl flex-shrink-0 ring-2 ring-slate-200"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsxs)("div", {
							className: "flex-1 min-w-0",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("h1", {
									className: "text-3xl font-bold mb-1 text-slate-900",
									children: user.name || user.login
								}),
								/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsxs)("p", {
									className: "text-slate-500 text-lg mb-1",
									children: ["@", user.login]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsxs)("p", {
									className: "text-slate-400 text-xs mb-3 flex items-center gap-1.5",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)(Calendar, { className: "w-3.5 h-3.5" }),
										" Member since ",
										memberSince
									]
								}),
								user.bio && /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("p", {
									className: "text-slate-600 text-base mb-4 leading-relaxed",
									children: user.bio
								}),
								/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsxs)("div", {
									className: "flex flex-wrap gap-4 text-sm text-slate-500",
									children: [
										user.location && /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsxs)("span", {
											className: "flex items-center gap-1.5",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)(MapPin, { className: "w-4 h-4" }),
												" ",
												user.location
											]
										}),
										user.company && /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsxs)("span", {
											className: "flex items-center gap-1.5",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)(Building2, { className: "w-4 h-4" }),
												" ",
												user.company
											]
										}),
										user.blog && /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsxs)("a", {
											href: user.blog.startsWith("http") ? user.blog : `https://${user.blog}`,
											target: "_blank",
											rel: "noopener noreferrer",
											className: "flex items-center gap-1.5 hover:text-blue-600 transition",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)(Link2, { className: "w-4 h-4" }),
												" ",
												user.blog
											]
										})
									]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsxs)("div", {
							className: "flex flex-col gap-3 flex-shrink-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsxs)("a", {
								href: user.html_url,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 text-white text-sm font-medium hover:bg-slate-700 transition",
								children: [/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)(ExternalLink, { className: "w-4 h-4" }), " GitHub Profile"]
							}), /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)(BookmarkButton_default, { bookmark: {
								type: "user",
								id: user.id,
								login: user.login,
								avatar_url: user.avatar_url,
								html_url: user.html_url
							} })]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("div", {
				className: "grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6",
				children: [
					{
						label: "Followers",
						value: user.followers?.toLocaleString() ?? "0",
						icon: /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)(Users, { className: "w-4 h-4" })
					},
					{
						label: "Following",
						value: user.following?.toLocaleString() ?? "0",
						icon: /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)(Users, { className: "w-4 h-4" })
					},
					{
						label: "Repositories",
						value: user.public_repos?.toLocaleString() ?? "0",
						icon: /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)(BookOpen, { className: "w-4 h-4" })
					},
					{
						label: "Total Stars",
						value: totalStars.toLocaleString(),
						icon: /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)(Star, { className: "w-4 h-4" })
					}
				].map(({ label, value, icon }) => /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsxs)("div", {
					className: "bg-white border border-slate-200 rounded-2xl p-5 text-center shadow-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsxs)("div", {
						className: "flex items-center justify-center gap-1.5 text-slate-400 text-xs mb-2",
						children: [
							icon,
							" ",
							label
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("p", {
						className: "text-2xl font-bold text-slate-900",
						children: value
					})]
				}, label))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsxs)(link_default, {
				href: `/users/${username}/repos`,
				className: "flex items-center justify-center gap-2 w-full py-3 rounded-2xl bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition mb-8 shadow-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)(BookOpen, { className: "w-4 h-4" }), " View All Repositories"]
			}),
			topRepos.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("h2", {
				className: "text-xl font-bold mb-4 text-slate-900",
				children: "Top Repositories"
			}), /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("div", {
				className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
				children: topRepos.map((repo) => /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsxs)(link_default, {
					href: `/users/${username}/repos/${repo.name}`,
					className: "bg-white border border-slate-200 rounded-2xl p-6 hover:border-blue-300 hover:shadow-md transition-all duration-200 flex flex-col gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsxs)("div", {
							className: "flex items-start justify-between gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("h3", {
								className: "font-semibold text-slate-900 truncate",
								children: repo.name
							}), /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)(ExternalLink, { className: "w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5" })]
						}),
						repo.description && /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("p", {
							className: "text-sm text-slate-500 line-clamp-2 leading-relaxed",
							children: repo.description
						}),
						/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsxs)("div", {
							className: "flex items-center gap-4 text-xs text-slate-400 mt-auto",
							children: [
								repo.language && /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsxs)("span", {
									className: "flex items-center gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("span", { className: "w-2.5 h-2.5 rounded-full bg-blue-400" }), repo.language]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsxs)("span", {
									className: "flex items-center gap-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)(Star, { className: "w-3.5 h-3.5" }),
										" ",
										repo.stargazers_count.toLocaleString()
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsxs)("span", {
									className: "flex items-center gap-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)(GitFork, { className: "w-3.5 h-3.5" }),
										" ",
										repo.forks_count.toLocaleString()
									]
								})
							]
						}),
						repo.topics?.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("div", {
							className: "flex flex-wrap gap-1.5",
							children: repo.topics.slice(0, 3).map((topic) => /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("span", {
								className: "px-2 py-0.5 rounded-full bg-blue-50 text-blue-600 text-xs border border-blue-100",
								children: topic
							}, topic))
						})
					]
				}, repo.id))
			})] })
		]
	});
}
//#endregion
//#region app/users/[username]/loading.tsx
var loading_exports = /* @__PURE__ */ __exportAll({ default: () => UserLoading });
function UserLoading() {
	return /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsxs)("div", {
		className: "max-w-5xl mx-auto px-4 py-10 animate-pulse",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("div", { className: "h-4 w-28 bg-zinc-800 rounded mb-10" }),
			/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("div", {
				className: "bg-zinc-900 border border-zinc-800 rounded-3xl p-8 sm:p-10 mb-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsxs)("div", {
					className: "flex flex-col sm:flex-row items-start sm:items-center gap-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("div", { className: "w-28 h-28 rounded-2xl bg-zinc-800 flex-shrink-0" }),
						/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsxs)("div", {
							className: "flex-1 min-w-0 w-full",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("div", { className: "h-8 w-48 bg-zinc-800 rounded mb-2" }),
								/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("div", { className: "h-5 w-32 bg-zinc-800 rounded mb-2" }),
								/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("div", { className: "h-3 w-24 bg-zinc-800 rounded mb-4" }),
								/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("div", { className: "h-4 w-full bg-zinc-800 rounded mb-2" }),
								/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("div", { className: "h-4 w-3/4 bg-zinc-800 rounded mb-4" }),
								/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsxs)("div", {
									className: "flex gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("div", { className: "h-4 w-24 bg-zinc-800 rounded" }), /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("div", { className: "h-4 w-24 bg-zinc-800 rounded" })]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsxs)("div", {
							className: "flex flex-col gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("div", { className: "h-10 w-36 bg-zinc-800 rounded-xl" }), /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("div", { className: "h-10 w-36 bg-zinc-800 rounded-xl" })]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("div", {
				className: "grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6",
				children: Array.from({ length: 4 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("div", { className: "bg-zinc-900 border border-zinc-800 rounded-2xl p-5 h-24" }, i))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("div", { className: "h-12 w-full bg-zinc-800 rounded-2xl mb-8" }),
			/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("div", { className: "h-6 w-48 bg-zinc-800 rounded mb-4" }),
			/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("div", {
				className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
				children: Array.from({ length: 4 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsxs)("div", {
					className: "bg-zinc-900 border border-zinc-800 rounded-2xl p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("div", { className: "h-5 w-3/4 bg-zinc-800 rounded mb-3" }),
						/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("div", { className: "h-4 w-full bg-zinc-800 rounded mb-2" }),
						/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("div", { className: "h-4 w-2/3 bg-zinc-800 rounded mb-4" }),
						/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsxs)("div", {
							className: "flex gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("div", { className: "h-3 w-16 bg-zinc-800 rounded" }), /* @__PURE__ */ (0, import_jsx_runtime_react_server.jsx)("div", { className: "h-3 w-16 bg-zinc-800 rounded" })]
						})
					]
				}, i))
			})
		]
	});
}
//#endregion
//#region app/users/[username]/error.tsx
var error_exports = /* @__PURE__ */ __exportAll({ default: () => error_default });
var error_default = /* @__PURE__ */ registerClientReference(() => {
	throw new Error("Unexpectedly client reference export 'default' is called on server");
}, "56bba47f6a03", "default");
//#endregion
//#region \0virtual:vinext-rsc-entry
function renderToReadableStream(model, options) {
	const _hlFixRe = /(\d+:HL\[.*?),"stylesheet"(\]|,)/g;
	const stream = renderToReadableStream$1(model, options);
	const decoder = new TextDecoder();
	const encoder = new TextEncoder();
	let carry = "";
	return stream.pipeThrough(new TransformStream({
		transform(chunk, controller) {
			const text = carry + decoder.decode(chunk, { stream: true });
			const lastNl = text.lastIndexOf("\n");
			if (lastNl === -1) {
				carry = text;
				return;
			}
			carry = text.slice(lastNl + 1);
			controller.enqueue(encoder.encode(text.slice(0, lastNl + 1).replace(_hlFixRe, "$1,\"style\"$2")));
		},
		flush(controller) {
			const text = carry + decoder.decode();
			if (text) controller.enqueue(encoder.encode(text.replace(_hlFixRe, "$1,\"style\"$2")));
		}
	}));
}
function _getSSRFontStyles() {
	return [...getSSRFontStyles$1(), ...getSSRFontStyles()];
}
function _getSSRFontPreloads() {
	return [...getSSRFontPreloads$1(), ...getSSRFontPreloads()];
}
var ROUTE_HANDLER_HTTP_METHODS = [
	"GET",
	"HEAD",
	"POST",
	"PUT",
	"DELETE",
	"PATCH",
	"OPTIONS"
];
function collectRouteHandlerMethods(handler) {
	const methods = ROUTE_HANDLER_HTTP_METHODS.filter((method) => typeof handler[method] === "function");
	if (methods.includes("GET") && !methods.includes("HEAD")) methods.push("HEAD");
	return methods;
}
function buildRouteHandlerAllowHeader(exportedMethods) {
	const allow = new Set(exportedMethods);
	allow.add("OPTIONS");
	return Array.from(allow).sort().join(", ");
}
var _suppressHookWarningAls = new AsyncLocalStorage$1();
var _origConsoleError = console.error;
console.error = (...args) => {
	if (_suppressHookWarningAls.getStore() === true && typeof args[0] === "string" && args[0].includes("Invalid hook call")) return;
	_origConsoleError.apply(console, args);
};
function setNavigationContext(ctx) {
	setNavigationContext$1(ctx);
}
async function __isrGet(key) {
	const result = await getCacheHandler().get(key);
	if (!result || !result.value) return null;
	return {
		value: result,
		isStale: result.cacheState === "stale"
	};
}
async function __isrSet(key, data, revalidateSeconds, tags) {
	await getCacheHandler().set(key, data, {
		revalidate: revalidateSeconds,
		tags: Array.isArray(tags) ? tags : []
	});
}
function __pageCacheTags(pathname, extraTags) {
	const tags = [pathname, "_N_T_" + pathname];
	tags.push("_N_T_/layout");
	const segments = pathname.split("/");
	let built = "";
	for (let i = 1; i < segments.length; i++) if (segments[i]) {
		built += "/" + segments[i];
		tags.push("_N_T_" + built + "/layout");
	}
	tags.push("_N_T_" + built + "/page");
	if (Array.isArray(extraTags)) {
		for (const tag of extraTags) if (!tags.includes(tag)) tags.push(tag);
	}
	return tags;
}
var __pendingRegenerations = /* @__PURE__ */ new Map();
function __triggerBackgroundRegeneration(key, renderFn) {
	if (__pendingRegenerations.has(key)) return;
	const promise = renderFn().catch((err) => console.error("[vinext] ISR regen failed for " + key + ":", err)).finally(() => __pendingRegenerations.delete(key));
	__pendingRegenerations.set(key, promise);
	const ctx = getRequestExecutionContext();
	if (ctx && typeof ctx.waitUntil === "function") ctx.waitUntil(promise);
}
function __isrFnv1a64(s) {
	let h1 = 2166136261;
	for (let i = 0; i < s.length; i++) {
		h1 ^= s.charCodeAt(i);
		h1 = h1 * 16777619 >>> 0;
	}
	let h2 = 84696351;
	for (let i = 0; i < s.length; i++) {
		h2 ^= s.charCodeAt(i);
		h2 = h2 * 16777619 >>> 0;
	}
	return h1.toString(36) + h2.toString(36);
}
function __isrCacheKey(pathname, suffix) {
	const normalized = pathname === "/" ? "/" : pathname.replace(/\/$/, "");
	const prefix = "app:aa18f50b-740e-4037-827a-4f4b485ed9bd";
	const key = prefix + ":" + normalized + ":" + suffix;
	if (key.length <= 200) return key;
	return prefix + ":__hash:" + __isrFnv1a64(normalized) + ":" + suffix;
}
function __isrHtmlKey(pathname) {
	return __isrCacheKey(pathname, "html");
}
function __isrRscKey(pathname) {
	return __isrCacheKey(pathname, "rsc");
}
function __isrRouteKey(pathname) {
	return __isrCacheKey(pathname, "route");
}
var __isrDebug = process.env.NEXT_PRIVATE_DEBUG_CACHE ? console.debug.bind(console, "[vinext] ISR:") : void 0;
function makeThenableParams(obj) {
	const plain = { ...obj };
	return Object.assign(Promise.resolve(plain), plain);
}
function __resolveChildSegments(routeSegments, treePosition, params) {
	var raw = routeSegments.slice(treePosition);
	var result = [];
	for (var j = 0; j < raw.length; j++) {
		var seg = raw[j];
		if (seg.indexOf("[[...") === 0 && seg.charAt(seg.length - 1) === "]" && seg.charAt(seg.length - 2) === "]") {
			var v = params[seg.slice(5, -2)];
			if (Array.isArray(v) && v.length === 0) continue;
			if (v == null) continue;
			result.push(Array.isArray(v) ? v.join("/") : v);
		} else if (seg.indexOf("[...") === 0 && seg.charAt(seg.length - 1) === "]") {
			var v2 = params[seg.slice(4, -1)];
			result.push(Array.isArray(v2) ? v2.join("/") : v2 || seg);
		} else if (seg.charAt(0) === "[" && seg.charAt(seg.length - 1) === "]" && seg.indexOf(".") === -1) {
			var pn3 = seg.slice(1, -1);
			result.push(params[pn3] || seg);
		} else result.push(seg);
	}
	return result;
}
function __errorDigest(str) {
	let hash = 5381;
	for (let i = str.length - 1; i >= 0; i--) hash = hash * 33 ^ str.charCodeAt(i);
	return (hash >>> 0).toString();
}
function __sanitizeErrorForClient(error) {
	if (error && typeof error === "object" && "digest" in error) {
		const digest = String(error.digest);
		if (digest.startsWith("NEXT_REDIRECT;") || digest === "NEXT_NOT_FOUND" || digest.startsWith("NEXT_HTTP_ERROR_FALLBACK;")) return error;
	}
	const msg = error instanceof Error ? error.message : String(error);
	const stack = error instanceof Error ? error.stack || "" : "";
	const sanitized = /* @__PURE__ */ new Error("An error occurred in the Server Components render. The specific message is omitted in production builds to avoid leaking sensitive details. A digest property is included on this error instance which may provide additional details about the nature of the error.");
	sanitized.digest = __errorDigest(msg + stack);
	return sanitized;
}
function rscOnError(error, requestInfo, errorContext) {
	if (error && typeof error === "object" && "digest" in error) return String(error.digest);
	if (requestInfo && errorContext && error) reportRequestError(error instanceof Error ? error : new Error(String(error)), requestInfo, errorContext);
	if (error) return __errorDigest((error instanceof Error ? error.message : String(error)) + (error instanceof Error ? error.stack || "" : ""));
}
function createRscOnErrorHandler(request, pathname, routePath) {
	const requestInfo = {
		path: pathname,
		method: request.method,
		headers: Object.fromEntries(request.headers.entries())
	};
	const errorContext = {
		routerKind: "App Router",
		routePath: routePath || pathname,
		routeType: "render"
	};
	return function(error) {
		return rscOnError(error, requestInfo, errorContext);
	};
}
var routes = [
	{
		pattern: "/users/:username/repos",
		patternParts: [
			"users",
			":username",
			"repos"
		],
		isDynamic: true,
		params: ["username"],
		page: page_exports$6,
		routeHandler: null,
		layouts: [layout_exports],
		routeSegments: [
			"users",
			"[username]",
			"repos"
		],
		layoutTreePositions: [0],
		templates: [],
		errors: [error_exports$2],
		slots: {},
		loading: loading_exports$5,
		error: error_exports$3,
		notFound: null,
		notFounds: [null],
		forbidden: null,
		unauthorized: null
	},
	{
		pattern: "/users/:username/repos/:repo",
		patternParts: [
			"users",
			":username",
			"repos",
			":repo"
		],
		isDynamic: true,
		params: ["username", "repo"],
		page: page_exports$5,
		routeHandler: null,
		layouts: [layout_exports],
		routeSegments: [
			"users",
			"[username]",
			"repos",
			"[repo]"
		],
		layoutTreePositions: [0],
		templates: [],
		errors: [error_exports$2],
		slots: {},
		loading: loading_exports$4,
		error: error_exports$1,
		notFound: null,
		notFounds: [null],
		forbidden: null,
		unauthorized: null
	},
	{
		pattern: "/",
		patternParts: [],
		isDynamic: false,
		params: [],
		page: page_exports$4,
		routeHandler: null,
		layouts: [layout_exports],
		routeSegments: [],
		layoutTreePositions: [0],
		templates: [],
		errors: [error_exports$2],
		slots: {},
		loading: loading_exports$3,
		error: error_exports$2,
		notFound: null,
		notFounds: [null],
		forbidden: null,
		unauthorized: null
	},
	{
		pattern: "/about",
		patternParts: ["about"],
		isDynamic: false,
		params: [],
		page: page_exports$3,
		routeHandler: null,
		layouts: [layout_exports],
		routeSegments: ["about"],
		layoutTreePositions: [0],
		templates: [],
		errors: [error_exports$2],
		slots: {},
		loading: loading_exports$2,
		error: null,
		notFound: null,
		notFounds: [null],
		forbidden: null,
		unauthorized: null
	},
	{
		pattern: "/bookmarks",
		patternParts: ["bookmarks"],
		isDynamic: false,
		params: [],
		page: page_exports$2,
		routeHandler: null,
		layouts: [layout_exports],
		routeSegments: ["bookmarks"],
		layoutTreePositions: [0],
		templates: [],
		errors: [error_exports$2],
		slots: {},
		loading: null,
		error: null,
		notFound: null,
		notFounds: [null],
		forbidden: null,
		unauthorized: null
	},
	{
		pattern: "/trending",
		patternParts: ["trending"],
		isDynamic: false,
		params: [],
		page: page_exports$1,
		routeHandler: null,
		layouts: [layout_exports],
		routeSegments: ["trending"],
		layoutTreePositions: [0],
		templates: [],
		errors: [error_exports$2],
		slots: {},
		loading: loading_exports$1,
		error: null,
		notFound: null,
		notFounds: [null],
		forbidden: null,
		unauthorized: null
	},
	{
		pattern: "/users/:username",
		patternParts: ["users", ":username"],
		isDynamic: true,
		params: ["username"],
		page: page_exports,
		routeHandler: null,
		layouts: [layout_exports],
		routeSegments: ["users", "[username]"],
		layoutTreePositions: [0],
		templates: [],
		errors: [error_exports$2],
		slots: {},
		loading: loading_exports,
		error: error_exports,
		notFound: null,
		notFounds: [null],
		forbidden: null,
		unauthorized: null
	}
];
var _routeTrie = buildRouteTrie(routes);
var metadataRoutes = [{
	type: "favicon",
	isDynamic: false,
	servedUrl: "/favicon.ico",
	contentType: "image/x-icon",
	fileDataBase64: "AAABAAQAEBAAAAEAIAAoBQAARgAAACAgAAABACAAKBQAAG4FAAAwMAAAAQAgACgtAACWGQAAAAAAAAEAIACNHgAAvkYAACgAAAAQAAAAIAAAAAEAIAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACQAAABdAAAAugAAALoAAABdAAAAJAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAKAAAADyAAAA/wAAAP8AAAD/AAAA/wAAAPIAAACgAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAOAAAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAOAAAAA4AAAAAAAAAAAAAAAAAAAAHwAAAOIAAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA4gAAAB8AAAAAAAAAAAAAAKEAAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAChAAAAAAAAACMAAAD0AAAA/wAAAP9PT0//rq6u/6urq/+rq6v/q6ur/6urq/+tra3/Z2dn/wAAAP8AAAD/AAAA9AAAACMAAABZAAAA/wAAAP8AAAD/Hx8f/+3t7f///////////////////////f39/zU1Nf8AAAD/AAAA/wAAAP8AAABZAAAAuwAAAP8AAAD/AAAA/wAAAP9ra2v//////////////////////46Ojv8AAAD/AAAA/wAAAP8AAAD/AAAAuwAAALsAAAD/AAAA/wAAAP8AAAD/CQkJ/83Nzf///////////+Tk5P8YGBj/AAAA/wAAAP8AAAD/AAAA/wAAALsAAABZAAAA/wAAAP8AAAD/AAAA/wAAAP9KSkr//f39//////9ra2v/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAABZAAAAIwAAAPQAAAD/AAAA/wAAAP8AAAD/AQEB/7a2tv/V1dX/CQkJ/wAAAP8AAAD/AAAA/wAAAP8AAAD0AAAAIwAAAAAAAAChAAAA/wAAAP8AAAD/AAAA/wAAAP8xMTH/RERE/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAAoQAAAAAAAAAAAAAAHwAAAOIAAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA4gAAAB8AAAAAAAAAAAAAAAAAAAA4AAAA4AAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA4AAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAACgAAAA8gAAAP8AAAD/AAAA/wAAAP8AAADyAAAAoAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACQAAABdAAAAugAAALoAAABdAAAAJAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACgAAAAgAAAAQAAAAAEAIAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYAAAAsAAAAVQAAAIEAAADoAAAA6AAAAIEAAABVAAAALAAAAAYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACoAAACFAAAA0gAAAPkAAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD5AAAA0gAAAIUAAAAqAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAAACWAAAA8wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAPMAAACWAAAAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABRAAAA4QAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAADhAAAAUQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcgAAAPsAAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD7AAAAcgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHIAAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAAcgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABPAAAA+wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD7AAAATwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGwAAAOQAAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAADjAAAAGwAAAAAAAAAAAAAAAAAAAAAAAACXAAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAACXAAAAAAAAAAAAAAAAAAAAKAAAAPUAAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAPQAAAAnAAAAAAAAAAAAAACGAAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/ODg4/4uLi/+IiIj/iIiI/4iIiP+IiIj/iIiI/4iIiP+IiIj/iIiI/4iIiP+IiIj/iIiI/4iIiP+JiYn/X19f/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAIYAAAAAAAAABwAAANQAAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8eHh7/7u7u//////////////////////////////////////////////////////////////////////9TU1P/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA1AAAAAcAAAArAAAA+gAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP9oaGj/////////////////////////////////////////////////////////////////rq6u/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD6AAAAKwAAAFQAAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wgICP/Ly8v///////////////////////////////////////////////////////T09P8sLCz/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAABUAAAAggAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/0dHR//9/f3/////////////////////////////////////////////////jY2N/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAIEAAADpAAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/62trf///////////////////////////////////////////+Tk5P8XFxf/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA6QAAAOkAAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/Kysr//Pz8///////////////////////////////////////ampq/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAADpAAAAgQAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/i4uL/////////////////////////////////8zMzP8ICAj/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAIIAAABUAAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8WFhb/4+Pj///////////////////////9/f3/SUlJ/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAAVAAAACsAAAD6AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP9oaGj//////////////////////6+vr/8BAQH/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAPoAAAArAAAABwAAANQAAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wgICP/Ly8v////////////09PT/LCws/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA1AAAAAcAAAAAAAAAhgAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/0dHR//9/f3//////42Njf8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAACGAAAAAAAAAAAAAAAnAAAA9AAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/7Gxsf/s7Oz/FxcX/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA9QAAACgAAAAAAAAAAAAAAAAAAACXAAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/MzMz/19fX/8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAACXAAAAAAAAAAAAAAAAAAAAAAAAABoAAADjAAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA5AAAABsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE8AAAD7AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAPsAAABPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHIAAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAAcgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHIAAAD7AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA+wAAAHIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFEAAADhAAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAOEAAABRAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAAACWAAAA8wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAPMAAACWAAAAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAqAAAAhQAAANIAAAD5AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA+QAAANIAAACFAAAAKgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABgAAACwAAABVAAAAgQAAAOgAAADoAAAAgQAAAFUAAAAsAAAABgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACgAAAAwAAAAYAAAAAEAIAAAAAAAAC0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJAAAAKAAAAEwAAABqAAAAswAAAPgAAAD3AAAAswAAAGoAAABLAAAAKAAAAAkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATAAAAVgAAAKAAAADYAAAA+AAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA+AAAANgAAACgAAAAVQAAABMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJQAAAIsAAADhAAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAOEAAACLAAAAJgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABYAAACLAAAA7wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA7wAAAIsAAAAWAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUQAAANwAAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAADcAAAAUgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYAAACKAAAA/gAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/gAAAIoAAAAGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwAAAK0AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAACtAAAADwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPAAAAuAAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAAuAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYAAACuAAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAK4AAAAGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIoAAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAACKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAP0AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD9AAAATwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVAAAA3wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA3wAAABUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACLAAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAIsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACMAAADxAAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAPEAAAAjAAAAAAAAAAAAAAAAAAAAAAAAAIwAAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAACLAAAAAAAAAAAAAAAAAAAAEQAAAOQAAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8kJCT/aGho/2VlZf9lZWX/ZWVl/2VlZf9lZWX/ZWVl/2VlZf9lZWX/ZWVl/2VlZf9lZWX/ZWVl/2VlZf9lZWX/ZWVl/2VlZf9lZWX/ZWVl/2VlZf9lZWX/ZWVl/1BQUP8BAQH/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAADkAAAAEQAAAAAAAAAAAAAAVQAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8cHBz/6+vr/////////////////////////////////////////////////////////////////////////////////////////////////////////////////3Nzc/8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAAVQAAAAAAAAAAAAAAoQAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/ZWVl////////////////////////////////////////////////////////////////////////////////////////////////////////////zMzM/wgICP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAAoQAAAAAAAAAJAAAA2gAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/BwcH/8nJyf/////////////////////////////////////////////////////////////////////////////////////////////////9/f3/SEhI/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA2gAAAAkAAAAoAAAA+QAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/0VFRf/8/Pz///////////////////////////////////////////////////////////////////////////////////////////+urq7/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA+AAAACgAAABLAAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP+qqqr///////////////////////////////////////////////////////////////////////////////////////T09P8sLCz/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAEwAAABqAAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8pKSn/8vLy/////////////////////////////////////////////////////////////////////////////////4yMjP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAGoAAAC0AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/iIiI////////////////////////////////////////////////////////////////////////////4+Pj/xYWFv8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAALMAAAD4AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/FBQU/+Hh4f//////////////////////////////////////////////////////////////////////aWlp/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAPgAAAD4AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/2VlZf/////////////////////////////////////////////////////////////////Ly8v/CAgI/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAPgAAACzAAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wcHB//Jycn///////////////////////////////////////////////////////39/f9ISEj/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAALQAAABqAAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP9FRUX//Pz8/////////////////////////////////////////////////66urv8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAGoAAABMAAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/qqqq////////////////////////////////////////////9PT0/ywsLP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAEsAAAAoAAAA+AAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/KSkp//Ly8v//////////////////////////////////////jIyM/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA+QAAACgAAAAJAAAA2gAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/4iIiP/////////////////////////////////j4+P/FhYW/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA2gAAAAkAAAAAAAAAoQAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/xQUFP/h4eH///////////////////////////9paWn/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAAoQAAAAAAAAAAAAAAVQAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP9lZWX//////////////////////8zMzP8ICAj/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAAVQAAAAAAAAAAAAAAEQAAAOQAAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8HBwf/ycnJ/////////////f39/0hISP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAADkAAAAEQAAAAAAAAAAAAAAAAAAAIsAAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/RUVF//z8/P//////rq6u/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAACMAAAAAAAAAAAAAAAAAAAAAAAAACMAAADxAAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/6ysrP/7+/v/LCws/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAPEAAAAjAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACLAAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/zIyMv99fX3/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAIsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVAAAA3wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA3wAAABUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATwAAAP0AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD9AAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIoAAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAACKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYAAACuAAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAK4AAAAGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAuAAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAAuAAAAA8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwAAAK0AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAACtAAAADwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYAAACKAAAA/gAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/gAAAIoAAAAGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUgAAANwAAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAADcAAAAUQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABYAAACLAAAA7wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA7wAAAIsAAAAWAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJgAAAIsAAADhAAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAOEAAACLAAAAJQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATAAAAVQAAAKAAAADYAAAA+AAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA+AAAANgAAACgAAAAVgAAABMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJAAAAKAAAAEsAAABqAAAAswAAAPcAAAD4AAAAswAAAGoAAABMAAAAKAAAAAkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACJUE5HDQoaCgAAAA1JSERSAAABAAAAAQAIBgAAAFxyqGYAAAABc1JHQgCuzhzpAAAAOGVYSWZNTQAqAAAACAABh2kABAAAAAEAAAAaAAAAAAACoAIABAAAAAEAAAEAoAMABAAAAAEAAAEAAAAAAEQiOHMAAB4DSURBVHgB7V0JsBXVmW6UXQg8FhFRVkGW6MRoJAnKToyOMTMqiHGwwmSqBsSNqUmhiAiYRJNMMpOqKM4UKNSYMtbEmdEYGUcJi8FxX0DlsYjghoobEngIyJvvu9CPvo97b/e9vZ3T/f1V33t9u0+f5Tvn//v0+c853cKRZIGBrihEZ6AT0BE4CegD9AROALoBXYDuQAugDmgDeKURP3YADcBO4DPgPWA78DbwLvAmsAvgdeIT4CAgsZQBNgaJHQxQganQvYDBQP/DoFLTAFD5aQRaA3HKXkRO4+AagHdwvA3YDLwB0FjQaNCYSAxnQAbAzAo6GdniE3wI8DVgIHAiQAPAJ7zJsgeZc3sN63D8KvAywN4DjYXEIAZkANKvjJbIAhV8KDAS+AowAOCTPkvyFgqzBXgeWAOsBzYBBwBJSgzIAKRDfD8kS0UfBwwHTgHYfc+TfIrC8rXhGeB/AfYWaCAkCTIgA5AM2Xwvp8KPAC4ATgN6AJIjDLyPw1eAZcAK4DWA4w2SGBmQAYiP3LaI+gzgO8B5AJW+FSDxZ+BzBKkHHgZoEF4AGgBJxAzIAERMKKI7E7gEOB+g0h8LSGpngGMEHEh8CHgQoDGgy1IiBoxhgO/004GVAEfB2UCF6DlgL2AlMAPoDUjEQGoM8L1+LLAIoNtLCp8sB3QpLgbOAehJkYiBRBjogVSmAk8C+wEpfrocsA5WA+yBdQUkYiAWBuiqmw3QVSWlN5ODjaib+QBfySRiIBIGOEHn18AHgBTfDg74SvYzYBggEQM1MTAEd1HxPwak+HZy8NHhOvwy/kvEQCAGpPh2KnslI+0agkGBWoAC5ZKBXij1zwE98bNnAFzjwFeD2wGNEYAEySEGOuDfLGAb4DYU/c82FzQEM4E6QJJjBi5G2Z8DpPD55IB1PxHQPAKQkCfhFN0HgIOAlF8c3I92cDogyTgDHVG+mwEOCknxxYG3DXB7M87z0GsBSMiijEehngK8la5j8dG8DTyNNjImiwqQ1zJ1Q8H/BeDa8uaVrd/ipFQb+DPaCr0F6g2ABJuFO+68CJSqZJ0TL35tgL0BLviSWMZAe+R3LrAb8KtkXRdHldoAewNsS9zgRWIBA5z//ShQqVJ1TfxU2wYeQ5vS2gLDDcBk5O9dKb+MX0xt4D3E+z1AYhgDnM33S4DbR1Vr2RVenFXTBtjG2Nb4mikxgIEByAO7Z9VUosKKr7BtYDnaXH8D2n+us8BR/s1A2MrU/eKwljbwOtqe1V4Cm3esnQby7wG4RZdEDKTBAOcJ/DWwE+C6AuvERgPQBizfBtwK8FgiBtJkgG3wPIBuQn7y7AtAEhMDtLj3ArV013SPeIu7Dfw72mbePvEWk6ofHe1JOLUCiLsSFb84DtMGuEMx26okQga4lROnZYapGN0r/pJqA2yr3EVaEgEDwxHHJiCpylM64jqKNrABbfbrEbT/XEcxGqXnF2CiqBDFIR6TbgNsu2zDxorJXoBRYO23QE9j2VPGxEBlBrgBzbcBugi556RxYqoBcJX/BOMYU4bEQHUMcJq6sUbARANA5b8P0JO/uoam0OYyQCPAuQLG9QRMMwCjQZKUHyRIMscAXwdoBJ4HtgJGSAsjcnEoExzt/0/gRIPypKyIgagZ4HJ1bkdPV2HqYooBGAAmlgEDU2dEGRAD8TPARUTnA3RvpyrHpJr6ocQ5a4rdfim/AZWhLCTCAB94vwFSnzGYdg/gSyDhD8A5gEQM5I2BVSjwdwGuJkxF0hwE5Oqpu4ALUym5EhUD6TPQF1k4GXgEOAAkLmkagAUo7YzES6wExYBZDJyO7PBhyF2tEpe0DMA0lPTHgAljEImTrgTFQDMGuGbgA4DzBBKVNMYAxqKE/w3QLyoRA2LgEAP8/gDHA/6YJCFJG4B+hwvYN8lCKi0xYAkDbyCfEwC6CRORJLvgx6FEi4G+iZRMiYgB+xjgA/LfAOpKIpLkGMBPUaLLEymVEhED9jJAI9AOeDSJIiRlAKj4twNJ9jiS4E9piIE4GPgaIt0AvBpH5N44W3h/xHQ8FPEuB7S0NyaCFW0mGdiOUo0HXouzdHH3ANiV4S6+p8VZCMUtBjLIAL1kpwIPAPvjKl/cBuAmZHxqXJlXvGIg4wz0R/n2AaviKmecrwCjkemHgcRGNOMiSfGKgRQZ2IO0LwBiMQJxGYBOyPDjwFmARAyIgXAMvIzbOYHu43DRHH13XK8A85HUpKOT0xkxIAZqYIAD6BxP+58a7q14Sxw9gNFI8fcA90GTiAExEA0DnyMavgpEOlU4agPA9f10+anrDxIkYiBiBp5BfHwV2B1VvFG/AvwDMjYlqswpHjEgBooY6IVfDcDqorMhfkTZA+C65pUAv+ArEQNiIB4GPkG03Dp/XRTRHxNFJIijNTAXkPJHRGhS0XTo0MHp3bt3UskpnfAMUMcWAJHobiSRIDPc1usSQGIZA1OnTnWWLFnitGrVyrKc5zq7F6H03DvACOHA3/NAo2AXB8cff3zjli1bGimTJ09W/dnVhqlzRnjarpPi26X4bn3NmzevoPz8s379+sa6ujoZAbuMwA9Rl6lKX6TOVUtqOJZxMHjw4MYdO3Y0GQAezJ49W/VoVz2+Cd3rCaQmtyFlNRrLOGjRokXj3XffXaT8/PHhhx829u/fX/VpV33+U1raPwgJvy8DYJ8BHDt2bOO+ffuOMgA8sWjRIhkAuwzAp9BB7rmRuNyBFNVYLOOgbdu2jStWrCip/Dy5d+/exhEjRqhe7arXO5PW/mFI8GMZAPsM4JQpU8oqv3th+fLljXALygjYYwQ4OSjRXoCe/vY0jiZFpttvw4YNrp5X/C+3oHXGPbFegJ7+Fio/e2tet19F7cfF+vp6uQXtqmf2AoYAVUkti4HoexxXVSoKnDoDcPs5CxcudNq3bx8oL926dXM+++wz54knnggUXoFSZ4DfF+TankfizElfRK6Rf7ueDI3l3H5+vQC5Ba17DfgI+tk/TgMwH5E3vVPq2A4uxo0b17h//34/fS95XW5BO+rYo4uz4zIAXRDxRk9CMgQWGEM/t19JrfeclFvQOgOwBTraPQ4jwE96S+kt4yCI28+j7yUP5Ra0rt1/P2oD0AYR/kkGwK6GUI3br6Tme07KLWhV3f8fdJU6G5mcg5j4gQL1ACzioBq3n0fXSx7KLWhV2+cGomODaH9QNyAH/84MEqHCmMFAtW4/v1zTLbhr1y65Bf2IMuM69fog8GAU2eFGhNsBPf0t4aBWt1/JR7/npNyCVukA3fV9ojAAV0n5rar4Rrr9yq328+hzTYdyC1rVFjhwH0q4UdwqQE9/SzgI6/bzswpyC1qlC9TdlmEsAN/7d8sA2FPpV155pZ8Oh74ut6A17WEPdDfU2N2PpPzWVHYj3X4bN24MreBBIrj88svVK7SjV/gT6HBNwsUFLwGqaEs4iNLt52cE5Ba0Ri9ehA63q8UCjMBNe2UA7KjoUpt8+ilx2Os33XSTHg7mPxw4J+AbtRiAH0v57VB+uv3uueeesPpc9f1yC9rRPqDHt1VrANhlUPfffOteeALH6fbzswqLFy9WL8D8dvIC9Jmv9IHlDITkCKIq13AO4nb7+RkAuQWt0BG+yp9dSvvLfRuQ84hrGjgolYjOxcfAxIkTndGjR8eXgE/Mbdq0cRYsWKBvC/rwlPJlLgzimF4goVF4HNDT33AOknT7+fUE5BY0Xl8eg06Xe+AXGYa++MV5xDIAhnOQpNvPzwDQLdi5c2e1GXPbzAfQaep2kZRaDTgKIX5QFEo/jGOAq/3uuuuuwJt8xl0ArhbcvXu3s3r16riTUvy1MXAcbuPU4Hrv7aW6BBO8AXRsHgNw+zmzZs1yunbtalTmrr/+egffFjQqT8pMEQPji36V+NEa554D1JUzmIM03X5+rwJyCxqtO9Rt6nhZGYwr/MCADIChHKTt9vMzAHILGq071G3qeJM0fwXg98U6N13VgXEMTJo0KVW3nx8hcgv6MZTqdeo2v+zVJM0NwDebrujAOAa6d+/uzJkzx7h8Nc8QPj/uXHrppc1P67cZDJzrzYbXAPD4LO9FHZvFwIwZM5yBAwealakyubnlllucurq6Mld1OkUGvoK0m7x/XgNwAi4MSDFjSroCA3T7XX311RVCmHXp1FNPda66irvJSQxjgE+QnqXyxCWDBwANABrGQVqr/fwG/Pyua7WgkbpEHT/HNQDeHkBR18ANoP/pM8B36iuuuCL9jFSZA85TwJ4BVd6l4DEzwO4/B/sL4jUATSfdi/qfPgNw+xUG/lq1apV+ZmrIAQ3XiBGB16HUkIJuqYGBprE+1wDw/2k1RKRbYmYg7dV+YYsnt2BYBmO5n+MALbwx82uimwG9/xvEgUmr/fze9/2ua7WgUbrFr3zza99NywPpASg5MshAknQYsMnt58cQ3YJYLegXTNeTYYD6TjQZgJNx3J4nJGYwQLcfDUBWhG5Bm9yYWeG9TDk64nwvXnPHAPqXCajTKTBg6mq/sFRcd911Wi0YlsTo7h/CqFwDoAlA0REbOqaxY+10+/kVnHsGyC3ox1Ji1/sxJdcA9EksWSVUkQHb3X4VC4eLcgv6MZTY9cJDnwaAHw8svA8klrQSKsuA6av9ymY84AW5BQMSFX8wev6OpQHoBGjVRvyE+6YAt58Vq/18C+ITgK84Wi3oQ1L8l7mdVGfXANAISFJmgItnbFntF5aquXPnyi0YlsRw99MnKwMQjsPo7rZttV/YkmfNzRmWjxTu50O/E3sA9AnywwGSlBjIqtvPj86ZM2fKLehHUnzXuTdgRxqA3vGloZiDMJBVt59f2bVa0I+h2K+fRAOgKcCx81w+gay7/cqX/NAVuQX9GIr1eh8aAE4DlqTEQNbdfn60yi3ox1Cs13tyc4C/BbQXQKw8l46cm3wuXbrUuA98lM5tfGf79evnrF+/3nnllVfiS0Qxl2LgTb0ClKIloXNcHJMXt58fpXIL+jEUy/Vu7AFcCxSWBsaShCItyQDdYAsXLjTm234lM5ngSX1bMEGyjyS1kz0ALdI+QkgiR67bj41ecoQBrRY8wkVCR91pANollJiSOcxAXt1+fg1AqwX9GIr8+jHcF+wLgIZAkgADdPstW7bM6M97JUBD2STwbUFn/Pjxzpo1a8qG0YXIGPicii/lj4xP/4hs3+TTv4ThQtBALliwwLF1F+RwpU/87jYcBJyXeLI5TVBuv2AV37dvX6e+vl5uwWB0hQqlp38o+qq7mYNccvv5c8ZB0nnz5unbgv5UhQ6hHkBoCoNFMGzYMOfOO+902rXTmGsQxrhOoKGhwVm1alWQ4ApTIwPsAXxe4726LSADfKLdcMMNTpcuha3YA96lYNdee616TPE2g4M0AJ/Em4Zi56j2ZZddJiKqZIAGc86cOVXepeBVMPAhDcDBKm5Q0CoZYJf/5ptv1qh2lby5wWk4R40a5f7U/2gZaKAB2BFtnIrNy8DkyZOdc88913tKx1UwwNWC8+fPd1q35v4VkogZ+JSDgOyb9o04YkUHBnr06OEsWbJE7/4hW0OfPn2cjRs3OmvXrg0Zk25vxsBm9gA+anZSPyNigINYAwYMiCi2/EbDQVS+RtXVafPqiFvBe+wBsH96dsQR5z66oUOHyu0XYSuQWzBCMo9EtZw9gO1HfusoCgb4xLrxxhvV9Y+CTE8c11xzjdyCHj4iOHyLBmBbBBEpCg8DEyZMcDj4J4mWAfYC5BaMlNPtNABvRxplziOj248fwGzZkl9ck0TNgNyCkTJa2BJsF6LcF2m0OY6MDXTkyJE5ZiDeosstGBm/nAG8iz2AnYcRWcx5jYhuP3VR4699GljNrAzNc0HvaQA+PYzQMeY9Ag5Sye0XfyvgICsNrdyCobguMgCaCxCKS+yrDrff9OnTQ8ai24MyMGjQIIfLqyU1M8A1QIVNQbklmKYD18yj48jtF4K8ELdqW/UQ5DnOO7j7AF8BKK8f+qe/tTDA1X5y+9XCXLh79G3BUPwV3P+uAXgjVFQ5vpluP76Pyu2XTiOg4ZXXpSbuCw991wCsrykK3VQYjVYDTK8huN8W1GrBqutgC+9wDQDfBzgfQFIFA3L7VUFWjEHlFqya3D244y3e5RqA93BMSKpgQG6/KsiKMajcglWTy/U/BX13DQBdAuwFSAIyQLfftGnTAoZWsLgZoFuQy68lgRjg9P+C6981AI04sSnQrQpUYICbfHIUWmIOA1otGLgu1iFkYStA1wDwzucC357zgFrtZ2YDkFswcL285ob0GgCe5KQgSQUGtMlnBXIMuCS3oG8lUMdfckN5DcBWnHzfvaD/pRngIhRt8lmaGxPOyi3oWwscAGzaA8RrAHhB4wAV+JPbrwI5Bl2iW3DSpEkG5ciorHACUJPHz2sAiroGRmXZkMzI7WdIRfhkg25BbSJaliSO9TV9C4SbgnrlOPyQ6fQycvhYm3yWIMXgUxwQ3Lt3r7Ny5UqDc5lK1n6BVJtm/np7AMzNqwD3B5B4GNBqPw8ZFh1qteBRlUXdbvIA8GpzA8D5wXxHkHgY0Lf9PGRYdCi34FGVRd0urAFwrzQ3ANwb8Cn3ov47hc95c7Vfq1atRIeFDMgtWFRp1O2i/T+bGwCGfrzolpz/kNvP7gYgt2BR/T1W9As/mg8C8vpe4AqAA4K5Frr9li5dqg98WN4K9G3BQgV+gL8/AorG+Er1AN5EoJcLt+T8j9x+2WgAcgsW6pHz/6nbRVKqB8CFQd2A84pC5uwH3X533HGH0759+5yVPJvFlVvQuQM1+2Tz2i3VA2CYNQA/HJBLcd1+bDSS7DBAt+App5ySnQIFL0kDgq4oFbycAeCH2Iv8haVuzuo5uf2yWbM06JwhmEPZiDLXlyp3OQPAgcBHS92Q9XPuJp9y+2WzpnP66bY/oDbZCzhKyhkABnwIKPIZHnV3Bk/ktIFksCZLFymHbkG+yj9Smo3SbkA3LLcMugg4wT2R9f9y+2W9hg+Vj27BTZs2OWvX8k0388Lp/bcCB0qVtFIPgF2GZaVuyuo5uf2yWrPF5eIgLz/hnpNvCz6M0vOVvqSUcgN6A3LSwBQg8/Ng5fbzVnv2j7t16+Y0NDQ4q1atynJh96BwswDu9VFSWpQ8e+RkSxwuB0YeOZW9I35U4r777nMuvvji7BVOJSrLAA3A8OHDnXXrOEcmk7IapRoP7C9XOip4JeF7w31Apg0Au4JsBPX19U5jI+dBSfLAwLHHHpv1ad73ox7LKj/r2K8HwDB9gGeA4/lDIgbEgBUMcNuvs4CK3/uoNAjolpIbCNKPKBEDYsAeBjiAX1H5WZQgBoDh7gVyNyeABZeIAQsZYLf/7iD5DmoAuDbghSARKowYEAOpM8BX9meD5CKoAeBson8NEqHCiAExkDoD7LFTZ30lyCCgGwkHAbmlUD/3hP6LATFgHAObkKOvAx8HyVnQHgDj4o4ii4JEqjBiQAykxgDd9oGUnzmspgfA8P0Bvlt04Q+JGBADRjHAh/RwYGvQXFXTA2Cc3FL4t0EjVzgxIAYSZWApUttaTYrV9gAY9xCAWwt15g+JGBADRjDwCXJxLsDVf4Gl2h4AI14P8D1DIgbEgDkMUCerUn5mvZYeAO8bCnBugHoBZEMiBtJloKanP7NcSw+A970GqBdAJiRiIH0Ganr6M9u19gB4L3sBHAvoxB8SMSAGUmGAI/989+fGn1VLrT0AJsRegOYFVE25bhADkTLAOf81KT9zEaYHwPt7Ak8DJ/OHRAyIgUQZ4JLfbwBba03Vb0swv3j/jADcVGSCX0BdFwNiIHIG5iDGR8PEGrYHwLQ7AKuAr/KHRAyIgUQY4OrcMcBnYVIL2wNg2twnYAcwEYjCoCAaiRgQAz4MXI3rL/mE8b0cZhDQG/mD+PGQ94SOxYAYiI2B3yFmbvcdWqJ8Yp+G3PBVoC50rhSBGBAD5RjgpJ/RwNpyAao5H8UrgJse/ZGtgLHuCf0XA2IgcgZuRYwPRBVrlD0A5uk44I/A2fwhEQNiIFIGnkNs44BQA3/eHEXZA2C83IyQS4YnA37fHEAQiRgQAwEZoMt9KrAhYPhAwaI2AEz0DaA7wI0JJGJADETDwD8jmshn3kb9CuAWtQsOVgIcGJSIATEQjgF2/ccDO8NFc/TdUbkBm8fMPcmuA/Y0v6DfYkAMVMXAboT+IRC58jMXcbwCMF7KVoDjAGMAiRgQA7Ux8BPctrS2W/3viusVwE25PQ44SYjdF4kYEAPVMUCP2oVAQ3W3BQ8dtwFgTrhvwOMAVw5KxIAYCMYAV/rR5cdl97FJnK8Abqa5TuBt4K+AuMYc3LT0XwxkgYEDKMQ0YEXchUnCALAMrwKcIsy1yxIxIAYqM/ArXP5F5SDRXE3iFcDNKWcJcsGQpgq7jOi/GDiaAT71vwNw9D92SdIAsDADgMeAfvwhEQNioIiBrfjFByQn0yUiSb+Tv45S/R3AaY0SMSAGjjCwC4c/ABJTfiad1BgA03KFBeSSxguApHsgbh70XwyYxMAXyMxM4D+SzlQaBoBl5NTGjsA3+UMiBnLOwE9RfiJxScsAsKBPABwLOJ0/JGIgpwzci3L/I0DXX+KSdhe8E0rMmYKjEi+5EhQD6TPwJ2ThL4HI1vdXW6SkBwGb528nTvwN8GzzC/otBjLOANv85UBqyk9+0+4BMA+UgcAyYAB/SMRAxhnYhPKdD9Arlqqk3QNwC09CrgDedU/ovxjIKANs41OA1JWf/KY5CMj0vfIOfvBjB98GOngv6FgMZIQBLvD5HrDGlPKYZADIyVbgeUBGACRIMsUAlZ/v/CtNKpVpBoDcbAU4T0BGACRIMsEAlZ8b5a4yrTQmGgBytA1QT8C01qL81MKA++Q3TvlZGFMNAPO2FaAR+BbAWYMSMWAbAxzw4zv/SlMzbrIBIGdbgSeBkUBXQCIGbGFgMzLKbj8n+0hCMnAK7n8aaBTEgQVtgG11ECCJkIGTENdqQEZAHJjcBlagjbKtWiGmvwJ4SeSUyf8CSK4WEHmZ0bEpDPwGGfk+wA/lWiE2GQASuhfglGHOYOT+gqbMZERWJDlmgOv5fwlwTb82u0moIUxHOlxMZHJ3UHnLfv1Q4acl1OaVTDMGxuE351RL0cRBGm2AbW98szapnwkz0B/pLQfSaABKM7+8P442NyDhth55craNAZQigPsL/g7gZ8jOBjQuABIksTHA9/1fAX8PvB9bKoq4Jga4pJhTL/VkFgdxtAHO7OPkHonBDAxD3h4D4mgAijO/vD6KNsW2JbGAgbbI41yAI7RSWnEQpg3wCz1sS3zFlFjGwFjkV1OIZQBqNQAvof3Q0ySxmIE65P12QL0BGYKghoATzjjQ1w2QZISBMSiHegMyAn5G4Cm0E/n2M6L0zYvB3sBsgK5Dv4ag6/ni6CO0iZsB7T0BErIuXEx0PyAlFwcH0Q4eAE4DJDlioCXKOhHg/oMyBPnkgHV/CSDJMQN8LZgJbAdkCPLBAfecnAV0ACRioMBAP/ylt0CGILtG4GPU78+BXoBEDJRkgFs5/RrgoJB6BNnggIrPOh0KSMRAIAa+jFAyBHYbACl+oKauQJUY4PzvnwF6NbDHGHyA+tITv1Kr1rWqGeAYwXxgI6BXAzM52IK64TwP7iItEQOxMMDvE1wFPAHsB2QM0uWAdcBvR0wFegASMZAIA5xHcA6wGOCXjWUIkuWAr2SLAC74ag1IxEBqDPRGyjOAlUADIGMQDwd7DnM8Hf/5SiYJyUCLkPfr9mIGuB3ZGcB3gYsADiCypyCpnQFuwbUO4HbwnLL7PCCJiAEZgIiILBFNO5z7KnA+cCEwGGgDSPwZ4Hs9lZ678PweeBHgEl1JxAzIAERMaJno2uI8J6GMAWgQOMdAA1YgwSPv45hK/wiwBuBmHPsASYwMyADESG6FqPvjGleffQvgTsZ0W3UG8iSforCbgaeB5QAV/g1AkiADMgAJkl0mKY4RDASGACOAMwEaiJOBLAk9Ja8DVPTVwGvAJuAAIEmJARmAlIj3SbYXrtOz8BcABxLZWzgJ6Am0B0yWXcgcXXTvAlTwZ4H1wDbgLUBiEAMyAAZVhk9WuuM6DQANQT+Arw19ABoLLmnuBHwJ4HhDnML3cnbfdwIfATsAzsAj6gE+6WkAOA9fYjgDMgCGV1CA7NH16BoAGoGOAHsPJwJur+EEHNM48Ho7gMaked1/jnOfAJzDQKWmAn8IvAdQobcBbwN8wlP5aQRoACQWM/D/QN+5DmrsiuEAAAAASUVORK5CYII="
}];
var rootNotFoundModule = null;
var rootForbiddenModule = null;
var rootUnauthorizedModule = null;
var rootLayouts = [layout_exports];
/**
* Render an HTTP access fallback page (not-found/forbidden/unauthorized) with layouts and noindex meta.
* Returns null if no matching component is available.
*
* @param opts.boundaryComponent - Override the boundary component (for layout-level notFound)
* @param opts.layouts - Override the layouts to wrap with (for layout-level notFound, excludes the throwing layout)
*/
async function renderHTTPAccessFallbackPage(route, statusCode, isRscRequest, request, opts) {
	let BoundaryComponent = opts?.boundaryComponent ?? null;
	if (!BoundaryComponent) {
		let boundaryModule;
		if (statusCode === 403) boundaryModule = route?.forbidden ?? rootForbiddenModule;
		else if (statusCode === 401) boundaryModule = route?.unauthorized ?? rootUnauthorizedModule;
		else boundaryModule = route?.notFound ?? rootNotFoundModule;
		BoundaryComponent = boundaryModule?.default ?? null;
	}
	const layouts = opts?.layouts ?? route?.layouts ?? rootLayouts;
	if (!BoundaryComponent) return null;
	const _filteredLayouts = layouts.filter(Boolean);
	const _fallbackParams = opts?.matchedParams ?? route?.params ?? {};
	const _layoutMetaPromises = [];
	let _accumulatedMeta = Promise.resolve({});
	for (let _i = 0; _i < _filteredLayouts.length; _i++) {
		const _parentForLayout = _accumulatedMeta;
		const _metaP = resolveModuleMetadata(_filteredLayouts[_i], _fallbackParams, void 0, _parentForLayout).catch((err) => {
			console.error("[vinext] Layout generateMetadata() failed:", err);
			return null;
		});
		_layoutMetaPromises.push(_metaP);
		_accumulatedMeta = _metaP.then(async (_r) => _r ? mergeMetadata([await _parentForLayout, _r]) : await _parentForLayout);
	}
	const [_metaResults, _vpResults] = await Promise.all([Promise.all(_layoutMetaPromises), Promise.all(_filteredLayouts.map((mod) => resolveModuleViewport(mod, _fallbackParams).catch((err) => {
		console.error("[vinext] Layout generateViewport() failed:", err);
		return null;
	})))]);
	const metadataList = _metaResults.filter(Boolean);
	const viewportList = _vpResults.filter(Boolean);
	const resolvedMetadata = metadataList.length > 0 ? mergeMetadata(metadataList) : null;
	const resolvedViewport = mergeViewport(viewportList);
	const headElements = [(0, import_react_react_server.createElement)("meta", { charSet: "utf-8" }), (0, import_react_react_server.createElement)("meta", {
		name: "robots",
		content: "noindex"
	})];
	if (resolvedMetadata) headElements.push((0, import_react_react_server.createElement)(MetadataHead, { metadata: resolvedMetadata }));
	headElements.push((0, import_react_react_server.createElement)(ViewportHead, { viewport: resolvedViewport }));
	let element = (0, import_react_react_server.createElement)(import_react_react_server.Fragment, null, ...headElements, (0, import_react_react_server.createElement)(BoundaryComponent));
	if (isRscRequest) {
		const _treePositions = route?.layoutTreePositions;
		const _routeSegs = route?.routeSegments || [];
		const _fallbackParams = opts?.matchedParams ?? route?.params ?? {};
		const _asyncFallbackParams = makeThenableParams(_fallbackParams);
		for (let i = layouts.length - 1; i >= 0; i--) {
			const LayoutComponent = layouts[i]?.default;
			if (LayoutComponent) {
				element = (0, import_react_react_server.createElement)(LayoutComponent, {
					children: element,
					params: _asyncFallbackParams
				});
				element = (0, import_react_react_server.createElement)(LayoutSegmentProvider, { childSegments: __resolveChildSegments(_routeSegs, _treePositions ? _treePositions[i] : 0, _fallbackParams) }, element);
			}
		}
		const _pathname = new URL(request.url).pathname;
		const onRenderError = createRscOnErrorHandler(request, _pathname, route?.pattern ?? _pathname);
		const rscStream = renderToReadableStream(element, { onError: onRenderError });
		return new Response(rscStream, {
			status: statusCode,
			headers: {
				"Content-Type": "text/x-component; charset=utf-8",
				"Vary": "RSC, Accept"
			}
		});
	}
	const _asyncFallbackParamsHtml = makeThenableParams(opts?.matchedParams ?? route?.params ?? {});
	for (let i = layouts.length - 1; i >= 0; i--) {
		const LayoutComponent = layouts[i]?.default;
		if (LayoutComponent) element = (0, import_react_react_server.createElement)(LayoutComponent, {
			children: element,
			params: _asyncFallbackParamsHtml
		});
	}
	const _pathname = new URL(request.url).pathname;
	const onRenderError = createRscOnErrorHandler(request, _pathname, route?.pattern ?? _pathname);
	const rscStream = renderToReadableStream(element, { onError: onRenderError });
	const fontData = {
		links: getSSRFontLinks(),
		styles: _getSSRFontStyles(),
		preloads: _getSSRFontPreloads()
	};
	const htmlStream = await (await import("./ssr/index.js")).handleSsr(rscStream, getNavigationContext(), fontData);
	setHeadersContext(null);
	setNavigationContext(null);
	const _respHeaders = {
		"Content-Type": "text/html; charset=utf-8",
		"Vary": "RSC, Accept"
	};
	const _linkParts = (fontData.preloads || []).map(function(p) {
		return "<" + p.href + ">; rel=preload; as=font; type=" + p.type + "; crossorigin";
	});
	if (_linkParts.length > 0) _respHeaders["Link"] = _linkParts.join(", ");
	return new Response(htmlStream, {
		status: statusCode,
		headers: _respHeaders
	});
}
/** Convenience: render a not-found page (404) */
async function renderNotFoundPage(route, isRscRequest, request, matchedParams) {
	return renderHTTPAccessFallbackPage(route, 404, isRscRequest, request, { matchedParams });
}
/**
* Render an error.tsx boundary page when a server component or generateMetadata() throws.
* Returns null if no error boundary component is available for this route.
*
* Next.js returns HTTP 200 when error.tsx catches an error (the error is "handled"
* by the boundary). This matches that behavior intentionally.
*/
async function renderErrorBoundaryPage(route, error, isRscRequest, request, matchedParams) {
	let ErrorComponent = route?.error?.default ?? null;
	if (!ErrorComponent && route?.errors) {
		for (let i = route.errors.length - 1; i >= 0; i--) if (route.errors[i]?.default) {
			ErrorComponent = route.errors[i].default;
			break;
		}
	}
	if (!ErrorComponent) return null;
	const errorObj = __sanitizeErrorForClient(error instanceof Error ? error : new Error(String(error)));
	let element = (0, import_react_react_server.createElement)(ErrorComponent, { error: errorObj });
	{
		const layouts = route?.layouts ?? rootLayouts;
		if (isRscRequest) {
			const _errTreePositions = route?.layoutTreePositions;
			const _errRouteSegs = route?.routeSegments || [];
			const _errParams = matchedParams ?? route?.params ?? {};
			const _asyncErrParams = makeThenableParams(_errParams);
			for (let i = layouts.length - 1; i >= 0; i--) {
				const LayoutComponent = layouts[i]?.default;
				if (LayoutComponent) {
					element = (0, import_react_react_server.createElement)(LayoutComponent, {
						children: element,
						params: _asyncErrParams
					});
					element = (0, import_react_react_server.createElement)(LayoutSegmentProvider, { childSegments: __resolveChildSegments(_errRouteSegs, _errTreePositions ? _errTreePositions[i] : 0, _errParams) }, element);
				}
			}
		} else {
			const _asyncErrParamsHtml = makeThenableParams(matchedParams ?? route?.params ?? {});
			for (let i = layouts.length - 1; i >= 0; i--) {
				const LayoutComponent = layouts[i]?.default;
				if (LayoutComponent) element = (0, import_react_react_server.createElement)(LayoutComponent, {
					children: element,
					params: _asyncErrParamsHtml
				});
			}
		}
	}
	const _pathname = new URL(request.url).pathname;
	const onRenderError = createRscOnErrorHandler(request, _pathname, route?.pattern ?? _pathname);
	if (isRscRequest) {
		const rscStream = renderToReadableStream(element, { onError: onRenderError });
		return new Response(rscStream, {
			status: 200,
			headers: {
				"Content-Type": "text/x-component; charset=utf-8",
				"Vary": "RSC, Accept"
			}
		});
	}
	const rscStream = renderToReadableStream(element, { onError: onRenderError });
	const fontData = {
		links: getSSRFontLinks(),
		styles: _getSSRFontStyles(),
		preloads: _getSSRFontPreloads()
	};
	const htmlStream = await (await import("./ssr/index.js")).handleSsr(rscStream, getNavigationContext(), fontData);
	setHeadersContext(null);
	setNavigationContext(null);
	const _errHeaders = {
		"Content-Type": "text/html; charset=utf-8",
		"Vary": "RSC, Accept"
	};
	const _errLinkParts = (fontData.preloads || []).map(function(p) {
		return "<" + p.href + ">; rel=preload; as=font; type=" + p.type + "; crossorigin";
	});
	if (_errLinkParts.length > 0) _errHeaders["Link"] = _errLinkParts.join(", ");
	return new Response(htmlStream, {
		status: 200,
		headers: _errHeaders
	});
}
function matchRoute(url) {
	const pathname = url.split("?")[0];
	return trieMatch(_routeTrie, (pathname === "/" ? "/" : pathname.replace(/\/$/, "")).split("/").filter(Boolean));
}
function matchPattern(urlParts, patternParts) {
	const params = Object.create(null);
	for (let i = 0; i < patternParts.length; i++) {
		const pp = patternParts[i];
		if (pp.endsWith("+")) {
			if (i !== patternParts.length - 1) return null;
			const paramName = pp.slice(1, -1);
			const remaining = urlParts.slice(i);
			if (remaining.length === 0) return null;
			params[paramName] = remaining;
			return params;
		}
		if (pp.endsWith("*")) {
			if (i !== patternParts.length - 1) return null;
			const paramName = pp.slice(1, -1);
			params[paramName] = urlParts.slice(i);
			return params;
		}
		if (pp.startsWith(":")) {
			if (i >= urlParts.length) return null;
			params[pp.slice(1)] = urlParts[i];
			continue;
		}
		if (i >= urlParts.length || urlParts[i] !== pp) return null;
	}
	if (urlParts.length !== patternParts.length) return null;
	return params;
}
var interceptLookup = [];
for (let ri = 0; ri < routes.length; ri++) {
	const r = routes[ri];
	if (!r.slots) continue;
	for (const [slotName, slotMod] of Object.entries(r.slots)) {
		if (!slotMod.intercepts) continue;
		for (const intercept of slotMod.intercepts) interceptLookup.push({
			sourceRouteIndex: ri,
			slotName,
			targetPattern: intercept.targetPattern,
			targetPatternParts: intercept.targetPattern.split("/").filter(Boolean),
			page: intercept.page,
			params: intercept.params
		});
	}
}
/**
* Check if a pathname matches any intercepting route.
* Returns the match info or null.
*/
function findIntercept(pathname) {
	const urlParts = pathname.split("/").filter(Boolean);
	for (const entry of interceptLookup) {
		const params = matchPattern(urlParts, entry.targetPatternParts);
		if (params !== null) return {
			...entry,
			matchedParams: params
		};
	}
	return null;
}
async function buildPageElement(route, params, opts, searchParams) {
	const PageComponent = route.page?.default;
	if (!PageComponent) return (0, import_react_react_server.createElement)("div", null, "Page has no default export");
	const layoutMods = route.layouts.filter(Boolean);
	const layoutMetaPromises = [];
	let accumulatedMetaPromise = Promise.resolve({});
	for (let i = 0; i < layoutMods.length; i++) {
		const parentForThisLayout = accumulatedMetaPromise;
		const metaPromise = resolveModuleMetadata(layoutMods[i], params, void 0, parentForThisLayout).catch((err) => {
			console.error("[vinext] Layout generateMetadata() failed:", err);
			return null;
		});
		layoutMetaPromises.push(metaPromise);
		accumulatedMetaPromise = metaPromise.then(async (result) => result ? mergeMetadata([await parentForThisLayout, result]) : await parentForThisLayout);
	}
	const pageParentPromise = accumulatedMetaPromise;
	const spObj = {};
	let hasSearchParams = false;
	if (searchParams && searchParams.forEach) searchParams.forEach(function(v, k) {
		hasSearchParams = true;
		if (k in spObj) spObj[k] = Array.isArray(spObj[k]) ? spObj[k].concat(v) : [spObj[k], v];
		else spObj[k] = v;
	});
	const [layoutMetaResults, layoutVpResults, pageMeta, pageVp] = await Promise.all([
		Promise.all(layoutMetaPromises),
		Promise.all(layoutMods.map((mod) => resolveModuleViewport(mod, params).catch((err) => {
			console.error("[vinext] Layout generateViewport() failed:", err);
			return null;
		}))),
		route.page ? resolveModuleMetadata(route.page, params, spObj, pageParentPromise) : Promise.resolve(null),
		route.page ? resolveModuleViewport(route.page, params) : Promise.resolve(null)
	]);
	const metadataList = [...layoutMetaResults.filter(Boolean), ...pageMeta ? [pageMeta] : []];
	const viewportList = [...layoutVpResults.filter(Boolean), ...pageVp ? [pageVp] : []];
	const resolvedMetadata = metadataList.length > 0 ? mergeMetadata(metadataList) : null;
	const resolvedViewport = mergeViewport(viewportList);
	const pageProps = { params: makeThenableParams(params) };
	if (searchParams) {
		pageProps.searchParams = makeThenableParams(spObj);
		if (hasSearchParams) markDynamicUsage();
	}
	let element = (0, import_react_react_server.createElement)(PageComponent, pageProps);
	element = (0, import_react_react_server.createElement)(LayoutSegmentProvider, { childSegments: [] }, element);
	{
		const headElements = [];
		headElements.push((0, import_react_react_server.createElement)("meta", { charSet: "utf-8" }));
		if (resolvedMetadata) headElements.push((0, import_react_react_server.createElement)(MetadataHead, { metadata: resolvedMetadata }));
		headElements.push((0, import_react_react_server.createElement)(ViewportHead, { viewport: resolvedViewport }));
		element = (0, import_react_react_server.createElement)(import_react_react_server.Fragment, null, ...headElements, element);
	}
	if (route.loading?.default) element = (0, import_react_react_server.createElement)(import_react_react_server.Suspense, { fallback: (0, import_react_react_server.createElement)(route.loading.default) }, element);
	{
		const lastLayoutError = route.errors ? route.errors[route.errors.length - 1] : null;
		if (route.error?.default && route.error !== lastLayoutError) element = (0, import_react_react_server.createElement)(ErrorBoundary, {
			fallback: route.error.default,
			children: element
		});
	}
	{
		const NotFoundComponent = route.notFound?.default ?? null;
		if (NotFoundComponent) element = (0, import_react_react_server.createElement)(NotFoundBoundary, {
			fallback: (0, import_react_react_server.createElement)(NotFoundComponent),
			children: element
		});
	}
	if (route.templates) for (let i = route.templates.length - 1; i >= 0; i--) {
		const TemplateComponent = route.templates[i]?.default;
		if (TemplateComponent) element = (0, import_react_react_server.createElement)(TemplateComponent, {
			children: element,
			params
		});
	}
	for (let i = route.layouts.length - 1; i >= 0; i--) {
		if (route.errors && route.errors[i]?.default) element = (0, import_react_react_server.createElement)(ErrorBoundary, {
			fallback: route.errors[i].default,
			children: element
		});
		const LayoutComponent = route.layouts[i]?.default;
		if (LayoutComponent) {
			{
				const LayoutNotFound = route.notFounds?.[i]?.default;
				if (LayoutNotFound) element = (0, import_react_react_server.createElement)(NotFoundBoundary, {
					fallback: (0, import_react_react_server.createElement)(LayoutNotFound),
					children: element
				});
			}
			const layoutProps = {
				children: element,
				params: makeThenableParams(params)
			};
			if (route.slots) for (const [slotName, slotMod] of Object.entries(route.slots)) {
				const targetIdx = slotMod.layoutIndex >= 0 ? slotMod.layoutIndex : route.layouts.length - 1;
				if (i !== targetIdx) continue;
				let SlotPage = null;
				let slotParams = params;
				if (opts && opts.interceptSlot === slotName && opts.interceptPage) {
					SlotPage = opts.interceptPage.default;
					slotParams = opts.interceptParams || params;
				} else SlotPage = slotMod.page?.default || slotMod.default?.default;
				if (SlotPage) {
					let slotElement = (0, import_react_react_server.createElement)(SlotPage, { params: makeThenableParams(slotParams) });
					const SlotLayout = slotMod.layout?.default;
					if (SlotLayout) slotElement = (0, import_react_react_server.createElement)(SlotLayout, {
						children: slotElement,
						params: makeThenableParams(slotParams)
					});
					if (slotMod.loading?.default) slotElement = (0, import_react_react_server.createElement)(import_react_react_server.Suspense, { fallback: (0, import_react_react_server.createElement)(slotMod.loading.default) }, slotElement);
					if (slotMod.error?.default) slotElement = (0, import_react_react_server.createElement)(ErrorBoundary, {
						fallback: slotMod.error.default,
						children: slotElement
					});
					layoutProps[slotName] = slotElement;
				}
			}
			element = (0, import_react_react_server.createElement)(LayoutComponent, layoutProps);
			const treePos = route.layoutTreePositions ? route.layoutTreePositions[i] : 0;
			element = (0, import_react_react_server.createElement)(LayoutSegmentProvider, { childSegments: __resolveChildSegments(route.routeSegments || [], treePos, params) }, element);
		}
	}
	return element;
}
var __basePath = "";
var __trailingSlash = false;
var __configRedirects = [];
var __configRewrites = {
	"beforeFiles": [],
	"afterFiles": [],
	"fallback": []
};
var __configHeaders = [];
var __allowedOrigins = [];
function __normalizePath(pathname) {
	if (pathname === "/" || pathname.length > 1 && pathname[0] === "/" && !pathname.includes("//") && !pathname.includes("/./") && !pathname.includes("/../") && !pathname.endsWith("/.") && !pathname.endsWith("/..")) return pathname;
	const segments = pathname.split("/");
	const resolved = [];
	for (let i = 0; i < segments.length; i++) {
		const seg = segments[i];
		if (seg === "" || seg === ".") continue;
		if (seg === "..") resolved.pop();
		else resolved.push(seg);
	}
	return "/" + resolved.join("/");
}
var __pathDelimiterRegex = /([/#?\\]|%(2f|23|3f|5c))/gi;
function __decodeRouteSegment(segment) {
	return decodeURIComponent(segment).replace(__pathDelimiterRegex, function(char) {
		return encodeURIComponent(char);
	});
}
function __decodeRouteSegmentSafe(segment) {
	try {
		return __decodeRouteSegment(segment);
	} catch (e) {
		return segment;
	}
}
function __normalizePathnameForRouteMatch(pathname) {
	const segments = pathname.split("/");
	const normalized = [];
	for (let i = 0; i < segments.length; i++) normalized.push(__decodeRouteSegmentSafe(segments[i]));
	return normalized.join("/");
}
function __normalizePathnameForRouteMatchStrict(pathname) {
	const segments = pathname.split("/");
	const normalized = [];
	for (let i = 0; i < segments.length; i++) normalized.push(__decodeRouteSegment(segments[i]));
	return normalized.join("/");
}
/**
* Build a request context from the live ALS HeadersContext, which reflects
* any x-middleware-request-* header mutations applied by middleware.
* Used for afterFiles and fallback rewrite has/missing evaluation — these
* run after middleware in the App Router execution order.
*/
function __buildPostMwRequestContext(request) {
	const url = new URL(request.url);
	const ctx = getHeadersContext();
	if (!ctx) return requestContextFromRequest(request);
	const cookiesRecord = Object.fromEntries(ctx.cookies);
	return {
		headers: ctx.headers,
		cookies: cookiesRecord,
		query: url.searchParams,
		host: normalizeHost(ctx.headers.get("host"), url.hostname)
	};
}
/**
* Maximum server-action request body size.
* Configurable via experimental.serverActions.bodySizeLimit in next.config.
* Defaults to 1MB, matching the Next.js default.
* @see https://nextjs.org/docs/app/api-reference/config/next-config-js/serverActions#bodysizelimit
* Prevents unbounded request body buffering.
*/
var __MAX_ACTION_BODY_SIZE = 1048576;
/**
* Read a request body as text with a size limit.
* Enforces the limit on the actual byte stream to prevent bypasses
* via chunked transfer-encoding where Content-Length is absent or spoofed.
*/
async function __readBodyWithLimit(request, maxBytes) {
	if (!request.body) return "";
	var reader = request.body.getReader();
	var decoder = new TextDecoder();
	var chunks = [];
	var totalSize = 0;
	for (;;) {
		var result = await reader.read();
		if (result.done) break;
		totalSize += result.value.byteLength;
		if (totalSize > maxBytes) {
			reader.cancel();
			throw new Error("Request body too large");
		}
		chunks.push(decoder.decode(result.value, { stream: true }));
	}
	chunks.push(decoder.decode());
	return chunks.join("");
}
/**
* Read a request body as FormData with a size limit.
* Consumes the body stream with a byte counter and then parses the
* collected bytes as multipart form data via the Response constructor.
*/
async function __readFormDataWithLimit(request, maxBytes) {
	if (!request.body) return new FormData();
	var reader = request.body.getReader();
	var chunks = [];
	var totalSize = 0;
	for (;;) {
		var result = await reader.read();
		if (result.done) break;
		totalSize += result.value.byteLength;
		if (totalSize > maxBytes) {
			reader.cancel();
			throw new Error("Request body too large");
		}
		chunks.push(result.value);
	}
	var combined = new Uint8Array(totalSize);
	var offset = 0;
	for (var chunk of chunks) {
		combined.set(chunk, offset);
		offset += chunk.byteLength;
	}
	var contentType = request.headers.get("content-type") || "";
	return new Response(combined, { headers: { "Content-Type": contentType } }).formData();
}
var generateStaticParamsMap = {
	"/users/:username/repos": null,
	"/users/:username/repos/:repo": null,
	"/users/:username": null
};
async function handler(request, ctx) {
	return runWithRequestContext(createRequestContext({
		headersContext: headersContextFromRequest(request),
		executionContext: ctx ?? getRequestExecutionContext() ?? null
	}), async () => {
		ensureFetchPatch();
		const __reqCtx = requestContextFromRequest(request);
		const response = await _handleRequest(request, __reqCtx, {
			headers: null,
			status: null
		});
		if (response && response.headers && !(response.status >= 300 && response.status < 400)) {
			if (__configHeaders.length) {
				const url = new URL(request.url);
				let pathname;
				try {
					pathname = __normalizePath(__normalizePathnameForRouteMatch(url.pathname));
				} catch {
					pathname = url.pathname;
				}
				const extraHeaders = matchHeaders(pathname, __configHeaders, __reqCtx);
				for (const h of extraHeaders) {
					const lk = h.key.toLowerCase();
					if (lk === "vary" || lk === "set-cookie") response.headers.append(h.key, h.value);
					else if (!response.headers.has(lk)) response.headers.set(h.key, h.value);
				}
			}
		}
		return response;
	});
}
async function _handleRequest(request, __reqCtx, _mwCtx) {
	const url = new URL(request.url);
	const __protoGuard = guardProtocolRelativeUrl(url.pathname);
	if (__protoGuard) return __protoGuard;
	let decodedUrlPathname;
	try {
		decodedUrlPathname = __normalizePathnameForRouteMatchStrict(url.pathname);
	} catch (e) {
		return new Response("Bad Request", { status: 400 });
	}
	let pathname = __normalizePath(decodedUrlPathname);
	if (pathname === "/__vinext/prerender/static-params") {
		if (process.env.VINEXT_PRERENDER !== "1") return new Response("Not Found", { status: 404 });
		const pattern = url.searchParams.get("pattern");
		if (!pattern) return new Response("missing pattern", { status: 400 });
		const fn = generateStaticParamsMap[pattern];
		if (typeof fn !== "function") return new Response("null", {
			status: 200,
			headers: { "content-type": "application/json" }
		});
		try {
			const parentParams = url.searchParams.get("parentParams");
			const raw = parentParams ? JSON.parse(parentParams) : {};
			const result = await fn({ params: typeof raw === "object" && raw !== null && !Array.isArray(raw) ? raw : {} });
			return new Response(JSON.stringify(result), {
				status: 200,
				headers: { "content-type": "application/json" }
			});
		} catch (e) {
			return new Response(JSON.stringify({ error: String(e) }), {
				status: 500,
				headers: { "content-type": "application/json" }
			});
		}
	}
	const __tsRedirect = normalizeTrailingSlash(pathname, __basePath, __trailingSlash, url.search);
	if (__tsRedirect) return __tsRedirect;
	if (__configRedirects.length) {
		const __redir = matchRedirect(pathname.endsWith(".rsc") ? pathname.slice(0, -4) : pathname, __configRedirects, __reqCtx);
		if (__redir) {
			const __redirDest = sanitizeDestination(__redir.destination);
			return new Response(null, {
				status: __redir.permanent ? 308 : 307,
				headers: { Location: __redirDest }
			});
		}
	}
	const isRscRequest = pathname.endsWith(".rsc") || request.headers.get("accept")?.includes("text/x-component");
	let cleanPathname = pathname.replace(/\.rsc$/, "");
	const __postMwReqCtx = __buildPostMwRequestContext(request);
	if (__configRewrites.beforeFiles && __configRewrites.beforeFiles.length) {
		const __rewritten = matchRewrite(cleanPathname, __configRewrites.beforeFiles, __postMwReqCtx);
		if (__rewritten) {
			if (isExternalUrl(__rewritten)) {
				setHeadersContext(null);
				setNavigationContext(null);
				return proxyExternalRequest(request, __rewritten);
			}
			cleanPathname = __rewritten;
		}
	}
	if (cleanPathname === "/_vinext/image") {
		const __imgResult = validateImageUrl(url.searchParams.get("url"), request.url);
		if (__imgResult instanceof Response) return __imgResult;
		return Response.redirect(new URL(__imgResult, url.origin).href, 302);
	}
	for (const metaRoute of metadataRoutes) {
		if (metaRoute.type === "sitemap" && metaRoute.isDynamic && typeof metaRoute.module.generateSitemaps === "function") {
			const sitemapPrefix = metaRoute.servedUrl.slice(0, -4);
			if (cleanPathname.startsWith(sitemapPrefix + "/") && cleanPathname.endsWith(".xml")) {
				const rawId = cleanPathname.slice(sitemapPrefix.length + 1, -4);
				if (rawId.includes("/")) continue;
				const matched = (await metaRoute.module.generateSitemaps()).find(function(s) {
					return String(s.id) === rawId;
				});
				if (!matched) return new Response("Not Found", { status: 404 });
				const result = await metaRoute.module.default({ id: matched.id });
				if (result instanceof Response) return result;
				return new Response(sitemapToXml(result), { headers: { "Content-Type": metaRoute.contentType } });
			}
			continue;
		}
		var _metaParams = null;
		if (metaRoute.patternParts) {
			_metaParams = matchPattern(cleanPathname.split("/").filter(Boolean), metaRoute.patternParts);
			if (!_metaParams) continue;
		} else if (cleanPathname !== metaRoute.servedUrl) continue;
		if (metaRoute.isDynamic) {
			const metaFn = metaRoute.module.default;
			if (typeof metaFn === "function") {
				const result = await metaFn({ params: makeThenableParams(_metaParams || {}) });
				let body;
				if (result instanceof Response) return result;
				if (metaRoute.type === "sitemap") body = sitemapToXml(result);
				else if (metaRoute.type === "robots") body = robotsToText(result);
				else if (metaRoute.type === "manifest") body = manifestToJson(result);
				else body = JSON.stringify(result);
				return new Response(body, { headers: { "Content-Type": metaRoute.contentType } });
			}
		} else try {
			const binary = atob(metaRoute.fileDataBase64);
			const bytes = new Uint8Array(binary.length);
			for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
			return new Response(bytes, { headers: {
				"Content-Type": metaRoute.contentType,
				"Cache-Control": "public, max-age=0, must-revalidate"
			} });
		} catch {
			return new Response("Not Found", { status: 404 });
		}
	}
	setNavigationContext({
		pathname: cleanPathname,
		searchParams: url.searchParams,
		params: {}
	});
	const actionId = request.headers.get("x-rsc-action");
	if (request.method === "POST" && actionId) {
		const csrfResponse = validateCsrfOrigin(request, __allowedOrigins);
		if (csrfResponse) return csrfResponse;
		if (parseInt(request.headers.get("content-length") || "0", 10) > __MAX_ACTION_BODY_SIZE) {
			setHeadersContext(null);
			setNavigationContext(null);
			return new Response("Payload Too Large", { status: 413 });
		}
		try {
			const contentType = request.headers.get("content-type") || "";
			let body;
			try {
				body = contentType.startsWith("multipart/form-data") ? await __readFormDataWithLimit(request, __MAX_ACTION_BODY_SIZE) : await __readBodyWithLimit(request, __MAX_ACTION_BODY_SIZE);
			} catch (sizeErr) {
				if (sizeErr && sizeErr.message === "Request body too large") {
					setHeadersContext(null);
					setNavigationContext(null);
					return new Response("Payload Too Large", { status: 413 });
				}
				throw sizeErr;
			}
			const temporaryReferences = createTemporaryReferenceSet();
			const args = await decodeReply(body, { temporaryReferences });
			const action = await loadServerAction(actionId);
			let returnValue;
			let actionRedirect = null;
			const previousHeadersPhase = setHeadersAccessPhase("action");
			try {
				try {
					returnValue = {
						ok: true,
						data: await action.apply(null, args)
					};
				} catch (e) {
					if (e && typeof e === "object" && "digest" in e) {
						const digest = String(e.digest);
						if (digest.startsWith("NEXT_REDIRECT;")) {
							const parts = digest.split(";");
							actionRedirect = {
								url: decodeURIComponent(parts[2]),
								type: parts[1] || "replace",
								status: parts[3] ? parseInt(parts[3], 10) : 307
							};
							returnValue = {
								ok: true,
								data: void 0
							};
						} else if (digest === "NEXT_NOT_FOUND" || digest.startsWith("NEXT_HTTP_ERROR_FALLBACK;")) returnValue = {
							ok: false,
							data: e
						};
						else {
							console.error("[vinext] Server action error:", e);
							returnValue = {
								ok: false,
								data: __sanitizeErrorForClient(e)
							};
						}
					} else {
						console.error("[vinext] Server action error:", e);
						returnValue = {
							ok: false,
							data: __sanitizeErrorForClient(e)
						};
					}
				}
			} finally {
				setHeadersAccessPhase(previousHeadersPhase);
			}
			if (actionRedirect) {
				const actionPendingCookies = getAndClearPendingCookies();
				const actionDraftCookie = getDraftModeCookieHeader();
				setHeadersContext(null);
				setNavigationContext(null);
				const redirectHeaders = new Headers({
					"Content-Type": "text/x-component; charset=utf-8",
					"Vary": "RSC, Accept",
					"x-action-redirect": actionRedirect.url,
					"x-action-redirect-type": actionRedirect.type,
					"x-action-redirect-status": String(actionRedirect.status)
				});
				for (const cookie of actionPendingCookies) redirectHeaders.append("Set-Cookie", cookie);
				if (actionDraftCookie) redirectHeaders.append("Set-Cookie", actionDraftCookie);
				return new Response("", {
					status: 200,
					headers: redirectHeaders
				});
			}
			const match = matchRoute(cleanPathname);
			let element;
			if (match) {
				const { route: actionRoute, params: actionParams } = match;
				setNavigationContext({
					pathname: cleanPathname,
					searchParams: url.searchParams,
					params: actionParams
				});
				element = buildPageElement(actionRoute, actionParams, void 0, url.searchParams);
			} else element = (0, import_react_react_server.createElement)("div", null, "Page not found");
			const onRenderError = createRscOnErrorHandler(request, cleanPathname, match ? match.route.pattern : cleanPathname);
			const rscStream = renderToReadableStream({
				root: element,
				returnValue
			}, {
				temporaryReferences,
				onError: onRenderError
			});
			const actionPendingCookies = getAndClearPendingCookies();
			const actionDraftCookie = getDraftModeCookieHeader();
			const actionResponse = new Response(rscStream, { headers: {
				"Content-Type": "text/x-component; charset=utf-8",
				"Vary": "RSC, Accept"
			} });
			if (actionPendingCookies.length > 0 || actionDraftCookie) {
				for (const cookie of actionPendingCookies) actionResponse.headers.append("Set-Cookie", cookie);
				if (actionDraftCookie) actionResponse.headers.append("Set-Cookie", actionDraftCookie);
			}
			return actionResponse;
		} catch (err) {
			getAndClearPendingCookies();
			console.error("[vinext] Server action error:", err);
			reportRequestError(err instanceof Error ? err : new Error(String(err)), {
				path: cleanPathname,
				method: request.method,
				headers: Object.fromEntries(request.headers.entries())
			}, {
				routerKind: "App Router",
				routePath: cleanPathname,
				routeType: "action"
			});
			setHeadersContext(null);
			setNavigationContext(null);
			return new Response("Internal Server Error", { status: 500 });
		}
	}
	if (__configRewrites.afterFiles && __configRewrites.afterFiles.length) {
		const __afterRewritten = matchRewrite(cleanPathname, __configRewrites.afterFiles, __postMwReqCtx);
		if (__afterRewritten) {
			if (isExternalUrl(__afterRewritten)) {
				setHeadersContext(null);
				setNavigationContext(null);
				return proxyExternalRequest(request, __afterRewritten);
			}
			cleanPathname = __afterRewritten;
		}
	}
	let match = matchRoute(cleanPathname);
	if (!match && __configRewrites.fallback && __configRewrites.fallback.length) {
		const __fallbackRewritten = matchRewrite(cleanPathname, __configRewrites.fallback, __postMwReqCtx);
		if (__fallbackRewritten) {
			if (isExternalUrl(__fallbackRewritten)) {
				setHeadersContext(null);
				setNavigationContext(null);
				return proxyExternalRequest(request, __fallbackRewritten);
			}
			cleanPathname = __fallbackRewritten;
			match = matchRoute(cleanPathname);
		}
	}
	if (!match) {
		const notFoundResponse = await renderNotFoundPage(null, isRscRequest, request);
		if (notFoundResponse) return notFoundResponse;
		setHeadersContext(null);
		setNavigationContext(null);
		return new Response("Not Found", { status: 404 });
	}
	const { route, params } = match;
	setNavigationContext({
		pathname: cleanPathname,
		searchParams: url.searchParams,
		params
	});
	if (route.routeHandler) {
		const handler = route.routeHandler;
		const method = request.method.toUpperCase();
		const revalidateSeconds = typeof handler.revalidate === "number" && handler.revalidate > 0 && handler.revalidate !== Infinity ? handler.revalidate : null;
		if (typeof handler["default"] === "function" && false);
		const allowHeaderForOptions = buildRouteHandlerAllowHeader(collectRouteHandlerMethods(handler));
		function attachRouteHandlerMiddlewareContext(response) {
			if (!_mwCtx.headers && _mwCtx.status == null) return response;
			const responseHeaders = new Headers(response.headers);
			if (_mwCtx.headers) for (const [key, value] of _mwCtx.headers) responseHeaders.append(key, value);
			return new Response(response.body, {
				status: _mwCtx.status ?? response.status,
				statusText: response.statusText,
				headers: responseHeaders
			});
		}
		if (method === "OPTIONS" && typeof handler["OPTIONS"] !== "function") {
			setHeadersContext(null);
			setNavigationContext(null);
			return attachRouteHandlerMiddlewareContext(new Response(null, {
				status: 204,
				headers: { "Allow": allowHeaderForOptions }
			}));
		}
		let handlerFn = handler[method];
		let isAutoHead = false;
		if (method === "HEAD" && typeof handler["HEAD"] !== "function" && typeof handler["GET"] === "function") {
			handlerFn = handler["GET"];
			isAutoHead = true;
		}
		if (revalidateSeconds !== null && handler.dynamic !== "force-dynamic" && (method === "GET" || isAutoHead) && typeof handlerFn === "function") {
			const __routeKey = __isrRouteKey(cleanPathname);
			try {
				const __cached = await __isrGet(__routeKey);
				if (__cached && !__cached.isStale && __cached.value.value && __cached.value.value.kind === "APP_ROUTE") {
					const __cv = __cached.value.value;
					__isrDebug?.("HIT (route)", cleanPathname);
					setHeadersContext(null);
					setNavigationContext(null);
					const __hitHeaders = Object.assign({}, __cv.headers || {});
					__hitHeaders["X-Vinext-Cache"] = "HIT";
					__hitHeaders["Cache-Control"] = "s-maxage=" + revalidateSeconds + ", stale-while-revalidate";
					if (isAutoHead) return attachRouteHandlerMiddlewareContext(new Response(null, {
						status: __cv.status,
						headers: __hitHeaders
					}));
					return attachRouteHandlerMiddlewareContext(new Response(__cv.body, {
						status: __cv.status,
						headers: __hitHeaders
					}));
				}
				if (__cached && __cached.isStale && __cached.value.value && __cached.value.value.kind === "APP_ROUTE") {
					const __sv = __cached.value.value;
					const __revalSecs = revalidateSeconds;
					const __revalHandlerFn = handlerFn;
					const __revalParams = params;
					const __revalUrl = request.url;
					const __revalSearchParams = new URLSearchParams(url.searchParams);
					__triggerBackgroundRegeneration(__routeKey, async function() {
						await runWithRequestContext(createRequestContext({
							headersContext: {
								headers: new Headers(),
								cookies: /* @__PURE__ */ new Map()
							},
							executionContext: getRequestExecutionContext()
						}), async () => {
							ensureFetchPatch();
							setNavigationContext({
								pathname: cleanPathname,
								searchParams: __revalSearchParams,
								params: __revalParams
							});
							const __revalResponse = await __revalHandlerFn(new Request(__revalUrl, { method: "GET" }), { params: __revalParams });
							const __regenDynamic = consumeDynamicUsage();
							setNavigationContext(null);
							if (__regenDynamic) {
								__isrDebug?.("route regen skipped (dynamic usage)", cleanPathname);
								return;
							}
							const __freshBody = await __revalResponse.arrayBuffer();
							const __freshHeaders = {};
							__revalResponse.headers.forEach(function(v, k) {
								if (k !== "x-vinext-cache" && k !== "cache-control") __freshHeaders[k] = v;
							});
							const __routeTags = __pageCacheTags(cleanPathname, getCollectedFetchTags());
							await __isrSet(__routeKey, {
								kind: "APP_ROUTE",
								body: __freshBody,
								status: __revalResponse.status,
								headers: __freshHeaders
							}, __revalSecs, __routeTags);
							__isrDebug?.("route regen complete", __routeKey);
						});
					});
					__isrDebug?.("STALE (route)", cleanPathname);
					setHeadersContext(null);
					setNavigationContext(null);
					const __staleHeaders = Object.assign({}, __sv.headers || {});
					__staleHeaders["X-Vinext-Cache"] = "STALE";
					__staleHeaders["Cache-Control"] = "s-maxage=0, stale-while-revalidate";
					if (isAutoHead) return attachRouteHandlerMiddlewareContext(new Response(null, {
						status: __sv.status,
						headers: __staleHeaders
					}));
					return attachRouteHandlerMiddlewareContext(new Response(__sv.body, {
						status: __sv.status,
						headers: __staleHeaders
					}));
				}
			} catch (__routeCacheErr) {
				console.error("[vinext] ISR route cache read error:", __routeCacheErr);
			}
		}
		if (typeof handlerFn === "function") {
			const previousHeadersPhase = setHeadersAccessPhase("route-handler");
			try {
				const response = await handlerFn(request, { params });
				const dynamicUsedInHandler = consumeDynamicUsage();
				const handlerSetCacheControl = response.headers.has("cache-control");
				if (revalidateSeconds !== null && !dynamicUsedInHandler && (method === "GET" || isAutoHead) && !handlerSetCacheControl) response.headers.set("cache-control", "s-maxage=" + revalidateSeconds + ", stale-while-revalidate");
				if (revalidateSeconds !== null && handler.dynamic !== "force-dynamic" && !dynamicUsedInHandler && (method === "GET" || isAutoHead) && !handlerSetCacheControl) {
					response.headers.set("X-Vinext-Cache", "MISS");
					const __routeClone = response.clone();
					const __routeKey = __isrRouteKey(cleanPathname);
					const __revalSecs = revalidateSeconds;
					const __routeTags = __pageCacheTags(cleanPathname, getCollectedFetchTags());
					const __routeWritePromise = (async () => {
						try {
							const __buf = await __routeClone.arrayBuffer();
							const __hdrs = {};
							__routeClone.headers.forEach(function(v, k) {
								if (k !== "x-vinext-cache" && k !== "cache-control") __hdrs[k] = v;
							});
							await __isrSet(__routeKey, {
								kind: "APP_ROUTE",
								body: __buf,
								status: __routeClone.status,
								headers: __hdrs
							}, __revalSecs, __routeTags);
							__isrDebug?.("route cache written", __routeKey);
						} catch (__cacheErr) {
							console.error("[vinext] ISR route cache write error:", __cacheErr);
						}
					})();
					getRequestExecutionContext()?.waitUntil(__routeWritePromise);
				}
				const pendingCookies = getAndClearPendingCookies();
				const draftCookie = getDraftModeCookieHeader();
				setHeadersContext(null);
				setNavigationContext(null);
				if (pendingCookies.length > 0 || draftCookie) {
					const newHeaders = new Headers(response.headers);
					for (const cookie of pendingCookies) newHeaders.append("Set-Cookie", cookie);
					if (draftCookie) newHeaders.append("Set-Cookie", draftCookie);
					if (isAutoHead) return attachRouteHandlerMiddlewareContext(new Response(null, {
						status: response.status,
						statusText: response.statusText,
						headers: newHeaders
					}));
					return attachRouteHandlerMiddlewareContext(new Response(response.body, {
						status: response.status,
						statusText: response.statusText,
						headers: newHeaders
					}));
				}
				if (isAutoHead) return attachRouteHandlerMiddlewareContext(new Response(null, {
					status: response.status,
					statusText: response.statusText,
					headers: response.headers
				}));
				return attachRouteHandlerMiddlewareContext(response);
			} catch (err) {
				getAndClearPendingCookies();
				if (err && typeof err === "object" && "digest" in err) {
					const digest = String(err.digest);
					if (digest.startsWith("NEXT_REDIRECT;")) {
						const parts = digest.split(";");
						const redirectUrl = decodeURIComponent(parts[2]);
						const statusCode = parts[3] ? parseInt(parts[3], 10) : 307;
						setHeadersContext(null);
						setNavigationContext(null);
						return attachRouteHandlerMiddlewareContext(new Response(null, {
							status: statusCode,
							headers: { Location: new URL(redirectUrl, request.url).toString() }
						}));
					}
					if (digest === "NEXT_NOT_FOUND" || digest.startsWith("NEXT_HTTP_ERROR_FALLBACK;")) {
						const statusCode = digest === "NEXT_NOT_FOUND" ? 404 : parseInt(digest.split(";")[1], 10);
						setHeadersContext(null);
						setNavigationContext(null);
						return attachRouteHandlerMiddlewareContext(new Response(null, { status: statusCode }));
					}
				}
				setHeadersContext(null);
				setNavigationContext(null);
				console.error("[vinext] Route handler error:", err);
				reportRequestError(err instanceof Error ? err : new Error(String(err)), {
					path: cleanPathname,
					method: request.method,
					headers: Object.fromEntries(request.headers.entries())
				}, {
					routerKind: "App Router",
					routePath: route.pattern,
					routeType: "route"
				});
				return attachRouteHandlerMiddlewareContext(new Response(null, { status: 500 }));
			} finally {
				setHeadersAccessPhase(previousHeadersPhase);
			}
		}
		setHeadersContext(null);
		setNavigationContext(null);
		return attachRouteHandlerMiddlewareContext(new Response(null, { status: 405 }));
	}
	const PageComponent = route.page?.default;
	if (!PageComponent) {
		setHeadersContext(null);
		setNavigationContext(null);
		return new Response("Page has no default export", { status: 500 });
	}
	let revalidateSeconds = typeof route.page?.revalidate === "number" ? route.page.revalidate : null;
	const dynamicConfig = route.page?.dynamic;
	const dynamicParamsConfig = route.page?.dynamicParams;
	const isForceStatic = dynamicConfig === "force-static";
	const isDynamicError = dynamicConfig === "error";
	if (isForceStatic) {
		setHeadersContext({
			headers: new Headers(),
			cookies: /* @__PURE__ */ new Map()
		});
		setNavigationContext({
			pathname: cleanPathname,
			searchParams: new URLSearchParams(),
			params
		});
	}
	if (isDynamicError) {
		setHeadersContext({
			headers: new Headers(),
			cookies: /* @__PURE__ */ new Map(),
			accessError: /* @__PURE__ */ new Error("Page with `dynamic = \"error\"` used a dynamic API. This page was expected to be fully static, but headers(), cookies(), or searchParams was accessed. Remove the dynamic API usage or change the dynamic config to \"auto\" or \"force-dynamic\".")
		});
		setNavigationContext({
			pathname: cleanPathname,
			searchParams: new URLSearchParams(),
			params
		});
	}
	const isForceDynamic = dynamicConfig === "force-dynamic";
	if (!isForceDynamic && revalidateSeconds !== null && revalidateSeconds > 0 && revalidateSeconds !== Infinity) {
		const __isrKey = isRscRequest ? __isrRscKey(cleanPathname) : __isrHtmlKey(cleanPathname);
		try {
			const __cached = await __isrGet(__isrKey);
			if (__cached && !__cached.isStale && __cached.value.value && __cached.value.value.kind === "APP_PAGE") {
				const __cachedValue = __cached.value.value;
				const __hasRsc = !!__cachedValue.rscData;
				const __hasHtml = typeof __cachedValue.html === "string" && __cachedValue.html.length > 0;
				if (isRscRequest && __hasRsc) {
					__isrDebug?.("HIT (RSC)", cleanPathname);
					setHeadersContext(null);
					setNavigationContext(null);
					return new Response(__cachedValue.rscData, {
						status: __cachedValue.status || 200,
						headers: {
							"Content-Type": "text/x-component; charset=utf-8",
							"Cache-Control": "s-maxage=" + revalidateSeconds + ", stale-while-revalidate",
							"Vary": "RSC, Accept",
							"X-Vinext-Cache": "HIT"
						}
					});
				}
				if (!isRscRequest && __hasHtml) {
					__isrDebug?.("HIT (HTML)", cleanPathname);
					setHeadersContext(null);
					setNavigationContext(null);
					return new Response(__cachedValue.html, {
						status: __cachedValue.status || 200,
						headers: {
							"Content-Type": "text/html; charset=utf-8",
							"Cache-Control": "s-maxage=" + revalidateSeconds + ", stale-while-revalidate",
							"Vary": "RSC, Accept",
							"X-Vinext-Cache": "HIT"
						}
					});
				}
				__isrDebug?.("MISS (empty cached entry)", cleanPathname);
			}
			if (__cached && __cached.isStale && __cached.value.value && __cached.value.value.kind === "APP_PAGE") {
				const __staleValue = __cached.value.value;
				const __staleStatus = __staleValue.status || 200;
				const __revalSecs = revalidateSeconds;
				__triggerBackgroundRegeneration(cleanPathname, async function() {
					const __revalResult = await runWithRequestContext(createRequestContext({
						headersContext: {
							headers: new Headers(),
							cookies: /* @__PURE__ */ new Map()
						},
						executionContext: getRequestExecutionContext()
					}), async () => {
						ensureFetchPatch();
						setNavigationContext({
							pathname: cleanPathname,
							searchParams: new URLSearchParams(),
							params
						});
						const [__revalRscForSsr, __revalRscForCapture] = renderToReadableStream(await buildPageElement(route, params, void 0, new URLSearchParams()), { onError: createRscOnErrorHandler(request, cleanPathname, route.pattern) }).tee();
						const __rscDataPromise = (async () => {
							const __rscReader = __revalRscForCapture.getReader();
							const __rscChunks = [];
							let __rscTotal = 0;
							for (;;) {
								const { done, value } = await __rscReader.read();
								if (done) break;
								__rscChunks.push(value);
								__rscTotal += value.byteLength;
							}
							const __rscBuf = new Uint8Array(__rscTotal);
							let __rscOff = 0;
							for (const c of __rscChunks) {
								__rscBuf.set(c, __rscOff);
								__rscOff += c.byteLength;
							}
							return __rscBuf.buffer;
						})();
						const __revalFontData = {
							links: getSSRFontLinks(),
							styles: _getSSRFontStyles(),
							preloads: _getSSRFontPreloads()
						};
						const __revalHtmlStream = await (await import("./ssr/index.js")).handleSsr(__revalRscForSsr, getNavigationContext(), __revalFontData);
						setHeadersContext(null);
						setNavigationContext(null);
						const __revalReader = __revalHtmlStream.getReader();
						const __revalDecoder = new TextDecoder();
						const __revalChunks = [];
						for (;;) {
							const { done, value } = await __revalReader.read();
							if (done) break;
							__revalChunks.push(__revalDecoder.decode(value, { stream: true }));
						}
						__revalChunks.push(__revalDecoder.decode());
						return {
							html: __revalChunks.join(""),
							rscData: await __rscDataPromise,
							tags: __pageCacheTags(cleanPathname, getCollectedFetchTags())
						};
					});
					await Promise.all([__isrSet(__isrHtmlKey(cleanPathname), {
						kind: "APP_PAGE",
						html: __revalResult.html,
						rscData: void 0,
						headers: void 0,
						postponed: void 0,
						status: 200
					}, __revalSecs, __revalResult.tags), __isrSet(__isrRscKey(cleanPathname), {
						kind: "APP_PAGE",
						html: "",
						rscData: __revalResult.rscData,
						headers: void 0,
						postponed: void 0,
						status: 200
					}, __revalSecs, __revalResult.tags)]);
					__isrDebug?.("regen complete", cleanPathname);
				});
				if (isRscRequest && __staleValue.rscData) {
					__isrDebug?.("STALE (RSC)", cleanPathname);
					setHeadersContext(null);
					setNavigationContext(null);
					return new Response(__staleValue.rscData, {
						status: __staleStatus,
						headers: {
							"Content-Type": "text/x-component; charset=utf-8",
							"Cache-Control": "s-maxage=0, stale-while-revalidate",
							"Vary": "RSC, Accept",
							"X-Vinext-Cache": "STALE"
						}
					});
				}
				if (!isRscRequest && typeof __staleValue.html === "string" && __staleValue.html.length > 0) {
					__isrDebug?.("STALE (HTML)", cleanPathname);
					setHeadersContext(null);
					setNavigationContext(null);
					return new Response(__staleValue.html, {
						status: __staleStatus,
						headers: {
							"Content-Type": "text/html; charset=utf-8",
							"Cache-Control": "s-maxage=0, stale-while-revalidate",
							"Vary": "RSC, Accept",
							"X-Vinext-Cache": "STALE"
						}
					});
				}
				__isrDebug?.("STALE MISS (empty stale entry)", cleanPathname);
			}
			if (!__cached) __isrDebug?.("MISS (no cache entry)", cleanPathname);
		} catch (__isrReadErr) {
			console.error("[vinext] ISR cache read error:", __isrReadErr);
		}
	}
	if (dynamicParamsConfig === false && route.isDynamic && typeof route.page?.generateStaticParams === "function") try {
		const staticParams = await route.page.generateStaticParams({ params });
		if (Array.isArray(staticParams)) {
			const paramKeys = Object.keys(params);
			if (!staticParams.some((sp) => paramKeys.every((key) => {
				const val = params[key];
				const staticVal = sp[key];
				if (staticVal === void 0) return true;
				if (Array.isArray(val)) return JSON.stringify(val) === JSON.stringify(staticVal);
				return String(val) === String(staticVal);
			}))) {
				setHeadersContext(null);
				setNavigationContext(null);
				return new Response("Not Found", { status: 404 });
			}
		}
	} catch (err) {
		console.error("[vinext] generateStaticParams error:", err);
	}
	let interceptOpts = void 0;
	if (isRscRequest) {
		const intercept = findIntercept(cleanPathname);
		if (intercept) {
			const sourceRoute = routes[intercept.sourceRouteIndex];
			if (sourceRoute && sourceRoute !== route) {
				const sourceMatch = matchRoute(sourceRoute.pattern);
				const sourceParams = sourceMatch ? sourceMatch.params : {};
				setNavigationContext({
					pathname: cleanPathname,
					searchParams: url.searchParams,
					params: intercept.matchedParams
				});
				const interceptStream = renderToReadableStream(await buildPageElement(sourceRoute, sourceParams, {
					interceptSlot: intercept.slotName,
					interceptPage: intercept.page,
					interceptParams: intercept.matchedParams
				}, url.searchParams), { onError: createRscOnErrorHandler(request, cleanPathname, sourceRoute.pattern) });
				return new Response(interceptStream, { headers: {
					"Content-Type": "text/x-component; charset=utf-8",
					"Vary": "RSC, Accept"
				} });
			}
			interceptOpts = {
				interceptSlot: intercept.slotName,
				interceptPage: intercept.page,
				interceptParams: intercept.matchedParams
			};
		}
	}
	let element;
	try {
		element = await buildPageElement(route, params, interceptOpts, url.searchParams);
	} catch (buildErr) {
		if (buildErr && typeof buildErr === "object" && "digest" in buildErr) {
			const digest = String(buildErr.digest);
			if (digest.startsWith("NEXT_REDIRECT;")) {
				const parts = digest.split(";");
				const redirectUrl = decodeURIComponent(parts[2]);
				const statusCode = parts[3] ? parseInt(parts[3], 10) : 307;
				setHeadersContext(null);
				setNavigationContext(null);
				return Response.redirect(new URL(redirectUrl, request.url), statusCode);
			}
			if (digest === "NEXT_NOT_FOUND" || digest.startsWith("NEXT_HTTP_ERROR_FALLBACK;")) {
				const statusCode = digest === "NEXT_NOT_FOUND" ? 404 : parseInt(digest.split(";")[1], 10);
				const fallbackResp = await renderHTTPAccessFallbackPage(route, statusCode, isRscRequest, request, { matchedParams: params });
				if (fallbackResp) return fallbackResp;
				setHeadersContext(null);
				setNavigationContext(null);
				const statusText = statusCode === 403 ? "Forbidden" : statusCode === 401 ? "Unauthorized" : "Not Found";
				return new Response(statusText, { status: statusCode });
			}
		}
		const errorBoundaryResp = await renderErrorBoundaryPage(route, buildErr, isRscRequest, request, params);
		if (errorBoundaryResp) return errorBoundaryResp;
		throw buildErr;
	}
	async function handleRenderError(err) {
		if (err && typeof err === "object" && "digest" in err) {
			const digest = String(err.digest);
			if (digest.startsWith("NEXT_REDIRECT;")) {
				const parts = digest.split(";");
				const redirectUrl = decodeURIComponent(parts[2]);
				const statusCode = parts[3] ? parseInt(parts[3], 10) : 307;
				setHeadersContext(null);
				setNavigationContext(null);
				return Response.redirect(new URL(redirectUrl, request.url), statusCode);
			}
			if (digest === "NEXT_NOT_FOUND" || digest.startsWith("NEXT_HTTP_ERROR_FALLBACK;")) {
				const statusCode = digest === "NEXT_NOT_FOUND" ? 404 : parseInt(digest.split(";")[1], 10);
				const fallbackResp = await renderHTTPAccessFallbackPage(route, statusCode, isRscRequest, request, { matchedParams: params });
				if (fallbackResp) return fallbackResp;
				setHeadersContext(null);
				setNavigationContext(null);
				const statusText = statusCode === 403 ? "Forbidden" : statusCode === 401 ? "Unauthorized" : "Not Found";
				return new Response(statusText, { status: statusCode });
			}
		}
		return null;
	}
	if (route.layouts && route.layouts.length > 0) {
		const asyncParams = makeThenableParams(params);
		const _layoutProbeResult = await _suppressHookWarningAls.run(true, async () => {
			for (let li = route.layouts.length - 1; li >= 0; li--) {
				const LayoutComp = route.layouts[li]?.default;
				if (!LayoutComp) continue;
				try {
					const lr = LayoutComp({
						params: asyncParams,
						children: null
					});
					if (lr && typeof lr === "object" && typeof lr.then === "function") await lr;
				} catch (layoutErr) {
					if (layoutErr && typeof layoutErr === "object" && "digest" in layoutErr) {
						const digest = String(layoutErr.digest);
						if (digest.startsWith("NEXT_REDIRECT;")) {
							const parts = digest.split(";");
							const redirectUrl = decodeURIComponent(parts[2]);
							const statusCode = parts[3] ? parseInt(parts[3], 10) : 307;
							setHeadersContext(null);
							setNavigationContext(null);
							return Response.redirect(new URL(redirectUrl, request.url), statusCode);
						}
						if (digest === "NEXT_NOT_FOUND" || digest.startsWith("NEXT_HTTP_ERROR_FALLBACK;")) {
							const statusCode = digest === "NEXT_NOT_FOUND" ? 404 : parseInt(digest.split(";")[1], 10);
							let parentNotFound = null;
							if (route.notFounds) {
								for (let pi = li - 1; pi >= 0; pi--) if (route.notFounds[pi]?.default) {
									parentNotFound = route.notFounds[pi].default;
									break;
								}
							}
							if (!parentNotFound) parentNotFound = null;
							const parentLayouts = route.layouts.slice(0, li);
							const fallbackResp = await renderHTTPAccessFallbackPage(route, statusCode, isRscRequest, request, {
								boundaryComponent: parentNotFound,
								layouts: parentLayouts,
								matchedParams: params
							});
							if (fallbackResp) return fallbackResp;
							setHeadersContext(null);
							setNavigationContext(null);
							const statusText = statusCode === 403 ? "Forbidden" : statusCode === 401 ? "Unauthorized" : "Not Found";
							return new Response(statusText, { status: statusCode });
						}
					}
				}
			}
			return null;
		});
		if (_layoutProbeResult instanceof Response) return _layoutProbeResult;
	}
	const _hasLoadingBoundary = !!(route.loading && route.loading.default);
	const _pageProbeResult = await _suppressHookWarningAls.run(true, async () => {
		try {
			const testResult = PageComponent({ params });
			if (testResult && typeof testResult === "object" && typeof testResult.then === "function") if (!_hasLoadingBoundary) await testResult;
			else testResult.catch(() => {});
		} catch (preRenderErr) {
			const specialResponse = await handleRenderError(preRenderErr);
			if (specialResponse) return specialResponse;
		}
		return null;
	});
	if (_pageProbeResult instanceof Response) return _pageProbeResult;
	const _baseOnError = createRscOnErrorHandler(request, cleanPathname, route.pattern);
	const onRenderError = function(error, requestInfo, errorContext) {
		if (!(error && typeof error === "object" && "digest" in error)) {}
		return _baseOnError(error, requestInfo, errorContext);
	};
	const rscStream = renderToReadableStream(element, { onError: onRenderError });
	let __rscForResponse = rscStream;
	let __isrRscDataPromise = null;
	if (revalidateSeconds !== null && revalidateSeconds > 0 && revalidateSeconds !== Infinity && !isForceDynamic) {
		const [__rscA, __rscB] = rscStream.tee();
		__rscForResponse = __rscA;
		__isrRscDataPromise = (async () => {
			const __rscReader = __rscB.getReader();
			const __rscChunks = [];
			let __rscTotal = 0;
			for (;;) {
				const { done, value } = await __rscReader.read();
				if (done) break;
				__rscChunks.push(value);
				__rscTotal += value.byteLength;
			}
			const __rscBuf = new Uint8Array(__rscTotal);
			let __rscOff = 0;
			for (const c of __rscChunks) {
				__rscBuf.set(c, __rscOff);
				__rscOff += c.byteLength;
			}
			return __rscBuf.buffer;
		})();
	}
	if (isRscRequest) {
		const responseHeaders = {
			"Content-Type": "text/x-component; charset=utf-8",
			"Vary": "RSC, Accept"
		};
		if (params && Object.keys(params).length > 0) responseHeaders["X-Vinext-Params"] = JSON.stringify(params);
		if (isForceDynamic) responseHeaders["Cache-Control"] = "no-store, must-revalidate";
		else if ((isForceStatic || isDynamicError) && !revalidateSeconds) {
			responseHeaders["Cache-Control"] = "s-maxage=31536000, stale-while-revalidate";
			responseHeaders["X-Vinext-Cache"] = "STATIC";
		} else if (revalidateSeconds === Infinity) {
			responseHeaders["Cache-Control"] = "s-maxage=31536000, stale-while-revalidate";
			responseHeaders["X-Vinext-Cache"] = "STATIC";
		} else if (revalidateSeconds) responseHeaders["Cache-Control"] = "s-maxage=" + revalidateSeconds + ", stale-while-revalidate";
		if (_mwCtx.headers) for (const [key, value] of _mwCtx.headers) {
			const lk = key.toLowerCase();
			if (lk === "set-cookie") {
				const existing = responseHeaders[lk];
				if (Array.isArray(existing)) existing.push(value);
				else if (existing) responseHeaders[lk] = [existing, value];
				else responseHeaders[lk] = [value];
			} else if (lk === "vary") {
				const existing = responseHeaders["Vary"] ?? responseHeaders["vary"];
				if (existing) {
					responseHeaders["Vary"] = existing + ", " + value;
					if (responseHeaders["vary"] !== void 0) delete responseHeaders["vary"];
				} else responseHeaders[key] = value;
			} else responseHeaders[key] = value;
		}
		if (__isrRscDataPromise) {
			responseHeaders["X-Vinext-Cache"] = "MISS";
			const __isrKeyRsc = __isrRscKey(cleanPathname);
			const __revalSecsRsc = revalidateSeconds;
			const __rscWritePromise = (async () => {
				try {
					const __rscDataForCache = await __isrRscDataPromise;
					const __pageTags = __pageCacheTags(cleanPathname, getCollectedFetchTags());
					await __isrSet(__isrKeyRsc, {
						kind: "APP_PAGE",
						html: "",
						rscData: __rscDataForCache,
						headers: void 0,
						postponed: void 0,
						status: 200
					}, __revalSecsRsc, __pageTags);
					__isrDebug?.("RSC cache written", __isrKeyRsc);
				} catch (__rscWriteErr) {
					console.error("[vinext] ISR RSC cache write error:", __rscWriteErr);
				}
			})();
			getRequestExecutionContext()?.waitUntil(__rscWritePromise);
		}
		return new Response(__rscForResponse, {
			status: _mwCtx.status || 200,
			headers: responseHeaders
		});
	}
	const fontData = {
		links: getSSRFontLinks(),
		styles: _getSSRFontStyles(),
		preloads: _getSSRFontPreloads()
	};
	const fontPreloads = fontData.preloads || [];
	const fontLinkHeaderParts = [];
	for (const preload of fontPreloads) fontLinkHeaderParts.push("<" + preload.href + ">; rel=preload; as=font; type=" + preload.type + "; crossorigin");
	const fontLinkHeader = fontLinkHeaderParts.length > 0 ? fontLinkHeaderParts.join(", ") : "";
	let htmlStream;
	try {
		htmlStream = await (await import("./ssr/index.js")).handleSsr(__rscForResponse, getNavigationContext(), fontData);
	} catch (ssrErr) {
		const specialResponse = await handleRenderError(ssrErr);
		if (specialResponse) return specialResponse;
		const errorBoundaryResp = await renderErrorBoundaryPage(route, ssrErr, isRscRequest, request, params);
		if (errorBoundaryResp) return errorBoundaryResp;
		throw ssrErr;
	}
	const draftCookie = getDraftModeCookieHeader();
	setHeadersContext(null);
	setNavigationContext(null);
	function attachMiddlewareContext(response) {
		if (draftCookie) response.headers.append("Set-Cookie", draftCookie);
		if (fontLinkHeader) response.headers.set("Link", fontLinkHeader);
		if (_mwCtx.headers) for (const [key, value] of _mwCtx.headers) response.headers.append(key, value);
		if (_mwCtx.status) return new Response(response.body, {
			status: _mwCtx.status,
			headers: response.headers
		});
		return response;
	}
	const dynamicUsedDuringRender = consumeDynamicUsage();
	const requestCacheLife = _consumeRequestScopedCacheLife();
	if (requestCacheLife && requestCacheLife.revalidate !== void 0 && revalidateSeconds === null) revalidateSeconds = requestCacheLife.revalidate;
	if (isForceDynamic) return attachMiddlewareContext(new Response(htmlStream, { headers: {
		"Content-Type": "text/html; charset=utf-8",
		"Cache-Control": "no-store, must-revalidate",
		"Vary": "RSC, Accept"
	} }));
	if ((isForceStatic || isDynamicError) && (revalidateSeconds === null || revalidateSeconds === 0)) return attachMiddlewareContext(new Response(htmlStream, { headers: {
		"Content-Type": "text/html; charset=utf-8",
		"Cache-Control": "s-maxage=31536000, stale-while-revalidate",
		"X-Vinext-Cache": "STATIC",
		"Vary": "RSC, Accept"
	} }));
	if (dynamicUsedDuringRender) return attachMiddlewareContext(new Response(htmlStream, { headers: {
		"Content-Type": "text/html; charset=utf-8",
		"Cache-Control": "no-store, must-revalidate",
		"Vary": "RSC, Accept"
	} }));
	if (revalidateSeconds !== null && revalidateSeconds > 0 && revalidateSeconds !== Infinity) {
		{
			const __isrResponseProd = attachMiddlewareContext(new Response(htmlStream, { headers: {
				"Content-Type": "text/html; charset=utf-8",
				"Cache-Control": "s-maxage=" + revalidateSeconds + ", stale-while-revalidate",
				"Vary": "RSC, Accept",
				"X-Vinext-Cache": "MISS"
			} }));
			if (__isrResponseProd.body) {
				const [__streamForClient, __streamForCache] = __isrResponseProd.body.tee();
				const __isrKey = __isrHtmlKey(cleanPathname);
				const __isrKeyRscFromHtml = __isrRscKey(cleanPathname);
				const __revalSecs = revalidateSeconds;
				const __capturedRscDataPromise = __isrRscDataPromise;
				const __cachePromise = (async () => {
					try {
						const __reader = __streamForCache.getReader();
						const __decoder = new TextDecoder();
						const __chunks = [];
						for (;;) {
							const { done, value } = await __reader.read();
							if (done) break;
							__chunks.push(__decoder.decode(value, { stream: true }));
						}
						__chunks.push(__decoder.decode());
						const __fullHtml = __chunks.join("");
						const __pageTags = __pageCacheTags(cleanPathname, getCollectedFetchTags());
						const __writes = [__isrSet(__isrKey, {
							kind: "APP_PAGE",
							html: __fullHtml,
							rscData: void 0,
							headers: void 0,
							postponed: void 0,
							status: 200
						}, __revalSecs, __pageTags)];
						if (__capturedRscDataPromise) __writes.push(__capturedRscDataPromise.then((__rscBuf) => __isrSet(__isrKeyRscFromHtml, {
							kind: "APP_PAGE",
							html: "",
							rscData: __rscBuf,
							headers: void 0,
							postponed: void 0,
							status: 200
						}, __revalSecs, __pageTags)));
						await Promise.all(__writes);
						__isrDebug?.("HTML cache written", __isrKey);
					} catch (__cacheErr) {
						console.error("[vinext] ISR cache write error:", __cacheErr);
					}
				})();
				getRequestExecutionContext()?.waitUntil(__cachePromise);
				return new Response(__streamForClient, {
					status: __isrResponseProd.status,
					headers: __isrResponseProd.headers
				});
			}
			return __isrResponseProd;
		}
		return attachMiddlewareContext(new Response(htmlStream, { headers: {
			"Content-Type": "text/html; charset=utf-8",
			"Cache-Control": "s-maxage=" + revalidateSeconds + ", stale-while-revalidate",
			"Vary": "RSC, Accept"
		} }));
	}
	if (revalidateSeconds === Infinity) return attachMiddlewareContext(new Response(htmlStream, { headers: {
		"Content-Type": "text/html; charset=utf-8",
		"Cache-Control": "s-maxage=31536000, stale-while-revalidate",
		"X-Vinext-Cache": "STATIC",
		"Vary": "RSC, Accept"
	} }));
	return attachMiddlewareContext(new Response(htmlStream, { headers: {
		"Content-Type": "text/html; charset=utf-8",
		"Vary": "RSC, Accept"
	} }));
}
//#endregion
export { handler as default, generateStaticParamsMap };
