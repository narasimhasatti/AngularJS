angular.module('BlogApp').controller('EditBlogController', 
	function($http, $state, $stateParams){

		var vm = this;

		if(!$stateParams.id) return $state.go('Home');
		$http.get('https://bloggerjacquelion.firebaseio.com/' + $stateParams.id + '/.json')
		.success(function(res){
			vm.blog = res;
			vm.blog.id = $stateParams.id;
			console.log(vm.blog);
		})


		vm.editBlog = function(blog){
			$http.put('https://bloggerjacquelion.firebaseio.com/' + $stateParams.id + '/.json', vm.blog).success(function(){
					$state.go('ViewBlog', {id: blog.id})
					console.log("Firebase PUT!");
			});

		};
});