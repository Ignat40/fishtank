/** @type {HTMLCanvasElement} */

const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
console.log(canvas.width);
console.log(canvas.height);
CANVAS_WIDTH = canvas.width = 1600;
CANVAS_HEIGHT = canvas.height = 900;
const numberOfEnemies = Math.floor(Math.random() * 10) + 3;
const enemiesArray = [];
let gameFrame = 0;
let click = 0;



class Enemy{
    constructor(){
        this.image = new Image();
        this.image.src = 'photos/ribka.png';
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

function onClick(event) {
    const s = event.clientX + "/" + event.clientY;
    console.log(s)
    click++
    enemiesArray.forEach(enemy => {
        enemy.x = event.clientX
        enemy.y = event.clientY
    });
    click--;
}

enemiesArray.forEach(enemy => {
    canvas.addEventListener("click", onClick);
});

function animate(){

    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    enemiesArray.forEach(enemy => {
        enemy.update();
        enemy.draw();
    });
    gameFrame++;
    if (click != 0) return;
    requestAnimationFrame(animate);
}
animate();





