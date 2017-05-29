/*
 *
 * In this file levels are defined. The levels are put in array so
 * they can be easily accessed. Here is a tutorial how to write 
 * a new level!
 *
*/

/*
 * 1. When you look at the code for objects in a game, you can see that 
 *    there are some parameters they must get. 
 *    In this file, you give them those parameters.
*/

/*
 * 2. Lets begin with an easy part. First you need to define a character.
 *    Let there be a string "character". You need to assign him 4 values 
 *    (posX, posY, componentWidth, componentHeight), just like in character.js.
 *    For example like this: "character": [20,5,15,30]. That means 20px from the
 *    left side, 5px from the top and he is 15px wide and 30px long. 
 *    Now you can do the same thing for "board" and "flag".
*/

/*
 * 3. Now, let's do the floor. It's a little different than objects above.
 *    First define it like this: "floor" : []. Floor is a Nx4 2D array so
 *    you can put as many 1x4 arrays as you want in it. 
 *    When you look at the floor.js file you can see that object Floor gets
 *    4 values (posX, posY, blockWidth, blockHeight). Now, this game is made
 *    in that way that in every frame you have 10x10 blocks. That means that 
 *    if blockWidth equals 1, the width of that block will be one tenth of the 
 *    screen width. The same is for blockHeight, posX, posY.
 *    So 1<= blockWidth, blockHeight, posX, posY <= 10.
 *    Now you can make floor by yourself :)
*/

/*
 * 4. The same thing works for obstacle, but you need to assing one more value
 *    to it: type.
 *    1 for water
 *    2 for lava
 *    3 for spikes
*/

/*
 * 5. For coins, you must assign posX and posY like described on step 3.
 *    Don't worry about centering the coin in the middle of the floor block
 *    because it will be automatically done when loading
*/

/*
 * 5. The same thing works for potions but you need to assing one more value
 *    to it: type
 *    1 for regeneration
 *    2 for double coins
 *    3 for higher jump
*/

/*
 * 6. Make sure you put "," where it is needed. Put everything inside { and }.
 *    At the end push everything in levels with levels.push({your code}). And 
 *    now you have one more level. 
 *    
 *    If there is anything you are no sure about, just look at the predefined
 *    levels.
 *
 *    Good luck :)
*/

var levels = new Array();

/*
 *1st level
 *
*/
levels.push({
        "floor" : [
            [0,8,1,2], 
            [1,8,1,2],
            [2,8,1,2],
            [3,8,1,2],
            [4,8,1,2],
            [5,8,1,2],
            [6,9,1,1], 
            [7,9,1,1],
            [9,8,1,0.5],
            [11,7,1,1],
            [13,8,1,2],
            [14,8,1,2],
            [15,8,1,2],
            [16,9,1,1],
            [17,9,1,1],
            [18,9,1,1],
            [19,8,1,2],
            [20,8,1,2],
            [21,8,1,2],
            [22,8,1,2],
            [23,7,1,3],
            [24,8,1,2],
            [25,7,1,3],
            [26,8,1,2],
            [27,8,1,2],
            [28,8,1,2],
            [29,9,1,1],
            [30,9,1,1],
            [31,7,1,1], [31,9,1,1],
            [32,9,1,1],
            [33,6,1,1], [33,9,1,1],
            [34,9,1,1],
            [35,7,1,1], [35,9,1,1],
            [36,9,1,1],
            [37,9,1,1],
            [38,8,1,2],
            [39,8,1,2],

            [40,8,1,2],
            [41,8,1,2],
            [42,8,1,2],
            [43,8,1,2],
            [44,8,1,2],
            [45,8,1,2],
            [46,8,1,2],
            [47,8,1,2],
            [48,8,1,2],
            [49,8,1,2],
            [50,8,1,2],
        ],
        "character": [
            20,5,15,30
        ],
        "board": [
            0,0,50,10
        ],
        "flag": [
            40,6,1,2
        ],
        "obstacle": [
            [8,9.3,1,0.7,1],
            [9,9.3,1,0.7,1],
            [10,9.3,1,0.7,1],
            [11,9.3,1,0.7,1],
            [12,9.3,1,0.7,1],
            [16,8.3,1,0.7,3],
            [17,8.3,1,0.7,3],
            [18,8.3,1,0.7,3],
            [22,7.3,1,0.7,3],
            [24,7.3,1,0.7,2],
            [26,7.3,1,0.7,3],
            [29,8.3,1,0.7,3],
            [30,8.3,1,0.7,3],
            [31,8.3,1,0.7,3],
            [32,8.3,1,0.7,3],
            [33,8.3,1,0.7,3],
            [34,8.3,1,0.7,3],
            [35,8.3,1,0.7,3],
            [36,8.3,1,0.7,3],
            [37,8.3,1,0.7,3],
        ],
        "coin": [
            [4,7.25],
            [5,7.25],
            [6,6.5],
            [7,6],
            [8,6.5],
            [9,7.25],
            [10,6],
            [11,5.5],
            [17,7.25],
            [24,4],
            [30,7.25],
            [33,3.5]
        ],
        "potion": [
        ]}
    );


