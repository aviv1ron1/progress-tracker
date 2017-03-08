"use strict";

const util = require("util");

function isNull(x) {
    return util.isNullOrUndefined(x);
}

function isNotNull(x) {
    return !util.isNullOrUndefined(x);
}

module.exports = class Progress {

    constructor(total, log, intervals) {
        this.log = log;
        this.total = total;
        this.progress = 0;
        if (isNull(intervals)) {
            this.intervals = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
        } else {
            this.intervals = intervals;
        }
    }

    advance(n) {
        if (isNull(n)) n = 1;
        this.progress += n;
        var prog = Math.round(this.progress * 100 / this.total);
        var currProg = null;
        while (prog >= this.intervals[0]) {
            currProg = this.intervals.splice(0, 1)[0];

        }
        if (isNotNull(currProg)) {
            this.log(currProg);
        }
    }
}
