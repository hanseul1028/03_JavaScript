/* 추가하기 */
const addBtn = document.querySelector("#addBtn");
const container = document.querySelector(".container");

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
    container.append(div);


});

/* 삭제 */


deleteBtn.addEventListener("click", (e)=>{

    if(document.querySelectorAll(".check:checked")

    ){
        e.target.div.remove();

    }


});