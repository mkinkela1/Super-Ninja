/*
 *
 * Prevent wrongly interpreted clicks on the screen.
 *
*/
window.addEventListener("touchmove", function(e){
	e.preventDefault();
	e.stopPropagation();
}, false);

/*
 *
 * Prevent speeding up when space/enter clicked.
 *
*/
window.addEventListener("keydown", function(e) {
    e.preventDefault();
   }, false);

/*
 *
 * When page is loaded, resize it and open menu.
 *
*/
window.onload = 
    function() {
    	if(Resize()) {
        	Menu();
	    }

    };

/*
 *
 * If the screen changed its size, reload the game.
 * This is important part of the game, because it is 
 * planned that screen size will stay the same 
 * throughout the whole game.
 * 
 * Sorry about that!
 *
*/
window.onresize = 
	function() {
		var newWidth=window.innerWidth,
    		newHeight=window.innerHeight;
    	if(newHeight!=width || newHeight!=height) {
			Resize(); 
			location.reload();
		}
	};


/*
 *
 * To make jump work on every device, I decided to make a hidden button
 * all over the screen, so it can't wrongly interpret click/tap on the 
 * screen. 
 * This is the reason for the touchmove listener.
 *
*/
document.getElementById("jump").onclick=
	function(e) {
		character.jump();
		e.preventDefault();
	};

/*
 *
 * Pause the game when pause button is clicked.
 *
*/
document.getElementById("pauseButton").onclick=
	function(e) {
		myGameArea.pause();
        Pause();
		e.preventDefault();
	};


/*
 *
 * Continue game after pause button has been clicked.
 *
*/
document.getElementById("continue").onclick=
    function(e) {
        pause.style.top="-5000px";
        document.getElementById("pauseButton").style.visibility="visible";
        myGameArea.start();
        e.preventDefault();
    };


/*
 *
 * Quit the game after the pause button has been clicked.
 *
*/
document.getElementById("quit").onclick=
    function(e) {
        location.reload();
        e.preventDefault();
    };


/*
 *
 * Start the game on the first screen. After that, player must enter
 * username that will show on high scores.
 *
*/
document.getElementById("play").onclick=
	function(){
		loadGame();

        do {
            userName = prompt("Enter your name:");
        } while(userName==null || userName=='');
	};

/*
 *
 * Show high scores.
 *
*/
document.getElementById("highscore").onclick=
    function(e) {
        Highscores();
        e.preventDefault();
    };

/*
 *
 * Show "how to play" tutorial.
 *
*/
document.getElementById("howTo").onclick=
	function(e) {
		HowTo();
		e.preventDefault();
	}

/*
 *
 * Remove alert by clicking on "ok" button.
 *
*/
document.getElementById("ok").onclick=
	function(e){
			var message = document.getElementById("message").innerHTML;
			document.getElementById("pauseButton").style.visibility="visible";
			modal.style.top=-5000+"px";
			if(message=="You lost!")
				location.reload();
			else if(message=="Level passed!") {
				
				++level;
				if(level==numberOfLevels)
					myGameArea.win();
				else {
					coinsCollected = character.coinsCollected;
					deleteObjects();
					loadGame();
				}
			}
			else if(message=="You win!") {

				location.reload();
	        }
			else
				myGameArea.start();

			e.preventDefault();
	};
