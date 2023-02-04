const totalPrice = document.getElementById("totalPrice");
const tbody = document.getElementById("tbody");
const del = document.getElementById("delete");
const edit = document.getElementById("edit");
const add = document.getElementById("add");

export const calcTotal = () => { //this function will be called in addProduct, deleteProduct, and editProduct because i want to change total value with new length of tr.
    let tp = 0;
    for(let i = 0 ; i < tbody.children.length ; i++) {
        tp += parseFloat(tbody.children[i].children[2].innerHTML) * parseFloat(tbody.children[i].children[3].innerHTML)
    }
    totalPrice.innerHTML = `total: ${Math.round(tp * 100) / 100}`;
}
export const moveUp = () => {
    if(pointer !== null) {
        if(pointer.previousElementSibling === null) {
            pointer.parentNode.lastElementChild.after(pointer);
        } else {
            pointer.previousElementSibling.before(pointer);
        }
    }
}
export const moveDown = () => {
    if(pointer !== null) {
        if(pointer.nextElementSibling === null) {
            pointer.parentNode.firstElementChild.before(pointer);
        } else {
            pointer.nextElementSibling.after(pointer);
        }
    }
}
export const buttonState = (disabled) => { //define which button is usable depending on user's manipulation
    switch(disabled) {
        case true:
            add.removeAttribute("disabled");
            del.setAttribute("disabled", "");
            edit.setAttribute("disabled", "");
            break;
        case false:
            add.setAttribute("disabled", "");
            del.removeAttribute("disabled");
            edit.removeAttribute("disabled");
            break;
    }
}
export const initializeInput = () => {
    document.getElementById("name").value = "";
    document.getElementById("price").value = "";
    document.getElementById("amount").value = "";
}
