import { Node } from "../lib/Node.js";
import { Sprite } from "../lib/Sprite.js";
import { Card } from "./Card.js";
export class Game extends Node {

    init() {
        this._initSize();
        this._initBg();
        this._initCards();
        this.countClick = 0;
        this.firstCard = null;
        this.secondCard = null;
    }

    _initSize() {
        this.width = 800;
        this.height = 480;
        this.elm.style.border = "1px solid black";
    }

    _initBg() {
        let bg = new Sprite("./img/trucxanh_bg.jpg");
        this.addChild(bg);
    }

    _initCards() {
        //for asdasdas

        for (let i = 0; i < 20; i++) {
            let card = new Card(i, i % 10);
            card.y = 40 + 101 * Math.floor(i / 5);
            card.x = 260 + 101 * (i % 5);
            this.addChild(card);
            card.on("mousedown", this.onClickCard.bind(this));
        }

    }

    onClickCard(evt) {
        this.countClick++;
        if (this.countClick === 1) {

        } else if (this.countClick === 2) {
            // compare
        }
        let card = evt.target.node;
        console.log(card.index, card.value);
    }

}