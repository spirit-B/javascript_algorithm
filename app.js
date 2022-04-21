// 문제 풀이용 js 파일
function solution(s) {
    let answer = Number(s.replace(/[\D]/g, ""));
    return answer;
}

let str = "g0en2T0s8eSoft";
console.log(solution(str));