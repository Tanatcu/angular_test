angular.module('spa').controller('postsCtrl', postsCtrl);

postsCtrl.$inject = ['postModel', '$scope', '$state', 'paginate'];

function postsCtrl(postModel, $scope, $state, paginate) {
	var pag = null;

	postModel.getAll().then(function (result) {
		pag = paginate(result.data);
		$scope.posts = pag.current();
	});

	$scope.showPost = function (post) {
		$state.go('post', {
			postId: post.id
		})
	};

	$scope.prevPage = function () {
		$scope.posts = pag.prev();
	};

	$scope.nextPage = function () {
		$scope.posts = pag.next();
	};

	$scope.delete = function (post, index) {
		postModel.delete(post.id).then(function () {
			$scope.posts.splice(index, 1);
			$scope.count = $scope.posts.length;
		})
	};

	$scope.$watch('posts', function (val) {
		if (val) {
			$scope.currentItem = val[0].id;
		}
	})
}
