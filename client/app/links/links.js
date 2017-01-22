angular.module('shortly.links', [])

.controller('LinksController', function ($scope, $location, Links) {
  //count the visits - event handler to count and save
  //get from db to display
  $scope.link = {};

  $scope.data = {};
  // $scope.visits = 1;
  // $scope.title = 'Star Wars';
  // $scope.url = 'http://www.google.com';

  $scope.getAll = (function() {
    Links.getAll()
      .then(function (data) {
        console.log('DATA SHOULD BE LINKS', data);
        //$window.localStorage.setItem('com.shortly', token);
        $scope.data.links = data;
        // console.log('datalinks visits: ',$scope.data.links.visits);
        // console.log('datalinks title: ',$scope.data.links.title);
        // console.log('datalinks url: ',$scope.data.links.url);
        $location.path('/links');
      })
      .catch(function (error) {
        console.error(error);
      });
  })();

  $scope.addOne = function() {
    Links.addOne($scope.link, function(response){
      console.log('RESPONSE FROM ADD LINK', response);
    });
  };

});


// angular.module('scopeExample', [])
// .controller('MyController', ['$scope', function($scope) {
//   $scope.username = 'World';

//   $scope.sayHello = function() {
//     $scope.greeting = 'Hello ' + $scope.username + '!';
//   };
// }]);



// <img src='/redirect_icon.png'/>
//   <div class='info'>
//     <div class='visits'><span class='count'>{{visits}}</span>Visits</div>
//     <div class='title'>{{title}}</div>
//     <div class='original'>{{url}}</div>
//     <a href='{{baseUrl}}/{{code}}'>{{baseUrl}}/{{code}}</a>
//   </div>





//random notes
//e.g. to increment visits on click (wihtout talking to db)
// $scope.visits = $scope.visits++ || 1;
//
// html
// <div>{{visits}}</div>

// to save the link to DB and retrieve the data from db.. Factory/ Service
