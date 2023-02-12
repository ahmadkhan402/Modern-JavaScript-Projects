var querry_slector_class = document.querySelector('.class');
var querry_slector_button = document.querySelector('.Button_Class')
querry_slector_button.addEventListener('click', function(){
    querry_slector_class.textContent='Its working'

})
var querry_slector_class_name = document.querySelector('#Name');
var querry_slector_button_name = document.querySelector('.Button_Name')
querry_slector_button_name.addEventListener('click', function(){
    querry_slector_class_name.textContent='Its working'

})

var id_slector_class_name = document.getElementById('id')
var id_slector_button_id = document.querySelector('.Button_id')
id_slector_button_id.addEventListener('click', function(){
    id_slector_class_name.textContent='Its working'

})