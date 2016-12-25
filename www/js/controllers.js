'use strict';

angular
	.module('starter')
	.controller('dayCtrl',dayCtrl)
	.controller('monthCtrl',monthCtrl)
	.controller('yearCtrl',yearCtrl);

dayCtrl.$inject = ['$scope','Service'];

function dayCtrl (scope,Service) {

	Service.popOver();

	function hariHari (num) {

		var tanggal = new Date();
		tanggal.setDate(tanggal.getDate() + num);

		var dd = tanggal.getDate();
		var mm = tanggal.getMonth() + 1;
		var yyyy = tanggal.getFullYear();

		var dateFormated = yyyy + '-' + mm + '-' +dd;
		return dateFormated;
	}

	scope.gesture = {
		used: ''
	};

	var countGesture = 0;
	scope.dayDay = hariHari(countGesture);

	scope.onSwipeLeft = function() {
		countGesture++;
		Service.slideInSmooth('#content-d');
		scope.dayDay = hariHari(countGesture);
	}

	scope.onSwipeRight =function() {
		countGesture--;
		Service.slideInSmooth('#content-d');
		scope.dayDay = hariHari(countGesture);
	}

}

monthCtrl.$inject = ['$scope','Service'];

function monthCtrl (scope,Service) {

	Service.popOver();

	function bulanBulan (num) {
		var tanggal = new Date();
		tanggal.setMonth(tanggal.getMonth() + num);

		var dd = tanggal.getDate();
		var mm = tanggal.getMonth() + 1;
		var yyyy = tanggal.getFullYear();

		var dateFormated = yyyy + '-' + mm;
		return dateFormated;
	}

	scope.gesture = {
		used: ''
	};

	var countGesture = 0;
	scope.monthMonth = bulanBulan(countGesture);
	scope.monthDate = new Date(bulanBulan(countGesture));

	scope.onSwipeLeft = function() {
		countGesture++;
		Service.slideInSmooth('#content-m');
		scope.monthMonth = bulanBulan(countGesture);
		scope.monthDate = new Date(bulanBulan(countGesture));
	}

	scope.onSwipeRight =function() {
		countGesture--;
		Service.slideInSmooth('#content-m');
		scope.monthMonth = bulanBulan(countGesture);
		scope.monthDate = new Date(bulanBulan(countGesture));
	}


}

yearCtrl.$inject = ['$scope'];

function yearCtrl (scope) {
	// body...
}