/*
 *2nd level
 *
*/
levels.push({
        "floor": [
            [0,9,1,1],
            [1,9,1,1],
            [2,9,1,1],
            [3,9,1,1],
            [4,9,1,1],
            [5,9,1,1],

            [9,9,1,1],

            [13,9,1,1],

            [17,9,1,1],
            [18,8,1,2],
            [19,7,1,3],

            [20,8,1,2],
            [21,8,1,2],
            [22,8,1,2],

            [23,7,1,3],
            [24,8,1,2],
            [25,9,1,1],
            [26,9,1,1],

            [29,8,1,1],

            [31,5,1,1],
            [35,8,1,1],

            [38,8,1,2],
            [39,8,1,2],

            [40,8,1,2],
            [41,8,1,2],
            [42,8,1,2],
            [43,8,1,2],
            [44,8,1,2],
            [45,8,1,2],
            [46,8,1,2],
            [47,8,1,2],
            [48,8,1,2],
            [49,8,1,2],
            [50,8,1,2],
        ],
        "character": [
            20,5,15,30
        ],
        "board": [
            0,0,50,10
        ],
        "flag": [
            40,6,1,2
        ],
        "obstacle": [
            [6,9.3,1,0.7,3],
            [7,9.3,1,0.7,3],
            [8,9.3,1,0.7,3],

            [10,9.3,1,0.7,1],
            [11,9.3,1,0.7,1],
            [12,9.3,1,0.7,1],

            [14,9.3,1,0.7,2],
            [15,9.3,1,0.7,2],
            [16,9.3,1,0.7,2],

            [20,7.3,1,0.7,1],
            [21,7.3,1,0.7,1],
            [22,7.3,1,0.7,1],

            [27,9.3,1,0.7,3],
            [28,9.3,1,0.7,3],
            [29,9.3,1,0.7,3],
            [30,9.3,1,0.7,3],
            [31,9.3,1,0.7,3],
            [32,9.3,1,0.7,3],
            [33,9.3,1,0.7,3],
            [34,9.3,1,0.7,3],
            [35,9.3,1,0.7,3],
            [36,9.3,1,0.7,3],
            [37,9.3,1,0.7,3],
        ],
        "coin": [
            [3,8.25],
            [4,8.25],
            [5,8.25],
            [7,8.5],
            [9,8.25],
            [11,8.5],
            [13,8.25],
            [15,8.5],
            [17,8.25],
            [18,7.25],
            [21,6.25],
            [24,7.25],
            [26,8.25],
            [31,4.25],
            [33,8.5],
            [35,6.25]

        ],
        "potion": [
            [29,7.25,3]
        ]
   });

