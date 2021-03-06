define(['jaws', 'game/paddle', 'game/ball'], function(j, Paddle, Ball) {
  return function() {
    var player1, player2, ball;

    function resetBall(ball) {
      ball.setPosition({x: j.width / 2, y: j.height / 2});
    }

    this.setup = function() {
      j.preventDefaultKeys(["up", "down"]);

      player1 = new Paddle();
      player2 = new Paddle();

      player1.setPosition({x: 10, y: 10});
      player2.setPosition({x: j.width - 30, y: 10});

      ball = new Ball();
      resetBall(ball);
    };

    this.update = function () {
      player1.move();

      if (player1.collidesWith(ball)) {
        ball.bounceAgainstPaddle(player1);
      }

      if (player2.collidesWith(ball)) {
        ball.bounceAgainstPaddle(player2);
      }

      if (ball.collidesWithRightWall()) {
        // Player 1 scores
        resetBall(ball);
      }

      if (ball.collidesWithLeftWall()) {
        // Player 2 scores
        resetBall(ball);
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
});