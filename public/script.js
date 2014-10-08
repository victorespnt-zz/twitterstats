(function() {

	var socket = io();

	socket.emit('auth', userId);
	var ulTweets = document.getElementById('tweets');


	socket.on('tweet', function(tweet) {
		var li = document.createElement('li');
		li.innerHTML = tweet.text;



		for

		if (!firstLi) {
			ulTweets.appendChild(li);
		}
		else {
			ulTweets.insertBefore(li, firstLi);
		}

		document.getElementById('lestweets').appendChild(li);
	});
})();