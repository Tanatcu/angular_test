angular.module('requestService', []).service('$api', api);

api.$inject = ['$http', 'toastr', 'urlRoot'];

function api($http, toast, urlRoot) {

	function _request(method, url, data) {

		var config = {
			method: method,
			url: urlRoot + url
		};

		if (method === "GET") {
			config.params = data
		} else {
			config.data = data
		}

		return $http(config).catch(_error)
	}

	function _error(error) {
		toast.error(error.statusText, error.status)
	}

	this.get = function (url, params) {
		return _request('GET', url, params)
	};

	this.post = function (url, params) {
		return _request('POST', url, params)
	};

	this.patch = function (url, params) {
		return _request('PATCH', url, params)
	};

	this.delete = function (url, params) {
		return _request('DELETE', url, params)
	}
}
