// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({6:[function(require,module,exports) {

},{}],4:[function(require,module,exports) {
'use strict';

require('./main.scss');

console.log("Setup in prfffocess...");

/*! main.js | c2o | main entry point for template */

/* ==========================================================================
Website core JS file
========================================================================== */

// import './custom.scss'
// document.getElementById('message').innerText = "Hello World";

(function () {
  var burger = document.querySelector('.burger');
  var menu = document.querySelector('#' + burger.dataset.target);
  burger.addEventListener('click', function () {
    burger.classList.toggle('is-active');
    menu.classList.toggle('is-active');
  });

  $(".column.card-1").css({ opacity: 0 });
  $(".column.card-2").css({ opacity: 0 });

  // setting up the waypoint for the nav transition
  $('.first').waypoint(function (dir) {
    if (dir === 'down') {
      toggleState('.navbar', 'open', 'closed');
      toggleState('.button.is-outlined.is-small', 'open', 'closed');
      // toggleState('.navbar', 'closed', 'open');
      // nav bar to transition
      // $(".navbar.is-fixed-top.is-transparent").switchClass("is-nav", "is-nav-active", 500, "easeInOutQuad" );
      // github bar transition
      // $(".button.is-outlined.is-small").switchClass("is-white", "is-black", 500, "easeInOutQuad" );
    }
    if (dir === 'up') {
      toggleState('.navbar', 'closed', 'open');
      toggleState('.button.is-outlined.is-small', 'closed', 'open');
      // $(".navbar.is-fixed-top.is-transparent").switchClass("is-nav-active", "is-nav", 500, "easeInOutQuad" );
      // $(".button.is-outlined.is-small").switchClass("is-black", "is-white", 500, "easeInOutQuad" );
    }
  });

  $('.first').waypoint(function (dir) {
    $(".column.card-1").fadeTo("slow", 1, function () {});
    setTimeout(function () {
      $(".column.card-2").fadeTo("slow", 1, function () {});
    }, 500);
  });

  var pxShow = 800;
  var scrollSpeed = 300;
  $(window).on('scroll', function () {
    if ($(window).scrollTop() >= pxShow) {
      $("#scrolltotop").addClass('visible');
    } else {
      $("#scrolltotop").removeClass('visible');
    }
  });
  $('#scrolltotop a').on('click', function () {
    $('html, body').animate({
      scrollTop: 0
    }, scrollSpeed);
    return false;
  });

  // modifying the state
  var nav = document.querySelector('.navbar');

  var toggleState = function toggleState(elem, one, two) {
    var elem = document.querySelector(elem);
    elem.setAttribute('data-state', elem.getAttribute('data-state') === one ? two : one);
  };

  // toggleState('.navbar', 'closed', 'open');
  // toggleState('.navbar', 'open', 'closed');

  // add the css below to the styling file
  // .navbar.is-fixed-top.is-nav[data-state=open] {
  //   background: blue;
  // }

})();
},{"./main.scss":6}]},{},[4], null)
//# sourceMappingURL=/main.9adc3947.map