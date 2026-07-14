var animatedEls = document.querySelectorAll('.animate');

var observer = new IntersectionObserver(function (entries) {
  for (var i = 0; i < entries.length; i++) {
    if (entries[i].isIntersecting) {
      entries[i].target.classList.add('in-view');
    }
  }
}, { threshold: 0.01 });

for (var j = 0; j < animatedEls.length; j++) {
  observer.observe(animatedEls[j]);
}


let num=0
let target=10 
let counter=document.getElementById('count');
 let interval=setInterval(Dav,1000);

 function Dav(){
  num++;
  counter.innerHTML=num + "+";
  if(num>=target){
clearInterval(interval)
  }
 }


 let numm=0
let targett=10 
let counterr=document.getElementById('countt');
 let intervals=setInterval(Davv,1000);

 function Davv(){
  numm++;
  counterr.innerHTML=numm + "y" + "+";
  if(numm>=2){
clearInterval(intervals)
  }
 }
