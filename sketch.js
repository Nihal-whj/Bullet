var bullet,wall
var speed,weight
var thickness

function setup() {
  createCanvas(1600,400);
  speed=random(55,90)
  weight=random(400,1500)
  bullet=createSprite(50,200,50,50);
  bullet.shapeColor="white"
  bullet.velocityX=3;
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor=(80,80,80)
  thickness=random(22,83)
  speed=random(223,321)
  weight=random(30,52)
}
function draw() {
  background(0,0,0);  
  function hasCollided(Lbullet.width;
    wallLeftEdge=1wall.x;
    if (bulletRightEdge>=wallLeftEdge)
    {
      return true
    }
    return false;

    if(hasCollided(bullet, wall))
    {
      bullet.velocityX=0;
      var damage=0.5 * speed* speed/(thickness *thickness *thickness);
      |
      if(damage>10)
      {
        wall.shapeColor(255,0,0);
      }
      if(damage<10)
      {
        wall.shapecolor=color(0,255,0);
      }
    }
  drawSprites();
}