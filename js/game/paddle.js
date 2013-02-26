define(['jaws', 'game/drawable'], function(j, Drawable) {
  function Paddle() {
    var self = this;

    Drawable.call(self, 'img/paddle.png');

    // Private attributes
    var speed = 2;

    // Private methods
    function collidesWithTop() {
      return self.sprite.y < 0;
    }

    function collidesWithBottom() {
      return self.sprite.rect().bottom > j.height;
    }

    function moveUp() {
      self.sprite.y -= speed;
    }

    function moveDown() {
      self.sprite.y += speed;
    }

    // Public interface
    self.move = function() {
      if (j.pressed("up") && !collidesWithTop()) {
        moveUp();
        return;
      }

      if (j.pressed("down") && !collidesWithBottom()) {
        moveDown();
        return;
      }
    }

    self.draw = function() {
      self.sprite.draw();
    }

    self.collidesWith = function(item) {
      return self.sprite.rect().collideRect(item.sprite.rect());
    }
  }

  return Paddle;
});