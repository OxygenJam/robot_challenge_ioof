
const ROBOTS = require("./robots");

var playTbl = new ROBOTS.Table();


function parseInput(s) {
    const inputs = (s.toLocaleUpperCase()).split(" ");

    const cmnd = inputs[0];

    if (cmnd === "PLACE") {
        const args = inputs[1].split(",");
        if (args.length >= 3) {
            const x = args[0];
            const y = args[1];
            const f = args[2];

            playTbl.place(+x, +y, f);
        }
    }
    else if (cmnd === "MOVE") {
        playTbl.move();
    }
    else if (cmnd === "REPORT") {
        console.log("CALLED");
        playTbl.report();
    }
    else if (cmnd === "LEFT") {
        playTbl.left();
    }
    else if (cmnd === "RIGHT") {
        playTbl.right();
    }
    else if (cmnd === "ROBOT") {
        const arg = inputs[1];
        playTbl.setActive(+arg);
    }
    else {
        return;
    }
}

module.exports = {
    parseInput
};