(function(){
	angular.module('app')
	.controller('NavController', NavController);

	NavController.$inject = ['$state', 'UserFactory', '$rootScope'];

	function NavController($state, UserFactory, $rootScope) {
		var vm = this;
		vm.user = {} ;
		vm.status = $rootScope._user ;
		console.log('navcontroller');

		vm.register = function() {
			console.log("DEBUG: NavController vm.register called.") ;
			UserFactory.register(vm.user).then(function() {
				vm.user = {} ;
				$state.go('Home') ;
			}) ;
		} ;

		vm.login = function() {
			console.log("DEBUG: NavController vm.login called.") ;
			UserFactory.login(vm.user).then(function() {
				vm.status = $rootScope._user ;
				$state.go('Home') ;
			}) ;
		} ;

		vm.logout = function() {
			UserFactory.logout() ;
			vm.status = $rootScope._user ;
			$state.go('Home') ;
		} ;

	} ;

})() ;