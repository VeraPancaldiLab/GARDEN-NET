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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/Viewer/Cytoscape.css":
/*!***********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/Viewer/Cytoscape.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".cytoscape_container {\\n  min-height: calc(86vh - 170px);\\n  width: 100%;\\n}\\n\\n.spinner {\\n  border: 16px solid #AAAAAA;\\n  border-top: 16px solid #5C5C5C;\\n  border-radius: 50%;\\n  position: relative;\\n  left: 40%;\\n  width: 100px;\\n  height: 100px;\\n  animation: spin 2s linear infinite;\\n}\\n\\n@keyframes spin {\\n  0% { transform: rotate(0deg); }\\n  100% { transform: rotate(360deg); }\\n}\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./src/components/Viewer/Cytoscape.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return '@media ' + item[2] + '{' + content + '}';\n      } else {\n        return content;\n      }\n    }).join('');\n  }; // import a list of modules into the list\n\n\n  list.i = function (modules, mediaQuery) {\n    if (typeof modules === 'string') {\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    for (var i = 0; i < this.length; i++) {\n      var id = this[i][0];\n\n      if (id != null) {\n        alreadyImportedModules[id] = true;\n      }\n    }\n\n    for (i = 0; i < modules.length; i++) {\n      var item = modules[i]; // skip already imported module\n      // this implementation is not 100% perfect for weird media query combinations\n      // when a module is imported multiple times with different media queries.\n      // I hope this will never occur (Hey this way we have smaller bundles)\n\n      if (item[0] == null || !alreadyImportedModules[item[0]]) {\n        if (mediaQuery && !item[2]) {\n          item[2] = mediaQuery;\n        } else if (mediaQuery) {\n          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';\n        }\n\n        list.push(item);\n      }\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || '';\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;\n  return '/*# ' + data + ' */';\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n\nvar stylesInDom = {};\n\nvar\tmemoize = function (fn) {\n\tvar memo;\n\n\treturn function () {\n\t\tif (typeof memo === \"undefined\") memo = fn.apply(this, arguments);\n\t\treturn memo;\n\t};\n};\n\nvar isOldIE = memoize(function () {\n\t// Test for IE <= 9 as proposed by Browserhacks\n\t// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n\t// Tests for existence of standard globals is to allow style-loader\n\t// to operate correctly into non-standard environments\n\t// @see https://github.com/webpack-contrib/style-loader/issues/177\n\treturn window && document && document.all && !window.atob;\n});\n\nvar getTarget = function (target, parent) {\n  if (parent){\n    return parent.querySelector(target);\n  }\n  return document.querySelector(target);\n};\n\nvar getElement = (function (fn) {\n\tvar memo = {};\n\n\treturn function(target, parent) {\n                // If passing function in options, then use it for resolve \"head\" element.\n                // Useful for Shadow Root style i.e\n                // {\n                //   insertInto: function () { return document.querySelector(\"#foo\").shadowRoot }\n                // }\n                if (typeof target === 'function') {\n                        return target();\n                }\n                if (typeof memo[target] === \"undefined\") {\n\t\t\tvar styleTarget = getTarget.call(this, target, parent);\n\t\t\t// Special case to return head of iframe instead of iframe itself\n\t\t\tif (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n\t\t\t\ttry {\n\t\t\t\t\t// This will throw an exception if access to iframe is blocked\n\t\t\t\t\t// due to cross-origin restrictions\n\t\t\t\t\tstyleTarget = styleTarget.contentDocument.head;\n\t\t\t\t} catch(e) {\n\t\t\t\t\tstyleTarget = null;\n\t\t\t\t}\n\t\t\t}\n\t\t\tmemo[target] = styleTarget;\n\t\t}\n\t\treturn memo[target]\n\t};\n})();\n\nvar singleton = null;\nvar\tsingletonCounter = 0;\nvar\tstylesInsertedAtTop = [];\n\nvar\tfixUrls = __webpack_require__(/*! ./urls */ \"./node_modules/style-loader/lib/urls.js\");\n\nmodule.exports = function(list, options) {\n\tif (typeof DEBUG !== \"undefined\" && DEBUG) {\n\t\tif (typeof document !== \"object\") throw new Error(\"The style-loader cannot be used in a non-browser environment\");\n\t}\n\n\toptions = options || {};\n\n\toptions.attrs = typeof options.attrs === \"object\" ? options.attrs : {};\n\n\t// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n\t// tags it will allow on a page\n\tif (!options.singleton && typeof options.singleton !== \"boolean\") options.singleton = isOldIE();\n\n\t// By default, add <style> tags to the <head> element\n        if (!options.insertInto) options.insertInto = \"head\";\n\n\t// By default, add <style> tags to the bottom of the target\n\tif (!options.insertAt) options.insertAt = \"bottom\";\n\n\tvar styles = listToStyles(list, options);\n\n\taddStylesToDom(styles, options);\n\n\treturn function update (newList) {\n\t\tvar mayRemove = [];\n\n\t\tfor (var i = 0; i < styles.length; i++) {\n\t\t\tvar item = styles[i];\n\t\t\tvar domStyle = stylesInDom[item.id];\n\n\t\t\tdomStyle.refs--;\n\t\t\tmayRemove.push(domStyle);\n\t\t}\n\n\t\tif(newList) {\n\t\t\tvar newStyles = listToStyles(newList, options);\n\t\t\taddStylesToDom(newStyles, options);\n\t\t}\n\n\t\tfor (var i = 0; i < mayRemove.length; i++) {\n\t\t\tvar domStyle = mayRemove[i];\n\n\t\t\tif(domStyle.refs === 0) {\n\t\t\t\tfor (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();\n\n\t\t\t\tdelete stylesInDom[domStyle.id];\n\t\t\t}\n\t\t}\n\t};\n};\n\nfunction addStylesToDom (styles, options) {\n\tfor (var i = 0; i < styles.length; i++) {\n\t\tvar item = styles[i];\n\t\tvar domStyle = stylesInDom[item.id];\n\n\t\tif(domStyle) {\n\t\t\tdomStyle.refs++;\n\n\t\t\tfor(var j = 0; j < domStyle.parts.length; j++) {\n\t\t\t\tdomStyle.parts[j](item.parts[j]);\n\t\t\t}\n\n\t\t\tfor(; j < item.parts.length; j++) {\n\t\t\t\tdomStyle.parts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\t\t} else {\n\t\t\tvar parts = [];\n\n\t\t\tfor(var j = 0; j < item.parts.length; j++) {\n\t\t\t\tparts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\n\t\t\tstylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};\n\t\t}\n\t}\n}\n\nfunction listToStyles (list, options) {\n\tvar styles = [];\n\tvar newStyles = {};\n\n\tfor (var i = 0; i < list.length; i++) {\n\t\tvar item = list[i];\n\t\tvar id = options.base ? item[0] + options.base : item[0];\n\t\tvar css = item[1];\n\t\tvar media = item[2];\n\t\tvar sourceMap = item[3];\n\t\tvar part = {css: css, media: media, sourceMap: sourceMap};\n\n\t\tif(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});\n\t\telse newStyles[id].parts.push(part);\n\t}\n\n\treturn styles;\n}\n\nfunction insertStyleElement (options, style) {\n\tvar target = getElement(options.insertInto)\n\n\tif (!target) {\n\t\tthrow new Error(\"Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.\");\n\t}\n\n\tvar lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];\n\n\tif (options.insertAt === \"top\") {\n\t\tif (!lastStyleElementInsertedAtTop) {\n\t\t\ttarget.insertBefore(style, target.firstChild);\n\t\t} else if (lastStyleElementInsertedAtTop.nextSibling) {\n\t\t\ttarget.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);\n\t\t} else {\n\t\t\ttarget.appendChild(style);\n\t\t}\n\t\tstylesInsertedAtTop.push(style);\n\t} else if (options.insertAt === \"bottom\") {\n\t\ttarget.appendChild(style);\n\t} else if (typeof options.insertAt === \"object\" && options.insertAt.before) {\n\t\tvar nextSibling = getElement(options.insertAt.before, target);\n\t\ttarget.insertBefore(style, nextSibling);\n\t} else {\n\t\tthrow new Error(\"[Style Loader]\\n\\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\\n Must be 'top', 'bottom', or Object.\\n (https://github.com/webpack-contrib/style-loader#insertat)\\n\");\n\t}\n}\n\nfunction removeStyleElement (style) {\n\tif (style.parentNode === null) return false;\n\tstyle.parentNode.removeChild(style);\n\n\tvar idx = stylesInsertedAtTop.indexOf(style);\n\tif(idx >= 0) {\n\t\tstylesInsertedAtTop.splice(idx, 1);\n\t}\n}\n\nfunction createStyleElement (options) {\n\tvar style = document.createElement(\"style\");\n\n\tif(options.attrs.type === undefined) {\n\t\toptions.attrs.type = \"text/css\";\n\t}\n\n\tif(options.attrs.nonce === undefined) {\n\t\tvar nonce = getNonce();\n\t\tif (nonce) {\n\t\t\toptions.attrs.nonce = nonce;\n\t\t}\n\t}\n\n\taddAttrs(style, options.attrs);\n\tinsertStyleElement(options, style);\n\n\treturn style;\n}\n\nfunction createLinkElement (options) {\n\tvar link = document.createElement(\"link\");\n\n\tif(options.attrs.type === undefined) {\n\t\toptions.attrs.type = \"text/css\";\n\t}\n\toptions.attrs.rel = \"stylesheet\";\n\n\taddAttrs(link, options.attrs);\n\tinsertStyleElement(options, link);\n\n\treturn link;\n}\n\nfunction addAttrs (el, attrs) {\n\tObject.keys(attrs).forEach(function (key) {\n\t\tel.setAttribute(key, attrs[key]);\n\t});\n}\n\nfunction getNonce() {\n\tif (false) {}\n\n\treturn __webpack_require__.nc;\n}\n\nfunction addStyle (obj, options) {\n\tvar style, update, remove, result;\n\n\t// If a transform function was defined, run it on the css\n\tif (options.transform && obj.css) {\n\t    result = typeof options.transform === 'function'\n\t\t ? options.transform(obj.css) \n\t\t : options.transform.default(obj.css);\n\n\t    if (result) {\n\t    \t// If transform returns a value, use that instead of the original css.\n\t    \t// This allows running runtime transformations on the css.\n\t    \tobj.css = result;\n\t    } else {\n\t    \t// If the transform function returns a falsy value, don't add this css.\n\t    \t// This allows conditional loading of css\n\t    \treturn function() {\n\t    \t\t// noop\n\t    \t};\n\t    }\n\t}\n\n\tif (options.singleton) {\n\t\tvar styleIndex = singletonCounter++;\n\n\t\tstyle = singleton || (singleton = createStyleElement(options));\n\n\t\tupdate = applyToSingletonTag.bind(null, style, styleIndex, false);\n\t\tremove = applyToSingletonTag.bind(null, style, styleIndex, true);\n\n\t} else if (\n\t\tobj.sourceMap &&\n\t\ttypeof URL === \"function\" &&\n\t\ttypeof URL.createObjectURL === \"function\" &&\n\t\ttypeof URL.revokeObjectURL === \"function\" &&\n\t\ttypeof Blob === \"function\" &&\n\t\ttypeof btoa === \"function\"\n\t) {\n\t\tstyle = createLinkElement(options);\n\t\tupdate = updateLink.bind(null, style, options);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\n\t\t\tif(style.href) URL.revokeObjectURL(style.href);\n\t\t};\n\t} else {\n\t\tstyle = createStyleElement(options);\n\t\tupdate = applyToTag.bind(null, style);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\t\t};\n\t}\n\n\tupdate(obj);\n\n\treturn function updateStyle (newObj) {\n\t\tif (newObj) {\n\t\t\tif (\n\t\t\t\tnewObj.css === obj.css &&\n\t\t\t\tnewObj.media === obj.media &&\n\t\t\t\tnewObj.sourceMap === obj.sourceMap\n\t\t\t) {\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\tupdate(obj = newObj);\n\t\t} else {\n\t\t\tremove();\n\t\t}\n\t};\n}\n\nvar replaceText = (function () {\n\tvar textStore = [];\n\n\treturn function (index, replacement) {\n\t\ttextStore[index] = replacement;\n\n\t\treturn textStore.filter(Boolean).join('\\n');\n\t};\n})();\n\nfunction applyToSingletonTag (style, index, remove, obj) {\n\tvar css = remove ? \"\" : obj.css;\n\n\tif (style.styleSheet) {\n\t\tstyle.styleSheet.cssText = replaceText(index, css);\n\t} else {\n\t\tvar cssNode = document.createTextNode(css);\n\t\tvar childNodes = style.childNodes;\n\n\t\tif (childNodes[index]) style.removeChild(childNodes[index]);\n\n\t\tif (childNodes.length) {\n\t\t\tstyle.insertBefore(cssNode, childNodes[index]);\n\t\t} else {\n\t\t\tstyle.appendChild(cssNode);\n\t\t}\n\t}\n}\n\nfunction applyToTag (style, obj) {\n\tvar css = obj.css;\n\tvar media = obj.media;\n\n\tif(media) {\n\t\tstyle.setAttribute(\"media\", media)\n\t}\n\n\tif(style.styleSheet) {\n\t\tstyle.styleSheet.cssText = css;\n\t} else {\n\t\twhile(style.firstChild) {\n\t\t\tstyle.removeChild(style.firstChild);\n\t\t}\n\n\t\tstyle.appendChild(document.createTextNode(css));\n\t}\n}\n\nfunction updateLink (link, options, obj) {\n\tvar css = obj.css;\n\tvar sourceMap = obj.sourceMap;\n\n\t/*\n\t\tIf convertToAbsoluteUrls isn't defined, but sourcemaps are enabled\n\t\tand there is no publicPath defined then lets turn convertToAbsoluteUrls\n\t\ton by default.  Otherwise default to the convertToAbsoluteUrls option\n\t\tdirectly\n\t*/\n\tvar autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;\n\n\tif (options.convertToAbsoluteUrls || autoFixUrls) {\n\t\tcss = fixUrls(css);\n\t}\n\n\tif (sourceMap) {\n\t\t// http://stackoverflow.com/a/26603875\n\t\tcss += \"\\n/*# sourceMappingURL=data:application/json;base64,\" + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + \" */\";\n\t}\n\n\tvar blob = new Blob([css], { type: \"text/css\" });\n\n\tvar oldSrc = link.href;\n\n\tlink.href = URL.createObjectURL(blob);\n\n\tif(oldSrc) URL.revokeObjectURL(oldSrc);\n}\n\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/addStyles.js?");

