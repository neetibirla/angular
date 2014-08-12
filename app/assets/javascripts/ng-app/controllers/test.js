angular.module('AngularRails')
    .controller('TestCtrl', ['$http', function($http){
    	var list = this;
    	list.mvpds = [];
    	$http.get('/test').success(function(data){
    		list.mvpds = data;
    	})
    }]
);