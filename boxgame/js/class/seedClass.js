import { info } from "../gameFuncs/move.js";

class seedClass {
    constructor(width, height, x, y) {
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
    }
    createSeed(bool, player) {
        switch(bool) {
            case true:
                const seedElement = $("<div></div>");
                // this.x = Math.floor(Math.random() * 600);
                // this.y = Math.floor(Math.random() * 200);
                this.x = 55;
                this.y = 55;
                console.log(`x: ${this.x} y: ${this.y}`);
                seedElement.css({"left": `${this.x}px`});
                seedElement.css({"top": `${this.y}px`});
                seedElement.css({"width": `${this.width}px`});
                seedElement.css({"height": `${this.height}px`});
                seedElement.addClass("seed");
            
                $("section").append(seedElement);
                return {
                    x: this.x,
                    y: this.y
                }
            case false:
                // this.x = Math.floor(Math.random() * (200 - this.width));
                const tmpX = Math.floor(Math.random() * (info.sectionWidth - player.getSize() - this.width));
                const tmpY = Math.floor(Math.random() * (info.sectionHeight - player.getSize() - this.height));
                if(tmpX < player.x) {
                    this.x = tmpX
                } else {
                    this.x = tmpX + player.getSize();
                }
                // this.y = Math.floor(Math.random() * (200 - this.height));
                if(tmpY < player.y) {
                    this.y = tmpY;
                } else {
                    this.y = tmpY + player.getSize();
                }
                $(".seed").css({"left": `${this.x}px`});
                $(".seed").css({"top": `${this.y}px`});
                return {
                    x: this.x,
                    y: this.y
                }
        }
    }
}

export default seedClass;