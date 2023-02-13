class playerClass {
    constructor(width, height, x, y, eatCount, moveSpeed, playerBigger) {
        this.width = parseFloat(width);
        this.height = parseFloat(height);
        this.x = x; //define x axis
        this.y = y; //define y axis
        this.eatCount = parseInt(eatCount);           //define how many seed the player have already eaten
        this.moveSpeed = parseFloat(moveSpeed);       //define how many pixels move with one key (if this value is 10, the player will move by 10 pixels with one left-arrow-key)
        this.playerBigger = parseFloat(playerBigger); //define how many pixels inflate when player eats seed (if this value is 20, player will be begger by 20 pixels)
    }
    getSize() {
        return this.width + (this.eatCount * this.playerBigger); 
    }
    getPoint() {
        return {
            x: this.x,
            y: this.y
        }
    }
}

export default playerClass;