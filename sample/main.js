require.config({
    paths: {
        jquery: "jquery-1.9.1"
    }
});

define([ "jquery", "../timeout", "../interval", "../audioplayback" ], function () {
    var timeout = $.setTimeout(2000)
        .done(function () {
            console.log("Timeout expired");
        })
        .fail(function () {
            console.log("Timeout aborted");
        });

    var interval = $.setInterval(1000)
        .progress(function () {
            console.log("Interval fired");
        })
        .fail(function () {
            console.log("Interval aborted");
        });

    var playback = $.playbackAudio("clbone.wav")
        .done(function () {
            console.log("Playback complete");
        })
        .fail(function () {
            console.log("Playback aborted/failed");
        });

    //timeout.abort();
    //interval.abort();
    //playback.abort();
});
