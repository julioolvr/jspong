(function(j) {
  function Paddle(sprite) {
    var speed = 2;

    function collidesWithTop() {
      return sprite.y < 0;
    }

    function collidesWithBottom() {
      return sprite.rect().bottom > j.height;
    }

    function moveUp() {
      sprite.y -= speed;
    }

    function moveDown() {
      sprite.y += speed;
    }

    this.sprite = sprite;

    this.move = function() {
      if (j.pressed("up") && !collidesWithTop()) {
        moveUp();
        return;
      }
      
      if (j.pressed("down") && !collidesWithBottom()) {
        moveDown();
        return;
      }
    }

    this.draw = function() {
      sprite.draw();
    }

    this.collidesWith = function(item) {
      return sprite.rect().collideRect(item.sprite.rect());
    }
  }

  function Ball(sprite) {
    var hspeed = 2, vspeed = 2;

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
      // TODO: Collision agains second paddle
      // TODO: Vertical collision
    }
  }

  var gameState = function() {
    var player1, player2, ball;

    this.setup = function() {
      j.preventDefaultKeys(["up", "down"]);

      player1 = new Paddle(new j.Sprite({image: 'img/paddle.png', x: 10, y: 10}));
      player2 = new Paddle(new j.Sprite({image: 'img/paddle.png', x: j.width - 30, y: 10}));

      ball = new Ball(new j.Sprite({image: 'img/ball.png', x: j.width / 2, y: j.height / 2}));
    };

    this.update = function () {
      player1.move();
      
      if (player1.collidesWith(ball)) {
        ball.bounceAgainstPaddle(player1);
      }
      
      ball.move();
    };

    this.draw = function() {
      j.clear();
      player1.draw();
      player2.draw();
      ball.draw();
    };
  };

  window.onload = function () {
    j.start(gameState);
  };
})(jaws);