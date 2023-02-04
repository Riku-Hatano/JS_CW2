import { select } from './main.js';

let pCounter = 1;
class Product {
    #name;
    #price;
    #amount;
    #total;
    constructor(name, price, amount) {
        this.#name = name,
        this.#price = price, 
        this.#amount = amount
        this.#total = (Math.round(this.#price * this.#amount * 100)) / 100
    }
    dom() {
        const tbody = document.getElementsByTagName("tbody")[0];
        const tr = document.createElement("tr");
        const id = document.createElement("td");
        const name = document.createElement("td");
        const price = document.createElement("td");
        const amount = document.createElement("td");
        const total = document.createElement("td");
        id.innerHTML = pCounter;
        pCounter++;
        name.innerHTML = this.#name;
        price.innerHTML = this.#price;
        amount.innerHTML = this.#amount;
        total.innerHTML = this.#total;
        tr.appendChild(id);
        tr.appendChild(name);
        tr.appendChild(price);
        tr.appendChild(amount);
        tr.appendChild(total);
        tr.classList.add("tr");
        tr.addEventListener("click", select);
        tbody.appendChild(tr);
    }
}

export default Product;