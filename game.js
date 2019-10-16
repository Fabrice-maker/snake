// set up our canvas to fill the screen

let canvas = document.getElementById('display')
canvas.width = document.body.clientWidth
canvas.height = document.body.clientHeight
let ctx = canvas.getContext('2d')

// game logic

let msUntilReady = 2000 + (Math.random() * 3000) // 2-5 seconds of waiting
let msUntilLate = msUntilReady + 500 // half a second to react

let start = new Date()
let ready = new Date(start.getTime() + msUntilReady)
let late = new Date(start.getTime() + msUntilLate)

window.addEventListener('keydown', event => {
  console.log(event)
  if (event.code == 'Enter') {
    let now = new Date()
    if (now < ready) {
      alert('too early!')
    } else if (now > late) {
      alert('too slow; you suck!')
    } else {
      alert('YOU WIN!!!')
    }
  }
})

// todo how to make this graphical?

function drawSquare(){
  ctx.fillStyle = 'yellow'
  ctx.fillRect(canvas.width/2 - 250, canvas.height/2 - 250, 500, 500); 
}

function drawCircle() {
  ctx.fillStyle = 'red'
  ctx.fillRect (
   canvas.width/2 - 50
   canvas.height/2 - 50
   100,
   100,

  )

}




setTimeout(() => drawCircle(), msUntilReady)
setTimeout(() => drawSquare(), msUntilLate)
