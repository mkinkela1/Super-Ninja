/*
 *
 * Floor is the object that represents a block of dirt with grass on top.
 *
 *  Arguments:
 *      posX - distance from the left side of the canvas
 *      posY - distance from the top side of the canvas
 *      blockWidth - width of the object
 *      blockHeight - height of the object
 *  
 *  Methods:
 *      draw - draws the block
 *      move - moves the block
 *
*/
function Floor(posX, posY, blockWidth, blockHeight) {

    this.posX = posX;
    this.posY = posY;
    this.speedX = componentSpeedX;
    this.blockWidth = blockWidth;
    this.blockHeight = blockHeight;

    this.draw = 
        function() {

            context = myGameArea.context;
            context.fillStyle = "#7f6215";
            context.fillRect(this.posX, this.posY, this.blockWidth, this.blockHeight);
            context.fillStyle = "#36c01a";
            context.fillRect(this.posX, this.posY, this.blockWidth, 5);
        };

    this.move = 
        function() {

            if(character.firstBottomHit && character.canMove) 
                this.posX -= this.speedX;
        };
}