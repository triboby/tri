import { Chain } from "../src/Chain";

describe("Chain#", () => {
  let inst: Chain;

  beforeEach(() => {
    inst = new Chain();
  });

  describe("add()", () => {
    it("should be a function", () => {
      expect(inst).toHaveProperty("use");
    });
  });

  // describe("exec()", () => {
  //     it("should be a function", () => {
  //         expect(inst).toHaveProperty("exec");
  //     });

  //     it("should calculate the true num", () => {
  //         let opts = { count: 0 };

  //         inst.use(async(opts: any, next: Function) => {
  //             opts.count++;
  //             await next(opts);
  //             opts.count++;
  //         });

  //         inst.use(async(opts, next) => {
  //             opts.count++;
  //             opts.test = 'abc';
  //             await next(opts);
  //         })

  //         inst.exec(opts).then((opt) => {
  //             expect(opt.count).toEqual(2);
  //             expect(opt.test).toEqual('abc');
  //         })
  //     })
  // });
});
