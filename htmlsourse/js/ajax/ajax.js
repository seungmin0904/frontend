//  console.log("시작");
// setTimeout(()=>{
// console.log("중간");

// }, 3000);
// console.log("마무리"); 



// fetch
// fetch("서버주소")
// .then("응답받은 데이터 => 적절한 타입으로 변환 후 리턴")
// .then((도착한응답처리)=>{
// .catch((error)=>{
// .finally(()=>{
//    
// 

//  console.log("시작");
// fetch("https://jsonplaceholder.typicode.com/todos/1") 요청
fetch("https://jsonplaceholder.typicode.com/todos/1")
.then((response)=> response.json()) // 응답받은 데이터
.then((data)=> console.log(data)); 
// console.log("마무리"); 