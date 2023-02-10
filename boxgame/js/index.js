import eat from "./eat.js";
import seed from "./seed.js";
import playerClass from "./class/playerClass.js";
import seedClass from "./class/seedClass.js";

const player = new playerClass(20, 20, 0, 0, 0, 10, 10);
const seed = new seedClass(10, 10, 0, 0);

let seedPoint = seed();
let playerPoint = {
    x: 10,
    y: 10
}
let playerSize = 20 + (suqareBigger * hitCounter);

const move = (e) => {
    switch(e.keyCode) {
        case 37:
            player.animate({"left": `-=${moveCell}px`}, 0, 1);
            playerPoint = eat(playerPoint, moveCell, "left", seedPoint, playerSize, seedSize);
            console.log(playerPoint)
            break;
        case 38:
            player.animate({"top": `-=${moveCell}px`}, 0, 1);
            playerPoint = eat(playerPoint, moveCell, "up", seedPoint, playerSize, seedSize);
            console.log(playerPoint)
            break;
        case 39:
            player.animate({"left": `+=${moveCell}px`}, 0, 1);
            playerPoint = eat(playerPoint, moveCell, "right", seedPoint, playerSize, seedSize);
            console.log(playerPoint)
            break;
        case 40:
            player.animate({"top": `+=${moveCell}px`}, 0, 1);
            playerPoint = eat(playerPoint, moveCell, "down", seedPoint, playerSize, seedSize);
            console.log(playerPoint)
            break;
        default:
            console.log("illegal key");
    }
}




document.addEventListener("keydown", move);
// const player = $("#player");
// const moveCell = 10;
// const suqareBigger = 10;
// const seedSize = 10;
// let hitCounter = 0;
// let seedPoint = seed();
// let playerPoint = {
//     x: 10,
//     y: 10
// }
// let playerSize = 20 + (suqareBigger * hitCounter);

// const move = (e) => {
//     switch(e.keyCode) {
//         case 37:
//             player.animate({"left": `-=${moveCell}px`}, 0, 1);
//             playerPoint = eat(playerPoint, moveCell, "left", seedPoint, playerSize, seedSize);
//             console.log(playerPoint)
//             break;
//         case 38:
//             player.animate({"top": `-=${moveCell}px`}, 0, 1);
//             playerPoint = eat(playerPoint, moveCell, "up", seedPoint, playerSize, seedSize);
//             console.log(playerPoint)
//             break;
//         case 39:
//             player.animate({"left": `+=${moveCell}px`}, 0, 1);
//             playerPoint = eat(playerPoint, moveCell, "right", seedPoint, playerSize, seedSize);
//             console.log(playerPoint)
//             break;
//         case 40:
//             player.animate({"top": `+=${moveCell}px`}, 0, 1);
//             playerPoint = eat(playerPoint, moveCell, "down", seedPoint, playerSize, seedSize);
//             console.log(playerPoint)
//             break;
//         default:
//             console.log("illegal key");
//     }
// }




// document.addEventListener("keydown", move);