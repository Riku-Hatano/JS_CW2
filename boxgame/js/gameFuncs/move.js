import { info } from "../info.js";
import changeColor from "../animation/changeColor.js";
import { mouse } from "../animation/playerAnimation.js";
// import playerAnimation from "../animation/playerAnimation.js";
import eat from "./eat.js";

//initialing. define the size of field and creating seed.
$("section").css("width", info.section.width);
$("section").css("height", info.section.height);
const playerElement = $("#player");
// info.seed.createSeed(true); 

const move = (e) => { //this functiou will be called everytime player push the key. 
    switch(e.keyCode) {
        case 37://left
            if(info.player.x - info.player.moveSpeed < 0) { //prevent player box from getting out of field
                return;
            }
            info.currentKey = "left";
            mouse();
            playerElement.animate({"left": `-=${info.player.moveSpeed}px`}, 0);
            eat("left"); //call the function that checks if player box eats seed or not.
            console.log({x:info.player.x, y:info.player.y})
            break;
        case 38://top
            if(info.player.y - info.player.moveSpeed < 0) {
                return;
            }
            info.currentKey = "top";
            mouse();
            playerElement.animate({"top": `-=${info.player.moveSpeed}px`}, 0);
            eat("up");
            console.log({x:info.player.x, y:info.player.y})
            break;
        case 39://right
            if(info.player.x + info.player.getSize() + info.player.moveSpeed > info.section.width) {
                return;
            }
            info.currentKey = "right";
            mouse();
            playerElement.animate({"left": `+=${info.player.moveSpeed}px`}, 0);
            eat("right");
            console.log({x:info.player.x, y:info.player.y})
            break;
        case 40://down
            if(info.player.y + info.player.getSize() + info.player.moveSpeed > info.section.height) {
                return;
            }
            info.currentKey = "bottom";
            mouse();
            playerElement.animate({"top": `+=${info.player.moveSpeed}px`}, 0);
            eat("down");
            console.log({x:info.player.x, y:info.player.y})
            break;
        default:
            console.log("illegal key");
    }
}

export default move;