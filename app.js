const pause = document.getElementById('pause');
const reset = document.getElementById('reset');
const start = document.getElementById('start');
const clock = document.getElementById('clock');
const setting = document.getElementById('setting');
const scrol = document.getElementsByClassName('slidecontainer')[0];
const close = document.getElementById('close');
const change = document.getElementById('change');
const mi = document.getElementById('mi');
const se = document.getElementById('sec');

let min , hr , sec ;
let p = true ;
let k="0"+0 , l;
min = 00;
hr = 25;
l = "0"+0;
k = ("0"+min).slice(-2);
l = ("0"+hr).slice(-2);
clock.innerHTML = l +':'+ k;
setInterval(() => {
   if(!p){
      if(min==0){
         hr--;
         min = 60;
      }
      min--;
      if(k=="00"&&l=="00"){
         min = 00 ;
         hr = 25 ;
         p = true ;
      }
      k = ("0"+min).slice(-2);
      l = ("0"+hr).slice(-2);
      clock.innerHTML = l +':'+ k;
   }
},1000);

start.addEventListener('click',(e)=>{
   e.preventDefault();
   p = false ;
})


pause.addEventListener('click',(e)=>{
   e.preventDefault();
   p = true ;
})

reset.addEventListener('click',(e)=>{
   e.preventDefault();
   min = 00 ;
   hr = 25 ;
   p = true ;
   k = ("0"+min).slice(-2);
   l = ("0"+hr).slice(-2);
   clock.innerHTML = l +':'+ k;
})


setting.addEventListener('click',()=>{
   scrol.style.display = "block";

})

change.addEventListener('click',()=>{
   min = se.value ;
   hr = mi.value ;
   p = true ;
   k = ("0"+min).slice(-2);
   l = ("0"+hr).slice(-2);
   clock.innerHTML = l +':'+ k;
   scrol.style.display = "none";
})

close.addEventListener('click',()=>{
   scrol.style.display = "none";
})