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

/***/ "./node_modules/css-loader/index.js!./src/components/Viewer/Cytoscape.css":
/*!***********************************************************************!*\
  !*** ./node_modules/css-loader!./src/components/Viewer/Cytoscape.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \"#cytoscape_container {\\n  display: block;\\n  height: 450px;\\n  width: 100%;\\n}\\n\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./src/components/Viewer/Cytoscape.css?./node_modules/css-loader");

/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\nmodule.exports = function(useSourceMap) {\n\tvar list = [];\n\n\t// return the list of modules as css string\n\tlist.toString = function toString() {\n\t\treturn this.map(function (item) {\n\t\t\tvar content = cssWithMappingToString(item, useSourceMap);\n\t\t\tif(item[2]) {\n\t\t\t\treturn \"@media \" + item[2] + \"{\" + content + \"}\";\n\t\t\t} else {\n\t\t\t\treturn content;\n\t\t\t}\n\t\t}).join(\"\");\n\t};\n\n\t// import a list of modules into the list\n\tlist.i = function(modules, mediaQuery) {\n\t\tif(typeof modules === \"string\")\n\t\t\tmodules = [[null, modules, \"\"]];\n\t\tvar alreadyImportedModules = {};\n\t\tfor(var i = 0; i < this.length; i++) {\n\t\t\tvar id = this[i][0];\n\t\t\tif(typeof id === \"number\")\n\t\t\t\talreadyImportedModules[id] = true;\n\t\t}\n\t\tfor(i = 0; i < modules.length; i++) {\n\t\t\tvar item = modules[i];\n\t\t\t// skip already imported module\n\t\t\t// this implementation is not 100% perfect for weird media query combinations\n\t\t\t//  when a module is imported multiple times with different media queries.\n\t\t\t//  I hope this will never occur (Hey this way we have smaller bundles)\n\t\t\tif(typeof item[0] !== \"number\" || !alreadyImportedModules[item[0]]) {\n\t\t\t\tif(mediaQuery && !item[2]) {\n\t\t\t\t\titem[2] = mediaQuery;\n\t\t\t\t} else if(mediaQuery) {\n\t\t\t\t\titem[2] = \"(\" + item[2] + \") and (\" + mediaQuery + \")\";\n\t\t\t\t}\n\t\t\t\tlist.push(item);\n\t\t\t}\n\t\t}\n\t};\n\treturn list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n\tvar content = item[1] || '';\n\tvar cssMapping = item[3];\n\tif (!cssMapping) {\n\t\treturn content;\n\t}\n\n\tif (useSourceMap && typeof btoa === 'function') {\n\t\tvar sourceMapping = toComment(cssMapping);\n\t\tvar sourceURLs = cssMapping.sources.map(function (source) {\n\t\t\treturn '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'\n\t\t});\n\n\t\treturn [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n\t}\n\n\treturn [content].join('\\n');\n}\n\n// Adapted from convert-source-map (MIT)\nfunction toComment(sourceMap) {\n\t// eslint-disable-next-line no-undef\n\tvar base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n\tvar data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;\n\n\treturn '/*# ' + data + ' */';\n}\n\n\n//# sourceURL=webpack:///./node_modules/css-loader/lib/css-base.js?");

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n\nvar stylesInDom = {};\n\nvar\tmemoize = function (fn) {\n\tvar memo;\n\n\treturn function () {\n\t\tif (typeof memo === \"undefined\") memo = fn.apply(this, arguments);\n\t\treturn memo;\n\t};\n};\n\nvar isOldIE = memoize(function () {\n\t// Test for IE <= 9 as proposed by Browserhacks\n\t// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n\t// Tests for existence of standard globals is to allow style-loader\n\t// to operate correctly into non-standard environments\n\t// @see https://github.com/webpack-contrib/style-loader/issues/177\n\treturn window && document && document.all && !window.atob;\n});\n\nvar getTarget = function (target) {\n  return document.querySelector(target);\n};\n\nvar getElement = (function (fn) {\n\tvar memo = {};\n\n\treturn function(target) {\n                // If passing function in options, then use it for resolve \"head\" element.\n                // Useful for Shadow Root style i.e\n                // {\n                //   insertInto: function () { return document.querySelector(\"#foo\").shadowRoot }\n                // }\n                if (typeof target === 'function') {\n                        return target();\n                }\n                if (typeof memo[target] === \"undefined\") {\n\t\t\tvar styleTarget = getTarget.call(this, target);\n\t\t\t// Special case to return head of iframe instead of iframe itself\n\t\t\tif (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n\t\t\t\ttry {\n\t\t\t\t\t// This will throw an exception if access to iframe is blocked\n\t\t\t\t\t// due to cross-origin restrictions\n\t\t\t\t\tstyleTarget = styleTarget.contentDocument.head;\n\t\t\t\t} catch(e) {\n\t\t\t\t\tstyleTarget = null;\n\t\t\t\t}\n\t\t\t}\n\t\t\tmemo[target] = styleTarget;\n\t\t}\n\t\treturn memo[target]\n\t};\n})();\n\nvar singleton = null;\nvar\tsingletonCounter = 0;\nvar\tstylesInsertedAtTop = [];\n\nvar\tfixUrls = __webpack_require__(/*! ./urls */ \"./node_modules/style-loader/lib/urls.js\");\n\nmodule.exports = function(list, options) {\n\tif (typeof DEBUG !== \"undefined\" && DEBUG) {\n\t\tif (typeof document !== \"object\") throw new Error(\"The style-loader cannot be used in a non-browser environment\");\n\t}\n\n\toptions = options || {};\n\n\toptions.attrs = typeof options.attrs === \"object\" ? options.attrs : {};\n\n\t// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n\t// tags it will allow on a page\n\tif (!options.singleton && typeof options.singleton !== \"boolean\") options.singleton = isOldIE();\n\n\t// By default, add <style> tags to the <head> element\n        if (!options.insertInto) options.insertInto = \"head\";\n\n\t// By default, add <style> tags to the bottom of the target\n\tif (!options.insertAt) options.insertAt = \"bottom\";\n\n\tvar styles = listToStyles(list, options);\n\n\taddStylesToDom(styles, options);\n\n\treturn function update (newList) {\n\t\tvar mayRemove = [];\n\n\t\tfor (var i = 0; i < styles.length; i++) {\n\t\t\tvar item = styles[i];\n\t\t\tvar domStyle = stylesInDom[item.id];\n\n\t\t\tdomStyle.refs--;\n\t\t\tmayRemove.push(domStyle);\n\t\t}\n\n\t\tif(newList) {\n\t\t\tvar newStyles = listToStyles(newList, options);\n\t\t\taddStylesToDom(newStyles, options);\n\t\t}\n\n\t\tfor (var i = 0; i < mayRemove.length; i++) {\n\t\t\tvar domStyle = mayRemove[i];\n\n\t\t\tif(domStyle.refs === 0) {\n\t\t\t\tfor (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();\n\n\t\t\t\tdelete stylesInDom[domStyle.id];\n\t\t\t}\n\t\t}\n\t};\n};\n\nfunction addStylesToDom (styles, options) {\n\tfor (var i = 0; i < styles.length; i++) {\n\t\tvar item = styles[i];\n\t\tvar domStyle = stylesInDom[item.id];\n\n\t\tif(domStyle) {\n\t\t\tdomStyle.refs++;\n\n\t\t\tfor(var j = 0; j < domStyle.parts.length; j++) {\n\t\t\t\tdomStyle.parts[j](item.parts[j]);\n\t\t\t}\n\n\t\t\tfor(; j < item.parts.length; j++) {\n\t\t\t\tdomStyle.parts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\t\t} else {\n\t\t\tvar parts = [];\n\n\t\t\tfor(var j = 0; j < item.parts.length; j++) {\n\t\t\t\tparts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\n\t\t\tstylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};\n\t\t}\n\t}\n}\n\nfunction listToStyles (list, options) {\n\tvar styles = [];\n\tvar newStyles = {};\n\n\tfor (var i = 0; i < list.length; i++) {\n\t\tvar item = list[i];\n\t\tvar id = options.base ? item[0] + options.base : item[0];\n\t\tvar css = item[1];\n\t\tvar media = item[2];\n\t\tvar sourceMap = item[3];\n\t\tvar part = {css: css, media: media, sourceMap: sourceMap};\n\n\t\tif(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});\n\t\telse newStyles[id].parts.push(part);\n\t}\n\n\treturn styles;\n}\n\nfunction insertStyleElement (options, style) {\n\tvar target = getElement(options.insertInto)\n\n\tif (!target) {\n\t\tthrow new Error(\"Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.\");\n\t}\n\n\tvar lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];\n\n\tif (options.insertAt === \"top\") {\n\t\tif (!lastStyleElementInsertedAtTop) {\n\t\t\ttarget.insertBefore(style, target.firstChild);\n\t\t} else if (lastStyleElementInsertedAtTop.nextSibling) {\n\t\t\ttarget.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);\n\t\t} else {\n\t\t\ttarget.appendChild(style);\n\t\t}\n\t\tstylesInsertedAtTop.push(style);\n\t} else if (options.insertAt === \"bottom\") {\n\t\ttarget.appendChild(style);\n\t} else if (typeof options.insertAt === \"object\" && options.insertAt.before) {\n\t\tvar nextSibling = getElement(options.insertInto + \" \" + options.insertAt.before);\n\t\ttarget.insertBefore(style, nextSibling);\n\t} else {\n\t\tthrow new Error(\"[Style Loader]\\n\\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\\n Must be 'top', 'bottom', or Object.\\n (https://github.com/webpack-contrib/style-loader#insertat)\\n\");\n\t}\n}\n\nfunction removeStyleElement (style) {\n\tif (style.parentNode === null) return false;\n\tstyle.parentNode.removeChild(style);\n\n\tvar idx = stylesInsertedAtTop.indexOf(style);\n\tif(idx >= 0) {\n\t\tstylesInsertedAtTop.splice(idx, 1);\n\t}\n}\n\nfunction createStyleElement (options) {\n\tvar style = document.createElement(\"style\");\n\n\tif(options.attrs.type === undefined) {\n\t\toptions.attrs.type = \"text/css\";\n\t}\n\n\taddAttrs(style, options.attrs);\n\tinsertStyleElement(options, style);\n\n\treturn style;\n}\n\nfunction createLinkElement (options) {\n\tvar link = document.createElement(\"link\");\n\n\tif(options.attrs.type === undefined) {\n\t\toptions.attrs.type = \"text/css\";\n\t}\n\toptions.attrs.rel = \"stylesheet\";\n\n\taddAttrs(link, options.attrs);\n\tinsertStyleElement(options, link);\n\n\treturn link;\n}\n\nfunction addAttrs (el, attrs) {\n\tObject.keys(attrs).forEach(function (key) {\n\t\tel.setAttribute(key, attrs[key]);\n\t});\n}\n\nfunction addStyle (obj, options) {\n\tvar style, update, remove, result;\n\n\t// If a transform function was defined, run it on the css\n\tif (options.transform && obj.css) {\n\t    result = options.transform(obj.css);\n\n\t    if (result) {\n\t    \t// If transform returns a value, use that instead of the original css.\n\t    \t// This allows running runtime transformations on the css.\n\t    \tobj.css = result;\n\t    } else {\n\t    \t// If the transform function returns a falsy value, don't add this css.\n\t    \t// This allows conditional loading of css\n\t    \treturn function() {\n\t    \t\t// noop\n\t    \t};\n\t    }\n\t}\n\n\tif (options.singleton) {\n\t\tvar styleIndex = singletonCounter++;\n\n\t\tstyle = singleton || (singleton = createStyleElement(options));\n\n\t\tupdate = applyToSingletonTag.bind(null, style, styleIndex, false);\n\t\tremove = applyToSingletonTag.bind(null, style, styleIndex, true);\n\n\t} else if (\n\t\tobj.sourceMap &&\n\t\ttypeof URL === \"function\" &&\n\t\ttypeof URL.createObjectURL === \"function\" &&\n\t\ttypeof URL.revokeObjectURL === \"function\" &&\n\t\ttypeof Blob === \"function\" &&\n\t\ttypeof btoa === \"function\"\n\t) {\n\t\tstyle = createLinkElement(options);\n\t\tupdate = updateLink.bind(null, style, options);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\n\t\t\tif(style.href) URL.revokeObjectURL(style.href);\n\t\t};\n\t} else {\n\t\tstyle = createStyleElement(options);\n\t\tupdate = applyToTag.bind(null, style);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\t\t};\n\t}\n\n\tupdate(obj);\n\n\treturn function updateStyle (newObj) {\n\t\tif (newObj) {\n\t\t\tif (\n\t\t\t\tnewObj.css === obj.css &&\n\t\t\t\tnewObj.media === obj.media &&\n\t\t\t\tnewObj.sourceMap === obj.sourceMap\n\t\t\t) {\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\tupdate(obj = newObj);\n\t\t} else {\n\t\t\tremove();\n\t\t}\n\t};\n}\n\nvar replaceText = (function () {\n\tvar textStore = [];\n\n\treturn function (index, replacement) {\n\t\ttextStore[index] = replacement;\n\n\t\treturn textStore.filter(Boolean).join('\\n');\n\t};\n})();\n\nfunction applyToSingletonTag (style, index, remove, obj) {\n\tvar css = remove ? \"\" : obj.css;\n\n\tif (style.styleSheet) {\n\t\tstyle.styleSheet.cssText = replaceText(index, css);\n\t} else {\n\t\tvar cssNode = document.createTextNode(css);\n\t\tvar childNodes = style.childNodes;\n\n\t\tif (childNodes[index]) style.removeChild(childNodes[index]);\n\n\t\tif (childNodes.length) {\n\t\t\tstyle.insertBefore(cssNode, childNodes[index]);\n\t\t} else {\n\t\t\tstyle.appendChild(cssNode);\n\t\t}\n\t}\n}\n\nfunction applyToTag (style, obj) {\n\tvar css = obj.css;\n\tvar media = obj.media;\n\n\tif(media) {\n\t\tstyle.setAttribute(\"media\", media)\n\t}\n\n\tif(style.styleSheet) {\n\t\tstyle.styleSheet.cssText = css;\n\t} else {\n\t\twhile(style.firstChild) {\n\t\t\tstyle.removeChild(style.firstChild);\n\t\t}\n\n\t\tstyle.appendChild(document.createTextNode(css));\n\t}\n}\n\nfunction updateLink (link, options, obj) {\n\tvar css = obj.css;\n\tvar sourceMap = obj.sourceMap;\n\n\t/*\n\t\tIf convertToAbsoluteUrls isn't defined, but sourcemaps are enabled\n\t\tand there is no publicPath defined then lets turn convertToAbsoluteUrls\n\t\ton by default.  Otherwise default to the convertToAbsoluteUrls option\n\t\tdirectly\n\t*/\n\tvar autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;\n\n\tif (options.convertToAbsoluteUrls || autoFixUrls) {\n\t\tcss = fixUrls(css);\n\t}\n\n\tif (sourceMap) {\n\t\t// http://stackoverflow.com/a/26603875\n\t\tcss += \"\\n/*# sourceMappingURL=data:application/json;base64,\" + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + \" */\";\n\t}\n\n\tvar blob = new Blob([css], { type: \"text/css\" });\n\n\tvar oldSrc = link.href;\n\n\tlink.href = URL.createObjectURL(blob);\n\n\tif(oldSrc) URL.revokeObjectURL(oldSrc);\n}\n\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/addStyles.js?");

/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n/**\n * When source maps are enabled, `style-loader` uses a link element with a data-uri to\n * embed the css on the page. This breaks all relative urls because now they are relative to a\n * bundle instead of the current page.\n *\n * One solution is to only use full urls, but that may be impossible.\n *\n * Instead, this function \"fixes\" the relative urls to be absolute according to the current page location.\n *\n * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.\n *\n */\n\nmodule.exports = function (css) {\n  // get current location\n  var location = typeof window !== \"undefined\" && window.location;\n\n  if (!location) {\n    throw new Error(\"fixUrls requires window.location\");\n  }\n\n\t// blank or null?\n\tif (!css || typeof css !== \"string\") {\n\t  return css;\n  }\n\n  var baseUrl = location.protocol + \"//\" + location.host;\n  var currentDir = baseUrl + location.pathname.replace(/\\/[^\\/]*$/, \"/\");\n\n\t// convert each url(...)\n\t/*\n\tThis regular expression is just a way to recursively match brackets within\n\ta string.\n\n\t /url\\s*\\(  = Match on the word \"url\" with any whitespace after it and then a parens\n\t   (  = Start a capturing group\n\t     (?:  = Start a non-capturing group\n\t         [^)(]  = Match anything that isn't a parentheses\n\t         |  = OR\n\t         \\(  = Match a start parentheses\n\t             (?:  = Start another non-capturing groups\n\t                 [^)(]+  = Match anything that isn't a parentheses\n\t                 |  = OR\n\t                 \\(  = Match a start parentheses\n\t                     [^)(]*  = Match anything that isn't a parentheses\n\t                 \\)  = Match a end parentheses\n\t             )  = End Group\n              *\\) = Match anything and then a close parens\n          )  = Close non-capturing group\n          *  = Match anything\n       )  = Close capturing group\n\t \\)  = Match a close parens\n\n\t /gi  = Get all matches, not the first.  Be case insensitive.\n\t */\n\tvar fixedCss = css.replace(/url\\s*\\(((?:[^)(]|\\((?:[^)(]+|\\([^)(]*\\))*\\))*)\\)/gi, function(fullMatch, origUrl) {\n\t\t// strip quotes (if they exist)\n\t\tvar unquotedOrigUrl = origUrl\n\t\t\t.trim()\n\t\t\t.replace(/^\"(.*)\"$/, function(o, $1){ return $1; })\n\t\t\t.replace(/^'(.*)'$/, function(o, $1){ return $1; });\n\n\t\t// already a full url? no change\n\t\tif (/^(#|data:|http:\\/\\/|https:\\/\\/|file:\\/\\/\\/|\\s*$)/i.test(unquotedOrigUrl)) {\n\t\t  return fullMatch;\n\t\t}\n\n\t\t// convert the url to a full url\n\t\tvar newUrl;\n\n\t\tif (unquotedOrigUrl.indexOf(\"//\") === 0) {\n\t\t  \t//TODO: should we add protocol?\n\t\t\tnewUrl = unquotedOrigUrl;\n\t\t} else if (unquotedOrigUrl.indexOf(\"/\") === 0) {\n\t\t\t// path should be relative to the base url\n\t\t\tnewUrl = baseUrl + unquotedOrigUrl; // already starts with '/'\n\t\t} else {\n\t\t\t// path should be relative to current directory\n\t\t\tnewUrl = currentDir + unquotedOrigUrl.replace(/^\\.\\//, \"\"); // Strip leading './'\n\t\t}\n\n\t\t// send back the fixed url(...)\n\t\treturn \"url(\" + JSON.stringify(newUrl) + \")\";\n\t});\n\n\t// send back the fixed css\n\treturn fixedCss;\n};\n\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/urls.js?");

/***/ }),

/***/ "./src/actions/color_action.ts":
/*!*************************************!*\
  !*** ./src/actions/color_action.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.CHANGED_COLOR = 'CHANGED_COLOR';\nexports.change_color = (color) => ({\n    type: exports.CHANGED_COLOR,\n    color: color\n});\n\n\n//# sourceURL=webpack:///./src/actions/color_action.ts?");

/***/ }),

