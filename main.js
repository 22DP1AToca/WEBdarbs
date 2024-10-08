//-----Dark mode-------
var toggleButton = document.getElementsByClassName("dark-mode-toggle");

toggleButton[0].onclick = function(){
  document.body.classList.toggle('dark-mode');
};

toggleButton[1].onclick = function(){
    document.body.classList.toggle('dark-mode');
};

//----Mobile nav--------
var mobileNav = document.querySelector(".mobile-nav");
var navToggleLabel = document.querySelector('.hamburger');
var navLinks = mobileNav.querySelector('ul');

navToggleLabel.onclick = function(){
    navLinks.style.display = navLinks.style.display === 'block' ? 'none' : 'block';
}


// ----Model------------
var modal = document.getElementById("modal1");
var modal2 = document.getElementById("modal2");
var modal3 = document.getElementById("modal3");

 // Get the button that opens the modal
var btn = document.getElementById("learn_more1");
var btn2 = document.getElementById("learn_more2");
var btn3 = document.getElementById("learn_more3");


// When the user clicks on the button, open the modal
btn.onclick = function(){
    modal.style.display = "block";
}

btn2.onclick = function(){
    modal2.style.display = "block";
}

btn3.onclick = function(){
    modal3.style.display = "block";
}

function close_model(){
    modal.style.display = "none";
    modal2.style.display = "none";
    modal3.style.display = "none";
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }

    if (event.target == modal2) {
        modal2.style.display = "none";
    }

    if (event.target == modal3) {
        modal3.style.display = "none";
    }
}
