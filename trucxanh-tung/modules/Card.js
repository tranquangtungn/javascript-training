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
    get value() {
        return this._value;
    }
    _initSize() {
        this.width = 100;
        this.height = 100;
        this.elm.style.border = "2px solid black";
    }
    _initTextIndex() {
        let style = { fontSize: "15px", color: "white", fontFamily: "Arial" };
        let text = new Label(this._index, style);
        text.elm.node = this;
        this.textIndex = text;
        text.x = 45;
        text.y = 40;
        this.addChild(text);
    }
    _initSprite() {
        let img = new Sprite("./img/cover.jpg");
        img.elm.node = this;
        img.width = 100;
        img.height = 100;
        this.addChild(img)
    }

}
