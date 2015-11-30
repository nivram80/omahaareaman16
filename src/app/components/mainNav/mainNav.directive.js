(function() {
  'use strict';

  angular
    .module('omahaareaman16')
    .directive('mainNav', mainNav);

  /** @ngInject */
  function mainNav() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/mainNav/mainNav.html',
      controller: MainNavController,
      controllerAs: 'mnc',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function MainNavController() {

    }
  }

})();