/*
 *3rd level
 *
*/
levels.push({
        "floor" : [
            [0,7,1,1],
            [1,7,1,1],

            [5,7,1,1],
            [6,7,1,1],
            [7,7,1,1],

            [11,3,1,5],

            [17,6,1,1],
            [18,6,1,1],
            [19,6,1,1],

            [22,6,1,1],
            [23,5,1,2],
            [24,6,1,1],
            [25,6,1,1],
            [26,4,1,3],

            [31,6,1,1],
            [32,6,1,1],
            [33,6,1,1],
            [34,6,1,1],
            [35,6,1,1],
            [36,6,1,1],
            [37,6,1,1],
            [38,6,1,1],
            [39,6,1,1],
            [40,6,1,1],
            [41,6,1,1],
            [42,6,1,1],
            [43,6,1,1],
            [44,6,1,1],
            [45,6,1,1],
            [46,6,1,1],
            [47,6,1,1],
            [48,6,1,1],
            [49,6,1,1],
            [50,6,1,1],
        ],
        "character": [
            20,5,15,30
        ],
        "board": [
            0,0,50,10
        ],
        "flag": [
            40,4,1,2
        ],
        "obstacle": [
            [0,9,1,1,3],
            [1,9,1,1,3],
            [2,9,1,1,3],
            [3,9,1,1,3],
            [4,9,1,1,3],
            [5,9,1,1,3],
            [6,9,1,1,3],
            [7,9,1,1,3],
            [8,9,1,1,3],
            [9,9,1,1,3],
            [10,9,1,1,3],
            [11,9,1,1,3],
            [12,9,1,1,3],
            [13,9,1,1,3],
            [14,9,1,1,3],
            [15,9,1,1,3],
            [16,9,1,1,3],
            [17,9,1,1,3],
            [18,9,1,1,3],
            [19,9,1,1,3],
            [20,9,1,1,3],
            [21,9,1,1,3],
            [22,9,1,1,3],
            [23,9,1,1,3],
            [24,9,1,1,3], [24,5.3,1,0.7,2],
            [25,9,1,1,3], [25,5.3,1,0.7,2],
            [26,9,1,1,3],
            [27,9,1,1,3],
            [28,9,1,1,3],
            [29,9,1,1,3],
            [30,9,1,1,3],
            [31,9,1,1,3],
            [32,9,1,1,3],
            [33,9,1,1,3], [33,5.3,1,0.7,3],
            [34,9,1,1,3], [34,5.3,1,0.7,3],
            [35,9,1,1,3],
            [36,9,1,1,3],
            [37,9,1,1,3], [37,5.3,1,0.7,3],
            [38,9,1,1,3], [38,5.3,1,0.7,3],
            [39,9,1,1,3],
            [40,9,1,1,3],
            [41,9,1,1,3],
            [42,9,1,1,3],
            [43,9,1,1,3],
            [44,9,1,1,3],
            [45,9,1,1,3],
            [46,9,1,1,3],
            [47,9,1,1,3],
            [48,9,1,1,3],
            [49,9,1,1,3],
            [50,9,1,1,3],
        ],
        "coin": [
            [3,7.25],
            [6,6.25],
            [8,4.25],
            [9,2.25],
            [17,5.25],
            [18,5.25],
            [19,5.25],
            [23,4.25],
            [26,3.25],
            [29,4.25],
            [31,5.25],
            [33.5,4.5],
            [35.5,5.25],
            [37.5,4.5],
        ],
        "potion": [
            [7,6.25,3],
            [11,2.25,1]
        ]}
    );

/*
 *4th level
 *
*/
levels.push({
        "floor" : [
            [0,9,1,1],
            [1,9,1,1],
            [2,9,1,1],
            [3,9,1,1],
            [9,9,1,1],
            [10,9,1,1],
            [11,9,1,1],
            [12,9,1,1],
            [13,4,1,6],
            [19,4,1,6],
            [20,4,1,1],
            [25,6,1,4],
            [27,6,1,1],

            [29,6,1,2],
            [30,6,1,2],
            [31,6,1,2],
            [32,6,1,2],
            [33,6,1,2],
            [34,6,1,2],
            [35,6,1,2],

            [37,6,1,1],
            [38,6,1,1],
            [39,6,1,1],
            [40,6,1,1],
            [41,6,1,1],
            [42,6,1,1],
            [43,6,1,1],
            [44,6,1,1],
            [45,6,1,1],
            [46,6,1,1],
            [47,6,1,1],
            [48,6,1,1],
            [49,6,1,1],
            [50,6,1,1],

        ],
        "character": [
            20,5,15,30
        ],
        "board": [
            0,0,50,10
        ],
        "flag": [
            40,4,1,2
        ],
        "obstacle": [
            [4,9.3,1,0.7,1],
            [5,9.3,1,0.7,1],
            [6,9.3,1,0.7,1],
            [7,9.3,1,0.7,1],
            [8,9.3,1,0.7,1],
            [11,8.3,1,0.7,3],
            [14,9,1,1,3],
            [15,9,1,1,3],
            [16,9,1,1,3],
            [17,9,1,1,3],
            [18,9,1,1,3],

            [20,9,1,1,2],
            [21,9,1,1,2],
            [22,9,1,1,2],
            [23,9,1,1,2],
            [24,9,1,1,2],
            [25,9,1,1,2],
            [26,9,1,1,2],
            [27,9,1,1,2], [27,5,1,1,3],
            [28,9,1,1,2],
            [29,9,1,1,2],
            [30,9,1,1,2],
            [31,9,1,1,2],
            [32,9,1,1,2], [32,5,1,1,3],
            [33,9,1,1,2],
            [34,9,1,1,2],
            [35,9,1,1,2],
            [36,9,1,1,2],
            [37,9,1,1,2],
            [38,9,1,1,2], [38,5,1,1,3],
            [39,9,1,1,2],
            [40,9,1,1,2],
            [41,9,1,1,2],
            [42,9,1,1,2],
            [43,9,1,1,2],
            [44,9,1,1,2],
            [45,9,1,1,2],
            [46,9,1,1,2],
            [47,9,1,1,2],
            [48,9,1,1,2],
            [49,9,1,1,2],
            [50,9,1,1,2],
        ],
        "coin": [
            [12,4.25], [12,5.25], [12,6.25], [12,7.25], [12,8.25],
            [16,1.25],
            [30,2.25], [30,3.25], [30,4.25],
            [31,2.25], [31,3.25], [31,4.25],
            [32,2.25], [32,3.25], [32,4.25],
            [33,2.25], [33,3.25], [33,4.25],
            [34,2.25], [34,3.25], [34,4.25],
        ],
        "potion": [
            [3,8.25,3],
            [19,3.25,1],
            [29,5.25,2],
        ]}
    );

