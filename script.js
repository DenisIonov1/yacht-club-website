let buttonDark = document.querySelector(".theme-button-dark");
let buttonLight = document.querySelector(".theme-button-light");

buttonDark.onclick = function () {
    document.body.classList.add("dark");
    buttonDark.classList.add("active");
    buttonLight.classList.remove("active");
}

buttonLight.onclick = function () {
    document.body.classList.remove("dark");
    buttonLight.classList.add("active");
    buttonDark.classList.remove("active");
}

let buttonSansSerif =  document.querySelector(".font-button-sans-serif");
let buttonSerif = document.querySelector(".font-button-serif");


buttonSansSerif.onclick = function() {
    document.body.classList.remove("serif");
    buttonSansSerif.classList.add("active");
    buttonSerif.classList.remove("active");
}
buttonSerif.onclick = function() {
    document.body.classList.add("serif");
    buttonSerif.classList.add("active");
    buttonSansSerif.classList.remove("active");
}

let buttonGrid = document.querySelector(".card-view-button-grid");
let buttonList = document.querySelector(".card-view-button-list");
let listOfBoats = document.querySelector(".boats-list")
buttonGrid.onclick = function () {
    buttonGrid.classList.add("active");
    buttonList.classList.remove("active");
    listOfBoats.classList.remove("list");
}

buttonList.onclick = function () {
    buttonList.classList.add("active");
    buttonGrid.classList.remove("active");
    listOfBoats.classList.add("list");
}


let activePhoto = document.querySelector(".active-photo");
let previews = document.querySelectorAll(".gallery-column a");

for (let preview of previews) {
  preview.onclick = function (evt) {
    evt.preventDefault();

    activePhoto.src = preview.href;
    let currentActive = document.querySelector(".gallery-column .active-item");
    if (currentActive) {
      currentActive.classList.remove("active-item");
    }
    preview.classList.add("active-item");
  };
}
