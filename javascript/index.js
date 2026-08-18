const arr = [-4, -2, -1, -1, 0, 3, 5];

function SumOfThree(arr) {
    let Answer = [];

    arr.sort((a, b) => a - b);

    for (let i = 0; i < arr.length; i++) {

        let firstNum = arr[i];
        let left = i + 1;
        let right = arr.length - 1;

        while (left < right) {

            let sum = firstNum + arr[left] + arr[right];

            if (sum == 0) {
                Answer.push([firstNum, arr[left], arr[right]]);
                left++;
                right--;
            }
            else if (sum < 0) {
                left++;
            }
            else {
                right--;
            }
        }
    }

    return Answer;
}

console.log(SumOfThree(arr));