import { flagHandler } from "../index.js"
const timer = (seconds) => {
    const body = $("body");
    const timerModal = $("<div></div>");
    timerModal.addClass("timerModal");
    timerModal.text(`${Math.floor(seconds / 60)} min ${seconds % 60} sec`)
    body.append(timerModal);

    const timer = setInterval(() => {
        if(seconds > 1) {
            seconds--;
            timerModal.text(`${Math.floor(seconds / 60)} min ${seconds % 60} sec`)
        } else {
            clearInterval(timer);
            flagHandler();
        }
    }, 1000);
    
}

export default timer;

