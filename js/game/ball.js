define(['jaws', 'game/drawable'], function(j, Drawable) {
  function Ball() {
    var self = this;

    Drawable.call(self, 'img/ball.png');

    // Private attributes
    var hspeed = 2,
        vspeed = 2,
        previousPosition = {};

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
      previousPosition.x = self.sprite.x;
      previousPosition.y = self.sprite.y;
      previousPosition.right = previousPosition.x + self.sprite.width;
      previousPosition.bottom = previousPosition.y + self.sprite.height;

      if (collidesWithTopWall() || collidesWithBottomWall()) { vspeed = -vspeed; }
      if (collidesWithRightWall() || collidesWithLeftWall()) { hspeed = -hspeed; }
      self.sprite.move(hspeed, vspeed);
    }

    self.bounceAgainstPaddle = function(paddle) {
      if ((paddle.sprite.rect().right > self.sprite.x &&
          paddle.sprite.rect().right <= previousPosition.x) ||
          (paddle.sprite.x < self.sprite.rect().right &&
          paddle.sprite.x >= previousPosition.right)) {
        // Horizontal collision, bounce horizontally
        hspeed = -hspeed;
      }

      if ((paddle.sprite.rect().bottom > self.sprite.y &&
          paddle.sprite.rect().bottom <= previousPosition.y) ||
          (paddle.sprite.y < self.sprite.rect().bottom &&
          paddle.sprite.y >= previousPosition.bottom)) {
        // Vertical collision, bounce vertically
        vspeed = -vspeed;
      }
    }
  };

  return Ball;
});