'use strict';

angular
	.module('starter')
	.factory('Service',Service);

Service.$inject = ['$rootScope','$ionicPopover'];

function Service (rootScope,ionicPopover) {

	var animation = 'slide-in-up';

	return {
		popOver: function() {
			ionicPopover.fromTemplateUrl('templates/popover.html', {
				scope: rootScope,
				animation: animation
			}).then(function(popover) {
				rootScope.popover = popover;
			});
		},
		slideInSmooth: function(elementId) {
			var element = angular.element(document.querySelector(elementId));
			element.addClass('slide-in-smooth');
			setTimeout(function() {
				element.removeClass('slide-in-smooth');
			}, 750);
		}
	};

}
