import eat from "./gameFuncs/eat.js";
import playerClass from "./class/playerClass.js";
import move from "./gameFuncs/move.js";
import gameready from "./modals/gameready.js";
import gameover from "./modals/gameover.js";
import timer from "./modals/timer.js";
import { info } from "./gameFuncs/move.js";
// import { initializeGame } from "./gameFuncs/move.js";
// import returnInfo from "./returnInfo.js";

$("section").hide();
gameready();
$(".readyModalChildren").click((e) => {
    $(".readyModal").hide();
    $("section").show();
    switch(e.target.innerHTML) {
        case "EASY":
            timer(200);
            break;
        case "NORMAL":
            timer(400);
            break;
        case "HELL":
            timer(600);
            break;
    }
    document.addEventListener("keydown", move);
})

export const flagHandler = () => {
    console.log(info.player, info.seed);
    gameover(info.player, info.seed, false);
    $(".readyModal").show();
    $("section").hide();
}