// 2개의 주사위를 던졌을 때 나오는 눈을 (5,3) 출력하고
// 눈의 합이 5가 아니면 계속 주사위를 던지고 눈의 합이 5인경우 실행 중단
while(true){
    let dic1 = Math.floor(Math.random() * 6) +1;
    let dic2 = Math.floor(Math.random() * 6) +1;

    console.log(`{$dic1},{$dic2}`)
    if (dic1,dic2 == 5) break;
}






// 로또번호 6개 추출해 배열에 담은 후 출력
let lotarr=[];
while (true) {
    let lot = Math.floor(Math.random() * 46 )+1;
    if(lotarr.indexOf(lot)==-1){
        lotarr.push(lot);
    }
    if(lotarr.length > 5) break;
}
console.log("로또 " + lotarr);