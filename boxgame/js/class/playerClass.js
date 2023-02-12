class playerClass {
    constructor(width, height, x, y, eatCount, moveSpeed, playerBigger) {
        this.width = parseFloat(width);
        this.height = parseFloat(height);
        this.x = x;
        this.y = y;
        this.eatCount = parseInt(eatCount);
        this.moveSpeed = parseFloat(moveSpeed);
        this.playerBigger = parseFloat(playerBigger);
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