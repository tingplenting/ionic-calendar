'use strict';

angular
	.module('starter',['ionic'])
	.run(run)
	.config(config);

run.$inject = ['$ionicPlatform'];

function run (ionicPlatform) {
	ionicPlatform.ready(function() {
		if(window.cordova && window.cordova.plugins.Keyboard) {
			cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
			cordova.plugins.Keyboard.disableScroll(true);
		}
		if(window.StatusBar) {
			StatusBar.styleDefault();
		}
	});
}

config.$inject = [
			'$stateProvider',
			'$urlRouterProvider',
			'$ionicConfigProvider'
		];

function config (stateProvider,urlRouterProvider,ionicConfigProvider) {
	stateProvider
	.state('day', {
		url: '/day',
		templateUrl: 'templates/day.html',
		controller: 'dayCtrl'
	})
	.state('month', {
		url: '/month',
		templateUrl: 'templates/month.html',
		controller: 'monthCtrl'
	})
	.state('year', {
		url: "/year",
		templateUrl: "templates/year.html",
		controller: "yearCtrl"
	});

	urlRouterProvider.otherwise('/day');
	ionicConfigProvider.backButton.previousTitleText(false).text('');
}
