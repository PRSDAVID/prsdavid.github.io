const images = [
  "0.jpeg",
  "1.jpeg",
  "2.jpeg",
  "3.jpeg",
  "4.jpeg",
  "5.jpeg",
  "6.jpeg",
  "7.jpeg",
  "8.jpeg",
  "9.jpeg",
];

const todaysImage = images[Math.floor(Math.random() * images.length)];

document.body.style.backgroundImage = `url(img/${todaysImage})`;

/*
const bgImage = document.createElement("img");
bgImage.src = `img/${todaysImage}`;

document.body.append(bgImage);
*/