/***/ "./src/actions/index.ts":
/*!******************************!*\
  !*** ./src/actions/index.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst size_action_1 = __webpack_require__(/*! ./size_action */ \"./src/actions/size_action.ts\");\nexports.CHANGED_SIZE = size_action_1.CHANGED_SIZE;\nexports.change_size = size_action_1.change_size;\nconst color_action_1 = __webpack_require__(/*! ./color_action */ \"./src/actions/color_action.ts\");\nexports.CHANGED_COLOR = color_action_1.CHANGED_COLOR;\nexports.change_color = color_action_1.change_color;\nconst selection_action_1 = __webpack_require__(/*! ./selection_action */ \"./src/actions/selection_action.ts\");\nexports.CHANGED_SELECTION = selection_action_1.CHANGED_SELECTION;\nexports.change_selection = selection_action_1.change_selection;\n\n\n//# sourceURL=webpack:///./src/actions/index.ts?");

/***/ }),

/***/ "./src/actions/selection_action.ts":
/*!*****************************************!*\
  !*** ./src/actions/selection_action.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.CHANGED_SELECTION = 'CHANGED_SELECTION';\nexports.change_selection = (selection) => ({\n    type: exports.CHANGED_SELECTION,\n    selection: selection\n});\n\n\n//# sourceURL=webpack:///./src/actions/selection_action.ts?");

/***/ }),

