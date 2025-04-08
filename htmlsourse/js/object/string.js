// string 객체 
const msg1 = new String("hello javascript"); // 생성자
const msg2 = String("HELLO JAVASCRIPT"); // 함수
console.log(msg1);
console.log(msg2);
console.log(typeof msg1); // object
console.log(typeof msg2); // string 

// === : 값과 타입 비교 
console.log(msg1 === "hello javascript"); // false
console.log(msg2 === "HELLO JAVASCRIPT"); // true

// const msg3 = "";
console.log(`특정 위치 문자 반환 : ${msg1.charAt(4)}`);
console.log(`특정 위치 문자 반환 : ${msg1.at(4)}`);
console.log(`특정 문자의 위치 반환 : ${msg1.indexOf('j')}`);
console.log(`특정 문자 포함여부 : ${msg1.includes('j')}`);
console.log(`문자열 부분 추출 : ${msg1.substring(6,10)}`);
console.log(`문자열 부분 추출 : ${msg1.slice(6,10)}`);
console.log(`문자열 연결 : ${msg1.concat(msg2)}`);
console.log(`문자열 변경 : ${msg1.replace("hello" , "hi")}`);
console.log(`문자열 찾기 : ${msg1.match("ja")}`); // 찾은 문자열을 반환
console.log(`문자열 찾기(없는문자) : ${msg1.match("body")}`); // 없으면 null로 반환
console.log(`문자열 찾기 : ${msg1.search("ja")}`); // 찾은 문자의 시작위치 반환
console.log(`문자열 찾기(없는문자) : ${msg1.search("body")}`); // 문자가 없으면 -1로 반환
console.log(`문자열 대문자로 변경 : ${msg1.toUpperCase()}`); 
console.log(`문자열 소문자로 변경 : ${msg1.toLowerCase()}`); 
console.log(`문자열 공백제거 : ${"    asd     ".trim()}`); 











