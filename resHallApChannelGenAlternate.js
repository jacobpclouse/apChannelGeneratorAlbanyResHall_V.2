/* This program will assist in mapping AP channel settings on a building with 4 floors
It assumes:
- 4 floors
- 6 positions for APs per floor (2 width, 3 length)
- 3 possible non-overlapping channels 
- APs will be situated in the same spot on each floor 
- Diamond Layout
EX:

     FLOOR 1

       6
1-----[_]-----5
    2-----4
       3

    FLOOR 1 Channels

       6
11----[_]----11
    6-----6
       1

There is a pattern here:
Lenghtwise: Elements 1 and 2 are farthest from each other on any given floor (can be the same channel),
Widthwise: Elements 4, 5 and 6 are farthest from each other
All that remains is 3

IDEA: 
Only need three numbers
    1 and 5 will be the same and will reference the same value in the array
    2, 4 and 6 will be the same and will reference the same value in the array
    3 will be what is left over

Pattern: [1,6,11,1,6,11,1...]
    -> can use a string with these values
    -> get user starting input and find the value in the string
    -> once found, it take note of the position in the string
    -> it will look at the value that comes before it in the string to determine the basement channel
    -> slice the value and the next two numbers for the first floor channels
    -> add one to the postion in the string, take that and the next two values
    -> add one to the postion in the string, take that and the next two values
    -> output the values in the correct placement tables to the user

Things to work on:
- I find myself copying and pasting a lot of code
- Could use a function for duplicate code and then just call it
- This approach scales better if you want to add more floors, BUT it falls apart if you want to adjust the number of APs
*/



/* Setting up Variables */

/* We can have it set up that the user can even input the initial values into the string 
AND determine how long the pattern is */
initialPattern = [1, 6, 11, 1, 6, 11, 1];

floor1 = [];
floor2 = [];
floor3 = [];
basement = [];

preferredChannel = 0;
patternLength = 3;
indexStarter = 0;

/* Explaining Program Use and Floor Layout */
alert(`This program is designed for the Albany Res Hall APs.
The layout for each floor goes like this: 

     FLOOR 1

¯¯¯¯¯¯¯6¯¯¯¯¯¯¯
1-----[_]-----5
____2-----4____
_______3_______

(The elevator is in the center of the map)

YOU ARE CHOOSING THE INITIAL CHANNEL OF THE AP IN POSITION 1
`);



/* Input from User */
/* Implimenting DO WHILE LOOP to check input */
do {
    preferredChannel = window.prompt(
        `What channel do you want the 1st AP on the Basement to start at? (1, 6 or 11)
        PLEASE DO NOT PUT IN ANYTHING OTHER THAN THE LISTED NUMBERS`
    )
} while (preferredChannel != 1 && preferredChannel != 6 && preferredChannel != 11);

/* Showing User their Selection */
preferredChannel = parseInt(preferredChannel);
console.log(`AP 1 on Floor 1 will start on Channel ${preferredChannel}`);
alert(`AP 1 on Floor 1 will start on Channel ${preferredChannel}`);



/* Generating AP Floors */

for (i = 0; i < patternLength; i++) {
    if (preferredChannel == initialPattern[i]) {

        floor1 = initialPattern.slice(i, (i + 3));
        basement = floor1[2];
        preferredChannel = initialPattern[i]++;

        floor2 = initialPattern.slice(preferredChannel, (preferredChannel + 3));
        preferredChannel++;

        floor3 = initialPattern.slice(preferredChannel, (preferredChannel + 3));
        
        break
    };
};


/* Outputing Results to Console */
console.log(`
___________________________
THIS IS YOUR PATTERN OUTPUT:
~~~~~~~~~~~~~~~~~~~~~~~~~~~

    BASEMENT

    ¯¯¯¯¯¯¯x¯¯¯¯¯¯¯
    ${basement}-----[_]-----x
    ____x-----x____
    _______x_______



    FLOOR 1

    ¯¯¯¯¯¯¯${floor1[1]}¯¯¯¯¯¯¯
    ${floor1[0]}-----[_]-----${floor1[0]}
    ____${floor1[1]}-----${floor1[1]}____
    _______${floor1[2]}_______    



    FLOOR 2

    ¯¯¯¯¯¯¯${floor2[1]}¯¯¯¯¯¯¯
    ${floor2[0]}-----[_]-----${floor2[0]}
    ____${floor2[1]}-----${floor2[1]}____
    _______${floor2[2]}_______    



    FLOOR 3

    ¯¯¯¯¯¯¯${floor3[1]}¯¯¯¯¯¯¯
    ${floor3[0]}-----[_]-----${floor3[0]}
    ____${floor3[1]}-----${floor3[1]}____
    _______${floor3[2]}_______    
`);


alert(
    `Open the Console to see your Patterns

    Jacob Clouse, Copyright 2021, DO NOT SUE ME`
);