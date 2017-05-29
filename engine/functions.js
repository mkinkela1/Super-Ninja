/*
 *
 * Function that makes canvas to fit the window.
 * The default resolution for the <canvas> is 480x270. If you put bigger resolution
 * than your screen is, some parts of <cavas> won't be cleared. <canvas> size will scale to
 * fit the screen with the optimal ratio.
 * Also, the game must be played in landscape mode so there can be showed
 * more blocks and that can prevent from bad surprises when playing game.
 * Function returns true if game can be played or false otherwise.
 * 
 *
*/
function Resize() {

	var gameWidth = window.innerWidth;
    var gameHeight = window.innerHeight;

    if(gameWidth<480 || gameHeight<270) {
    	alert( "Screen too small for this game! Try in landscape mode!" );
    	return false;
    }
    else if(gameWidth<gameHeight) {
    	alert( "Please play in landscape mode." );
    	return false;
    }
    else {

		var scaleToFitX = gameWidth / 480;
		var scaleToFitY = gameHeight / 270;

		var currentScreenRatio = gameWidth / gameHeight;
		var optimalRatio = Math.min(scaleToFitX, scaleToFitY);

		canvas.style.width = 480 * optimalRatio + "px";
		canvas.style.height = 270 * optimalRatio + "px";

		menu.style.width=canvas.style.width;
		menu.style.height=canvas.style.height;

		document.getElementById("control").style.width=canvas.style.width;

		return true;
	}

}

/*
 *
 * Shows home screen menu.
 *
*/
function Menu() {

	menu.style.top = "0";
	menu.style.width=canvas.style.width;
	menu.style.height=canvas.style.height;
}

/*
 *
 * Stops the game, clears screen and shows alert. 
 * Parameter:
 *      content - message displayed on alert
 *
*/
function Alert(content) {

	document.getElementById("pauseButton").style.visibility="hidden";
	modal.style.top="0";
	document.getElementById("message").innerHTML=content;
	clearInterval(interval);
	myGameArea.clear();
}

/*
 *
 * The game is paused when the pause button is clicked.
 *
*/
function Pause() {

    document.getElementById("pauseButton").style.visibility="hidden";
    pause.style.top="0";
    clearInterval(interval);
    myGameArea.clear();
}

/*
 *
 * Enter high score at the end of the game.
 * Parameters:
 *      name - player's username that is entered at the beginning of the game
 *      value - number of coins collected
 *
*/
function EnterHighscore( name, value ) {

    var scores = new Array();

    scores.push( [name, value] );
    for( var i=1; i<=3; i++ ) 
        scores.push( [localStorage.getItem("name"+i), localStorage.getItem("score"+i)] );

    scores.sort(function(a, b) {
        return parseInt(a[1])<parseInt(b[1]);
    });

    for( var i=1; i<=3; i++ ) {
        localStorage.setItem("name"+i, scores[i-1][0]);
        localStorage.setItem("score"+i, scores[i-1][1]);
    }

}

/*
 *
 * Show high scores.
 *
*/
function Highscores() {
    highscores.style.top="0px";
    highscores.style.visibility="visible";

    for( var i=1; i<=3; i++ )
        if(localStorage.getItem("name"+i)!="null" && localStorage.getItem("name"+i)!=null)
            document.getElementById(i).innerHTML="<td>"+localStorage.getItem("name"+i)+"</td>"+"<td>"+localStorage.getItem("score"+i)+"</td>";
}

/*
 *
 * Close high scores.
 *
*/
function CloseHighscores() {
    highscores.style.top="-5000px";
    highscores.style.visibility="hidden";
}

/*
 *
 * Show "how to play" tutorial.
 *
*/
function HowTo() {
    howTo.style.top="0px";
    howTo.style.visibility="visible";

    document.getElementById("HTmessage").innerHTML=howToPlay[messageNum];

    if(messageNum==howToPlay.length-1) 
        document.getElementById("howToPlayButton").innerHTML="CLOSE";
    else 
        document.getElementById("howToPlayButton").innerHTML="NEXT";
}

