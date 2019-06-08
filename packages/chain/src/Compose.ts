import { ChainItem } from "./ChainItem";
/**
 * compose functions
 *
 * compose(a,b,c)(...args) === (...args) => f(g(h(...args)))
 *
 * @param f
 */
// export function compose(f:Array<Function>) {
//     if(f.length === 0){
//         return f[0]
//     }

//     return f.reduce((pre, cur) => (...args:any) => pre(cur(...args)));
// }

/**
 * iteration based on callback
 *
 * @param f
 * @param options
 * @param center
 */
export function composeIterate(tasks: Array<ChainItem>) {
  return function iterate(options: any, center: Function) {
    function it(i: number) {
      if (i === tasks.length) {
        return center(options);
      }

      let task = tasks[i];
      task(options, () => it(i + 1));
    }

    return it(0);
  };
}

// promise
export function composePromise(f: Array<Function>) {
  return function iteratePromise(options: any): Promise<void> {
    let promise = Promise.resolve(options);

    f.forEach(f => {
      promise = promise.then(res => {
        f(res);
      });
    });

    return promise;
  };
}

export function composePromiseK(f: Array<Function>) {
  return function(options: any, center: Function): Promise<void> {
    function it(i: number): any {
      let task = f[i];

      if (i === f.length) {
        return (task = center);
      }

      try {
        return Promise.resolve(task(options, it.bind(null, i + 1)));
      } catch (err) {
        return Promise.reject(err);
      }
    }

    return it(0);
  };
}

// async
export function iterateAsync(tasks: Array<Function>) {
  return async function(options: any): Promise<void> {
    for (const task of tasks) {
      try {
        options = await task(options);
      } catch (e) {
        throw e;
      }
    }
    return options;
  };
}
