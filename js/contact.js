class App {
  constructor() {
    const body = document.body;

    console.log(body);

    body.addEventListener('click', function() {
      location.href = 'index.html';
    });
  }
}

window.onload = () => {
  new App();
}