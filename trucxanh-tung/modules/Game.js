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
        this.score = 1000;
        this._initSize();
        this._initBg();
        this._initCards();
        this._initScore();
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
        //for asdasdas
        let listCards = [];
        for (let index = 0; index < 10; index++) {
            // let path = "./img/trucxanh" + i + ".jpg";
            listCards.push(index);
            listCards.push(index);
        }
        console.log(listCards);
        // for (let i = 0; i < 100; i++) {
        //     var index = Math.floor(Math.random() * listCards.length);     // returns a random integer from 0 to 9
        //     var temp = listCards[0];
        //     listCards[0] = listCards[index];
        //     listCards[index] = temp;
        // }
        for (let i = 0; i < 20; i++) {
            let card = new Card(i + 1, listCards[i] + ""); // listCard[i] + "", convert 
            card.y = 40 + 101 * Math.floor(i / 5);
            card.x = 130 + 101 * (i % 5);
            //card.active = false;
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
            // compare
            game.secondCard = evt.target.node;

            if (game.firstCard !== game.secondCard) {
                Animation.flip(game.secondCard);
                let card1 = game.firstCard;
                let card2 = game.secondCard;
                if (game.firstCard.value === game.secondCard.value) {
                    setTimeout(function () {
                        Animation.increaseSize(card1);
                        Animation.increaseSize(card2);
                        game.countClick = 0;
                    }, 1000);
                }
                else {
                    setTimeout(function () {
                        Animation.flipBack(card1);
                        Animation.flipBack(card2);
                        game.countClick = 0;
                    }, 1000);
                }
            }
            else {
                game.countClick = 1;
            }
        }
        let sele_card = evt.target;
        console.log(sele_card.node);
    }

}
