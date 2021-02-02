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

    // TODO: 프로젝트 별 괜찮은 사진 구하면 아래 소스로 변경 예정
    // this.hoverChangeImage(techStack, "notebook.jpg");
    // this.hoverChangeImage(simplog, "simplog.PNG");
    // this.hoverChangeImage(board, "phpboard.png");
    // this.hoverChangeImage(smartDoorLock, "doorlock.PNG");
    // this.hoverChangeImage(dotmatrixBoard, "dotboard.jpg");
    // this.hoverChangeImage(weatherAlert, "weatheralert.jpg");
    // this.hoverChangeImage(smartcart, "smartcart2.jpg");
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

  // hoverChangeImage(id, imageUrl) {
  //   id.addEventListener('mouseover', function() {
  //     document.body.style.backgroundImage = "url(../imgs/" + imageUrl;
  //   })
  // }

}

window.onload = () => {
  new App();
}
