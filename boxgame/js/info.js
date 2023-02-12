import playerClass from "./class/playerClass.js"
import seedClass from "./class/seedClass.js"

export let info = {
    player: new playerClass(20, 20, 0, 0, 0, 10, 10), //width, height, x, y, eatCount, moveSpeed, playerBigger
    seed:  new seedClass(10, 10, 0, 0), //width, height, x, y
    section: {
        width: 200,
        height: 200
    },
    difficulity: {
        easy: 2,
        normal: 182,
        hard: 600
    },
    maxEat: 2
}