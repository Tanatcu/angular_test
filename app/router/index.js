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
			.state('comments', {
				url: '/post/:postId/comments',
				templateUrl: 'app/views/comments.html',
				controller: ''
			})
			.state('comment', {
				url: '/post/:postId/comment/:commentId',
				templateUrl: 'app/views/comment.html',
				controller: ''
			});

	$urlRouterProvider.otherwise('/');
}
