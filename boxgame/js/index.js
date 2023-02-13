import { info } from "./info.js";
import gameready from "./modals/gameready.js";
import gameover from "./modals/gameover.js";
import timer from "./modals/timer.js";
import move from "./gameFuncs/move.js";


$("section").hide();
$("#player").css("width", `${info.player.width}px`);
$("#player").css("height", `${info.player.height}px`);
gameready();
$(".readyModalChildren").click((e) => {
    $(".readyModal").hide();
    $("section").show();
    switch(e.target.innerHTML) {
        case "EASY":
            timer(info.difficulity.easy);
            break;
        case "NORMAL":
            timer(info.difficulity.normal);
            break;
        case "HARD":
            timer(info.difficulity.hard);
            break;
    }
    document.addEventListener("keydown", move);
})

export const flagHandler = () => {
    console.log(info);
    gameover(info.player, info.seed, false);
    $(".readyModal").show();
    $("section").hide();
}