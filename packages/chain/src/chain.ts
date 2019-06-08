import { ChainItem } from "./ChainItem";

export class Chain {
  private _chain: Array<ChainItem> = [];

  constructor() {}

  use(item: ChainItem) {
    if (item) {
      this._chain.push(item);
    }
  }

  /**
   *
   *
   *
   */
  // compose() {
  //     this._chain.reduce((pre, cur)=> (...args) => pre(cur(...args)));
  // }

  // exec() {

  // }

  // async exec(options: any) {
  //     let i = 0;
  //     let opts = {...options};

  //     let next = async() => {
  //         if(i == this._chain.length){
  //             return Promise.resolve(opts)
  //         }

  //         let it = this._chain[i++];
  //         return await it(opts, next);
  //     }

  //     return await next();
  // }
}
