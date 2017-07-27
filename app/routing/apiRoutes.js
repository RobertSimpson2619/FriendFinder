var friendsData = require('../data/friends.js');

var totalDifference = 0;
var totalScore = 0;
var inputScore = 0;



module.exports = function(app){

	app.get('/api/friends', function(req,res){
		res.json(friendsData);
	});

	app.post('/api/friends',function (req,res){
		
		

		var newUser = req.body;

		console.log(newUser);

		// for(var i =0; i<newUser.scores.length; i++){
		// 	inputScore = inputScore + parseInt(newUser.scores[i]);
		// }



		

		for(var i = 0; i< friendsData.length; i++){

			var firstFriendScore = friendsData[i].scores

			for(var x = 0; i< firstFriendScore.length; i++){

				totalScore = totalScore + parseInt(firstFriendScore[x]);
			}
		}

		console.log(inputScore);

		console.log(totalScore);


		res.json(friendsData[0]);


		friendsData.push(req.body);
	
	});

}