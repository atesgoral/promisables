require.config({
    paths: {
        jquery: "jquery-1.9.1"
    }
});

define([ "jquery", "../timeout", "../interval", "../audioplayback" ], function () {
    var timeout = $.setTimeout(2000)
        .done(function () {
            console.log("2 sec timeout expired");
        })
        .fail(function () {
            console.log("timeout aborted");
        });

    var interval = $.setInterval(1000)
        .progress(function () {
            console.log("1 sec interval fired");
        })
        .fail(function () {
            console.log("interval aborted");
        });

    var playback = $.playbackAudio("clbone.wav")
        .done(function () {
            console.log("playback complete");
        })
        .fail(function () {
            console.log("playback aborted");
        });

    //timeout.abort();
    //interval.abort();
    //playback.abort();
});
