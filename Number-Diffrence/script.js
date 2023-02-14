var fNum = window.prompt("Enter the first Number : ")
document.querySelector('.first-Number').textContent = fNum

var SecNum = window.prompt("Enter the Second Number : ")
document.querySelector('.Second-Number').textContent = SecNum

var BtnCalc = document.querySelector('.calc');
BtnCalc.addEventListener('click', function(){
    var i;
    var totalResult = 0
for(i=0;i<(fNum-SecNum);i++){
   totalResult++;
    document.querySelector('.result').textContent = totalResult
}
})
