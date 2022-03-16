var x = document.getElementById("contain");
var bgr = document.querySelectorAll('.bar');
x.addEventListener("click", myFunction);

function myFunction() {
    var element = document.getElementById("navig");
    element.classList.toggle("open");
    x.classList.toggle("change");
    bgr.forEach(el => {
        el.classList.toggle('brgcolor');
    }); 
}


const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)

    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}