/*
 *
 * Changes messages on tutorial and changes button values.
 *
*/
function Next() {
    if(messageNum==howToPlay.length-1) {
        CloseHowTo();
        document.getElementById("howToPlayButton").innerHTML="CLOSE";
    }
    else {
        messageNum++;
        HowTo();
        document.getElementById("howToPlayButton").innerHTML="NEXT";
    }
}

/*
 *
 * Closes "how to play" tutorial.
 *
*/
function CloseHowTo() {
    howTo.style.top="-5000px";
    howTo.style.visibility="hidden";
    messageNum=0;
}

/*
 *
 * Closes home screen menu and loads the game.
 * Function loads objects like floor, obstacle, character, board,
 * flag, coin and potion from the levels.js.
 * After loading level, function starts the game.
 *
*/
function loadGame() {
	menu.style.top="-5000px";
    doubleCoinsTimeLeft=0;
    higherJumpTimeLeft=0;

    objects = levels[level];
    
    var floorLen = objects["floor"].length;
        obstacleLen = objects["obstacle"].length
        coinLen = objects["coin"].length
        potionLen = objects["potion"].length;

    for(var i=0; i<floorLen; i++) {
        floor.push(new Floor(
            defaultBlockWidth*objects["floor"][i][0],
            defaultBlockHeight*objects["floor"][i][1],
            defaultBlockWidth*objects["floor"][i][2],
            defaultBlockHeight*objects["floor"][i][3]
        ));
    }

    for(var i=0; i<obstacleLen; i++) {
        obstacle.push(new Obstacle(
            defaultBlockWidth*objects["obstacle"][i][0],
            defaultBlockHeight*objects["obstacle"][i][1],
            defaultBlockWidth*objects["obstacle"][i][2],
            defaultBlockHeight*objects["obstacle"][i][3],
            objects["obstacle"][i][4]
        ));
    }

    character = new Character(
        objects["character"][0],
		objects["character"][1],
        objects["character"][2],
        objects["character"][3],
        coinsCollected
    );

    board = new Board(
        defaultBlockWidth*objects["board"][0],
        defaultBlockHeight*objects["board"][1],
        defaultBlockWidth*objects["board"][2],
        defaultBlockHeight*objects["board"][3]
    );

    flag = new Flag(
        defaultBlockWidth*objects["flag"][0],
        defaultBlockHeight*objects["flag"][1],
        defaultBlockWidth*objects["flag"][2],
        defaultBlockHeight*objects["flag"][3]
    );

    for(var i=0; i<coinLen; i++) {
        coin.push(new Coin(
            defaultBlockWidth*objects["coin"][i][0]+defaultBlockWidth/2-defaultBlockHeight*0.5/2,
            defaultBlockHeight*objects["coin"][i][1],
            defaultBlockHeight*0.5,
            defaultBlockHeight*0.5
        ));
    }

    for(var i=0; i<potionLen; i++) {
        potion.push(new Potion(
            defaultBlockWidth*objects["potion"][i][0]+defaultBlockWidth/2-defaultBlockHeight*0.5/2,
            defaultBlockHeight*objects["potion"][i][1],
            defaultBlockHeight*0.5,
            defaultBlockHeight*0.5,
            objects["potion"][i][2]
        ));
    }
    myGameArea.start();
    Alert( "Are you ready?" );
};

/*
 *
 * After finishing level, instances of blocks must be deleted.
 *
*/
function deleteObjects() {

    delete character;
    delete board;
    delete flag;

    leftFloorBlock=0;
    leftObastacleBlock=0;
    leftCoinBlock=0;
    leftPotionBlock=0;

    while(floor.length)
        floor.pop();

    while(obstacle.length)
        obstacle.pop();

    while(coin.length)
        coin.pop();

    while(potion.length)
    	potion.pop();
}