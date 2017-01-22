angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {}; //visits, url, title

  $scope.addLink = function() {
    $scope.loading = true;
    Links.addOne($scope.link, function(err, res){
      if(err) {
        console.log('ERROR', err);
      }else {
        console.log('RESPONSE FROM ADD LINK', res);
        $scope.loading = false;
        $location.path('/');
      }

    });
  };

});
