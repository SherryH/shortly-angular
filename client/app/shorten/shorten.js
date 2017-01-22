angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {}; //visits, url, title

  $scope.addLink = function() {
    $scope.loading = true;
    console.log('SHORTEN THIS LINK', $scope.link);
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
