;(function () {
	"use strict";

	var playList = [{
		author: "led zeppelin",
		song: "stairway to heaven",
		duration: "2:03"
	},
	{
		author: "queen",
		song: "bohemian rhapsody",
		duration: "2:30"
	},
	{
		author: "lynyrd skynyrd",
		song: "free bird",
		duration: "1:56"
	},
	{
		author: "deep purple",
		song: "smoke on the water",
		duration: "3:03"
	},
	{
		author: "jimi hendrix",
		song: "all along the watchtower",
		duration: "2:53"
	},
	{
		author: "AC/DC",
		song: "back in black",
		duration: "2:43"
	},
	{
		author: "queen",
		song: "we will rock you",
		duration: "2:13"
	},
	{
		author: "metallica",
		song: "enter sandman",
		duration: "3:03"
	}
	];

	var songList = document.querySelector('.ba-playlist__list');
	// var songName = document.querySelector('.ba-song__name');
	// var songDuration = document.querySelector('.ba-song__duration');
	// var songAuthor = document.querySelector('.ba-song__author');
	// var song = document.querySelector('.ba-song');

	for (var i = 0; i < playList.length; i++) {

		var songRow = '<li class="ba-song">' +
		'<div class="ba-song__name">' + playList[i].song + '</div>' +
		'<div class="ba-song__duration">' + playList[i].duration + '</div>' +
		'<div class="ba-song__author">' + playList[i].author + '</div>' +'</li>';

		songList.innerHTML += songRow;
	}

})();
