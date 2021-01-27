class App {
  constructor() {
    const background = document.getElementById("background");
    const body = document.body;

    const backgroundChangeWidth = function(ms) {
      new Promise((resolve) => {
        setTimeout(() => {
          background.style.width = "50%";
        }, ms);
      });
    }

    body.addEventListener('click', function() {
      backgroundChangeWidth(500).then(function() {
        location.href = 'index.html';
      });
    });
  }
}

window.onload = () => {
  new App();
}