/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n/**\n * When source maps are enabled, `style-loader` uses a link element with a data-uri to\n * embed the css on the page. This breaks all relative urls because now they are relative to a\n * bundle instead of the current page.\n *\n * One solution is to only use full urls, but that may be impossible.\n *\n * Instead, this function \"fixes\" the relative urls to be absolute according to the current page location.\n *\n * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.\n *\n */\n\nmodule.exports = function (css) {\n  // get current location\n  var location = typeof window !== \"undefined\" && window.location;\n\n  if (!location) {\n    throw new Error(\"fixUrls requires window.location\");\n  }\n\n\t// blank or null?\n\tif (!css || typeof css !== \"string\") {\n\t  return css;\n  }\n\n  var baseUrl = location.protocol + \"//\" + location.host;\n  var currentDir = baseUrl + location.pathname.replace(/\\/[^\\/]*$/, \"/\");\n\n\t// convert each url(...)\n\t/*\n\tThis regular expression is just a way to recursively match brackets within\n\ta string.\n\n\t /url\\s*\\(  = Match on the word \"url\" with any whitespace after it and then a parens\n\t   (  = Start a capturing group\n\t     (?:  = Start a non-capturing group\n\t         [^)(]  = Match anything that isn't a parentheses\n\t         |  = OR\n\t         \\(  = Match a start parentheses\n\t             (?:  = Start another non-capturing groups\n\t                 [^)(]+  = Match anything that isn't a parentheses\n\t                 |  = OR\n\t                 \\(  = Match a start parentheses\n\t                     [^)(]*  = Match anything that isn't a parentheses\n\t                 \\)  = Match a end parentheses\n\t             )  = End Group\n              *\\) = Match anything and then a close parens\n          )  = Close non-capturing group\n          *  = Match anything\n       )  = Close capturing group\n\t \\)  = Match a close parens\n\n\t /gi  = Get all matches, not the first.  Be case insensitive.\n\t */\n\tvar fixedCss = css.replace(/url\\s*\\(((?:[^)(]|\\((?:[^)(]+|\\([^)(]*\\))*\\))*)\\)/gi, function(fullMatch, origUrl) {\n\t\t// strip quotes (if they exist)\n\t\tvar unquotedOrigUrl = origUrl\n\t\t\t.trim()\n\t\t\t.replace(/^\"(.*)\"$/, function(o, $1){ return $1; })\n\t\t\t.replace(/^'(.*)'$/, function(o, $1){ return $1; });\n\n\t\t// already a full url? no change\n\t\tif (/^(#|data:|http:\\/\\/|https:\\/\\/|file:\\/\\/\\/|\\s*$)/i.test(unquotedOrigUrl)) {\n\t\t  return fullMatch;\n\t\t}\n\n\t\t// convert the url to a full url\n\t\tvar newUrl;\n\n\t\tif (unquotedOrigUrl.indexOf(\"//\") === 0) {\n\t\t  \t//TODO: should we add protocol?\n\t\t\tnewUrl = unquotedOrigUrl;\n\t\t} else if (unquotedOrigUrl.indexOf(\"/\") === 0) {\n\t\t\t// path should be relative to the base url\n\t\t\tnewUrl = baseUrl + unquotedOrigUrl; // already starts with '/'\n\t\t} else {\n\t\t\t// path should be relative to current directory\n\t\t\tnewUrl = currentDir + unquotedOrigUrl.replace(/^\\.\\//, \"\"); // Strip leading './'\n\t\t}\n\n\t\t// send back the fixed url(...)\n\t\treturn \"url(\" + JSON.stringify(newUrl) + \")\";\n\t});\n\n\t// send back the fixed css\n\treturn fixedCss;\n};\n\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/urls.js?");

/***/ }),

/***/ "./src/actions/cell_type_action.ts":
/*!*****************************************!*\
  !*** ./src/actions/cell_type_action.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.CHANGED_CELL_TYPE = \"CHANGED_CELL_TYPE\";\nexports.change_cell_type = (cell_type) => ({\n    type: exports.CHANGED_CELL_TYPE,\n    cell_type,\n});\n\n\n//# sourceURL=webpack:///./src/actions/cell_type_action.ts?");

/***/ }),

/***/ "./src/actions/chromosomes_action.ts":
/*!*******************************************!*\
  !*** ./src/actions/chromosomes_action.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.CHANGED_CHROMOSOME = \"CHANGED_CHROMOSOME\";\nexports.change_chromosome = (chromosome) => ({\n    type: exports.CHANGED_CHROMOSOME,\n    chromosome,\n});\n\n\n//# sourceURL=webpack:///./src/actions/chromosomes_action.ts?");

/***/ }),

