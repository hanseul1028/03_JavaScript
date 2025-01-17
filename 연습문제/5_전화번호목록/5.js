const numbers = document.querySelectorAll(".number");
const result = document.querySelector("#result");
const addBtn = document.querySelector("#addBtn");
const record = document.querySelector("#record");

/* result에 숫자 저장 */
for(let num of numbers){
    num.addEventListener("click", (e) => {

        result.textContent += e.target.textContent;
        
    });
}

/* 초기화 */
resetBtn.addEventListener("click", ()=>{
    result.textContent = "";
});



/* 추가버튼 누르면
    result 에 있는 값을 record로 불러오기
    result 값 초기화 */


// /* br 안됨, span태그 아님 */
addBtn.addEventListener("click", ()=>{

    const div = document.createElement("div");

    const span1 = document.createElement("span");
    span1.className = "span1";
    span1.textContent = result.textContent;

    const span2 = document.createElement("span");
    span2.className = "span2"
    span2.textContent = "☆";

    const span3 = document.createElement("span");
    span3.className = "span3"
    span3.textContent = "x";

    
    div.append(span1, span2, span3);
    record.append(div);

    span3.addEventListener("click", e =>{
        e.target.parentElement.remove();
    });


    /* 별 즐겨찾기 */
    // span2.addEventListener("click", ()=>{
    //     e.target.parentElement.scale();
    // });


    //초기화
    result.textContent = "";
});

