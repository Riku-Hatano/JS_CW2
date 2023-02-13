import { info } from "../info.js";

const playerBox = $("#player");
const layer = $("#layer");
let isMouseOpen = false;
const playerAnimation = setInterval(() => {
    if(isMouseOpen) {
        isMouseOpen = false;
        layer.hide();
    } else {
        isMouseOpen = true;
        layer.show();
    }
}, 500)

export const mouse = () => {
    layer.css("border", `${info.player.getSize() / 2}px solid transparent`);
    layer.css(`border-${info.currentKey}`, `${info.player.getSize() / 2}px solid gainsboro`);
}

export default playerAnimation;