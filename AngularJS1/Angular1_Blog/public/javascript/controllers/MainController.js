angular.module('BlogApp').controller('MainController', function($http){
	var vm = this;

	vm.getBlogs = function(){
		$http.get('https://bloggerjacquelion.firebaseio.com/.json').success(function(res){
			vm.blogs = [];
			for (var prop in res){
				res[prop]._id = prop;
				console.log(res[prop]);
				vm.blogs.push(res[prop]);
 			}
		});
	};

	vm.getBlogs();


	vm.deleteBlog = function(blog){
		$http.delete('https://bloggerjacquelion.firebaseio.com/' + blog._id + '/.json').success(function(){
			vm.getBlogs();
		})

	}

})