/***/ "./src/actions/size_action.ts":
/*!************************************!*\
  !*** ./src/actions/size_action.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.CHANGED_SIZE = 'CHANGED_SIZE';\nexports.change_size = (size) => ({\n    type: exports.CHANGED_SIZE,\n    size: size\n});\n\n\n//# sourceURL=webpack:///./src/actions/size_action.ts?");

/***/ }),

/***/ "./src/components/Frontend.tsx":
/*!*************************************!*\
  !*** ./src/components/Frontend.tsx ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst React = __webpack_require__(/*! react */ \"react\");\nconst Header_1 = __webpack_require__(/*! ./Header */ \"./src/components/Header.tsx\");\nconst Viewer_1 = __webpack_require__(/*! ./Viewer/Viewer */ \"./src/components/Viewer/Viewer.tsx\");\nclass Frontend extends React.Component {\n    render() {\n        return (React.createElement(\"div\", null,\n            React.createElement(Header_1.Header, null),\n            React.createElement(Viewer_1.Viewer, null)));\n    }\n}\nexports.Frontend = Frontend;\n\n\n//# sourceURL=webpack:///./src/components/Frontend.tsx?");

/***/ }),

/***/ "./src/components/Header.tsx":
/*!***********************************!*\
  !*** ./src/components/Header.tsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst React = __webpack_require__(/*! react */ \"react\");\nconst Reactstrap = __webpack_require__(/*! reactstrap */ \"reactstrap\");\nclass Header extends React.Component {\n    render() {\n        return (React.createElement(\"div\", { className: 'container' },\n            React.createElement(\"div\", { className: \"row\" },\n                React.createElement(\"div\", { className: \"col\" },\n                    React.createElement(\"h1\", { className: \"text-center\" }, \"ChAs Frontend\"))),\n            React.createElement(\"div\", { className: \"row\" },\n                React.createElement(\"div\", { className: \"col\" }),\n                React.createElement(\"div\", { className: \"col\" },\n                    React.createElement(Reactstrap.Alert, { color: \"primary\", className: \"text-center\" }, \"Still in development!\")),\n                React.createElement(\"div\", { className: \"col\" }))));\n    }\n}\nexports.Header = Header;\n\n\n//# sourceURL=webpack:///./src/components/Header.tsx?");

