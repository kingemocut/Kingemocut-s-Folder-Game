/*
*Script originally created by kingemocut for some laughs. has yet to fully be tested with html based hyperlinks.
*
*
*If you think there's an error with this script can you please tell me. thanks,   Kingemocut
*
*
**/

function init()
{
  var Music_Local = document.getElementById("music");
						//name the days

	var now = new Date();
	var dy = now.getDay();		// Get the day Number
	

	var Music
	switch ( dy )
	{
		// The music files currently are being tested for the URL based versions to work. sorry if there's any errors
		//Note to self : Create an Request people to help test this script with URL's
		
		
		case 0 : Music = "http://kingemocut.weebly.com/uploads/1/3/2/4/13244411/forever.mp3";			break;//Sunday
		
		case 1 : Music = "http://kingemocut.weebly.com/uploads/1/3/2/4/13244411/eva_cassidy_-_fields_of_gold_lyrics.mp3";				break; //Monday
		
		case 2 : Music = "http://kingemocut.weebly.com/uploads/1/3/2/4/13244411/bullet_for_my_valentine_-_tears_dont_fall_with_lyrics.mp3";	break; //Tuesday
		
		case 3 : Music = "http://kingemocut.weebly.com/uploads/1/3/2/4/13244411/killswitch_engage_-_my_curse_lyrics.mp3";				break; // Wedsday
		
		case 4 : Music = "http://kingemocut.weebly.com/uploads/1/3/2/4/13244411/pika_girl_-_s3rl.mp3";		break; //Thusday
		
		case 5 : Music = "http://kingemocut.weebly.com/uploads/1/3/2/4/13244411/rebel_love_song_-_black_veil_brides_full_lyrics.mp3";		break; //Friday
		
		case 6 : Music = "http://kingemocut.weebly.com/uploads/1/3/2/4/13244411/avril_lavigne_-_when_youre_gone_-_lyrics.mp3" ;			break; //Saturday
		
		
		//What you wanna hear in case of an error (which shouldn't happen.)
		default: Music = "http://kingemocut.weebly.com/uploads/1/3/2/4/13244411/eva_cassidy_-_fields_of_gold_lyrics.mp3" ;			break;
	}

Music_Local.innerHTML += '<audio src="' + Music + '" autoplay>[ Fallback Message ]</audio>';
}
window.onload=init;
