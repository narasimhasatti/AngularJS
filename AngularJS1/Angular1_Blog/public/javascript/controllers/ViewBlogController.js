angular.module('BlogApp').controller('ViewBlogController', function($http, $state, $stateParams){
	var vm = this;

	$http.get('https://bloggerjacquelion.firebaseio.com/' + $stateParams.id + '/.json')
		.success(function(res){
			console.log(res);
 			vm.b = res;
 			vm.b._id = $stateParams.id;
 			console.log(vm.b);

		})

	vm.deleteBlog = function(blog){
		$http.delete('https://bloggerjacquelion.firebaseio.com/' + blog._id + '/.json').success(function(){
			$state.go('Home');
		})

	}
});