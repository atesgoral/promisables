# promisables
A set of asynchronous operation wrappers that return Promise interfaces augmented with an `.abort()` method to abort the operation.

## Timeout / jQuery.setTimeout

Wraps a `window.setTimeout()` call.

### Usage

```js
require([ "jquery", "timeout" ], function ($, Timeout) {
	var timeout = new Timeout(2000);
	// Identical to:
	// var timeout = $.setTimeout(2000);

	timeout.done(function () {
		console.log("Timeout expired");
	});

	timeout.fail(function () {
		console.log("Timeout aborted");
	});

	$("#abort_timeout").click(timeout.abort);
});
```

## Interval / jQuery.setInterval

Wraps a `window.setInterval()` call.

### Usage

```js
require([ "jquery", "interval" ], function ($, Interval) {
	var interval = new Interval(1000);
	// Identical to:
	// var interval = $.setInterval(1000);

	interval.progress(function () {
		console.log("Interval fired");
	});

	interval.fail(function () {
		console.log("Interval aborted");
	});

	$("#abort_interval").click(interval.abort);
});
```
## AudioPlayback / jQuery.playbackAudio

Wraps an HTML5 `<audio>` tag playback.

### Usage

```js
require([ "jquery", "audioplayback" ], function ($, AudioPlayback) {
	var playback = new AudioPlayback("hello.wav");
	// Identical to:
	// var playback = $.playbackAudio("hello.wav");

	playback.done(function () {
		console.log("Playback complete");
	});

	playback.fail(function () {
		console.log("Playback aborted/failed");
	});

	$("#abort_playback").click(playback.abort);
});
```

## License

MIT
