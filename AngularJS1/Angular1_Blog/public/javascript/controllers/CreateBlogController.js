angular.module('BlogApp').controller('CreateBlogController',
	function($http, $state, $stateParams){
		var vm = this;

		vm.postBlog = function(){
			//Manipulate String
			var date = new Date();

			var monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ]
			var day = date.getDate(); 
			var monthIndex = date.getMonth(); 
			var year = date.getFullYear(); 

			vm.newBlog.date = monthNames[monthIndex] + " " + day + ", " + year;

			$http.post('https://bloggerjacquelion.firebaseio.com/.json', vm.newBlog).success(function(){
					$state.go('Home');
			});
		}
	}
);