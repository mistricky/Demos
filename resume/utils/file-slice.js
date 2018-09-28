function fileSlicer(file) {
  const step = 10 * 1024;
  let dataSlices = [];

  for (let i = 0; i < file.size; i += step) {
    i + step >= file.size
      ? dataSlices.push(file.slice(i, file.size))
      : dataSlices.push(file.slice(i, i + step));
  }

  return dataSlices;
}
