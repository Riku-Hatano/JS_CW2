import { info } from "../info.js";

class seedClass {
    constructor(width, height, x, y) {
        this.width = width;
        this.height = height;
        this.x = x; //define x axis
        this.y = y; //define y axis
    }
    createSeed(bool, player) {
        let tmpX;
        let tmpY;
        switch(bool) { 
            case true: //this case true is called only the first time once. 
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
                this.x = 55; //initialize location of x
                this.y = 55; //initialize location of y 
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
            case false: //this case false will be called from second time on. 
                //there if condition is to avoid to turn out the pointer which is located on the player box. logic for turning out x axis is below
                //1. get the width of field, location of x axis, and size of player box.
                //2. substruct the location of x from width of field.
                //3. generate random number within the value returned by number 2.
                //4. turn out the location depending on the number 3 value. if it was below the x axis location, just turning out number 3. Otherwise, turning out x axis + number 3 value.
                tmpX = Math.floor(Math.random() * (info.section.width - player.getSize() - this.width)); //generatge x randomly
                tmpY = Math.floor(Math.random() * (info.section.height - player.getSize() - this.height)); //generate y randomly
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