/***/ "./src/actions/download_action.ts":
/*!****************************************!*\
  !*** ./src/actions/download_action.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.CHANGED_DOWNLOAD = \"CHANGED_DOWNLOAD\";\nexports.change_download = (download) => ({\n    type: exports.CHANGED_DOWNLOAD,\n    download,\n});\n\n\n//# sourceURL=webpack:///./src/actions/download_action.ts?");

/***/ }),

/***/ "./src/actions/features_action.ts":
/*!****************************************!*\
  !*** ./src/actions/features_action.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.CHANGED_FEATURE = \"CHANGED_FEATURE\";\nexports.change_feature = (feature) => ({\n    type: exports.CHANGED_FEATURE,\n    feature,\n});\n\n\n//# sourceURL=webpack:///./src/actions/features_action.ts?");

/***/ }),

/***/ "./src/actions/index.ts":
/*!******************************!*\
  !*** ./src/actions/index.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst cell_type_action_1 = __webpack_require__(/*! ./cell_type_action */ \"./src/actions/cell_type_action.ts\");\nexports.change_cell_type = cell_type_action_1.change_cell_type;\nexports.CHANGED_CELL_TYPE = cell_type_action_1.CHANGED_CELL_TYPE;\nconst chromosomes_action_1 = __webpack_require__(/*! ./chromosomes_action */ \"./src/actions/chromosomes_action.ts\");\nexports.change_chromosome = chromosomes_action_1.change_chromosome;\nexports.CHANGED_CHROMOSOME = chromosomes_action_1.CHANGED_CHROMOSOME;\nconst download_action_1 = __webpack_require__(/*! ./download_action */ \"./src/actions/download_action.ts\");\nexports.change_download = download_action_1.change_download;\nexports.CHANGED_DOWNLOAD = download_action_1.CHANGED_DOWNLOAD;\nconst features_action_1 = __webpack_require__(/*! ./features_action */ \"./src/actions/features_action.ts\");\nexports.change_feature = features_action_1.change_feature;\nexports.CHANGED_FEATURE = features_action_1.CHANGED_FEATURE;\nconst organism_action_1 = __webpack_require__(/*! ./organism_action */ \"./src/actions/organism_action.ts\");\nexports.change_organism = organism_action_1.change_organism;\nexports.CHANGED_ORGANISM = organism_action_1.CHANGED_ORGANISM;\nconst search_action_1 = __webpack_require__(/*! ./search_action */ \"./src/actions/search_action.ts\");\nexports.change_search = search_action_1.change_search;\nexports.CHANGED_SEARCH = search_action_1.CHANGED_SEARCH;\nconst text_action_1 = __webpack_require__(/*! ./text_action */ \"./src/actions/text_action.ts\");\nexports.change_text = text_action_1.change_text;\nexports.CHANGED_TEXT = text_action_1.CHANGED_TEXT;\n\n\n//# sourceURL=webpack:///./src/actions/index.ts?");

/***/ }),

/***/ "./src/actions/organism_action.ts":
/*!****************************************!*\
  !*** ./src/actions/organism_action.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.CHANGED_ORGANISM = \"CHANGED_ORGANISM\";\nexports.change_organism = (organism) => ({\n    type: exports.CHANGED_ORGANISM,\n    organism,\n});\n\n\n//# sourceURL=webpack:///./src/actions/organism_action.ts?");

/***/ }),

/***/ "./src/actions/search_action.ts":
/*!**************************************!*\
  !*** ./src/actions/search_action.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.CHANGED_SEARCH = \"CHANGED_SEARCH\";\nexports.change_search = (search) => ({\n    type: exports.CHANGED_SEARCH,\n    search,\n});\n\n\n//# sourceURL=webpack:///./src/actions/search_action.ts?");

/***/ }),

/***/ "./src/actions/text_action.ts":
/*!************************************!*\
  !*** ./src/actions/text_action.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.CHANGED_TEXT = \"CHANGED_TEXT\";\nexports.change_text = (text) => ({\n    type: exports.CHANGED_TEXT,\n    text,\n});\n\n\n//# sourceURL=webpack:///./src/actions/text_action.ts?");

/***/ }),

/***/ "./src/components/Frontend.tsx":
/*!*************************************!*\
  !*** ./src/components/Frontend.tsx ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst React = __webpack_require__(/*! react */ \"react\");\nconst Header_1 = __webpack_require__(/*! ./Header */ \"./src/components/Header.tsx\");\nconst Viewer_1 = __webpack_require__(/*! ./Viewer/Viewer */ \"./src/components/Viewer/Viewer.tsx\");\nclass Frontend extends React.Component {\n    constructor() {\n        super(...arguments);\n        this.componentDidMount = () => {\n            this.onOrganismChange(this.props.match.params.organism);\n            this.onCellTypeChange(this.props.match.params.cell_type);\n        };\n        this.onOrganismChange = (organism) => {\n            this.props.onOrganismChange(organism);\n        };\n        this.onCellTypeChange = (cell_type) => {\n            this.props.onCellTypeChange(cell_type);\n        };\n    }\n    render() {\n        return (React.createElement(\"div\", null,\n            React.createElement(Header_1.Header, null),\n            React.createElement(Viewer_1.Viewer, null)));\n    }\n}\nexports.Frontend = Frontend;\n\n\n//# sourceURL=webpack:///./src/components/Frontend.tsx?");

/***/ }),

/***/ "./src/components/Header.tsx":
/*!***********************************!*\
  !*** ./src/components/Header.tsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst React = __webpack_require__(/*! react */ \"react\");\nconst Reactstrap = __webpack_require__(/*! reactstrap */ \"reactstrap\");\nconst SearchPanelContainer_1 = __webpack_require__(/*! ./../containers/SearchPanelContainer */ \"./src/containers/SearchPanelContainer.ts\");\nclass Header extends React.Component {\n    render() {\n        return (React.createElement(\"div\", { className: \"container\" },\n            React.createElement(\"div\", { className: \"row\" },\n                React.createElement(\"div\", { className: \"col\" },\n                    React.createElement(\"h1\", { className: \"text-center\" },\n                        React.createElement(\"a\", { href: \"https://github.com/VeraPancaldiLab/GARDEN-NET\" }, \"GARDEN-NET\")))),\n            React.createElement(\"div\", { className: \"row\" },\n                React.createElement(\"div\", { className: \"col\" }),\n                React.createElement(\"div\", { className: \"col\" },\n                    React.createElement(Reactstrap.Alert, { color: \"primary\", className: \"text-center\" }, \"Still in development!\")),\n                React.createElement(\"div\", { className: \"col\" })),\n            React.createElement(\"div\", { className: \"row\" },\n                React.createElement(\"div\", { className: \"col\" }),\n                React.createElement(\"div\", { className: \"col\" },\n                    React.createElement(SearchPanelContainer_1.SearchPanelContainer, null)),\n                React.createElement(\"div\", { className: \"col\" }))));\n    }\n}\nexports.Header = Header;\n\n\n//# sourceURL=webpack:///./src/components/Header.tsx?");

/***/ }),

/***/ "./src/components/Portal.tsx":
/*!***********************************!*\
  !*** ./src/components/Portal.tsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst React = __webpack_require__(/*! react */ \"react\");\nconst react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\nconst FrontendContainer_1 = __webpack_require__(/*! ./../containers/FrontendContainer */ \"./src/containers/FrontendContainer.ts\");\nconst PortalMenu_1 = __webpack_require__(/*! ./PortalMenu */ \"./src/components/PortalMenu.tsx\");\nexports.Portal = () => (React.createElement(react_router_dom_1.HashRouter, null,\n    React.createElement(\"div\", null,\n        React.createElement(react_router_dom_1.Route, { exact: true, path: \"/\", component: PortalMenu_1.PortalMenu }),\n        React.createElement(react_router_dom_1.Route, { exact: true, path: \"/Visualization/:organism/:cell_type\", component: FrontendContainer_1.FrontendContainer }))));\n\n\n//# sourceURL=webpack:///./src/components/Portal.tsx?");

/***/ }),

/***/ "./src/components/PortalMenu.tsx":
/*!***************************************!*\
  !*** ./src/components/PortalMenu.tsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst React = __webpack_require__(/*! react */ \"react\");\nconst react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\nexports.PortalMenu = () => (React.createElement(\"div\", null,\n    React.createElement(react_router_dom_1.Link, { replace: true, to: \"/\" }, \"Portal\"),\n    React.createElement(react_router_dom_1.Link, { target: \"_blank\", to: \"/Visualization/homo/mon\" }, \"Frontend\")));\n\n\n//# sourceURL=webpack:///./src/components/PortalMenu.tsx?");

/***/ }),

