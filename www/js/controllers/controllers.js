define(['../app'], function() {

  return angular.module('MyControllers', [])
    .controller('ProvinceCtrl', function(messages) {
      var vm = this;
      vm.messages = messages;
    })
    .controller('CarouselCtrl', function($ionicSlideBoxDelegate) {
      var vm = this;
      var slides = vm.slides = [];
      var cards = [{
        image: 'http://lorempixel.com/400/200/'
      }, {
        image: 'http://lorempixel.com/400/200/food'
      }, {
        image: 'http://lorempixel.com/400/200/sports'
      }, {
        image: 'http://lorempixel.com/400/200/people'
      }];
      vm.myInterval = 5000;
      vm.noWrapSlides = false;
      vm.active = 0;
      cards.forEach(function callback(element, index) {
        slides.push({
          image: element.image,
          id: index
        });
      });
      vm.slideNext = function() {

        $ionicSlideBoxDelegate.next();
      };
      vm.slidePrevious = function() {

        $ionicSlideBoxDelegate.previous();
      };
    })
    .controller('registerCtrl', function($interval) {
      var vm = this;
      var second = 60;
      var timePromise = undefined;
      vm.paracont = '获取验证码';
      vm.paraclass = 'but_null';
      vm.paraevent = true;


      timePromise = $interval(function() {
        if (second <= 0) {
          $interval.cancel(timePromise);
          timePromise = undefined;
          second = 60;
          vm.paracont = '重发验证码';
          vm.paraclass = 'but_null';
          vm.paraevent = true;
        } else {
          vm.paracont = second + '秒后可重发';
          vm.paraclass = 'not but_null';
          second--;
        }
      }, 1000, 100);
    })
    .controller('CheckBoxCtrl', function() {
      var vm = this;
      vm.filter = {
        blue: false
      };
     // vm.hello =function () {
     //   if (vm.filter.blue==true){
     //     console.log("Hello");
     //   }else {
     //     console.dir("Bye");
     //   }
     // }
    });
});
