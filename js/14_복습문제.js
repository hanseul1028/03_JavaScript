const boxes = document.querySelectorAll(".box");
const colorInputs = document.querySelectorAll(".color-input");

// 제일 앞 [0]

for(let i = 0 ; i < boxes.length ; i++){
    // i == 0 ~ 4

    colorInputs[i].addEventListener("keyup", function(){
        boxes[i].style.backgroundColor = colorInputs[i].value;
    });
}

// radio 버튼 +  change 이벤트

// * change 이벤트 : 
// input 에 작성된 값 또는 체크박스/라디오 체크 여부가 변했을 때

const radioBtns 
= document.querySelectorAll("[name = opacity-btn]");

for(let i = 0 ; i < radioBtns.length ; i++){

    // 라디오 버튼의 값이 변했을 때를 감지
    radioBtns[i].addEventListener("change", function(e){
        // e : 이벤트 객체 ( 이벤트 관련 정보가 담겨 있음)
        // console.log(e);

        // radio 버튼은 체크 x -> 체크 o 
        // change 이벤트가 감지

        // e.target : 이벤트가 발생한 요소

        // 체크된 라디오 버튼의 value를 얻어오기
        console.log(e.target.value);

        // 모든 .box 요소의 opacity 값으로 체크된 값 대입

        /* 향상된 for 문
        - 배열에 저장된 모든 요소를 순차 접근하는 용도의 for 문
        - 순차 접근 상황이 빈번히 발생하여
            작성법을 간단하게 변화시킴

            [for of 구문]
            for(let 변수명 of 배열명){
                변수명;}

            - for 문이 반복될 때 마다
            배열 내 요솔를 0번 부터 하나씩 꺼내서 
            of 앞의 변수에 대입하는 for 문
        */
        for(let box of boxes){
            // boxes[0] ~ boxees[4] 까지 
            // for 문이 반복 될 때 마다
            // 1개씩 차례대로 box 변수에 대입

            box.style.opacity = e.target.value;
        }
    });
}