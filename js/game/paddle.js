define(['game/engine'], function(Q) {
  Q.Sprite.extend("Paddle", {
    init: function(p) {
      this._super(p, {
        asset: 'paddle.png',
        speed: 2
      });

      this.add('2d');
    },
    step: function(dt) {
      if (Q.inputs['down']) this.p.y += this.p.speed;
      if (Q.inputs['up']) this.p.y -= this.p.speed;
    }
  });

  return Q.Paddle;
});