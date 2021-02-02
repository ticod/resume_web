const techStack = document.getElementById("techStack");
const board = document.getElementById("board");
const smartDoorLock = document.getElementById("smartDoorLock");
const dotmatrixBoard = document.getElementById("dotmatrixBoard");
const weatherAlert = document.getElementById("weatherAlert");
const smartcart = document.getElementById("smartcart");
const simplog = document.getElementById("simplog");

class App {

  constructor() {
    this.moveIdPage(techStack);

    this.moveNewTab(simplog, "https://github.com/ticod/simplog");
    this.moveNewTab(board, "https://github.com/ticod");
    this.moveNewTab(smartDoorLock, "https://github.com/ticod");
    this.moveNewTab(dotmatrixBoard, "https://youtu.be/kcEIQV6JAFI");
    this.moveNewTab(weatherAlert, "https://youtu.be/JjEWuQfeqW4");
    this.moveNewTab(smartcart, "https://github.com/ticod");
  }

  moveIdPage(id) {
    id.addEventListener('click', function (event) {
      location.href = event.target.id + ".html";
    })
  }

  moveNewTab(id, url) {
    id.addEventListener('click', function() {
      window.open(url);
    })
  }

}

window.onload = () => {
  new App();
}