/***/ }),

/***/ "./src/components/Viewer/ControlPanel/ControlPanel.tsx":
/*!*************************************************************!*\
  !*** ./src/components/Viewer/ControlPanel/ControlPanel.tsx ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst React = __webpack_require__(/*! react */ \"react\");\nconst SelectionPanelContainer_1 = __webpack_require__(/*! ./../../../containers/SelectionPanelContainer */ \"./src/containers/SelectionPanelContainer.ts\");\nconst SizePanelContainer_1 = __webpack_require__(/*! ./../../../containers/SizePanelContainer */ \"./src/containers/SizePanelContainer.ts\");\nconst ColorPanelContainer_1 = __webpack_require__(/*! ./../../../containers/ColorPanelContainer */ \"./src/containers/ColorPanelContainer.ts\");\nclass ControlPanel extends React.Component {\n    render() {\n        return (React.createElement(\"div\", { className: 'container' },\n            React.createElement(\"div\", { className: \"row\" },\n                React.createElement(\"div\", { className: \"col text-center\" },\n                    React.createElement(ColorPanelContainer_1.ColorPanelContainer, null)),\n                React.createElement(\"div\", { className: \"col\" },\n                    React.createElement(SelectionPanelContainer_1.SelectionPanelContainer, null)),\n                React.createElement(\"div\", { className: \"col\" },\n                    React.createElement(SizePanelContainer_1.SizePanelContainer, null)))));\n    }\n}\nexports.ControlPanel = ControlPanel;\n\n\n//# sourceURL=webpack:///./src/components/Viewer/ControlPanel/ControlPanel.tsx?");

