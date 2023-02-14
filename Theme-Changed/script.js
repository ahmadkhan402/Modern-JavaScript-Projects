const bgColor = ["green" , "yellow" , "red" , "black", "purple", "orange"]


const btnChange = document.querySelector('.Change')
const txtcolor = document.querySelector('.color')

btnChange.addEventListener('click', function(){
    var RandomColor = bgColor[Math.floor(Math.random()*6)]
    txtcolor.textContent = RandomColor
    document.body.style.background = RandomColor
    txtcolor.style.color = RandomColor
})


