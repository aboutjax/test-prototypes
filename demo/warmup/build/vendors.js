(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~main"],{

/***/ "../../../../../../../Applications/Framer X.app/Contents/Resources/Server/lib/framer-package-loader.js!./node_modules/@framer/framer.device-skin-apple-ipad-air-silver/build/index.js":
/*!************************************************************************************************************************************************************************!*\
  !*** /Applications/Framer X.app/Contents/Resources/Server/lib/framer-package-loader.js!./node_modules/@framer/framer.device-skin-apple-ipad-air-silver/build/index.js ***!
  \************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class DeviceSkin {
    constructor() {
        this.image = "device.png";
        this.imageWidth = 1856;
        this.imageHeight = 2608;
        this.padding = 40;
        this.background = "black";
    }
}
exports.DeviceSkin = DeviceSkin;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ "../../../../../../../Applications/Framer X.app/Contents/Resources/Server/lib/framer-package-loader.js!./node_modules/@framer/framer.device-skin-apple-ipad-air-space-gray/build/index.js":
/*!****************************************************************************************************************************************************************************!*\
  !*** /Applications/Framer X.app/Contents/Resources/Server/lib/framer-package-loader.js!./node_modules/@framer/framer.device-skin-apple-ipad-air-space-gray/build/index.js ***!
  \****************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class DeviceSkin {
    constructor() {
        this.image = "device.png";
        this.imageWidth = 1856;
        this.imageHeight = 2608;
        this.padding = 40;
        this.background = "black";
    }
}
exports.DeviceSkin = DeviceSkin;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ "../../../../../../../Applications/Framer X.app/Contents/Resources/Server/lib/framer-package-loader.js!./node_modules/@framer/steveruizok.fontloader/dist/index.js":
/*!*****************************************************************************************************************************************************!*\
  !*** /Applications/Framer X.app/Contents/Resources/Server/lib/framer-package-loader.js!./node_modules/@framer/steveruizok.fontloader/dist/index.js ***!
  \*****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory(__webpack_require__(/*! framer */ "framer"), __webpack_require__(/*! react */ "react"));
	else { var i, a; }
})(window, function(__WEBPACK_EXTERNAL_MODULE_framer__, __WEBPACK_EXTERNAL_MODULE_react__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 		try { modules[moduleId].call(module.exports, module, module.exports, __webpack_require__); } catch (error) { module.exports = { error } }
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
/******/ 	// asset url
/******/ 	var __module_i = eval("typeof module !== 'undefined' ? module.i : ''");
/******/ 	var __framer_package = (/(node_modules[/].*)[/](build|dist).index.js/.exec(__module_i) || [])[1]
/******/ 	function __asset_url__(src) { return __WEBPACK_EXTERNAL_MODULE_framer__.serverURL(__framer_package, src) };
/******/ 	installedModules['framer/resource'] = { i: 'framer/resource', l: true, exports: { url: __asset_url__ } };
/******/
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./package.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./code sync recursive \\.(t|j)s(x?)|\\.css$":
/*!***************************************!*\
  !*** ./code sync \.(t|j)s(x?)|\.css$ ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./LocalFontLoader.tsx": "./code/LocalFontLoader.tsx",
	"./canvas.tsx": "./code/canvas.tsx"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./code sync recursive \\.(t|j)s(x?)|\\.css$";

/***/ }),

/***/ "./code/LocalFontLoader.tsx":
/*!**********************************!*\
  !*** ./code/LocalFontLoader.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9jYWxGb250TG9hZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY29kZS9Mb2NhbEZvbnRMb2FkZXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0JBQThCO0FBQzlCLG1DQUE2RDtBQWdCN0QsTUFBYSxnQkFBaUIsU0FBUSxLQUFLLENBQUMsU0FBZ0I7SUFBNUQ7O1FBMENDLHNCQUFpQixHQUFHLEdBQUcsRUFBRTs7WUFDeEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsRUFBRTtnQkFDM0IsTUFBTSxDQUFDLGFBQWEsQ0FBQyxHQUFHLEVBQUUsQ0FBQTthQUMxQjtZQUNELElBQUksTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEVBQUU7Z0JBQ3pDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBO2FBQzFCO2lCQUFNO2dCQUNOLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQTthQUNiO1NBQ0QsQ0FBQTtRQU1ELFdBQU0sR0FBRyxHQUFHLEVBQUU7O1lBQ2IsTUFBTSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQ2pDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUNiLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUE7WUFDbkQsR0FBRyxDQUFDLElBQUksR0FBRyxVQUFVLENBQUE7WUFDckIsR0FBRyxDQUFDLEVBQUUsR0FBRyxjQUFjLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUE7WUFDdkMsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFBO1lBQzFELEdBQUcsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFBO1lBRS9C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

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
class CustomFontLoader extends React.Component {
    constructor() {
        super(...arguments);
        this.componentDidMount = () => {
            window["__checkBudget__"]();
            if (!window['customFonts']) {
                window['customFonts'] = {};
            }
            if (window['customFonts'][this.props.id]) {
                this.updateCSS(this.props);
            }
            else {
                this.addCSS();
            }
        };
        this.addCSS = () => {
            window["__checkBudget__"]();
            const css = (window['customFonts'][this.props.id] = this.cssNode = document.createElement('style'));
            css.type = 'text/css';
            css.id = 'customFonts ' + this.props.id;
            this.styleNode = document.createTextNode(this.getStyles());
            css.appendChild(this.styleNode);
            const head = document.getElementsByTagName('head')[0];
            head.appendChild(window['customFonts'][this.props.id]);
        };
        this.updateCSS = (props) => {
            window["__checkBudget__"]();
            if (!this.styleNode) {
                return;
            }
            window['customFonts'][props.id].removeChild(this.styleNode);
            this.styleNode = document.createTextNode(this.getStyles());
            window['customFonts'][props.id].appendChild(this.styleNode);
        };
        this.removeCSS = () => {
            window["__checkBudget__"]();
            if (window['customFonts'][this.props.id] &&
                window['customFonts'][this.props.id] === this.cssNode) {
                const head = document.getElementsByTagName('head')[0];
                head.removeChild(window['customFonts'][this.props.id]);
            }
        };
        this.getStyles = () => {
            window["__checkBudget__"]();
            const { fontName, url, source, fontFile, fontWeight } = this.props;
            console.log(source);
            if (source == 'webfont') {
                return `
@import url('${url}');`;
            }
            else {
                return `
@font-face {
  font-family: ${fontName};
  font-weight: ${fontWeight || 100};
  src: url('${source == 'url' ? url : fontFile}');
};`;
            }
        };
    }
    componentDidUpdate() {
        window["__checkBudget__"]();
        this.updateCSS(this.props);
    }
    render() {
        window["__checkBudget__"]();
        const { fontName, fontWeight } = this.props;
        return (React.createElement("div", { style: Object.assign({}, style) },
            React.createElement("div", null,
                React.createElement("h3", { key: `${fontName}_${fontWeight}_example`, style: {
                        fontFamily: fontName,
                        fontWeight: fontWeight,
                        color: 'rgba(0, 153, 255, 1.000)',
                    } }, "Custom Font Loader"),
                React.createElement("ol", { style: { margin: 'none', padding: 'none' } },
                    React.createElement("li", null,
                        "Select a local font file using the ",
                        React.createElement("b", null, "File"),
                        " control."),
                    ' ',
                    React.createElement("li", null,
                        "Enter the font's name using the ",
                        React.createElement("b", null, "Name"),
                        " control."),
                    ' ',
                    React.createElement("li", null,
                        "Enter the font's weight using the ",
                        React.createElement("b", null, "Weight"),
                        " control."),
                    ' ',
                    React.createElement("li", null,
                        "Place this component somewhere in the ",
                        React.createElement("b", null, "first"),
                        " Frame of your prototype."),
                    ' '),
                React.createElement("p", null,
                    "Feel free to ",
                    React.createElement("b", null, "hide"),
                    " this component in the Preview."))));
    }
}
CustomFontLoader.propertyControls = {
    source: {
        title: 'Source',
        type: framer_1.ControlType.SegmentedEnum,
        options: ['webfont', 'url', 'file'],
        optionTitles: ['Web', 'URL', 'File'],
        defaultValue: 'file',
    },
    fontFile: {
        title: 'File',
        type: framer_1.ControlType.File,
        allowedFileTypes: ['ttf', 'otf', 'woff'],
        hidden: ({ source }) => source !== 'file',
    },
    url: {
        title: 'URL',
        type: framer_1.ControlType.String,
        defaultValue: 'https://',
        hidden: ({ source }) => source === 'file',
    },
    fontName: {
        title: 'Name',
        type: framer_1.ControlType.String,
        defaultValue: 'MyFont',
    },
    fontWeight: {
        title: 'Weight',
        type: framer_1.ControlType.String,
        defaultValue: 'normal',
    },
};
CustomFontLoader.defaultProps = {
    fontName: 'MyFont',
    height: 220,
    width: 240,
};
exports.CustomFontLoader = CustomFontLoader;
const style = {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    color: '#8855FF',
    background: 'rgba(136, 85, 255, 0.1)',
    overflow: 'hidden',
    padding: 16,
};
exports.__info__ = [{ name: "CustomFontLoader", children: false, type: "component" }];


/***/ }),