/***/ "./src/components/SearchPanel.tsx":
/*!****************************************!*\
  !*** ./src/components/SearchPanel.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst React = __webpack_require__(/*! react */ \"react\");\nconst reactstrap_1 = __webpack_require__(/*! reactstrap */ \"reactstrap\");\nclass SearchPanel extends React.Component {\n    constructor(props) {\n        super(props);\n        this.BASE_URL = \"http://localhost:8080/data/suggestions/\";\n        this.componentDidMount = () => {\n            this.fetchAsyncJson(this.BASE_URL + \"suggestions.json\").then((json) => {\n                this.suggestions = json;\n            });\n        };\n        this.onInputChange = (e) => {\n            const input_text = e.target.value;\n            if (input_text.length !== 0) {\n                this.setState({ filtered_suggestions: this.suggestions.filter((suggestion) => suggestion.toLowerCase().startsWith(input_text.toLowerCase())) });\n            }\n            this.props.onTextChange(e.target.value);\n        };\n        this.onSubmit = () => {\n            this.props.onSearchChange(this.props.text);\n            this.props.onTextChange(\"\");\n        };\n        this.handleEnterKey = (e) => {\n            if (e.key === \"Enter\") {\n                e.preventDefault();\n                this.onSubmit();\n            }\n        };\n        this.onSuggestChange = (event) => {\n            const suggestion_selected = event.target.innerText;\n            this.props.onTextChange(suggestion_selected);\n            this.props.onSearchChange(suggestion_selected);\n            this.props.onTextChange(\"\");\n        };\n        this.suggestions = [];\n        this.state = { filtered_suggestions: [] };\n    }\n    fetchAsyncJson(url) {\n        return __awaiter(this, void 0, void 0, function* () {\n            // Warning: The network file has to be serve before by a http server\n            // http-server is provided to help to the development thanks to `yarn serve` command\n            // In this case, the port used to serve is the 8080\n            return fetch(url).then((response) => {\n                const json = response.json();\n                return json;\n            }).catch((_err) => {\n                setTimeout(() => {\n                    alert(\"There are not any suggestions to be downloaded\");\n                }, 0);\n            });\n        });\n    }\n    boldText(word, length) {\n        return React.createElement(\"span\", null,\n            React.createElement(\"b\", null, word.slice(0, length)),\n            word.slice(length));\n    }\n    render() {\n        return (React.createElement(reactstrap_1.Form, { className: \"text-center\" },\n            React.createElement(reactstrap_1.FormGroup, null,\n                React.createElement(reactstrap_1.Label, { for: \"searcher\" }, \"Search\"),\n                React.createElement(reactstrap_1.Input, { className: \"text-center\", value: this.props.text, type: \"text\", name: \"Search\", placeholder: \"Hoxa1 6:52155590 6:52155590-52158317\", onChange: this.onInputChange, onKeyPress: this.handleEnterKey }),\n                React.createElement(reactstrap_1.ListGroup, { className: \"text-center container-fluid\", style: { height: \"auto\", maxHeight: \"110px\", overflowX: \"hidden\", padding: \"0px\", display: ((this.props.text.length !== 0 && this.state.filtered_suggestions.length !== 0) ? \"block\" : \"none\") } }, this.state.filtered_suggestions.map((suggestion) => React.createElement(reactstrap_1.ListGroupItem, { key: suggestion, value: suggestion, onClick: this.onSuggestChange, style: { padding: \"0px\", cursor: \"pointer\" } }, this.boldText(suggestion, this.props.text.length))))),\n            React.createElement(reactstrap_1.Button, { disabled: this.props.text == \"\", style: { marginBottom: \"15px\" }, onClick: this.onSubmit }, \"Submit\")));\n    }\n}\nexports.SearchPanel = SearchPanel;\n\n\n//# sourceURL=webpack:///./src/components/SearchPanel.tsx?");

/***/ }),

/***/ "./src/components/Viewer/ControlPanel/ControlPanel.tsx":
/*!*************************************************************!*\
  !*** ./src/components/Viewer/ControlPanel/ControlPanel.tsx ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst React = __webpack_require__(/*! react */ \"react\");\nconst ChromosomesPanelContainer_1 = __webpack_require__(/*! ./../../../containers/ChromosomesPanelContainer */ \"./src/containers/ChromosomesPanelContainer.ts\");\nconst DownloadButtonContainer_1 = __webpack_require__(/*! ./../../../containers/DownloadButtonContainer */ \"./src/containers/DownloadButtonContainer.ts\");\nconst FeaturesPanelContainer_1 = __webpack_require__(/*! ./../../../containers/FeaturesPanelContainer */ \"./src/containers/FeaturesPanelContainer.ts\");\nclass ControlPanel extends React.Component {\n    render() {\n        return (React.createElement(\"div\", { className: \"container-fluid\" },\n            React.createElement(\"h3\", { className: \"text-center\", style: { visibility: \"hidden\" } }, \"Panel\"),\n            React.createElement(\"div\", { className: \"col\" },\n                React.createElement(ChromosomesPanelContainer_1.ChromosomesPanelContainer, null),\n                React.createElement(FeaturesPanelContainer_1.FeaturesPanelContainer, null),\n                React.createElement(DownloadButtonContainer_1.DownloadButtonContainer, null))));\n    }\n}\nexports.ControlPanel = ControlPanel;\n\n\n//# sourceURL=webpack:///./src/components/Viewer/ControlPanel/ControlPanel.tsx?");

/***/ }),

/***/ "./src/components/Viewer/ControlPanel/SubPanels/ChromosomesPanel.tsx":
/*!***************************************************************************!*\
  !*** ./src/components/Viewer/ControlPanel/SubPanels/ChromosomesPanel.tsx ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst React = __webpack_require__(/*! react */ \"react\");\nconst reactstrap_1 = __webpack_require__(/*! reactstrap */ \"reactstrap\");\nclass ChromosomesPanel extends React.Component {\n    constructor(props) {\n        super(props);\n        this.onChromosomeChange = (event) => {\n            const selector = event.target;\n            this.props.onChromosomeChange(selector.value);\n            this.props.onTextChange(\"\");\n        };\n        this.toggle = () => {\n            this.setState({\n                dropdownOpen: !this.state.dropdownOpen,\n            });\n        };\n        this.state = { dropdownOpen: false };\n    }\n    render() {\n        const margin_style = {\n            border: \"#aaa\",\n            borderRadius: \"5px\",\n            borderStyle: \"solid\",\n            borderWidth: \"2px\",\n            paddingLeft: \"5px\",\n            paddingRight: \"5px\",\n            marginBottom: \"15px\",\n        };\n        const chromosomes = [\"1\", \"2\", \"3\", \"4\", \"5\", \"6\", \"7\", \"8\", \"9\", \"10\", \"11\", \"12\", \"13\", \"14\", \"15\", \"16\", \"17\", \"18\", \"19\", \"X\", \"Y\"];\n        return (React.createElement(reactstrap_1.Form, { style: margin_style },\n            React.createElement(reactstrap_1.FormGroup, { className: \"text-center\" },\n                React.createElement(reactstrap_1.Label, { for: \"Select\" }, \"Chromosomes\"),\n                React.createElement(\"br\", null),\n                React.createElement(reactstrap_1.ButtonDropdown, { style: { display: \"grid\" }, isOpen: this.state.dropdownOpen, toggle: this.toggle },\n                    React.createElement(reactstrap_1.DropdownToggle, { caret: true }, this.props.chromosome),\n                    React.createElement(reactstrap_1.DropdownMenu, { className: \"text-center container-fluid\", style: { height: \"auto\", maxHeight: \"200px\", overflowX: \"hidden\" } },\n                        chromosomes.slice(0, -1).map((chromosome) => React.createElement(\"div\", { key: chromosome },\n                            React.createElement(reactstrap_1.DropdownItem, { value: chromosome, onClick: this.onChromosomeChange }, chromosome),\n                            React.createElement(reactstrap_1.DropdownItem, { style: { margin: 0 }, divider: true }))),\n                        chromosomes.slice(-1).map((chromosome) => React.createElement(reactstrap_1.DropdownItem, { key: chromosome, value: chromosome, onClick: this.onChromosomeChange }, chromosome)))))));\n    }\n}\nexports.ChromosomesPanel = ChromosomesPanel;\n\n\n//# sourceURL=webpack:///./src/components/Viewer/ControlPanel/SubPanels/ChromosomesPanel.tsx?");

/***/ }),

/***/ "./src/components/Viewer/ControlPanel/SubPanels/DownloadButton.tsx":
/*!*************************************************************************!*\
  !*** ./src/components/Viewer/ControlPanel/SubPanels/DownloadButton.tsx ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst React = __webpack_require__(/*! react */ \"react\");\nconst reactstrap_1 = __webpack_require__(/*! reactstrap */ \"reactstrap\");\nclass DownloadButton extends React.Component {\n    constructor() {\n        super(...arguments);\n        this.onDownload = () => {\n            fetch(this.props.download).then((response) => {\n                const json = response.json();\n                return json;\n            }).then((json) => {\n                // Create a hidden 'a' element; click it and remove it\n                const blob = new Blob([JSON.stringify(json, null, 2)], { type: \"application/json\" });\n                const hiddenElement = document.createElement(\"a\");\n                document.body.appendChild(hiddenElement);\n                hiddenElement.href = window.URL.createObjectURL(blob);\n                hiddenElement.setAttribute(\"download\", this.props.download.split(\"/\").pop());\n                hiddenElement.style.display = \"none\";\n                hiddenElement.click();\n                document.body.removeChild(hiddenElement);\n            });\n        };\n    }\n    render() {\n        const margin_style = {\n            border: \"#aaa\",\n            borderRadius: \"5px\",\n            borderStyle: \"solid\",\n            borderWidth: \"2px\",\n            marginTop: \"15px\",\n        };\n        return (React.createElement(\"div\", { className: \"text-center\" },\n            React.createElement(reactstrap_1.Button, { outline: true, color: \"secondary\", onClick: this.onDownload, style: margin_style }, \"Download\")));\n    }\n}\nexports.DownloadButton = DownloadButton;\n\n\n//# sourceURL=webpack:///./src/components/Viewer/ControlPanel/SubPanels/DownloadButton.tsx?");

/***/ }),

