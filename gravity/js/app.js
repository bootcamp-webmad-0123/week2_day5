const game = {
    title: 'Bouncing balls app yay',
    author: 'Ger',
    license: undefined,
    version: '1.0.0',
    ctx: undefined,
    balls: [],
    keys: {
        SPACE: 'Space'
    },
    canvasSize: {
        w: undefined,
        h: undefined
    },
    init() {
        this.ctx = document.querySelector('#balls').getContext('2d')
        this.setDimensions()
        this.setEventListeners()
        this.start()
    },
    setDimensions() {
        this.canvasSize.w = window.innerWidth
        this.canvasSize.h = window.innerHeight
        document.querySelector('#balls').setAttribute('width', this.canvasSize.w)
        document.querySelector('#balls').setAttribute('height', this.canvasSize.h)
    },
    start() {
        setInterval(() => {
            this.clearAll()
            this.drawAll()
            this.clearBalls()
        }, 10)
    },
    setEventListeners() {
        document.onkeydown = e => {
            e.code === this.keys.SPACE ? this.createBall() : undefined
        }
    },
    createBall() {
        this.balls.push(new Ball(this.ctx, this.canvasSize))
        console.log(this.balls)

    },
    clearAll() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    },
    drawAll() {
        this.balls.forEach(elm => elm.draw())
    },
    clearBalls() {
        this.balls = this.balls.filter(elm => elm.ballPos.x > 0)
    }
}