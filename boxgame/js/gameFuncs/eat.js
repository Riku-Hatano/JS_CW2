import gameover from "../modals/gameover.js";
import { info } from "../info.js";

const eat = (direction, player, seed) => {
    switch(direction) {
        case "right":
            player.x += player.moveSpeed;
            if(player.x < seed.x && seed.x < player.x + player.getSize() == true) {
                if(player.y < seed.y && seed.y < player.y + player.getSize() == true || player.y < seed.y + seed.width && seed.y + seed.width < player.y + player.getSize()) {
                    afterEat(player, seed);
                    return;
                }
            }
            return {x: player.x, y: player.y}
        case "down":
            player.y += player.moveSpeed;
            if(player.y < seed.y && seed.y < player.y + player.getSize() == true) {
                if(player.x < seed.x && seed.x < player.x + player.getSize() == true || player.x < seed.x + seed.width && seed.x + seed.width < player.x + player.getSize()) {
                    afterEat(player, seed);
                    return;
                }
            }
            return {x: player.x, y: player.y}
        case "left":
            player.x -= player.moveSpeed;
            if(player.x < seed.x + seed.width && seed.x + seed.width < player.x + player.getSize()) {
                if(player.y < seed.y && seed.y < player.y + player.getSize() == true || player.y < seed.y + seed.width && seed.y + seed.width < player.y + player.getSize()) {
                    afterEat(player, seed);
                    return;
                }
            }
            return {x: player.x, y: player.y}
        case "up":
            player.y -= player.moveSpeed;
            if(player.y < seed.y + seed.width && seed.y + seed.width < player.y + player.getSize()) {
                if(player.x < seed.x && seed.x < player.x + player.getSize() == true || player.x < seed.x + seed.width && seed.x + seed.width < player.x + player.getSize()) {
                    afterEat(player, seed);
                    return;
                }
            }
            return {x: player.x, y: player.y}
    }
}

const afterEat = (player, seed) => {
    player.eatCount++;
    $("#player").css("width", `${player.getSize()}px`);
    $("#player").css("height", `${player.getSize()}px`);
    seed.createSeed(false, player);
    if(player.eatCount > info.maxEat) {
        gameover(player, seed, true);
        return;
    }
}

export default eat;