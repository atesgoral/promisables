/**
 * An abortable, promise-returning setTimeout wrapper
 */
define([ "jquery" ], function ($) {
    function Timeout(delay) {
        var timeout = $.Deferred(),
            id = window.setTimeout(timeout.resolve, delay);

        timeout.promise(this);

        this.abort = function () {
            window.clearTimeout(id);
            timeout.reject();
        };
    }

    $.setTimeout = $.setTimeout || function (delay) {
        return new Timeout(delay);
    };

    return Timeout;
});
