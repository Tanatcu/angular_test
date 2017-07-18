angular.module('spa', [
	'router',
	'paginationFactory',

	'components',

	'config.toast',
	'constants',
	'filters',

	'requestService',

	'model.post',
	'model.user',
	'model.comment'
]);
