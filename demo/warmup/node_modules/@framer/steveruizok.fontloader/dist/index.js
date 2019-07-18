(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("framer"), require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["framer", "react"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("framer"), require("react")) : factory(root["Framer"], root["React"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
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