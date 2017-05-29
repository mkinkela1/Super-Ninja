/*
 *
 * Obstacle is the object that represents one of three obstacles possible in the game so far.
 * Types of obstacles can be:
 *      1)water
 *      2)lava
 *      3)spikes
 *
 *  Arguments:
 *      posX - distance from the left side of the canvas
 *      posY - distance from the top side of the canvas
 *      blockWidth - width of the object
 *      blockHeight - height of the object
 *      type - type of obstacle
 *  
 *  Methods:
 *      draw - draws an obstacle
 *      move - if character is moving to the right, move the obstacle
 *      touch - if the character and obstacle intersect, return true
 *
*/
function Obstacle(posX, posY, blockWidth, blockHeight, type) {

    this.posX = posX;
    this.posY = posY;
    this.blockWidth = blockWidth;
    this.blockHeight = blockHeight;
    this.speedX = componentSpeedX;
    this.type = type;
    this.background = new Image();

    switch(this.type) {
        case 1: this.background.src = "images/voda.png"; break;
        case 2: this.background.src = "images/blok-lave.png"; break;
        case 3: this.background.src = "images/spikes.png"; break;
    }

    this.draw = 
        function() {

            context = myGameArea.context;
            context.drawImage(this.background, this.posX, this.posY, this.blockWidth, this.blockHeight);
        };
    
    this.move = 
        function() {

            if(character.firstBottomHit && character.canMove)
                this.posX -= this.speedX;
        };
    
    this.touch = 
        function() {
            characterLeft = character.posX;
            characterRight = character.posX+character.componentWidth;
            characterTop = character.posY;
            characterBottom = character.posY+character.componentHeight;

            obstacleLeft = this.posX;
            obstacleRight = this.posX+this.blockWidth;
            obstacleTop = this.posY;
            obstacleBottom = this.posY+this.blockHeight;

            if(characterLeft<=obstacleRight &&
               obstacleLeft<=characterRight &&
               characterTop<=obstacleBottom &&
               obstacleTop<=characterBottom) { 
                
                return true;
            }
        };
} 