function loadend(fileReader) {
  return new Promise((resolve, _reject) => {
    fileReader.addEventListener("loadend", e => resolve(e));
  });
}

async function startRead(fileReader, file) {
  fileReader.readAsDataURL(file);
  await loadend(fileReader);
}

async function reader(fileReader, file, startSlice, dataSlices) {
  let store = progressStore[file.name];

  for (let i = startSlice; i < dataSlices.length; i++) {
    if (store.isPause) {
      break;
    }

    await startRead(fileReader, dataSlices[i]);
    store.sliceIndex = i;
  }
}
