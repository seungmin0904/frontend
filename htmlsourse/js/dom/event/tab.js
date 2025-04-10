// tab 보여주기 : show 클래스명
// 메뉴선택 : orange
// products 클릭 + 첫번째 tab
// - Information , shipping : orange/show 제거
// Information 클릭 + 두번째 tab
// - products , shipping : orange/show 제거
// shipping 클릭 + 세번째 tab
// -Information ,products : orange/show 제거

//클릭요소
const tabBtn = document.querySelectorAll(".tab-button")

//변화가 일어나는 요소
const tabContents = document.querySelectorAll(".tab-content")

// Products 클릭
// tabBtn[1].classList.remove("orange")
// tabBtn[2].classList.remove("orange")
// tabContents[1].classList.remove("show")
// tabContents[2].classList.remove("show")
// tabBtn[0].classList.add("orange")
// tabContents[0].classList.add("show")
tabBtn.forEach((btn,idx) => {
    btn.addEventListener("click", (e)=>{
        // 모든 li의 orange를 제거
        tabBtn.forEach((item) => item.classList.remove("orange"));
        // 현재 눌러진 li에는 orange 추가
            e.target.classList.add("orange");
            // 모든 div 의 show 제거 
            tabContents.forEach((element)=>{
                element.classList.remove("show");
            });
            // 현재 눌러진 li와 같은 순서인 div에 show 추가
            tabContents[idx].classList.add("show");

           for (const element of object) {
            
           }

        });
    });







