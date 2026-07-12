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
