
// var game = document.createElement("div");
// document.body.appendChild(game);
// game.style.position = "relative";
// init();
// var text = document.createElement("div");
// text.innerHTML = "score: " + score;
// text.id = "score";
// text.style.color = "red";
// text.style.fontSize ="40px";
// text.style.position = "absolute";
// text.style.top = "40px";
// text.style.left = "40px";
// game.appendChild(text);

// function init() {
//     score = 10000;
//     var bg = createBg("./img/trucxanh_bg.jpg", 0, 0);
//     createMagic();


// }
// function createBg(src, top, left, width, height) {


//     var card = document.createElement("div");

//     card.style.position = "absolute";
//     width && (card.style.width = width + "px");
//     height && (card.style.height = height + "px");
//     card.style.top = top + "px";
//     card.style.left = left + "px";
//     card.style.borderStyle = "solid";
//     card.style.borderWidth = "2px";


//     game.appendChild(card);

//     //img
//     var image = document.createElement("img");
//     image.style.position = "absolute";
//     image.src = src;


//     width && (image.style.width = width + "px");
//     height && (image.style.height = height + "px");
//     //card.style.transitionDelay = "1s";
//     card.addEventListener("click", function () {
//         flipe(image);

//     });
//     card.appendChild(image);
//     //cover





//     return image;

// }
// function createMagic() {
//     arrImg = ["./img/trucxanh0.jpg",
//         "./img/trucxanh1.jpg",
//         "./img/trucxanh2.jpg",
//         "./img/trucxanh3.jpg",
//         "./img/trucxanh4.jpg",
//         "./img/trucxanh5.jpg",
//         "./img/trucxanh6.jpg",
//         "./img/trucxanh7.jpg",
//         "./img/trucxanh8.jpg",
//         "./img/trucxanh9.jpg",
//         "./img/trucxanh0.jpg",
//         "./img/trucxanh1.jpg",
//         "./img/trucxanh2.jpg",
//         "./img/trucxanh3.jpg",
//         "./img/trucxanh4.jpg",
//         "./img/trucxanh5.jpg",
//         "./img/trucxanh6.jpg",
//         "./img/trucxanh7.jpg",
//         "./img/trucxanh8.jpg",
//         "./img/trucxanh9.jpg",
//     ];
//     shuffleMagic(arrImg, 100);
//     for (let i = 0; i < 4; i++) {
//         for (let j = 0; j < 5; j++) {
//             //var card01 = new card(5 * i + j, c");
//             createImage(5 * i + j, "./cover.jpg", 40 + 100 * i, 260 + 100 * j, 100, 100)
//         }
//     }
// }
// function shuffleMagic(arr, num) {
//     for (let i = 0; i < num; i++) {
//         index = Math.floor(Math.random() * arr.length);     // returns a random integer from 0 to 9
//         var temp = arr[0];
//         arr[0] = arr[index];
//         arr[index] = temp;
//     }
// }
// function createImage(id, src, top, left, width, height) {
//     var card = document.createElement("div");
//     card.className = "card"
//     card.id = id;
//     card.style.position = "absolute";
//     width && (card.style.width = width + "px");
//     height && (card.style.height = height + "px");
//     card.style.top = top + "px";
//     card.style.left = left + "px";
//     card.style.borderStyle = "solid";
//     card.style.borderWidth = "2px";

//     game.appendChild(card);

//     //img
//     var image = document.createElement("img");
//     image.style.position = "absolute";
//     image.src = src;
//     image.id = id;

//     width && (image.style.width = width + "px");
//     height && (image.style.height = height + "px");
//     //card.style.transitionDelay = "1s";
//     card.addEventListener("click", function () {
//         flipe(image);
//     });
//     card.appendChild(image);
//     let num = document.createElement("div");
//     num.innerHTML = id + 1;
//     num.style.position = "absolute";
//     num.style.top = "50%";
//     num.style.left = "50%";
//     num.style.transform = "translate(-50%, -50%)";
//     num.style.color = "white";
//     card.appendChild(num);


//     return image;
// }
// var srcCard1 = "";
// var srcCard2 = "";
// var card01;
// var card02;
// function flipe(image) {

//     if(text.innerHTML == "Game Over")
//         return;
//     if (srcCard1 === "" ) {

//         card01 = image;
//         image.src = arrImg[image.id];
//         srcCard1 = image.src;
//         console.log(srcCard1);
//         console.log(srcCard2);
//         console.log(card01.id)

//     }
//     else if (srcCard2 === "") {

//         if (image.id === card01.id) {
//             console.log("same id");
//             return;
//         }
//         card02 = image;
//         image.src = arrImg[image.id];
//         srcCard2 = image.src;
//         console.log(srcCard1);
//         console.log(srcCard2);
//         if (srcCard1 === srcCard2) {
//             console.log("true");
//             srcCard1 = "";
//             srcCard2 = "";
//             score += 1000;
//         }
//         else {
//             score -= 500;
//             setTimeout(function () {
//                 console.log("false");
//                 srcCard1 = "";
//                 srcCard2 = "";
//                 card01.src = "./cover.jpg";
//                 card02.src = "./cover.jpg";
//             }, 1000);
//         }
//         score === 0? text.innerHTML = "Game Over" : text.innerHTML = "Score: " + score;

//     }
// }

import { Game } from "./modules/Game.js";

var game = new Game();
document.body.appendChild(game.elm);

game.init();