/***/ }),

/***/ "./src/components/Viewer/ControlPanel/SubPanels/ColorPanel.tsx":
/*!*********************************************************************!*\
  !*** ./src/components/Viewer/ControlPanel/SubPanels/ColorPanel.tsx ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst React = __webpack_require__(/*! react */ \"react\");\nconst reactstrap_1 = __webpack_require__(/*! reactstrap */ \"reactstrap\");\nclass ColorPanel extends React.Component {\n    constructor(props) {\n        super(props);\n        this.state = {\n            color: ''\n        };\n        this.handlerColorButton = this.handlerColorButton.bind(this);\n        this.handlerColorChange = this.handlerColorChange.bind(this);\n    }\n    handlerColorButton(event) {\n        event.stopPropagation();\n        this.props.onColorChange(this.state.color);\n        this.setState({\n            color: ''\n        });\n    }\n    handlerColorChange(event) {\n        this.setState({\n            color: event.target.value\n        });\n    }\n    render() {\n        const margin_style = {\n            border: '#aaa',\n            borderRadius: '5px',\n            borderStyle: 'solid',\n            borderWidth: '2px',\n            padding: '15px'\n        };\n        return (React.createElement(reactstrap_1.Form, { style: margin_style },\n            React.createElement(reactstrap_1.FormGroup, { check: true, inline: true },\n                React.createElement(reactstrap_1.InputGroup, { inline: 'true', style: { margin: '5px' } },\n                    React.createElement(reactstrap_1.Input, { className: 'text-center', onChange: this.handlerColorChange, placeholder: \"color\" })),\n                React.createElement(reactstrap_1.Button, { color: \"primary\", onClick: this.handlerColorButton, style: { margin: '5px' } }, \"Apply\"))));\n    }\n}\nexports.ColorPanel = ColorPanel;\n\n\n//# sourceURL=webpack:///./src/components/Viewer/ControlPanel/SubPanels/ColorPanel.tsx?");

/***/ }),

