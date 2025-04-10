const products = [
    {id:0, price:70000, title:"Blossom Dress"},
    {id:1, price:50000, title:"Springfield shirt"},
    {id:2, price:80000, title:"Black Monastery"},
];


// 배열안의 정보를 화면에 보여주기

// 변경할 요소 찾기
const text = document.querySelectorAll(".col-sm-4 > h5:nth-child(2)");
const text1 = document.querySelectorAll(".col-sm-4 > p:nth-child(3)");
console.log("요소값",text);
console.log("요소값",text1);

products.forEach((item,idx) => {
    // 배열요소 가져오기
    // console.log(item);
    // 객체 접근
    // console.log(item.title);
    text[idx].textContent = item.title;
    console.log(item.title);
    text1[idx].textContent = item.price;
    console.log(item.price);
    
});

// 화면 영역 찾아오기
const cols = document.querySelectorAll(".col-sm-4");
cols.forEach((col) => {
    console.log(col);

    //h5,p 값찾기
   console.log(col.querySelector("h5").textContent);
   console.log(col.querySelector("p").textContent);

});
// products.forEach((item,idx) => {
//     // 배열 요소 가져오기
//     console.log(idx,"",item);
//     //객체 접근
//     console.log(item.title);
// });

// for (let i = 0; i < products.length; i++) {
//     console.log(products[i]);
//     console.log(products[i].title);

    
// }

products.forEach((col,idx) => {
    // 배열 요소 가져오기
    console.log(col.querySelector("h5").textContent = products[idx].title);
    // 객체 접근
    console.log(col.querySelector("p").textContent = products[idx].price);
});

//두번째 방법(처음부터 태그를 만들어서 배열값을 넣기)
const row = document.querySelector(".row");
let tags = "";
products.forEach((item,idx) => {
    tags += `<div class="col-sm-4">`;
    tags += `<img src="https://placehold.co/600" alt="" class="w-100">`;
    tags += `<h5>${item.title}</h5>`;
    tags += ` <p>${item.price}</p>`;
    tags += `</div>`;
});
// console.log(tags);
// row 자식으로
row.insertAdjacentHTML("afterbegin",tags);