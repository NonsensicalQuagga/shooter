import Enemy from "./Enemy";
import spriteImage from "./assets/sprites/Sprites x2.png";
export default class Boss extends Enemy {
    constructor(game) {
        super(game)
        this.width = 65;
        this.height = 100;
        this.x = this.game.width;
        this.y = Math.random() * (this.game.height * 0.9 - this.height);
        this.speedX = -0.5;
        this.lives = 25;
        this.scorePoints = 8000;
        this.color = '#089c54';
        this.collisionDamage = 5;
        this.hasSprite = true;

        const image = new Image();
        image.src = spriteImage;
        this.image = image;

        this.frameX = 0;
        this.frameY = 7;
        this.maxFrame = 1;
        this.fps = 3;
        this.timer = 0;
        this.interval = 1000 / this.fps;
        this.flip = true;
        this.walkingFrames = 2;
        this.walkingPosition = 6;
        this.idleFrames = 2;
        this.idlePosition = 6;
        this.scale = 1;
        this.ofsetX = 0;
        this.ofsetY = 5;
    }

}