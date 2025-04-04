// "use strict"
//alert("test")
// 줄 바꿈이 있다면 ;세미콜론 필수 X 
// 자바스크립트 변수는 타입이 없음
// 선언: let(변수:값변경 가능), const(상수:값변경 불가), 
//       var(예전방식): 유연한 변수선언방식



// let(변수:값변경 가능)
let a=3;
console.log(typeof a);
console.log(a);
a="test"; //문자열은  '',"" 두 타입 다 가능
console.log(typeof a);
console.log(a);


//const(상수:값변경 불가)
const b =15;
console.log(b);
// b= 20;
//   TypeError: Assignment to constant variable.

// block-scope : {} 이 없으면 js내에 변수 재 선언이 불가능 
//  변수를 다시 재 선언하려면 { } 안에 변수를 선언해야함 java 지역변수와 같은개념
{
    let a=15;
    console.log("block-scope",a)
}

// 변수 범위
// var : function scope
// let,const : block scope
function foobar(){
    var foo = 5;
    console.log(foo);

}
    // console.log(foo);
    if(true){
        var aa= 5;
    }
    console.log(aa);
    
    if(true){
        let bb= 5;

    console.log("let block scope"+bb);
    }
    // console.log("let block scope"+bb); ReferenceError: bb is not defined
    