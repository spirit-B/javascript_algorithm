function solution(arr) {
    let answer = Number.MIN_SAFE_INTEGER;
    let temp = 0;

    for (let i of arr) {
        let num_arr = i.toString().split("");
        let sum = 0;
        for (let j of num_arr) {
            j = Number(j);
            sum += j;
        }
        if (sum > temp) {
            temp = sum;
            answer = i;
        } else if (sum === temp) {
            if (answer < i) answer = i;
        }
    }
    return answer;
}

let arr = [128, 460, 603, 40, 521, 137, 123];
console.log(solution(arr));