/***/ "./code/canvas.tsx":
/*!*************************!*\
  !*** ./code/canvas.tsx ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// WARNING: this file is auto generated, any changes will be lost
const framer_1 = __webpack_require__(/*! framer */ "framer");
const canvas = framer_1.CanvasStore.shared({"children":[]});


/***/ }),

/***/ "./package.js":
/*!********************!*\
  !*** ./package.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// The template for the dynamic webpack entry. Be aware of the variables

const packageJson = __webpack_require__(/*! ./package.json */ "./package.json")

const package = {
    packageJson,
    sourceModules: {},
    dependencies: {},
}

// This is a special webpack thing that watches the whole directory
// https://github.com/webpack/docs/wiki/context
const ctx = __webpack_require__("./code sync recursive \\.(t|j)s(x?)|\\.css$")

ctx.keys().forEach(key => {
    package.sourceModules[key] = () => ctx(key)
})

// The packages are passed in through a template
const packages = {}

                packages["framer"] = () => {
                    var package = {}
                    try {
                        package = __webpack_require__(/*! framer */ "framer")
                    } catch (e) {
                        console.log(e)
                    }
                    package.__framer__ = package.__framer__ || {}
                    package.__framer__.packageJson = {"name":"framer","version":"1.0.4","main":"build/framer.js","author":"Framer","license":"MIT","scripts":{"coverage":"jest --coverage","test":"jest","watch":"jest --watch"},"devDependencies":{"@microsoft/api-documenter":"^1.5.47","@microsoft/api-extractor":"7.0.13","@types/chalk":"^2.2.0","@types/draft-js":"0.10.19","@types/enzyme":"^3.1.10","@types/enzyme-adapter-react-16":"^1.0.3","@types/hsluv":"https://github.com/framer/typed_hsluv#bump","@types/jest":"^23.0.0","@types/jest-diff":"^20.0.0","@types/jest-matcher-utils":"^21.0.1","@types/node":"^10.12.9","@types/react":"16.8.4","@types/react-dom":"^16.8","cache-loader":"^1.2.2","chalk":"^2.4.1","convert-tsconfig-paths-to-webpack-aliases":"^0.9.2","css.escape":"^1.5.1","draft-js":"0.10.4","enzyme":"^3.9.0","enzyme-adapter-react-16":"^1.9.1","eventemitter3":"^3.1.0","fork-ts-checker-webpack-plugin":"^0.4.1","framer-motion":"^0.16.11","hoist-non-react-statics":"^2.5.0","hsluv":"^0.0.3","immutable":"^3.8.2","jest":"^23.1.0","jest-diff":"^23.6.0","jest-dom":"^3.1.3","jest-junit":"^5.2.0","modclean":"^3.0.0-beta.1","progress-bar-webpack-plugin":"^1.11.0","raf":"^3.4.0","react":"^16.8","react-dev-utils":"^5.0.1","react-dom":"^16.8","react-testing-library":"^6.0.0","resize-observer-polyfill":"^1.5.1","semver":"^5.6.0","ts-jest":"^23.10.5","ts-loader":"^4.1.0","tslint":"^5.12.1","tslint-react-hooks":"^1.1.0","typescript":"3.3","watch":"^1.0.2","webpack":"^4.4.1","webpack-cli":"^3.1.2","webpack-dev-server":"^3.1.10","xcssmatrix":"^0.2.2"},"peerDependencies":{"react":"^16.8.2","react-dom":"^16.8.2"},"tsdoc":{"tsdocFlavor":"AEDoc"},"framer":{"components":[{"name":"Scroll","children":true,"properties":[{"key":"direction","title":"Direction","kind":"enum","options":["horizontal","vertical","both"]}]},{"name":"Page"},{"name":"Stack"},{"name":"FramerAppleWatch38","type":"device"},{"name":"FramerAppleWatch42","type":"device"},{"name":"FramerSonySmartWatch","type":"device"},{"name":"FramerAppleIPhoneSE","type":"device"},{"name":"FramerAppleIPhone8","type":"device"},{"name":"FramerAppleIPhone8Plus","type":"device"},{"name":"FramerAppleIPhoneXS","type":"device"},{"name":"FramerAppleIPhoneXR","type":"device"},{"name":"FramerAppleIPhoneXSMax","type":"device"},{"name":"FramerGooglePixel2","type":"device"},{"name":"FramerGooglePixel2XL","type":"device"},{"name":"FramerGooglePixel3","type":"device"},{"name":"FramerGooglePixel3XL","type":"device"},{"name":"FramerSamsungNote5","type":"device"},{"name":"FramerSamsungGalaxyS9","type":"device"},{"name":"FramerAppleIPadAir","type":"device"},{"name":"FramerAppleIPadMini","type":"device"},{"name":"FramerAppleIPadPro","type":"device"},{"name":"FramerGoogleNexusTablet","type":"device"},{"name":"FramerMicrosoftSurfacePro3","type":"device"},{"name":"FramerMicrosoftSurfacePro4","type":"device"},{"name":"FramerAppleIMac","type":"device"},{"name":"FramerAppleThunderboltDisplay","type":"device"},{"name":"FramerAppleMacBook","type":"device"},{"name":"FramerAppleMacBookAir","type":"device"},{"name":"FramerAppleMacBookPro","type":"device"},{"name":"FramerDellXPS","type":"device"},{"name":"FramerMicrosoftSurfaceBook","type":"device"},{"name":"FramerSonyW850C","type":"device"},{"name":"FramerStoreArtwork","type":"device"},{"name":"FramerStoreIcon","type":"device"}]},"dependencies":{"style-value-types":"^3.1.4"}}
                    return package
                }

package.dependencies = packages

exports.__framer__ = package


/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: main, license, devDependencies, peerDependencies, framer, author, name, version, default */
/***/ (function(module) {

module.exports = {"main":"dist/index.js","license":"MIT","devDependencies":{"@types/react":"^16.4.16"},"peerDependencies":{"framer":"^0.9.6 || ^0.10 || ^1","react":"^16.3.0","react-dom":"^16.3.0"},"framer":{"id":"afd1b765-e12c-49e6-85ee-4eccabbcc59f","displayName":"Custom Font Loader"},"author":"Steve Ruiz","name":"@framer/steveruizok.fontloader","version":"1.6.0"};

/***/ }),

/***/ "framer":
/*!******************************************************************************************!*\
  !*** external {"root":"Framer","commonjs2":"framer","commonjs":"framer","amd":"framer"} ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_framer__;

/***/ }),

