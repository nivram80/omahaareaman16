(function() {
  'use strict';

  angular
    .module('omahaareaman16')
    .config(config);

  /** @ngInject */
  function config($logProvider) {
    // Enable log
    $logProvider.debugEnabled(true);
  }

})();
