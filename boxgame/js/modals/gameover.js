import move from "../gameFuncs/move.js";

const gameover = (player, seed, bool) => {
    player.x = 0;
    player.y = 0;
    player.eatCount = 0;

    $(".seed").remove();
    seed.createSeed(true);
    $("#player").css({"left": 0});
    $("#player").css({"top": 0});
    $("#player").css("width", player.getSize());
    $("#player").css("height", player.getSize());
    document.removeEventListener("keydown", move);

    $(".timerModal").remove();

    $("section").hide();
    const body = $("body");
    const overModal = $("<div></div>");
    const overModalChildren = $("<div>restart</div>");
    const msg = $("<div></div>");
    msg.addClass("overModalChildren");
    if(bool) {
        msg.text("done");
    } else {
        msg.text("fail");
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