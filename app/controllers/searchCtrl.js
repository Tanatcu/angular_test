angular.module('spa').controller('searchCtrl', searchCtrl);

searchCtrl.$inject = ['$scope', 'postModel', 'commentModel', '$state'];

function searchCtrl($scope, postModel, commentModel, $state) {
	$scope.searchField = '';

	postModel.getAll().then(function (result) {
		$scope.posts = result.data;
	});

	commentModel.getAllComments().then(function (result) {
		$scope.comments = result.data;
	});

	$scope.showPost = function (post) {
		$state.go('post', {postId: post.id})
	};

	$scope.showComment = function (comment) {
		$state.go('post', {postId: comment.postId})
	};
}