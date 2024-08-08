var elementos = document.querySelectorAll('body :not(.header1)');

for (var i = 0; i < elementos.length; i++) {
  elementos[i].classList.add('elemento');
}

var observer = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
    }
  });
});

elementos.forEach(function(elemento) {
  observer.observe(elemento);
  var elementos = document.getElementsByTagName('div');

for (var i = 0; i < elementos.length; i++) {
  elementos[i].classList.add('elemento');
}
});



const menuIcon = document.getElementById('menuIcon');
        const navbar = document.getElementById('navbar');
        
        menuIcon.addEventListener('click', function() {
            navbar.classList.toggle('open');
        });

         
        
        
      