define(['jaws', 'game/drawable'], function(j, Drawable) {
  function Ball() {
    var self = this;

    Drawable.call(self, 'img/ball.png');

    // Private attributes
    var hspeed = 2,
        vspeed = 2;

    // Private methods
    function collidesWithTopWall() {
      return self.sprite.y < 0;
    }

    function collidesWithBottomWall() {
      return self.sprite.rect().bottom > jaws.height;
    }

    function collidesWithLeftWall() {
      return self.sprite.x < 0;
    }

    function collidesWithRightWall() {
      return self.sprite.rect().right > jaws.width;
    }

    // Public interface
    self.draw = function() {
      self.sprite.draw();
    }

    self.move = function () {
      if (collidesWithTopWall() || collidesWithBottomWall()) { vspeed = -vspeed; }
      if (collidesWithRightWall() || collidesWithLeftWall()) { hspeed = -hspeed; }
      self.sprite.move(hspeed, vspeed);
    }

    self.bounceAgainstPaddle = function(paddle) {
      if (paddle.sprite.rect().right > self.sprite.x) { hspeed = -hspeed }
      // TODO: Collision against second paddle
      // TODO: Vertical collision
    }
  };

  return Ball;
});