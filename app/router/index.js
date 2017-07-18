angular.module('router', ['ui.router']).config(routerConfig);

routerConfig.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider'];

function routerConfig($stateProvider, $locationProvider, $urlRouterProvider) {

	$locationProvider.html5Mode({enabled: true, requireBase: false});

	$stateProvider
			.state('posts', {
				url: '/',
				templateUrl: 'app/views/posts.html',
				controller: 'postsCtrl'
			})
			.state('post', {
				url: '/post/:postId',
				templateUrl: 'app/views/post.html',
				controller: 'postCtrl'
			})
			.state('search', {
				url: '/search',
				templateUrl: 'app/views/search.html',
				controller: 'searchCtrl'
			});

	$urlRouterProvider.otherwise('/');
}
