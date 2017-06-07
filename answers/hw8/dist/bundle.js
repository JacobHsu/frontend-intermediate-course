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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = {
	TITLE:'The Streams in English.',
    WORDS:'English(US).'
}

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = {
  TITLE: '用中文直播的頻道',
  WORDS:'繁體中文 '
}


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v2.1.4
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2015-04-28T16:01Z
 */

(function( global, factory ) {

	if ( typeof module === "object" && typeof module.exports === "object" ) {
		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
}(typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Support: Firefox 18+
// Can't be in strict mode, several libs including ASP.NET trace
// the stack via arguments.caller.callee and Firefox dies if
// you try to trace through "use strict" call chains. (#13335)
//

var arr = [];

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var support = {};



var
	// Use the correct document accordingly with window argument (sandbox)
	document = window.document,

	version = "2.1.4",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {
		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android<4.1
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

	// Matches dashed string for camelizing
	rmsPrefix = /^-ms-/,
	rdashAlpha = /-([\da-z])/gi,

	// Used by jQuery.camelCase as callback to replace()
	fcamelCase = function( all, letter ) {
		return letter.toUpperCase();
	};

jQuery.fn = jQuery.prototype = {
	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// Start with an empty selector
	selector: "",

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {
		return num != null ?

			// Return just the one element from the set
			( num < 0 ? this[ num + this.length ] : this[ num ] ) :

			// Return all the elements in a clean array
			slice.call( this );
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;
		ret.context = this.context;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	// (You can seed the arguments with an array of args, but this is
	// only used internally.)
	each: function( callback, args ) {
		return jQuery.each( this, callback, args );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map(this, function( elem, i ) {
			return callback.call( elem, i, elem );
		}));
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[j] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor(null);
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[0] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !jQuery.isFunction(target) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {
		// Only deal with non-null/undefined values
		if ( (options = arguments[ i ]) != null ) {
			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)) ) ) {
					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && jQuery.isArray(src) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject(src) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend({
	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isFunction: function( obj ) {
		return jQuery.type(obj) === "function";
	},

	isArray: Array.isArray,

	isWindow: function( obj ) {
		return obj != null && obj === obj.window;
	},

	isNumeric: function( obj ) {
		// parseFloat NaNs numeric-cast false positives (null|true|false|"")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		// adding 1 corrects loss of precision from parseFloat (#15100)
		return !jQuery.isArray( obj ) && (obj - parseFloat( obj ) + 1) >= 0;
	},

	isPlainObject: function( obj ) {
		// Not plain objects:
		// - Any object or value whose internal [[Class]] property is not "[object Object]"
		// - DOM nodes
		// - window
		if ( jQuery.type( obj ) !== "object" || obj.nodeType || jQuery.isWindow( obj ) ) {
			return false;
		}

		if ( obj.constructor &&
				!hasOwn.call( obj.constructor.prototype, "isPrototypeOf" ) ) {
			return false;
		}

		// If the function hasn't returned already, we're confident that
		// |obj| is a plain object, created by {} or constructed with new Object
		return true;
	},

	isEmptyObject: function( obj ) {
		var name;
		for ( name in obj ) {
			return false;
		}
		return true;
	},

	type: function( obj ) {
		if ( obj == null ) {
			return obj + "";
		}
		// Support: Android<4.0, iOS<6 (functionish RegExp)
		return typeof obj === "object" || typeof obj === "function" ?
			class2type[ toString.call(obj) ] || "object" :
			typeof obj;
	},

	// Evaluates a script in a global context
	globalEval: function( code ) {
		var script,
			indirect = eval;

		code = jQuery.trim( code );

		if ( code ) {
			// If the code includes a valid, prologue position
			// strict mode pragma, execute code by injecting a
			// script tag into the document.
			if ( code.indexOf("use strict") === 1 ) {
				script = document.createElement("script");
				script.text = code;
				document.head.appendChild( script ).parentNode.removeChild( script );
			} else {
			// Otherwise, avoid the DOM node creation, insertion
			// and removal by using an indirect global eval
				indirect( code );
			}
		}
	},

	// Convert dashed to camelCase; used by the css and data modules
	// Support: IE9-11+
	// Microsoft forgot to hump their vendor prefix (#9572)
	camelCase: function( string ) {
		return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
	},

	nodeName: function( elem, name ) {
		return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
	},

	// args is for internal usage only
	each: function( obj, callback, args ) {
		var value,
			i = 0,
			length = obj.length,
			isArray = isArraylike( obj );

		if ( args ) {
			if ( isArray ) {
				for ( ; i < length; i++ ) {
					value = callback.apply( obj[ i ], args );

					if ( value === false ) {
						break;
					}
				}
			} else {
				for ( i in obj ) {
					value = callback.apply( obj[ i ], args );

					if ( value === false ) {
						break;
					}
				}
			}

		// A special, fast, case for the most common use of each
		} else {
			if ( isArray ) {
				for ( ; i < length; i++ ) {
					value = callback.call( obj[ i ], i, obj[ i ] );

					if ( value === false ) {
						break;
					}
				}
			} else {
				for ( i in obj ) {
					value = callback.call( obj[ i ], i, obj[ i ] );

					if ( value === false ) {
						break;
					}
				}
			}
		}

		return obj;
	},

	// Support: Android<4.1
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArraylike( Object(arr) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var value,
			i = 0,
			length = elems.length,
			isArray = isArraylike( elems ),
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArray ) {
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// Bind a function to a context, optionally partially applying any
	// arguments.
	proxy: function( fn, context ) {
		var tmp, args, proxy;

		if ( typeof context === "string" ) {
			tmp = fn[ context ];
			context = fn;
			fn = tmp;
		}

		// Quick check to determine if target is callable, in the spec
		// this throws a TypeError, but we will just return undefined.
		if ( !jQuery.isFunction( fn ) ) {
			return undefined;
		}

		// Simulated bind
		args = slice.call( arguments, 2 );
		proxy = function() {
			return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
		};

		// Set the guid of unique handler to the same of original handler, so it can be removed
		proxy.guid = fn.guid = fn.guid || jQuery.guid++;

		return proxy;
	},

	now: Date.now,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
});

// Populate the class2type map
jQuery.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(i, name) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
});

function isArraylike( obj ) {

	// Support: iOS 8.2 (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = "length" in obj && obj.length,
		type = jQuery.type( obj );

	if ( type === "function" || jQuery.isWindow( obj ) ) {
		return false;
	}

	if ( obj.nodeType === 1 && length ) {
		return true;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.2.0-pre
 * http://sizzlejs.com/
 *
 * Copyright 2008, 2014 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2014-12-16
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// General-purpose constants
	MAX_NEGATIVE = 1 << 31,

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// http://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// Whitespace characters http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",
	// http://www.w3.org/TR/css3-syntax/#characters
	characterEncoding = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",

	// Loosely modeled on CSS identifier characters
	// An unquoted value should be a CSS identifier http://www.w3.org/TR/css3-selectors/#attribute-selectors
	// Proper syntax: http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = characterEncoding.replace( "w", "w#" ),

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + characterEncoding + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + characterEncoding + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

	rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + characterEncoding + ")" ),
		"CLASS": new RegExp( "^\\.(" + characterEncoding + ")" ),
		"TAG": new RegExp( "^(" + characterEncoding.replace( "w", "w*" ) + ")" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,
	rescape = /'|\\/g,

	// CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	};

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var match, elem, m, nodeType,
		// QSA vars
		i, groups, old, nid, newContext, newSelector;

	if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
		setDocument( context );
	}

	context = context || document;
	results = results || [];
	nodeType = context.nodeType;

	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	if ( !seed && documentIsHTML ) {

		// Try to shortcut find operations when possible (e.g., not under DocumentFragment)
		if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {
			// Speed-up: Sizzle("#ID")
			if ( (m = match[1]) ) {
				if ( nodeType === 9 ) {
					elem = context.getElementById( m );
					// Check parentNode to catch when Blackberry 4.6 returns
					// nodes that are no longer in the document (jQuery #6963)
					if ( elem && elem.parentNode ) {
						// Handle the case where IE, Opera, and Webkit return items
						// by name instead of ID
						if ( elem.id === m ) {
							results.push( elem );
							return results;
						}
					} else {
						return results;
					}
				} else {
					// Context is not a document
					if ( context.ownerDocument && (elem = context.ownerDocument.getElementById( m )) &&
						contains( context, elem ) && elem.id === m ) {
						results.push( elem );
						return results;
					}
				}

			// Speed-up: Sizzle("TAG")
			} else if ( match[2] ) {
				push.apply( results, context.getElementsByTagName( selector ) );
				return results;

			// Speed-up: Sizzle(".CLASS")
			} else if ( (m = match[3]) && support.getElementsByClassName ) {
				push.apply( results, context.getElementsByClassName( m ) );
				return results;
			}
		}

		// QSA path
		if ( support.qsa && (!rbuggyQSA || !rbuggyQSA.test( selector )) ) {
			nid = old = expando;
			newContext = context;
			newSelector = nodeType !== 1 && selector;

			// qSA works strangely on Element-rooted queries
			// We can work around this by specifying an extra ID on the root
			// and working up from there (Thanks to Andrew Dupont for the technique)
			// IE 8 doesn't work on object elements
			if ( nodeType === 1 && context.nodeName.toLowerCase() !== "object" ) {
				groups = tokenize( selector );

				if ( (old = context.getAttribute("id")) ) {
					nid = old.replace( rescape, "\\$&" );
				} else {
					context.setAttribute( "id", nid );
				}
				nid = "[id='" + nid + "'] ";

				i = groups.length;
				while ( i-- ) {
					groups[i] = nid + toSelector( groups[i] );
				}
				newContext = rsibling.test( selector ) && testContext( context.parentNode ) || context;
				newSelector = groups.join(",");
			}

			if ( newSelector ) {
				try {
					push.apply( results,
						newContext.querySelectorAll( newSelector )
					);
					return results;
				} catch(qsaError) {
				} finally {
					if ( !old ) {
						context.removeAttribute("id");
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {Function(string, Object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created div and expects a boolean result
 */
function assert( fn ) {
	var div = document.createElement("div");

	try {
		return !!fn( div );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( div.parentNode ) {
			div.parentNode.removeChild( div );
		}
		// release memory in IE
		div = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = attrs.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			( ~b.sourceIndex || MAX_NEGATIVE ) -
			( ~a.sourceIndex || MAX_NEGATIVE );

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = elem && (elem.ownerDocument || elem).documentElement;
	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, parent,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// If no document and documentElement is available, return
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Set our document
	document = doc;
	docElem = doc.documentElement;
	parent = doc.defaultView;

	// Support: IE>8
	// If iframe document is assigned to "document" variable and if iframe has been reloaded,
	// IE will throw "permission denied" error when accessing "document" variable, see jQuery #13936
	// IE6-8 do not support the defaultView property so parent will be undefined
	if ( parent && parent !== parent.top ) {
		// IE11 does not have attachEvent, so all must suffer
		if ( parent.addEventListener ) {
			parent.addEventListener( "unload", unloadHandler, false );
		} else if ( parent.attachEvent ) {
			parent.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Support tests
	---------------------------------------------------------------------- */
	documentIsHTML = !isXML( doc );

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( div ) {
		div.className = "i";
		return !div.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( div ) {
		div.appendChild( doc.createComment("") );
		return !div.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( doc.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( div ) {
		docElem.appendChild( div ).id = expando;
		return !doc.getElementsByName || !doc.getElementsByName( expando ).length;
	});

	// ID find and filter
	if ( support.getById ) {
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var m = context.getElementById( id );
				// Check parentNode to catch when Blackberry 4.6 returns
				// nodes that are no longer in the document #6963
				return m && m.parentNode ? [ m ] : [];
			}
		};
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
	} else {
		// Support: IE6/7
		// getElementById is not reliable as a find shortcut
		delete Expr.find["ID"];

		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See http://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( doc.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( div ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// http://bugs.jquery.com/ticket/12359
			docElem.appendChild( div ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\f]' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// http://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( div.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !div.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.2+, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.7+
			if ( !div.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !div.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibing-combinator selector` fails
			if ( !div.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( div ) {
			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = doc.createElement("input");
			input.setAttribute( "type", "hidden" );
			div.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( div.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( !div.querySelectorAll(":enabled").length ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			div.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( div ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( div, "div" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( div, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully does not implement inclusive descendent
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === doc || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === doc || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === doc ? -1 :
				b === doc ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return doc;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	// Make sure that attribute selectors are quoted
	expr = expr.replace( rattributeQuotes, "='$1']" );

	if ( support.matchesSelector && documentIsHTML &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, outerCache, node, diff, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1 ) {
										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {
							// Seek `elem` from a previously-cached index
							outerCache = parent[ expando ] || (parent[ expando ] = {});
							cache = outerCache[ type ] || [];
							nodeIndex = cache[0] === dirruns && cache[1];
							diff = cache[0] === dirruns && cache[2];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									outerCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						// Use previously-cached element index if available
						} else if ( useCache && (cache = (elem[ expando ] || (elem[ expando ] = {}))[ type ]) && cache[0] === dirruns ) {
							diff = cache[1];

						// xml :nth-child(...) or :nth-last-child(...) or :nth(-last)?-of-type(...)
						} else {
							// Use the same loop as above to seek `elem` from the start
							while ( (node = ++nodeIndex && node && node[ dir ] ||
								(diff = nodeIndex = 0) || start.pop()) ) {

								if ( ( ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1 ) && ++diff ) {
									// Cache the index of each encountered element
									if ( useCache ) {
										(node[ expando ] || (node[ expando ] = {}))[ type ] = [ dirruns, diff ];
									}

									if ( node === elem ) {
										break;
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": function( elem ) {
			return elem.disabled === false;
		},

		"disabled": function( elem ) {
			return elem.disabled === true;
		},

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		checkNonElements = base && dir === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from dir caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});
						if ( (oldCache = outerCache[ dir ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							outerCache[ dir ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context !== document && context;
			}

			// Add elements passing elementMatchers directly to results
			// Keep `i` a string if there are no elements so `matchedCount` will be "00" below
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context, xml ) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// Apply set filters to unmatched elements
			matchedCount += i;
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is no seed and only one group
	if ( match.length === 1 ) {

		// Take a shortcut and set the context if the root selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				support.getById && context.nodeType === 9 && documentIsHTML &&
				Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( div1 ) {
	// Should return 1, but returns 4 (following)
	return div1.compareDocumentPosition( document.createElement("div") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( div ) {
	div.innerHTML = "<a href='#'></a>";
	return div.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( div ) {
	div.innerHTML = "<input/>";
	div.firstChild.setAttribute( "value", "" );
	return div.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( div ) {
	return div.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;
jQuery.expr[":"] = jQuery.expr.pseudos;
jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;



var rneedsContext = jQuery.expr.match.needsContext;

var rsingleTag = (/^<(\w+)\s*\/?>(?:<\/\1>|)$/);



var risSimple = /^.[^:#\[\.,]*$/;

// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( jQuery.isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			/* jshint -W018 */
			return !!qualifier.call( elem, i, elem ) !== not;
		});

	}

	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		});

	}

	if ( typeof qualifier === "string" ) {
		if ( risSimple.test( qualifier ) ) {
			return jQuery.filter( qualifier, elements, not );
		}

		qualifier = jQuery.filter( qualifier, elements );
	}

	return jQuery.grep( elements, function( elem ) {
		return ( indexOf.call( qualifier, elem ) >= 0 ) !== not;
	});
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	return elems.length === 1 && elem.nodeType === 1 ?
		jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [] :
		jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
			return elem.nodeType === 1;
		}));
};

jQuery.fn.extend({
	find: function( selector ) {
		var i,
			len = this.length,
			ret = [],
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter(function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			}) );
		}

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		// Needed because $( selector, context ) becomes $( context ).find( selector )
		ret = this.pushStack( len > 1 ? jQuery.unique( ret ) : ret );
		ret.selector = this.selector ? this.selector + " " + selector : selector;
		return ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow(this, selector || [], false) );
	},
	not: function( selector ) {
		return this.pushStack( winnow(this, selector || [], true) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
});


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,

	init = jQuery.fn.init = function( selector, context ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[0] === "<" && selector[ selector.length - 1 ] === ">" && selector.length >= 3 ) {
				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && (match[1] || !context) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[1] ) {
					context = context instanceof jQuery ? context[0] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[1],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[1] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {
							// Properties of context are called as methods if possible
							if ( jQuery.isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[2] );

					// Support: Blackberry 4.6
					// gEBID returns nodes no longer in the document (#6963)
					if ( elem && elem.parentNode ) {
						// Inject the element directly into the jQuery object
						this.length = 1;
						this[0] = elem;
					}

					this.context = document;
					this.selector = selector;
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || rootjQuery ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this.context = this[0] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( jQuery.isFunction( selector ) ) {
			return typeof rootjQuery.ready !== "undefined" ?
				rootjQuery.ready( selector ) :
				// Execute immediately if ready is not present
				selector( jQuery );
		}

		if ( selector.selector !== undefined ) {
			this.selector = selector.selector;
			this.context = selector.context;
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,
	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.extend({
	dir: function( elem, dir, until ) {
		var matched = [],
			truncate = until !== undefined;

		while ( (elem = elem[ dir ]) && elem.nodeType !== 9 ) {
			if ( elem.nodeType === 1 ) {
				if ( truncate && jQuery( elem ).is( until ) ) {
					break;
				}
				matched.push( elem );
			}
		}
		return matched;
	},

	sibling: function( n, elem ) {
		var matched = [];

		for ( ; n; n = n.nextSibling ) {
			if ( n.nodeType === 1 && n !== elem ) {
				matched.push( n );
			}
		}

		return matched;
	}
});

jQuery.fn.extend({
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter(function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[i] ) ) {
					return true;
				}
			}
		});
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			pos = rneedsContext.test( selectors ) || typeof selectors !== "string" ?
				jQuery( selectors, context || this.context ) :
				0;

		for ( ; i < l; i++ ) {
			for ( cur = this[i]; cur && cur !== context; cur = cur.parentNode ) {
				// Always skip document fragments
				if ( cur.nodeType < 11 && (pos ?
					pos.index(cur) > -1 :

					// Don't pass non-elements to Sizzle
					cur.nodeType === 1 &&
						jQuery.find.matchesSelector(cur, selectors)) ) {

					matched.push( cur );
					break;
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.unique( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.unique(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter(selector)
		);
	}
});

function sibling( cur, dir ) {
	while ( (cur = cur[dir]) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each({
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return jQuery.dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return jQuery.dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return jQuery.dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return jQuery.dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return jQuery.dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return jQuery.dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return jQuery.sibling( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return jQuery.sibling( elem.firstChild );
	},
	contents: function( elem ) {
		return elem.contentDocument || jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {
			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.unique( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
});
var rnotwhite = (/\S+/g);



// String to Object options format cache
var optionsCache = {};

// Convert String-formatted options into Object-formatted ones and store in cache
function createOptions( options ) {
	var object = optionsCache[ options ] = {};
	jQuery.each( options.match( rnotwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	});
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		( optionsCache[ options ] || createOptions( options ) ) :
		jQuery.extend( {}, options );

	var // Last fire value (for non-forgettable lists)
		memory,
		// Flag to know if list was already fired
		fired,
		// Flag to know if list is currently firing
		firing,
		// First callback to fire (used internally by add and fireWith)
		firingStart,
		// End of the loop when firing
		firingLength,
		// Index of currently firing callback (modified by remove if needed)
		firingIndex,
		// Actual callback list
		list = [],
		// Stack of fire calls for repeatable lists
		stack = !options.once && [],
		// Fire callbacks
		fire = function( data ) {
			memory = options.memory && data;
			fired = true;
			firingIndex = firingStart || 0;
			firingStart = 0;
			firingLength = list.length;
			firing = true;
			for ( ; list && firingIndex < firingLength; firingIndex++ ) {
				if ( list[ firingIndex ].apply( data[ 0 ], data[ 1 ] ) === false && options.stopOnFalse ) {
					memory = false; // To prevent further calls using add
					break;
				}
			}
			firing = false;
			if ( list ) {
				if ( stack ) {
					if ( stack.length ) {
						fire( stack.shift() );
					}
				} else if ( memory ) {
					list = [];
				} else {
					self.disable();
				}
			}
		},
		// Actual Callbacks object
		self = {
			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {
					// First, we save the current length
					var start = list.length;
					(function add( args ) {
						jQuery.each( args, function( _, arg ) {
							var type = jQuery.type( arg );
							if ( type === "function" ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && type !== "string" ) {
								// Inspect recursively
								add( arg );
							}
						});
					})( arguments );
					// Do we need to add the callbacks to the
					// current firing batch?
					if ( firing ) {
						firingLength = list.length;
					// With memory, if we're not firing then
					// we should call right away
					} else if ( memory ) {
						firingStart = start;
						fire( memory );
					}
				}
				return this;
			},
			// Remove a callback from the list
			remove: function() {
				if ( list ) {
					jQuery.each( arguments, function( _, arg ) {
						var index;
						while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
							list.splice( index, 1 );
							// Handle firing indexes
							if ( firing ) {
								if ( index <= firingLength ) {
									firingLength--;
								}
								if ( index <= firingIndex ) {
									firingIndex--;
								}
							}
						}
					});
				}
				return this;
			},
			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ? jQuery.inArray( fn, list ) > -1 : !!( list && list.length );
			},
			// Remove all callbacks from the list
			empty: function() {
				list = [];
				firingLength = 0;
				return this;
			},
			// Have the list do nothing anymore
			disable: function() {
				list = stack = memory = undefined;
				return this;
			},
			// Is it disabled?
			disabled: function() {
				return !list;
			},
			// Lock the list in its current state
			lock: function() {
				stack = undefined;
				if ( !memory ) {
					self.disable();
				}
				return this;
			},
			// Is it locked?
			locked: function() {
				return !stack;
			},
			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( list && ( !fired || stack ) ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					if ( firing ) {
						stack.push( args );
					} else {
						fire( args );
					}
				}
				return this;
			},
			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},
			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


jQuery.extend({

	Deferred: function( func ) {
		var tuples = [
				// action, add listener, listener list, final state
				[ "resolve", "done", jQuery.Callbacks("once memory"), "resolved" ],
				[ "reject", "fail", jQuery.Callbacks("once memory"), "rejected" ],
				[ "notify", "progress", jQuery.Callbacks("memory") ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				then: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;
					return jQuery.Deferred(function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {
							var fn = jQuery.isFunction( fns[ i ] ) && fns[ i ];
							// deferred[ done | fail | progress ] for forwarding actions to newDefer
							deferred[ tuple[1] ](function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && jQuery.isFunction( returned.promise ) ) {
									returned.promise()
										.done( newDefer.resolve )
										.fail( newDefer.reject )
										.progress( newDefer.notify );
								} else {
									newDefer[ tuple[ 0 ] + "With" ]( this === promise ? newDefer.promise() : this, fn ? [ returned ] : arguments );
								}
							});
						});
						fns = null;
					}).promise();
				},
				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Keep pipe for back-compat
		promise.pipe = promise.then;

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 3 ];

			// promise[ done | fail | progress ] = list.add
			promise[ tuple[1] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(function() {
					// state = [ resolved | rejected ]
					state = stateString;

				// [ reject_list | resolve_list ].disable; progress_list.lock
				}, tuples[ i ^ 1 ][ 2 ].disable, tuples[ 2 ][ 2 ].lock );
			}

			// deferred[ resolve | reject | notify ]
			deferred[ tuple[0] ] = function() {
				deferred[ tuple[0] + "With" ]( this === deferred ? promise : this, arguments );
				return this;
			};
			deferred[ tuple[0] + "With" ] = list.fireWith;
		});

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( subordinate /* , ..., subordinateN */ ) {
		var i = 0,
			resolveValues = slice.call( arguments ),
			length = resolveValues.length,

			// the count of uncompleted subordinates
			remaining = length !== 1 || ( subordinate && jQuery.isFunction( subordinate.promise ) ) ? length : 0,

			// the master Deferred. If resolveValues consist of only a single Deferred, just use that.
			deferred = remaining === 1 ? subordinate : jQuery.Deferred(),

			// Update function for both resolve and progress values
			updateFunc = function( i, contexts, values ) {
				return function( value ) {
					contexts[ i ] = this;
					values[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( values === progressValues ) {
						deferred.notifyWith( contexts, values );
					} else if ( !( --remaining ) ) {
						deferred.resolveWith( contexts, values );
					}
				};
			},

			progressValues, progressContexts, resolveContexts;

		// Add listeners to Deferred subordinates; treat others as resolved
		if ( length > 1 ) {
			progressValues = new Array( length );
			progressContexts = new Array( length );
			resolveContexts = new Array( length );
			for ( ; i < length; i++ ) {
				if ( resolveValues[ i ] && jQuery.isFunction( resolveValues[ i ].promise ) ) {
					resolveValues[ i ].promise()
						.done( updateFunc( i, resolveContexts, resolveValues ) )
						.fail( deferred.reject )
						.progress( updateFunc( i, progressContexts, progressValues ) );
				} else {
					--remaining;
				}
			}
		}

		// If we're not waiting on anything, resolve the master
		if ( !remaining ) {
			deferred.resolveWith( resolveContexts, resolveValues );
		}

		return deferred.promise();
	}
});


// The deferred used on DOM ready
var readyList;

jQuery.fn.ready = function( fn ) {
	// Add the callback
	jQuery.ready.promise().done( fn );

	return this;
};

jQuery.extend({
	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Hold (or release) the ready event
	holdReady: function( hold ) {
		if ( hold ) {
			jQuery.readyWait++;
		} else {
			jQuery.ready( true );
		}
	},

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );

		// Trigger any bound ready events
		if ( jQuery.fn.triggerHandler ) {
			jQuery( document ).triggerHandler( "ready" );
			jQuery( document ).off( "ready" );
		}
	}
});

/**
 * The ready event handler and self cleanup method
 */
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed, false );
	window.removeEventListener( "load", completed, false );
	jQuery.ready();
}

jQuery.ready.promise = function( obj ) {
	if ( !readyList ) {

		readyList = jQuery.Deferred();

		// Catch cases where $(document).ready() is called after the browser event has already occurred.
		// We once tried to use readyState "interactive" here, but it caused issues like the one
		// discovered by ChrisS here: http://bugs.jquery.com/ticket/12282#comment:15
		if ( document.readyState === "complete" ) {
			// Handle it asynchronously to allow scripts the opportunity to delay ready
			setTimeout( jQuery.ready );

		} else {

			// Use the handy event callback
			document.addEventListener( "DOMContentLoaded", completed, false );

			// A fallback to window.onload, that will always work
			window.addEventListener( "load", completed, false );
		}
	}
	return readyList.promise( obj );
};

// Kick off the DOM ready check even if the user does not
jQuery.ready.promise();




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = jQuery.access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( jQuery.type( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			jQuery.access( elems, fn, i, key[i], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !jQuery.isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {
			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn( elems[i], key, raw ? value : value.call( elems[i], i, fn( elems[i], key ) ) );
			}
		}
	}

	return chainable ?
		elems :

		// Gets
		bulk ?
			fn.call( elems ) :
			len ? fn( elems[0], key ) : emptyGet;
};


/**
 * Determines whether an object can have data
 */
jQuery.acceptData = function( owner ) {
	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	/* jshint -W018 */
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};


function Data() {
	// Support: Android<4,
	// Old WebKit does not have Object.preventExtensions/freeze method,
	// return new empty object instead with no [[set]] accessor
	Object.defineProperty( this.cache = {}, 0, {
		get: function() {
			return {};
		}
	});

	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;
Data.accepts = jQuery.acceptData;

Data.prototype = {
	key: function( owner ) {
		// We can accept data for non-element nodes in modern browsers,
		// but we should not, see #8335.
		// Always return the key for a frozen object.
		if ( !Data.accepts( owner ) ) {
			return 0;
		}

		var descriptor = {},
			// Check if the owner object already has a cache key
			unlock = owner[ this.expando ];

		// If not, create one
		if ( !unlock ) {
			unlock = Data.uid++;

			// Secure it in a non-enumerable, non-writable property
			try {
				descriptor[ this.expando ] = { value: unlock };
				Object.defineProperties( owner, descriptor );

			// Support: Android<4
			// Fallback to a less secure definition
			} catch ( e ) {
				descriptor[ this.expando ] = unlock;
				jQuery.extend( owner, descriptor );
			}
		}

		// Ensure the cache object
		if ( !this.cache[ unlock ] ) {
			this.cache[ unlock ] = {};
		}

		return unlock;
	},
	set: function( owner, data, value ) {
		var prop,
			// There may be an unlock assigned to this node,
			// if there is no entry for this "owner", create one inline
			// and set the unlock as though an owner entry had always existed
			unlock = this.key( owner ),
			cache = this.cache[ unlock ];

		// Handle: [ owner, key, value ] args
		if ( typeof data === "string" ) {
			cache[ data ] = value;

		// Handle: [ owner, { properties } ] args
		} else {
			// Fresh assignments by object are shallow copied
			if ( jQuery.isEmptyObject( cache ) ) {
				jQuery.extend( this.cache[ unlock ], data );
			// Otherwise, copy the properties one-by-one to the cache object
			} else {
				for ( prop in data ) {
					cache[ prop ] = data[ prop ];
				}
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		// Either a valid cache is found, or will be created.
		// New caches will be created and the unlock returned,
		// allowing direct access to the newly created
		// empty data object. A valid owner object must be provided.
		var cache = this.cache[ this.key( owner ) ];

		return key === undefined ?
			cache : cache[ key ];
	},
	access: function( owner, key, value ) {
		var stored;
		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				((key && typeof key === "string") && value === undefined) ) {

			stored = this.get( owner, key );

			return stored !== undefined ?
				stored : this.get( owner, jQuery.camelCase(key) );
		}

		// [*]When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i, name, camel,
			unlock = this.key( owner ),
			cache = this.cache[ unlock ];

		if ( key === undefined ) {
			this.cache[ unlock ] = {};

		} else {
			// Support array or space separated string of keys
			if ( jQuery.isArray( key ) ) {
				// If "name" is an array of keys...
				// When data is initially created, via ("key", "val") signature,
				// keys will be converted to camelCase.
				// Since there is no way to tell _how_ a key was added, remove
				// both plain key and camelCase key. #12786
				// This will only penalize the array argument path.
				name = key.concat( key.map( jQuery.camelCase ) );
			} else {
				camel = jQuery.camelCase( key );
				// Try the string as a key before any manipulation
				if ( key in cache ) {
					name = [ key, camel ];
				} else {
					// If a key with the spaces exists, use it.
					// Otherwise, create an array by matching non-whitespace
					name = camel;
					name = name in cache ?
						[ name ] : ( name.match( rnotwhite ) || [] );
				}
			}

			i = name.length;
			while ( i-- ) {
				delete cache[ name[ i ] ];
			}
		}
	},
	hasData: function( owner ) {
		return !jQuery.isEmptyObject(
			this.cache[ owner[ this.expando ] ] || {}
		);
	},
	discard: function( owner ) {
		if ( owner[ this.expando ] ) {
			delete this.cache[ owner[ this.expando ] ];
		}
	}
};
var data_priv = new Data();

var data_user = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /([A-Z])/g;

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$1" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = data === "true" ? true :
					data === "false" ? false :
					data === "null" ? null :
					// Only convert to a number if it doesn't change the string
					+data + "" === data ? +data :
					rbrace.test( data ) ? jQuery.parseJSON( data ) :
					data;
			} catch( e ) {}

			// Make sure we set the data so it isn't changed later
			data_user.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend({
	hasData: function( elem ) {
		return data_user.hasData( elem ) || data_priv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return data_user.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		data_user.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to data_priv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return data_priv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		data_priv.remove( elem, name );
	}
});

jQuery.fn.extend({
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = data_user.get( elem );

				if ( elem.nodeType === 1 && !data_priv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE11+
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = jQuery.camelCase( name.slice(5) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					data_priv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each(function() {
				data_user.set( this, key );
			});
		}

		return access( this, function( value ) {
			var data,
				camelKey = jQuery.camelCase( key );

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {
				// Attempt to get data from the cache
				// with the key as-is
				data = data_user.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to get data from the cache
				// with the key camelized
				data = data_user.get( elem, camelKey );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, camelKey, undefined );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each(function() {
				// First, attempt to store a copy or reference of any
				// data that might've been store with a camelCased key.
				var data = data_user.get( this, camelKey );

				// For HTML5 data-* attribute interop, we have to
				// store property names with dashes in a camelCase form.
				// This might not apply to all properties...*
				data_user.set( this, camelKey, value );

				// *... In the case of properties that might _actually_
				// have dashes, we need to also store a copy of that
				// unchanged property.
				if ( key.indexOf("-") !== -1 && data !== undefined ) {
					data_user.set( this, key, value );
				}
			});
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each(function() {
			data_user.remove( this, key );
		});
	}
});


jQuery.extend({
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = data_priv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || jQuery.isArray( data ) ) {
					queue = data_priv.access( elem, type, jQuery.makeArray(data) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return data_priv.get( elem, key ) || data_priv.access( elem, key, {
			empty: jQuery.Callbacks("once memory").add(function() {
				data_priv.remove( elem, [ type + "queue", key ] );
			})
		});
	}
});

jQuery.fn.extend({
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[0], type );
		}

		return data === undefined ?
			this :
			this.each(function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[0] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			});
	},
	dequeue: function( type ) {
		return this.each(function() {
			jQuery.dequeue( this, type );
		});
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},
	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = data_priv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
});
var pnum = (/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/).source;

var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var isHidden = function( elem, el ) {
		// isHidden might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;
		return jQuery.css( elem, "display" ) === "none" || !jQuery.contains( elem.ownerDocument, elem );
	};

var rcheckableType = (/^(?:checkbox|radio)$/i);



(function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Safari<=5.1
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Safari<=5.1, Android<4.2
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE<=11+
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
})();
var strundefined = typeof undefined;



support.focusinBubbles = "onfocusin" in window;


var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu)|click/,
	rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)$/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = data_priv.get( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !(events = elemData.events) ) {
			events = elemData.events = {};
		}
		if ( !(eventHandle = elemData.handle) ) {
			eventHandle = elemData.handle = function( e ) {
				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== strundefined && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnotwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[t] ) || [];
			type = origType = tmp[1];
			namespaces = ( tmp[2] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend({
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join(".")
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !(handlers = events[ type ]) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup || special.setup.call( elem, data, namespaces, eventHandle ) === false ) {
					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle, false );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = data_priv.hasData( elem ) && data_priv.get( elem );

		if ( !elemData || !(events = elemData.events) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnotwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[t] ) || [];
			type = origType = tmp[1];
			namespaces = ( tmp[2] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[2] && new RegExp( "(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector || selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown || special.teardown.call( elem, namespaces, elemData.handle ) === false ) {
					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			delete elemData.handle;
			data_priv.remove( elem, "events" );
		}
	},

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split(".") : [];

		cur = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf(".") >= 0 ) {
			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split(".");
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf(":") < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join(".");
		event.namespace_re = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === (elem.ownerDocument || document) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( (cur = eventPath[i++]) && !event.isPropagationStopped() ) {

			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( data_priv.get( cur, "events" ) || {} )[ event.type ] && data_priv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && jQuery.acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( (!special._default || special._default.apply( eventPath.pop(), data ) === false) &&
				jQuery.acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;
					elem[ type ]();
					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	dispatch: function( event ) {

		// Make a writable jQuery.Event from the native event object
		event = jQuery.event.fix( event );

		var i, j, ret, matched, handleObj,
			handlerQueue = [],
			args = slice.call( arguments ),
			handlers = ( data_priv.get( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[0] = event;
		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( (matched = handlerQueue[ i++ ]) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( (handleObj = matched.handlers[ j++ ]) && !event.isImmediatePropagationStopped() ) {

				// Triggered event must either 1) have no namespace, or 2) have namespace(s)
				// a subset or equal to those in the bound event (both can have no namespace).
				if ( !event.namespace_re || event.namespace_re.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( (jQuery.event.special[ handleObj.origType ] || {}).handle || handleObj.handler )
							.apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( (event.result = ret) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, matches, sel, handleObj,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		// Black-hole SVG <use> instance trees (#13180)
		// Avoid non-left-click bubbling in Firefox (#3861)
		if ( delegateCount && cur.nodeType && (!event.button || event.type !== "click") ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.disabled !== true || event.type !== "click" ) {
					matches = [];
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matches[ sel ] === undefined ) {
							matches[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) >= 0 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matches[ sel ] ) {
							matches.push( handleObj );
						}
					}
					if ( matches.length ) {
						handlerQueue.push({ elem: cur, handlers: matches });
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		if ( delegateCount < handlers.length ) {
			handlerQueue.push({ elem: this, handlers: handlers.slice( delegateCount ) });
		}

		return handlerQueue;
	},

	// Includes some event props shared by KeyEvent and MouseEvent
	props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),

	fixHooks: {},

	keyHooks: {
		props: "char charCode key keyCode".split(" "),
		filter: function( event, original ) {

			// Add which for key events
			if ( event.which == null ) {
				event.which = original.charCode != null ? original.charCode : original.keyCode;
			}

			return event;
		}
	},

	mouseHooks: {
		props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
		filter: function( event, original ) {
			var eventDoc, doc, body,
				button = original.button;

			// Calculate pageX/Y if missing and clientX/Y available
			if ( event.pageX == null && original.clientX != null ) {
				eventDoc = event.target.ownerDocument || document;
				doc = eventDoc.documentElement;
				body = eventDoc.body;

				event.pageX = original.clientX + ( doc && doc.scrollLeft || body && body.scrollLeft || 0 ) - ( doc && doc.clientLeft || body && body.clientLeft || 0 );
				event.pageY = original.clientY + ( doc && doc.scrollTop  || body && body.scrollTop  || 0 ) - ( doc && doc.clientTop  || body && body.clientTop  || 0 );
			}

			// Add which for click: 1 === left; 2 === middle; 3 === right
			// Note: button is not normalized, so don't use it
			if ( !event.which && button !== undefined ) {
				event.which = ( button & 1 ? 1 : ( button & 2 ? 3 : ( button & 4 ? 2 : 0 ) ) );
			}

			return event;
		}
	},

	fix: function( event ) {
		if ( event[ jQuery.expando ] ) {
			return event;
		}

		// Create a writable copy of the event object and normalize some properties
		var i, prop, copy,
			type = event.type,
			originalEvent = event,
			fixHook = this.fixHooks[ type ];

		if ( !fixHook ) {
			this.fixHooks[ type ] = fixHook =
				rmouseEvent.test( type ) ? this.mouseHooks :
				rkeyEvent.test( type ) ? this.keyHooks :
				{};
		}
		copy = fixHook.props ? this.props.concat( fixHook.props ) : this.props;

		event = new jQuery.Event( originalEvent );

		i = copy.length;
		while ( i-- ) {
			prop = copy[ i ];
			event[ prop ] = originalEvent[ prop ];
		}

		// Support: Cordova 2.5 (WebKit) (#13255)
		// All events should have a target; Cordova deviceready doesn't
		if ( !event.target ) {
			event.target = document;
		}

		// Support: Safari 6.0+, Chrome<28
		// Target should not be a text node (#504, #13143)
		if ( event.target.nodeType === 3 ) {
			event.target = event.target.parentNode;
		}

		return fixHook.filter ? fixHook.filter( event, originalEvent ) : event;
	},

	special: {
		load: {
			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		focus: {
			// Fire native event if possible so blur/focus sequence is correct
			trigger: function() {
				if ( this !== safeActiveElement() && this.focus ) {
					this.focus();
					return false;
				}
			},
			delegateType: "focusin"
		},
		blur: {
			trigger: function() {
				if ( this === safeActiveElement() && this.blur ) {
					this.blur();
					return false;
				}
			},
			delegateType: "focusout"
		},
		click: {
			// For checkbox, fire native event so checked state will be right
			trigger: function() {
				if ( this.type === "checkbox" && this.click && jQuery.nodeName( this, "input" ) ) {
					this.click();
					return false;
				}
			},

			// For cross-browser consistency, don't fire native .click() on links
			_default: function( event ) {
				return jQuery.nodeName( event.target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	},

	simulate: function( type, elem, event, bubble ) {
		// Piggyback on a donor event to simulate a different one.
		// Fake originalEvent to avoid donor's stopPropagation, but if the
		// simulated event prevents default then we do the same on the donor.
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true,
				originalEvent: {}
			}
		);
		if ( bubble ) {
			jQuery.event.trigger( e, null, elem );
		} else {
			jQuery.event.dispatch.call( elem, e );
		}
		if ( e.isDefaultPrevented() ) {
			event.preventDefault();
		}
	}
};

jQuery.removeEvent = function( elem, type, handle ) {
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle, false );
	}
};

jQuery.Event = function( src, props ) {
	// Allow instantiation without the 'new' keyword
	if ( !(this instanceof jQuery.Event) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&
				// Support: Android<4.0
				src.returnValue === false ?
			returnTrue :
			returnFalse;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || jQuery.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && e.preventDefault ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && e.stopPropagation ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && e.stopImmediatePropagation ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Create mouseenter/leave events using mouseover/out and event-time checks
// Support: Chrome 15+
jQuery.each({
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mousenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || (related !== target && !jQuery.contains( target, related )) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
});

// Support: Firefox, Chrome, Safari
// Create "bubbling" focus and blur events
if ( !support.focusinBubbles ) {
	jQuery.each({ focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
				jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ), true );
			};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = data_priv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				data_priv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = data_priv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					data_priv.remove( doc, fix );

				} else {
					data_priv.access( doc, fix, attaches );
				}
			}
		};
	});
}

jQuery.fn.extend({

	on: function( types, selector, data, fn, /*INTERNAL*/ one ) {
		var origFn, type;

		// Types can be a map of types/handlers
		if ( typeof types === "object" ) {
			// ( types-Object, selector, data )
			if ( typeof selector !== "string" ) {
				// ( types-Object, data )
				data = data || selector;
				selector = undefined;
			}
			for ( type in types ) {
				this.on( type, selector, data, types[ type ], one );
			}
			return this;
		}

		if ( data == null && fn == null ) {
			// ( types, fn )
			fn = selector;
			data = selector = undefined;
		} else if ( fn == null ) {
			if ( typeof selector === "string" ) {
				// ( types, selector, fn )
				fn = data;
				data = undefined;
			} else {
				// ( types, data, fn )
				fn = data;
				data = selector;
				selector = undefined;
			}
		}
		if ( fn === false ) {
			fn = returnFalse;
		} else if ( !fn ) {
			return this;
		}

		if ( one === 1 ) {
			origFn = fn;
			fn = function( event ) {
				// Can use an empty set, since event contains the info
				jQuery().off( event );
				return origFn.apply( this, arguments );
			};
			// Use same guid so caller can remove using origFn
			fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
		}
		return this.each( function() {
			jQuery.event.add( this, types, fn, data, selector );
		});
	},
	one: function( types, selector, data, fn ) {
		return this.on( types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {
			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {
			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {
			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each(function() {
			jQuery.event.remove( this, types, fn, selector );
		});
	},

	trigger: function( type, data ) {
		return this.each(function() {
			jQuery.event.trigger( type, data, this );
		});
	},
	triggerHandler: function( type, data ) {
		var elem = this[0];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
});


var
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
	rtagName = /<([\w:]+)/,
	rhtml = /<|&#?\w+;/,
	rnoInnerhtml = /<(?:script|style|link)/i,
	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rscriptType = /^$|\/(?:java|ecma)script/i,
	rscriptTypeMasked = /^true\/(.*)/,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,

	// We have to close these tags to support XHTML (#13200)
	wrapMap = {

		// Support: IE9
		option: [ 1, "<select multiple='multiple'>", "</select>" ],

		thead: [ 1, "<table>", "</table>" ],
		col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
		tr: [ 2, "<table><tbody>", "</tbody></table>" ],
		td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

		_default: [ 0, "", "" ]
	};

// Support: IE9
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;

// Support: 1.x compatibility
// Manipulating tables requires a tbody
function manipulationTarget( elem, content ) {
	return jQuery.nodeName( elem, "table" ) &&
		jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ?

		elem.getElementsByTagName("tbody")[0] ||
			elem.appendChild( elem.ownerDocument.createElement("tbody") ) :
		elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	var match = rscriptTypeMasked.exec( elem.type );

	if ( match ) {
		elem.type = match[ 1 ];
	} else {
		elem.removeAttribute("type");
	}

	return elem;
}

// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		data_priv.set(
			elems[ i ], "globalEval", !refElements || data_priv.get( refElements[ i ], "globalEval" )
		);
	}
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( data_priv.hasData( src ) ) {
		pdataOld = data_priv.access( src );
		pdataCur = data_priv.set( dest, pdataOld );
		events = pdataOld.events;

		if ( events ) {
			delete pdataCur.handle;
			pdataCur.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( data_user.hasData( src ) ) {
		udataOld = data_user.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		data_user.set( dest, udataCur );
	}
}

function getAll( context, tag ) {
	var ret = context.getElementsByTagName ? context.getElementsByTagName( tag || "*" ) :
			context.querySelectorAll ? context.querySelectorAll( tag || "*" ) :
			[];

	return tag === undefined || tag && jQuery.nodeName( context, tag ) ?
		jQuery.merge( [ context ], ret ) :
		ret;
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

jQuery.extend({
	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = jQuery.contains( elem.ownerDocument, elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	buildFragment: function( elems, context, scripts, selection ) {
		var elem, tmp, tag, wrap, contains, j,
			fragment = context.createDocumentFragment(),
			nodes = [],
			i = 0,
			l = elems.length;

		for ( ; i < l; i++ ) {
			elem = elems[ i ];

			if ( elem || elem === 0 ) {

				// Add nodes directly
				if ( jQuery.type( elem ) === "object" ) {
					// Support: QtWebKit, PhantomJS
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

				// Convert non-html into a text node
				} else if ( !rhtml.test( elem ) ) {
					nodes.push( context.createTextNode( elem ) );

				// Convert html into DOM nodes
				} else {
					tmp = tmp || fragment.appendChild( context.createElement("div") );

					// Deserialize a standard representation
					tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
					wrap = wrapMap[ tag ] || wrapMap._default;
					tmp.innerHTML = wrap[ 1 ] + elem.replace( rxhtmlTag, "<$1></$2>" ) + wrap[ 2 ];

					// Descend through wrappers to the right content
					j = wrap[ 0 ];
					while ( j-- ) {
						tmp = tmp.lastChild;
					}

					// Support: QtWebKit, PhantomJS
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, tmp.childNodes );

					// Remember the top-level container
					tmp = fragment.firstChild;

					// Ensure the created nodes are orphaned (#12392)
					tmp.textContent = "";
				}
			}
		}

		// Remove wrapper from fragment
		fragment.textContent = "";

		i = 0;
		while ( (elem = nodes[ i++ ]) ) {

			// #4087 - If origin and destination elements are the same, and this is
			// that element, do not do anything
			if ( selection && jQuery.inArray( elem, selection ) !== -1 ) {
				continue;
			}

			contains = jQuery.contains( elem.ownerDocument, elem );

			// Append to fragment
			tmp = getAll( fragment.appendChild( elem ), "script" );

			// Preserve script evaluation history
			if ( contains ) {
				setGlobalEval( tmp );
			}

			// Capture executables
			if ( scripts ) {
				j = 0;
				while ( (elem = tmp[ j++ ]) ) {
					if ( rscriptType.test( elem.type || "" ) ) {
						scripts.push( elem );
					}
				}
			}
		}

		return fragment;
	},

	cleanData: function( elems ) {
		var data, elem, type, key,
			special = jQuery.event.special,
			i = 0;

		for ( ; (elem = elems[ i ]) !== undefined; i++ ) {
			if ( jQuery.acceptData( elem ) ) {
				key = elem[ data_priv.expando ];

				if ( key && (data = data_priv.cache[ key ]) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}
					if ( data_priv.cache[ key ] ) {
						// Discard any remaining `private` data
						delete data_priv.cache[ key ];
					}
				}
			}
			// Discard any remaining `user` data
			delete data_user.cache[ elem[ data_user.expando ] ];
		}
	}
});

jQuery.fn.extend({
	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each(function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				});
		}, null, value, arguments.length );
	},

	append: function() {
		return this.domManip( arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		});
	},

	prepend: function() {
		return this.domManip( arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		});
	},

	before: function() {
		return this.domManip( arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		});
	},

	after: function() {
		return this.domManip( arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		});
	},

	remove: function( selector, keepData /* Internal Use Only */ ) {
		var elem,
			elems = selector ? jQuery.filter( selector, this ) : this,
			i = 0;

		for ( ; (elem = elems[i]) != null; i++ ) {
			if ( !keepData && elem.nodeType === 1 ) {
				jQuery.cleanData( getAll( elem ) );
			}

			if ( elem.parentNode ) {
				if ( keepData && jQuery.contains( elem.ownerDocument, elem ) ) {
					setGlobalEval( getAll( elem, "script" ) );
				}
				elem.parentNode.removeChild( elem );
			}
		}

		return this;
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; (elem = this[i]) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map(function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		});
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = value.replace( rxhtmlTag, "<$1></$2>" );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var arg = arguments[ 0 ];

		// Make the changes, replacing each context element with the new content
		this.domManip( arguments, function( elem ) {
			arg = this.parentNode;

			jQuery.cleanData( getAll( this ) );

			if ( arg ) {
				arg.replaceChild( elem, this );
			}
		});

		// Force removal if there was no new content (e.g., from empty arguments)
		return arg && (arg.length || arg.nodeType) ? this : this.remove();
	},

	detach: function( selector ) {
		return this.remove( selector, true );
	},

	domManip: function( args, callback ) {

		// Flatten any nested arrays
		args = concat.apply( [], args );

		var fragment, first, scripts, hasScripts, node, doc,
			i = 0,
			l = this.length,
			set = this,
			iNoClone = l - 1,
			value = args[ 0 ],
			isFunction = jQuery.isFunction( value );

		// We can't cloneNode fragments that contain checked, in WebKit
		if ( isFunction ||
				( l > 1 && typeof value === "string" &&
					!support.checkClone && rchecked.test( value ) ) ) {
			return this.each(function( index ) {
				var self = set.eq( index );
				if ( isFunction ) {
					args[ 0 ] = value.call( this, index, self.html() );
				}
				self.domManip( args, callback );
			});
		}

		if ( l ) {
			fragment = jQuery.buildFragment( args, this[ 0 ].ownerDocument, false, this );
			first = fragment.firstChild;

			if ( fragment.childNodes.length === 1 ) {
				fragment = first;
			}

			if ( first ) {
				scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
				hasScripts = scripts.length;

				// Use the original fragment for the last item instead of the first because it can end up
				// being emptied incorrectly in certain situations (#8070).
				for ( ; i < l; i++ ) {
					node = fragment;

					if ( i !== iNoClone ) {
						node = jQuery.clone( node, true, true );

						// Keep references to cloned scripts for later restoration
						if ( hasScripts ) {
							// Support: QtWebKit
							// jQuery.merge because push.apply(_, arraylike) throws
							jQuery.merge( scripts, getAll( node, "script" ) );
						}
					}

					callback.call( this[ i ], node, i );
				}

				if ( hasScripts ) {
					doc = scripts[ scripts.length - 1 ].ownerDocument;

					// Reenable scripts
					jQuery.map( scripts, restoreScript );

					// Evaluate executable scripts on first document insertion
					for ( i = 0; i < hasScripts; i++ ) {
						node = scripts[ i ];
						if ( rscriptType.test( node.type || "" ) &&
							!data_priv.access( node, "globalEval" ) && jQuery.contains( doc, node ) ) {

							if ( node.src ) {
								// Optional AJAX dependency, but won't run scripts if not present
								if ( jQuery._evalUrl ) {
									jQuery._evalUrl( node.src );
								}
							} else {
								jQuery.globalEval( node.textContent.replace( rcleanScript, "" ) );
							}
						}
					}
				}
			}
		}

		return this;
	}
});

jQuery.each({
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: QtWebKit
			// .get() because push.apply(_, arraylike) throws
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
});


var iframe,
	elemdisplay = {};

/**
 * Retrieve the actual display of a element
 * @param {String} name nodeName of the element
 * @param {Object} doc Document object
 */
// Called only from within defaultDisplay
function actualDisplay( name, doc ) {
	var style,
		elem = jQuery( doc.createElement( name ) ).appendTo( doc.body ),

		// getDefaultComputedStyle might be reliably used only on attached element
		display = window.getDefaultComputedStyle && ( style = window.getDefaultComputedStyle( elem[ 0 ] ) ) ?

			// Use of this method is a temporary fix (more like optimization) until something better comes along,
			// since it was removed from specification and supported only in FF
			style.display : jQuery.css( elem[ 0 ], "display" );

	// We don't have any data stored on the element,
	// so use "detach" method as fast way to get rid of the element
	elem.detach();

	return display;
}

/**
 * Try to determine the default display value of an element
 * @param {String} nodeName
 */
function defaultDisplay( nodeName ) {
	var doc = document,
		display = elemdisplay[ nodeName ];

	if ( !display ) {
		display = actualDisplay( nodeName, doc );

		// If the simple way fails, read from inside an iframe
		if ( display === "none" || !display ) {

			// Use the already-created iframe if possible
			iframe = (iframe || jQuery( "<iframe frameborder='0' width='0' height='0'/>" )).appendTo( doc.documentElement );

			// Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
			doc = iframe[ 0 ].contentDocument;

			// Support: IE
			doc.write();
			doc.close();

			display = actualDisplay( nodeName, doc );
			iframe.detach();
		}

		// Store the correct default display
		elemdisplay[ nodeName ] = display;
	}

	return display;
}
var rmargin = (/^margin/);

var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {
		// Support: IE<=11+, Firefox<=30+ (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		if ( elem.ownerDocument.defaultView.opener ) {
			return elem.ownerDocument.defaultView.getComputedStyle( elem, null );
		}

		return window.getComputedStyle( elem, null );
	};



function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,
		style = elem.style;

	computed = computed || getStyles( elem );

	// Support: IE9
	// getPropertyValue is only needed for .css('filter') (#12537)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];
	}

	if ( computed ) {

		if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// Support: iOS < 6
		// A tribute to the "awesome hack by Dean Edwards"
		// iOS < 6 (at least) returns percentage for a larger set of values, but width seems to be reliably pixels
		// this is against the CSSOM draft spec: http://dev.w3.org/csswg/cssom/#resolved-values
		if ( rnumnonpx.test( ret ) && rmargin.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?
		// Support: IE
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {
	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {
				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return (this.get = hookFn).apply( this, arguments );
		}
	};
}


(function() {
	var pixelPositionVal, boxSizingReliableVal,
		docElem = document.documentElement,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	if ( !div.style ) {
		return;
	}

	// Support: IE9-11+
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	container.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;" +
		"position:absolute";
	container.appendChild( div );

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computePixelPositionAndBoxSizingReliable() {
		div.style.cssText =
			// Support: Firefox<29, Android 2.3
			// Vendor-prefix box-sizing
			"-webkit-box-sizing:border-box;-moz-box-sizing:border-box;" +
			"box-sizing:border-box;display:block;margin-top:1%;top:1%;" +
			"border:1px;padding:1px;width:4px;position:absolute";
		div.innerHTML = "";
		docElem.appendChild( container );

		var divStyle = window.getComputedStyle( div, null );
		pixelPositionVal = divStyle.top !== "1%";
		boxSizingReliableVal = divStyle.width === "4px";

		docElem.removeChild( container );
	}

	// Support: node.js jsdom
	// Don't assume that getComputedStyle is a property of the global object
	if ( window.getComputedStyle ) {
		jQuery.extend( support, {
			pixelPosition: function() {

				// This test is executed only once but we still do memoizing
				// since we can use the boxSizingReliable pre-computing.
				// No need to check if the test was already performed, though.
				computePixelPositionAndBoxSizingReliable();
				return pixelPositionVal;
			},
			boxSizingReliable: function() {
				if ( boxSizingReliableVal == null ) {
					computePixelPositionAndBoxSizingReliable();
				}
				return boxSizingReliableVal;
			},
			reliableMarginRight: function() {

				// Support: Android 2.3
				// Check if div with explicit width and no margin-right incorrectly
				// gets computed margin-right based on width of container. (#3333)
				// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
				// This support function is only executed once so no memoizing is needed.
				var ret,
					marginDiv = div.appendChild( document.createElement( "div" ) );

				// Reset CSS: box-sizing; display; margin; border; padding
				marginDiv.style.cssText = div.style.cssText =
					// Support: Firefox<29, Android 2.3
					// Vendor-prefix box-sizing
					"-webkit-box-sizing:content-box;-moz-box-sizing:content-box;" +
					"box-sizing:content-box;display:block;margin:0;border:0;padding:0";
				marginDiv.style.marginRight = marginDiv.style.width = "0";
				div.style.width = "1px";
				docElem.appendChild( container );

				ret = !parseFloat( window.getComputedStyle( marginDiv, null ).marginRight );

				docElem.removeChild( container );
				div.removeChild( marginDiv );

				return ret;
			}
		});
	}
})();


// A method for quickly swapping in/out CSS properties to get correct calculations.
jQuery.swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};


var
	// Swappable if display is none or starts with table except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rnumsplit = new RegExp( "^(" + pnum + ")(.*)$", "i" ),
	rrelNum = new RegExp( "^([+-])=(" + pnum + ")", "i" ),

	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},

	cssPrefixes = [ "Webkit", "O", "Moz", "ms" ];

// Return a css property mapped to a potentially vendor prefixed property
function vendorPropName( style, name ) {

	// Shortcut for names that are not vendor prefixed
	if ( name in style ) {
		return name;
	}

	// Check for vendor prefixed names
	var capName = name[0].toUpperCase() + name.slice(1),
		origName = name,
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in style ) {
			return name;
		}
	}

	return origName;
}

function setPositiveNumber( elem, value, subtract ) {
	var matches = rnumsplit.exec( value );
	return matches ?
		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 1 ] - ( subtract || 0 ) ) + ( matches[ 2 ] || "px" ) :
		value;
}

function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
	var i = extra === ( isBorderBox ? "border" : "content" ) ?
		// If we already have the right measurement, avoid augmentation
		4 :
		// Otherwise initialize for horizontal or vertical properties
		name === "width" ? 1 : 0,

		val = 0;

	for ( ; i < 4; i += 2 ) {
		// Both box models exclude margin, so add it if we want it
		if ( extra === "margin" ) {
			val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
		}

		if ( isBorderBox ) {
			// border-box includes padding, so remove it if we want content
			if ( extra === "content" ) {
				val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// At this point, extra isn't border nor margin, so remove border
			if ( extra !== "margin" ) {
				val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		} else {
			// At this point, extra isn't content, so add padding
			val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// At this point, extra isn't content nor padding, so add border
			if ( extra !== "padding" ) {
				val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	return val;
}

function getWidthOrHeight( elem, name, extra ) {

	// Start with offset property, which is equivalent to the border-box value
	var valueIsBorderBox = true,
		val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
		styles = getStyles( elem ),
		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

	// Some non-html elements return undefined for offsetWidth, so check for null/undefined
	// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
	// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
	if ( val <= 0 || val == null ) {
		// Fall back to computed then uncomputed css if necessary
		val = curCSS( elem, name, styles );
		if ( val < 0 || val == null ) {
			val = elem.style[ name ];
		}

		// Computed unit is not pixels. Stop here and return.
		if ( rnumnonpx.test(val) ) {
			return val;
		}

		// Check for style in case a browser which returns unreliable values
		// for getComputedStyle silently falls back to the reliable elem.style
		valueIsBorderBox = isBorderBox &&
			( support.boxSizingReliable() || val === elem.style[ name ] );

		// Normalize "", auto, and prepare for extra
		val = parseFloat( val ) || 0;
	}

	// Use the active box-sizing model to add/subtract irrelevant styles
	return ( val +
		augmentWidthOrHeight(
			elem,
			name,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles
		)
	) + "px";
}

function showHide( elements, show ) {
	var display, elem, hidden,
		values = [],
		index = 0,
		length = elements.length;

	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		values[ index ] = data_priv.get( elem, "olddisplay" );
		display = elem.style.display;
		if ( show ) {
			// Reset the inline display of this element to learn if it is
			// being hidden by cascaded rules or not
			if ( !values[ index ] && display === "none" ) {
				elem.style.display = "";
			}

			// Set elements which have been overridden with display: none
			// in a stylesheet to whatever the default browser style is
			// for such an element
			if ( elem.style.display === "" && isHidden( elem ) ) {
				values[ index ] = data_priv.access( elem, "olddisplay", defaultDisplay(elem.nodeName) );
			}
		} else {
			hidden = isHidden( elem );

			if ( display !== "none" || !hidden ) {
				data_priv.set( elem, "olddisplay", hidden ? display : jQuery.css( elem, "display" ) );
			}
		}
	}

	// Set the display of most of the elements in a second loop
	// to avoid the constant reflow
	for ( index = 0; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}
		if ( !show || elem.style.display === "none" || elem.style.display === "" ) {
			elem.style.display = show ? values[ index ] || "" : "none";
		}
	}

	return elements;
}

jQuery.extend({

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {
		"float": "cssFloat"
	},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = jQuery.camelCase( name ),
			style = elem.style;

		name = jQuery.cssProps[ origName ] || ( jQuery.cssProps[ origName ] = vendorPropName( style, origName ) );

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && (ret = rrelNum.exec( value )) ) {
				value = ( ret[1] + 1 ) * ret[2] + parseFloat( jQuery.css( elem, name ) );
				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number, add 'px' to the (except for certain CSS properties)
			if ( type === "number" && !jQuery.cssNumber[ origName ] ) {
				value += "px";
			}

			// Support: IE9-11+
			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !("set" in hooks) || (value = hooks.set( elem, value, extra )) !== undefined ) {
				style[ name ] = value;
			}

		} else {
			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks && (ret = hooks.get( elem, false, extra )) !== undefined ) {
				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = jQuery.camelCase( name );

		// Make sure that we're working with the right name
		name = jQuery.cssProps[ origName ] || ( jQuery.cssProps[ origName ] = vendorPropName( elem.style, origName ) );

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || jQuery.isNumeric( num ) ? num || 0 : val;
		}
		return val;
	}
});

jQuery.each([ "height", "width" ], function( i, name ) {
	jQuery.cssHooks[ name ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) && elem.offsetWidth === 0 ?
					jQuery.swap( elem, cssShow, function() {
						return getWidthOrHeight( elem, name, extra );
					}) :
					getWidthOrHeight( elem, name, extra );
			}
		},

		set: function( elem, value, extra ) {
			var styles = extra && getStyles( elem );
			return setPositiveNumber( elem, value, extra ?
				augmentWidthOrHeight(
					elem,
					name,
					extra,
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
					styles
				) : 0
			);
		}
	};
});

// Support: Android 2.3
jQuery.cssHooks.marginRight = addGetHookIf( support.reliableMarginRight,
	function( elem, computed ) {
		if ( computed ) {
			return jQuery.swap( elem, { "display": "inline-block" },
				curCSS, [ elem, "marginRight" ] );
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each({
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split(" ") : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( !rmargin.test( prefix ) ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
});

jQuery.fn.extend({
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( jQuery.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	},
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each(function() {
			if ( isHidden( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		});
	}
});


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || "swing";
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			if ( tween.elem[ tween.prop ] != null &&
				(!tween.elem.style || tween.elem.style[ tween.prop ] == null) ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );
			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {
			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.style && ( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null || jQuery.cssHooks[ tween.prop ] ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE9
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	}
};

jQuery.fx = Tween.prototype.init;

// Back Compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, timerId,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rfxnum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" ),
	rrun = /queueHooks$/,
	animationPrefilters = [ defaultPrefilter ],
	tweeners = {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value ),
				target = tween.cur(),
				parts = rfxnum.exec( value ),
				unit = parts && parts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

				// Starting value computation is required for potential unit mismatches
				start = ( jQuery.cssNumber[ prop ] || unit !== "px" && +target ) &&
					rfxnum.exec( jQuery.css( tween.elem, prop ) ),
				scale = 1,
				maxIterations = 20;

			if ( start && start[ 3 ] !== unit ) {
				// Trust units reported by jQuery.css
				unit = unit || start[ 3 ];

				// Make sure we update the tween properties later on
				parts = parts || [];

				// Iteratively approximate from a nonzero starting point
				start = +target || 1;

				do {
					// If previous iteration zeroed out, double until we get *something*.
					// Use string for doubling so we don't accidentally see scale as unchanged below
					scale = scale || ".5";

					// Adjust and apply
					start = start / scale;
					jQuery.style( tween.elem, prop, start + unit );

				// Update scale, tolerating zero or NaN from tween.cur(),
				// break the loop if scale is unchanged or perfect, or if we've just had enough
				} while ( scale !== (scale = tween.cur() / target) && scale !== 1 && --maxIterations );
			}

			// Update tween properties
			if ( parts ) {
				start = tween.start = +start || +target || 0;
				tween.unit = unit;
				// If a +=/-= token was provided, we're doing a relative animation
				tween.end = parts[ 1 ] ?
					start + ( parts[ 1 ] + 1 ) * parts[ 2 ] :
					+parts[ 2 ];
			}

			return tween;
		} ]
	};

// Animations created synchronously will run synchronously
function createFxNow() {
	setTimeout(function() {
		fxNow = undefined;
	});
	return ( fxNow = jQuery.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4 ; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( tweeners[ prop ] || [] ).concat( tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( (tween = collection[ index ].call( animation, prop, value )) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	/* jshint validthis: true */
	var prop, value, toggle, tween, hooks, oldfire, display, checkDisplay,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHidden( elem ),
		dataShow = data_priv.get( elem, "fxshow" );

	// Handle queue: false promises
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always(function() {
			// Ensure the complete handler is called before this completes
			anim.always(function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			});
		});
	}

	// Height/width overflow pass
	if ( elem.nodeType === 1 && ( "height" in props || "width" in props ) ) {
		// Make sure that nothing sneaks out
		// Record all 3 overflow attributes because IE9-10 do not
		// change the overflow attribute when overflowX and
		// overflowY are set to the same value
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Set display property to inline-block for height/width
		// animations on inline elements that are having width/height animated
		display = jQuery.css( elem, "display" );

		// Test default display if display is currently "none"
		checkDisplay = display === "none" ?
			data_priv.get( elem, "olddisplay" ) || defaultDisplay( elem.nodeName ) : display;

		if ( checkDisplay === "inline" && jQuery.css( elem, "float" ) === "none" ) {
			style.display = "inline-block";
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always(function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		});
	}

	// show/hide pass
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.exec( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// If there is dataShow left over from a stopped hide or show and we are going to proceed with show, we should pretend to be hidden
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );

		// Any non-fx value stops us from restoring the original display value
		} else {
			display = undefined;
		}
	}

	if ( !jQuery.isEmptyObject( orig ) ) {
		if ( dataShow ) {
			if ( "hidden" in dataShow ) {
				hidden = dataShow.hidden;
			}
		} else {
			dataShow = data_priv.access( elem, "fxshow", {} );
		}

		// Store state if its toggle - enables .stop().toggle() to "reverse"
		if ( toggle ) {
			dataShow.hidden = !hidden;
		}
		if ( hidden ) {
			jQuery( elem ).show();
		} else {
			anim.done(function() {
				jQuery( elem ).hide();
			});
		}
		anim.done(function() {
			var prop;

			data_priv.remove( elem, "fxshow" );
			for ( prop in orig ) {
				jQuery.style( elem, prop, orig[ prop ] );
			}
		});
		for ( prop in orig ) {
			tween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );

			if ( !( prop in dataShow ) ) {
				dataShow[ prop ] = tween.start;
				if ( hidden ) {
					tween.end = tween.start;
					tween.start = prop === "width" || prop === "height" ? 1 : 0;
				}
			}
		}

	// If this is a noop like .hide().hide(), restore an overwritten display value
	} else if ( (display === "none" ? defaultDisplay( elem.nodeName ) : display) === "inline" ) {
		style.display = display;
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = jQuery.camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( jQuery.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = animationPrefilters.length,
		deferred = jQuery.Deferred().always( function() {
			// Don't match elem in the :animated selector
			delete tick.elem;
		}),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),
				// Support: Android 2.3
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length ; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ]);

			if ( percent < 1 && length ) {
				return remaining;
			} else {
				deferred.resolveWith( elem, [ animation ] );
				return false;
			}
		},
		animation = deferred.promise({
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, { specialEasing: {} }, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,
					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length ; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		}),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length ; index++ ) {
		result = animationPrefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( jQuery.isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		})
	);

	// attach callbacks from options
	return animation.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );
}

jQuery.Animation = jQuery.extend( Animation, {

	tweener: function( props, callback ) {
		if ( jQuery.isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.split(" ");
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length ; index++ ) {
			prop = props[ index ];
			tweeners[ prop ] = tweeners[ prop ] || [];
			tweeners[ prop ].unshift( callback );
		}
	},

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			animationPrefilters.unshift( callback );
		} else {
			animationPrefilters.push( callback );
		}
	}
});

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			jQuery.isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
	};

	opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ? opt.duration :
		opt.duration in jQuery.fx.speeds ? jQuery.fx.speeds[ opt.duration ] : jQuery.fx.speeds._default;

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( jQuery.isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend({
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHidden ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate({ opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {
				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || data_priv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each(function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = data_priv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && (type == null || timers[ index ].queue === type) ) {
					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		});
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each(function() {
			var index,
				data = data_priv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		});
	}
});

jQuery.each([ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
});

// Generate shortcuts for custom animations
jQuery.each({
	slideDown: genFx("show"),
	slideUp: genFx("hide"),
	slideToggle: genFx("toggle"),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
});

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = jQuery.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];
		// Checks the timer has not already been removed
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	if ( timer() ) {
		jQuery.fx.start();
	} else {
		jQuery.timers.pop();
	}
};

jQuery.fx.interval = 13;

jQuery.fx.start = function() {
	if ( !timerId ) {
		timerId = setInterval( jQuery.fx.tick, jQuery.fx.interval );
	}
};

jQuery.fx.stop = function() {
	clearInterval( timerId );
	timerId = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,
	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = setTimeout( next, time );
		hooks.stop = function() {
			clearTimeout( timeout );
		};
	});
};


(function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: iOS<=5.1, Android<=4.2+
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE<=11+
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: Android<=2.3
	// Options inside disabled selects are incorrectly marked as disabled
	select.disabled = true;
	support.optDisabled = !opt.disabled;

	// Support: IE<=11+
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
})();


var nodeHook, boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend({
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each(function() {
			jQuery.removeAttr( this, name );
		});
	}
});

jQuery.extend({
	attr: function( elem, name, value ) {
		var hooks, ret,
			nType = elem.nodeType;

		// don't get/set attributes on text, comment and attribute nodes
		if ( !elem || nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === strundefined ) {
			return jQuery.prop( elem, name, value );
		}

		// All attributes are lowercase
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			name = name.toLowerCase();
			hooks = jQuery.attrHooks[ name ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : nodeHook );
		}

		if ( value !== undefined ) {

			if ( value === null ) {
				jQuery.removeAttr( elem, name );

			} else if ( hooks && "set" in hooks && (ret = hooks.set( elem, value, name )) !== undefined ) {
				return ret;

			} else {
				elem.setAttribute( name, value + "" );
				return value;
			}

		} else if ( hooks && "get" in hooks && (ret = hooks.get( elem, name )) !== null ) {
			return ret;

		} else {
			ret = jQuery.find.attr( elem, name );

			// Non-existent attributes return null, we normalize to undefined
			return ret == null ?
				undefined :
				ret;
		}
	},

	removeAttr: function( elem, value ) {
		var name, propName,
			i = 0,
			attrNames = value && value.match( rnotwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( (name = attrNames[i++]) ) {
				propName = jQuery.propFix[ name ] || name;

				// Boolean attributes get special treatment (#10870)
				if ( jQuery.expr.match.bool.test( name ) ) {
					// Set corresponding property to false
					elem[ propName ] = false;
				}

				elem.removeAttribute( name );
			}
		}
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					jQuery.nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	}
});

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {
			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};
jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle;
		if ( !isXML ) {
			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ name ];
			attrHandle[ name ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				name.toLowerCase() :
				null;
			attrHandle[ name ] = handle;
		}
		return ret;
	};
});




var rfocusable = /^(?:input|select|textarea|button)$/i;

jQuery.fn.extend({
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each(function() {
			delete this[ jQuery.propFix[ name ] || name ];
		});
	}
});

jQuery.extend({
	propFix: {
		"for": "htmlFor",
		"class": "className"
	},

	prop: function( elem, name, value ) {
		var ret, hooks, notxml,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( !elem || nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		notxml = nType !== 1 || !jQuery.isXMLDoc( elem );

		if ( notxml ) {
			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			return hooks && "set" in hooks && (ret = hooks.set( elem, value, name )) !== undefined ?
				ret :
				( elem[ name ] = value );

		} else {
			return hooks && "get" in hooks && (ret = hooks.get( elem, name )) !== null ?
				ret :
				elem[ name ];
		}
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {
				return elem.hasAttribute( "tabindex" ) || rfocusable.test( elem.nodeName ) || elem.href ?
					elem.tabIndex :
					-1;
			}
		}
	}
});

if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {
			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		}
	};
}

jQuery.each([
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
});




var rclass = /[\t\r\n\f]/g;

jQuery.fn.extend({
	addClass: function( value ) {
		var classes, elem, cur, clazz, j, finalValue,
			proceed = typeof value === "string" && value,
			i = 0,
			len = this.length;

		if ( jQuery.isFunction( value ) ) {
			return this.each(function( j ) {
				jQuery( this ).addClass( value.call( this, j, this.className ) );
			});
		}

		if ( proceed ) {
			// The disjunction here is for better compressibility (see removeClass)
			classes = ( value || "" ).match( rnotwhite ) || [];

			for ( ; i < len; i++ ) {
				elem = this[ i ];
				cur = elem.nodeType === 1 && ( elem.className ?
					( " " + elem.className + " " ).replace( rclass, " " ) :
					" "
				);

				if ( cur ) {
					j = 0;
					while ( (clazz = classes[j++]) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// only assign if different to avoid unneeded rendering.
					finalValue = jQuery.trim( cur );
					if ( elem.className !== finalValue ) {
						elem.className = finalValue;
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, clazz, j, finalValue,
			proceed = arguments.length === 0 || typeof value === "string" && value,
			i = 0,
			len = this.length;

		if ( jQuery.isFunction( value ) ) {
			return this.each(function( j ) {
				jQuery( this ).removeClass( value.call( this, j, this.className ) );
			});
		}
		if ( proceed ) {
			classes = ( value || "" ).match( rnotwhite ) || [];

			for ( ; i < len; i++ ) {
				elem = this[ i ];
				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( elem.className ?
					( " " + elem.className + " " ).replace( rclass, " " ) :
					""
				);

				if ( cur ) {
					j = 0;
					while ( (clazz = classes[j++]) ) {
						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) >= 0 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = value ? jQuery.trim( cur ) : "";
					if ( elem.className !== finalValue ) {
						elem.className = finalValue;
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value;

		if ( typeof stateVal === "boolean" && type === "string" ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( jQuery.isFunction( value ) ) {
			return this.each(function( i ) {
				jQuery( this ).toggleClass( value.call(this, i, this.className, stateVal), stateVal );
			});
		}

		return this.each(function() {
			if ( type === "string" ) {
				// Toggle individual class names
				var className,
					i = 0,
					self = jQuery( this ),
					classNames = value.match( rnotwhite ) || [];

				while ( (className = classNames[ i++ ]) ) {
					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( type === strundefined || type === "boolean" ) {
				if ( this.className ) {
					// store className if set
					data_priv.set( this, "__className__", this.className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				this.className = this.className || value === false ? "" : data_priv.get( this, "__className__" ) || "";
			}
		});
	},

	hasClass: function( selector ) {
		var className = " " + selector + " ",
			i = 0,
			l = this.length;
		for ( ; i < l; i++ ) {
			if ( this[i].nodeType === 1 && (" " + this[i].className + " ").replace(rclass, " ").indexOf( className ) >= 0 ) {
				return true;
			}
		}

		return false;
	}
});




var rreturn = /\r/g;

jQuery.fn.extend({
	val: function( value ) {
		var hooks, ret, isFunction,
			elem = this[0];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] || jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks && "get" in hooks && (ret = hooks.get( elem, "value" )) !== undefined ) {
					return ret;
				}

				ret = elem.value;

				return typeof ret === "string" ?
					// Handle most common string cases
					ret.replace(rreturn, "") :
					// Handle cases where value is null/undef or number
					ret == null ? "" : ret;
			}

			return;
		}

		isFunction = jQuery.isFunction( value );

		return this.each(function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( isFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( jQuery.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				});
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !("set" in hooks) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		});
	}
});

jQuery.extend({
	valHooks: {
		option: {
			get: function( elem ) {
				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :
					// Support: IE10-11+
					// option.text throws exceptions (#14686, #14858)
					jQuery.trim( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one" || index < 0,
					values = one ? null : [],
					max = one ? index + 1 : options.length,
					i = index < 0 ?
						max :
						one ? index : 0;

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// IE6-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&
							// Don't return options that are disabled or in a disabled optgroup
							( support.optDisabled ? !option.disabled : option.getAttribute( "disabled" ) === null ) &&
							( !option.parentNode.disabled || !jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];
					if ( (option.selected = jQuery.inArray( option.value, values ) >= 0) ) {
						optionSet = true;
					}
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
});

// Radios and checkboxes getter/setter
jQuery.each([ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( jQuery.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery(elem).val(), value ) >= 0 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute("value") === null ? "on" : elem.value;
		};
	}
});




// Return jQuery for attributes-only inclusion


jQuery.each( ("blur focus focusin focusout load resize scroll unload click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup error contextmenu").split(" "), function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
});

jQuery.fn.extend({
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	},

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {
		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ? this.off( selector, "**" ) : this.off( types, selector || "**", fn );
	}
});


var nonce = jQuery.now();

var rquery = (/\?/);



// Support: Android 2.3
// Workaround failure to string-cast null input
jQuery.parseJSON = function( data ) {
	return JSON.parse( data + "" );
};


// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml, tmp;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE9
	try {
		tmp = new DOMParser();
		xml = tmp.parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rhash = /#.*$/,
	rts = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,
	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,
	rurl = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Document location
	ajaxLocation = window.location.href,

	// Segment location into parts
	ajaxLocParts = rurl.exec( ajaxLocation.toLowerCase() ) || [];

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnotwhite ) || [];

		if ( jQuery.isFunction( func ) ) {
			// For each dataType in the dataTypeExpression
			while ( (dataType = dataTypes[i++]) ) {
				// Prepend if requested
				if ( dataType[0] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					(structure[ dataType ] = structure[ dataType ] || []).unshift( func );

				// Otherwise append
				} else {
					(structure[ dataType ] = structure[ dataType ] || []).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[ dataTypeOrTransport ] ) {
				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		});
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || (deep = {}) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {
		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[0] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}
		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},
		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

		// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {
								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s[ "throws" ] ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return { state: "parsererror", error: conv ? e : "No conversion from " + prev + " to " + current };
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend({

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: ajaxLocation,
		type: "GET",
		isLocal: rlocalProtocol.test( ajaxLocParts[ 1 ] ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",
		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /xml/,
			html: /html/,
			json: /json/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": jQuery.parseJSON,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,
			// URL without anti-cache param
			cacheURL,
			// Response headers
			responseHeadersString,
			responseHeaders,
			// timeout handle
			timeoutTimer,
			// Cross-domain detection vars
			parts,
			// To know if global events are to be dispatched
			fireGlobals,
			// Loop variable
			i,
			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),
			// Callbacks context
			callbackContext = s.context || s,
			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context && ( callbackContext.nodeType || callbackContext.jquery ) ?
				jQuery( callbackContext ) :
				jQuery.event,
			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks("once memory"),
			// Status-dependent callbacks
			statusCode = s.statusCode || {},
			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},
			// The jqXHR state
			state = 0,
			// Default abort message
			strAbort = "canceled",
			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( state === 2 ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( (match = rheaders.exec( responseHeadersString )) ) {
								responseHeaders[ match[1].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return state === 2 ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					var lname = name.toLowerCase();
					if ( !state ) {
						name = requestHeadersNames[ lname ] = requestHeadersNames[ lname ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( !state ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( state < 2 ) {
							for ( code in map ) {
								// Lazy-add the new callback in a way that preserves old ones
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						} else {
							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR ).complete = completeDeferred.add;
		jqXHR.success = jqXHR.done;
		jqXHR.error = jqXHR.fail;

		// Remove hash character (#7531: and string promotion)
		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || ajaxLocation ) + "" ).replace( rhash, "" )
			.replace( rprotocol, ajaxLocParts[ 1 ] + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = jQuery.trim( s.dataType || "*" ).toLowerCase().match( rnotwhite ) || [ "" ];

		// A cross-domain request is in order when we have a protocol:host:port mismatch
		if ( s.crossDomain == null ) {
			parts = rurl.exec( s.url.toLowerCase() );
			s.crossDomain = !!( parts &&
				( parts[ 1 ] !== ajaxLocParts[ 1 ] || parts[ 2 ] !== ajaxLocParts[ 2 ] ||
					( parts[ 3 ] || ( parts[ 1 ] === "http:" ? "80" : "443" ) ) !==
						( ajaxLocParts[ 3 ] || ( ajaxLocParts[ 1 ] === "http:" ? "80" : "443" ) ) )
			);
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( state === 2 ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger("ajaxStart");
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		cacheURL = s.url;

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// If data is available, append data to url
			if ( s.data ) {
				cacheURL = ( s.url += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data );
				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add anti-cache in url if needed
			if ( s.cache === false ) {
				s.url = rts.test( cacheURL ) ?

					// If there is already a '_' parameter, set its value
					cacheURL.replace( rts, "$1_=" + nonce++ ) :

					// Otherwise add one to the end
					cacheURL + ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + nonce++;
			}
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[0] ] ?
				s.accepts[ s.dataTypes[0] ] + ( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend && ( s.beforeSend.call( callbackContext, jqXHR, s ) === false || state === 2 ) ) {
			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		for ( i in { success: 1, error: 1, complete: 1 } ) {
			jqXHR[ i ]( s[ i ] );
		}

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}
			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = setTimeout(function() {
					jqXHR.abort("timeout");
				}, s.timeout );
			}

			try {
				state = 1;
				transport.send( requestHeaders, done );
			} catch ( e ) {
				// Propagate exception as error if not done
				if ( state < 2 ) {
					done( -1, e );
				// Simply rethrow otherwise
				} else {
					throw e;
				}
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Called once
			if ( state === 2 ) {
				return;
			}

			// State is "done" now
			state = 2;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader("Last-Modified");
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader("etag");
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {
				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );
				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger("ajaxStop");
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
});

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {
		// Shift arguments if data argument was omitted
		if ( jQuery.isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		return jQuery.ajax({
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		});
	};
});


jQuery._evalUrl = function( url ) {
	return jQuery.ajax({
		url: url,
		type: "GET",
		dataType: "script",
		async: false,
		global: false,
		"throws": true
	});
};


jQuery.fn.extend({
	wrapAll: function( html ) {
		var wrap;

		if ( jQuery.isFunction( html ) ) {
			return this.each(function( i ) {
				jQuery( this ).wrapAll( html.call(this, i) );
			});
		}

		if ( this[ 0 ] ) {

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map(function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			}).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( jQuery.isFunction( html ) ) {
			return this.each(function( i ) {
				jQuery( this ).wrapInner( html.call(this, i) );
			});
		}

		return this.each(function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		});
	},

	wrap: function( html ) {
		var isFunction = jQuery.isFunction( html );

		return this.each(function( i ) {
			jQuery( this ).wrapAll( isFunction ? html.call(this, i) : html );
		});
	},

	unwrap: function() {
		return this.parent().each(function() {
			if ( !jQuery.nodeName( this, "body" ) ) {
				jQuery( this ).replaceWith( this.childNodes );
			}
		}).end();
	}
});


jQuery.expr.filters.hidden = function( elem ) {
	// Support: Opera <= 12.12
	// Opera reports offsetWidths and offsetHeights less than zero on some elements
	return elem.offsetWidth <= 0 && elem.offsetHeight <= 0;
};
jQuery.expr.filters.visible = function( elem ) {
	return !jQuery.expr.filters.hidden( elem );
};




var r20 = /%20/g,
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( jQuery.isArray( obj ) ) {
		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {
				// Treat each array item as a scalar.
				add( prefix, v );

			} else {
				// Item is non-scalar (array or object), encode its numeric index.
				buildParams( prefix + "[" + ( typeof v === "object" ? i : "" ) + "]", v, traditional, add );
			}
		});

	} else if ( !traditional && jQuery.type( obj ) === "object" ) {
		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {
		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, value ) {
			// If value is a function, invoke it and return its value
			value = jQuery.isFunction( value ) ? value() : ( value == null ? "" : value );
			s[ s.length ] = encodeURIComponent( key ) + "=" + encodeURIComponent( value );
		};

	// Set traditional to true for jQuery <= 1.3.2 behavior.
	if ( traditional === undefined ) {
		traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {
		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		});

	} else {
		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" ).replace( r20, "+" );
};

jQuery.fn.extend({
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map(function() {
			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		})
		.filter(function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		})
		.map(function( i, elem ) {
			var val = jQuery( this ).val();

			return val == null ?
				null :
				jQuery.isArray( val ) ?
					jQuery.map( val, function( val ) {
						return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
					}) :
					{ name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		}).get();
	}
});


jQuery.ajaxSettings.xhr = function() {
	try {
		return new XMLHttpRequest();
	} catch( e ) {}
};

var xhrId = 0,
	xhrCallbacks = {},
	xhrSuccessStatus = {
		// file protocol always yields status code 0, assume 200
		0: 200,
		// Support: IE9
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

// Support: IE9
// Open requests must be manually aborted on unload (#5280)
// See https://support.microsoft.com/kb/2856746 for more info
if ( window.attachEvent ) {
	window.attachEvent( "onunload", function() {
		for ( var key in xhrCallbacks ) {
			xhrCallbacks[ key ]();
		}
	});
}

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport(function( options ) {
	var callback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr(),
					id = ++xhrId;

				xhr.open( options.type, options.url, options.async, options.username, options.password );

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers["X-Requested-With"] ) {
					headers["X-Requested-With"] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							delete xhrCallbacks[ id ];
							callback = xhr.onload = xhr.onerror = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {
								complete(
									// file: protocol always yields status 0; see #8605, #14207
									xhr.status,
									xhr.statusText
								);
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,
									// Support: IE9
									// Accessing binary-data responseText throws an exception
									// (#11426)
									typeof xhr.responseText === "string" ? {
										text: xhr.responseText
									} : undefined,
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				xhr.onerror = callback("error");

				// Create the abort callback
				callback = xhrCallbacks[ id ] = callback("abort");

				try {
					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {
					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
});




// Install script dataType
jQuery.ajaxSetup({
	accepts: {
		script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /(?:java|ecma)script/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
});

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
});

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {
	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery("<script>").prop({
					async: true,
					charset: s.scriptCharset,
					src: s.url
				}).on(
					"load error",
					callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					}
				);
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
});




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup({
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
});

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" && !( s.contentType || "" ).indexOf("application/x-www-form-urlencoded") && rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters["script json"] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always(function() {
			// Restore preexisting value
			window[ callbackName ] = overwritten;

			// Save back as free
			if ( s[ callbackName ] ) {
				// make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && jQuery.isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		});

		// Delegate to script
		return "script";
	}
});




// data: string of html
// context (optional): If specified, the fragment will be created in this context, defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( !data || typeof data !== "string" ) {
		return null;
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}
	context = context || document;

	var parsed = rsingleTag.exec( data ),
		scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[1] ) ];
	}

	parsed = jQuery.buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


// Keep a copy of the old load method
var _load = jQuery.fn.load;

/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	if ( typeof url !== "string" && _load ) {
		return _load.apply( this, arguments );
	}

	var selector, type, response,
		self = this,
		off = url.indexOf(" ");

	if ( off >= 0 ) {
		selector = jQuery.trim( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( jQuery.isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax({
			url: url,

			// if "type" variable is undefined, then "GET" method will be used
			type: type,
			dataType: "html",
			data: params
		}).done(function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery("<div>").append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		}).complete( callback && function( jqXHR, status ) {
			self.each( callback, response || [ jqXHR.responseText, status, jqXHR ] );
		});
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
});




jQuery.expr.filters.animated = function( elem ) {
	return jQuery.grep(jQuery.timers, function( fn ) {
		return elem === fn.elem;
	}).length;
};




var docElem = window.document.documentElement;

/**
 * Gets a window from an element
 */
function getWindow( elem ) {
	return jQuery.isWindow( elem ) ? elem : elem.nodeType === 9 && elem.defaultView;
}

jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf("auto") > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( jQuery.isFunction( options ) ) {
			options = options.call( elem, i, curOffset );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend({
	offset: function( options ) {
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each(function( i ) {
					jQuery.offset.setOffset( this, options, i );
				});
		}

		var docElem, win,
			elem = this[ 0 ],
			box = { top: 0, left: 0 },
			doc = elem && elem.ownerDocument;

		if ( !doc ) {
			return;
		}

		docElem = doc.documentElement;

		// Make sure it's not a disconnected DOM node
		if ( !jQuery.contains( docElem, elem ) ) {
			return box;
		}

		// Support: BlackBerry 5, iOS 3 (original iPhone)
		// If we don't have gBCR, just use 0,0 rather than error
		if ( typeof elem.getBoundingClientRect !== strundefined ) {
			box = elem.getBoundingClientRect();
		}
		win = getWindow( doc );
		return {
			top: box.top + win.pageYOffset - docElem.clientTop,
			left: box.left + win.pageXOffset - docElem.clientLeft
		};
	},

	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// Fixed elements are offset from window (parentOffset = {top:0, left: 0}, because it is its only offset parent
		if ( jQuery.css( elem, "position" ) === "fixed" ) {
			// Assume getBoundingClientRect is there when computed position is fixed
			offset = elem.getBoundingClientRect();

		} else {
			// Get *real* offsetParent
			offsetParent = this.offsetParent();

			// Get correct offsets
			offset = this.offset();
			if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
				parentOffset = offsetParent.offset();
			}

			// Add offsetParent borders
			parentOffset.top += jQuery.css( offsetParent[ 0 ], "borderTopWidth", true );
			parentOffset.left += jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true );
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	offsetParent: function() {
		return this.map(function() {
			var offsetParent = this.offsetParent || docElem;

			while ( offsetParent && ( !jQuery.nodeName( offsetParent, "html" ) && jQuery.css( offsetParent, "position" ) === "static" ) ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || docElem;
		});
	}
});

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {
			var win = getWindow( elem );

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : window.pageXOffset,
					top ? val : window.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length, null );
	};
});

// Support: Safari<7+, Chrome<37+
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://code.google.com/p/chromium/issues/detail?id=229280
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );
				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
});


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name }, function( defaultExtra, funcName ) {
		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( jQuery.isWindow( elem ) ) {
					// As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there
					// isn't a whole lot we can do. See pull request at this URL for discussion:
					// https://github.com/jquery/jquery/pull/764
					return elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?
					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable, null );
		};
	});
});


// The number of elements contained in the matched element set
jQuery.fn.size = function() {
	return this.length;
};

jQuery.fn.andSelf = jQuery.fn.addBack;




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
		return jQuery;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}




var
	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( typeof noGlobal === strundefined ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;

}));


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(5);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(7)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js!./style.css", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js!./style.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {// requires different files from others 
var style = __webpack_require__(3);
var i18n={
    en:__webpack_require__(0),
    tw:__webpack_require__(1)
};

let currentPage = 0; 
let isLoading = false;
let language = 'zh-tw'; // default language
let theTitle = document.getElementById('title');
document.getElementById('btn').addEventListener('click',changeLanguage);

// i18n
function changeLanguage(lang) {

    var e = event.target;
    const attr = e.getAttribute('data-selectLang');

    if (attr === 'en' || attr === 'zh-tw') {

        theTitle.innerHTML = i18n[attr].TITLE; // switch the language of stream.

        if( attr === 'zh-tw') {
            console.log('你正使用' + ' ' + i18n[attr].WORDS + '觀看Twitch。')
        } else {
            console.log("You're viewing Twitch in"+' '+ i18n[attr].WORDS);
        }

        language = attr;
        currentPage = 0;
        $('#content').empty(); // clear
        appendData(language);
    }
}

$(document).ready(function infiniteScroll() {

    appendData(language); 
    const reverse_height = 200;
    $(window).scroll(function() {
        if ($(window).scrollTop() + $(window).height() > $(document).height() - reverse_height) {

            if (!isLoading) {
                appendData(language);
            }
        }
    });
})

function getData(lang, callback) {

    console.log('Loading data.');

    const clientId = 'rx55ypcn5s81meroo6b5fagl1bwwkw'; 
    const mycontentType = 'application/vnd.twitchtv.v5+json';
    const autoplay = false;
    const limit = 20;

    isLoading = true;

    $.ajax({
        type: 'GET',
        url: 'https://api.twitch.tv/kraken/streams/?autoplay=' + autoplay + '&game=League%20of%20Legends&limit=' + limit + '&offset=' + currentPage + '&language=' + lang,
        headers: {
            'Client-ID': clientId,
            'Accept': mycontentType
        },
        success: function(data) {
            console.log(data);
            callback(null, data);
        },
        error: function(err) {
            console.log('Error');
            callback(null, err);
        }
    })
}

function appendData(lang) {
    getData(lang, (err, data) => { 
        const { streams } = data;
        const $content = $('#content');
        for (let stream of streams) {
            $content.append(getTemplateData(stream));
        }
        currentPage += 20;
        isLoading = false;
    });
}

function getTemplateData(data) {

    var logo = data.channel.logo; // host's logo
    var placeholderIMG = data.preview.medium; // placeholder
    var name = data.channel.display_name;
    var status = data.channel.status;

    // if images doesn't exists, do these as below.
    if (logo === null) {
        logo = '../images/host.png'; // image of host
    } else if (placeholderIMG === null) {
        placeholderIMG = '../../images/404_preview-320x180.jpg'; // image of placeholder
    }

    return `
            <li class='item'>
                <div class='video'>
                    <img class='live_video' src='${placeholderIMG}' onload='this.style.opacity=1;'>
                    <div class='placeholder'></div>
                </div>
                <div class='avatar'> 
                    <img class='img_' src='${logo}' onload='this.style.opacity=1;'>
                    <div id='info_' class='info'> 
                        <p class='channel'> ${status} </p>  
                        <p class='host'> ${name} </p>
                    </div>
                </div>
            </li>`;
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(undefined);
// imports


// module
exports.push([module.i, "html,\r\nbody {\r\n    height: 100%;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\nbody {\r\n    background-image: url(" + __webpack_require__(10) + ");\r\n    background-attachment: fixed;\r\n    color: #fff;\r\n}\r\n\r\n#container {\r\n\twidth: 100%;\r\n    z-index: -999;\r\n    background-size: cover;\r\n    background: rgba(0, 0, 0, .5);\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n/* i18n Language*/\r\n#menu{\r\n    text-align: center;\r\n    height: 120px;\r\n    background: none;\r\n    position:absolute;\r\n}\r\nbutton{\r\n    padding:5px;\r\n    background: none;\r\n    border: none;\r\n    color: #fff;\r\n}\r\nbutton:hover{\r\n    color:#46E8CF;\r\n}\r\n#content{\r\n\tmargin: 20px auto;\r\n    width: 1000px;\r\n}\r\n.item {\r\n    width: 300px;\r\n    height: 200px;\r\n    display: inline-block;\r\n    list-style: none;\r\n    /* Notice */\r\n    margin: 5px 10px 15px 20px;\r\n    /*上 右 下 左*/\r\n    padding-bottom: 98px;\r\n    position: relative;\r\n    left: 0;\r\n    top:120px;\r\n}\r\n\r\n.item:hover,\r\n.avatar:hover {\r\n    box-shadow: 1px 3px 3px 3px #000;\r\n    filter: contrast(100%) brightness(140%);\r\n}\r\n\r\n.placeholder {\r\n    background-image: url(" + __webpack_require__(9) + ");\r\n    /*placeholder*/\r\n    background-size: 300px 200px;\r\n    /* width height*/\r\n    background-repeat: no-repeat;\r\n    left: 0px;\r\n    top: 0px;\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n/* \r\niframe {\r\n    border: none;\r\n    width: 300px;\r\n    height: 200px;\r\n    position: absolute;\r\n    left: 0px;\r\n    top: 0px;\r\n}*/\r\n\r\n.video {\r\n    border: none;\r\n    width: 100%;\r\n    height: 100%;\r\n    position: absolute;\r\n    left: 0px;\r\n    top: 0px;\r\n}\r\n.video img {\r\n    position: relative;\r\n    z-index: 1;\r\n    opacity: 0;\r\n    width: 300px;\r\n    height: 200px;\r\n    transition: opacity, 0.5s, ease-out;\r\n}\r\n\r\n/*\r\nimg .live_video {\r\n    position: absolute;\r\n    width: 300px;\r\n    height: 200px;\r\n    border: none;\r\n    left: 0px;\r\n    top: 0px;\r\n}\r\n*/\r\n.avatar {\r\n    background: #000;\r\n    opacity: 0.6;\r\n    position: absolute;\r\n    top: 198px;\r\n    width: 300px;\r\n    height: 105px;\r\n    left: 0px;\r\n    border-top: 1px solid #fff;\r\n}\r\n\r\n.avatar img {\r\n    border-radius: 50%;\r\n    background-size: 50px 50px;\r\n    width: 50px;\r\n    height: 50px;\r\n    position: relative;\r\n    left: 20px;\r\n    top: 20px;\r\n    overflow: hidden;\r\n}\r\n\r\n.info {\r\n    position: absolute;\r\n    left: 90px;\r\n    top: 0px;\r\n    font-size: 15px;\r\n    width: 210px;\r\n}\r\n\r\n.info p{\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n}\r\n", ""]);

// exports


/***/ }),
/* 6 */
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
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(8);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);

	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 8 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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ah7VvQyeEJc03zeRUaKT1J7+7utQvJb2+uJbm5lbdJLI25mPuagoor2EraI1Ciig0wCiiigAoooNABRRRQAUUUGgAooooAKKKDQAUc0UUAHNHNFFABRzRRQAc0c0UUAFHNFFABzRzRRQAUc0UUAHNHNFFAHafCbxpb+CtUvry5sJrxbqBYgsbhSpDZzzXov/AAvnS/8AoXL7/wACE/wrwaiuOtgKFafPNa+pLhFu7PVvHPxm1HV7D7DoFrLpKSAiaZpA0pHopH3R79fpXlJJJJJJJ5JPeiitqGHp0I8tNWHGKjsFHNFFbDDmjmiigAo5oooAOaOaKKACjmiigA5o5oooAKOaKKADmjmiigAo5oooAOaOaKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigANFB7UelMAooNB7UAAooFFABRQaD2oABRQKKACig0HtQACigUUAFFBoPagAFFAooAKKDQe1AAKKBRQAUUGg9qAAUUCigAooNB7UAAooFFABRQaD2oABRQKKACig0HtQACigUUAFFBoPagD/2Q=="

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAAyAAD/4QMtaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjMtYzAxMSA2Ni4xNDU2NjEsIDIwMTIvMDIvMDYtMTQ6NTY6MjcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzYgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MTJGNTU2REUxN0ZDMTFFM0EwNTdCQkMwNUU4N0VBMEQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MTJGNTU2REYxN0ZDMTFFM0EwNTdCQkMwNUU4N0VBMEQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxMkY1NTZEQzE3RkMxMUUzQTA1N0JCQzA1RTg3RUEwRCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxMkY1NTZERDE3RkMxMUUzQTA1N0JCQzA1RTg3RUEwRCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pv/uAA5BZG9iZQBkwAAAAAH/2wCEAAgGBgYGBggGBggMCAcIDA4K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AQhCAQhCAQhCAQhCAQhCAQhCAQhCAQhCAQhCAQhCAQhCAQhCAQhCAQhCAQhCAQhCAQhCAQhCAQhCAQhCAQhCAQhCAQhCAQhCAQhCAQhCAQhCAQhCAQhCAQhCAQhCAQhCAQhCBuh0kIG6EkINAyp1m6blEW6RKh0OqYbpuodCCnQ6l00DdDqapoB0OhJQNJJ0IpoSQgaEkIGh0kIGh0kIGh0kIGkhCBpIQqBCEKAQhCAQhCAQhCAQhCBoSQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgE3SQgEIQgEIQgEIQgHQ6EIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIP/Z"

/***/ })
/******/ ]);
