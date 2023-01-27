class Ball {

    constructor(ctx, canvasSize) {
        this.ctx = ctx
        this.imageInstance = undefined
        this.canvasSize = canvasSize

        this.ballSize = { w: 50, h: 50 }
        this.ballPos = { x: 0, y: 50 }
        this.ballVel = { x: 5, y: 1 }
        this.ballPhysics = { gravity: .1 }

        this.init()
    }

    init() {
        this.imageInstance = new Image()
        this.imageInstance.src = './img/basketball.png'
    }

    draw() {
        this.move()
        this.ctx.drawImage(this.imageInstance, this.ballPos.x, this.ballPos.y, this.ballSize.w, this.ballSize.h)
    }

    move() {
        this.ballPos.x += this.ballVel.x
        this.ballPos.y += this.ballVel.y

        this.ballVel.y += this.ballPhysics.gravity

        if (this.ballPos.y > this.canvasSize.h - this.ballSize.h) {
            this.ballVel.y *= -1
        }

        if (this.ballPos.x >= this.canvasSize.w - this.ballSize.w) {
            this.ballVel.x *= -1
        }
    }
}