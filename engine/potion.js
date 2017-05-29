/*
 *
 * Potion is the object that when it is collected, gives a player some powers like
 * regeneration, double coins and higher jump.
 *
 *  Arguments:
 *      posX - distance from the left side of the canvas
 *      posY - distance from the top side of the canvas
 *      blockWidth - width of the object
 *      blockHeight - height of the object
 *      type - type of the potion:
 *              1) regeneration
 *              2) double coins
 *              3) higher jump
 *  
 *  Methods:
 *      draw - draws a potion
 *      move - if character is moving to the right, move the potion
 *      collect - if the character and potion intersect, potion gets marked as collected and gives 
 *                the player power
 *
*/
function Potion(posX, posY, blockWidth, blockHeight, type) {

    this.posX = posX;
    this.posY = posY;
    this.speedX = componentSpeedX;
    this.blockWidth = blockWidth;
    this.blockHeight = blockHeight;
    this.type = type;
    this.background = new Image();
    this.collected = false;

    this.draw = 
        function() {

            if(this.collected==false) {
                
                /*
                 *
                 * Define background of the potion base on type
                 *
                */
                switch(this.type) {
                    case 1: this.background.src = "images/regeneration.png"; break;
                    case 2: this.background.src = "images/doubleCoins.png"; break;
                    case 3: this.background.src = "images/higherJump.png"; break;
                }

                context = myGameArea.context;
                context.drawImage(this.background, this.posX, this.posY, this.blockWidth, this.blockHeight);
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

            potionLeft = this.posX;
            potionRight = this.posX+this.blockWidth;
            potionTop = this.posY;
            potionBottom = this.posY+this.blockHeight;

            if(characterLeft<=potionRight &&
               potionLeft<=characterRight &&
               characterTop<=potionBottom &&
               potionTop<=characterBottom &&
               this.collected==false) { 
                
                /*
                 *
                 * If the potion is regeneration, it gives a player one more life if he lost some.
                 * Mark it as collected.
                 *
                */
                if(this.type==1) {
                    if(lives<3) {
                        ++lives;
                        this.collected = true;
                    }
                } 
                /*
                 *
                 * If the potion is double coins, it gives a player 10 seconds to collect coins and makes them worth double.
                 * Mark it as collected.
                 *
                */
                else if(this.type==2) {

                    doubleCoinsTimeLeft = 10*fps;
                    this.collected = true;

                } 
                /*
                 *
                 * If the potion is higher jump, it gives a player 10 seconds to jump higher.
                 * Don't mark it as collected because this potion will be given in the game
                 * on places that player can't pass without it. If we mark it as collected, 
                 * player could lose live after collecting it and when he needs it again
                 * it won't be there.
                 *
                */
                else if(this.type==3) { 

                    higherJumpTimeLeft = 10*fps;

                }
            }
        };
}

