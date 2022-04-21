function solution(s, t) {
    let answer = [];

    for (let i = 0; i < s.length; i++) { // 각 문자들을 하나씩 탐색
        let arr = []; // 여러개의 t와의 거리를 담을 배열
        for (let j = s.length - 1; j >= 0; j--) { // 문자열의 맨 끝부터 탐색
            if (s[j] === t) arr.push(Math.abs(j - i)); // 여러 t와의 거리값을 arr에 넣어줌
        }
        answer.push(Math.min(...arr)); // arr에서 최솟값을 answer에 넣어줌
    }

    return answer;
}

let str = "teachermode";
let letter = "e";
console.log(solution(str, letter));