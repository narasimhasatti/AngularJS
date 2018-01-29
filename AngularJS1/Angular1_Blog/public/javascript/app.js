angular.module('BlogApp', ['ui.router']).config(function($stateProvider, $urlRouterProvider){
	$stateProvider.state('Home', {
		url:'/',
		templateUrl: 'templates/home.html'
	}).state('CreateBlog', {
		url:'/blog/create',
		templateUrl: 'templates/createBlog.html'
	}).state('ViewBlog', { 
		url:'/blog/view/:id',
		templateUrl: 'templates/viewBlog.html'
	}).state('EditBlog', {
		url:'/blog/edit/:id',
		templateUrl: 'templates/editBlog.html'
	})
	$urlRouterProvider.otherwise('/');
});