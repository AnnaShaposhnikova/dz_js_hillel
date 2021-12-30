//при помощи канваса нужно воссоздать MS Paint. Весь функционал нам не нужен.

//Палитра с выбором цветов - 5 штук на ваш выбор
//Есть поле, в котором мы можем рисовать
//Рисование начинается когда пользователь зажимает левую кнопку мыши и водит ей по нашему полю, и заканчивается, когда отжимает её.
//Доп заднание три кнопки с выбором ширины рисуемой линии.
// Доп-доп задание, сделать Ластик. Ластик работает по тому же принципу, что и рисование только стирает то, что там уже есть

const canvas = document.querySelector("#canvas");
const context = canvas.getContext("2d");
const clean = document.querySelector("#clean");
const size = document.querySelector("#controlSize");
const colors = document.querySelector("#colors");
const yellow = document.querySelector("#yellow");
const green = document.querySelector("#green");
const red = document.querySelector("#red");
const blue = document.querySelector("#blue");
const black = document.querySelector("#black");
const rubber = document.querySelector("#rubber");

// переменные для рисования
context.lineCap = "round";
context.lineWidth = 5;
generatePalette();

clean.addEventListener("click", cleanCanvas);
canvas.addEventListener("mousemove", onMouseMove);
colors.addEventListener("click", onColorClick);

size.addEventListener("change", sizeChange);
rubber.addEventListener("click", useRubber);

function sizeChange() {
    context.lineWidth = this.value;
    document.querySelector("#showSize").innerHTML = this.value;
}

function generatePalette() {
    yellow.style.backgroundColor = "yellow";
    red.style.backgroundColor = "red";
    blue.style.backgroundColor = "blue";
    green.style.backgroundColor = "green";
    black.style.backgroundColor = "black";
}

function cleanCanvas() {
    context.clearRect(0, 0, canvas.width, canvas.height);
}

function onColorClick(e) {
    console.log(e.target.style.backgroundColor);
    context.strokeStyle = e.target.style.backgroundColor;
}

function onMouseMove(e) {
    const x = e.offsetX;
    const y = e.offsetY;
    const dx = e.movementX;
    const dy = e.movementY;

    if (e.buttons > 0) {
        context.beginPath();
        context.moveTo(x, y);
        context.lineTo(x - dx, y - dy);
        context.stroke();
        context.closePath();
    }
}

function useRubber(e) {
    onMouseMove(e);
    context.globalCompositeOperation = "destination-out";
    context.lineWidth = 30;
}
