/*
 *
 * Coin is the object that represents a player, Super Ninja.
 *
 *  Arguments:
 *      posX - distance from the left side of the canvas
 *      posY - distance from the top side of the canvas
 *      componentWidth - width of the object
 *      componentHeight - height of the object
 *      coinsCollected - number of coins collected, important for level up and restarting level
 *  
 *  Methods:
 *      draw - draws a character
 *      move - moves a character. Technically, a character can only go up and down.
 *      hitBottom - checks if character hit the floor with the bottom
 *      hitFloorSide - checks if character hit the floor by side
 *      jump - makes that character can jump
 *
*/
function Character(posX, posY, componentWidth, componentHeight, coinsCollected) {
    
    this.posX = posX;
    this.posY = posY;
    this.speedX = 0;
    this.speedY = 0;
    this.gravity = 0.07;
    this.jumpSpeed = 0;
    this.gravitySpeed = 0;
    this.componentWidth = componentWidth;
    this.componentHeight = componentHeight;
    this.firstBottomHit = false;
    this.canMove = false;
    this.doubleJump = 2;
    this.coinsCollected = coinsCollected;

    this.draw = 
        function() {

            context = myGameArea.context;

            /*
             *
             * Animate the character
             *
            */
            if(this.canMove) {
                imageNumber = (imageNumber+1)%8;
                context.drawImage(characterImage[imageNumber], this.posX, this.posY, this.componentWidth, this.componentHeight);
            }
            else
                context.drawImage(defaultCharacterImage, this.posX, this.posY, this.componentWidth, this.componentHeight);
        };

    this.move = 
        function() {

            this.hitFloorSide();

            /*
             *
             * Increase gravity
             *
            */
            this.gravitySpeed += this.gravity;

            /*
             *
             * Don't start with the movement before
             * you touch the floor.
             *
            */
            if(this.firstBottomHit)
                this.posX += this.speedX;

            this.posY += this.speedY + this.gravitySpeed - this.jumpSpeed;
            
            if(this.jumpSpeed>0) {
                this.jumpSpeed -= 0.1;
            }

            this.hitBottom();
        };

    this.hitBottom = 
        function() {

            var bottomPos = height,
                floorLen = floor.length;

            var characterLeft = this.posX,
                characterRight = characterLeft+this.componentWidth,
                characterTop = this.posY,
                characterBottom = characterTop+this.componentHeight;
            /*
             *
             * Searches what is the lowest position character can go.
             * Very important if character jumps to know where he must 
             * land.
             *
            */
            for(var i=0; i<floorLen; i++) {

                var floorTop = floor[i].posY,
                    floorBottom = floorTop+floor[i].blockHeight,
                    floorLeft = floor[i].posX,
                    floorRight = floorLeft+floor[i].blockWidth;

                if(characterLeft<=floorRight &&
                   floorLeft<=characterRight &&
                   characterTop<=floorBottom &&
                   floorTop<=characterBottom) {

                    if(characterRight-5>=floorLeft)
                        bottomPos = Math.min( floorTop, bottomPos )-2;
                }
            }

            if(characterBottom>=bottomPos) {
                this.posY = bottomPos-this.componentHeight;
                this.firstBottomHit = true;
                this.gravitySpeed = 0;
                this.doubleJump = 2;
            }
        };

    this.hitFloorSide =
        function() {

            var floorLen = floor.length,
                canMove = true;

            /*
             *
             * Searches if character hits floor by side so he can't 
             * move through. Also, it is not possible to pass below 
             * the floor because there will always be one possible 
             * way through the game and that is the best way.
             *
            */
            for(var i = 0; i < floorLen; i++) {

                if(this.posX>floor[i].posX+floor[i].blockWidth) continue;

                if(this.posX+this.componentWidth>floor[i].posX && 
                   this.posY+this.componentHeight>floor[i].posY) {

                    canMove = false;
                    break;
                }

            }

            this.canMove = canMove;
        };

    this.jump = 
        function() {

            /*
             *
             * Character can jump only if doubleJump variable is not equal to zero
             * because in every part of the game character can jump once or twice not more.
             * If you look at the end of the hitBottom method, you can see that when character
             * is on the ground, doubleJump variable by the default goes to 2 and that represents 
             * that character can jump once or twice again.
             *
            */
            if(this.doubleJump) {

                if(higherJumpTimeLeft>0)
                    this.jumpSpeed = 5.5;
                else 
                    this.jumpSpeed = 3.5;
                
                this.gravitySpeed = 0;
                this.doubleJump--;
            }
        };
}