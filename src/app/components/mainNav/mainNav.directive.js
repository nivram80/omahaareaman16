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
      controllerAs: 'mainNavCtrl',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function MainNavController() {
      var mnc = this;
      mnc.showMenu = false;

      mnc.toggleMenu = function() {
        mnc.showMenu = !mnc.showMenu;
      }
    }
  }

})();
