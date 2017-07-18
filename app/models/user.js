angular.module('model.user', []).service('userModel', userModel);

userModel.$inject = ['$api', 'toastr'];

function userModel($api, toast) {

	/**
	 * Getting 100 users
	 * @returns {array}
	 */
	this.getAll = function () {
		return $api.get('users/')
	};

	/**
	 * Getting users by filter params
	 * @param filter
	 */
	this.getByFilter = function (filter) {
		return $api.get('users', filter)
	};

	/**
	 * Getting user by id
	 * @param id - id of user
	 * @returns {promise}
	 */
	this.get = function (id) {
		return $api.get('users/' + id)
	};

	/**
	 * Creating user from user object
	 * @param user - user object
	 * @returns {promise}
	 */
	this.create = function (user) {
		toast.success("User was created");
		return $api.post('users', user)
	};

	/**
	 * Updating user by id and using object with new data
	 * @param user
	 * @returns {promise}
	 */
	this.update = function (user) {
		toast.success("User was updated");
		return $api.patch('users/' + user.id, user)
	};

	/**
	 * Deleting user by id
	 * @param id
	 * @returns {promise}
	 */
	this.delete = function (id) {
		toast.info("User was deleted", "Attention!");
		return $api.delete('users/' + id)
	};

}