/** @type {HTMLCanvasElement} */

const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
CANVAS_WIDTH = canvas.width = 1600;
CANVAS_HEIGHT = canvas.height = 900;
const numberOfEnemies = Math.floor(Math.random() * 10) + 1;
const enemiesArray = [];


const enemyImage = new Image();
enemyImage.src = 'photos/ribka.png';

class Enemy{
    constructor(){
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.width = 100;
        this.height = 100;
        this.speed = Math.random() * 4 - 2;
    }
    update(){
        this.x += this.speed;
        this.y += this.speed;
    };
    draw(){
        ctx.strokeRect(this.x, this.y, this.width, this.height);
        ctx.drawImage(enemyImage, this.x, this.y, this.width, this.height);
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