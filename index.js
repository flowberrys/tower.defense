const canvas = canvas.getContext('2d');
const ctx = canvas.getContext('2d');

canvas.width = 1024;
canvas.height = 576;
canvas.fillSytle = 'black';
canvas.fillRect(0,0,canvas.width,canvas.height);

class Sprite {
    constructor({position,velocity}) {
        this.position = this.position
        this.velocity = this.velocity
        this.width = 50
        this.height = 50
        this.draw = ctx.fillRect(this.position.x,this.position.y,this.width,this.height)
    }
}
const easy_enemy = new Sprite({
    position: {
        x:0,
        y:0
    },

    velocity: {
        x: 0,
        y: 0
    }
})

const medium_enemy = new Sprite({
    position: {
        x: 0,
        y: 0
    },

    velocity: {
        x: 0,
        y:0
    }
})

function animate() {
    easy_enemy.draw()
    requestAnimationFrame(animate)
    ctx.fillSytle = 'black'
    ctx.fillRect(0,0,canvas.width,canvas.height)
}

animate();

