define(['jaws'], function(j) {
  return function(spritePath) {
    // Private attributes
    var sprite = new j.Sprite({image: spritePath});

    // Public interface
    this.sprite = sprite;
    this.setPosition = function(position) {
      if (position.x !== undefined) sprite.x = position.x;
      if (position.y !== undefined) sprite.y = position.y;
    }
  };
});