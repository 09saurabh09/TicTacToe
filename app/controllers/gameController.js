/**
 * Created by saurabhk on 07/02/16.
 */
module.exports = {
  getGameByID: function(gameId) {
      //GameModel.
  },
  createGame: function(gameObject) {
      var newGame = new GameModel(gameObject);
      newGame.save(function(err) {
          if (err) {
              console.log(err.message);
          }
          // if successful, return the new user
          else {
              console.log('game saved');
          }

      });
    }
};