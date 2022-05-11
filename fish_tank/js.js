/** @type {HTMLCanvasElement} */

const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
CANVAS_WIDTH = canvas.width = 1600;
CANVAS_HEIGHT = canvas.height = 900;
const numberOfEnemies = Math.floor(Math.random() * 10) + 1;
const enemiesArray = [];


// const enemyImage = new Image();
// enemyImage.src = 'photos/ribka.png';

class Enemy{
    constructor(){
        this.image = new Image();
        this.image.src = 'photos/ribka.png'
        this.width = 100;
        this.height = 100;
        this.x = Math.random() * (canvas.width - this.width);
        this.y = Math.random() * (canvas.height - this.height);
        this.speed = Math.random() * 4 + 1;
        this.angle = Math.random() * 500;
        this.angleSpeed = Math.random() * 1.5  + 0.5;
        //this.curve = Math.random() * 200 + 50;
        
    }
    update(){
        this.x = canvas.width/5 * Math.cos(this.angle * Math.PI/200) + (canvas.
        width/2 - this.width/2);
        this.y =  canvas.height/5 * Math.sin(this.angle * Math.PI/300) + (canvas.
        height/2 - this.height/2);;
        this.angle += this.angleSpeed;
        // this.y += this.speed;
        if(this.x + this.width < 0) this.x = canvas.width;
    };
    draw(){
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
};

for(let i = 0; i < numberOfEnemies; i++){
    enemiesArray.push(new Enemy());
}
function animate(){

    ctx.clearRect(0, 0, CANVAS_HEIGHT, CANVAS_WIDTH);
    enemiesArray.forEach(enemy => {
        enemy.update();
        enemy.draw();
    });
    requestAnimationFrame(animate);
}
animate();