angular.module('AngularRails')
    .controller('TestCtrl', ['$http','$scope', function($http, $scope){
    	var list = this;
    	$scope.mvpds = [];
    	$http.get('/api/test').success(function(data){
    		$scope.mvpds = data;
    	})
    }]
);