angular.module('spa').controller('postsCtrl', postsCtrl);

postsCtrl.$inject = ['postModel', '$scope', '$state', 'Pagination', '$rootScope'];

function postsCtrl(postModel, $scope, $state, Pagination, $rootScope) {
	var pagination = null;

	postModel.getAll().then(function (result) {
		pagination = Pagination(result.data);

		$scope.posts = pagination.current();
		$scope.total = pagination.total();
	});

	$scope.delete = function (post, index) {
		postModel.delete(post.id).then(function () {
			$scope.posts.splice(index, 1);
			$scope.count = $scope.posts.length;
		})
	};

	$scope.addPost = function () {
		$rootScope.$broadcast('openPostModal', {});
	};

	$scope.showPost = function (post) {
		$state.go('post', {postId: post.id})
	};

	$scope.editPost = function (post) {
		$scope.$broadcast('openPostModal', post)
	};

	$scope.prevPage = function () {
		$scope.posts = pagination.prev();
	};

	$scope.nextPage = function () {
		$scope.posts = pagination.next();
	};

	$scope.$watch('posts', function (val) {
		if (!val) return false;

		$scope.currentItem = val[0].id;
	});
}
