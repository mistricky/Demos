function buildFileReader(progress, file, dataSlices) {
  let fileReader = new FileReader();
  let store =
    progressStore[file.name] ||
    (progressStore[file.name] = {
      totalSize: file.size,
      loadedSize: 0,
      sliceIndex: 0,
      file,
      fileReader,
      dataSlices,
      isPause: false
    });

  fileReader.addEventListener("progress", e => {
    store.loadedSize += e.loaded;
    progress.style.width = (store.loadedSize / store.totalSize) * 100 + "%";
  });

  fileReader.addEventListener("error", err => {
    throw err;
  });

  return fileReader;
}
