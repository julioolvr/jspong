define(['jaws', 'game/state'], function(j, gameState) {
  return {
    start: function () {
      j.start(gameState);
    }
  }
});