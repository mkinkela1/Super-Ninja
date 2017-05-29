/*
 *
 * game.js is the main file of the game. It defines variables 
 * that are used in game, loads blocks in levels
 * and moves them.
 *
*/

var character;
var floor = new Array(),
    obstacle = new Array(),
    coin = new Array(),
    potion = new Array();
var width = window.innerWidth,
    height = window.innerHeight;
var componentSpeedX = 2;
var lives = 3;
var defaultBlockWidth = 48,
	defaultBlockHeight = 27;
var fps = 45;

var numberOfLevels=levels.length;
var objects;
var level=0;

var leftFloorBlock = 0,
    leftObastacleBlock = 0
    leftCoinBlock = 0,
    leftPotionBlock = 0;
var imageNumber = 0;
var interval;
var coinsCollected = 0;

var canvas = document.getElementById("app"),
    menu = document.getElementById("menu"),
    modal = document.getElementById("modal"),
    highscores = document.getElementById("highscores"),
    pause = document.getElementById("pause"),
    howTo = document.getElementById("howToPlay");

var doubleCoinsTimeLeft = 0,
	higherJumpTimeLeft = 0;

var floorImage = new Image(),
    flagImage = new Image(),
    coinImage = new Image(),
    heartImage = new Image(),
    obstacleImage = new Image(),
    defaultCharacterImage = new Image(),
    characterImage = new Array(new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image());

var messageNum = 0,
    howToPlay = new Array();

howToPlay.push("Welcome to Super Ninja!<br />In this game Super Ninja runs automatically.");
howToPlay.push("You can jump by touching the screen on mobile/tablet or with left click on computer.");
howToPlay.push("While running, make sure you collect as much coins as possible.");
howToPlay.push("There are several obstacles like lava, water and spikes.<br />Try to avoid them!");
howToPlay.push("Also, there are several potions.<br /> Pink one gives you one life, green one gives you higher jump and yellow one gives you double coins.<br />Make sure you use them wise.");
howToPlay.push("Have fun. :)");

var userName;

heartImage.src = "images/srce.png";
floorImage.src = "images/trava.gif";
flagImage.src = "images/zastava-za-kraj.png";
coinImage.src = "images/novcic.gif";
defaultCharacterImage.src = "images/hod-ravno.gif";
characterImage[0].src = "images/hod-lijevo.gif";
characterImage[1].src = "images/hod-lijevo.gif";
characterImage[2].src = "images/hod-lijevo.gif";
characterImage[3].src = "images/hod-lijevo.gif";
characterImage[4].src = "images/hod-desno.gif";
characterImage[5].src = "images/hod-desno.gif";
characterImage[6].src = "images/hod-desno.gif";
characterImage[7].src = "images/hod-desno.gif";

/*
 *
 * Object myGameArea is the main object in a game. 
 * 
 * Methods:
 *      canvas - Gets <canvas> by id.
 *      start - Creates drawing object, resizes game and moves objects.
 *      clear - Clears drawing object.
 *      levelPassed - Stops game and sends message about passing level.
 *      win - Stops game, enters highscore and sends message.
 *      stop - Method that is called when player lose all lives.
 *      restart - Method that is called when player lose 1 life and can still play. 
                  Method needs to load all objects again without collected coins.
 *      pause - Pauses the game
 *
*/

