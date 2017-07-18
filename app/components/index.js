angular.module('components', [])
		.directive('spaHeader', header)
		.directive('postModal', postModal)
		.directive('commentModal', commentModal);

function header() {
	return {
		restrict: 'E',
		templateUrl: 'app/components/templates/header.html'
	}
}

function postModal() {
	return {
		restrict: 'EA',
		replace: true,
		scope: true,
		templateUrl: 'app/components/templates/post.html',
		controller: postModalCtrl
	}
}

function commentModal() {
	return {
		restrict: 'EA',
		replace: true,
		scope: true,
		templateUrl: 'app/components/templates/comment.html',
		controller: commentModalCtrl
	}
}

postModalCtrl.$inject = ['$scope', 'userModel', 'postModel', 'toastr'];

function postModalCtrl($scope, userModel, postModel, toastr) {
	$scope.post = {};
	$scope.isShowPostModal = false;
	$scope.isNew = false;

	userModel.getAll().then(function (list) {
		$scope.users = list.data
	});

	$scope.save = function (post) {
		if (!post.userId) {
			toastr.error('Please, select a user');
			return false;
		}

		var action = ($scope.isNew) ? 'create' : 'update';

		postModel[action](post).then(function () {
			$scope.close();
		});
	};

	$scope.close = function () {
		$scope.isShowPostModal = false;
	};

	$scope.$on('openPostModal', function (scope, data) {
		$scope.headerText = (data.id !== undefined) ? 'Edit post' : 'Add post';
		$scope.isNew = (data.id === undefined);
		$scope.post = data;

		$scope.isShowPostModal = true
	});
}

commentModalCtrl.$inject = ['$scope', 'userModel', 'commentModel', 'toastr'];

function commentModalCtrl($scope, userModel, commentModel, toastr) {
	$scope.comment = {};
	$scope.isShowCommentModal = false;
	$scope.headerText = 'Edit comment';

	userModel.getAll().then(function (list) {
		$scope.users = list.data
	});

	$scope.save = function (comment) {
		if (!comment.email) {
			toastr.error('Please, select a user');
			return false;
		}

		var action = ($scope.isNew) ? 'create' : 'update';

		commentModel[action](comment).then(function () {
			$scope.close();
		});
	};

	$scope.close = function () {
		$scope.isShowCommentModal = false;
	};

	$scope.$on('openCommentModal', function (scope, data) {
		$scope.isShowCommentModal = true;
		$scope.headerText = (data.id !== undefined) ? 'Edit comment' : 'Add comment';
		$scope.isNew = !data.id;

		$scope.comment = data;
	});

}
