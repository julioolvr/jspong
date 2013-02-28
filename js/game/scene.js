define(['game/engine', 'game/paddle', 'game/ball'], function(Q, Paddle, Ball) {
  return {
    start: function() {
      Q.scene("level", function(stage) {
        stage.insert(new Paddle({x:20, y:40}));
        stage.insert(new Paddle({x:Q.width - 20, y:40}));
        stage.insert(new Ball({x:50, y:50}));
      });

      Q.stageScene("level");
    }
  };
});