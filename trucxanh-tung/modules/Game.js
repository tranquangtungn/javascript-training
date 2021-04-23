import { Animation } from "../animations/Animations.js";
import { Label } from "../lib/Label.js";
import { Node } from "../lib/Node.js";
import { Sprite } from "../lib/Sprite.js";
import { Card } from "./Card.js";
export class Game extends Node {
    init() {
        this.isAnimating = false;
        this.stepWidthCard = 100;
        this.stepHeightCard = 100;
        this.countClick = 0;
        this.firstCard = null;
        this.secondCard = null;
        this.styleText = { fontSize: "30px", color: "red", fontFamily: "Arial", fontWeight: "bold" };
        this._score = 10000;
        this._initSize();
        this._initBg();
        this._initStart()
    }
    _initStart() {
        let btnStart = new Label("Start", this.styleText);
        btnStart.x = 350;
        btnStart.y = 200;
        this.addChild(btnStart);
        btnStart.on("mousedown", this.onClickStart.bind(this));
    }
    initGame() {
        //  this._initBg();
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
        let sc = new Label("score: " + this.score, this.styleText);
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
        //shuffle
        // for (let i = 0; i < 100; i++) {
        //     var index = Math.floor(Math.random() * listCards.length);
        //     var temp = listCards[0];
        //     listCards[0] = listCards[index];
        //     listCards[index] = temp;
        // }
        //render
        for (let i = 0; i < 20; i++) {
            let card = new Card(20 - i, listCards[i] + "");
            // card.y = 40 + 101 * Math.floor(i / 5);
            // card.x = 130 + 101 * (i % 5);
            card.y = this.height / 2 - card.height / 2;
            card.x = this.width / 2 - card.width / 2;
            Animation.createCard(card, 0.2);
            Animation.moveCard(card, 0.2, 2, this.stepWidthCard, this.stepHeightCard);
            this.addChild(card);
            card.on("mousedown", this.onClickCard.bind(this));
        }
    }
    _initResultGame(text) {
        let result = new Label(text, this.styleText);
        result.x = 300;
        result.y = 200;
        this.addChild(result);
        let btnRestart = new Label("Restart", this.styleText);
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
        for (let i = 0; i < this.children.length; i++) {
            if (this.children[i] === card)
                this.children.splice(i, 1);
        }
    }
    onClickStart(evt) {
        this.removeCard(this.children[1]);
        this.initGame();
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
            game.isAnimating = true;
            Animation.flip(game.firstCard, 1);
        } else if (game.countClick === 2) {
            if (game.firstCard === evt.target.node) {
                game.countClick = 1;
                return;
            } else {
                game.secondCard = evt.target.node;
                Animation.flip(game.secondCard, 1);
                if (game.firstCard.value === game.secondCard.value) {
                    Animation.increaseSize(game.firstCard);
                    Animation.increaseSize(game.secondCard);
                    //game.score += 1000;
                    Animation.changeScore(game, 1000)
                    setTimeout(function () {
                        game.removeCard(game.firstCard);
                        game.removeCard(game.secondCard);
                    }, 2000)
                }
                else {
                    Animation.flipBack(game.firstCard);
                    Animation.flipBack(game.secondCard);
                    //game.score -= 500;
                    Animation.changeScore(game, -500)
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


