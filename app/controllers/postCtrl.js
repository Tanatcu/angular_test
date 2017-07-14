angular.module('spa').controller('postCtrl', postCtrl);

postCtrl.$inject = ['postModel', '$scope', '$stateParams'];

function postCtrl(postModel, $scope, $stateParams) {

	postModel.get($stateParams.postId).then(function (post) {
		$scope.post = post.data;
	});

}