define(['../app'], function() {
  return angular.module('services', [])
    .factory('messages', function() {
      var messages;
      messages = {
        provinces: ['北京', '天津', '福建'],
        cities: ['福州', '厦门', '泉州'],
        branch: []
      };
      return messages;
    });
});