/***/ "react":
/*!**************************************************************************************!*\
  !*** external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"} ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

/******/ });
});


/***/ }),

/***/ "../../../../../../../Applications/Framer X.app/Contents/Resources/Server/node_modules/css-loader/dist/runtime/api.js":
/*!********************************************************************************************************!*\
  !*** /Applications/Framer X.app/Contents/Resources/Server/node_modules/css-loader/dist/runtime/api.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
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
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),

/***/ "../../../../../../../Applications/Framer X.app/Contents/Resources/Server/node_modules/events/events.js":
/*!******************************************************************************************!*\
  !*** /Applications/Framer X.app/Contents/Resources/Server/node_modules/events/events.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

function EventEmitter() {
  this._events = this._events || {};
  this._maxListeners = this._maxListeners || undefined;
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
EventEmitter.defaultMaxListeners = 10;

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function(n) {
  if (!isNumber(n) || n < 0 || isNaN(n))
    throw TypeError('n must be a positive number');
  this._maxListeners = n;
  return this;
};

EventEmitter.prototype.emit = function(type) {
  var er, handler, len, args, i, listeners;

  if (!this._events)
    this._events = {};

  // If there is no 'error' event listener then throw.
  if (type === 'error') {
    if (!this._events.error ||
        (isObject(this._events.error) && !this._events.error.length)) {
      er = arguments[1];
      if (er instanceof Error) {
        throw er; // Unhandled 'error' event
      } else {
        // At least give some kind of context to the user
        var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
        err.context = er;
        throw err;
      }
    }
  }

  handler = this._events[type];

  if (isUndefined(handler))
    return false;

  if (isFunction(handler)) {
    switch (arguments.length) {
      // fast cases
      case 1:
        handler.call(this);
        break;
      case 2:
        handler.call(this, arguments[1]);
        break;
      case 3:
        handler.call(this, arguments[1], arguments[2]);
        break;
      // slower
      default:
        args = Array.prototype.slice.call(arguments, 1);
        handler.apply(this, args);
    }
  } else if (isObject(handler)) {
    args = Array.prototype.slice.call(arguments, 1);
    listeners = handler.slice();
    len = listeners.length;
    for (i = 0; i < len; i++)
      listeners[i].apply(this, args);
  }

  return true;
};

EventEmitter.prototype.addListener = function(type, listener) {
  var m;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events)
    this._events = {};

  // To avoid recursion in the case that type === "newListener"! Before
  // adding it to the listeners, first emit "newListener".
  if (this._events.newListener)
    this.emit('newListener', type,
              isFunction(listener.listener) ?
              listener.listener : listener);

  if (!this._events[type])
    // Optimize the case of one listener. Don't need the extra array object.
    this._events[type] = listener;
  else if (isObject(this._events[type]))
    // If we've already got an array, just append.
    this._events[type].push(listener);
  else
    // Adding the second element, need to change to array.
    this._events[type] = [this._events[type], listener];

  // Check for listener leak
  if (isObject(this._events[type]) && !this._events[type].warned) {
    if (!isUndefined(this._maxListeners)) {
      m = this._maxListeners;
    } else {
      m = EventEmitter.defaultMaxListeners;
    }

    if (m && m > 0 && this._events[type].length > m) {
      this._events[type].warned = true;
      console.error('(node) warning: possible EventEmitter memory ' +
                    'leak detected. %d listeners added. ' +
                    'Use emitter.setMaxListeners() to increase limit.',
                    this._events[type].length);
      if (typeof console.trace === 'function') {
        // not supported in IE 10
        console.trace();
      }
    }
  }

  return this;
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.once = function(type, listener) {
  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  var fired = false;

  function g() {
    this.removeListener(type, g);

    if (!fired) {
      fired = true;
      listener.apply(this, arguments);
    }
  }

  g.listener = listener;
  this.on(type, g);

  return this;
};

// emits a 'removeListener' event iff the listener was removed
EventEmitter.prototype.removeListener = function(type, listener) {
  var list, position, length, i;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events || !this._events[type])
    return this;

  list = this._events[type];
  length = list.length;
  position = -1;

  if (list === listener ||
      (isFunction(list.listener) && list.listener === listener)) {
    delete this._events[type];
    if (this._events.removeListener)
      this.emit('removeListener', type, listener);

  } else if (isObject(list)) {
    for (i = length; i-- > 0;) {
      if (list[i] === listener ||
          (list[i].listener && list[i].listener === listener)) {
        position = i;
        break;
      }
    }

    if (position < 0)
      return this;

    if (list.length === 1) {
      list.length = 0;
      delete this._events[type];
    } else {
      list.splice(position, 1);
    }

    if (this._events.removeListener)
      this.emit('removeListener', type, listener);
  }

  return this;
};

EventEmitter.prototype.removeAllListeners = function(type) {
  var key, listeners;

  if (!this._events)
    return this;

  // not listening for removeListener, no need to emit
  if (!this._events.removeListener) {
    if (arguments.length === 0)
      this._events = {};
    else if (this._events[type])
      delete this._events[type];
    return this;
  }

  // emit removeListener for all listeners on all events
  if (arguments.length === 0) {
    for (key in this._events) {
      if (key === 'removeListener') continue;
      this.removeAllListeners(key);
    }
    this.removeAllListeners('removeListener');
    this._events = {};
    return this;
  }

  listeners = this._events[type];

  if (isFunction(listeners)) {
    this.removeListener(type, listeners);
  } else if (listeners) {
    // LIFO order
    while (listeners.length)
      this.removeListener(type, listeners[listeners.length - 1]);
  }
  delete this._events[type];

  return this;
};

EventEmitter.prototype.listeners = function(type) {
  var ret;
  if (!this._events || !this._events[type])
    ret = [];
  else if (isFunction(this._events[type]))
    ret = [this._events[type]];
  else
    ret = this._events[type].slice();
  return ret;
};

EventEmitter.prototype.listenerCount = function(type) {
  if (this._events) {
    var evlistener = this._events[type];

    if (isFunction(evlistener))
      return 1;
    else if (evlistener)
      return evlistener.length;
  }
  return 0;
};

EventEmitter.listenerCount = function(emitter, type) {
  return emitter.listenerCount(type);
};

function isFunction(arg) {
  return typeof arg === 'function';
}

function isNumber(arg) {
  return typeof arg === 'number';
}

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}

function isUndefined(arg) {
  return arg === void 0;
}


/***/ }),

/***/ "../../../../../../../Applications/Framer X.app/Contents/Resources/Server/node_modules/style-loader/lib/addStyles.js":
/*!*******************************************************************************************************!*\
  !*** /Applications/Framer X.app/Contents/Resources/Server/node_modules/style-loader/lib/addStyles.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
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

var	fixUrls = __webpack_require__(/*! ./urls */ "../../../../../../../Applications/Framer X.app/Contents/Resources/Server/node_modules/style-loader/lib/urls.js");

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

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
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

/***/ "../../../../../../../Applications/Framer X.app/Contents/Resources/Server/node_modules/style-loader/lib/urls.js":
/*!**************************************************************************************************!*\
  !*** /Applications/Framer X.app/Contents/Resources/Server/node_modules/style-loader/lib/urls.js ***!
  \**************************************************************************************************/
/*! no static exports found */
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


/***/ }),

