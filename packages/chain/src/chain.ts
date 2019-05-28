// type Cb = (options: any, next: Function) => {};

// export class Chain {
//     chain: Array<Cb> = [];

//     constructor() {

//     }

//     use(item: Cb) {
//         if(item) {
//             this.chain.push((callback, next) => {
//                 item(options);

//                 next();
//             });
//         }
//     }

//     exec(options, finish) {
//         let queue = [...this.chain];

//         while(queue.length > 0){
//             let x = queue.shift();
//             x(options, queue[0])
//         }
//     }
// }
