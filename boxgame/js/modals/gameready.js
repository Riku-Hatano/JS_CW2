const gameready = () => {
    const readyModal = $("<div></div>");
    const body = $("body");
    const difficulities = ["EASY", "NORMAL", "HARD"];
    for(let difficulity of difficulities) {
        let child = $(`<div>${difficulity}</div>`);
        child.addClass("readyModalChildren");
        readyModal.append(child)
    }
    readyModal.addClass("readyModal");
    body.append(readyModal);
}

export default gameready;