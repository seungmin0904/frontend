// 자스에서 제공하는 객체
const now = new Date();

console.log(now);
console.log("년 : " + now.getFullYear());
console.log("월 : " + now.getMonth()); // 월은 0 부터 시작함;; 출력값+1
console.log("일 : " + now.getDate());
console.log("시 : " + now.getHours());
console.log("분 : " + now.getMinutes());
console.log("초 : " + now.getSeconds());

// 날짜형식을 문자열로 변경
console.log("날짜 => 문자열 : " + now.toLocaleString());