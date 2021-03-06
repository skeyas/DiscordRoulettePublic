const Discord = require('discord.js');
const client = new Discord.Client();
const auth = require('./auth.json');

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

/*client.on('greeting', greeting =>	{
	greeting.channel.send('Welcome to roulette. Would you like to play?')
});*/

var oddOrEvenFlag = false;
var numberFlag = false;
var colourFlag = false;
var redFlag = false;
var blackFlag = false;
var oddFlag = false;
var evenFlag = false;
var receivedInput = false;
var blackNumbers = [2, 4, 6, 8, 10, 11, 13, 15, 17, 20, 22, 24, 26, 28, 29, 31, 33, 35];
var redNumbers = [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36];
var bet;
var amount;
var actual;
var total = 300;

client.on('message', msg => {
	if(msg.author.id === client.user.id)	{
		return;
	}
	var val = msg.content;
	if (val === 'Roulette') {
		msg.reply('Welcome to Roulette. Would you like to play? (Yes/No)');
	}
	if (val === 'Yes')	{
		msg.reply('What kind of bet would you like to place?');
		msg.reply('OE (odd or even), Colour, or Number');
	}
	else if(val === 'No')	{
		oddOrEvenFlag = false;
		numberFlag = false;
		colourFlag = false;
		redFlag = false;
		blackFlag = false;
		oddFlag = false;
		evenFlag = false;
		receivedInput = false;
		bet = null;
		amount = null;
		actual = null;
		total = 300;
		msg.reply('Thank you. Goodbye.');
	}
	else if(val === 'Number')	{
		numberFlag = true;
		msg.reply('Enter the number you want to bet on and the amount you wish to bet on it, separated by a space');
		
	}
	else if(val === 'Colour')	{
		colourFlag = true;
		msg.reply('Enter the colour upon which you want to bet');
		
	}
	else if(val === 'OE')	{
		oddOrEvenFlag = true;
		msg.reply('Would you like to bet on odd or even?');
	}
	else if(val === 'Odd')	{
		oddFlag = true;
		msg.reply('How much would you like to bet?');
	}
	else if (val === 'Even')	{
		evenFlag = true;
		msg.reply('How much would you like to bet?');
	}
	else if (val === 'Red')	{
		redFlag = true;
		msg.reply('How much would you like to bet?');
	}
	else if(val === 'Black')	{
		blackFlag = true;
		msg.reply('How much would you like to bet?');
	}
	else if(isNaN(val) == false)	{
		if(val > total)	{
			msg.reply('You have ' + total + ' dollars. You cannot bet ' + val + ' dollars.');
			return;
		}
		else	{
			amount = val;
		}
		actual = Math.ceil(Math.random()*38);
		if(actual < 37)	{
			msg.reply('You landed on ' + actual);
		}
		else if(actual == 37)	{
			msg.reply('You landed on 0');
		}
		else if(actual == 38)	{
			msg.reply('You landed on 00');
		}
		if(colourFlag == true)	{
			if(blackNumbers.includes(actual))	{
				if(blackFlag == true)	{
					total = total + parseInt(amount);
					msg.reply('You win! You now have ' + total + ' dollars.');
					msg.reply('Would you like to play again?');
				}
				else	{
					total = total - parseInt(amount);
					msg.reply('You lose. You now have ' + total + ' dollars.');
					msg.reply('Would you like to play again?');
				}
			}
			else if(redNumbers.includes(actual))	{
				if(redFlag == true)	{
					total = total + parseInt(amount);
					msg.reply('You win! You now have ' + total + ' dollars.');
					msg.reply('Would you like to play again?');
				}
				else	{
					total = total - parseInt(amount);
					msg.reply('You lose. You now have ' + total + ' dollars.');
					msg.reply('Would you like to play again?');
				}
			}
			else	{
				total = total - parseInt(amount);
				msg.reply('You lose. You now have ' + total + ' dollars.');
				msg.reply('Would you like to play again?');
			}
			colourFlag = false;
		}
		if(oddOrEvenFlag == true)	{
			if(actual == 37 || actual == 38)	{
				total = total + parseInt(amount);
				msg.reply('You lose. You now have ' + total + ' dollars.');
			}
			else if(actual % 2 == 0)	{
				if(evenFlag == true)	{
					total = total + parseInt(amount);
					msg.reply('You win! You now have ' + total + ' dollars.');
					msg.reply('Would you like to play again?');
				}
				else	{
					total = total - parseInt(amount);
					msg.reply('You lose. You now have ' + total + ' dollars.');
					msg.reply('Would you like to play again?');
				}
			}
			else if(actual % 2 == 1)	{
				if(oddFlag == true)	{
					total = total + parseInt(amount);
					msg.reply('You win! You now have ' + total + ' dollars.');
					msg.reply('Would you like to play again?');
				}
				else	{
					total = total - parseInt(amount);
					msg.reply('You lose. You now have ' + total + ' dollars.');
					msg.reply('Would you like to play again?');
				}
			}
			oddOrEvenFlag = false;
		}
	}
	
	else if(numberFlag == true) {
		ans = val.split(" ");
		if(parseInt(ans[0]) >=0 && parseInt(ans[0]) <= 36)	{
			bet = ans[0];
		}
		else if(ans[0] == '00')	{
			bet = 38;
		}
		else	{
			msg.reply('You must enter either 00 or a number between 0 and 36.');
			msg.reply('Enter the number on which you want to bet.');
			return;
		}
		if(parseInt(ans[1]) > total)	{
			msg.reply('You have ' + total + ' dollars. You cannot bet ' + ans[1] + ' dollars.');
			msg.reply('How much would you like to bet?');
			return;
		}
		else	{
			amount = ans[1];
		}
		actual = Math.ceil(Math.random()*38);
		msg.reply('You landed on ' + actual);
		if(bet == actual)	{
			total = total + 35*parseInt(amount);
			msg.reply('You win! You now have ' + total + ' dollars.');
			msg.reply('Would you like to play again?');
		}
		else	{
			msg.reply('You lose.');
			total = total - parseInt(amount);
			msg.reply('Would you like to play again? You now have ' + total + ' dollars.');
		}
		numberFlag = false;
	}
});

client.login(auth.token);
