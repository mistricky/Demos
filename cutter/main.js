const image = document.querySelector(".shade img");

const PERCENT = 0.8;

let width = `${image.naturalWidth * PERCENT}px`;
let height = `${image.naturalHeight * PERCENT}px`;

image.style.height = height;
image.style.width = width;
