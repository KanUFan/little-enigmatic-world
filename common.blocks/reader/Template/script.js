let chooseColorPage
let chooseColorText
let chooseThicknesFont

function updateColorPage(event) {
  let bcclr = document.querySelector('body')
  if (bcclr) {
    bcclr.style.backgroundColor = event.target.value
  }
}

function updateColorText(event) {
  let txt = document.querySelector('#text')
  if (txt) {
    txt.style.color = event.target.value
  }
}

function updateThicknesFont(event) {
  let txt = document.querySelector('#text')
  if (txt) {
    txt.style.fontWeight = event.target.value * 100
  }
  requestFullscreen(document.body)
}


function changeColorPage() {
  chooseColorPage = document.querySelector('#chooseColorPage')
  chooseColorPage.addEventListener('input', updateColorPage, false)
}

function changeColorText() {
  chooseColorPage = document.querySelector('#chooseColorText')
  chooseColorPage.addEventListener('input', updateColorText, false)
}

function changeThicknesFont() {
  chooseThicknesFont = document.querySelector('#chooseThicknesFont')
  chooseThicknesFont.addEventListener('input', updateThicknesFont, false)
}

window.addEventListener('load', changeColorPage, false)
window.addEventListener('load', changeColorText, false)
window.addEventListener('load', changeThicknesFont, false)
