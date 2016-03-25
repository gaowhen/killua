/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var app = document.getElementById('app');
	var time = document.getElementById('time');
	var timer = setInterval(updateClock, 1000);
	
	function updateClock() {
	    time.innerHTML = new Date().toString();
	}
	
	// Edit these styles to see them take effect immediately
	app.style.display = 'table-cell';
	app.style.width = '250px';
	app.style.height = '150px';
	app.style.border = '1px solid #333';
	app.style.background = 'green';
	app.style.color = '#333';
	app.style.textAlign = 'right';
	app.style.verticalAlign = 'top';
	
	// Uncomment one of the following lines to see error handling
	// require('unknown-module')
	// } syntax-error
	
	if (false) {
	    module.hot.accept();
	    module.hot.dispose(function () {
	        clearInterval(timer);
	    });
	}

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNTA5NjM5NWY0M2YwODgxMmNmNGQiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9qcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7O0FDdENBLEtBQUksTUFBTSxTQUFTLGNBQVQsQ0FBd0IsS0FBeEIsQ0FBTjtBQUNKLEtBQUksT0FBTyxTQUFTLGNBQVQsQ0FBd0IsTUFBeEIsQ0FBUDtBQUNKLEtBQUksUUFBUSxZQUFZLFdBQVosRUFBeUIsSUFBekIsQ0FBUjs7QUFFSixVQUFTLFdBQVQsR0FBdUI7QUFDbkIsVUFBSyxTQUFMLEdBQWlCLElBQUssSUFBSixFQUFELENBQWEsUUFBYixFQUFqQixDQURtQjtFQUF2Qjs7O0FBS0EsS0FBSSxLQUFKLENBQVUsT0FBVixHQUFvQixZQUFwQjtBQUNBLEtBQUksS0FBSixDQUFVLEtBQVYsR0FBa0IsT0FBbEI7QUFDQSxLQUFJLEtBQUosQ0FBVSxNQUFWLEdBQW1CLE9BQW5CO0FBQ0EsS0FBSSxLQUFKLENBQVUsTUFBVixHQUFtQixnQkFBbkI7QUFDQSxLQUFJLEtBQUosQ0FBVSxVQUFWLEdBQXVCLE9BQXZCO0FBQ0EsS0FBSSxLQUFKLENBQVUsS0FBVixHQUFrQixNQUFsQjtBQUNBLEtBQUksS0FBSixDQUFVLFNBQVYsR0FBc0IsT0FBdEI7QUFDQSxLQUFJLEtBQUosQ0FBVSxhQUFWLEdBQTBCLEtBQTFCOzs7Ozs7QUFNQSxLQUFJLE9BQVk7QUFDWixZQUFPLEdBQVAsQ0FBVyxNQUFYLEdBRFk7QUFFWixZQUFPLEdBQVAsQ0FBVyxPQUFYLENBQW1CLFlBQVc7QUFDMUIsdUJBQWMsS0FBZCxFQUQwQjtNQUFYLENBQW5CLENBRlkiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIDUwOTYzOTVmNDNmMDg4MTJjZjRkXG4gKiovIiwidmFyIGFwcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKTtcbnZhciB0aW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpbWUnKTtcbnZhciB0aW1lciA9IHNldEludGVydmFsKHVwZGF0ZUNsb2NrLCAxMDAwKTtcblxuZnVuY3Rpb24gdXBkYXRlQ2xvY2soKSB7XG4gICAgdGltZS5pbm5lckhUTUwgPSAobmV3IERhdGUoKSkudG9TdHJpbmcoKTtcbn1cblxuLy8gRWRpdCB0aGVzZSBzdHlsZXMgdG8gc2VlIHRoZW0gdGFrZSBlZmZlY3QgaW1tZWRpYXRlbHlcbmFwcC5zdHlsZS5kaXNwbGF5ID0gJ3RhYmxlLWNlbGwnO1xuYXBwLnN0eWxlLndpZHRoID0gJzI1MHB4JztcbmFwcC5zdHlsZS5oZWlnaHQgPSAnMTUwcHgnO1xuYXBwLnN0eWxlLmJvcmRlciA9ICcxcHggc29saWQgIzMzMyc7XG5hcHAuc3R5bGUuYmFja2dyb3VuZCA9ICdncmVlbic7XG5hcHAuc3R5bGUuY29sb3IgPSAnIzMzMyc7XG5hcHAuc3R5bGUudGV4dEFsaWduID0gJ3JpZ2h0JztcbmFwcC5zdHlsZS52ZXJ0aWNhbEFsaWduID0gJ3RvcCc7XG5cbi8vIFVuY29tbWVudCBvbmUgb2YgdGhlIGZvbGxvd2luZyBsaW5lcyB0byBzZWUgZXJyb3IgaGFuZGxpbmdcbi8vIHJlcXVpcmUoJ3Vua25vd24tbW9kdWxlJylcbi8vIH0gc3ludGF4LWVycm9yXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGltZXIpO1xuICAgIH0pO1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvc3RhdGljL2pzL2luZGV4LmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==