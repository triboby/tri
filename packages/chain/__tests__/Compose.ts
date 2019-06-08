import {
  composeIterate,
  // composePromise,
  composePromiseK
} from "../src/Compose";

describe("Compose#", () => {
  let a = (x: any, next: Function) => {
    x.x = x.x + 1;
    next();
    console.log("a");
  };
  let b = (x: any, next: Function) => {
    x.x = x.x * 2;
    next();
    console.log("b");
  };
  let c = (x: any, next: Function) => {
    x.x = x.x + 3;
    next();
    console.log("c");
  };
  let d = (x: any, next: Function) => {
    x.x = x.x * 4;
    next();
    console.log("d");
  };

  // describe("compose", ()=>{
  //     it("should calculate right", () => {
  //         let z = compose([a,b,c,d]);
  //         expect(z(1)).toEqual(28);
  //     });
  // })

  describe("iterate", () => {
    it("should calculate right", () => {
      let z = composeIterate([a, b, c, d]);

      z({ x: 1 }, (res: any) => {
        expect(res.x).toEqual(28);
      });
    });

    it("should calculate right", () => {
      let z = composeIterate([b, a, d, c]);

      z({ x: 1 }, (res: any) => {
        expect(res.x).toEqual(15);
      });
    });
  });

  // describe("iteratePromise", ()=>{
  //     it("should calculate right", () => {
  //         let z = composePromise([a,b,c,d]);

  //         z(1).then((res) => {
  //             expect(res).toEqual(28);
  //         })
  //     });

  // })

  describe("composePromiseK", () => {
    it("should calculate right", () => {
      let z = composePromiseK([a, b, c, d]);

      z({ x: 1 }, (res: any) => {
        expect(res.x).toEqual(28);
      });
    });
  });

  // describe("iterateAsync",()=>{
  //     it("should calculate right", async () => {
  //         let z = iterateAsync([a,b,c,d]);
  //         let res = await z(1);
  //         expect(res).toEqual(28);
  //     });
  // })
});
