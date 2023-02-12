import { flagHandler } from "../index.js"
const timer = (seconds) => {
    const body = $("body");
    const timerModal = $("<div></div>");
    timerModal.addClass("timerModal");
    timerModal.text(seconds);
    body.append(timerModal);

    const timer = setInterval(() => {
        if(seconds > 1) {
            seconds--;
            timerModal.text(seconds);
        } else {
            timerModal.text("game over");
            console.log("still running");
            clearInterval(timer);
            flagHandler();
        }
    }, 1000);
    
}

export default timer;

