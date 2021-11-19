

let body = document.querySelector('body')

body.style.backgroundColor = '#DDCEE0'

let block1 = document.createElement('header')

block1.style.backgroundColor = 'rgba(67, 170, 222, 0.141)'
block1.style.width = '100%'
block1.style.height = '130px'
block1.style.borderRadius = '15px'

document.querySelector('body').append(block1)

let text = document.createElement('p')

text.innerText = "СоБаКа - БаБаКа"
text.style.color = "#282163"
text.style.fontSize = '50px'
text.style.textAlign = 'center'

document.querySelector('header').append(text)

let block2 = document.createElement('div')

block2.style.backgroundColor = 'rgba(16, 84, 161, 0.141)'
block2.style.width = '100%'
block2.style.height = '300px'
block2.style.marginTop = '10px'
block2.style.borderRadius = '15px'

document.querySelector('body').append(block2)

let image = document.createElement('img')

image.src = "../imeges/JS.png"
image.style.width = '270px'
image.style.height = '270px'
image.style.margin = '14px 10px'

document.querySelector('div').append(image)
