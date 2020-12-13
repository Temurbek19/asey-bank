var burgerButton = document.querySelector('#burger-button');
var overly = document.querySelector('#overly');
var navbar = document.querySelector('#header_navbar');

burgerButton.addEventListener('click', function(e) {

    e.preventDefault(); 

    this.classList.toggle('crossed');

    overly.classList.toggle('overlyed');

    navbar.classList.toggle('nav');

});
