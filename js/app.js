

var ZeroApp = angular.module('ZeroApp', [
    'ngRoute',
    'ZeroAppControllers'
]);
 
ZeroApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/news', {
          templateUrl: 'news.html',
          controller: 'NewsCtrl'
      }).
      when('/agenda', {
          templateUrl: 'agenda.html', 
          controller: 'AgendaCtrl'
      }).
      when('/agenda/:talkId', {
          templateUrl: 'talk.html',
          controller: 'TalkCtrl'
      }).
      when('/speaker/', {
          templateUrl: 'speaker-list.html',
          controller: 'SpeakerListCtrl'
      }).
      when('/speaker/:speakerId', {
          templateUrl: 'speaker-detail.html',
          controller: 'SpeakerDetailCtrl'
      }).
      when('/favorites/', {
          templateUrl: 'favorites.html',
          controller: 'FavoriteCtlr'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);
