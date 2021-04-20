import { Animation } from "../animations/Animations.js";
import { Label } from "../lib/Label.js";
import { Node } from "../lib/Node.js";
import { Sprite } from "../lib/Sprite.js";
import { Card } from "./Card.js";
export class Game extends Node {
    init() {
        this.countClick = 0;
        this.firstCard = null;
        this.secondCard = null;
        this._score = 1000;
        this._initSize();
        this._initBg();
        this._initCards();
        this._initScore();
    }
    get score() {
        return this._score;
    }
    set score(value) {
        this._score = value;
        this.children[21].text = "score: " + this._score;
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
    _initScore() {
        let style = { fontSize: "30px", color: "red", fontFamily: "Arial" };
        let sc = new Label("score: " + this.score, style);
        sc.x = "30px";
        sc.y = "100px";
        this.addChild(sc);
    }
    _initCards() {
        let listCards = [];
        for (let index = 0; index < 10; index++) {
            listCards.push(index);
            listCards.push(index);
        }
        for (let i = 0; i < 100; i++) {
            var index = Math.floor(Math.random() * listCards.length);
            var temp = listCards[0];
            listCards[0] = listCards[index];
            listCards[index] = temp;
        }
        for (let i = 0; i < 20; i++) {
            let card = new Card(i + 1, listCards[i] + "");
            card.y = 40 + 101 * Math.floor(i / 5);
            card.x = 130 + 101 * (i % 5);
            this.addChild(card);
            card.on("mousedown", this.onClickCard.bind(this));
        }
    }
    onClickCard(evt) {
        let game = this;
        game.countClick++;
        if (game.countClick === 1) {
            game.firstCard = evt.target.node;
            Animation.flip(game.firstCard);
        } else if (game.countClick === 2) {
            game.secondCard = evt.target.node;
            if (game.firstCard === game.secondCard) {
                game.countClick = 1;
                return;
            } else {
                Animation.flip(game.secondCard);
                if (game.firstCard.value === game.secondCard.value) {
                    Animation.increaseSize(game.firstCard);
                    Animation.increaseSize(game.secondCard);
                    game.score += 100;
                }
                else {
                    Animation.flipBack(game.firstCard);
                    Animation.flipBack(game.secondCard);
                    game.score -= 100;
                }
                setTimeout(function () {
                    game.countClick = 0;
                }, 2500)
            }
        }
    }
}


