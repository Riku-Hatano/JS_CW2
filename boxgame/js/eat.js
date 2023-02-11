const eat = (direction, player, seed) => {
    switch(direction) {
        case "right":
            if(player.x + player.getSize() + player.moveSpeed > seed.x) {
                if(player.y < seed.y && seed.y < player.y + player.getSize() == true || player.y < seed.y + seed.width && seed.y + seed.width < player.y + player.getSize()) {
                    afterEat(player, seed);
                }
            }
            return {x: player.x += player.moveSpeed, y: player.y}
        case "down":
            if(player.y + player.getSize() + player.moveSpeed > seed.y) {
                if(player.x < seed.x && seed.x < player.x + player.getSize() == true || player.x < seed.x + seed.width && seed.x + seed.width < player.x + player.getSize()) {
                    afterEat(player, seed);
                }
            }
            return {x: player.x, y: player.y += player.moveSpeed}
        case "left":
            if(player.x - player.moveSpeed < seed.x + seed.width) {
                if(player.y < seed.y && seed.y < player.y + player.getSize() == true || player.y < seed.y + seed.width && seed.y + seed.width < player.y + player.getSize()) {
                    afterEat(player, seed);
                }
            }
            return {x: player.x -= player.moveSpeed, y: player.y}
        case "up":
            if(player.y - player.moveSpeed < seed.y + seed.width) {
                if(player.x < seed.x && seed.x < player.x + player.getSize() == true || player.x < seed.x + seed.width && seed.x + seed.width < player.x + player.getSize()) {
                    afterEat(player, seed);
                }
            }
            return {x: player.x, y: player.y -= player.moveSpeed}
    }
}

const afterEat = (player, seed) => {
    seed.createSeed(false);
    player.eatCount++;
    $("#player").css("width", player.getSize());
    $("#player").css("height", player.getSize());
}

export default eat;