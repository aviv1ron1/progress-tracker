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
