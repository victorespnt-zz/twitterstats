var ids = 0;

var usersArray = [];
var alltags = [];


//Ajoute un utilisateur
var users = {
        addUser: function() {
            var id = ++ids;
            usersArray[id] = { socket: null, tags: []};
            return id;
        },

        setSocket: function(userId, socket) {
            usersArray[userId].socket = socket;
        },

        addEmission: function(userId, tag) {
            // L'utilisateur entre son tag
            usersArray[userId].tags.push(tag.toLowerCase());
            // On vérifie si le tag n'existe pas déjà dans la base
            if (alltags.indexOf(tag.toLowerCase()) === -1) {
                // S'il n'existe pas, on le crée et on l'envoie dans le tableau alltags
                alltags.push(tag.toLowerCase());
            };
        },

        broadcast: function(tweet) {
            //pour chaque user, comparer les # du tweet avec les # de l'user
            // Si ça correspond, envoyer le tweet à user
            for (var i = 0; i < usersArray.length; i++) {
                usersArray[i]
                if (!usersArray[i]) continue;
                for (var j = 0; j < tweet.entities.hashtags.length; j++) {
                    if (usersArray[i].tags.indexOf(tweet.entities.hashtags[j].text.toLowerCase()) != -1) {
                        usersArray[i].socket.emit('tweet', tweet);
                        break;
                    };
                };
            }

        },
         getTags: function() {

        	return alltags;
    	}
    }

module.exports = users;