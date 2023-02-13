import move from "../gameFuncs/move.js";
import { info } from "../info.js";
import { mouse } from "../animation/playerAnimation.js";

const gameover = (bool) => {//get true if eatCount is greater than maxEat. get false time is over.
    info.player.x = 0;
    info.player.y = 0;
    info.player.eatCount = 0;
    info.currentKey = "right";
    mouse();

    $(".seed").remove();
    info.seed.createSeed(true);
    $("#player").css({"left": 0});
    $("#player").css({"top": 0});
    $("#player").css("width", info.player.getSize());
    $("#player").css("height", info.player.getSize());
    document.removeEventListener("keydown", move);

    $(".timerModal").remove();

    $("section").hide();
    const body = $("body");
    const overModal = $("<div></div>");
    const overModalChildren = $("<div>restart</div>");
    const msg = $("<div></div>");
    msg.addClass("overModalChildren");
    if(bool) {
        msg.text("Clear!!");
    } else {
        msg.text("Failed..");
    }
    overModal.addClass("overModal");
    overModalChildren.addClass("overModalChildren");
    overModalChildren.click(() => {
        $(".readyModal").show();
        $(".overModal").hide();
    })
    overModal.append(overModalChildren);
    overModal.append(msg)
    body.append(overModal);
}

export default gameover;