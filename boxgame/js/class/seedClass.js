class seedClass {
    constructor(width, height, x, y) {
        this.width = width;
        this.hehight = height;
        this.x = x;
        this.y = y;
    }
    createSeed() {
        const seedElement = $("<div></div>");
        // const x = Math.floor(Math.random() * 600);
        // const y = Math.floor(Math.random() * 200);
        this.x = 105;
        this.y = 105;
        console.log(`x: ${this.x} y: ${this.y}`)
        seedElement.css({"left": `${this.x}px`});
        seedElement.css({"top": `${this.y}px`});
        seedElement.addClass("seed");
    
        $("section").append(seedElement);
        return {
            x: x,
            y: y
        }
    }
}

export default seedClass;