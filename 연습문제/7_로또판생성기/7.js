/* 버튼 3개 */
const createBtn = document.querySelector("#createBtn");
const resetBtn = document.querySelector("#resetBtn");
const randomBtn = document.querySelector("#randomBtn");

/* 버튼 영역 */
const normalContainer = document.querySelector(".normal-container");
const editContainer = document.querySelector(".edit-container");

/* 숫자들 */
const numbers = document.querySelectorAll(".number");






/* 로또판 생성 버튼 클릭 시 가려져 있던 버튼 2개 보이게 하기*/
createBtn.addEventListener("click", () => {

    normalContainer.classList.toggle("b-hidden");
    editContainer.classList.toggle("b-hidden");
});


/* 로또판 생성 버튼 클릭 시 가려져 있던 숫자들 보이게 하기*/




/* 랜덤 생성 버튼 클릭 시 난수 6개 만들기
  -> 입력 받은 값과 innerText 가 일치하는 button에 배경색 지정하기 */

function createLottoNumber() {
    const arr = [];
    for (let i = 0; i < 6; i++) {
        const randomNumber = Math.floor(Math.random() * 45 + 1);
        if (arr.includes(randomNumber)) {
            i--;
            continue;
        }
        arr[i] = randomNumber;
    }
    console.log("arr : ", arr);

    return arr;
}


randomBtn.addEventListener("click", () => {

    const arr = createLottoNumber();

    document.querySelectorAll(".active").forEach(item => item.classList.remove("active"));

    for(let num of arr){
        numbers[num-1].classList.add("active")
    }

});

/* 초기화 버튼 */
resetBtn.addEventListener("click", ()=>{

    document.querySelectorAll(".active").forEach(item => item.classList.remove("active"));

});

/* 클릭하면 배경색 변경 */
number.addEventListener("click", ()=>{

    document.querySelectorAll(".active").forEach(item => item.classList.toggle("active"));

});


/* 7개 이상 클릭 => prompt에 "6개 까지만 선택할 수 있습니다" 출력하기 */


prompt{"6개 까지만 선택할 수 있습니다"}