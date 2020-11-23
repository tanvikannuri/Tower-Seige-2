class Box{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.4,
            'friction':0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;

        this.image = loadImage("box.png");

        this.Visibility = 255;

        World.add(world, this.body);
      }

      score()
      {

        if (this.Visibility < 0 && this.Visibility >- 105)
        {

          score++;

        }

      }

      display(){
        if(this.body.speed < 3){
          push();
          translate(this.body.position.x, this.body.position.y);
          imageMode(CENTER);
          image(this.image, 0, 0, this.width, this.height);
          pop();
        } else {
        push();
        World.remove(world, this.body);
        this.Visibility = this.Visibility - 5;
        tint(255, this.Visibility);
        image(this.image,this.body.position.x, this.body.position.y, this.width, this.height);
        pop();
        }

      }
}