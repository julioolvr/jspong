define(['jaws', 'game/paddle', 'game/ball'], function(j, Paddle, Ball) {
  return {
    state: function() {
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
    }
  }
});