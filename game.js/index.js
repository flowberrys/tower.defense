const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d')

canvas.width = 1024;
canvas.height = 576;

c.fillRect(0,0,canvas.width,canvas.height)

class Sprite {
    constructor ({position,velocity,health,attack}) {
        this.position = position
        this.velocity = velocity
        this.width = 50;
        this.height = 50;
        this.draw = c.fillRect(this.position.x,this.position.y,this.width,this.height)
        this.health = this.health
        this.attack = this.attack

    }
    
}

const easy_enemy = new Sprite({
    position: {
        x:0,
        y: 20
    },
    velocity: {
        x:0,
        y:0
    },
    health: 25,

    attack: 0
    
})
const medium_enemy = new Sprite({
    position: {
        x:0,
        y: 20
    },
    velocity: {
        x:0,
        y:0
    },
    health: 50,

    attack: 0
    
})
const hard_enemy = new Sprite({
    position: {
        x:0,
        y: 20
    },
    velocity: {
        x:0,
        y:0
    },
    health: 100,

    attack
    
})

function animate() {
    draw()
    c.fillRect(0,0,canvas.width,canvas.height);
    requestAnimationFrame(animate);
}
