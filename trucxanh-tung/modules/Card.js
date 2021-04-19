import { Node } from "../lib/Node.js";
import { Label } from "../lib/Label.js"
import { Sprite } from "../lib/Sprite.js";
import { Cover } from "../modules/Cover.js";

export class Card extends Node {
    constructor(index, value) {
        super();
        this._index = "";
        this._value = "";
        if (index) this.index = index;
        if (value) this.value = value;
        this.width = 100;
        this.height = 100;
        this._initSprite();
        this._initCovers();
        // this._initTextIndex();


    }
    get index() {
        return this._index;
    }
    set index(value) {
        this._index = value;
        // this.elm.index = this._value;
    }
    get value() {
        return this._value;
    }
    set value(value) {
        this._value = value;
        // this.elm.value = this._value;
    }
    _initTextIndex() {
        let style = { fontSize: "15px", color: "white", fontFamily: "Arial" };
        let text = new Label(this._index, style);
        text.elm.node = this;
        this.textIndex = text;
        text.x = "45px";
        text.y = "40px";
        this.addChild(text);
    }
    _initSprite() {
        let img = new Sprite("./img/trucxanh" + this._value + ".jpg");
        img.elm.node = this;
        img.width = 100;
        img.height = 100;
        this.addChild(img)
    }

    _initCovers() {
        let cover = new Cover(this._index);
        cover.width = 100;
        cover.height = 100;
        cover.card = this;
        this.cover = cover;
        this.addChild(cover);
    }
    _setImage() {

    }
}
