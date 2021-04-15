var game = document.createElement("div");
document.body.appendChild(game);
game.style.position = "relative";

var text = document.createElement("div");
text.innerHTML = "score: 1000";
text.style.position = "absolute";
text.style.top = "8px";
text.style.left = "16px";

game.appendChild(text);

class card {
    constructor(id, pic) {
        this.id = id,
            this.pic = pic,
            this.cover = "./cover.jpg";
        this.fliped = false;


    }
}

var bg = createImage("./img/trucxanh_bg.jpg", 0, 0);
function createMagic() {
    for (let i = 0; i < 5; i++) {

        for (let j = 0; j < 4; j++) {
            var card01 = new card(5 * i + j, "cover.jpg");
            createImage(card01.pic, 40 + 100 * j, 40 + 100 * i, 100, 100)
        }
    }
    var text = document.createElement("div");
    text.innerHTML = "score: 1000";
    text.style.position = "absolute";
    text.style.top = "8px";
    text.style.left = "16px";

}
createMagic()
//var card01=  createImage("./img/trucxanh1.jpg", 50, 50, 100, 100);

function createImage(src, top, left, width, height) {
    var image = document.createElement("img");
    image.src = src;
    image.style.position = "absolute";
    width && (image.style.width = width + "px");
    height && (image.style.height = height + "px");
    image.style.top = top + "px";
    image.style.left = left + "px";
    image.style.borderStyle = "solid";
    image.style.borderWidth = "2px";
    image.addEventListener("click", function () {

    });
    game.appendChild(image);

    let num = document.createElement("div");
    num.innerHTML = "1000";
    num.style.textAlign = "center";
    num.style.position = "absolute";
    image.appendChild(num);


    return image;
}


