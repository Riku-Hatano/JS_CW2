import { info } from "../info.js";
import eat from "./eat.js";

$("section").css("width", info.section.width);
$("section").css("height", info.section.height);
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
            if(info.player.x + info.player.getSize() + info.player.moveSpeed > info.section.width) {
                return;
            }
            playerElement.animate({"left": `+=${info.player.moveSpeed}px`}, 0, 1);
            eat("right", info.player, info.seed);
            console.log({x:info.player.x, y:info.player.y})
            break;
        case 40://down
            if(info.player.y + info.player.getSize() + info.player.moveSpeed > info.section.height) {
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

export default move;