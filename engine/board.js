/*
 *
 * Board is the object that shows us how many lives we still have and how many 
 * coins we collected.
 *
 *  Arguments:
 *      posX - distance from the left side of the canvas
 *      posY - distance from the top side of the canvas
 *      blockWidth - width of the object
 *      blockHeight - height of the object
 *  
 *  Methods:
 *      draw - draws a board
*/
function Board(posX, posY, blockWidth, blockHeight) {

    this.posX = posX;
    this.posY = posY;
    this.blockWidth = blockWidth;
    this.blockHeight = blockHeight;

    this.draw = 
        function() {
            
            context = myGameArea.context;
            context.font = "20px Impact, Charcoal, sans-serif";
            context.fillStyle = "#fff";
            context.lineWidth=3;
            context.drawImage(coinImage, this.posX, this.posY, 22, 22);

            context.strokeText(character.coinsCollected, this.posX+25, 20);
            context.fillText(character.coinsCollected, this.posX+25, 20);

            var firstPosX = this.posX+55;
            for(var i=0; i<lives; i++)
                context.drawImage(heartImage,firstPosX+20*i, this.posY, 20, 20);
        };
}