/***/ "./src/components/Viewer/ControlPanel/SubPanels/SelectionPanel.tsx":
/*!*************************************************************************!*\
  !*** ./src/components/Viewer/ControlPanel/SubPanels/SelectionPanel.tsx ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst React = __webpack_require__(/*! react */ \"react\");\nconst reactstrap_1 = __webpack_require__(/*! reactstrap */ \"reactstrap\");\nconst index_1 = __webpack_require__(/*! ../../../../reducers/index */ \"./src/reducers/index.ts\");\nclass SelectionPanel extends React.Component {\n    constructor(props) {\n        super(props);\n        this.onSelectionChange = this.onSelectionChange.bind(this);\n    }\n    onSelectionChange(event) {\n        this.props.onSelectionChange(index_1.ESELECTION[event.target.value]);\n    }\n    render() {\n        const margin_style = {\n            border: '#aaa',\n            borderRadius: '5px',\n            borderStyle: 'solid',\n            borderWidth: '2px',\n            padding: '15px'\n        };\n        return (React.createElement(reactstrap_1.Form, { style: margin_style, className: 'text-center' },\n            React.createElement(reactstrap_1.FormGroup, { check: true, inline: true, style: { margin: '5px' } },\n                React.createElement(reactstrap_1.Input, { type: \"select\", onChange: this.onSelectionChange, name: \"select\", id: \"exampleSelect\" },\n                    React.createElement(\"option\", null, index_1.ESELECTION.NODE),\n                    React.createElement(\"option\", null, index_1.ESELECTION.EDGE),\n                    React.createElement(\"option\", null, index_1.ESELECTION.BOTH)))));\n    }\n}\nexports.SelectionPanel = SelectionPanel;\n\n\n//# sourceURL=webpack:///./src/components/Viewer/ControlPanel/SubPanels/SelectionPanel.tsx?");

/***/ }),

/***/ "./src/components/Viewer/ControlPanel/SubPanels/SizePanel.tsx":
/*!********************************************************************!*\
  !*** ./src/components/Viewer/ControlPanel/SubPanels/SizePanel.tsx ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst React = __webpack_require__(/*! react */ \"react\");\nconst reactstrap_1 = __webpack_require__(/*! reactstrap */ \"reactstrap\");\nclass SizePanel extends React.Component {\n    constructor(props) {\n        super(props);\n        this.handleSizeChange = this.handleSizeChange.bind(this);\n    }\n    handleSizeChange(event) {\n        this.props.onSizeChange(event.target.value);\n    }\n    render() {\n        const margin_style = {\n            border: '#aaa',\n            borderRadius: '5px',\n            borderStyle: 'solid',\n            borderWidth: '2px'\n        };\n        return (React.createElement(reactstrap_1.Form, { style: margin_style },\n            React.createElement(reactstrap_1.FormGroup, { className: 'text-center', inline: true },\n                React.createElement(reactstrap_1.Label, { style: { margin: '5px' } },\n                    \"Size: \",\n                    this.props.size),\n                React.createElement(reactstrap_1.Input, { type: \"range\", className: \"text-center\", onChange: this.handleSizeChange, min: \"1\", max: \"50\", step: \"1\", value: this.props.size }))));\n    }\n}\nexports.SizePanel = SizePanel;\n\n\n//# sourceURL=webpack:///./src/components/Viewer/ControlPanel/SubPanels/SizePanel.tsx?");

/***/ }),

/***/ "./src/components/Viewer/Cytoscape.css":
/*!*********************************************!*\
  !*** ./src/components/Viewer/Cytoscape.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader!./Cytoscape.css */ \"./node_modules/css-loader/index.js!./src/components/Viewer/Cytoscape.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/components/Viewer/Cytoscape.css?");

/***/ }),

/***/ "./src/components/Viewer/Cytoscape.tsx":
/*!*********************************************!*\
  !*** ./src/components/Viewer/Cytoscape.tsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst React = __webpack_require__(/*! react */ \"react\");\nconst cytoscape = __webpack_require__(/*! cytoscape */ \"cytoscape\");\nconst index_1 = __webpack_require__(/*! ../../reducers/index */ \"./src/reducers/index.ts\");\n__webpack_require__(/*! ./Cytoscape.css */ \"./src/components/Viewer/Cytoscape.css\");\nclass Cytoscape extends React.Component {\n    constructor(props) {\n        super(props);\n        this.node_size = 25;\n        this.edge_size = 5;\n        this.node_color = '#000';\n        this.edge_color = '#8a2be2';\n        this.size = 25;\n        this.state = { json_loaded: false };\n    }\n    componentDidUpdate() {\n        let selection;\n        switch (this.props.selection) {\n            case index_1.ESELECTION.NODE:\n                selection = 'node';\n                if (this.edge_size != this.props.size)\n                    this.node_size = this.props.size;\n                if (this.edge_color != this.props.color)\n                    this.node_color = this.props.color;\n                this.size = this.node_size;\n                break;\n            case index_1.ESELECTION.EDGE:\n                selection = 'edge';\n                if (this.node_size != this.props.size)\n                    this.edge_size = this.props.size;\n                if (this.node_color != this.props.color)\n                    this.edge_color = this.props.color;\n                this.size = this.edge_size;\n                break;\n            case index_1.ESELECTION.BOTH:\n                this.node_size = this.props.size;\n                this.node_color = this.props.color;\n                selection = 'node,edge';\n                this.edge_size = this.props.size;\n                this.edge_color = this.props.color;\n                this.size = this.node_size;\n                break;\n            default:\n                selection = 'node';\n        }\n        this.cy.style()\n            .selector(selection)\n            .style({\n            'width': this.size,\n            'height': this.size,\n            'background-color': this.node_color,\n            'line-color': this.edge_color,\n        })\n            .update();\n    }\n    componentDidMount() {\n        function fetchAsyncJson(_this) {\n            return __awaiter(this, void 0, void 0, function* () {\n                // Warning: The network file has to be serve before by a http server\n                // http-server is provided to help to the development thanks to `yarn serve` command\n                // In this case, the port used to serve is the 8080\n                let url = 'http://localhost:8080/data/network.json';\n                return fetch(url).then(response => {\n                    const json = response.json();\n                    _this.setState({ json_loaded: true });\n                    return json;\n                });\n            });\n        }\n        this.cy = cytoscape({\n            container: document.getElementById('cytoscape_container'),\n            elements: fetchAsyncJson(this),\n            style: [\n                {\n                    selector: 'node',\n                    style: {\n                        'background-color': '#000',\n                        'label': 'data(id)',\n                        'width': 25,\n                        'height': 25\n                    }\n                },\n                {\n                    selector: 'edge',\n                    style: {\n                        'width': 5,\n                        'line-color': '#8a2be2',\n                        'target-arrow-color': '#ccc',\n                        'target-arrow-shape': 'triangle'\n                    }\n                }\n            ],\n            layout: {\n                name: 'circle',\n                animate: true\n            }\n        });\n    }\n    render() {\n        return (React.createElement(\"div\", { className: 'container-fluid' },\n            this.state.json_loaded ? '' : React.createElement(\"h1\", { className: 'text-center' }, \"Loading...\"),\n            React.createElement(\"div\", { id: 'cytoscape_container' })));\n    }\n}\nexports.Cytoscape = Cytoscape;\n\n\n//# sourceURL=webpack:///./src/components/Viewer/Cytoscape.tsx?");

