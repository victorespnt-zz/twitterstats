var users = require('../lib/users');
var twitter = require('../lib/twitter');

exports.getIndex = function(req, res) {

	var userId;

	if (req.session.userId) {
		userId = req.session.userId;
	}
	else {
		userId = req.session.userId = users.addUser();
	}

	var alltags = users.getTags();
	if (alltags.length) {twitter.streamRefresh(alltags);}
	

	//render la page views / home / index .html
	res.render('home/index', {		 
		userId: userId
	});
};

exports.postEmission = function(req, res) {
	users.addEmission(req.session.userId, req.body.tag); 
	//redirige vers la home page
	res.redirect('/');
};