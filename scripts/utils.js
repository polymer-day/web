window.PDW = window.PDW || {};

PDW.Utils = PDW.Utils || (function() {
  'use strict';

  function isIOS() {
    return (/(iPhone|iPad|iPod)/gi).test(navigator.platform);
  }

  function isAndroid() {
    return (/Android/gi).test(navigator.userAgent);
  }

  function isSafari() {
    var userAgent = navigator.userAgent;
    return (/Safari/gi).test(userAgent) &&
      !(/Chrome/gi).test(userAgent);
  }

  function isIE() {
    var userAgent = navigator.userAgent;
    return (/Trident/gi).test(userAgent);
  }

  function isEdge() {
    return /Edge/i.test(navigator.userAgent);
  }

  function isFF() {
    var userAgent = navigator.userAgent;
    return (/Firefox/gi).test(userAgent);
  }

  function isTouchScreen() {
    return ('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch;
  }

  /**
   * Gets a param from the search part of a URL by name.
   * @param {string} param URL parameter to look for.
   * @return {string|undefined} undefined if the URL parameter does not exist.
   */
  function getURLParameter(param) {
    if (!window.location.search) {
      return undefined;
    }
    var m = new RegExp(param + '=([^&]*)').exec(window.location.search.substring(1));
    if (!m) {
      return undefined;
    }
    return decodeURIComponent(m[1]);
  }

  /**
   * Returns the target element that was clicked/tapped.
   * @param {Event} e The click/tap event.
   * @param {string} tagName The element tagName to stop at.
   * @return {Element} The target element that was clicked/tapped.
   */
  var getEventSender = function(e, tagName) {
    var path = Polymer.dom(e).path;

    var target = null;
    for (var i = 0; i < path.length; ++i) {
      var el = path[i];
      if (el.localName === tagName) {
        target = el;
        break;
      }
    }

    return target;
  };

  /**
   * Returns the first paint metric (if available).
   * @return {number} The first paint time in ms.
   */
  const getFPIfSupported = function() {
    if (window.chrome && window.chrome.loadTimes) {
      let load = window.chrome.loadTimes();
      let fp = (load.firstPaintTime - load.startLoadTime) * 1000;
      return Math.round(fp);
    } else if ('performance' in window) {
      let navTiming = window.performance.timing;
      // See http://msdn.microsoft.com/ff974719
      if (navTiming && navTiming.msFirstPaint && navTiming.navigationStart !== 0) {
        // See http://msdn.microsoft.com/ff974719
        return navTiming.msFirstPaint - navTiming.navigationStart;
      }
    }

    return null;
  };

  return {
    isFF: isFF,
    isIE: isIE,
    isEdge: isEdge,
    isIOS: isIOS,
    isAndroid: isAndroid,
    isSafari: isSafari,
    isTouchScreen: isTouchScreen,
    supportsHTMLImports: 'import' in document.createElement('link'),
    getFPIfSupported: getFPIfSupported,
    getURLParameter: getURLParameter,
    getEventSender: getEventSender
  };
})();
