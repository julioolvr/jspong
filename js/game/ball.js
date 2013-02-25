define(['jaws'], function(j) {
  return function(sprite) {
    var hspeed = 2,
        vspeed = 2,
        sprite = new j.Sprite({image: 'img/ball.png'});

    function collidesWithTopWall() {
      return sprite.y < 0;
    }

    function collidesWithBottomWall() {
      return sprite.rect().bottom > jaws.height;
    }

    function collidesWithLeftWall() {
      return sprite.x < 0;
    }

    function collidesWithRightWall() {
      return sprite.rect().right > jaws.width;
    }

    this.sprite = sprite;

    this.draw = function() {
      sprite.draw();
    }

    this.move = function () {
      if (collidesWithTopWall() || collidesWithBottomWall()) { vspeed = -vspeed; }
      if (collidesWithRightWall() || collidesWithLeftWall()) { hspeed = -hspeed; }
      sprite.move(hspeed, vspeed);
    }

    this.bounceAgainstPaddle = function(paddle) {
      if (paddle.sprite.rect().right > sprite.x) { hspeed = -hspeed }
      // TODO: Collision against second paddle
      // TODO: Vertical collision
    }

    this.setPosition = function(position) {
      if (position.x !== undefined) sprite.x = position.x;
      if (position.y !== undefined) sprite.y = position.y;
    }
  };
});