var myGameArea = {

    canvas : 
        document.getElementById("app"),
    start : 
        function() {

            
            this.context = this.canvas.getContext("2d");
            Resize();

            interval = window.setInterval(
                function() {

                    /*
                     *
                     * Before every frame, canvas needs to be empty because of trails.
                     *
                    */
                    myGameArea.clear();
                    var floorLen = floor.length,
                        obstacleLen = obstacle.length;

                    /*
                     *
                     * If potions are collected, make sure they don't last infinitely.
                     *
                    */
                    if(doubleCoinsTimeLeft>0)
                    	doubleCoinsTimeLeft--;

                    if(higherJumpTimeLeft>0)
                    	higherJumpTimeLeft--;

                    /*
                     *
                     * Next loops are very important because they decide what to do with the object.
                     * If the object is completely out of the screen, there are two options:
                     *      1) If it is on the left, that means we passed it and we don't draw it anymore.
                     *      2) If it is on the right, that means we will pass it so we need to move it to the left.
                     * If the object is on the screen we need to move it and draw it.
                     *
                    */
                    for(var i = leftFloorBlock; i < floorLen; i++) {

                        if(floor[i].posX+floor[i].blockWidth<0) 
                            ++leftFloorBlock;
                        else if(floor[i].posX>width) 
                            floor[i].move();
                        else {
                            floor[i].move();    
                            floor[i].draw();
                        }
                    }

                    for(var i = leftObastacleBlock; i < obstacleLen; i++) {

                        if(obstacle[i].posX+obstacle[i].blockWidth<0) 
                            ++leftObastacleBlock;
                        else if(obstacle[i].posX>width) 
                            obstacle[i].move();
                        else {
                            obstacle[i].move();    
                            obstacle[i].draw();
                        }

                        /*
                         *
                         * If character touches the obstacle that means we will lose one life. If we have 
                         * more lives, level must be restarted. If we don't have any lives
                         * left, game must be stopped.
                         *
                        */
                        if(obstacle[i].touch()) {
                            lives--;
                            if(lives>0) {
                                myGameArea.restart();
                            }
                            else {
                                myGameArea.stop();
                            }
                        }
                    }

                    for(var i = leftCoinBlock; i < coinLen; i++) {

                        if(coin[i].posX+coin[i].blockWidth<0) 
                            ++leftCoinBlock;
                        else if(coin[i].posX>width) 
                            coin[i].move();
                        else {
                            coin[i].move();    
                            coin[i].draw();

                            /*
                             *
                             * If the player touches the coin, it must be collected.
                             *
                            */
                            coin[i].collect();
                        }
                    }
                    for(var i = leftPotionBlock; i < potionLen; i++) {

                    	if(potion[i].posX+potion[i].blockWidth<0) 
                            ++leftPotionBlock;
                        else if(potion[i].posX>width) 
                            potion[i].move();
                        else {
                            potion[i].move();    
                            potion[i].draw();

                            /*
                             *
                             * If the player touches a potion, it must be collected.
                             *
                            */
                            potion[i].collect();
                        }	
                    }


                    /*
                     *
                     * Move and draw character. If it is below screen, restart game.
                     *
                    */
                    character.move();
                    character.draw();

                    if(character.posY+character.componentHeight>height)
                        myGameArea.restart();

                    /*
                     *
                     * Draw board.
                     *
                    */
                    board.draw();

                    /*
                     *
                     * Move flag, draw it and check if player passed it.
                     *
                    */
                    flag.draw();
                    flag.move();
                    flag.check();
                }, 
               	1000/fps
            );
        },
    clear : 
        function() {

            this.context.clearRect(0, 0, width, height);
        },
    levelPassed :
    	function() {

    		clearInterval(interval);
    		Alert( "Level passed!" );
    	},
    win :
        function() {

            /*
             *
             * Enter the results when player wind the game.
             *
            */
            clearInterval(interval);
            EnterHighscore( userName, character.coinsCollected );
            Alert( "You win!" );
        },
    stop : 
        function() {

            clearInterval(interval);
            Alert( "You lost!" );
        },
    restart : 
        function() {

            clearInterval(interval);
            Alert( "Oops, try again!" );

            /*
             *
             * Record number of coins collected so far.
             *
            */
            coinsCollected = character.coinsCollected;

            /*
             *
             * Reset influence of the potions.
             *
            */
            doubleCoinsTimeLeft=0;
            higherJumpTimeLeft=0;

            /*
             *
             * Delete objects.
             *
            */
            delete character;
            delete board;

            while(floor.length)
                floor.pop();

            while(obstacle.length)
                obstacle.pop();
            leftCoinBlock=0;
            leftFloorBlock=0;
            leftObastacleBlock=0;
            leftPotionBlock=0;

            /*
             *
             * Reset the position of the coins and potions
             *
            */
            var coinLen = objects["coin"].length;

            for(var i=0; i<coinLen; i++) {
		        coin[i].posX = defaultBlockWidth*objects["coin"][i][0]+defaultBlockWidth/2-defaultBlockHeight*0.5/2;
            	coin[i].posY = defaultBlockHeight*objects["coin"][i][1];
		    }

		    var potionLen = objects["potion"].length;

            for(var i=0; i<potionLen; i++) {
		        potion[i].posX = defaultBlockWidth*objects["potion"][i][0]+defaultBlockWidth/2-defaultBlockHeight*0.5/2;
            	potion[i].posY = defaultBlockHeight*objects["potion"][i][1];
		    }

            loadGame();
        },
    pause :
    	function() {

    		clearInterval(interval);
    	}
}

