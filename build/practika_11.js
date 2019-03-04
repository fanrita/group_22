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
/******/ 	return __webpack_require__(__webpack_require__.s = 343);
/******/ })
/************************************************************************/
/******/ ({

/***/ 343:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(344);


/***/ }),

/***/ 344:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _logic = __webpack_require__(345);

var _modal = __webpack_require__(346);

__webpack_require__(347);

var widgets = document.querySelectorAll('.greet-widget');
var buttonOrder = document.querySelector('.modal-section__button_order');
var buttonBuy = document.querySelector('.modal-section__button_buy');

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = widgets[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var widget = _step.value;

    console.log(widget);
    (0, _logic.runLogic)(widget);
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator.return) {
      _iterator.return();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

buttonOrder.onclick = function () {
  (0, _modal.showModal)("Make Order");
};

buttonBuy.onclick = function () {
  (0, _modal.showModal)("Buy All");
};

/***/ }),

/***/ 345:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function runLogic(widget) {
  var color = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "red";

  var light = widget.querySelector('.light');
  var btn = widget.querySelector('.btn');

  var isActive = true;

  btn.onclick = toggle;

  function toggle() {
    if (isActive) {
      toggleOff();
    } else {
      toggleOn();
    }
  }

  function toggleOn() {
    console.log('ffgg');
    btn.innerHTML = "ON";
    light.style.backgroundColor = color;
    isActive = true;
  }

  function toggleOff() {
    btn.innerHTML = "OFF";
    light.style.backgroundColor = "gray";
    isActive = false;
  }

  toggle();
}

exports.runLogic = runLogic;

/***/ }),

/***/ 346:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var showModal = exports.showModal = function showModal(text) {
  var closeButton = document.querySelector('.modal-section__modal__button');
  var modal = document.querySelector('.modal-section__modal');
  var modalText = modal.querySelector('.modal-section__modal__text');

  var isActive = false;

  closeButton.onclick = function () {
    if (isActive) {
      modal.style.display = "none";
    }
  };

  if (!isActive) {
    modalText.innerHTML = text;
    modal.style.display = "block";
    isActive = true;
  }
};

/***/ }),

/***/ 347:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

/******/ });