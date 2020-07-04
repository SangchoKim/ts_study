"use strict";
var imgCoords = "0";
var rsp = {
    // 딕셔너리 자료구조
    ROCK: "0",
    SCISSORS: "-142px",
    PAPER: "-284px"
}; // as const도 설명
function computerChoice(imgCoords) {
    return Object.keys(rsp).find(function (k) {
        return rsp[k] === imgCoords;
    });
}
var interval;
function intervalMaker() {
    interval = setInterval(function () {
        if (imgCoords === rsp.ROCK) {
            imgCoords = rsp.SCISSORS;
        }
        else if (imgCoords === rsp.SCISSORS) {
            imgCoords = rsp.PAPER;
        }
        else {
            imgCoords = rsp.ROCK;
        }
        if (document.querySelector("#computer")) {
            document.querySelector("#computer").style.background =
                "url(https://en.pimg.jp/023/182/267/1/23182267.jpg) " +
                    imgCoords +
                    " 0";
        }
    }, 100);
}
intervalMaker();
var score = {
    SCISSORS: 1,
    ROCK: 0,
    PAPER: -1
};
document.querySelectorAll(".btn").forEach(function (btn) {
    // THIS를 쓰는 경우 첫번째 매개변수로 넣어주어야 함 
    btn.addEventListener("click", function () {
        clearInterval(interval); // setInterval 중지
        setTimeout(function () {
            intervalMaker();
        }, 1000);
        var myChoice = this.id;
        var myScore = score[myChoice];
        var computerScore = score[computerChoice(imgCoords)];
        var diff = myScore - computerScore;
        if (diff === 0) {
            console.log("비겼습니다");
        }
        else if ([-1, 2].includes(diff)) {
            console.log("이겼습니다!!");
        }
        else {
            console.log("졌습니다 ㅠㅠ.");
        }
    });
});
// SCISSORS: 1, ROCK: 0, PAPER: -1
// 나\컴퓨터    SCISSORS   ROCK    PAPER
//        SCISSORS   1 1    1 0   1 -1
//        ROCK   0 1    0 0   0 -1
//          PAPER  -1 1   -1 0  -1 -1
var start = 3;
var interval2 = setInterval(function () {
    if (start === 0) {
        console.log("종료!!!");
        return clearInterval(interval2);
    }
    console.log(start);
    start -= 1;
}, 1000);
