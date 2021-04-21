import { Node } from "./Node.js";

export class Label extends Node {
    constructor(text, textStyle) {
        super();
        this._text = "";
        if (text) this.text = text;
        this._textStyle = {};
        if (textStyle) this.textStyle = textStyle;
    }
    set text(value) {
        this._text = value;
        this.elm.innerHTML = this._text;
    }
    set textStyle(value) {
        this._textStyle = value;
        this.elm.style.fontSize = this._textStyle.fontSize;
        this.elm.style.fontFamily = this._textStyle.fontFamily;
        this.elm.style.color = this._textStyle.color;
        this.elm.style.tranform = this._textStyle.tranform;
        this.elm.style.fontWeight = this._textStyle.fontWeight;
    }
}