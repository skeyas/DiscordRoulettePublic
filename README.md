# DiscordRoulette

Roulette Project for SWE2 - LTU.
This repository contains all of the components needed for the Roulette Discord Bot Project.

# User Manual

In the Discord App (or web browser). the user needs to type the keyword "Roulette" to begin the game. 
The Bot will respond with "@Username Welcome to Roulette. Would you like to play?"

The user must respond with a Yes or No.
Answering Yes will allow the bot to continue with the game. Else, the bot will respond with "@Username Thank you. Goodbye."

Once the user elects to play the game, the bot will respond with: "@Username What kind of bet would you like to place?"
The user has several choices. The user can choose to bet on number, OE (odd or even), and colours.

Caution: The bot only accepts keywords with capital letters at the start of keyword. Thus, responses like Yes, No, Number, OE, and Colours must be stated with the correct grammar.

The OE game (Odd or Even) will play as a typical two choice game where the generator can end on an odd or even number, or on 0 or 00. 
The system will take a single bet and if the bet is won, the user will gain double what they bet.

The Colour game will play out in a similar fashion.
The user
will be able to bet on Red or Black tiles and the generator will land on red, black, or green.
The discord bot will respond with a number.
If the user wins the bet they will gain double what they initially bet.

The Number game plays out similarly. 
In this game, the user will choose 1 number out of 1-36, 0, or 00. 
If 1 of the numbers bet on is one of the winning numbers the user will gain 35 times the amount bet. 

After each round, the user will be able to decide if they wish to continue betting. 
The program will shut down after the user loses all their earnings regardless.

# Game Example

User: Roulette

Bot @Username, Welcome to Roulette. Would you like to play?
 
User: Yes
 
Bot: @Username, What kind of bet would you like to place?
 
User: Number
 
Bot: @Username, Enter the number you want to bet on and the amount you wish to bet on it, separated by a space
 
User: 5 10
 
Bot:
@Username, You landed on 25
@Username, You lose.
@Username, Would you like to play again? You now have 290 dollars.

User: No
 
Bot: @Username, Thank you. Goodbye.
