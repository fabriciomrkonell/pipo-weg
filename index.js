(function(){

	'use strict';

	angular.module('app', []);

	angular.module('app').controller('ctrlWEG', ctrlWEG);

	ctrlWEG.$inject = ['$scope', '$http'];

	function ctrlWEG($scope, $http) {

		const address = 'http://127.0.0.1:3001';

		$scope.init = function(){
			$http.get(address).success(function(){
				window.location.href = address;
			}).error(function(){
				console.log('Servidor indisponível!');
				setTimeout(function(){
					$scope.init();
				}, 2000)
			});
		};

  }

}());