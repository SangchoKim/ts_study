// 기본
let num: number;
num = 3;
let str: string = "hello";

// 배열
let arrays: Array<number> = [1,2,3];
let arrayss: number[] = [1,2,3];
let ar: (string|number|boolean)[] = [1,true,'abc'];
let arr: [boolean, number, string] = [true, 2, "3"]; // Tuple 엄격하게 하는 것이 중요
let arraysss: [boolean, 2, string] = [true, 2, "3"]; // Tuple 더 엄격하게 하는 것이 중요

// 상수 read only -> 배열이나 객체인 경우 유용 -> 내부 값을 못바꾸기때문에 
let arrs = [true, 2, "3"] as const; 
let obj = { a: "b" } as const; 

// 객체
const ob :Object ={a:1} // 보통 이렇게 안씀 
const objs: { a: string; b: number } = { a: "b", b: 1 }; 
const objss: { a: string; b?: number } = { a: "b" }; // ?는 확실하지 않은 경우 
objss.b = 3;

// enum
enum Color {
  Red,  // 0
  Green, // 1
  Blue // 2
}
let c: Color = Color.Green;
Color[0] ==='Red';
Color['Red'] === 0;

// 함수
function f (a: number, b: number): number | string {
  return a + b;
};

const fn = (a: number, b: number): number | string => {
  return a + b;
};

(a: number, b: number): void => {
  console.log(a, b);
};

function add(a: number, b: number): (c: string) => number {
  return (c: string) => {
    return 3;
  };
};

(a: number, b: number): ((c: string) => number) => {
  return (c: string) => {
    return 3;
  };
};

function adds(a: number, b: number): (c: string) => (d:number) => boolean {
  return (c: string) => {
    return (d:number)=> {
      return false
    };
  };
};

const obj2: { a: (b: number, c?: string) => string } = {
  a: (b: number, c?: string) => {
    return "2";
  }
};

obj2.a(1);
obj2.a(1, "4");

// never, any
const hi: any = []; // like javaScript


// 타입 강제로 바꾸는 방법 -> 상속관계에서는 unknown을 안써도 됨.
const hellos: number = 3;
((hellos as unknown) as string).substr(1, 2);
(<string><unknown>hellos).substr(1, 2);

const div = document.createElement("div");
const a = div as HTMLElement;
