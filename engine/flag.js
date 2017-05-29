/*
 *
 * Board is the object that represents the end of the level.
 *
 *  Arguments:
 *      posX - distance from the left side of the canvas
 *      posY - distance from the top side of the canvas
 *      blockWidth - width of the object
 *      blockHeight - height of the object
 *  
 *  Methods:
 *      draw - draws a flag
 *      move - moves a flag
 *      check - if the player passed the flag it means that level is passed
 *
*/
function Flag(posX, posY, blockWidth, blockHeight) {
    
    this.posX = posX;
    this.posY = posY;
    this.speedX = componentSpeedX;
    this.blockWidth = blockWidth;
    this.blockHeight = blockHeight;

    this.draw = 
        function() {

            context = myGameArea.context;
            context.drawImage(flagImage, this.posX, this.posY, this.blockWidth, this.blockHeight);
        };

    this.move = 
        function() {

            if(character.firstBottomHit && character.canMove)
                this.posX -= this.speedX;
        };   

    this.check = 
        function() {

            if(character.posX-character.componentWidth>this.posX) {
                myGameArea.levelPassed();
            }
        };
}