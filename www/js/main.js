require.config({
  paths: {
    ionic: '../lib/ionic/js/ionic.bundle',
    ngAnimate: '../lib/angular-animate/angular-animate',
    ngAria: '../lib/angular-aria/angular-aria',
    ngMessage: '../lib/angular-messages/angular-messages',
    ngTouch: '../lib/angular-touch/angular-touch.min',
    ngBootstrap: '../lib/angular-ui-bootstrap/dist/ui-bootstrap-tpls'
  },
  shim: {
    ngAnimate: ['ionic'],
    ngAria: ['ionic'],
    ngMessage: ['ionic'],
    ngTouch: {
      deps: ['ionic']
    },
    ngBootstrap: {
      deps: ['ngTouch']
    }
  }

});

require(['app', 'controllers/controllers', 'services/services'], function ($document) {
  angular.bootstrap(document.getElementsByTagName('body')[0], ['app']);
});
