import { Node } from "../lib/Node.js";
import { Label } from "../lib/Label.js"
import { Sprite } from "../lib/Sprite.js";

export class Card extends Node {
    constructor(index, value) {
        super();
        this._index = index || "";
        this._value = value || "";
        this._initSize()
        this._initSprite();
        this._initTextIndex();
    }

    get index() {
        return this._index;
    }
    get value() {
        return this._value;
    }
    _initSize() {
        this.opacity = 0;
        this.pointerEvents = false;
        this.width = 90;
        this.height = 90;
        this.elm.style.border = "2px solid black";
    }
    _initTextIndex() {
        let style = { fontSize: "20px", color: "white", fontFamily: "Arial", fontWeight: "bold" };
        let text = new Label(this._index, style);
        text.elm.node = this;
        this.textIndex = text;
        text.x = this.height / 2 - 5 * (1 + Math.floor(this.index / 10));
        text.y = this.width / 2 - 10;
        this.addChild(text);
    }
    _initSprite() {
        let img = new Sprite("./img/cover.jpg");
        img.elm.node = this;
        img.width = this.height;
        img.height = this.height;
        this.addChild(img)
    }

}
