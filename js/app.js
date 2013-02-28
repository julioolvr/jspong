requirejs.config({
  paths: {
    'quintus': 'http://cdn.html5quintus.com/v0.1.1/quintus-all'
  },
  shim: {
    'quintus': {
      exports: 'Quintus'
    }
  }
});

require(["pong"], function(game) {
  game.start();
});