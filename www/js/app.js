// Ionic Starter App
// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example
// (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
define(['app', 'ngAnimate', 'ionic', 'ngBootstrap'], function() {
    'use strict';
    return angular
        .module('app', ['ionic', 'MyControllers', 'services', 'ngAnimate', 'ui.bootstrap'])
        .run(function($ionicPlatform) {

            $ionicPlatform.ready(function() {
                // Hide the accessory bar by default (remove this
                // to show the accessory bar above the keyboard
                // for form inputs)
                if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
                    cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                    cordova.plugins.Keyboard.disableScroll(true);
                }
                if (window.StatusBar) {
                    // org.apache.cordova.statusbar required
                    StatusBar.styleDefault();
                }
            });
        })

    .config(function($stateProvider, $urlRouterProvider) {

        // Ionic uses AngularUI Router which uses the concept of states
        // Learn more here: https://github.com/angular-ui/ui-router
        // Set up the various states which the app can be in.
        // Each state's controller can be found in controllers.js
        $stateProvider

            .state('login', {
                url: '/login',
                templateUrl: 'templates/login.html'
            })
            .state('phone', {
                url: '/phone',
                templateUrl: 'templates/phone/phones.html'
            })
            .state('second', {
                url: '/phone/second',
                templateUrl: 'templates/phone/phone_second.html'
            })
            .state('three', {
                url: '/phone/three',
                templateUrl: 'templates/phone/phone_three.html'
            })
            .state('fourth', {
                url: '/phone/fourth',
                templateUrl: 'templates/phone/phone_fourth.html'
            })
            .state('end',{
                url:'/phone/end',
                templateUrl:'templates/phone/phone_end.html'
            })
        ;
        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/login');
    });
});