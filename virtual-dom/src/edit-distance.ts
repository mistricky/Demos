type CharMatrix = Array<Array<number>>;

function min(arr: number[]): number {
  let minIndex = 0;

  for (let index of Object.keys(arr)) {
    if (!arr[+index + 1]) {
      break;
    }

    if (arr[+index] < arr[minIndex]) {
      minIndex = +index;
    }
  }

  return minIndex;
}

export function ReckonEditDistance(
  originStr: string,
  targetStr: string
): number {
  let originLen = originStr.length;
  let targetLen = targetStr.length;

  let matrix: CharMatrix = new Array(originLen + 1)
    .fill(0)
    .map(() => new Array(targetLen + 1).fill(0));
  let step = 0;

  for (let index of Object.keys(originStr)) {
    matrix[+index + 1][0] = +index + 1;
  }

  for (let index in Object.keys(targetStr)) {
    matrix[0][+index + 1] = +index + 1;
  }

  for (let i = 1; i <= originLen; i++) {
    for (let j = 1; j <= targetLen; j++) {
      originStr[i - 1] === targetStr[j - 1] ? (step = 0) : (step = 1);

      let t = [
        matrix[i - 1][j - 1] + step,
        matrix[i - 1][j] + 1,
        matrix[i][j - 1] + 1
      ];
      let minIndex = min(t);

      matrix[i][j] = t[minIndex];

      if (step === 0) {
        continue;
      }

      console.info(minIndex);

      switch (minIndex) {
        case 0:
          // console.info(`${i - 1} -> ${targetStr.charAt(j - 1)}`);
          break;
        case 1:
          console.info(originStr[i - 1], targetStr[j - 1]);
          // console.info();
          break;
        case 2:
          // console.info();
          break;
      }
    }
  }

  return matrix[originLen][targetLen];
}

console.info(ReckonEditDistance("hello", "world"));
