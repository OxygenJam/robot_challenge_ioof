
// Cardinal values for reference when turning
const CARDINALS = [
    "NORTH",
    "EAST",
    "SOUTH",
    "WEST"
];

/**
 * The robot class
 */
class Robot {

    /**
     * Plane is in 5x5 where 0,0 is SOUTH WEST
     * 
     * Constraints
     *   - Any values exceeding the plane will be ignored
     */

    /**
     * Default constructor for the robot
     * @param x The x coordinate where the robot starts, default 0
     * @param y The y coordinate where the robot starts, default 0
     * @param f Where the robot is facing, default NORTH
     */
    constructor(x = 0, y = 0, f = "NORTH") {
        this.x = x;
        this.y = y;
        this.face = f
    }

    /**
     * Places the robot in the specified coordinates and facing value
     * @param x The x coordinate where the robot starts, default 0
     * @param y The y coordinate where the robot starts, default 0
     * @param f Where the robot is facing, default NORTH
     */
    place(x = 0, y = 0, f = "NORTH") {

    }

    /**
     * Turns where the robot is facing 90 degrees counter-clockwise (CCW)
     */
    left() {
        let f = CARDINALS.indexOf(this.face);

        if (f === 0) {
            f = 3; // Return to 4
        }
        else {
            f--;
        }

        this.face = CARDINALS[f];
    }

    /**
     * Turns where the robot is facing 90 degrees clockwise (CW)
     */
    right() {
        let f = CARDINALS.indexOf(this.face);

        if (f === 3) {
            f = 0; // Return to 0
        }
        else {
            f++;
        }

        this.face = CARDINALS[f];
    }

    /**
     * Moves the robot one unit forward in the plane 
     * where the robot is facing
     */
    move() {
        let f = CARDINALS.indexOf(this.face);
        let x = this.x;
        let y = this.y;

        switch (f) {
            // North, not exceed 4
            case 0: {
                y = y != 4 ? y + 1 : y;
                break;
            }
            // East, not exceed 4
            case 1: {
                x = x != 4 ? x + 1 : x;
                break;
            }
            // South, not below 0
            case 2: {
                y = y != 0 ? y - 1 : y;
                break;
            }
            // West, not below 0
            case 3: {
                x = x != 0 ? x - 1 : x;
                break;
            }
            default:
                break;
        }

        this.x = x;
        this.y = y;
    }

    /**
     * Reports the robot's coordinates and where it is facing
     * @returns {String} The coordinates and where the robot is facing (x, y, face)
     */
    report() {
        const r = `${this.x}, ${this.y}, ${this.face}`;

        return r;
    }
}

/**
 * The current table holding the robots are place
 */
class Table {

    constructor() {
        this.robotsInTable = [];

        this.actvRbt = undefined;
    }

    /**
     * Places robot in the specified coordinates and facing value
     * and adds them in the number of robots in the field
     * @param x The x coordinate where the robot starts, default 0
     * @param y The y coordinate where the robot starts, default 0
     * @param f Where the robot is facing, default NORTH
     */
    place(x = 0, y = 0, f = "NORTH") {

        const robo = new Robot(x, y, f);

        const len = this.robotsInTable.length;

        // Add a new robot in the table
        this.robotsInTable = [[robo, len + 1], ...this.robotsInTable];

        // Default active if first robot
        if(len === 0){
            this.actvRbt = this.robotsInTable[0];
        }
    }

    /**
     * Reports the number of robots in the table and the current
     * active robot's current coordinates and facing value
     * @returns {String} The coordinates and where the robot is facing (x, y, face)
     * and the number of robots in the table
     */
    report() {

        // No Active Robot in the field
        if (!this.actvRbt) {
            return;
        }

        const rbts = `There are ${this.robotsInTable.length} robot(s) currently in the table`;
        const rbtRep = this.actvRbt[0].report();

        console.log(rbts);
        console.log(rbtRep);
    }

    /**
     * Sets the current active robot in the table
     * @param {Number} r The number of the robot to reference for activation 
     */
    setActive(r) {
        const rbtTbl = this.robotsInTable;

        for (let i = 0; i <= rbtTbl.length; i++) {
            const robot = rbtTbl[i];

            if (robot[1] === parseInt(r)) {
                this.actvRbt = robot;
                break;
            }
        }
    }

    /**
     * Turns where the active robot is facing 90 degrees counter-clockwise (CCW)
     */
    left() {
        // No Active Robot in the field
        if (!this.actvRbt) {
            return;
        }

        const rbt = this.actvRbt[0];

        rbt.left();
    }

    /**
     * Turns where the active robot is facing 90 degrees clockwise (CW)
     */
    right() {
        // No Active Robot in the field
        if (!this.actvRbt) {
            return;
        }

        const rbt = this.actvRbt[0];

        rbt.right();
    }

    /**
     * Moves the active robot one unit forward in the plane 
     * where the robot is facing
     */
    move() {
        // No Active Robot in the field
        if (!this.actvRbt) {
            return;
        }

        const rbt = this.actvRbt[0]

        rbt.move();
    }
}

module.exports = {
    Table,
    Robot
}