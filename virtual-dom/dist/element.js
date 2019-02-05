"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var renderer_1 = require("./renderer");
var Ele = /** @class */ (function () {
    function Ele(tagName, attrs, children) {
        this.el = {
            tagName: tagName,
            attrs: attrs,
            children: children
        };
        this.renderer = new renderer_1.Renderer();
    }
    Ele.ele = function (tagName, attrs, children) {
        return {
            tagName: tagName,
            attrs: attrs,
            children: children
        };
    };
    Ele.prototype.render = function () {
        this.domEle = this.renderer.render(this.el);
        return this;
    };
    Ele.prototype.bindDOM = function (dom) {
        if (!dom)
            throw new Error("Cannot find element");
        this.renderer.bindDOM(dom, this.domEle);
    };
    Ele.prototype.getDOMEle = function () {
        return this.domEle;
    };
    return Ele;
}());
exports.Ele = Ele;