/***/ }),

/***/ "./src/components/Viewer/Viewer.tsx":
/*!******************************************!*\
  !*** ./src/components/Viewer/Viewer.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst React = __webpack_require__(/*! react */ \"react\");\nconst ControlPanel_1 = __webpack_require__(/*! ./ControlPanel/ControlPanel */ \"./src/components/Viewer/ControlPanel/ControlPanel.tsx\");\nconst CytoscapeContainer_1 = __webpack_require__(/*! ../../containers/CytoscapeContainer */ \"./src/containers/CytoscapeContainer.ts\");\nclass Viewer extends React.Component {\n    render() {\n        return (React.createElement(\"div\", { className: 'container-fluid' },\n            React.createElement(\"div\", { className: \"row\" },\n                React.createElement(ControlPanel_1.ControlPanel, null)),\n            React.createElement(\"div\", { className: \"row\" },\n                React.createElement(CytoscapeContainer_1.Cytoscape_container, null))));\n    }\n}\nexports.Viewer = Viewer;\n\n\n//# sourceURL=webpack:///./src/components/Viewer/Viewer.tsx?");

/***/ }),

/***/ "./src/containers/ColorPanelContainer.ts":
/*!***********************************************!*\
  !*** ./src/containers/ColorPanelContainer.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\nconst index_1 = __webpack_require__(/*! ../actions/index */ \"./src/actions/index.ts\");\nconst ColorPanel_1 = __webpack_require__(/*! ../components/Viewer/ControlPanel/SubPanels/ColorPanel */ \"./src/components/Viewer/ControlPanel/SubPanels/ColorPanel.tsx\");\nexports.mapStateToProps = (state) => {\n    return { color: state.color };\n};\nexports.mapDispatchToProps = {\n    onColorChange: index_1.change_color\n};\nexports.ColorPanelContainer = react_redux_1.connect(exports.mapStateToProps, exports.mapDispatchToProps)(ColorPanel_1.ColorPanel);\n\n\n//# sourceURL=webpack:///./src/containers/ColorPanelContainer.ts?");

/***/ }),

/***/ "./src/containers/CytoscapeContainer.ts":
/*!**********************************************!*\
  !*** ./src/containers/CytoscapeContainer.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\nconst Cytoscape_1 = __webpack_require__(/*! ../components/Viewer/Cytoscape */ \"./src/components/Viewer/Cytoscape.tsx\");\nexports.mapStateToProps = (state) => {\n    return { size: state.size, color: state.color, selection: state.selection };\n};\nexports.Cytoscape_container = react_redux_1.connect(exports.mapStateToProps, null)(Cytoscape_1.Cytoscape);\n\n\n//# sourceURL=webpack:///./src/containers/CytoscapeContainer.ts?");

/***/ }),

/***/ "./src/containers/SelectionPanelContainer.ts":
/*!***************************************************!*\
  !*** ./src/containers/SelectionPanelContainer.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\nconst index_1 = __webpack_require__(/*! ../actions/index */ \"./src/actions/index.ts\");\nconst SelectionPanel_1 = __webpack_require__(/*! ../components/Viewer/ControlPanel/SubPanels/SelectionPanel */ \"./src/components/Viewer/ControlPanel/SubPanels/SelectionPanel.tsx\");\nexports.mapStateToProps = (state) => {\n    return { selection: state.selection };\n};\nexports.mapDispatchToProps = {\n    onSelectionChange: index_1.change_selection\n};\nexports.SelectionPanelContainer = react_redux_1.connect(exports.mapStateToProps, exports.mapDispatchToProps)(SelectionPanel_1.SelectionPanel);\n\n\n//# sourceURL=webpack:///./src/containers/SelectionPanelContainer.ts?");

/***/ }),

