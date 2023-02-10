import seed from "./seed.js";
const eat = (playerPoint, moveCell, direction, seedPoint, playerSize, seedSize) => {
    switch(direction) {
        case "right":
            if(playerPoint.x + playerSize > seedPoint.x) {
                console.log("hit!!! right");
                seed();
            }
            return {x: playerPoint.x += moveCell, y: playerPoint.y}
        case "down":
            if(playerPoint.y + playerSize > seedPoint.y) {
                console.log("hit!!! down");
                seed();
            }
            return {x: playerPoint.x, y: playerPoint.y += moveCell}
        case "left":
            if(playerPoint.x - playerSize < seedPoint.x + seedSize) {
                console.log("hit!!! left");
                seed();
            }
            return {x: playerPoint.x -= moveCell, y: playerPoint.y}
        case "up":
            if(playerPoint.y < seedPoint.y + seedSize) {
                console.log("hit!!! up");
                seed();
            }
            return {x: playerPoint.x, y: playerPoint.y -= moveCell}
    }
    // return {
    //     x: playerPoint.x += moveCell,
    //     y: playerPoint.y += moveCell
    // }
}

export default eat;