/***/ "./designDependencies.js":
/*!*******************************!*\
  !*** ./designDependencies.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

const designs = {}
designs["@framer/steveruizok.fontloader"] = {
  "root" : {
    "__class" : "RootNode",
    "children" : [
      {
        "__class" : "FrameNode",
        "aspectRatio" : null,
        "blendingEnabled" : 0,
        "blendingMode" : "normal",
        "bottom" : null,
        "centerAnchorX" : 0,
        "centerAnchorY" : 0,
        "children" : [
          {
            "__class" : "CodeComponentNode",
            "aspectRatio" : null,
            "blur" : 12,
            "blurEnabled" : 0,
            "blurType" : "layer",
            "borderBottom" : 1,
            "borderColor" : "#222",
            "borderEnabled" : 0,
            "borderLeft" : 1,
            "borderPerSide" : false,
            "borderRight" : 1,
            "borderStyle" : "solid",
            "borderTop" : 1,
            "borderWidth" : 1,
            "bottom" : null,
            "boxShadows" : [

            ],
            "brightness" : 100,
            "brightnessEnabled" : 0,
            "centerAnchorX" : 0.50090252707581229,
            "centerAnchorY" : 0.39184397163120566,
            "children" : [

            ],
            "clip" : true,
            "codeComponentIdentifier" : ".\/LocalFontLoader.tsx_CustomFontLoader",
            "codeComponentProps" : {
              "fontFile" : "design\/assets\/Px437_IBM_VGA8.ttf",
              "fontName" : "Px437_IBM_VGA8",
              "fontWeight" : "normal",
              "source" : "file",
              "url" : "MyFont"
            },
            "codeOverrideEnabled" : false,
            "constraintsLocked" : false,
            "contrast" : 100,
            "contrastEnabled" : 0,
            "exportOptions" : [

            ],
            "fillColor" : "rgba(255,255,255,1)",
            "fillEnabled" : false,
            "fillGradient" : {
              "__class" : "LinearGradient",
              "alpha" : 1,
              "angle" : 0,
              "end" : "rgba(0,0,0,0)",
              "start" : "black"
            },
            "fillImage" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillType" : "color",
            "grayscale" : 0,
            "grayScaleEnabled" : 0,
            "height" : 266,
            "heightType" : 0,
            "hueRotate" : 0,
            "hueRotateEnabled" : 0,
            "id" : "qxCaGApeE",
            "intrinsicHeight" : null,
            "intrinsicWidth" : null,
            "invert" : 0,
            "invertEnabled" : 0,
            "left" : 24,
            "locked" : false,
            "name" : null,
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "YHpCGTqSK",
            "radius" : 0,
            "radiusBottomLeft" : 0,
            "radiusBottomRight" : 0,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 0,
            "radiusTopRight" : 0,
            "right" : 23,
            "rotation" : 0,
            "saturate" : 100,
            "saturateEnabled" : 0,
            "sepia" : 0,
            "sepiaEnabled" : 0,
            "top" : 88,
            "visible" : true,
            "width" : 507,
            "widthType" : 0
          }
        ],
        "clip" : true,
        "codeOverrideEnabled" : false,
        "constraintsLocked" : false,
        "deviceType" : null,
        "exportOptions" : [

        ],
        "fillColor" : "white",
        "fillEnabled" : true,
        "fillGradient" : {
          "__class" : "LinearGradient",
          "alpha" : 1,
          "angle" : 0,
          "end" : "rgba(0,0,0,0)",
          "start" : "black"
        },
        "fillImage" : null,
        "fillImagePixelHeight" : null,
        "fillImagePixelWidth" : null,
        "fillImageResize" : "fill",
        "fillType" : "color",
        "height" : 564,
        "heightType" : 0,
        "id" : "YHpCGTqSK",
        "intrinsicHeight" : null,
        "intrinsicWidth" : null,
        "isExternalMaster" : null,
        "isMaster" : false,
        "isTarget" : false,
        "left" : 243,
        "locked" : false,
        "name" : null,
        "navigationTarget" : "Mo0GxMXiK",
        "navigationTransition" : "push",
        "navigationTransitionBackdropColor" : "rgba(4,4,15,.4)",
        "navigationTransitionDirection" : "left",
        "opacity" : 1,
        "originalid" : null,
        "parentid" : "mByHJurWB",
        "previewSettings" : null,
        "radius" : 0,
        "radiusBottomLeft" : 0,
        "radiusBottomRight" : 0,
        "radiusIsRelative" : false,
        "radiusPerCorner" : false,
        "radiusTopLeft" : 0,
        "radiusTopRight" : 0,
        "replicaInfo" : null,
        "right" : null,
        "rotation" : 0,
        "top" : -22,
        "visible" : true,
        "width" : 554,
        "widthType" : 0
      },
      {
        "__class" : "FrameNode",
        "aspectRatio" : null,
        "blendingEnabled" : 0,
        "blendingMode" : "normal",
        "bottom" : null,
        "centerAnchorX" : 0,
        "centerAnchorY" : 0,
        "children" : [
          {
            "__class" : "TextNode",
            "autoSize" : true,
            "bottom" : null,
            "centerAnchorX" : 0.49914675767918087,
            "centerAnchorY" : 0.18173758865248227,
            "codeOverrideEnabled" : false,
            "constraintsLocked" : false,
            "exportOptions" : [

            ],
            "height" : 19,
            "heightType" : 0,
            "id" : "rkMQkBBte",
            "isTarget" : false,
            "left" : null,
            "locked" : false,
            "name" : null,
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "Mo0GxMXiK",
            "right" : null,
            "rotation" : 0,
            "styledText" : {
              "__class" : "StyledTextDraft",
              "blocks" : [
                {
                  "data" : {
                    "emptyStyle" : [
                      "COLOR:rgb(0, 0, 0)",
                      "SIZE:16",
                      "LETTERSPACING:0",
                      "LINEHEIGHT:1.2",
                      "FONT:Px437_IBM_VGA8"
                    ]
                  },
                  "depth" : 0,
                  "entityRanges" : [

                  ],
                  "inlineStyleRanges" : [
                    {
                      "length" : 27,
                      "offset" : 0,
                      "style" : "COLOR:rgb(0, 0, 0)"
                    },
                    {
                      "length" : 27,
                      "offset" : 0,
                      "style" : "SIZE:16"
                    },
                    {
                      "length" : 27,
                      "offset" : 0,
                      "style" : "LETTERSPACING:0"
                    },
                    {
                      "length" : 27,
                      "offset" : 0,
                      "style" : "LINEHEIGHT:1.2"
                    },
                    {
                      "length" : 27,
                      "offset" : 0,
                      "style" : "FONT:Px437_IBM_VGA8"
                    }
                  ],
                  "key" : "14glt",
                  "text" : "This text should look okay.",
                  "type" : "unstyled"
                }
              ],
              "cached" : {
                "html" : "<div data-offset-key=\"14glt-0-0\" class=\"public-DraftStyleDefault-block public-DraftStyleDefault-ltr\"><span data-offset-key=\"14glt-0-0\" style=\"tab-size:4;font-weight:400;font-family:&quot;Px437_IBM_VGA8&quot;, &quot;Px437 IBM VGA8&quot;, serif;-webkit-text-fill-color:rgb(0, 0, 0);font-size:16px;letter-spacing:0px;line-height:1.2\"><span data-text=\"true\">This text should look okay.<\/span><\/span><\/div>",
                "os" : "10_14",
                "size" : {
                  "height" : 19,
                  "width" : 217
                },
                "width" : 0
              },
              "entityMap" : {

              }
            },
            "top" : 93,
            "visible" : true,
            "width" : 217,
            "widthType" : 0
          }
        ],
        "clip" : true,
        "codeOverrideEnabled" : false,
        "constraintsLocked" : false,
        "deviceType" : null,
        "exportOptions" : [

        ],
        "fillColor" : "white",
        "fillEnabled" : true,
        "fillGradient" : {
          "__class" : "LinearGradient",
          "alpha" : 1,
          "angle" : 0,
          "end" : "rgba(0,0,0,0)",
          "start" : "black"
        },
        "fillImage" : null,
        "fillImagePixelHeight" : null,
        "fillImagePixelWidth" : null,
        "fillImageResize" : "fill",
        "fillType" : "color",
        "height" : 564,
        "heightType" : 0,
        "id" : "Mo0GxMXiK",
        "intrinsicHeight" : null,
        "intrinsicWidth" : null,
        "isExternalMaster" : null,
        "isMaster" : false,
        "isTarget" : false,
        "left" : 822,
        "locked" : false,
        "name" : null,
        "navigationTarget" : "@Previous",
        "navigationTransition" : "push",
        "navigationTransitionBackdropColor" : "rgba(4,4,15,.4)",
        "navigationTransitionDirection" : "left",
        "opacity" : 1,
        "originalid" : null,
        "parentid" : "mByHJurWB",
        "previewSettings" : null,
        "radius" : 0,
        "radiusBottomLeft" : 0,
        "radiusBottomRight" : 0,
        "radiusIsRelative" : false,
        "radiusPerCorner" : false,
        "radiusTopLeft" : 0,
        "radiusTopRight" : 0,
        "replicaInfo" : null,
        "right" : null,
        "rotation" : 0,
        "top" : -22,
        "visible" : true,
        "width" : 586,
        "widthType" : 0
      },
      {
        "__class" : "FrameNode",
        "aspectRatio" : null,
        "blendingEnabled" : 0,
        "blendingMode" : "normal",
        "bottom" : null,
        "centerAnchorX" : 0,
        "centerAnchorY" : 0,
        "children" : [
          {
            "__class" : "CodeComponentNode",
            "aspectRatio" : null,
            "bottom" : 0,
            "centerAnchorX" : 0.5,
            "centerAnchorY" : 0.5,
            "children" : [

            ],
            "clip" : true,
            "codeComponentIdentifier" : ".\/LocalFontLoader.tsx_CustomFontLoader",
            "codeComponentProps" : {
              "fontFile" : "design\/assets\/NotoSerif-Italic.ttf",
              "fontName" : "NotoSerif-Italic",
              "fontWeight" : "normal",
              "source" : "file",
              "url" : "MyFont"
            },
            "codeOverrideEnabled" : false,
            "constraintsLocked" : false,
            "exportOptions" : [

            ],
            "fillColor" : "rgba(255,255,255,1)",
            "fillEnabled" : false,
            "fillGradient" : {
              "__class" : "LinearGradient",
              "alpha" : 1,
              "angle" : 0,
              "end" : "rgba(0,0,0,0)",
              "start" : "black"
            },
            "fillImage" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillType" : "color",
            "height" : 220,
            "heightType" : 0,
            "id" : "DHXDDz45E",
            "intrinsicHeight" : 220,
            "intrinsicWidth" : 240,
            "left" : 0,
            "locked" : false,
            "name" : null,
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "RPb2L5FmM",
            "radius" : 0,
            "radiusBottomLeft" : 0,
            "radiusBottomRight" : 0,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 0,
            "radiusTopRight" : 0,
            "right" : 0,
            "rotation" : 0,
            "top" : 0,
            "visible" : true,
            "width" : 240,
            "widthType" : 0
          }
        ],
        "clip" : true,
        "codeOverrideEnabled" : false,
        "constraintsLocked" : false,
        "deviceType" : null,
        "exportOptions" : [

        ],
        "fillColor" : "rgba(255,255,255,1)",
        "fillEnabled" : true,
        "fillGradient" : {
          "__class" : "LinearGradient",
          "alpha" : 1,
          "angle" : 0,
          "end" : "rgba(0,0,0,0)",
          "start" : "black"
        },
        "fillImage" : null,
        "fillImagePixelHeight" : null,
        "fillImagePixelWidth" : null,
        "fillImageResize" : "fill",
        "fillType" : "color",
        "height" : 220,
        "heightType" : 0,
        "id" : "RPb2L5FmM",
        "intrinsicHeight" : null,
        "intrinsicWidth" : null,
        "isExternalMaster" : null,
        "isMaster" : false,
        "isTarget" : false,
        "left" : 243,
        "locked" : false,
        "name" : null,
        "navigationTarget" : null,
        "navigationTransition" : "push",
        "navigationTransitionBackdropColor" : "rgba(4,4,15,.4)",
        "navigationTransitionDirection" : "left",
        "opacity" : 1,
        "originalid" : null,
        "parentid" : "mByHJurWB",
        "previewSettings" : null,
        "radius" : 0,
        "radiusBottomLeft" : 0,
        "radiusBottomRight" : 0,
        "radiusIsRelative" : false,
        "radiusPerCorner" : false,
        "radiusTopLeft" : 0,
        "radiusTopRight" : 0,
        "replicaInfo" : null,
        "right" : null,
        "rotation" : 0,
        "top" : 777,
        "visible" : true,
        "width" : 240,
        "widthType" : 0
      },
      {
        "__class" : "FrameNode",
        "aspectRatio" : null,
        "blendingEnabled" : 0,
        "blendingMode" : "normal",
        "bottom" : null,
        "centerAnchorX" : 0,
        "centerAnchorY" : 0,
        "children" : [
          {
            "__class" : "CodeComponentNode",
            "aspectRatio" : null,
            "bottom" : 0,
            "centerAnchorX" : 0.5,
            "centerAnchorY" : 0.5,
            "children" : [

            ],
            "clip" : true,
            "codeComponentIdentifier" : ".\/LocalFontLoader.tsx_CustomFontLoader",
            "codeComponentProps" : {
              "fontName" : "Just Another Hand",
              "fontWeight" : "",
              "source" : "webfont",
              "url" : "https:\/\/fonts.googleapis.com\/css?family=Just+Another+Hand"
            },
            "codeOverrideEnabled" : false,
            "constraintsLocked" : false,
            "exportOptions" : [

            ],
            "fillColor" : "rgba(255,255,255,1)",
            "fillEnabled" : false,
            "fillGradient" : {
              "__class" : "LinearGradient",
              "alpha" : 1,
              "angle" : 0,
              "end" : "rgba(0,0,0,0)",
              "start" : "black"
            },
            "fillImage" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillType" : "color",
            "height" : 220,
            "heightType" : 0,
            "id" : "ECoZi16kq",
            "intrinsicHeight" : 220,
            "intrinsicWidth" : 240,
            "left" : 0,
            "locked" : false,
            "name" : null,
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "cWVwKnxq5",
            "radius" : 0,
            "radiusBottomLeft" : 0,
            "radiusBottomRight" : 0,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 0,
            "radiusTopRight" : 0,
            "right" : 0,
            "rotation" : 0,
            "top" : 0,
            "visible" : true,
            "width" : 240,
            "widthType" : 0
          }
        ],
        "clip" : true,
        "codeOverrideEnabled" : false,
        "constraintsLocked" : false,
        "deviceType" : null,
        "exportOptions" : [

        ],
        "fillColor" : "rgba(255,255,255,1)",
        "fillEnabled" : true,
        "fillGradient" : {
          "__class" : "LinearGradient",
          "alpha" : 1,
          "angle" : 0,
          "end" : "rgba(0,0,0,0)",
          "start" : "black"
        },
        "fillImage" : null,
        "fillImagePixelHeight" : null,
        "fillImagePixelWidth" : null,
        "fillImageResize" : "fill",
        "fillType" : "color",
        "height" : 220,
        "heightType" : 0,
        "id" : "cWVwKnxq5",
        "intrinsicHeight" : null,
        "intrinsicWidth" : null,
        "isExternalMaster" : null,
        "isMaster" : false,
        "isTarget" : false,
        "left" : 627,
        "locked" : false,
        "name" : null,
        "navigationTarget" : null,
        "navigationTransition" : "push",
        "navigationTransitionBackdropColor" : "rgba(4,4,15,.4)",
        "navigationTransitionDirection" : "left",
        "opacity" : 1,
        "originalid" : null,
        "parentid" : "mByHJurWB",
        "previewSettings" : null,
        "radius" : 0,
        "radiusBottomLeft" : 0,
        "radiusBottomRight" : 0,
        "radiusIsRelative" : false,
        "radiusPerCorner" : false,
        "radiusTopLeft" : 0,
        "radiusTopRight" : 0,
        "replicaInfo" : null,
        "right" : null,
        "rotation" : 0,
        "top" : 777,
        "visible" : true,
        "width" : 240,
        "widthType" : 0
      },
      {
        "__class" : "TextNode",
        "autoSize" : true,
        "bottom" : null,
        "centerAnchorX" : 0.5,
        "centerAnchorY" : 0.5,
        "codeOverrideEnabled" : false,
        "constraintsLocked" : false,
        "exportOptions" : [

        ],
        "height" : 100,
        "heightType" : 0,
        "id" : "vmOfUQk4c",
        "isTarget" : false,
        "left" : null,
        "locked" : false,
        "name" : null,
        "opacity" : 1,
        "originalid" : null,
        "parentid" : "mByHJurWB",
        "right" : null,
        "rotation" : 0,
        "styledText" : {
          "__class" : "StyledTextDraft",
          "blocks" : [
            {
              "data" : {

              },
              "depth" : 0,
              "entityRanges" : [

              ],
              "inlineStyleRanges" : [

              ],
              "key" : "c5cue",
              "text" : "America-Extended-Black.ttf",
              "type" : "unstyled"
            }
          ],
          "cached" : {
            "html" : "<div data-offset-key=\"c5cue-0-0\" class=\"public-DraftStyleDefault-block public-DraftStyleDefault-ltr\"><span data-offset-key=\"c5cue-0-0\" style=\"tab-size:4;font-weight:400;font-family:&quot;HelveticaNeue&quot;, &quot;Helvetica Neue&quot;, sans-serif;-webkit-text-fill-color:rgb(0, 0, 0);font-size:16px;letter-spacing:0px;line-height:1.2\"><span data-text=\"true\">America-Extended-Black.ttf<\/span><\/span><\/div>",
            "os" : "10_14",
            "size" : {
              "height" : 19,
              "width" : 200
            },
            "width" : 0
          },
          "entityMap" : {

          }
        },
        "top" : null,
        "visible" : true,
        "width" : 100,
        "widthType" : 0
      },
      {
        "__class" : "CodeComponentNode",
        "aspectRatio" : null,
        "bottom" : null,
        "centerAnchorX" : 0.87916666666666665,
        "centerAnchorY" : 0.49090909090909091,
        "children" : [

        ],
        "clip" : true,
        "codeComponentIdentifier" : ".\/LocalFontLoader.tsx_CustomFontLoader",
        "codeComponentProps" : {
          "fontName" : "America Extended Black",
          "fontWeight" : "",
          "source" : "url",
          "url" : "https:\/\/s3-us-west-2.amazonaws.com\/mbh-leaf\/pub\/LFLYNXT\/design\/assets\/GT-America-Extended-Black.ttf"
        },
        "codeOverrideEnabled" : false,
        "constraintsLocked" : false,
        "exportOptions" : [

        ],
        "fillColor" : "rgba(255,255,255,1)",
        "fillEnabled" : false,
        "fillGradient" : {
          "__class" : "LinearGradient",
          "alpha" : 1,
          "angle" : 0,
          "end" : "rgba(0,0,0,0)",
          "start" : "black"
        },
        "fillImage" : null,
        "fillImagePixelHeight" : null,
        "fillImagePixelWidth" : null,
        "fillImageResize" : "fill",
        "fillType" : "color",
        "height" : 220,
        "heightType" : 0,
        "id" : "oRJGih6rx",
        "intrinsicHeight" : 220,
        "intrinsicWidth" : 240,
        "left" : 891,
        "locked" : false,
        "name" : null,
        "opacity" : 1,
        "originalid" : null,
        "parentid" : "mByHJurWB",
        "radius" : 0,
        "radiusBottomLeft" : 0,
        "radiusBottomRight" : 0,
        "radiusIsRelative" : false,
        "radiusPerCorner" : false,
        "radiusTopLeft" : 0,
        "radiusTopRight" : 0,
        "right" : null,
        "rotation" : 0,
        "top" : 777,
        "visible" : true,
        "width" : 240,
        "widthType" : 0
      },
      {
        "__class" : "CodeComponentNode",
        "aspectRatio" : null,
        "bottom" : null,
        "centerAnchorX" : 0,
        "centerAnchorY" : 0,
        "children" : [

        ],
        "clip" : true,
        "codeComponentIdentifier" : ".\/LocalFontLoader.tsx_CustomFontLoader",
        "codeComponentProps" : {
          "fontName" : "America Extended Black",
          "fontWeight" : "",
          "source" : "url",
          "url" : "https:\/\/s3-us-west-2.amazonaws.com\/mbh-leaf\/pub\/LFLYNXT\/design\/assets\/GT-America-Extended-Black"
        },
        "codeOverrideEnabled" : false,
        "constraintsLocked" : false,
        "exportOptions" : [

        ],
        "fillColor" : "rgba(255,255,255,1)",
        "fillEnabled" : false,
        "fillGradient" : {
          "__class" : "LinearGradient",
          "alpha" : 1,
          "angle" : 0,
          "end" : "rgba(0,0,0,0)",
          "start" : "black"
        },
        "fillImage" : null,
        "fillImagePixelHeight" : null,
        "fillImagePixelWidth" : null,
        "fillImageResize" : "fill",
        "fillType" : "color",
        "height" : 220,
        "heightType" : 0,
        "id" : "WAjI90SBE",
        "intrinsicHeight" : 220,
        "intrinsicWidth" : 240,
        "left" : 891,
        "locked" : false,
        "name" : "CustomFontLoader",
        "opacity" : 1,
        "originalid" : null,
        "parentid" : "mByHJurWB",
        "radius" : 0,
        "radiusBottomLeft" : 0,
        "radiusBottomRight" : 0,
        "radiusIsRelative" : false,
        "radiusPerCorner" : false,
        "radiusTopLeft" : 0,
        "radiusTopRight" : 0,
        "right" : null,
        "rotation" : 0,
        "top" : 1033,
        "visible" : true,
        "width" : 240,
        "widthType" : 0
      }
    ],
    "id" : "mByHJurWB",
    "name" : null,
    "originalid" : null,
    "parentid" : null,
    "visible" : false
  },
  "version" : 48
}
module.exports = designs

/***/ }),

