"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Renderer = /** @class */ (function () {
    function Renderer() {
    }
    Renderer.prototype.render = function (originEle) {
        var tagName = originEle.tagName, attrs = originEle.attrs, children = originEle.children;
        var el = document.createElement(tagName);
        for (var _i = 0, _a = Object.keys(attrs); _i < _a.length; _i++) {
            var attrName = _a[_i];
            el.setAttribute(attrName, attrs[attrName]);
        }
        for (var _b = 0, children_1 = children; _b < children_1.length; _b++) {
            var child = children_1[_b];
            var childEle = void 0;
            if (typeof child === "string") {
                childEle = document.createTextNode(child);
            }
            else {
                childEle = this.render(child);
            }
            el.appendChild(childEle);
        }
        return el;
    };
    Renderer.prototype.bindDOM = function (dom, originDOMELe) {
        if (!originDOMELe) {
            throw new Error("originDOMEle is not Define!");
        }
        dom.innerHTML = "";
        dom.appendChild(originDOMELe);
    };
    return Renderer;
}());
exports.Renderer = Renderer;
