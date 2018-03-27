module.exports =
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _marked = __webpack_require__(2);

var _marked2 = _interopRequireDefault(_marked);

var _highlight = __webpack_require__(3);

var _highlight2 = _interopRequireDefault(_highlight);

__webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ReactHighMark = function ReactHighMark(_ref) {
  var _ref$source = _ref.source,
      source = _ref$source === undefined ? "" : _ref$source,
      _ref$style = _ref.style,
      style = _ref$style === undefined ? "fresh" : _ref$style;

  var renderer = new _marked2.default.Renderer();
  console.log(renderer);
  _marked2.default.setOptions({
    renderer: renderer,
    highlight: function highlight(code) {
      return _highlight2.default.highlightAuto(code).value;
    },
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: false,
    smartLists: true,
    smartypants: false,
    xhtml: false
  });
  var htmlCode = (0, _marked2.default)(source);
  var styleClass = 'testBox ' + style;
  return _react2.default.createElement(
    'div',
    { className: styleClass },
    _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: htmlCode } })
  );
};

exports.default = ReactHighMark;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("marked");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("highlight.js");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(5);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(7)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/less-loader/dist/cjs.js!./index.less", function() {
		var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/less-loader/dist/cjs.js!./index.less");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, ".diablo .hljs {\n  display: block;\n  padding: .5em;\n  background: #23241f;\n}\n.diablo .hljs,\n.diablo .hljs-tag,\n.diablo .css .hljs-rules,\n.diablo .css .hljs-value,\n.diablo .css .hljs-function .hljs-preprocessor,\n.diablo .hljs-pragma {\n  color: #f8f8f2;\n}\n.diablo .hljs-strongemphasis,\n.diablo .hljs-strong,\n.diablo .hljs-emphasis {\n  color: #a8a8a2;\n}\n.diablo .hljs-bullet,\n.diablo .hljs-blockquote,\n.diablo .hljs-horizontal_rule,\n.diablo .hljs-number,\n.diablo .hljs-regexp,\n.diablo .alias .hljs-keyword,\n.diablo .hljs-literal,\n.diablo .hljs-hexcolor {\n  color: #ae81ff;\n}\n.diablo .hljs-tag .hljs-value,\n.diablo .hljs-code,\n.diablo .hljs-title,\n.diablo .css .hljs-class,\n.diablo .hljs-class .hljs-title:last-child {\n  color: #a6e22e;\n}\n.diablo .hljs-link_url {\n  font-size: 80%;\n}\n.diablo .hljs-strong,\n.diablo .hljs-strongemphasis {\n  font-weight: bold;\n}\n.diablo .hljs-emphasis,\n.diablo .hljs-strongemphasis,\n.diablo .hljs-class .hljs-title:last-child {\n  font-style: italic;\n}\n.diablo .hljs-keyword,\n.diablo .hljs-function,\n.diablo .hljs-change,\n.diablo .hljs-winutils,\n.diablo .hljs-flow,\n.diablo .lisp .hljs-title,\n.diablo .clojure .hljs-built_in,\n.diablo .nginx .hljs-title,\n.diablo .tex .hljs-special,\n.diablo .hljs-header,\n.diablo .hljs-attribute,\n.diablo .hljs-symbol,\n.diablo .hljs-symbol .hljs-string,\n.diablo .hljs-tag .hljs-title,\n.diablo .hljs-value,\n.diablo .alias .hljs-keyword:first-child,\n.diablo .css .hljs-tag,\n.diablo .css .unit,\n.diablo .css .hljs-important {\n  color: #f92672;\n}\n.diablo .hljs-function .hljs-keyword,\n.diablo .hljs-class .hljs-keyword:first-child,\n.diablo .hljs-constant,\n.diablo .css .hljs-attribute {\n  color: #66d9ef;\n}\n.diablo .hljs-variable,\n.diablo .hljs-params,\n.diablo .hljs-class .hljs-title {\n  color: #f8f8f2;\n}\n.diablo .hljs-string,\n.diablo .css .hljs-id,\n.diablo .hljs-subst,\n.diablo .haskell .hljs-type,\n.diablo .ruby .hljs-class .hljs-parent,\n.diablo .hljs-built_in,\n.diablo .sql .hljs-aggregate,\n.diablo .django .hljs-template_tag,\n.diablo .django .hljs-variable,\n.diablo .smalltalk .hljs-class,\n.diablo .django .hljs-filter .hljs-argument,\n.diablo .smalltalk .hljs-localvars,\n.diablo .smalltalk .hljs-array,\n.diablo .hljs-attr_selector,\n.diablo .hljs-pseudo,\n.diablo .hljs-addition,\n.diablo .hljs-stream,\n.diablo .hljs-envvar,\n.diablo .apache .hljs-tag,\n.diablo .apache .hljs-cbracket,\n.diablo .tex .hljs-command,\n.diablo .hljs-prompt,\n.diablo .hljs-link_label,\n.diablo .hljs-link_url {\n  color: #e6db74;\n}\n.diablo .hljs-comment,\n.diablo .hljs-javadoc,\n.diablo .java .hljs-annotation,\n.diablo .python .hljs-decorator,\n.diablo .hljs-template_comment,\n.diablo .hljs-pi,\n.diablo .hljs-doctype,\n.diablo .hljs-deletion,\n.diablo .hljs-shebang,\n.diablo .apache .hljs-sqbracket,\n.diablo .tex .hljs-formula {\n  color: #75715e;\n}\n.diablo .coffeescript .javascript,\n.diablo .javascript .xml,\n.diablo .tex .hljs-formula,\n.diablo .xml .javascript,\n.diablo .xml .vbscript,\n.diablo .xml .css,\n.diablo .xml .hljs-cdata,\n.diablo .xml .php,\n.diablo .php .xml {\n  opacity: 0.5;\n}\n.diablo pre {\n  font-family: Arial;\n  background: #484848;\n  color: #f1f1f1;\n}\n.diablo pre .hljs-comment {\n  color: #9e9e9d;\n}\n.fresh .hljs {\n  display: block;\n  overflow-x: auto;\n  padding: 0.5em;\n  background: #333;\n  color: white;\n}\n.fresh .hljs-name,\n.fresh .hljs-strong {\n  font-weight: bold;\n}\n.fresh .hljs-code,\n.fresh .hljs-emphasis {\n  font-style: italic;\n}\n.fresh .hljs-tag {\n  color: #62c8f3;\n}\n.fresh .hljs-variable,\n.fresh .hljs-template-variable,\n.fresh .hljs-selector-id,\n.fresh .hljs-selector-class {\n  color: #ade5fc;\n}\n.fresh .hljs-string,\n.fresh .hljs-bullet {\n  color: #a2fca2;\n}\n.fresh .hljs-type,\n.fresh .hljs-title,\n.fresh .hljs-section,\n.fresh .hljs-attribute,\n.fresh .hljs-quote,\n.fresh .hljs-built_in,\n.fresh .hljs-builtin-name {\n  color: #ffa;\n}\n.fresh .hljs-number,\n.fresh .hljs-symbol,\n.fresh .hljs-bullet {\n  color: #d36363;\n}\n.fresh .hljs-keyword,\n.fresh .hljs-selector-tag,\n.fresh .hljs-literal {\n  color: #fcc28c;\n}\n.fresh .hljs-comment,\n.fresh .hljs-deletion,\n.fresh .hljs-code {\n  color: #888;\n}\n.fresh .hljs-regexp,\n.fresh .hljs-link {\n  color: #c6b4f0;\n}\n.fresh .hljs-meta {\n  color: #fc9b9b;\n}\n.fresh .hljs-deletion {\n  background-color: #fc9b9b;\n  color: #333;\n}\n.fresh .hljs-addition {\n  background-color: #a2fca2;\n  color: #333;\n}\n.fresh .hljs a {\n  color: inherit;\n}\n.fresh .hljs a:focus,\n.fresh .hljs a:hover {\n  color: inherit;\n  text-decoration: underline;\n}\n.fresh pre {\n  background: #fbfbfb;\n  color: #5a5a5a;\n}\n.fresh pre .hljs-attribute {\n  color: #2196F3;\n}\n.fresh pre .hljs-built_in {\n  color: #4caf50;\n}\n.fresh pre .hljs-comment {\n  color: #b7b7b7;\n}\n.fresh pre .hljs-string {\n  color: #2196f3;\n}\n.fresh pre .hljs-title {\n  color: #FF5722;\n}\n.testBox {\n  color: #464646;\n}\n.testBox .hljs-name {\n  color: #8bc34a;\n}\n.testBox .hljs-comment {\n  color: #969694;\n}\n.testBox img {\n  max-width: 630px;\n  margin: 0 auto;\n  border: 1px solid #ddd;\n}\n.testBox a {\n  color: #555;\n  text-decoration: none;\n  border-bottom: 1px solid #999;\n  word-wrap: break-word;\n}\n.testBox a:hover {\n  color: #807e7e;\n}\n.testBox pre {\n  margin: 0 6px;\n  padding: 10px;\n  border-radius: 3px;\n  overflow: scroll;\n  line-height: 22px;\n  font-size: 14px;\n}\n.testBox table {\n  border-spacing: 0;\n  vertical-align: middle;\n  text-align: center;\n  margin: 15px auto;\n  font-size: 15px;\n}\n.testBox table th {\n  padding: 5px;\n  font-weight: 700;\n  border: 1px solid #ddd;\n}\n.testBox table td {\n  padding: 5px;\n  border: 1px solid #ddd;\n  border-top-width: 0;\n}\n.testBox p {\n  line-height: 24px;\n  font-size: 15px;\n}\n.testBox p img {\n  display: block;\n  margin: 18px auto;\n}\n.testBox li {\n  font-size: 14px;\n  line-height: 26px;\n}\n.testBox li img {\n  display: block;\n  margin: 0 auto;\n}\n.testBox strong {\n  color: #191919;\n  font-size: 16px;\n}\n.testBox h1 {\n  font-size: 22px;\n}\n.testBox h2 {\n  font-size: 20px;\n}\n.testBox h3 {\n  font-size: 18px;\n}\n.testBox h4 {\n  font-size: 16px;\n}\n.testBox h5 {\n  font-size: 14px;\n}\n.testBox h6 {\n  font-size: 12px;\n}\n", ""]);

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

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

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
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

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
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
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
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
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


/***/ })
/******/ ]);