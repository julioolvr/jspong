requirejs.config({
  shim: {
    'jaws': {
      exports: 'jaws'
    }
  }
});

require(["pong"], function(game) {
  game.start();
});