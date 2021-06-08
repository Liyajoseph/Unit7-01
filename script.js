document.getElementById('button').addEventListener('click', random1)
let randonnumber = 0
let userguess = 0

function random1() {
  userguess = document.getElementById('box').value
  userguess = parseInt(userguess)

  randonnumber = (Math.random() * 6) + 1
  randonnumber = parseInt(randonnumber)

  if (userguess == randonnumber) {
    document.getElementById('answer').innerHTML = 'You win!'
  }
}
