

var ZeroAppControllers = angular.module('ZeroAppControllers', []);
 
ZeroAppControllers.controller('NewsCtrl', ['$scope','$http',
 function NewsCtrl($scope, $http) {
  $scope.news = [
      {'header': 'Nexus S',
       'content': 'Fast just got faster with Nexus S.'},
      {'header': 'Motorola XOOM™ with Wi-Fi',
       'content': 'The Next, Next Generation tablet.'},
      {'header': 'MOTOROLA XOOM™',
       'content': 'The Next, Next Generation tablet.'}
  ];
}]);

ZeroAppControllers.controller('AgendaCtrl', ['$scope','$http',
 function AgendaCtrl($scope, $http) {
     $http.get('info/talks.json').success(function(data) {
         //$scope.talks = data;
         var track = [];
         var talks = data;

         var track1 = $.grep(talks, function(n){ return n.track == 1});
         var track2 = $.grep(talks, function(n){ return n.track == 2});
         var track3 = $.grep(talks, function(n){ return n.track == 3});
         var track4 = $.grep(talks, function(n){ return n.track == 4});
         
         var talks  = [];

         for(var i = 0; i < track1.length; i++){
             var slot= [];
             slot.push(track1[i]);
             slot.push(track2[i]);
             slot.push(track3[i]);
             slot.push(track4[i]); 
             talks.push(slot)
             }
                        
         $scope.talks = talks
     });


                                              
}]);

ZeroAppControllers.controller('TalkCtrl', ['$scope','$routeParams','$http',
 function TalkCtrl($scope, $routeParams, $http) {
     $http.get('info/talks.json').success(function(data) {
         $scope.talkId = $routeParams.talkId
         $scope.talk = $.grep(data, function(n) {return n.id == $routeParams.talkId  })[0];
         
         $scope.add_favorite = function(id) {
             var favorites = [];

             if (typeof(localStorage.favorite) == "undefined") {
                 localStorage.favorite = [];
             }  else {
                 favorites = localStorage.favorite.split(',')
             }

             if (favorites.indexOf(id.toString()) == -1 ) {
                 favorites.push(id);
             }
                                  
             localStorage.favorite = favorites;

         };

     });

}]);

ZeroAppControllers.controller('SpeakerListCtrl', ['$scope','$http',
 function SpeakerListCtrl($scope, $http) {
     $http.get('info/speakers.json').success(function(data) {
                        
         $scope.speakers = data
     });
                                              
}]);

ZeroAppControllers.controller('SpeakerDetailCtrl', ['$scope','$routeParams','$http',
 function SpeakerDetail($scope, $routeParams, $http) {
     $http.get('info/speakers.json').success(function(data) {
         $scope.speaker = $.grep(data, function(n) {return n.id == $routeParams.speakerId  })[0];
         
     });

}]);

ZeroAppControllers.controller('FavoriteCtlr', ['$scope','$routeParams','$http',
 function FavoriteCtrl($scope, $routeParams, $http) {
     $http.get('info/talks.json').success(function(data) {
         var favorite = localStorage.favorite.split(',').slice(1);
         
         $scope.fav = "asd";
         $scope.favorites = $.grep(data, function(n) {return favorite.indexOf(n.id.toString())!=-1 });
         
         });
}]);



