"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Emitter {
    constructor() {
        this.cache = {};
    }
    on(type, handler) {
        if (typeof handler === "function") {
            (this.cache[type] = this.cache[type] || []).push(handler);
        }
        else {
            throw new Error("The callback provided as parameter 2 is not an object.");
        }
    }
    off(type, handler) {
        if (!this.cache[type] || !this.cache[type].length) {
            return;
        }
        let index = this.cache[type].indexOf(handler);
        if (index >= 0) {
            this.cache[type].slice(index, 1);
        }
    }
    emit(type, options) {
        this.cache[type] = this.cache[type] || [];
        this.cache[type].forEach((handler) => handler(options));
    }
}
exports.default = Emitter;
//# sourceMappingURL=Emitter.js.map