/***/ "./src/components/Viewer/ControlPanel/SubPanels/FeaturesPanel.tsx":
/*!************************************************************************!*\
  !*** ./src/components/Viewer/ControlPanel/SubPanels/FeaturesPanel.tsx ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst React = __webpack_require__(/*! react */ \"react\");\nconst reactstrap_1 = __webpack_require__(/*! reactstrap */ \"reactstrap\");\nclass FeaturesPanel extends React.Component {\n    constructor(props) {\n        super(props);\n        this.onFeatureChange = (event) => {\n            this.props.onFeatureChange(event.target.value);\n        };\n        this.toggle = () => {\n            this.setState({\n                dropdownOpen: !this.state.dropdownOpen,\n            });\n        };\n        this.state = { dropdownOpen: false };\n    }\n    render() {\n        const margin_style = {\n            border: \"#aaa\",\n            borderRadius: \"5px\",\n            borderStyle: \"solid\",\n            borderWidth: \"2px\",\n            paddingLeft: \"5px\",\n            paddingRight: \"5px\",\n            marginTop: \"15px\",\n        };\n        const features = [\"BRG1\", \"CBX3\", \"CBX7\", \"C_MYC\", \"CoREST\", \"E2F1\", \"ESRRB\", \"HCFC1\", \"HDAC1\", \"HDAC2\", \"KAP1\", \"KDM2A\", \"KDM2B\", \"KLF4\", \"LAMINB\", \"LSD1\", \"MAFK\", \"MAX\", \"MBD1A\", \"MBD1B\", \"MBD2A\", \"MBD2T\", \"MBD3A\", \"MBD4\", \"MECP2\", \"MED1\", \"MED12\", \"MI2B\", \"MLL2\", \"NANOG\", \"NIPBL\", \"N_MYC\", \"OCT4\", \"OGT\", \"P300\", \"PHF19\", \"POLII\", \"RAD21\", \"REST\", \"RING1B\", \"RNAPII.8WG16\", \"RNAPII.S2P\", \"RNAPII.S5P\", \"RNAPII.S7P\", \"RYBP\", \"SETDB1\", \"SIN3A\", \"SMAD1\", \"SMC1\", \"SMC3\", \"SOX2\", \"STAT3\", \"SUZ12\", \"TAF1\", \"TCF3\", \"TCFCP2I1\", \"TET1\", \"ZC3H11A\", \"ZNF384\", \"X5fC\", \"X5hmC\", \"X5mC\", \"CTCF\", \"H2AZ\", \"H2Aub1\", \"H3K27ac\", \"H3K27me3\", \"H3K36me2\", \"H3K36me3\", \"H3K4me1\", \"H3K4me2\", \"H3K4me3\", \"H3K79me2\", \"H3K9ac\", \"H3K9me3\", \"H4K20me3\", \"EZH2\", \"G9A\", \"Feature1\", \"Feature2\", \"Feature3\", \"Feature4\", \"Feature5\", \"V2\"].sort();\n        return (React.createElement(reactstrap_1.Form, { className: \"text-center\", style: margin_style },\n            React.createElement(reactstrap_1.FormGroup, { className: \"text-center\" },\n                React.createElement(reactstrap_1.Label, { for: \"Select\" }, \"Features\"),\n                React.createElement(\"br\", null),\n                React.createElement(reactstrap_1.ButtonDropdown, { style: { display: \"grid\" }, isOpen: this.state.dropdownOpen, toggle: this.toggle },\n                    React.createElement(reactstrap_1.DropdownToggle, { style: { color: \"black\", backgroundColor: \"white\" }, caret: true }, this.props.feature),\n                    React.createElement(reactstrap_1.DropdownMenu, { className: \"text-center container-fluid\", style: { height: \"auto\", maxHeight: \"200px\", overflowX: \"hidden\" } },\n                        features.slice(0, -1).map((feature) => React.createElement(\"div\", { key: feature },\n                            React.createElement(reactstrap_1.DropdownItem, { value: feature, onClick: this.onFeatureChange }, feature),\n                            React.createElement(reactstrap_1.DropdownItem, { style: { margin: 0 }, divider: true }))),\n                        features.slice(-1).map((feature) => React.createElement(\"div\", { key: feature },\n                            React.createElement(reactstrap_1.DropdownItem, { value: feature, onClick: this.onFeatureChange }, feature))))))));\n    }\n}\nexports.FeaturesPanel = FeaturesPanel;\n\n\n//# sourceURL=webpack:///./src/components/Viewer/ControlPanel/SubPanels/FeaturesPanel.tsx?");

/***/ }),

/***/ "./src/components/Viewer/Cytoscape.css":
/*!*********************************************!*\
  !*** ./src/components/Viewer/Cytoscape.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./Cytoscape.css */ \"./node_modules/css-loader/dist/cjs.js!./src/components/Viewer/Cytoscape.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/components/Viewer/Cytoscape.css?");

/***/ }),

/***/ "./src/components/Viewer/Cytoscape.tsx":
/*!*********************************************!*\
  !*** ./src/components/Viewer/Cytoscape.tsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst React = __webpack_require__(/*! react */ \"react\");\n__webpack_require__(/*! ./Cytoscape.css */ \"./src/components/Viewer/Cytoscape.css\");\nclass Cytoscape extends React.Component {\n    render() {\n        const margin_style = {\n            border: \"#aaa\",\n            borderRadius: \"5px\",\n            borderStyle: \"solid\",\n            borderWidth: \"2px\",\n        };\n        return (React.createElement(\"div\", { className: \"container-fluid\" },\n            React.createElement(\"div\", { className: \"cytoscape_container\", id: this.props.cytoscape_container_id, style: margin_style })));\n    }\n}\nexports.Cytoscape = Cytoscape;\n\n\n//# sourceURL=webpack:///./src/components/Viewer/Cytoscape.tsx?");

/***/ }),

