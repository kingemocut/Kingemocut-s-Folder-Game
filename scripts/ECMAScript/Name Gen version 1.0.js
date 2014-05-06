/*This random name genirator has been made by kingemocut AKA Marcus Tindal-Wiles. All rights for this script belong to him/me (it's aqwerd refering to myself as him, LOL)
if you want to use this script on your website, please E-Mail me at;
marcustindalwiles@yahoo.co.uk
or contact me on Deviantart at
http://kingemocut.deviantart.com
This is released under GNU GPL and as such may be edited to suit the users (Your) needs
Please remember to keep this copyright infomation Embeded into the script.

also,please note the following message/s
-------------------------------------------
if you got this version and are not from
https://github.com/
or
http://kingemocut.weebly.com 
then please understand that the following infomation is a little embarising, and don't alugh, ok?
and sorry if your offended, but I mean no insult. it's just that it's personal(and a little embarising... >.<).
*/

function init()
{
  //Get the area the Names are going to be placed
	var Printing = document.getElementById("Location");
	//Create a random Number on load
	//if you wanna add more than 10 names, then increase the number after the * to the number of names you want + 1 (dont ask why, ok?)
	var randomno1 = Math.ceil(Math.random()*11)

	//this is where the names will be that will be switched out each time.
	//If you want to increase the number of names, then copy the following statement (without brackets and comment line thing)into the braces.
	//[i have made it so that their's up to *41 done for you.]
	//Note to self; make the names different for public release version. (if you aren't part of the wikia and your still reading this, then your not ment to see this line.)
	var Names
	switch ( randomno1 )
	{
		case 0 : Names = '<a id="kingemocut" href="http://kingemocut.weebly.com" title="kingemocuts website">kingemocuts website</a>';				break; //My Deviantart
		case 1 : Names = '<a id="kingemocut" href="http://kingemocut.deviantart.com" title="Script creators DeviantArt">Kingemocut</a>';			break; //My Deviantart
		case 2 : Names = '<a id="Puppeh" href="http://umbreon0.deviantart.com" title="Puppehs DA">Green/Puppeh1</a>';								break; //One of my friend's Deviantart [the name is truely spelt puppy1, but i prefer to call him ether pup or puppeh]
		case 3 : Names = 'Red/Eeveeh';																												break; //Another one of my friends
		case 4 : Names = 'JustCallMeMay';																											break; //she's Flame's Girl friend. cool lass, and i feel a little sorry for her(because of a certan someone... let's just call him Peter)
		case 5 : Names = 'LG';																														break; //LostGod's a cool cat, shame about the 'kill everything but cats' attatude
		case 6 : Names = 'GoWeegeeGo';																												break; //a cool guy, and i'd trust him enough to look after my animals if I went for holiday, but I'm still unsure about his true motives...
		case 7 : Names = 'The TD user';																												break; //still got a small suspition that pup's (puppeh1) this guy, but i can't be sure...
		case 8 : Names = '<a href="http://en.wikipedia.org/wiki/steven_fry" title="Wikipedia entry on Steven Fry">Steven Fry</a>';					break; //QI. Watch it. NOW!
		case 9 : Names = 'Flame';																													break; //A badass guy. sometimes a mega mood killer, but after what he's been through, everyone'd be the same. he's my second Best friend, for a few reasons only the wikia is alowed to know about.
		case 10: Names = 'TAH';																														break; //The Amazing Hypeneegee. not the coolist kid, but still an epic RP (rollplay) fighter
		case 11: Names = '<a id="palkia_my_Queen" href="http://xXx8CyanTrain8xXx.deviantart.com" title="an epic DA">Blue/Palk</a>';					break; //Palk's the only person I WILL ever know who's so hot, she makes the sun melt and the blood in my vains rush faster than a speeding bullet. She's the coolest cat on the block, and I owe her big time. If there's anything she ever wants, I'd get it for her.
/*	case 12: Names = '[Person's name]';																												break;
		case 13: Names = '[Person's name]';																											break;
		case 14: Names = '[Person's name]';																											break;
		case 15: Names = '[Person's name]';																											break;
		case 16: Names = '[Person's name]';																											break;
		case 17: Names = '[Person's name]';																											break;
		case 18: Names = '[Person's name]';																											break;
		case 19: Names = '[Person's name]';																											break;
		case 20: Names = '[Person's name]';																											break;
		case 21: Names = '[Person's name]';																											break;
		case 22: Names = '[Person's name]';																											break;
		case 23: Names = '[Person's name]';																											break;
		case 24: Names = '[Person's name]';																											break;
		case 25: Names = '[Person's name]';																											break;
		case 26: Names = '[Person's name]';																											break;
		case 27: Names = '[Person's name]';																											break;
		case 28: Names = '[Person's name]';																											break;
		case 29: Names = '[Person's name]';																											break;
		case 30: Names = '[Person's name]';																											break;
		case 31: Names = '[Person's name]';																											break;
		case 32: Names = '[Person's name]';																											break;
		case 33: Names = '[Person's name]';																											break;
		case 34: Names = '[Person's name]';																											break;
		case 35: Names = '[Person's name]';																											break;
		case 36: Names = '[Person's name]';																											break;
		case 37: Names = '[Person's name]';																											break;
		case 38: Names = '[Person's name]';																											break;
		case 39: Names = '[Person's name]';																											break;
		case 40: Names = '[Person's name]';																											break;
		case 41: Names = '[Person's name]';																											break;
		case 42: Names = '[Person's name]';																											break;
		case 43: Names = '[Person's name]';																											break;
		case 44: Names = '[Person's name]';																											break;
		case 45: Names = '[Person's name]';																											break;
		case 46: Names = '[Person's name]';																											break;
		case 47: Names = '[Person's name]';																											break;
		case 48: Names = '[Person's name]';																											break;
		case 49: Names = '[Person's name]';																											break;
		case 50: Names = '[Person's name]';																											break;
		case 51: Names = '[Person's name]';																											break;
		case 52: Names = '[Person's name]';																											break;
		case 53: Names = '[Person's name]';																											break;
		case 54: Names = '[Person's name]';																											break;
		case 55: Names = '[Person's name]';																											break;
		case 56: Names = '[Person's name]';																											break;
		case 57: Names = '[Person's name]';																											break;
		case 58: Names = '[Person's name]';																											break;
		case 59: Names = '[Person's name]';																											break;
		case 60: Names = '[Person's name]';																											break;
		case 61: Names = '[Person's name]';																											break;
		case 62: Names = '[Person's name]';																											break;
		case 63: Names = '[Person's name]';																											break;
		case 64: Names = '[Person's name]';																											break;
		case 65: Names = '[Person's name]';																											break;
		case 66: Names = '[Person's name]';																											break;
		case 67: Names = '[Person's name]';																											break;
		case 68: Names = '[Person's name]';																											break;
		case 69: Names = '[Person's name]';																											break;
		case 70: Names = '[Person's name]';																											break;
		case 71: Names = '[Person's name]';																											break;
		case 72: Names = '[Person's name]';																											break;
		case 73: Names = '[Person's name]';																											break;
		case 74: Names = '[Person's name]';																											break;
		case 75: Names = '[Person's name]';																											break;
		case 76: Names = '[Person's name]';																											break;
		case 77: Names = '[Person's name]';																											break;
		case 78: Names = '[Person's name]';																											break;
		case 79: Names = '[Person's name]';																											break;
		case 80: Names = '[Person's name]';																											break;
		case 81: Names = '[Person's name]';																											break;
		case 82: Names = '[Person's name]';																											break;
		case 83: Names = '[Person's name]';																											break;
		case 84: Names = '[Person's name]';																											break;
		case 85: Names = '[Person's name]';																											break;
		case 86: Names = '[Person's name]';																											break;
		case 87: Names = '[Person's name]';																											break;
		case 88: Names = '[Person's name]';																											break;
		case 89: Names = '[Person's name]';																											break;
		case 90: Names = '[Person's name]';																											break;
		case 91: Names = '[Person's name]';																											break;
		case 92: Names = '[Person's name]';																											break;
		case 93: Names = '[Person's name]';																											break;
		case 94: Names = '[Person's name]';																											break;
		case 95: Names = '[Person's name]';																											break;
		case 96: Names = '[Person's name]';																											break;
		case 97: Names = '[Person's name]';																											break;
		case 98: Names = '[Person's name]';																											break;
		case 99: Names = '[Person's name]';																											break;
		case 100: Names = '[Person's name]';																											break;*/
		//default command is used in case an error happens, like the the number returned by math.ceil is bigger than the number of case's.
		default: Names = '<a id="palkia_my_Queen" href="http://xXx8CyanTrain8xXx.deviantart.com" title="an epic DA">Blue/Palk</a>';					break; //Palk's the only person I will EVER know who's so hot, she makes the sun melt and the blood in my vains rush faster than a speeding bullet. She's the coolest cat on the block, and I owe her big time. If there's anything she ever wants, I'd get it for her.
	}

//Prints the names along with the message "Today we're gonna let (name of the person) test out this game."
//Emo's note: The text will also be centered and with the second highest font size/'header' (as the HTML5.0 call it).
Printing.innerHTML += "<center><h2>Today we're gonna let " + Names + " test out this game</h2></center>";
}
//when the window loads, it opens with a name already Down. this is why you MUST make this script embeded into 'fresh' html document, with only this script and a .css. i'd like to state i'm working on a fix for this as you read this
//also, the .css included in the game archive is only the basic one. moders, if you want a cool looking .css, make it yourself, or E-mail me.
//if you want me to make the .css, please be ready to depart with 8$ (or the foregin equivalent) of your hard earned cash. (it's 8$ because that's the closest round figure to 5 (british) pounds) (Stupid Keyboard Layout Fail...)

window.onload=init;
