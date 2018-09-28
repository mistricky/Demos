function buildProgress(file) {
  let progressContainer = document.createElement("div");
  let progressFrame = document.createElement("div");
  let progress = document.createElement("div");
  let pauseBtn = document.createElement("button");

  pauseBtn.innerText = "pause";
  pauseBtn.addEventListener("click", () => {
    let store = progressStore[file.name];
    store.isPause = !store.isPause;

    if (!store.isPause) {
      reader(store.fileReader, store.file, store.sliceIndex, store.dataSlices);
    }
  });

  progress.classList.add("progress");
  progressFrame.classList.add("progressFrame");
  progressFrame.appendChild(progress);
  progressContainer.appendChild(progressFrame);
  progressContainer.appendChild(pauseBtn);

  return { progressContainer, progress };
}
