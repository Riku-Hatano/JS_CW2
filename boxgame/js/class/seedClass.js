import { info } from "../info.js";

class seedClass {
    constructor(width, height, x, y) {
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
    }
    createSeed(bool, player) {
        let tmpX;
        let tmpY
        switch(bool) {
            case true:
                const seedElement = $("<div></div>");
                // tmpX = Math.floor(Math.random() * (info.section.width - info.player.getSize() - this.width));
                // tmpY = Math.floor(Math.random() * (info.section.height - info.player.getSize() - this.height));
                // if(tmpX < info.player.x) {
                //     this.x = tmpX
                // } else {
                //     this.x = tmpX + info.player.getSize();
                // }
                // if(tmpY < info.player.y) {
                //     this.y = tmpY;
                // } else {
                //     this.y = tmpY + info.player.getSize();
                // }
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
                tmpX = Math.floor(Math.random() * (info.section.width - player.getSize() - this.width));
                tmpY = Math.floor(Math.random() * (info.section.height - player.getSize() - this.height));
                if(tmpX < player.x) {
                    this.x = tmpX
                } else {
                    this.x = tmpX + player.getSize();
                }
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