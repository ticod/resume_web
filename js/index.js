class App {
  constructor() {
    const about = document.getElementById("about");
    const contact = document.getElementById("contact");

    about.addEventListener('click', function() {
      location.href = 'about.html';
    });
    
    contact.addEventListener('click', function() {
      location.href = 'contact.html';
    });
  }
}

window.onload = () => {
  new App();
}