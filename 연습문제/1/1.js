/* 생성 할 input 개수 입력 : */

const createBtn = document.querySelector("#btn");
const container = document.querySelector("#container");
const count = document.querySelector("#count");

createBtn.addEventListener("click", ()=>{
    const val = Number(count.value);

    container.innerHTML = "";
    for(let i = 0 ; i < val ; i++){
        const input = document.createElement("input");
        input.className = "input-number";
        input.type = "number";
        container.append(input);
    };
});

/* 계산하기 */
const sumBtn = document.querySelector("#sumBtn");
sumBtn.addEventListener("click", ()=>{

    const inputs = document.querySelectorAll(".input-number");
    let sum = 0;

    for(let input of inputs){
        sum += Number(input.value);
    }

    document.getElementById("result").innerText = sum;
});