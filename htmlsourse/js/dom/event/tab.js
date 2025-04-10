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
const tabTitle = document.getElementById("selected-tab")
const tabColorClass = ["tab-title-color1","tab-title-color2","tab-title-color3"];
// Products 클릭
// tabBtn[1].classList.remove("orange")
// tabBtn[2].classList.remove("orange")
// tabContents[1].classList.remove("show")
// tabContents[2].classList.remove("show")
// tabBtn[0].classList.add("orange")
// tabContents[0].classList.add("show")
tabBtn.forEach((btn,idx) => {
    btn.addEventListener("click", (e)=>{
        // 모든 li의 orange를 제거(버튼 색상 초기화)
        tabBtn.forEach(item => item.classList.remove("orange"));
        // 현재 눌러진 li에는 orange 추가(버튼 색상 변경)
        e.target.classList.add("orange");

        // 모든 div 의 show 제거 
        tabContents.forEach(element=>  element.classList.remove("show"));
        // 현재 눌러진 li와 같은 순서인 div에 show 추가
        tabContents[idx].classList.add("show");

        // 현재 선택 된 탭의 이름을 가져와서 상단 제목에 넣기
        tabTitle.textContent = e.target.textContent;

        // 제목 색상 초기화 후 클래스(색이담긴) 추가
        tabTitle.classList.remove(...tabColorClass);
        tabTitle.classList.add(tabColorClass[idx]);
        
        
                // 장바구니 버튼 보이기(products만)/숨기기(나머지)
                const cartBtn = document.getElementById("cartBtn");
                if (idx === 0) {
                    cartBtn.style.display = "block";
                } else {
                    cartBtn.style.display = "none";
                }
                
                // 어떤 탭을 클릭 하든 그 탭의 내용이 맨 위에 오도록 스크롤 위치를 조정
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });
            });
        });








