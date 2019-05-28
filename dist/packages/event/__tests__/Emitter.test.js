"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Emitter_1 = require("../src/Emitter");
describe("Event#", () => {
    let event;
    beforeEach(() => {
        event = new Emitter_1.default();
    });
    describe("on()", () => {
        it("should be a function", () => {
            expect(event).toHaveProperty("on");
        });
    });
    describe("off()", () => {
        it("should be a function", () => {
            expect(event).toHaveProperty("off");
        });
    });
    describe("emit()", () => {
        it("should be a function", () => {
            expect(event).toHaveProperty("emit");
        });
        it("should invoke handler for type", () => {
            let options = { a: "b" };
            event.on("foo", (one) => {
                expect(one).toEqual(options);
            });
            event.emit("foo", options);
        });
        it("should NOT ignore case", () => {
            let onFoo = jest.fn(), onFOO = jest.fn();
            event.on("Foo", onFoo);
            event.on("FOO", onFOO);
            event.emit("Foo", "Foo arg");
            event.emit("FOO", "FOO arg");
            expect(onFoo).toHaveBeenCalledTimes(1);
            expect(onFoo).toHaveBeenCalledWith("Foo arg");
            expect(onFOO).toHaveBeenCalledTimes(1);
            expect(onFOO).toHaveBeenCalledWith("FOO arg");
        });
        it("should do nothing if no event added", () => {
            let run = () => {
                event.emit("click", () => { });
            };
            expect(run).not.toThrow();
        });
    });
});
//# sourceMappingURL=Emitter.test.js.map