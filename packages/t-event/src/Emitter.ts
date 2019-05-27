type EventHandler = (event?: any) => void;

export default class Event {
  private cache = {};

  on(type: string, handler: EventHandler) {
    if (typeof handler === "function") {
      (this.cache[type] = this.cache[type] || []).push(handler);
    } else {
      throw new Error("The callback provided as parameter 2 is not an object.");
    }
  }

  off(type: string, handler: EventHandler) {
    if (!this.cache[type] || !this.cache[type].length) {
      return;
    }
    let index = this.cache[type].indexOf(handler);
    if (index >= 0) {
      this.cache[type].slice(index, 1);
    }
  }

  emit(type: string, options: any) {
    this.cache[type] = this.cache[type] || [];
    this.cache[type].forEach((handler: EventHandler) => handler(options));
  }
}
