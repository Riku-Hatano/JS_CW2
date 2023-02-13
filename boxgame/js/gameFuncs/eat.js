import { info } from "../info.js";
import afterEat from "./afterEat.js";

const eat = (direction) => {
    const player = info.player;
    const seed = info.seed;
    switch(direction) {
        case "right":
            player.x += player.moveSpeed;
            //1. turn out true by checking x axis if x axis of player box < x axis of seed < x axis of player box + width
            //2. turn out true by checking y axis if y axis of player box < y axis of seed < y axis of player box + height OR y axis of player box < y axis of seed + height of seed < y axis of player box + height 
            //!! first condition in number 2 is checking out top,nand second condition is for bottom. same thing happens in other directions.
            if(player.x < seed.x && seed.x < player.x + player.getSize() == true) {
                if(player.y < seed.y && seed.y < player.y + player.getSize() == true || player.y < seed.y + seed.width && seed.y + seed.width < player.y + player.getSize()) {
                    afterEat();
                    return;
                }
            }
            return {x: player.x, y: player.y}
        case "down":
            player.y += player.moveSpeed;
            if(player.y < seed.y && seed.y < player.y + player.getSize() == true) {
                if(player.x < seed.x && seed.x < player.x + player.getSize() == true || player.x < seed.x + seed.width && seed.x + seed.width < player.x + player.getSize()) {
                    afterEat();
                    return;
                }
            }
            return {x: player.x, y: player.y}
        case "left":
            player.x -= player.moveSpeed;
            if(player.x < seed.x + seed.width && seed.x + seed.width < player.x + player.getSize()) {
                if(player.y < seed.y && seed.y < player.y + player.getSize() == true || player.y < seed.y + seed.width && seed.y + seed.width < player.y + player.getSize()) {
                    afterEat();
                    return;
                }
            }
            return {x: player.x, y: player.y}
        case "up":
            player.y -= player.moveSpeed;
            if(player.y < seed.y + seed.width && seed.y + seed.width < player.y + player.getSize()) {
                if(player.x < seed.x && seed.x < player.x + player.getSize() == true || player.x < seed.x + seed.width && seed.x + seed.width < player.x + player.getSize()) {
                    afterEat();
                    return;
                }
            }
            return {x: player.x, y: player.y}
    }
}

export default eat;