/***/ "./src/components/Viewer/Cytoscape_manager.tsx":
/*!*****************************************************!*\
  !*** ./src/components/Viewer/Cytoscape_manager.tsx ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst cytoscape = __webpack_require__(/*! cytoscape */ \"cytoscape\");\nconst React = __webpack_require__(/*! react */ \"react\");\nconst reactstrap_1 = __webpack_require__(/*! reactstrap */ \"reactstrap\");\nconst CytoscapeContainer_1 = __webpack_require__(/*! ../../containers/CytoscapeContainer */ \"./src/containers/CytoscapeContainer.ts\");\nclass Cytoscape_manager extends React.Component {\n    constructor(props) {\n        super(props);\n        this.BASE_URL = \"http://localhost:8080/data/\";\n        this.cache = new Map();\n        this.URL = {\n            chromosome: this.BASE_URL + \"chromosomes/chr\",\n            search: \"http://127.0.0.1:5000/?features=true&search=\",\n        };\n        this.left_container_id = \"left_container_id\";\n        this.right_container_id = \"right_container_id\";\n        this.clean_right_view = true;\n        this.chromosome_color = { \"1\": \"#0000ff\", \"2\": \"#4906f4\", \"3\": \"#650eea\", \"4\": \"#7a16df\", \"5\": \"#8a1ed5\", \"6\": \"#9826ca\", \"7\": \"#a32dc0\", \"8\": \"#ae34b6\", \"9\": \"#b83bab\", \"10\": \"#c042a1\", \"11\": \"#c84996\", \"12\": \"#cf508c\", \"13\": \"#d55781\", \"14\": \"#dc5e76\", \"15\": \"#e1646b\", \"16\": \"#e76a60\", \"17\": \"#ed7153\", \"18\": \"#f27846\", \"19\": \"#f67f38\", \"X\": \"#fb8624\", \"Y\": \"#ff8c00\", \"MT\": \"#000000\" };\n        this.onDownloadChange = (download) => {\n            this.props.onDownloadChange(download);\n        };\n        this.checkNode = (node, search) => {\n            const node_id = node.data(\"chr\") + \"_\" + node.data(\"start\");\n            const search_id = search.split(\"-\")[0].replace(\":\", \"_\");\n            if (node.data(\"curated_gene_name\") === search || node_id.toLowerCase().startsWith(search_id.toLowerCase())) {\n                return node;\n            }\n            return null;\n        };\n        // if ('match' in this.props) {\n        //   console.log(this.props.match)\n        // if ('params' in this.props) {\n        //   console.log(this.props.match.params)\n        // }\n        // } else {\n        //   console.log('no url')\n        // }\n        this.reuse_message = false;\n        this.state = {\n            cytoscape_loading: true, loading_message: \"\",\n            left_network: undefined, right_network: undefined, left_title: \"\",\n            right_title: \"\", show_tooltip: false, tooltip_text: \"\",\n            tooltip_x: 0, tooltip_y: 0,\n        };\n    }\n    chromosomePath(chromosome) {\n        return this.URL.chromosome + chromosome + \".json\";\n    }\n    searchPath(search) {\n        return this.URL.search + search;\n    }\n    fetchAsyncJson(url) {\n        return __awaiter(this, void 0, void 0, function* () {\n            // Warning: The network file has to be serve before by a http server\n            // http-server is provided to help to the development thanks to `yarn serve` command\n            // In this case, the port used to serve is the 8080\n            return fetch(url).then((response) => {\n                const json = response.json();\n                return json;\n            }).catch((_err) => {\n                this.setState({ cytoscape_loading: false, right_title: \"\" });\n                if (this.props.search !== \"\") {\n                    this.cache.delete(this.props.search);\n                }\n                // Let the loading message disappear thanks to delay the alert message with a zero time out\n                setTimeout(() => {\n                    alert('There are not any node which matches with the search petition: \"' + this.props.search + '\"');\n                }, 0);\n            });\n        });\n    }\n    buildNetwork(cy_json_elements, cytoscape_container_id) {\n        const cy = cytoscape({\n            container: document.getElementById(cytoscape_container_id),\n            elements: cy_json_elements,\n            style: [\n                {\n                    selector: \"node\",\n                    style: {\n                        \"background-color\": \"mapData(\" + this.props.feature + \", 0, 1, #ccc, pink)\",\n                        \"label\": \"data(curated_gene_name)\",\n                        \"color\": \"black\",\n                        \"font-size\": 9.5,\n                        \"text-valign\": \"center\",\n                        \"text-halign\": \"center\",\n                        \"width\": 35,\n                        \"height\": 35,\n                        \"border-color\": (ele) => this.chromosome_color[ele.data(\"chr\")],\n                        \"border-width\": 3,\n                    },\n                },\n                {\n                    selector: 'node[type = \"bait\"]',\n                    style: {\n                        shape: \"ellipse\",\n                    },\n                },\n                {\n                    selector: 'node[type = \"oe\"]',\n                    style: {\n                        shape: \"rectangle\",\n                    },\n                },\n                {\n                    selector: \"edge\",\n                    style: {\n                        \"width\": 3,\n                        \"line-color\": \"#ccc\",\n                        \"target-arrow-color\": \"#ccc\",\n                        \"target-arrow-shape\": \"triangle\",\n                    },\n                },\n            ],\n            layout: {\n                name: \"preset\",\n                animate: false,\n                stop: () => {\n                    if (cy_json_elements !== undefined) {\n                        this.setState({ cytoscape_loading: false });\n                    }\n                },\n            },\n        });\n        cy.on(\"tap\", \"node\", (event) => {\n            const node = event.target;\n            const node_internal_id = node.data(\"chr\") + \"_\" + node.data(\"start\");\n            const node_real_id = node_internal_id + \"-\" + node.data(\"end\");\n            let message = \"Search \";\n            const node_name = node.data(\"curated_gene_name\");\n            if (node_name != \"\") {\n                message += node_name;\n                this.setState({ right_title: node_name });\n            }\n            else {\n                const node_message = node_real_id.replace(\"_\", \":\");\n                this.setState({ right_title: node_message });\n                message += \"by id \" + node_message;\n            }\n            this.reuse_message = true;\n            this.setState({ loading_message: message });\n            this.props.onSearchChange(node_internal_id);\n        });\n        cy.on(\"mouseover\", \"node\", (event) => {\n            const node = event.target;\n            const node_id = node.data(\"chr\") + \":\" + node.data(\"start\") + \"-\" + node.data(\"end\");\n            const x = event.originalEvent.clientX;\n            const y = event.originalEvent.clientY;\n            this.setState({ show_tooltip: true, tooltip_text: node_id, tooltip_x: x + 15, tooltip_y: y - 10 });\n        });\n        cy.on(\"mouseout\", \"node\", () => {\n            this.setState({ show_tooltip: false });\n        });\n        return cy;\n    }\n    componentDidMount() {\n        // Load first chromosome in left view\n        // Right view empty\n        setTimeout(() => {\n            const message = \"Chromosome \" + this.props.chromosome;\n            this.setState({ loading_message: message, left_title: message });\n            const url = this.chromosomePath(this.props.chromosome);\n            this.onDownloadChange(url);\n            this.clean_right_view = true;\n            const cy_json_elements = this.fetchAsyncJson(url);\n            this.left_cy_network = this.buildNetwork(cy_json_elements, this.left_container_id);\n            this.left_cy_network.on(\"layoutstop\", (event) => {\n                event.cy.style()\n                    .selector(\"node\")\n                    .style({\n                    width: (ele) => 20 + 1.5 * ele.data(\"total_degree\"),\n                    height: (ele) => 20 + 1.5 * ele.data(\"total_degree\"),\n                }).update();\n            });\n            this.cache.set(this.props.chromosome, this.left_cy_network);\n            this.right_cy_network = this.buildNetwork(undefined, this.right_container_id);\n        }, 500);\n    }\n    componentDidUpdate(prevProps) {\n        console.log(this.props);\n        // If chromosome change, update left view and delete right view\n        if (this.props.chromosome !== prevProps.chromosome) {\n            this.setState({ cytoscape_loading: true, show_tooltip: false });\n            const url = this.chromosomePath(this.props.chromosome);\n            this.onDownloadChange(url);\n            const message = \"Chromosome \" + this.props.chromosome;\n            this.setState({ loading_message: message, left_title: message });\n            const updateChromosomeStyle = (cy) => {\n                cy.style()\n                    .selector(\"node\")\n                    .style({\n                    width: (ele) => 20 + 1.5 * ele.data(\"total_degree\"),\n                    height: (ele) => 20 + 1.5 * ele.data(\"total_degree\"),\n                }).update();\n            };\n            const updateNeighbourhood = (cy) => {\n                const left_node = cy.nodes().filter((node) => this.checkNode(node, this.state.right_title))[0];\n                if (left_node) {\n                    const neighbourhood = left_node.closedNeighbourhood();\n                    cy.fit(neighbourhood);\n                    neighbourhood.edges().style({\n                        \"line-color\": \"gold\",\n                    });\n                    neighbourhood.nodes().style({\n                        \"border-color\": \"gold\",\n                    });\n                    this.old_neighbourhood = neighbourhood;\n                }\n                else {\n                    this.right_cy_network.elements().remove();\n                    this.setState({ right_title: \"Search view\" });\n                    this.clean_right_view = true;\n                }\n            };\n            setTimeout(() => {\n                if (this.cache.has(this.props.chromosome)) {\n                    const cy = this.cache.get(this.props.chromosome);\n                    this.left_cy_network = this.buildNetwork(cy.elements().jsons(), this.left_container_id);\n                    updateChromosomeStyle(this.left_cy_network);\n                    updateNeighbourhood(this.left_cy_network);\n                }\n                else {\n                    const cy_json_elements = this.fetchAsyncJson(url);\n                    this.left_cy_network = this.buildNetwork(cy_json_elements, this.left_container_id);\n                    this.cache.set(this.props.chromosome, this.left_cy_network);\n                    this.left_cy_network.on(\"layoutstop\", (event) => {\n                        updateChromosomeStyle(event.cy);\n                        updateNeighbourhood(event.cy);\n                    });\n                }\n                // Clean right view only if we select explictly a chromosome\n                if (this.clean_right_view) {\n                    this.right_cy_network.elements().remove();\n                    this.setState({ right_title: \"Search view\" });\n                }\n                else {\n                    this.clean_right_view = true;\n                }\n            }, 500);\n            // If search change, update right view and change to the searched node chromosome\n        }\n        else if ((this.props.search !== prevProps.search) && this.props.search !== \"\") {\n            this.setState({ cytoscape_loading: true, show_tooltip: false });\n            this.clean_right_view = false;\n            const search = this.props.search.toString().toLowerCase();\n            const url = this.searchPath(search);\n            if (!this.reuse_message) {\n                const message = \"Search \" + this.props.search;\n                this.setState({ loading_message: message, right_title: this.props.search });\n            }\n            else {\n                this.reuse_message = false;\n            }\n            const updateSearchStyle = (cy) => {\n                let min = cy.nodes().min((node) => node.data(\"total_degree\")).value;\n                let max = cy.nodes().max((node) => node.data(\"total_degree\")).value;\n                const opacityStyle = (ele) => {\n                    let opacity = (ele.data(\"total_degree\") - min) / (max - min);\n                    if (isNaN(opacity)) {\n                        opacity = 0;\n                    }\n                    if (opacity <= 0.3) {\n                        return 0.3;\n                    }\n                    else {\n                        return opacity;\n                    }\n                };\n                cy.style()\n                    .selector(\"node\")\n                    .style({\n                    \"width\": (ele) => 20 + 1.5 * ele.data(\"degree\"),\n                    \"height\": (ele) => 20 + 1.5 * ele.data(\"degree\"),\n                    \"border-color\": (ele) => this.chromosome_color[ele.data(\"chr\")],\n                    // normalize total_degree to 0-1 range but never 0\n                    \"border-opacity\": opacityStyle,\n                    \"background-opacity\": opacityStyle,\n                }).update();\n                const right_node = this.right_cy_network.nodes().filter((node) => this.checkNode(node, search))[0];\n                if (!right_node) {\n                    // This node searched is not found so exit inmmediately without crash\n                    return;\n                }\n                const searched_chromosome = right_node.data(\"chr\");\n                // Force color the neighbourhood when the chromosome is the same\n                if (this.props.chromosome === searched_chromosome) {\n                    const left_node = this.left_cy_network.nodes().filter((node) => this.checkNode(node, this.state.right_title))[0];\n                    const neighbourhood = left_node.closedNeighbourhood();\n                    this.left_cy_network.fit(neighbourhood);\n                    // Clean neighbourhood first\n                    if (this.old_neighbourhood) {\n                        this.old_neighbourhood.nodes().style({\n                            \"border-color\": (ele) => this.chromosome_color[ele.data(\"chr\")],\n                        });\n                        this.old_neighbourhood.edges().style({\n                            \"line-color\": \"#ccc\"\n                        });\n                    }\n                    neighbourhood.edges().style({\n                        \"line-color\": \"gold\",\n                    });\n                    neighbourhood.nodes().style({\n                        \"border-color\": \"gold\",\n                    });\n                    this.old_neighbourhood = neighbourhood;\n                }\n                else {\n                    this.props.onChromosomeChange(searched_chromosome);\n                }\n            };\n            setTimeout(() => {\n                if (this.cache.has(search)) {\n                    const cy = this.cache.get(search);\n                    this.right_cy_network = this.buildNetwork(cy.elements().jsons(), this.right_container_id);\n                    updateSearchStyle(this.right_cy_network);\n                }\n                else {\n                    const cy_json_elements = this.fetchAsyncJson(url);\n                    this.right_cy_network = this.buildNetwork(cy_json_elements, this.right_container_id);\n                    this.cache.set(search, this.right_cy_network);\n                    this.right_cy_network.one(\"layoutstop\", (event) => {\n                        updateSearchStyle(event.cy);\n                    });\n                }\n            }, 500);\n        }\n        else if ((this.props.feature !== prevProps.feature) && this.props.feature !== \"\") {\n            this.setState({ cytoscape_loading: false });\n            const updateFeatures = (cy_network) => {\n                cy_network.style()\n                    .selector(\"node\")\n                    .style({\n                    \"background-color\": \"mapData(\" + this.props.feature + \", 0, 1, #ccc, pink)\",\n                })\n                    .update();\n            };\n            // If feature change update both views\n            updateFeatures(this.left_cy_network);\n            if (this.right_cy_network !== undefined) {\n                updateFeatures(this.right_cy_network);\n            }\n        }\n    }\n    render() {\n        return (React.createElement(\"div\", { className: \"row\" },\n            React.createElement(reactstrap_1.Modal, { isOpen: this.state.cytoscape_loading, centered: true, className: \"text-center\" },\n                React.createElement(reactstrap_1.ModalBody, null,\n                    \"Be patient please\",\n                    React.createElement(\"br\", null),\n                    \"Rendering \",\n                    this.state.loading_message,\n                    React.createElement(\"div\", { className: \"spinner\" }))),\n            React.createElement(\"div\", { className: \"col-sm-6\", style: { padding: \"0px\", paddingLeft: \"10px\" } },\n                React.createElement(\"h3\", { className: \"text-center\" }, this.state.left_title ? this.state.left_title : \"Chromosome \" + this.props.chromosome),\n                React.createElement(CytoscapeContainer_1.Cytoscape_container, { cytoscape_container_id: this.left_container_id })),\n            React.createElement(\"div\", { className: \"col-sm-6\", style: { padding: \"0px\" } },\n                React.createElement(\"h3\", { className: \"text-center\" }, this.state.right_title ? this.state.right_title : \"Search view\"),\n                React.createElement(CytoscapeContainer_1.Cytoscape_container, { cytoscape_container_id: this.right_container_id })),\n            React.createElement(\"div\", { style: { display: this.state.show_tooltip ? \"block\" : \"none\", left: this.state.tooltip_x, top: this.state.tooltip_y, position: \"fixed\", border: \"#aaa\", borderRadius: \"5px\", borderStyle: \"solid\", borderWidth: \"2px\", backgroundColor: \"white\" } }, this.state.tooltip_text)));\n    }\n}\nexports.Cytoscape_manager = Cytoscape_manager;\n\n\n//# sourceURL=webpack:///./src/components/Viewer/Cytoscape_manager.tsx?");

