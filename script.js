const songIndex = 0;
const musicEle = new Audio("song/dark horse.mp3");
const progressBar = document.getElementById("progressBar");
const playPause = document.getElementById("playPause");
const gif = document.getElementById("gif");
const playPauseSong = Array.from(document.getElementsByClassName("playPauseSong"));
const songItem = Array.from(document.getElementsByClassName("songs"));
const displaySong = document.getElementById("displaySong");
const previous = document.getElementById("previous");
const next = document.getElementById("next");

const songs = [
  {
    songName: "Dark Horse",
    filePath: "song/dark horse.mp3",
    coverPath: "image/faded.jpg",
  },
  { songName: "Faded", filePath: "song/Faded.mp3", coverPath: "image/1.jpg" },
  {
    songName: "Dark Horse",
    filePath: "song/dark horse.mp3",
    coverPath: "image/2.jpg",
  },
  {
    songName: "just the way you are",
    filePath: "song/jtwya.m4a",
    coverPath: "image/3.jpg",
  },
  {
    songName: "Kaise Hua",
    filePath: "song/kaiseHua.mp3",
    coverPath: "image/4.jpg",
  },
  {
    songName: "My life",
    filePath: "song/My life.mp3",
    coverPath: "image/5.jpg",
  },
  {
    songName: "Not afraid",
    filePath: "song/not afraid.mp3",
    coverPath: "image/6.jpg",
  },
  { songName: "Faded", filePath: "song/Faded.mp3", coverPath: "image/7.jpg" },
];

// -------------------------------------------------------------------------------------
// Changing icon and Song Name in the DOM

songItem.forEach((element, i) => {
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
  element;
});

//function to manipulate main container play/pause icon after click the icon

const playAll = () => {
  playPauseSong.forEach((element) => {
    element.classList.add("fa-play-circle");
  });
};

// Manipulating play/pause button and adding song in main container div
playPauseSong.forEach((element) => {
  element.addEventListener("click", (e) => {
    playAll();
    index = parseInt(e.target.id);
    console.log(index);
    e.target.classList.remove("fa-play-circle");
    e.target.classList.add("fa-pause-circle");
    musicEle.src = songs[index].filePath;
    displaySong.innerText = `Playing: ${songs[index].songName}`;
    console.log(songs[index].filePath);
    musicEle.currentTime = 0;
    musicEle.play();
    playPause.classList.remove("fa-play-circle");
    playPause.classList.add("fa-pause-circle");
  });
});

// ---------------------------------------------------------------------------------

//Footer Changing Play/Pause icon

playPause.addEventListener("click", () => {
  if (musicEle.paused || musicEle.currentTime <= 0) {
    musicEle.play();
    playPause.classList.remove("fa-play-circle");
    playPause.classList.add("fa-pause-circle");
    gif.style.opacity = 1;
  } else {
    musicEle.pause();
    playPause.classList.remove("fa-pause-circle");
    playPause.classList.add("fa-play-circle");
    gif.style.opacity = 0;
  }
});

// Displaying the timerange of the played song

musicEle.addEventListener("timeupdate", () => {
  console.log("timeupdate");

  // Update progressBar
  progress = parseInt((musicEle.currentTime / musicEle.duration) * 100);
  // console.log(progress);
  progressBar.value = progress;
});

progressBar.addEventListener("change", () => {
  musicEle.currentTime = (progressBar.value * musicEle.duration) / 100;
});

// Manipulation in next icon

next.addEventListener("click", () => {
  if (index >= 8) {
    index = 0;
  } else {
    index += 1;
  }
  musicEle.src = songs[index].filePath;
  displaySong.innerText = `Playing: ${songs[index].songName}`;
  console.log(songs[index].filePath);
  musicEle.currentTime = 0;
  musicEle.play();
  playPause.classList.remove("fa-play-circle");
  playPause.classList.add("fa-pause-circle");
});

// Manipulation in Previous icon

previous.addEventListener("click", () => {
  if (index <= 0) {
    index = 0;
  } else {
    index -= 1;
  }
  musicEle.src = songs[index].filePath;
  displaySong.innerText = `Playing: ${songs[index].songName}`;
  console.log(songs[index].filePath);
  musicEle.currentTime = 0;
  musicEle.play();
  playPause.classList.remove("fa-play-circle");
  playPause.classList.add("fa-pause-circle");
});
