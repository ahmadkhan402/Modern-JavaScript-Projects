const form = document.querySelector("form")
const input = document.querySelector("input")
const list = document.querySelector("ul")
form.addEventListener("submit" , function(event){
    event.preventDefault();
    input.value = ""
})

