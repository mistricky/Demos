let shuffle = str => {
  let arr = new Array(str.length);

  let hash = () => parseInt(Math.random() * 6);
  let push = (char, index) => {
    str.length <= index
      ? push(char, 0)
      : arr[index]
      ? push(char, index + 1)
      : (arr[index] = char);
  };

  for (let char of str) {
    let index = hash(char);

    push(char, index);
  }

  return arr.join("");
};
