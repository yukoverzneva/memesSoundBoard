const sounds = [
  {
    tag: "advokat",
    url: "https://memepedia.ru/wp-content/uploads/2017/05/%D0%B0%D0%B4%D0%B2%D0%BE%D0%BA%D0%B0%D1%82.jpg",
  },
  {
    tag: "dirijabl",
    url: "https://memepedia.ru/wp-content/uploads/2017/04/%D0%B4%D0%B8%D1%80%D0%B8%D0%B6%D0%B0%D0%B1%D0%BB%D1%8C-%D0%B2%D0%B8%D0%B4%D0%B5%D0%BE-4.jpg",
  },
  {
    tag: "lomay",
    url: "https://memepedia.ru/wp-content/uploads/2017/04/%D0%BB%D0%BE%D0%BC%D0%B0%D0%B9-%D0%BC%D0%B5%D0%BD%D1%8F-%D0%BE%D1%80%D0%B8%D0%B3%D0%B8%D0%BD%D0%B0%D0%BB.png",
  },
  {
    tag: "povar",
    url: "https://icdn.lenta.ru/images/2016/08/26/15/20160826150328423/preview_ea25b5838972ccde026cf3c2e6487fd7.jpg",
  },
  {
    tag: "druzhko",
    url: "https://www.m24.ru/b/d/nBkSUhL2jVchnMqwPqzZvc62gYT28pj20yPFnuWR9mOBdDebBizCnTY8qdJf6ReJ58vU9meMMok3Ee2nhSR6ISeO9G1N_wjJ=vLJxTepwyqJU8UbUmDcPmQ.jpg",
  },
  {
    tag: "startuem",
    url: "https://vsememy.ru/wp-content/uploads/2022/07/ed348b75e4e5be836c68d887c96382c5.jpg",
  },
  {
    tag: "litvinkov",
    url: "https://businessman.ru/static/img/n/1/5/4/6/6/3/0/i/1546630.jpg",
  },
  {
    tag: "yaz",
    url: "https://www.meme-arsenal.com/memes/a1e8d82f403d01bdf692988544ee79fa.jpg",
  },
];
sounds.forEach((sound) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");
  btn.style.backgroundSize = "cover";
  btn.style.backgroundRepeat = "no-repeat";
  btn.style.backgroundPosition = "center";
  btn.style.backgroundImage = `url(${sound.url})`;
  btn.addEventListener("click", () => {
    stopSongs();
    document.getElementById(sound.tag).play();
  });

  document.getElementById("buttons").appendChild(btn);
});
function stopSongs() {
  sounds.forEach((sound) => {
    const song = document.getElementById(sound.tag);
    song.pause();
    song.currentTime = 0;
  });
}
const pics = [
  "https://memepedia.ru/wp-content/uploads/2017/05/%D0%B0%D0%B4%D0%B2%D0%BE%D0%BA%D0%B0%D1%82.jpg",
  "https://memepedia.ru/wp-content/uploads/2017/04/%D0%B4%D0%B8%D1%80%D0%B8%D0%B6%D0%B0%D0%B1%D0%BB%D1%8C-%D0%B2%D0%B8%D0%B4%D0%B5%D0%BE-4.jpg",
  "https://memepedia.ru/wp-content/uploads/2017/04/%D0%BB%D0%BE%D0%BC%D0%B0%D0%B9-%D0%BC%D0%B5%D0%BD%D1%8F-%D0%BE%D1%80%D0%B8%D0%B3%D0%B8%D0%BD%D0%B0%D0%BB.png",
  "https://icdn.lenta.ru/images/2016/08/26/15/20160826150328423/preview_ea25b5838972ccde026cf3c2e6487fd7.jpg",
  "https://www.m24.ru/b/d/nBkSUhL2jVchnMqwPqzZvc62gYT28pj20yPFnuWR9mOBdDebBizCnTY8qdJf6ReJ58vU9meMMok3Ee2nhSR6ISeO9G1N_wjJ=vLJxTepwyqJU8UbUmDcPmQ.jpg",
  "https://vsememy.ru/wp-content/uploads/2022/07/ed348b75e4e5be836c68d887c96382c5.jpg",
  "https://businessman.ru/static/img/n/1/5/4/6/6/3/0/i/1546630.jpg",
  "https://www.meme-arsenal.com/memes/a1e8d82f403d01bdf692988544ee79fa.jpg",
];
// pics.forEach((pic) => {
//   const btn = document.createElement("button");
//   btn.classList.add("btn");
//   btn.style.backgroundImage = `url(${pic})`;
//   document.getElementById("buttons").appendChild(btn);
// });
