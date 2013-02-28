define(['quintus'], function(Quintus) {
  var Q = Quintus()
          .include("Sprites, Scenes, Input, 2D")
          .setup('pong')
          .controls();

  Q.gravityY = 0;

  return Q;
});