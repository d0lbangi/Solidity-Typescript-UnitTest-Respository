console.log('hello world');


class Calculator {
  
  add(first: number, second: number): number {
    return first + second;
  }
  
  addString(first: string, second: string): string {
    return first + second; 
  }
}

const a = 10;
let b = 20;

const calc = new Calculator();

const result = calc.add(a,b);
console.log(result);

const result2 = calc.addString("first ", "second");
console.log(result2);

// if, for

// if (a === b) {
//   console.log('same a b');
// } else if (c !== '10') {
//   console.log('same c 10');
// } else {
//   console.log('not check');
// }

const arr: string[] = ['mo1'];
arr.push('mo2');
arr.push('mo3');

arr.splice(1,1); // 특정 위치 제거

for (let i = 0; i <arr.length; i++) {
  console.log(arr[i]);
}


// obj 
const obj = { // 2개의 멤버변수를 가진 오브젝트 생성
  name: 'brown',
  age: 24
};

console.log(obj.name);
console.log(obj['name']);