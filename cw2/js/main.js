import Product from "./class.js"
import { calcTotal, moveUp, moveDown, buttonState, initializeInput } from "./functions.js";

let pointer = null;
let inputCursor = false;
const del = document.getElementById("delete");
const edit = document.getElementById("edit");
const add = document.getElementById("add");

//This function is used in class.js. I place this file here because i would like to change the value of pointer.
//It means, if i could import only pointer variable, i wanted to write this function outside of main.js.
export const select = (e) => {
    for(let i = 0 ; i < e.target.parentNode.parentNode.children.length ; i++) {
        e.target.parentNode.parentNode.children[i].classList.remove("selected");
    }
    if(e.target.parentNode.isSameNode(pointer) == true) {
        buttonState(true);
        pointer = null;
    } else {
        console.log(document.getElementsByTagName("form")[0].children)
        buttonState(false);
        e.target.parentNode.classList.add("selected");
        for(let i = 0 ; i < 3 ; i++) {
            document.getElementsByTagName("form")[0].children[i].value = e.target.parentNode.children[i + 1].innerHTML;
        }
        pointer = e.target.parentNode;
    }
}
const addProduct = (e) => {
    e.preventDefault();
    let name = document.getElementById("name").value;
    let price = document.getElementById("price").value;
    let amount = document.getElementById("amount").value;    
    if(name == "" || price == "" || price <= 0 || amount == "" || amount <= 0) {
        alert("illegal value!")
    } else {
        new Product(name, price, Math.round(amount)).dom(); //at the same time of making instance with Product class, we appended tr with dom method inside of Product class.
    }
    initializeInput();
    calcTotal();
}
const deleteProduct = (e) => {
    e.preventDefault();
    if(pointer !== null) {
        pointer.remove();
        pointer = null;
        calcTotal();
        initializeInput();
        buttonState(true);
    }
}
const editProduct = (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const price = document.getElementById("price").value;
    const amount = Math.round(document.getElementById("amount").value);    
    if(name == "" || price == "" || price <= 0 || amount == "" || amount <= 0) {
        alert("illegal value!")
    } else {
        pointer.children[1].innerHTML = name;
        pointer.children[2].innerHTML = price;
        pointer.children[3].innerHTML = amount;
        pointer.children[4].innerHTML = Math.round(parseFloat(document.getElementById("price").value) * parseFloat(document.getElementById("amount").value ) * 100) / 100; //i should create some method in Product that returns total but didnt have time
        calcTotal();
        initializeInput();
    }
}
const type = (e) => {
    if(pointer !== null && inputCursor === false) {
        switch(e.keyCode) {
            case 38:
                moveUp();
                break;
            case 40:
                moveDown();
                break;
            case 8: //this case is for delete key
                pointer.remove();
                pointer = null;
                calcTotal();
                initializeInput();
                buttonState(true);
                break;
        }
    }
}
const inputCur = (e) => { //without this function, when user tries to edit input box and delete key, the elements in pointer variable would be disappeard. to prevent it, i added some condition related to pointer.
    if(e.target.tagName == "INPUT") {
        inputCursor = true;
    } else {
        inputCursor = false;
    }
}
add.addEventListener("click", addProduct);
del.addEventListener("click", deleteProduct);
edit.addEventListener("click", editProduct);
del.setAttribute("disabled", "");
edit.setAttribute("disabled", "");
document.addEventListener("keydown", type);
document.addEventListener("click", inputCur);