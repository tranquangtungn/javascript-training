import { Node } from "../lib/Node.js";
import { Label } from "../lib/Label.js"
import { Sprite } from "../lib/Sprite.js";
export class Cover extends Node {
    constructor(index, card) {
        super();
        this.width = 100;
        this.height = 100;
        this.card;
        this._card = "";
        this._index = "";
        if (card) this.card = card;
        if (index) this.index = index;
        this._initSprite();
        this._initTextIndex();

    }
    get card() {
        return this._card;
    }
    set card(card) {
        this._card = card;
        // this.elm.card = this._card;
    }
    get index() {
        return this._index;
    }
    set index(card) {
        this._index = card;
        // this.elm.card = this._index;
    }
    _initTextIndex() {
        let style = { fontSize: "15px", color: "white", fontFamily: "Arial" };
        let text = new Label(this._index, style);
        text.elm.node = this.card;
        text.x = "45px";
        text.y = "40px";
        this.addChild(text);
    }
    _initSprite() {
        let img = new Sprite("./cover.jpg");
        img.elm.node = this.card;
        img.width = 100;
        img.height = 100;
        this.addChild(img);
    }
}