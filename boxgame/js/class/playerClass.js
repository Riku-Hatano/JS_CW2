class playerClass {
    constructor(width, height, x, y, eatCount, moveSpeed, playerBigger) {
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.eatCount = eatCount;
        this.moveSpeed = moveSpeed;
        this.playerBigger = playerBigger;
    }
    size() {
        return this.width + (this.eatCount * this.playerBigger);
    }
    point() {
        return {
            x: this.x,
            y: this.y
        }
    }
}

export default playerClass;