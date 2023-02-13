import { info } from "../info.js";
import gameover from "../modals/gameover.js";

const afterEat = () => {
    info.player.eatCount++;
    $("#player").css("width", `${info.player.getSize()}px`);
    $("#player").css("height", `${info.player.getSize()}px`);
    $("#layer").css("border", `${info.player.getSize()}px solid transparent`);
    $("#layer").css(`border-${info.currentKey}`, `${info.player.getSize()}px solid gainsboro`)
    info.seed.createSeed(false, info.player);
    if(info.player.eatCount > info.maxEat) { //show modal if player accomplished the purpose.
        gameover(info.player, info.seed, true);
        return;
    }
}

export default afterEat;