/***/ "./src/containers/SizePanelContainer.ts":
/*!**********************************************!*\
  !*** ./src/containers/SizePanelContainer.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\nconst index_1 = __webpack_require__(/*! ../actions/index */ \"./src/actions/index.ts\");\nconst SizePanel_1 = __webpack_require__(/*! ../components/Viewer/ControlPanel/SubPanels/SizePanel */ \"./src/components/Viewer/ControlPanel/SubPanels/SizePanel.tsx\");\nexports.mapStateToProps = (state) => {\n    return { size: state.size };\n};\nexports.mapDispatchToProps = {\n    onSizeChange: index_1.change_size\n};\nexports.SizePanelContainer = react_redux_1.connect(exports.mapStateToProps, exports.mapDispatchToProps)(SizePanel_1.SizePanel);\n\n\n//# sourceURL=webpack:///./src/containers/SizePanelContainer.ts?");

/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst React = __webpack_require__(/*! react */ \"react\");\nconst ReactDOM = __webpack_require__(/*! react-dom */ \"react-dom\");\nconst react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\nconst redux_1 = __webpack_require__(/*! redux */ \"redux\");\nconst Frontend_1 = __webpack_require__(/*! ./components/Frontend */ \"./src/components/Frontend.tsx\");\nconst index_1 = __webpack_require__(/*! ./reducers/index */ \"./src/reducers/index.ts\");\nconst root_reducers = redux_1.combineReducers({\n    size: index_1.size_reducer,\n    color: index_1.color_reducer,\n    selection: index_1.selection_reducer\n});\nconst store = redux_1.createStore(root_reducers);\nconst rootEl = document.getElementById('frontend_container');\nReactDOM.render(React.createElement(react_redux_1.Provider, { store: store },\n    React.createElement(Frontend_1.Frontend, null)), rootEl);\n\n\n//# sourceURL=webpack:///./src/index.tsx?");

/***/ }),

/***/ "./src/reducers/color_reducer.ts":
/*!***************************************!*\
  !*** ./src/reducers/color_reducer.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst color_action_1 = __webpack_require__(/*! ../actions/color_action */ \"./src/actions/color_action.ts\");\nexports.DEFAULT_COLOR = '#000000';\nexports.color_reducer = (state = exports.DEFAULT_COLOR, action) => {\n    switch (action.type) {\n        case color_action_1.CHANGED_COLOR:\n            return action.color;\n        default:\n            return state;\n    }\n};\n\n\n//# sourceURL=webpack:///./src/reducers/color_reducer.ts?");

/***/ }),

/***/ "./src/reducers/index.ts":
/*!*******************************!*\
  !*** ./src/reducers/index.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst redux_1 = __webpack_require__(/*! redux */ \"redux\");\nconst size_reducer_1 = __webpack_require__(/*! ./size_reducer */ \"./src/reducers/size_reducer.ts\");\nexports.size_reducer = size_reducer_1.size_reducer;\nexports.DEFAULT_SIZE = size_reducer_1.DEFAULT_SIZE;\nconst color_reducer_1 = __webpack_require__(/*! ./color_reducer */ \"./src/reducers/color_reducer.ts\");\nexports.color_reducer = color_reducer_1.color_reducer;\nexports.DEFAULT_COLOR = color_reducer_1.DEFAULT_COLOR;\nconst selection_reducer_1 = __webpack_require__(/*! ./selection_reducer */ \"./src/reducers/selection_reducer.ts\");\nexports.selection_reducer = selection_reducer_1.selection_reducer;\nexports.DEFAULT_SELECTION = selection_reducer_1.DEFAULT_SELECTION;\nexports.ESELECTION = selection_reducer_1.ESELECTION;\nexports.root_reducers = redux_1.combineReducers({\n    size: size_reducer_1.size_reducer,\n    color: color_reducer_1.color_reducer,\n    selection: selection_reducer_1.selection_reducer\n});\n\n\n//# sourceURL=webpack:///./src/reducers/index.ts?");

/***/ }),

/***/ "./src/reducers/selection_reducer.ts":
/*!*******************************************!*\
  !*** ./src/reducers/selection_reducer.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst index_1 = __webpack_require__(/*! ../actions/index */ \"./src/actions/index.ts\");\nvar ESELECTION;\n(function (ESELECTION) {\n    ESELECTION[\"NODE\"] = \"NODE\";\n    ESELECTION[\"EDGE\"] = \"EDGE\";\n    ESELECTION[\"BOTH\"] = \"BOTH\";\n})(ESELECTION = exports.ESELECTION || (exports.ESELECTION = {}));\nexports.DEFAULT_SELECTION = ESELECTION.NODE;\nexports.selection_reducer = (state = exports.DEFAULT_SELECTION, action) => {\n    switch (action.type) {\n        case index_1.CHANGED_SELECTION:\n            return action.selection;\n        default:\n            return state;\n    }\n};\n\n\n//# sourceURL=webpack:///./src/reducers/selection_reducer.ts?");

/***/ }),

/***/ "./src/reducers/size_reducer.ts":
/*!**************************************!*\
  !*** ./src/reducers/size_reducer.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst index_1 = __webpack_require__(/*! ../actions/index */ \"./src/actions/index.ts\");\nexports.DEFAULT_SIZE = 25;\nexports.size_reducer = (state = exports.DEFAULT_SIZE, action) => {\n    switch (action.type) {\n        case index_1.CHANGED_SIZE:\n            return action.size;\n        default:\n            return state;\n    }\n};\n\n\n//# sourceURL=webpack:///./src/reducers/size_reducer.ts?");

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