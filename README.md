# apChannelGeneratorAlbanyResHall_V.2
An alternate way of generating the Albany Res hall AP channel layout using a different pattern

-----------

This program will assist in mapping AP channel settings on a building with 4 floors
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
