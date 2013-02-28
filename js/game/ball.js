define(['game/engine'], function(Q) {
  Q.Sprite.extend("Ball", {
    init: function(p) {
      this._super(p, {
        asset: 'ball.png',
        xspeed: 2,
        yspeed: 0
      });

      this.add('2d');

      this.on('bump.left,bump.right', function(col) {
        this.p.xspeed = -(this.p.xspeed);
      });

      this.on('bump.top,bump.bottom', function(col) {
        this.p.yspeed = -(this.p.yspeed);
      });
    },
    step: function(dt) {
      var coll;
      // Check collisions against stage
      this.p.x += this.p.xspeed;
      this.p.y += this.p.yspeed;
      if (coll = this.stage.search(this)) {
        //console.log("collided!", coll);
      }
    }
  });

  return Q.Ball;
});