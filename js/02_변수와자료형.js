/* 변수 선언 : 값을 저장하기 위한 공간 생성 */

var number1;
var number2;

/* 변수에 값 대입 : 생성된 공간에 원하는 값을 넣기 */
// 변수명 = 값; -> 오른쪽 : "값"을 왼쪽 변수에 대입
number1 = 10;
number2 = 20;


/* var */
// 변수 (값 변경 O), 변수명 중복 O

function varCheck(){
    var menu = "제육볶음";
    console.log("menu: ", menu);

    //  값 변경 확인 (var 키워드x)    
    menu = "라면";
    console.log("menu : ", menu); //라면

    /* 변수명 중복 확인 (var 키워드 o) */
    var menu = "김밥";
    console.log("menu : ", menu); //김밥

    // var 사용의 문제점
    /// -> 잘 사용하고 있던 변수를 실수로 없애는 경우가 자주 발생
}

/* let */
//변수 (값 변경 O), 변수명 중복 X, (var 문제점 해결)

function letCheck(){
    let name = "홍길동"; /* 변수 선언 + "홍길동" 대입 */
    console.log("name : ", name); //홍길동

    /* 값 변경 o */
    name = "장보고";
    console.log("name : ", name); //장보고

    // 변수명 중복 x
    //  let name = "이순신"; //**오류 발생 **/

    // 해결 방법 : 다른 이름의 변수에 저장
    let name2 = "이순신";
    console.log("name2 : ", name2);
}

    /* const (constant : 상수) */
// 상수 (값 변경 x), 변수명 중복 X
function constCheck(){
    const nationalCode = 82;
    console.log("nationalCode : ", nationalCode);
}
/* 상수 (값 변경 x) */
nationalCode = 1;
console.log("nationalCode : ", nationalCode);

/* 변수명 중복 */


/* var, let, const의 범위(scope) 확인 */

function scopeTest1() //함수 선언
{ // 함수 정의 시작
    var num1 = 100;

    // if : 만약에
    //if(num1 ===100) : 만약에 num1과 100이 같다면 {}블럭 수행
    if(num1 === 100){
        var num2 = 200; //var를 이용해서 num2 변수를 선언
        // var은 함수 레벨 범위
        // -> var은 함수 정의 시작 ~ 끝 사이에 존재하면
        // 어디서든 사용 가능
        // (함수 종료 직전까지 사용 가능)
    }

    console.log("num2 : ", num2); //num2 : 200 출력 성공

    //----------------------------------------------------
    /* let */

    let num3 = 300;


    // num3 변수에 저장된 값과 300이 같으면 {}블럭 수행
    if(num3 == 300){
        let num4 = 400; // {}내부에서 변수 선언
        // -> let은 {} 내부에서만 사용 가능
        // -> {} 블럭을 벗어나면 사용 불가
    }

    console.log("num4 : ", num4); 
    // num4 is not defined (num4 변수가 정의되지 않음)



} // 함수 정의 끝
//scopeTest1(); //함수 호출


/* 변수 선언 위치에 따른 범위 */

/* 
  1. 전역(global) 변수
  - 어디서든 사용 가능한 변수

  2. 지역(local) 변수
  - {} 블럭 내부에 작성된 변수
*/

// 전역 변수 선언 (기본적으로 {}블럭 밖에 선언)
const global1 = "전역변수1";

function scopeTest2() //함수 선언
{ // 함수 정의 시작
    const fn1 = "함수 지역 변수1";
    let   fn2 = "함수 지역 변수2";

    const temp = 123; //임시변수

    console.log("if실행 전 fn2 : ", fn2); //함수 지역 변수2

    if(temp ===123) //if문 선언
    { //if 정의 시작

        //{}바깥쪽 -> 안쪽 변수 사용 가능
        console.log("if 내부에서 fn2 : ", fn2);

        // {{}} -> 바깥쪽 -> 안쪽 변수 사용 가능
        console.log("전역 변수 global : ", global1);


        /* {} 바깥쪽 변수 값을
          {} 내부에서 변경하면 어떤 일이 발생할까? */

        fn2 = "변경된 fn2";
        console.log("fn2 변경 확인 : ", fn2);



    } // if 정의 끝

    console.log("if 끝난 이후 fn2 값 : ". fn2); //변경된 fn2

    const name = " 홍길동"; // 상수, 함수{}블록 레벨

    console.log("if 전 : ", name); //홍길동

    if(temp === 123){
        const name = "김미영"; // {}바깥쪽, 안쪽 변수명이 같으면 {}안쪽이 우선순위가 높음
        console.log("if 중 : ", name); // 김미영

    }

    console.log("if 후 : ", name); // 홍길동
} // 함수 정의 끝


/* 자료형 확인 */
function typeCheck(){
    /* typeof 연산자  : 변수/값의 자료형을 확인하는 연산자*/

    /* undefined : 정의되지 않음 == 변수에 값 대입 x */
    let undef;
    console.log("undef : ", undef, typeof undef);

    /* string (문자열) : "", ''형태로 작성된 값(리터럴) */
    const name = "성기훈";
    const phone = '01012341234';
    console.log("name : ", name, typeof name);
    console.log("phone : ", phone, typeof phone);


    /* number (숫자) : 정수, 실수 형태의 리터럴 */
    const age = 28;
    const height = 158;
    const sight = -2.75;

    console.log("age : ", age, typeof age);
    console.log("height : ",height, typeof height);
    console.log("sight : ", sight, typeof sight);

    /* boolean (논리값) : true, false */

    const bool1 = true;
    const bool2 = false;

    console.log("bool1 : ", bool1, typeof bool1);
    console.log("bool2 : ", bool2, typeof bool2);
    
    /* object(객체) : 값을 여러 개 저장할 수 있는 형태 */

    // 1. 배열 (array) : 변수의 묶음,
    //                   묶인 변수에 0부터 1씩 증가하는 숫자를 부여 (index)
    const numbers = [11, 22, 33]; // 배열 생성

    // 배열 전체 타입 검사 : object
    console.log("numbers : ", numbers, typeof numbers);

    //배열 내 요소(저장된 값) 하나씩 꺼내기
    console.log("numbers[0] : ", numbers[0], typeof numbers[0]);
    console.log("numbers[1] : ", numbers[1], typeof numbers[1]);
    console.log("numbers[2] : ", numbers[2], typeof numbers[2]);

    // 2. JS객체 {k:v, k:v, k:v}
    // k(key) == 값을 구분하는 이름 (변수명과 비슷)
    // v(value) == 값 자체 (변수에 대입되는 값)

    const user = {
        id : "user01",
        pw : "pass01",
        point : 13000
    }

    console.log("user : ", user, typeof user); // object 타입

    // js 객체 내 요소 하나씩 꺼내기
    console.log("user['id'] : ", user['id'], typeof user['id']);
    console.log("user['pw'] : ", user['pw'], typeof user['pw']);
    console.log("user['point'] : ", user['point'], typeof user['point']);


    /* 함수 : 함수도 변수에 대입 가능 */

    const sumFn = function(a,b) {
        return a + b;
    }

    console.log("sumFn : ", sumFn, typeof sumFn);


    //sunFn 호출 -> ()내 값 전달 -> 계산 결과 return -> console 출력
    console.log( sumFn(111,987));
    console.log( sumFn(3,5));
    console.log( sumFn(-82,+111));
}