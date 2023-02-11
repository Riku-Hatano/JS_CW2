class seedClass {
    constructor(width, height, x, y) {
        this.width = width;
        this.hehight = height;
        this.x = x;
        this.y = y;
    }
    createSeed(bool) {
        switch(bool) {
            case true:
                const seedElement = $("<div></div>");
                // this.x = Math.floor(Math.random() * 600);
                // this.y = Math.floor(Math.random() * 200);
                this.x = 55;
                this.y = 55;
                console.log(`x: ${this.x} y: ${this.y}`)
                seedElement.css({"left": `${this.x}px`});
                seedElement.css({"top": `${this.y}px`});
                seedElement.addClass("seed");
            
                $("section").append(seedElement);
                return {
                    x: this.x,
                    y: this.y
                }
            case false:
                this.x = Math.floor(Math.random() * 100);
                this.y = Math.floor(Math.random() * 100);
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