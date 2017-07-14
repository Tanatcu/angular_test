angular.module('paginationFactory', []).factory('paginate', paginate);

function paginate() {
	return function (array) {
		var data = array, counter = 0;

		return {
			current: function () {
				return data.slice(counter, counter + 10)
			},
			prev: function () {
				if (counter > 0) {
					counter -= 10;
				}

				return data.slice(counter, counter + 10);
			},
			next: function () {
				if (counter + 10 < data.length) {
					counter += 10;
				}

				return data.slice(counter, counter + 10);
			}
		}
	}
}