/*
 *5th level
 *
*/
levels.push({
        "floor" : [
            [0,5,1,1],
            [1,5,1,1],
            [2,5,1,1],
            [3,5,1,1],
            [4,5,1,1],

            [6,5,1,1],

            [8,5,1,1],

            [11,7,1,1],
            [12,6,1,2],
            [13,5,1,3],
            [14,5,1,1],
            [15,5,1,1],
            [16,5,1,1],
            [17,5,1,1],
            [18,5,1,1],
            [19,5,1,1],
            [20,5,1,1],
            [21,5,1,1],
            [22,5,1,1],
            [23,5,1,1],
            [24,5,1,1],
            [25,5,1,3],
            [26,6,1,2],
            [27,7,1,1],

            [31,7,1,1],
            [32,6,1,2],
            [33,5,1,3],
            [34,4,1,4],
            [35,3,1,5],
            [36,3,1,5],
            [37,3,1,5],
            [38,3,1,5],
            [39,3,1,5],
            [40,3,1,5],
            [41,3,1,5],
            [42,3,1,5],
            [43,3,1,5],
            [44,3,1,5],
            [45,3,1,5],
            [46,3,1,5],
            [47,3,1,5],
            [48,3,1,5],
            [49,3,1,5],
            [50,3,1,5],
        ],
        "character": [
            20,5,15,30
        ],
        "board": [
            0,0,50,10
        ],
        "flag": [
            40,1,1,2
        ],
        "obstacle": [
            [0,9,1,1,2],
            [1,9,1,1,2],
            [2,9,1,1,2],
            [3,9,1,1,2],
            [4,9,1,1,2],
            [5,9,1,1,2],
            [6,9,1,1,2], [6,4.3,1,0.7,3],
            [7,9,1,1,2],
            [8,9,1,1,2],
            [9,9,1,1,2],
            [10,9,1,1,2],
            [11,9,1,1,2],
            [12,9,1,1,2], [12.3,5.3,0.7,0.7,3],
            [13,9,1,1,2],
            [14,9,1,1,2],
            [15,9,1,1,2], [15,4.3,1,0.7,3],
            [16,9,1,1,2],
            [17,9,1,1,2], [17.5,4.3,1,0.7,3],
            [18,9,1,1,2],
            [19,9,1,1,2], 
            [20,9,1,1,2],
            [21,9,1,1,2], [20.5,4.3,1,0.7,3],
            [22,9,1,1,2],
            [23,9,1,1,2], [23,4.3,1,0.7,3],
            [24,9,1,1,2],
            [25,9,1,1,2],
            [26,9,1,1,2], [26,5.3,1,0.7,3],
            [27,9,1,1,2],
            [28,9,1,1,2],
            [29,9,1,1,2],
            [30,9,1,1,2],
            [31,9,1,1,2],
            [32,9,1,1,2], [32.3,5.3,0.7,0.7,3], 
            [33,9,1,1,2],
            [34,9,1,1,2], [34.3,3.3,0.7,0.7,3], 
            [35,9,1,1,2],
            [36,9,1,1,2], [36,2.3,1,0.7,3],
            [37,9,1,1,2], [37,2.3,1,0.7,3],
            [38,9,1,1,2],
            [39,9,1,1,2],
            [40,9,1,1,2],
            [41,9,1,1,2],
            [42,9,1,1,2],
            [43,9,1,1,2],
            [44,9,1,1,2],
            [45,9,1,1,2],
            [46,9,1,1,2],
            [47,9,1,1,2],
            [48,9,1,1,2],
            [49,9,1,1,2],
            [50,9,1,1,2],
        ],
        "coin": [
            [3,4.25],
            [4,4.25],
            [6,3.25],
            [8,4.25],
            [11,6.25],
            [12,4.25],
            [15,1.25], [15,2.25], [15,3.25],
            [16,1.25], [16,2.25], [16,3.25], 
            [17,1.25], [17,2.25], [17,3.25],
            [18,1.25], [18,2.25], [18,3.25],
            [19,1.25], [19,2.25], [19,3.25],
            [20,1.25], [20,2.25], [20,3.25],
            [21,1.25], [21,2.25], [21,3.25],
            [22,1.25], [22,2.25], [22,3.25],
            [23,1.25], [23,2.25], [23,3.25],
        ],
        "potion": [
            [13,4.25,2],
        ]}
    );