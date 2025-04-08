// 요소 찾기
// querySelector() : 조건에 맞는 첫번째 요소

let div = document.querySelector("div");
console.log(div)

div = document.querySelector(".container-fluid");
console.log(div)

// querySelectorAll -> Nodelist : 모든 div 태그 찾기 
let divs = document.querySelectorAll('div');
console.log(divs)

divs.forEach((div) => {
    console.log(div);
});

let button = document.querySelector(".navbar-toggler")
console.log(button);

// 메뉴찾기
const lis = document.querySelectorAll(".navbar-nav > .nav-item");
lis.forEach((li) => {
    console.log(li);
});
// form 태그: class 
let forms = document.querySelector(".d-flex")
console.log(forms);
// role 속성 :
forms = document.querySelector("[role='search']")
console.log(forms);

// form 안 input요소 찾기
forms = document.querySelectorAll("form > div > input") // form > div에 속한 모든 input 요소
console.log(forms)
// 방법은 여러가지
// let input = forms.querySelector(".form-control"); 
// input = forms.querySelector(".form-control");
// input = forms.search;
// console.log(input)

// table 찾기
let table = document.querySelector("table");
console.log(table);
// table 안 thead 찾기
table = document.querySelectorAll(".table > thead");
console.log(table);

// table 안 tbody 두번째 tr 찾기
let tr = document.querySelectorAll("tbody tr:nth-child(2)")
console.log(tr);
