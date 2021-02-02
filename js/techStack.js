const focusItem = document.getElementById("focusItem");
const box = document.getElementById("box");
const items = box.querySelectorAll(".item");
const detailPreEffect = document.getElementById("detailPreEffect");

const reg = /\d/;

class App {
  constructor() {
    // 모든 box 내 item 클래스 mouseover 이벤트 추가
    for (var i in items) {
      if (reg.test(i) && !isNaN(i)) {
        items[i].addEventListener('mouseover', function() {
          for (var j in items) {
            if (reg.test(j) && !isNaN(j)) {
              items[j].classList.remove("focus-item");
            }
          }
          this.classList.add("focus-item")
          focusItem.innerHTML = this.querySelector(".detail").innerHTML;
        });
      }
    }

  }
}

window.onload = () => {
  new App();
}