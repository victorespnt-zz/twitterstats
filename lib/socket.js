var users = require('./users');

module.exports = function(io) {

	// Connection d'un nouvel utilisateur
	// socket représente la connection de CET utilisateur
	io.sockets.on('connection', function(socket) {

		socket.on('auth', function(userId) {
			users.setSocket(userId, socket);
		});
	}); 
};