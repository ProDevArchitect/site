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






        // local reviews data
const reviews = [
  {
    id: 1,
    name: 'susan smith',
    img: 'https://images.unsplash.com/photo-1723053468832-c1630a8f58fb?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    text: "1Lorem ipsum dolor sit amet consectetur adipisicing elit. Ius tasperiores debitis incidunt, eiearum ipsam cupiditate libero?Iste, doloremque nihil?",
  },
  {
    id: 2,
    name: 'anna johnson',
    img: 'https://images.unsplash.com/photo-1723053665353-88079df85f41?q=80&w=1365&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    text: '2Lorem ipsum dolor sit amet consectetur adipisicing elit. Ius tasperiores debitis incidunt, eiearum ipsam cupiditate libero?Iste, doloremque nihil?',
  },
  {
    id: 3,
    name: 'Emily Johnson',
    img: 'https://images.unsplash.com/photo-1723057072100-9d5716396998?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    text: '3Lorem ipsum dolor sit amet consectetur adipisicing elit. Ius tasperiores debitis incidunt, eiearum ipsam cupiditate libero?Iste, doloremque nihil?',
  },
  {
    id: 4,
    name: 'Olivia Smith',
    img: 'https://images.unsplash.com/photo-1723059989541-da1ec05df09c?q=80&w=1370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    text: '4Lorem ipsum dolor sit amet consectetur adipisicing elit. Ius tasperiores debitis incidunt, eiearum ipsam cupiditate libero?Iste, doloremque nihil?'
  },
];
// select items
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener('DOMContentLoaded', function () {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  info.textContent = item.text;
});

// show person based on item
function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  info.textContent = item.text;
}
// show next person
nextBtn.addEventListener('click', function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});
// show prev person
prevBtn.addEventListener('click', function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});
// show random person
randomBtn.addEventListener('click', function () {
  console.log('hello');

  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson(currentItem);
});

         
        
        
      