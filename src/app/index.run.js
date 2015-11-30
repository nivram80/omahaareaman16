(function() {
  'use strict';

  angular
    .module('omahaareaman16')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
