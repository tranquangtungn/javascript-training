import { Node } from "./Node.js";
export class Label extends Node {

    constructor(text) {
        super();
        this._text = "";
        if (text) this.text = text;
    }


    get text() {
        return this._text;
    }
    set text(value) {
        this._text = value;
        this.elm.innerHTML = this._text;
    }

    _initElement() {
        this.elm = document.createElement("div");
        this.elm.style.position = "absolute";
    }
}