let num: number;
num = 3;
let str: string = "hello";

let arr: [boolean, number, string] = [true, 2, "3"]; // Tuple

let arrs = [true, 2, "3"] as const; // 상수

let obj = { a: "b" } as const; // 상수

const objs: { a: string; b: number } = { a: "b", b: 1 };

const objss: { a: string; b?: number } = { a: "b" };
objss.b = 3;

enum Color {
  Red,
  Green,
  Blue
}
let c: Color = Color.Green;

(a: number, b: number): number | string => {
  return a + b;
};

(a: number, b: number): void => {
  console.log(a, b);
};

(a: number, b: number): ((c: string) => number) => {
  return (c: string) => {
    return 3;
  };
};

const obj2: { a: (b: number, c?: string) => string } = {
  a: (b: number, c?: string) => {
    return "2";
  }
};

obj2.a(1);
obj2.a(1, "4");
