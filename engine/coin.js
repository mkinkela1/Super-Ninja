/*
 *
 * Coin is the object that represents one coin in the game.
 *
 *  Arguments:
 *      posX - distance from the left side of the canvas
 *      posY - distance from the top side of the canvas
 *      blockWidth - width of the object
 *      blockHeight - height of the object
 *  
 *  Methods:
 *      draw - draws a coin
 *      move - if character is moving to the right, move the coin
 *      collect - if the character and coin intersect, mark it as collected and increase 
 *                number of collected coins
 *
*/
function Coin(posX, posY, blockWidth, blockHeight) {

    this.posX = posX;
    this.posY = posY;
    this.speedX = componentSpeedX;
    this.blockWidth = blockWidth;
    this.blockHeight = blockHeight;
    this.collected = false;

    this.draw = 
        function() {

            if(this.collected==false) {
                context = myGameArea.context;
                context.drawImage(coinImage, this.posX, this.posY, this.blockWidth, this.blockHeight);
            }
        };

    this.move = 
        function() {
            if(character.firstBottomHit && character.canMove)
                this.posX -= this.speedX;
        };

    this.collect = 
        function() {
            characterLeft = character.posX;
            characterRight = character.posX+character.componentWidth;
            characterTop = character.posY;
            characterBottom = character.posY+character.componentHeight;

            coinLeft = this.posX;
            coinRight = this.posX+this.blockWidth;
            coinTop = this.posY;
            coinBottom = this.posY+this.blockHeight;

            if(characterLeft<=coinRight &&
               coinLeft<=characterRight &&
               characterTop<=coinBottom &&
               coinTop<=characterBottom &&
               this.collected==false) { 
                
                /*
                 *
                 * If doule coins potion is still active, make coins worth double.
                 * Mark it as collected.
                 *
                */
                if(doubleCoinsTimeLeft>0)
                    character.coinsCollected+=2;
                else 
                    character.coinsCollected++;

                this.collected = true;
            }
        };
}

