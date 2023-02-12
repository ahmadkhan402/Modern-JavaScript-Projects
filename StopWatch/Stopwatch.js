var ms =0 , s=0,m=0
var counter;
var Time_interval = document.querySelector('.Time_interval')
var Btn_start = document.querySelector('.Start_button')
var btn_Stop =  document.querySelector('.Stop_button')
var Btn_Reset = document.querySelector('.Reset_button')
function Content(){
  Time_interval.textContent = m + ":" + s + ":" + ms
  return;
}
Btn_start.addEventListener('click' , function(){
  if(!counter){
  counter = setInterval(run_timer, 10)
  }
  function run_timer(){
    Content();
    ms++;
    if(ms==100){
      ms=0;
      s++
    }
    if(s==60){
      s=0;
      m++
    }
  }
})
/*Stop Code*/
btn_Stop.addEventListener('click' , function(){
  clearInterval(counter);
  Content();
  counter = false;
})

/*Reset*/
Btn_Reset.addEventListener('click', function(){
  clearInterval(counter)
  m = 0, s = 0 , ms = 0
  Content();
  
})