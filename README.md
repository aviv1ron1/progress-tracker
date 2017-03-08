# progress-tracker

small npm module for tracking progress of a set of tasks. you define the total amount of tasks and the intervals for getting progress updates and the callback for receiving the progress updates.

#install

`npm install -g progress-tracker`

# usage

`constructor(total, callback, intervals)`

total - total amount of tasks
callback - to be called on each interval. receives the current interval
intervals [optional] - custom intervals instead of default 10,20,30... 100. should be supplied as a sorted increasing array.

`advance(n)`

advance the tracking.
n [optional] - how many tasks to advance. default is 1.

#examples:

```javascript
var Progress = require('./progress.js');

///////default usage

var prog = new Progress(100, (p) => {
    console.log("### " + p + "%");
})

for (var i = 0; i < 100; i++) {
    prog.advance();
}

///////custom intervals

var prog = new Progress(100, (p) => {
    console.log("### " + p + "%");
}, [5, 15, 30, 60, 90, 100])

for (var i = 0; i < 100; i++) {
    prog.advance();
}


///////custom advance

var prog = new Progress(100, (p) => {
    console.log("### " + p + "%");
})

for (var i = 0; i < 100; i += 22) {
    prog.advance(i);
}
```