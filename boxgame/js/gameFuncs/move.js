import seedClass from "../class/seedClass.js";
import playerClass from "../class/playerClass.js";
import eat from "./eat.js";

export let info = {
    player: new playerClass(20, 20, 0, 0, 0, 10, 10), //width, height, x, y, eatCount, moveSpeed, playerBigger
    seed:  new seedClass(10, 10, 0, 0), //width, height, x, y
    sectionWidth: 200,
    sectionHeight: 200,
}

// let player = new playerClass(20, 20, 0, 0, 0, 10, 10); //width, height, x, y, eatCount, moveSpeed, playerBigger
// let seed = new seedClass(10, 10, 0, 0); //width, height, x, y
// const sectionWidth = 200;
// const sectionHeight = 200;

$("section").css("width", info.sectionWidth);
$("section").css("height", info.sectionHeight);
const playerElement = $("#player");
info.seed.createSeed(true);

const move = (e) => {
    switch(e.keyCode) {
        case 37://left
            if(info.player.x - info.player.moveSpeed < 0) {
                return;
            }
            playerElement.animate({"left": `-=${info.player.moveSpeed}px`}, 0, 1);
            eat("left", info.player, info.seed);
            console.log({x:info.player.x, y:info.player.y})
            break;
        case 38://top
            if(info.player.y - info.player.moveSpeed < 0) {
                return;
            }
            playerElement.animate({"top": `-=${info.player.moveSpeed}px`}, 0, 1);
            eat("up", info.player, info.seed);
            console.log({x:info.player.x, y:info.player.y})
            break;
        case 39://right
            if(info.player.x + info.player.getSize() + info.player.moveSpeed > info.sectionWidth) {
                return;
            }
            playerElement.animate({"left": `+=${info.player.moveSpeed}px`}, 0, 1);
            eat("right", info.player, info.seed);
            console.log({x:info.player.x, y:info.player.y})
            break;
        case 40://down
            if(info.player.y + info.player.getSize() + info.player.moveSpeed > info.sectionHeight) {
                return;
            }
            playerElement.animate({"top": `+=${info.player.moveSpeed}px`}, 0, 1);
            eat("down", info.player, info.seed);
            console.log({x:info.player.x, y:info.player.y})
            break;
        default:
            console.log("illegal key");
    }
}
// $("section").css("width", sectionWidth);
// $("section").css("height", sectionHeight);
// const playerElement = $("#player");
// seed.createSeed(true);

// const move = (e) => {
//     switch(e.keyCode) {
//         case 37://left
//             if(player.x - player.moveSpeed < 0) {
//                 return;
//             }
//             playerElement.animate({"left": `-=${player.moveSpeed}px`}, 0, 1);
//             eat("left", player, seed);
//             console.log({x:player.x, y:player.y})
//             break;
//         case 38://top
//             if(player.y - player.moveSpeed < 0) {
//                 return;
//             }
//             playerElement.animate({"top": `-=${player.moveSpeed}px`}, 0, 1);
//             eat("up", player, seed);
//             console.log({x:player.x, y:player.y})
//             break;
//         case 39://right
//             if(player.x + player.getSize() + player.moveSpeed > sectionWidth) {
//                 return;
//             }
//             playerElement.animate({"left": `+=${player.moveSpeed}px`}, 0, 1);
//             eat("right", player, seed);
//             console.log({x:player.x, y:player.y})
//             break;
//         case 40://down
//             if(player.y + player.getSize() + player.moveSpeed > sectionHeight) {
//                 return;
//             }
//             playerElement.animate({"top": `+=${player.moveSpeed}px`}, 0, 1);
//             eat("down", player, seed);
//             console.log({x:player.x, y:player.y})
//             break;
//         default:
//             console.log("illegal key");
//     }
// }

export default move;