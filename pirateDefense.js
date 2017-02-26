const bombs =[]
const ships =[]
const sounds = ['explode', 'explosion']

fill('ocean')
PIRATE = stamp('ship',800,850,300)

function makeEnemy(h,size,s) {
    h = h || random(350,400)
    size = size || 50
    s = random(1,3)
	const enemy = stamp('pirateship',0,h,size)
    enemy.SPEED = s
    enemy.SIZE = size
    enemy.back()
}

makeEnemy()

function popBomb() {
  bombs.pop()
}
function fall(bomb) {
    bomb.DOWN = true
    bomb.move(bomb.x+bomb.ROTATION,bomb.y+100,600)
    bomb.size(10,600)  
    bomb.splash()
    delay(popBomb,601)
}
function shoot() {
  const DISTANCE = 900 -y
  const TIME = DISTANCE > 500 ? 2000 : 
  	DISTANCE > 400 ? 1500 :
    DISTANCE > 350 ? 1000 :
    DISTANCE > 300 ? 650 :
    DISTANCE > 250 ? 300 : 200
  if (bombs.length < 5) {
    let ball = stamp('bomb',PIRATE.x,900,50)
    ball.DOWN = false
    ball.aim(x,y)
    ball.ROTATION = ball.rotation
    ball.move(UP,900-y,TIME)
    ball.size(20,1600)
    ball.rotate(1440*Math.random() - 720,TIME)
	dropBomb = function() { fall(ball) }
    delay(dropBomb, TIME)
    bombs.unshift(ball);
  }
}

tap = shoot

function ifHit(thing) {
  const hSize = thing.SIZE/2
  const xMin = thing.x-hSize
  const xMax = thing.x+hSize
  const yMin = thing.y-hSize
  const yMax = thing.y+hSize
  const intersects = ({x,y}) => xMin <= x && x <= xMax && yMin <= y && y <= yMax
  const fallingBombs = bombs.filter(b => b.DOWN && intersects(b))
  console.log(fallingBombs.length);
  let n = random([1,2,3])
  if (fallingBombs.length){
    fallingBombs.forEach(b => b.hide())
	sound(random(sounds))
    thing.explode()
	  while(n){
        makeEnemy()
        n = n - 1
      }
//      return true
  }
//  return false;
}

function sinkOrMove(thing) {
  (bombs.length && ifHit(thing)) || moveEnemy(thing)
}
function moveEnemy(thing){
  if (thing.x > 700) {
      thing.x = 0
      thing.y = thing.y+20
      const newSize = Math.floor(thing.height*1.5)
      thing.size(newSize)
      thing.SPEED = thing.SPEED*1.1
  } else {
	thing.move(RIGHT, thing.SPEED)
    //thing.x = 0
  }
}

function loop(){
// if (PIRATE.direction = 
 find("pirateship").forEach(sinkOrMove)
 
 PIRATE.move(LEFT,5)
 PIRATE.wrap()
} 












