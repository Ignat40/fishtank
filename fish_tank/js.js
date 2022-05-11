/** @type {HTMLCanvasElement} */

const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
CANVAS_WIDTH = canvas.width = 1600;
CANVAS_HEIGHT = canvas.height = 900;
const numberOfEnemies = Math.floor(Math.random() * 10) + 1;
const enemiesArray = [];
let gameFrame = 0;


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
        this.newX = Math.random() * canvas.width;
        this.newY = Math.random() * canvas.height;
        this.speed = Math.random() * 4 + 1;
        this.interval = Math.floor(Math.random() * 200 + 50);
        
        
    }
    update(){
        if (gameFrame % this.interval === 0){
            this.newX = Math.random() * (canvas.width - this.width);
            this.newY = Math.random() * (canvas.height - this.height);   
        }
        let dx = this.x - this.newX;
        let dy = this.y - this.newY;
        this.x -= dx/70;
        this.y -= dy/70;
    
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
    gameFrame++;
    requestAnimationFrame(animate);
}
animate();



