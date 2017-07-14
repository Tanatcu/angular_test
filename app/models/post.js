angular.module('model.post', []).service('postModel', postModel);

postModel.$inject = ['$api', 'toastr'];

function postModel($api, toast) {

	/**
	 * Getting 100 posts
	 * @returns {array}
	 */
	this.getAll = function () {
		return $api.get('posts/')
	};

	/**
	 * Getting post by id
	 * @param id - id of post
	 * @returns {promise}
	 */
	this.get = function (id) {
		return $api.get('posts/' + id)
	};

	/**
	 * Creating post from post object
	 * @param post - post object
	 * @returns {promise}
	 */
	this.create = function (post) {
		toast.success("Post was created");
		return $api.post('posts', post)
	};

	/**
	 * Updating post by id and using object with new data
	 * @param post
	 * @returns {promise}
	 */
	this.update = function (post) {
		toast.success("Post was updated");
		return $api.patch('posts/' + post.id, post)
	};

	/**
	 * Deleting post by id
	 * @param id
	 * @returns {promise}
	 */
	this.delete = function (id) {
		toast.info("Post was deleted", "Attention!");
		return $api.delete('posts/' + id)
	};

}