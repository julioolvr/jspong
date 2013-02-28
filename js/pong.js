define(['game/engine', 'game/scene'], function(Q, scene) {
  return {
    start: function () {
      Q.load(['ball.png', 'paddle.png'], function() {
        scene.start();
      });
    }
  };
});