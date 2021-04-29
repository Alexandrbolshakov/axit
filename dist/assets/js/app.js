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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/assets/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\r\nwindow.addEventListener(\"DOMContentLoaded\", ()=>{\r\n\r\n    const tabs = document.querySelectorAll(\".tabs__aside-tab\");\r\n\r\n    removeActive();\r\n    \r\n    tabs.forEach(tab=>{\r\n        tab.addEventListener(\"click\", ()=>{\r\n            removeActive();\r\n            tab.classList.add(\"active\");\r\n        });\r\n    });\r\n\r\n    function removeActive(){\r\n        tabs.forEach(tab=>{\r\n            tab.classList.remove(\"active\");\r\n        });\r\n    }\r\n\r\n    const priceCarts = document.querySelectorAll(\".price__card\");\r\n\r\n    priceCarts.forEach(cart=>{\r\n        cart.addEventListener(\"click\", ()=>{\r\n            cart.classList.toggle(\"active\");\r\n            // if(cart.classList.contains(\"active\")){\r\n            //     cart.classList.remove(\"active\")\r\n            // }else{\r\n            //     cart.classList.add(\"active\");\r\n            // }\r\n        });\r\n    });\r\n\r\n    const buttons = document.querySelectorAll('[href^=\"#\"]');\r\n    buttons.forEach(btn=>{\r\n        btn.addEventListener(\"click\", (e)=>{\r\n            e.preventDefault();\r\n            const id = btn.href.replace(/[^#]*(.*)/, '$1');\r\n            const scrollTo = document.getElementById(id.replace(\"#\",\"\"));\r\n            scrollTo.scrollIntoView({behavior: \"smooth\"});\r\n        });\r\n    });\r\n\r\n    const header = document.querySelector(\"header\");\r\n    let scrollOffset = 0;\r\n    const arrow = document.querySelector(\".arrow\");\r\n    const preview = document.querySelector(\".preview\");\r\n    let previewH = preview.scrollHeight;\r\n        window.addEventListener(\"scroll\", ()=>{\r\n            scrollOffset = pageYOffset;\r\n        if(scrollOffset > previewH){\r\n            header.classList.add(\"fixed\");\r\n            arrow.style.display = \"block\";\r\n        }\r\n        else{\r\n            header.classList.remove(\"fixed\");\r\n            arrow.style.display = \"none\";\r\n        }\r\n    });\r\n\r\n   const toggle = document.querySelector(\".nav__toggle\");\r\n   const navItems = document.querySelector(\".nav__wrapper\");\r\n   toggle.addEventListener(\"click\",()=>{\r\n       toggle.classList.toggle(\"active\");\r\n       navItems.classList.toggle(\"active\");\r\n   }); \r\n});\n\n//# sourceURL=webpack:///./src/assets/js/app.js?");

/***/ })

/******/ });