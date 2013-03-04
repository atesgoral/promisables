/**
 * An abortable, promise-returning audio playback wrapper
 */
define([ "jquery" ], function ($) {
    function AudioPlayback(url) {
        var playback = $.Deferred(),
            audio = new window.Audio(url);

        audio.addEventListener("ended", playback.resolve, true);

        [ "abort", "error", "emptied", "stalled" ].forEach(function (type) {
            audio.addEventListener(type, playback.reject, true);
        });

        audio.play();

        playback.promise(this);

        this.abort = function () {
            audio.pause();
            audio.src = "";
        };
    }

    $.playbackAudio = $.playbackAudio || function (url) {
        return new AudioPlayback(url);
    };

    return AudioPlayback;
});