/***/ "./node_modules/easytimer.js/dist/easytimer.js":
/*!*****************************************************!*\
  !*** ./node_modules/easytimer.js/dist/easytimer.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * easytimer.js
 * Generated: 2019-06-09
 * Version: 3.2.0
 */

(function (global, factory) {
   true ? factory(exports) :
  undefined;
}(this, function (exports) { 'use strict';

  function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function leftPadding(string, padLength, character) {
    var i;
    var characters = '';
    string = typeof string === 'number' ? String(string) : string;

    if (string.length > padLength) {
      return string;
    }

    for (i = 0; i < padLength; i = i + 1) {
      characters += String(character);
    }

    return (characters + string).slice(-characters.length);
  }

  function TimeCounter() {
    this.secondTenths = 0;
    this.seconds = 0;
    this.minutes = 0;
    this.hours = 0;
    this.days = 0;
    /**
     * [toString convert the counted values on a string]
     * @param  {array} units           [array with the units to display]
     * @param  {string} separator       [separator of the units]
     * @param  {number} leftZeroPadding [number of zero padding]
     * @return {string}                 [result string]
     */

    this.toString = function () {
      var units = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ['hours', 'minutes', 'seconds'];
      var separator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ':';
      var leftZeroPadding = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2;
      units = units || ['hours', 'minutes', 'seconds'];
      separator = separator || ':';
      leftZeroPadding = leftZeroPadding || 2;
      var stringTime;
      var arrayTime = [];
      var i;

      for (i = 0; i < units.length; i = i + 1) {
        if (this[units[i]] !== undefined) {
          if (units[i] === 'secondTenths') {
            arrayTime.push(this[units[i]]);
          } else {
            arrayTime.push(leftPadding(this[units[i]], leftZeroPadding, '0'));
          }
        }
      }

      stringTime = arrayTime.join(separator);
      return stringTime;
    };
  }

  /*
  * Polyfill por IE9, IE10 and IE11
  */
  var CustomEvent$1 = typeof window !== 'undefined' ? window.CustomEvent : undefined;

  if (typeof window !== 'undefined' && typeof CustomEvent$1 !== 'function') {
    CustomEvent$1 = function CustomEvent(event, params) {
      params = params || {
        bubbles: false,
        cancelable: false,
        detail: undefined
      };
      var evt = document.createEvent('CustomEvent');
      evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
      return evt;
    };

    CustomEvent$1.prototype = window.Event.prototype;
    window.CustomEvent = CustomEvent$1;
  }

  /*
   * General functions, variables and constants
   */

  var SECOND_TENTHS_PER_SECOND = 10;
  var SECONDS_PER_MINUTE = 60;
  var MINUTES_PER_HOUR = 60;
  var HOURS_PER_DAY = 24;
  var SECOND_TENTHS_POSITION = 0;
  var SECONDS_POSITION = 1;
  var MINUTES_POSITION = 2;
  var HOURS_POSITION = 3;
  var DAYS_POSITION = 4;
  var SECOND_TENTHS = 'secondTenths';
  var SECONDS = 'seconds';
  var MINUTES = 'minutes';
  var HOURS = 'hours';
  var DAYS = 'days';
  var VALID_INPUT_VALUES = [SECOND_TENTHS, SECONDS, MINUTES, HOURS, DAYS];
  var unitsInMilliseconds = {
    secondTenths: 100,
    seconds: 1000,
    minutes: 60000,
    hours: 3600000,
    days: 86400000
  };
  var groupedUnits = {
    secondTenths: SECOND_TENTHS_PER_SECOND,
    seconds: SECONDS_PER_MINUTE,
    minutes: MINUTES_PER_HOUR,
    hours: HOURS_PER_DAY
  };
  var events =  true && module.exports && "function" === 'function' ? __webpack_require__(/*! events */ "../../../../../../../Applications/Framer X.app/Contents/Resources/Server/node_modules/events/events.js") : undefined;

  function hasDOM() {
    return typeof document !== 'undefined';
  }

  function hasEventEmitter() {
    return events;
  }

  function mod(number, module) {
    return (number % module + module) % module;
  }
  /**
   * [Timer Timer/Chronometer/Countdown compatible with AMD and NodeJS.
   * Can update time values with different time intervals: tenth of seconds,
   * seconds, minutes and hours.]
   */


  function Timer() {
    /*
    * PRIVATE variables and Functions
    */
    var counters = new TimeCounter();
    var totalCounters = new TimeCounter();
    var intervalId;
    var eventEmitter = hasDOM() ? document.createElement('span') : hasEventEmitter() ? new events.EventEmitter() : undefined;
    var running = false;
    var paused = false;
    var precision;
    var timerTypeFactor;
    var customCallback;
    var timerConfig = {};
    var currentParams;
    var targetValues;
    var startValues;
    var countdown;
    var startingDate;
    var targetDate;
    var eventData = {
      detail: {
        timer: this
      }
    };

    function updateCounters(precision, roundedValue) {
      totalCounters[precision] = roundedValue;

      if (precision === DAYS) {
        counters[precision] = roundedValue;
      } else if (roundedValue >= 0) {
        counters[precision] = mod(roundedValue, groupedUnits[precision]);
      } else {
        counters[precision] = groupedUnits[precision] - mod(roundedValue, groupedUnits[precision]);
      }
    }

    function updateDays(value) {
      return updateUnitByPrecision(value, DAYS);
    }

    function updateHours(value) {
      return updateUnitByPrecision(value, HOURS);
    }

    function updateMinutes(value) {
      return updateUnitByPrecision(value, MINUTES);
    }

    function updateSeconds(value) {
      return updateUnitByPrecision(value, SECONDS);
    }

    function updateSecondTenths(value) {
      return updateUnitByPrecision(value, SECOND_TENTHS);
    }

    function updateUnitByPrecision(value, precision) {
      var previousValue = totalCounters[precision];
      updateCounters(precision, calculateIntegerUnitQuotient(value, unitsInMilliseconds[precision]));
      return totalCounters[precision] !== previousValue;
    }

    function stopTimerAndResetCounters() {
      stopTimer();
      resetCounters();
    }

    function stopTimer() {
      clearInterval(intervalId);
      intervalId = undefined;
      running = false;
      paused = false;
    }

    function setParamsAndStartTimer(params) {
      if (!isPaused()) {
        setParams(params);
      } else {
        startingDate = calculateStartingDate();
        targetValues = setTarget(currentParams.target);
      }

      startTimer();
    }

    function startTimer() {
      var interval = unitsInMilliseconds[precision];

      if (isTargetAchieved(roundTimestamp(Date.now()))) {
        return;
      }

      intervalId = setInterval(updateTimerAndDispatchEvents, interval);
      running = true;
      paused = false;
    }

    function calculateStartingDate() {
      return roundTimestamp(Date.now()) - totalCounters.secondTenths * unitsInMilliseconds[SECOND_TENTHS] * timerTypeFactor;
    }

    function updateTimerAndDispatchEvents() {
      var currentTime = roundTimestamp(Date.now());
      var valuesUpdated = updateTimer();
      dispatchEvents(valuesUpdated);
      customCallback(eventData.detail.timer);

      if (isTargetAchieved(currentTime)) {
        stop();
        dispatchEvent('targetAchieved', eventData);
      }
    }

    function updateTimer() {
      var currentTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : roundTimestamp(Date.now());
      var elapsedTime = timerTypeFactor > 0 ? currentTime - startingDate : startingDate - currentTime;
      var valuesUpdated = {};
      valuesUpdated[SECOND_TENTHS] = updateSecondTenths(elapsedTime);
      valuesUpdated[SECONDS] = updateSeconds(elapsedTime);
      valuesUpdated[MINUTES] = updateMinutes(elapsedTime);
      valuesUpdated[HOURS] = updateHours(elapsedTime);
      valuesUpdated[DAYS] = updateDays(elapsedTime);
      return valuesUpdated;
    }

    function roundTimestamp(timestamp) {
      return Math.floor(timestamp / unitsInMilliseconds[precision]) * unitsInMilliseconds[precision];
    }

    function dispatchEvents(valuesUpdated) {
      if (valuesUpdated[SECOND_TENTHS]) {
        dispatchEvent('secondTenthsUpdated', eventData);
      }

      if (valuesUpdated[SECONDS]) {
        dispatchEvent('secondsUpdated', eventData);
      }

      if (valuesUpdated[MINUTES]) {
        dispatchEvent('minutesUpdated', eventData);
      }

      if (valuesUpdated[HOURS]) {
        dispatchEvent('hoursUpdated', eventData);
      }

      if (valuesUpdated[DAYS]) {
        dispatchEvent('daysUpdated', eventData);
      }
    }

    function isTargetAchieved(currentDate) {
      return targetValues instanceof Array && currentDate >= targetDate;
    }

    function resetCounters() {
      for (var counter in counters) {
        if (counters.hasOwnProperty(counter) && typeof counters[counter] === 'number') {
          counters[counter] = 0;
        }
      }

      for (var _counter in totalCounters) {
        if (totalCounters.hasOwnProperty(_counter) && typeof totalCounters[_counter] === 'number') {
          totalCounters[_counter] = 0;
        }
      }
    }

    function setParams(params) {
      params = params || {};
      precision = checkPrecision(params.precision);
      customCallback = typeof params.callback === 'function' ? params.callback : function () {};
      countdown = params.countdown === true;
      timerTypeFactor = countdown === true ? -1 : 1;

      if (_typeof(params.startValues) === 'object') {
        setStartValues(params.startValues);
      } else {
        startValues = null;
      }

      startingDate = calculateStartingDate();
      updateTimer();

      if (_typeof(params.target) === 'object') {
        targetValues = setTarget(params.target);
      } else if (countdown) {
        params.target = {
          seconds: 0
        };
        targetValues = setTarget(params.target);
      } else {
        targetValues = null;
      }

      timerConfig = {
        precision: precision,
        callback: customCallback,
        countdown: _typeof(params) === 'object' && params.countdown === true,
        target: targetValues,
        startValues: startValues
      };
      currentParams = params;
    }

    function checkPrecision(precision) {
      precision = typeof precision === 'string' ? precision : SECONDS;

      if (!isValidInputValue(precision)) {
        throw new Error("Error in precision parameter: ".concat(precision, " is not a valid value"));
      }

      return precision;
    }

    function isValidInputValue(value) {
      return VALID_INPUT_VALUES.indexOf(value) >= 0;
    }

    function configInputValues(inputValues) {
      var secondTenths, seconds, minutes, hours, days, values;

      if (_typeof(inputValues) === 'object') {
        if (inputValues instanceof Array) {
          if (inputValues.length !== 5) {
            throw new Error('Array size not valid');
          }

          values = inputValues;
        } else {
          for (var value in inputValues) {
            if (VALID_INPUT_VALUES.indexOf(value) < 0) {
              throw new Error("Error in startValues or target parameter: ".concat(value, " is not a valid input value"));
            }
          }

          values = [inputValues.secondTenths || 0, inputValues.seconds || 0, inputValues.minutes || 0, inputValues.hours || 0, inputValues.days || 0];
        }
      }

      secondTenths = values[SECOND_TENTHS_POSITION];
      seconds = values[SECONDS_POSITION] + calculateIntegerUnitQuotient(secondTenths, SECOND_TENTHS_PER_SECOND);
      minutes = values[MINUTES_POSITION] + calculateIntegerUnitQuotient(seconds, SECONDS_PER_MINUTE);
      hours = values[HOURS_POSITION] + calculateIntegerUnitQuotient(minutes, MINUTES_PER_HOUR);
      days = values[DAYS_POSITION] + calculateIntegerUnitQuotient(hours, HOURS_PER_DAY);
      values[SECOND_TENTHS_POSITION] = secondTenths % SECOND_TENTHS_PER_SECOND;
      values[SECONDS_POSITION] = seconds % SECONDS_PER_MINUTE;
      values[MINUTES_POSITION] = minutes % MINUTES_PER_HOUR;
      values[HOURS_POSITION] = hours % HOURS_PER_DAY;
      values[DAYS_POSITION] = days;
      return values;
    }

    function calculateIntegerUnitQuotient(unit, divisor) {
      var quotient = unit / divisor;
      return quotient < 0 ? Math.ceil(quotient) : Math.floor(quotient);
    }

    function setTarget(inputTarget) {
      if (!inputTarget) {
        return;
      }

      targetValues = configInputValues(inputTarget);
      var targetCounter = calculateTotalCounterFromValues(targetValues);
      targetDate = startingDate + targetCounter.secondTenths * unitsInMilliseconds[SECOND_TENTHS] * timerTypeFactor;
      return targetValues;
    }

    function setStartValues(inputStartValues) {
      startValues = configInputValues(inputStartValues);
      counters.secondTenths = startValues[SECOND_TENTHS_POSITION];
      counters.seconds = startValues[SECONDS_POSITION];
      counters.minutes = startValues[MINUTES_POSITION];
      counters.hours = startValues[HOURS_POSITION];
      counters.days = startValues[DAYS_POSITION];
      totalCounters = calculateTotalCounterFromValues(startValues, totalCounters);
    }

    function calculateTotalCounterFromValues(values, outputCounter) {
      var total = outputCounter || {};
      total.days = values[DAYS_POSITION];
      total.hours = total.days * HOURS_PER_DAY + values[HOURS_POSITION];
      total.minutes = total.hours * MINUTES_PER_HOUR + values[MINUTES_POSITION];
      total.seconds = total.minutes * SECONDS_PER_MINUTE + values[SECONDS_POSITION];
      total.secondTenths = total.seconds * SECOND_TENTHS_PER_SECOND + values[[SECOND_TENTHS_POSITION]];
      return total;
    }
    /*
     * PUBLIC functions
     */

    /**
     * [stop stops the timer and resets the counters. Dispatch stopped event]
     */


    function stop() {
      stopTimerAndResetCounters();
      dispatchEvent('stopped', eventData);
    }
    /**
     * [stop stops and starts the timer. Dispatch stopped event]
     */


    function reset() {
      stopTimerAndResetCounters();
      setParamsAndStartTimer(currentParams);
      dispatchEvent('reset', eventData);
    }
    /**
     * [start starts the timer configured by the params object. Dispatch started event]
     * @param  {object} params [Configuration parameters]
     */


    function start() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (isRunning()) {
        return;
      }

      setParamsAndStartTimer(params);
      dispatchEvent('started', eventData);
    }
    /**
     * [pause stops the timer without resetting the counters. The timer it can be restarted with start function.
     * Dispatch paused event]
     * @return {type} [description]
     */


    function pause() {
      stopTimer();
      paused = true;
      dispatchEvent('paused', eventData);
    }
    /**
     * [addEventListener Adds event listener to the timer]
     * @param {string} event      [event to listen]
     * @param {function} listener   [the event listener function]
     */


    function addEventListener(event, listener) {
      if (hasDOM()) {
        eventEmitter.addEventListener(event, listener);
      } else if (hasEventEmitter()) {
        eventEmitter.on(event, listener);
      }
    }
    /**
     * [removeEventListener Removes event listener to the timer]
     * @param  {string} event    [event to remove listener]
     * @param  {function} listener [listener to remove]
     */


    function removeEventListener(event, listener) {
      if (hasDOM()) {
        eventEmitter.removeEventListener(event, listener);
      } else if (hasEventEmitter()) {
        eventEmitter.removeListener(event, listener);
      }
    }
    /**
     * [dispatchEvent dispatches an event]
     * @param  {string} event [event to dispatch]
     */


    function dispatchEvent(event, data) {
      if (hasDOM()) {
        eventEmitter.dispatchEvent(new CustomEvent(event, data));
      } else if (hasEventEmitter()) {
        eventEmitter.emit(event, data);
      }
    }
    /**
     * [isRunning return true if the timer is running]
     * @return {Boolean}
     */


    function isRunning() {
      return running;
    }
    /**
     * [isPaused returns true if the timer is paused]
     * @return {Boolean}
     */


    function isPaused() {
      return paused;
    }
    /**
     * [getTimeValues returns the counter with the current timer values]
     * @return {TimeCounter}
     */


    function getTimeValues() {
      return counters;
    }
    /**
     * [getTotalTimeValues returns the counter with the current timer total values]
     * @return {TimeCounter}
     */


    function getTotalTimeValues() {
      return totalCounters;
    }
    /**
     * [getConfig returns the configuration parameters]
     * @return {type}
     */


    function getConfig() {
      return timerConfig;
    }
    /**
     * Public API
     * Definition of Timer instance public functions
     */


    if (typeof this !== 'undefined') {
      this.start = start;
      this.pause = pause;
      this.stop = stop;
      this.reset = reset;
      this.isRunning = isRunning;
      this.isPaused = isPaused;
      this.getTimeValues = getTimeValues;
      this.getTotalTimeValues = getTotalTimeValues;
      this.getConfig = getConfig;
      this.addEventListener = addEventListener;
      this.on = addEventListener;
      this.removeEventListener = removeEventListener;
      this.off = removeEventListener;
    }
  }

  exports.Timer = Timer;
  exports.default = Timer;

  Object.defineProperty(exports, '__esModule', { value: true });

}));


/***/ })

}]);