// Ini Javascript

// Auto-Slide gambar bergerak
var myIndex = 0;
carousel();

function carousel() {
  var slides = document.getElementsByClassName("mySlide");
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > slides.length) {
    myIndex = 1;
  }
  slides[myIndex - 1].style.display = "block";  
  setTimeout(carousel, 2000);
}

// Menu Toggle
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Input Data
function sendMessage() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    
    if (name === "" || email === "" || message === "") {
      alert("Semua kolom harus diisi!");
      return;
    }
    
    document.getElementById("output").innerHTML = 
      `<strong>Nama:</strong> ${name} <br>
       <strong>Email:</strong> ${email} <br>
       <strong>Pesan:</strong> ${message}`;
  }