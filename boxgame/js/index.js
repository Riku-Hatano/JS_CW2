import eat from "./eat.js";
import playerClass from "./class/playerClass.js";
import seedClass from "./class/seedClass.js";

let player = new playerClass(20, 20, 0, 0, 0, 10, 10); //width, height, x, y, eatCount, moveSpeed, playerBigger
let seed = new seedClass(10, 10, 0, 0); //width, height, x, y
const playerElement = $("#player");
seed.createSeed(true);

const move = (e) => {
    switch(e.keyCode) {
        case 37:
            playerElement.animate({"left": `-=${player.moveSpeed}px`}, 0, 1);
            eat("left", player, seed);
            console.log({x:player.x, y:player.y})
            break;
        case 38:
            playerElement.animate({"top": `-=${player.moveSpeed}px`}, 0, 1);
            eat("up", player, seed);
            console.log({x:player.x, y:player.y})
            break;
        case 39:
            playerElement.animate({"left": `+=${player.moveSpeed}px`}, 0, 1);
            eat("right", player, seed);
            console.log({x:player.x, y:player.y})
            break;
        case 40:
            playerElement.animate({"top": `+=${player.moveSpeed}px`}, 0, 1);
            eat("down", player, seed);
            console.log({x:player.x, y:player.y})
            break;
        default:
            console.log("illegal key");
    }
}

document.addEventListener("keydown", move);