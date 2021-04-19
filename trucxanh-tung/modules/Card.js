import { Node } from "../lib/Node.js"
import { Label } from "../lib/Label.js"

export class Card extends Node {
    constructor(index, value) {
        super();
        this._initCover();
        this.index = index;
        this.value = value;
        this.width = 100;
        this.height = 100;
    }
    _initElement() {
        super._initElement();
        this.elm.style.border = "1px solid black";
    }
    _initCover() {
        let text = new Label("hello");
        this.addChild(text);
    }
}
