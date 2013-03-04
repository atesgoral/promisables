/**
 * An abortable, promise-returning setInterval wrapper
 */
define([ "jquery" ], function ($) {
	function Interval(delay) {
		var interval = $.Deferred(),
			id = window.setInterval(interval.notify, delay);

		interval.promise(this);

		this.abort = function () {
			window.clearInterval(id);
			interval.reject();
		};
	}

	$.setInterval = $.setInterval || function (delay) {
		return new Interval(delay);
	};

	return Interval;
});
