define(['jaws'], function(j) {
  return function() {
    var speed = 2,
        sprite = new j.Sprite({image: 'img/paddle.png'});

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

    this.setPosition = function(position) {
      if (position.x !== undefined) sprite.x = position.x;
      if (position.y !== undefined) sprite.y = position.y;
    }
  };
});