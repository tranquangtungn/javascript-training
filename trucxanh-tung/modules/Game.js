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
        this._score = 100;
        this._initSize();
        this._initBg();
        this._initScore();
        this._initCards();

    }
    get score() {
        return this._score;
    }
    set score(value) {
        this._score = value;
        this.children[1].text = "score: " + this._score;
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
        let style = { fontSize: "30px", color: "red", fontFamily: "Arial", fontWeight: "bold" };
        let sc = new Label("score: " + this.score, style);
        sc.x = 10;
        sc.y = 5;
        this.addChild(sc);
    }
    _initCards() {
        //create
        let listCards = [];
        for (let index = 0; index < 10; index++) {
            listCards.push(index);
            listCards.push(index);
        }
        //random
        // for (let i = 0; i < 100; i++) {
        //     var index = Math.floor(Math.random() * listCards.length);
        //     var temp = listCards[0];
        //     listCards[0] = listCards[index];
        //     listCards[index] = temp;
        // }
        //render
        for (let i = 0; i < 20; i++) {
            let card = new Card(i + 1, listCards[i] + "");
            card.y = 40 + 101 * Math.floor(i / 5);
            card.x = 130 + 101 * (i % 5);
            this.addChild(card);
            card.on("mousedown", this.onClickCard.bind(this));
        }
    }
    _initResultGame(text) {
        let style = { fontSize: "40px", color: "red", fontFamily: "Arial", fontWeight: "bold" };
        let result = new Label(text, style);
        result.x = 300;
        result.y = 200;
        this.addChild(result);

        let btnRestart = new Label("Restart", style);
        btnRestart.x = 600;
        btnRestart.y = 400;
        this.addChild(btnRestart);
        btnRestart.on("mousedown", this.onClickReStart.bind(this));
    }
    removeAllCards(children) {
        while (children.length !== 2) {
            this.removeCard(children[2]);
        }
    }
    removeCard(card) {
        this.elm.removeChild(card.elm);
        for (let i = 2; i < this.children.length; i++) {
            if (this.children[i] === card)
                this.children.splice(i, 1);
        }
    }
    onClickReStart(evt) {
        location.reload();
        //this.init();
    }
    onClickCard(evt) {
        let game = this;
        game.countClick++;
        if (game.countClick === 1) {
            game.firstCard = evt.target.node;
            Animation.flip(game.firstCard);
        } else if (game.countClick === 2) {
            if (game.firstCard === evt.target.node) {
                game.countClick = 1;
                return;
            } else {
                game.secondCard = evt.target.node;
                Animation.flip(game.secondCard);
                if (game.firstCard.value === game.secondCard.value) {
                    Animation.increaseSize(game.firstCard);
                    Animation.increaseSize(game.secondCard);
                    game.score += 100;
                    setTimeout(function () {
                        game.removeCard(game.firstCard);
                        game.removeCard(game.secondCard);
                    }, 2000)
                    console.log(game);
                }
                else {
                    Animation.flipBack(game.firstCard);
                    Animation.flipBack(game.secondCard);
                    game.score -= 100;
                }
                setTimeout(function () {
                    game.countClick = 0;
                    if (game.score === 0) {
                        game.removeAllCards(game.children);
                        game._initResultGame("You lose!");
                    }
                    else if (game.children.length === 2) { //[background,score]
                        game._initResultGame("You win!");
                    }
                }, 2500)
            }
        }
    }
}


