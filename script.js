// A: ให้สร้าง function ในการหาค่ามากที่สุด จาก array ที่ input มา โดยห้ามใช้ sort function

function max(array) {
  if (array.length === 0) {
    return null;
  }

  let max = array[0];

  for (let i = 1; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }

  return max;
}

// Example A input and output:

const example1A = [-1, 4, 30, 2, -4];
const example2A = [3, 4, 5, 6, 7];
const maximum1A = max(example1A);
const maximum2A = max(example2A);
console.log("Example-1-A : ", maximum1A, "Example2A : ", maximum2A);

// Bonus จากข้อ A (Optional): ให้หาค่ามากที่สุดลำดับที่ 2

function secondMax(array) {
  if (array.length < 2) {
    return null;
  }

  let max = array[0];
  let secondMax = array[1];

  if (secondMax > max) {
    [max, secondMax] = [secondMax, max];
  }

  for (let i = 2; i < array.length; i++) {
    if (array[i] > max) {
      secondMax = max;
      max = array[i];
    } else if (array[i] === max) {
      secondMax = array[i];
    } else if (array[i] > secondMax && arr[i] < max) {
      secondMax = arr[i];
    }
  }

  return secondMax;
}
// Example A Bonus input and output:

const example1ABonus = [-1, 4, 30, 2, -4];
const example2ABonus = [3, 4, 5, 6, 7];
const example3ABonus = [3, 4, 5, 6, 7, 7];
const secondMaximum1ABonus = secondMax(example1ABonus);
const secondMaximum2ABonus = secondMax(example2ABonus);
const secondMaximum3ABonus = secondMax(example3ABonus);
console.log(
  "Example-1-A-Bonus  : ",
  secondMaximum1ABonus,
  "Example-2-A-Bonus  : ",
  secondMaximum2ABonus,
  "Example-3-A-Bonus  : ",
  secondMaximum3ABonus
);

// B: สร้าง function รับ array ของตัวเลขจำนวนเต็ม และจำนวนเต็ม k แล้วให้หาผลรวมมากที่สุดของจำนวนที่ติดกัน k ตัว

function findMaxSum(array, k) {
  const n = array.length;

  if (k > n || k <= 0) {
    return null;
  }

  let maxSum = 0;
  let currentSum = 0;

  for (let i = 0; i < k; i++) {
    currentSum += array[i];
  }

  maxSum = currentSum;

  for (let i = k; i < n; i++) {
    currentSum = currentSum + array[i] - array[i - k];
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}
// Example B input and output:

const example1B = [1, 4, -1, 2, 3];
const example2B = [1, 4, -1, 2, 3];
const sum1B = findMaxSum(example1B, 3);
const sum2B = findMaxSum(example2B, 2);
console.log("Example-1-B :", sum1B, "Example-2-B :", sum2B);
