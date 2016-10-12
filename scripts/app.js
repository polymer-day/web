PDW.App = (function() {
  'use strict';

  function init() {
    var template = document.getElementById('t');

    template.app = {}; // Shared global properties among pages.
    template.app.isIOS = PDW.Utils.isIOS();
    template.app.isAndroid = PDW.Utils.isAndroid();
    template.app.isSafari = PDW.Utils.isSafari();
    template.app.isTouchScreen = PDW.Utils.isTouchScreen();


    template.domStampedPromise = new Promise(resolve => {
      template.addEventListener('dom-change', resolve);
    });

    template.domStampedPromise.then(function(){
      console.log('dom-change captured');
    });


    PDW.App.Template = template;
  }

  return {
    init: init
  };
})();


(function(PDW) {
  function initApp() {
    PDW.App.init();
  }
  initApp();
}(PDW));