/***/ }),

/***/ "./src/components/Viewer/Viewer.tsx":
/*!******************************************!*\
  !*** ./src/components/Viewer/Viewer.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst React = __webpack_require__(/*! react */ \"react\");\nconst CytoscapeManager_1 = __webpack_require__(/*! ../../containers/CytoscapeManager */ \"./src/containers/CytoscapeManager.ts\");\nconst ControlPanel_1 = __webpack_require__(/*! ./ControlPanel/ControlPanel */ \"./src/components/Viewer/ControlPanel/ControlPanel.tsx\");\nclass Viewer extends React.Component {\n    render() {\n        return (React.createElement(\"div\", { className: \"container-fluid\" },\n            React.createElement(\"div\", { className: \"row flex-column-reverse flex-lg-row\" },\n                React.createElement(\"div\", { className: \"col-lg-10\", style: { padding: \"0px\" } },\n                    React.createElement(CytoscapeManager_1.CytoscapeManager, null)),\n                React.createElement(\"div\", { className: \"col-lg-2\", style: { padding: \"0px\" } },\n                    React.createElement(ControlPanel_1.ControlPanel, null)))));\n    }\n}\nexports.Viewer = Viewer;\n\n\n//# sourceURL=webpack:///./src/components/Viewer/Viewer.tsx?");

/***/ }),

/***/ "./src/containers/ChromosomesPanelContainer.ts":
/*!*****************************************************!*\
  !*** ./src/containers/ChromosomesPanelContainer.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\nconst index_1 = __webpack_require__(/*! ../actions/index */ \"./src/actions/index.ts\");\nconst ChromosomesPanel_1 = __webpack_require__(/*! ../components/Viewer/ControlPanel/SubPanels/ChromosomesPanel */ \"./src/components/Viewer/ControlPanel/SubPanels/ChromosomesPanel.tsx\");\nexports.mapStateToProps = (state) => {\n    return { chromosome: state.chromosome };\n};\nexports.mapDispatchToProps = {\n    onChromosomeChange: index_1.change_chromosome,\n    onTextChange: index_1.change_text,\n};\nexports.ChromosomesPanelContainer = react_redux_1.connect(exports.mapStateToProps, exports.mapDispatchToProps)(ChromosomesPanel_1.ChromosomesPanel);\n\n\n//# sourceURL=webpack:///./src/containers/ChromosomesPanelContainer.ts?");

/***/ }),

/***/ "./src/containers/CytoscapeContainer.ts":
/*!**********************************************!*\
  !*** ./src/containers/CytoscapeContainer.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\nconst index_1 = __webpack_require__(/*! ../actions/index */ \"./src/actions/index.ts\");\nconst Cytoscape_1 = __webpack_require__(/*! ../components/Viewer/Cytoscape */ \"./src/components/Viewer/Cytoscape.tsx\");\nexports.mapStateToProps = (state) => {\n    return {\n        chromosome: state.chromosome,\n        feature: state.feature,\n        download: state.download,\n        search: state.search,\n    };\n};\nexports.mapDispatchToProps = {\n    onDownloadChange: index_1.change_download,\n};\nexports.Cytoscape_container = react_redux_1.connect(exports.mapStateToProps, exports.mapDispatchToProps)(Cytoscape_1.Cytoscape);\n\n\n//# sourceURL=webpack:///./src/containers/CytoscapeContainer.ts?");

/***/ }),

/***/ "./src/containers/CytoscapeManager.ts":
/*!********************************************!*\
  !*** ./src/containers/CytoscapeManager.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\nconst index_1 = __webpack_require__(/*! ../actions/index */ \"./src/actions/index.ts\");\nconst Cytoscape_manager_1 = __webpack_require__(/*! ../components/Viewer/Cytoscape_manager */ \"./src/components/Viewer/Cytoscape_manager.tsx\");\nexports.mapStateToProps = (state) => {\n    return {\n        chromosome: state.chromosome,\n        feature: state.feature,\n        download: state.download,\n        search: state.search,\n        organism: state.organism,\n        cell_type: state.cell_type\n    };\n};\nexports.mapDispatchToProps = {\n    onChromosomeChange: index_1.change_chromosome,\n    onDownloadChange: index_1.change_download,\n    onSearchChange: index_1.change_search,\n};\nexports.CytoscapeManager = react_redux_1.connect(exports.mapStateToProps, exports.mapDispatchToProps)(Cytoscape_manager_1.Cytoscape_manager);\n\n\n//# sourceURL=webpack:///./src/containers/CytoscapeManager.ts?");

/***/ }),

/***/ "./src/containers/DownloadButtonContainer.ts":
/*!***************************************************!*\
  !*** ./src/containers/DownloadButtonContainer.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\nconst DownloadButton_1 = __webpack_require__(/*! ../components/Viewer/ControlPanel/SubPanels/DownloadButton */ \"./src/components/Viewer/ControlPanel/SubPanels/DownloadButton.tsx\");\nexports.mapStateToProps = (state) => {\n    return {\n        download: state.download,\n    };\n};\nexports.DownloadButtonContainer = react_redux_1.connect(exports.mapStateToProps, null)(DownloadButton_1.DownloadButton);\n\n\n//# sourceURL=webpack:///./src/containers/DownloadButtonContainer.ts?");

/***/ }),

/***/ "./src/containers/FeaturesPanelContainer.ts":
/*!**************************************************!*\
  !*** ./src/containers/FeaturesPanelContainer.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\nconst index_1 = __webpack_require__(/*! ../actions/index */ \"./src/actions/index.ts\");\nconst FeaturesPanel_1 = __webpack_require__(/*! ../components/Viewer/ControlPanel/SubPanels/FeaturesPanel */ \"./src/components/Viewer/ControlPanel/SubPanels/FeaturesPanel.tsx\");\nexports.mapStateToProps = (state) => {\n    return { feature: state.feature };\n};\nexports.mapDispatchToProps = {\n    onFeatureChange: index_1.change_feature,\n};\nexports.FeaturesPanelContainer = react_redux_1.connect(exports.mapStateToProps, exports.mapDispatchToProps)(FeaturesPanel_1.FeaturesPanel);\n\n\n//# sourceURL=webpack:///./src/containers/FeaturesPanelContainer.ts?");

/***/ }),

/***/ "./src/containers/FrontendContainer.ts":
/*!*********************************************!*\
  !*** ./src/containers/FrontendContainer.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\nconst index_1 = __webpack_require__(/*! ../actions/index */ \"./src/actions/index.ts\");\nconst Frontend_1 = __webpack_require__(/*! ../components/Frontend */ \"./src/components/Frontend.tsx\");\nexports.mapStateToProps = (state) => {\n    return {\n        cell_type: state.cell_type,\n        organism: state.organism,\n    };\n};\nexports.mapDispatchToProps = {\n    onCellTypeChange: index_1.change_cell_type,\n    onOrganismChange: index_1.change_organism,\n};\nexports.FrontendContainer = react_redux_1.connect(exports.mapStateToProps, exports.mapDispatchToProps)(Frontend_1.Frontend);\n\n\n//# sourceURL=webpack:///./src/containers/FrontendContainer.ts?");

/***/ }),

/***/ "./src/containers/SearchPanelContainer.ts":
/*!************************************************!*\
  !*** ./src/containers/SearchPanelContainer.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\nconst index_1 = __webpack_require__(/*! ../actions/index */ \"./src/actions/index.ts\");\nconst SearchPanel_1 = __webpack_require__(/*! ../components/SearchPanel */ \"./src/components/SearchPanel.tsx\");\nexports.mapStateToProps = (state) => {\n    return {\n        search: state.search,\n        text: state.text,\n    };\n};\nexports.mapDispatchToProps = {\n    onSearchChange: index_1.change_search,\n    onTextChange: index_1.change_text,\n    onChromosomeChange: index_1.change_chromosome,\n};\nexports.SearchPanelContainer = react_redux_1.connect(exports.mapStateToProps, exports.mapDispatchToProps)(SearchPanel_1.SearchPanel);\n\n\n//# sourceURL=webpack:///./src/containers/SearchPanelContainer.ts?");

