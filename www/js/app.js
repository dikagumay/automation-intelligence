// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('Pruforce', ['ionic', 'ngMaterial', 'Pruforce.controller'])

.run(function($ionicPlatform, $rootScope, $state, $ionicHistory, GlobalFunctions, $ionicScrollDelegate, $timeout) {
  $rootScope.headerString = '';
  $rootScope.steps = [{
    name: "Step 1: Data Informasi",
    value: 1
  }, {
    name: "Step 2: Data Pemeriksaan Kesehatan",
    value: 2
  }, {
    name: "Step 3: Pembayar Premi/Kontributor",
    value: 3
  }, {
    name: "Step 4: Top-Up",
    value: 4
  }, {
    name: "Step 5: Calon Penerima Manfaat Asuransi",
    value: 5
  }, {
    name: "Step 6: Kelengkapan dokumen",
    value: 6
  }, {
    name: "Step 7: Amendemen",
    value: 7
  }];
  $rootScope.citiesPlace  = GlobalFunctions.getCitiesPlace();
  $rootScope.countries = GlobalFunctions.getCountries();
  $rootScope.occupations = GlobalFunctions.getOccupations();
  $rootScope.telCodes = GlobalFunctions.getTelCodes();
  $rootScope.resizeView = () => {
    $timeout(() => {
      $ionicScrollDelegate.resize();
    }, 0)
  }
  $rootScope.footerHandler = function(state, params) {
    $state.go(state, params);
  }
  $rootScope.backHandler = () => {
    $ionicHistory.goBack();
  }

  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(false);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.config(($stateProvider, $urlRouterProvider, $mdGestureProvider, $ionicConfigProvider) => {
  $mdGestureProvider.skipClickHijack();

  $ionicConfigProvider.tabs.position('top');

  if (!ionic.Platform.isIOS()) {
    $ionicConfigProvider.scrolling.jsScrolling(false);
  }

  $stateProvider
  .state('spaj_start', {
    url: '/spaj_start',
    cache: false,
    templateUrl: 'components/spaj/start/spajStart.html',
    controller: 'SpajStartCtrl'
  })
  .state('step1', {
    url: '/step1/:policyHolder',
    cache: false,
    templateUrl: 'components/spaj/step1/step1.html',
    controller: 'Step1Ctrl'
  })
  .state('active_policy', {
    url: '/step1/active_policy',
    cache: false,
    templateUrl: 'components/spaj/step1/activePolicy.html',
    controller: "ActivePolicyCtrl"
  })
  $urlRouterProvider.otherwise('/spaj_start');
})
.component('customHeader', {
  templateUrl: 'components/layout/customHeader.html'
})
.component('customFooter', {
  templateUrl: 'components/layout/customFooter.html'
})