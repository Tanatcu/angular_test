angular.module('model.comment', []).service('commentModel', commentModel);

commentModel.$inject = ['$api'];

function commentModel($api) {

	/**
	 * Getting 100 comments
	 * @returns {promise}
	 */
	this.getAll = function () {
		return $api.get('/comments')
	};

	/**
	 * Getting comment by id
	 * @param id
	 * @returns {promise}
	 */
	this.get = function (id) {
		return $api.get('/comments/' + id)
	};

	/**
	 * Creating comment using comment object
	 * @param comment
	 * @return {promise}
	 */
	this.create = function (comment) {
		toast.success("Comment was created");
		return $api.post('/comments', comment)
	};

	/**
	 * Updating comment by id using new comment object
	 * @param comment
	 * @return {promise}
	 */
	this.update = function (comment) {
		toast.success("Comment was updated");
		return $api.patch('/comments/' + comment.id, comment)
	};

	/**
	 * Deleting comment by id
	 * @param id
	 * @return {promise}
	 */
	this.delete = function (id) {
		toast.info("Comment was deleted", "Attention!");
		return $api.delete('/comments/' + id)
	};
}
