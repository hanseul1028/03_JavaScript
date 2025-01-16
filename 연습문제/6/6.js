/* 추가하기 */
const container1 = document.querySelector(".container-1");

const addBtn = document.querySelector("#addBtn");
const closeBtn = document.querySelector("#closeBtn");
const btnContainer = document.querySelector(".btn-container");

addBtn.addEventListener("click", ()=>{

    const div = document.createElement("div");
    div.className = "row";

    // 체크박스
    
    const input1 = document.createElement("input");
    input1.className = "check";
    input1.type = "checkbox";

    // 메뉴

    const input2 = document.createElement("input");
    input2.className = "input-menu";
    input2.type = "text";

    // 가격

    const input3 = document.createElement("input");
    input3.className = "input-price";
    input3.type = "number";


    div.append(input1, input2, input3);
    container1.append(div);


});


/* 수정 버튼 클릭 시 */
modifyBtn.addEventListener("click", ()=>{

    console.log(btnContainer.classList.contains("hidden"));

    if(btnContainer.classList.contains("hidden")){
        btnContainer.classList.remove("hidden");
        modifyBtn.classList.add("hidden");
    }
});

/* 종료 버튼 클릭 시 */
closeBtn.addEventListener("click", ()=>{

    if(!btnContainer.classList.contains("hidden")){
        btnContainer.classList.add("hidden"); // hidden 추가
        modifyBtn.classList.remove("hidden");
    }
});


modifyBtn.addEventListener("click", ()=>{
    const container = document.querySelector(".container-2");
    
    container.classList.add("test");

});