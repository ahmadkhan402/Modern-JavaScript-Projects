const form = document.querySelector("form")
const input = document.querySelector("input")
const list = document.querySelector("ul")
form.addEventListener("submit" , function(event){
    event.preventDefault();
    Todo();
    input.value = ""
})
function Todo(){
    const value = input.value;
    if(value==="")  {
        alert("Type Something")
    }
    else {
const newlist = document.createElement("li")
newlist.textContent = value;
list.append(newlist)

const Dltbutton = document.createElement('BUTTON');
Dltbutton.textContent =  " Delete";
newlist.append("",Dltbutton)


    }
}
list.addEventListener("click", function(event){
    if(event.target.nodeName === "BUTTON"){
       event.target.closest('li').remove();
       
    }
   
   })