/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst React = __webpack_require__(/*! react */ \"react\");\nconst ReactDOM = __webpack_require__(/*! react-dom */ \"react-dom\");\nconst react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\nconst redux_1 = __webpack_require__(/*! redux */ \"redux\");\nconst Portal_1 = __webpack_require__(/*! ./components/Portal */ \"./src/components/Portal.tsx\");\nconst index_1 = __webpack_require__(/*! ./reducers/index */ \"./src/reducers/index.ts\");\nconst store = redux_1.createStore(index_1.root_reducers);\nconst rootEl = document.getElementById(\"frontend_container\");\nReactDOM.render(React.createElement(react_redux_1.Provider, { store: store },\n    React.createElement(Portal_1.Portal, null)), rootEl);\n\n\n//# sourceURL=webpack:///./src/index.tsx?");

/***/ }),

/***/ "./src/reducers/cell_type_reducer.ts":
/*!*******************************************!*\
  !*** ./src/reducers/cell_type_reducer.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst index_1 = __webpack_require__(/*! ../actions/index */ \"./src/actions/index.ts\");\nexports.DEFAULT_CELL_TYPE = \"\";\nexports.cell_type_reducer = (state = exports.DEFAULT_CELL_TYPE, action) => {\n    switch (action.type) {\n        case index_1.CHANGED_CELL_TYPE:\n            return action.cell_type;\n        default:\n            return state;\n    }\n};\n\n\n//# sourceURL=webpack:///./src/reducers/cell_type_reducer.ts?");

/***/ }),

/***/ "./src/reducers/chromosomes_reducer.ts":
/*!*********************************************!*\
  !*** ./src/reducers/chromosomes_reducer.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst index_1 = __webpack_require__(/*! ../actions/index */ \"./src/actions/index.ts\");\nexports.DEFAULT_CHROMOSOME = \"1\";\nexports.chromosomes_reducer = (state = exports.DEFAULT_CHROMOSOME, action) => {\n    switch (action.type) {\n        case index_1.CHANGED_CHROMOSOME:\n            return action.chromosome;\n        default:\n            return state;\n    }\n};\n\n\n//# sourceURL=webpack:///./src/reducers/chromosomes_reducer.ts?");

/***/ }),

/***/ "./src/reducers/download_reducer.ts":
/*!******************************************!*\
  !*** ./src/reducers/download_reducer.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst index_1 = __webpack_require__(/*! ../actions/index */ \"./src/actions/index.ts\");\nexports.DEFAULT_DOWNLOAD = \"\";\nexports.download_reducer = (state = exports.DEFAULT_DOWNLOAD, action) => {\n    switch (action.type) {\n        case index_1.CHANGED_DOWNLOAD:\n            return action.download;\n        default:\n            return state;\n    }\n};\n\n\n//# sourceURL=webpack:///./src/reducers/download_reducer.ts?");

/***/ }),

/***/ "./src/reducers/features_reducer.ts":
/*!******************************************!*\
  !*** ./src/reducers/features_reducer.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst index_1 = __webpack_require__(/*! ../actions/index */ \"./src/actions/index.ts\");\nexports.DEFAULT_FEATURE = \"EZH2\";\nexports.features_reducer = (state = exports.DEFAULT_FEATURE, action) => {\n    switch (action.type) {\n        case index_1.CHANGED_FEATURE:\n            return action.feature;\n        default:\n            return state;\n    }\n};\n\n\n//# sourceURL=webpack:///./src/reducers/features_reducer.ts?");

/***/ }),

/***/ "./src/reducers/index.ts":
/*!*******************************!*\
  !*** ./src/reducers/index.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst redux_1 = __webpack_require__(/*! redux */ \"redux\");\nconst chromosomes_reducer_1 = __webpack_require__(/*! ./chromosomes_reducer */ \"./src/reducers/chromosomes_reducer.ts\");\nexports.chromosomes_reducer = chromosomes_reducer_1.chromosomes_reducer;\nexports.DEFAULT_CHROMOSOME = chromosomes_reducer_1.DEFAULT_CHROMOSOME;\nconst download_reducer_1 = __webpack_require__(/*! ./download_reducer */ \"./src/reducers/download_reducer.ts\");\nexports.DEFAULT_DOWNLOAD = download_reducer_1.DEFAULT_DOWNLOAD;\nexports.download_reducer = download_reducer_1.download_reducer;\nconst features_reducer_1 = __webpack_require__(/*! ./features_reducer */ \"./src/reducers/features_reducer.ts\");\nexports.DEFAULT_FEATURE = features_reducer_1.DEFAULT_FEATURE;\nexports.features_reducer = features_reducer_1.features_reducer;\nconst search_reducer_1 = __webpack_require__(/*! ./search_reducer */ \"./src/reducers/search_reducer.ts\");\nexports.DEFAULT_SEARCH = search_reducer_1.DEFAULT_SEARCH;\nexports.search_reducer = search_reducer_1.search_reducer;\nconst text_reducer_1 = __webpack_require__(/*! ./text_reducer */ \"./src/reducers/text_reducer.ts\");\nexports.DEFAULT_TEXT = text_reducer_1.DEFAULT_TEXT;\nexports.text_reducer = text_reducer_1.text_reducer;\nconst organism_reducer_1 = __webpack_require__(/*! ./organism_reducer */ \"./src/reducers/organism_reducer.ts\");\nexports.DEFAULT_ORGANISM = organism_reducer_1.DEFAULT_ORGANISM;\nexports.organism_reducer = organism_reducer_1.organism_reducer;\nconst cell_type_reducer_1 = __webpack_require__(/*! ./cell_type_reducer */ \"./src/reducers/cell_type_reducer.ts\");\nexports.DEFAULT_CELL_TYPE = cell_type_reducer_1.DEFAULT_CELL_TYPE;\nexports.cell_type_reducer = cell_type_reducer_1.cell_type_reducer;\nconst root_reducers = redux_1.combineReducers({\n    chromosome: chromosomes_reducer_1.chromosomes_reducer,\n    feature: features_reducer_1.features_reducer,\n    download: download_reducer_1.download_reducer,\n    search: search_reducer_1.search_reducer,\n    text: text_reducer_1.text_reducer,\n    organism: organism_reducer_1.organism_reducer,\n    cell_type: cell_type_reducer_1.cell_type_reducer,\n});\nexports.root_reducers = root_reducers;\n\n\n//# sourceURL=webpack:///./src/reducers/index.ts?");

/***/ }),

/***/ "./src/reducers/organism_reducer.ts":
/*!******************************************!*\
  !*** ./src/reducers/organism_reducer.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst index_1 = __webpack_require__(/*! ../actions/index */ \"./src/actions/index.ts\");\nexports.DEFAULT_ORGANISM = \"\";\nexports.organism_reducer = (state = exports.DEFAULT_ORGANISM, action) => {\n    switch (action.type) {\n        case index_1.CHANGED_ORGANISM:\n            return action.organism;\n        default:\n            return state;\n    }\n};\n\n\n//# sourceURL=webpack:///./src/reducers/organism_reducer.ts?");

/***/ }),

/***/ "./src/reducers/search_reducer.ts":
/*!****************************************!*\
  !*** ./src/reducers/search_reducer.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst index_1 = __webpack_require__(/*! ../actions/index */ \"./src/actions/index.ts\");\nexports.DEFAULT_SEARCH = \"\";\nexports.search_reducer = (state = exports.DEFAULT_SEARCH, action) => {\n    switch (action.type) {\n        case index_1.CHANGED_SEARCH:\n            return action.search;\n        default:\n            return state;\n    }\n};\n\n\n//# sourceURL=webpack:///./src/reducers/search_reducer.ts?");

/***/ }),

/***/ "./src/reducers/text_reducer.ts":
/*!**************************************!*\
  !*** ./src/reducers/text_reducer.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst index_1 = __webpack_require__(/*! ../actions/index */ \"./src/actions/index.ts\");\nexports.DEFAULT_TEXT = \"\";\nexports.text_reducer = (state = exports.DEFAULT_TEXT, action) => {\n    switch (action.type) {\n        case index_1.CHANGED_TEXT:\n            return action.text;\n        default:\n            return state;\n    }\n};\n\n\n//# sourceURL=webpack:///./src/reducers/text_reducer.ts?");

/***/ }),

/***/ "cytoscape":
/*!****************************!*\
  !*** external "cytoscape" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = cytoscape;\n\n//# sourceURL=webpack:///external_%22cytoscape%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = React;\n\n//# sourceURL=webpack:///external_%22React%22?");

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = ReactDOM;\n\n//# sourceURL=webpack:///external_%22ReactDOM%22?");

/***/ }),

/***/ "react-redux":
/*!*****************************!*\
  !*** external "ReactRedux" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = ReactRedux;\n\n//# sourceURL=webpack:///external_%22ReactRedux%22?");

/***/ }),

/***/ "react-router-dom":
/*!*********************************!*\
  !*** external "ReactRouterDOM" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = ReactRouterDOM;\n\n//# sourceURL=webpack:///external_%22ReactRouterDOM%22?");

/***/ }),

/***/ "reactstrap":
/*!*****************************!*\
  !*** external "Reactstrap" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = Reactstrap;\n\n//# sourceURL=webpack:///external_%22Reactstrap%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "Redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = Redux;\n\n//# sourceURL=webpack:///external_%22Redux%22?");

/***/ })

/******/ });