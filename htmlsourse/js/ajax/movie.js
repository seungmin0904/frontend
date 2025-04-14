// 년,월,일 가져오기

const txtYear = document.querySelector("#txtYear");
const selMon = document.querySelector("#selMon");
const selDay = document.querySelector("#selDay");
const rank = document.querySelector("#rank");

const init = ()=>{
    // 페이지가 로딩되면 어제날짜로 세팅되게 보이기
    const today = new Date();
    console.log(today);
    
    // 년,월,일 분리 => 요소 안에 보여주기
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const day = today.getDate() -1;
    
    txtYear.value = year;
    selMon.value= month < 10 ? "0" + month : month;
    selDay.value= day < 10 ? "0" + day : day;
};


init();

document.querySelector("button").addEventListener("click", ()=>{
    // 사용자가 입력한 년,월,일 가져오기 
    const targetDt = txtYear.value + selMon.value + selDay.value


    const url =`http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=1d66bc7492b1e55baf2d319f9b711cc5&targetDt=${targetDt}`;
    fetch(url)
    .then(res => res.json(
        console.log(res)
    ))
    .then(data =>{
        // 데이터에 접근 하는 방법
        console.log(data.boxOfficeResult);
        console.log(data.boxOfficeResult.dailyBoxOfficeList);
        const boxList = data.boxOfficeResult.dailyBoxOfficeList
       
        let list = ``;
        boxList.forEach((movie) => {
            // 추출 : 순위(🔼1 🔽1 )
            console.log(movie.rank);
            console.log(movie.rankInten);
            console.log(movie.Nm);
            list += `${movie.rank}위`

            const rankInten = parseInt(movie.rankInten);

            if (rankInten > 0) {
                list += "(🔼";
            } else if(rankInten < 0){
                list += "(🔽";
            }else{
                list += "(";
            }
            list += `${movie.rankInten} ) `;

            list += `<a href='#' onclick='javascript:movieInfo(${movie.movieCd})'>${movie.movieNm}<a>`
            list += `<br>`
        });
        document.querySelector("#rank").innerHTML = list;
    });
    
});


// 영화 상세 정보

const movieInfo = (movieCd)=>{
    const url = `http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=1d66bc7492b1e55baf2d319f9b711cc5&movieCd=${movieCd}`

    console.log(movieCd);
    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        console.log(data.movieInfoResult.movieInfo);
        const movieInfo = data.movieInfoResult.movieInfo
        // console.log(info);

        let result = `<ul>`
        
        // 영화제목 movieNm
        const movieNm = movieInfo.movieNm
        result += `<li>영화제목 : ${movieNm}</li>`
        console.log(movieNm);
        // 영어제목 movieNmEn
        const movieNmEn = movieInfo.movieNmEn
        result += `<li>영어제목 : ${movieNmEn}</li>`
        console.log(movieNmEn);
        // 상영시간 showTm
        const showTm = movieInfo.showTm
        result += `<li>상영시간 : ${showTm}</li>`
        console.log(showTm);
        // 감독 directors.peopleNm
        // let directorNm = movieInfo.directors.map((directors) => directors.peopleNm).join(", ")
        const directors = movieInfo.directors
        let directorNm = "";
        directors.forEach((director) => {
            directorNm += director.peopleNm + ","
        });
        // 배우 actors.peopleNm	

        
        // let actorNm = movieInfo.actors.map((actor) => actor.peopleNm).join(", ")



        result += `<li>감독 : ${directorNm}</li>`;

        let actorNm = "";
        movieInfo.actors.forEach(actor => {
            actorNm += actor.peopleNm + ", "
        });
        result += `<li>배우 : ${actorNm}</li>`;
        result += `</ul>`;
        console.log(actorNm);
        document.querySelector("#info").innerHTML = result;
    });
};
