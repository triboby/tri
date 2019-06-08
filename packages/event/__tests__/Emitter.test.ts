import { Emitter } from "../src/Emitter";

describe("Event#", () => {
  let event: Emitter;

  beforeEach(() => {
    event = new Emitter();
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

      event.on("foo", (one: any) => {
        expect(one).toEqual(options);
      });

      event.emit("foo", options);
    });

    it("should NOT ignore case", () => {
      let onFoo = jest.fn(),
        onFOO = jest.fn();

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
        event.emit("click", () => {});
      };
      expect(run).not.toThrow();
    });
  });
});
