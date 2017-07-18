angular.module('filters', []).filter('global', function () {
	return function (input, search) {
		if (!input) return input;
		if (!search) return input;

		var expected = ('' + search).toLowerCase();
		var result = {};

		angular.forEach(input, function (value, key) {
			var title = ('' + value.title).toLowerCase();
			var name = ('' + value.name).toLowerCase();

			if (title.indexOf(expected) !== -1 || name.indexOf(expected) !== -1) {
				result[key] = value;
			}
		});
		return result;
	}
});