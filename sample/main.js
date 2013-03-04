require.config({
    paths: {
        jquery: "jquery-1.9.1"
    }
});

define([ "jquery", "../timeout", "../interval" ], function () {
    var timeout = $.setTimeout(2000).done(function () {
        console.log("2 sec timeout expired");
    });

    var interval = $.setInterval(1000).progress(function () {
        console.log("1 sec interval fired");
    });

    //timeout.abort();
    //interval.abort();
});
