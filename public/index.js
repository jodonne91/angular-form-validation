var appModule = angular.module("appModule",[])
.controller("appController", ["$scope","$timeout",function($scope, $timeout){

	$scope.checks = {};
	$scope.checks.name = true;
	$scope.checks.message = true;
	$scope.checks.email = true;
	$scope.checks.website = true;
	$scope.errors = {};

	$scope.$watch(function($scope){return $scope.name},function(){
		//console.log($scope.name)
		if(!$scope.name){
			$scope.errors.name = "error";
		}
		else{
			$scope.errors.name = ""
		}
	})

	$scope.$watch(function($scope){return $scope.email}, function(){
		if (!$scope.email){
	    	$scope.errors.email = 'error';
	    }
	    else{
	    	$scope.errors.email = ""
	    }
	})

	$scope.$watch(function($scope){return $scope.website}, function(){
	    if (!$scope.website){
	    	$scope.errors.website = 'error';
	    }
	    else{
	    	$scope.errors.website = ""
	    }
	})

	$scope.$watch(function($scope){return $scope.message}, function(){
	    if (!$scope.message){
	    	$scope.errors.message = 'error';
	    }
	    else{
	    	$scope.errors.message = ""
	    }

	})

  	$scope.submitButton = function() {

	    $scope.errors = {}
	    $scope.checks.name = true;
	    $scope.checks.message = true;
	    $scope.checks.website = true;
	    $scope.checks.email = true;
	    var websiteString = _.first($scope.website,[7]);
	    $scope.checks.website = (_.isEqual(websiteString,['h','t','t','p',':','/','/']));
	    $scope.checks.email = !(_.indexOf($scope.email, '@') === -1)

	    if (!$scope.name) {
	    	$scope.errors.name = "error";
	    	$scope.checks.name = false;
	    }
	    if ((!$scope.email) || !($scope.checks.email)){
	    	$scope.errors.email = 'error';
	    }
	    if ((!$scope.website) || !($scope.checks.website)){
	    	$scope.errors.website = 'error';
	    }
	    if (!$scope.message){
	    	$scope.errors.message = 'error';
	    	$scope.checks.message = false;
	    }

	}

}])
