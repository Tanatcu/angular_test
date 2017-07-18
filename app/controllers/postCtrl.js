angular.module('spa').controller('postCtrl', postCtrl);

postCtrl.$inject = ['$scope', '$stateParams', 'postModel', 'commentModel', '$rootScope'];

function postCtrl($scope, $stateParams, postModel, commentModel, $rootScope) {
	var postId = $stateParams.postId;

	postModel.get(postId).then(function (post) {
		$scope.post = post.data;
	});

	commentModel.getAll(postId).then(function (comments) {
		$scope.comments = comments.data;
	});

	$scope.addComment = function () {
		$rootScope.$broadcast('openCommentModal', {});
	};

	$scope.editComment = function (comment) {
		$scope.$broadcast('openCommentModal', comment);
	};

	$scope.remove = function (id, index) {
		commentModel.delete(id).then(function () {
			$scope.comments.splice(index, 1);
		})
	}

}