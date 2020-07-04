
// 기본
// let num: number;
// num = 3;

let str: string = "hello";
let undi: undefined = undefined;
let num: number = 1;
let nul: null = null;
let bool: boolean = true;
const sym: symbol = Symbol('Development mode');


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


// 인터페이스
// 인터페이스는 같은 인터페이스 이름으로 분해가 가능함
// 인터페이스는 상속이 가능함

interface ABCDF {
 readonly A:'0',
 readonly B:'-142px',
 readonly C:'-284px',
}

interface ABCDF {
  readonly D:'-512px',
  readonly F:'-1024px',
 }

 interface Exampe {
  a:3,
  b:7, 
  [key:string] :number
 }

interface Exp extends ABCDF {  // 상속

}

const example: Exampe = {
  a:3,
  b:7, 
}

const abcdf:ABCDF ={
   A:'0',
   B:'-142px',
   C:'-284px',
   D:'-512px',
   F:'-1024px',
}

// !는 타입스크립트에서 경고창을 띄어주지만 프로그래머가 코드를 보증할 때 사용 
function abc(imgCoords: ABCDF[keyof ABCDF]) : keyof ABCDF{
  return (Object.keys(abcdf) as ["A", "B", "C","D","F"]).find(k => {
    return abcdf[k] === imgCoords;
  })!;
}

// type 
// type 인 경우에는 인터페이스와 다르게 나눠서 사용하지 못한다. 
// 인터페이스와 type의 차이점
// type이 좀 더 넓은 범위, 보통 | 과 같이 쓰임 
// 인터페이스는 객체에서 많이 사용 
// 
type ABCDFG = {
  readonly A:'0',
  readonly B:'-142px',
  readonly C:'-284px',
  readonly D:'-512px',
  readonly F:'-1024px',
 }

 type A = {
  readonly A:'0',
 } | string;

 type Hello = string | number


  // 1. 제네릭 -> 만들때는 여유롭게, 실제로 사용할 때는 엄격하게 
  // 2. 제네릭 제약사항(extends) -> 제네릭
  // 3. 타입 가드 is -> 넓은 범위에서 좁은 범위로 줄여준다.

  // 1번
  interface obj<T>{
    add: (a:T, b:T)=>T;
  }

  const q :obj<number> ={
    add: (a, b)=>a+b
  }
  const w :obj<string> ={
    add: (a, b)=>a+b
  }
  const e :obj<boolean> ={
    add: (a, b)=> a
  }

  // 2번 

  // 3번
  const isSubs = function(data: Card): data is Sub {
    if (data.cost) {
      return true;
    }
    return false;
  }
 

 

 
