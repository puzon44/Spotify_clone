console.log('hehe')


let songIndex = 0;
let musicEle = new Audio('song/dark horse.mp3')
let progressBar = document.getElementById('progressBar')
let playPause = document.getElementById('playPause')
let gif = document.getElementById('gif')
let playPauseSong = Array.from(document.getElementsByClassName('playPauseSong'))
let songItem = Array.from(document.getElementsByClassName('songs'))

// musicEle.play();

let songs = [
    {songName: 'Dark Horse', filePath: 'song/dark horse.mp3', coverPath: "image/faded.jpg"},
    {songName: 'Faded', filePath: 'song/Faded.mp3', coverPath: "image/1.jpg"},
    {songName: 'Dark Horse', filePath: 'song/dark horse.mp3', coverPath: "image/2.jpg"},
    {songName: 'just the way you are', filePath: 'song/jtwya.m4a', coverPath: "image/3.jpg"},
    {songName: 'Kaise Hua', filePath: 'song/kaiseHua.mp3', coverPath: "image/4.jpg"},
    {songName: 'My life', filePath: 'song/My life.mp3', coverPath: "image/5.jpg"},
    {songName: 'Not afraid', filePath: 'song/not afraid.mp3', coverPath: "image/6.jpg"},
    {songName: 'Faded', filePath: 'song/Faded.mp3', coverPath: "image/7.jpg"}
]


songItem.forEach((element, i)=>{
    // console.log(element, i);
    // console.log(songs[i].coverPath);
    
    element.getElementsByTagName("img")[0].src = songs[i].coverPath
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
    element
    // element.getElementsByTagName("img"[0].src = songs[i].coverPath)
    // element.getElementsByClassName("musicName"[0].innerText = songs[i].songName

})


// Play/Pause

playPause.addEventListener('click', ()=>{
    if(musicEle.paused || musicEle.currentTime <= 0){
        musicEle.play() 
        playPause.classList.remove('fa-play-circle')
        playPause.classList.add('fa-pause-circle')
        gif.style.opacity = 1;
    }
    else{
        musicEle.pause() 
        playPause.classList.remove('fa-pause-circle')
        playPause.classList.add('fa-play-circle')
        gif.style.opacity = 0;
    }
})

// console.log(playPauseSong);


const playAll = ()=>{
     playPauseSong.forEach((element)=>{
        element.classList.add('fa-play-circle')
     })
}

playPauseSong.forEach((element)=>{ 
    element.addEventListener('click', (e)=>{
        playAll();
        index = parseInt(e.target.id)
        console.log(index);
        
        // console.log(index);
        
        e.target.classList.remove('fa-play-circle')
        e.target.classList.add('fa-pause-circle')
        musicEle.src = songs[index].filePath
        console.log(songs[index].filePath);
        
        musicEle.currentTime = 0
        musicEle.play()
        playPause.classList.remove('fa-play-circle')
        playPause.classList.add('fa-pause-circle')
    })
})
// element.getElementsByTagName("img")[0].src = songs[i].coverPath



musicEle.addEventListener('timeupdate', ()=>{
    console.log('timeupdate')

    // Update progressBar
    progress = parseInt((musicEle.currentTime/musicEle.duration)*100);
    // console.log(progress);
    progressBar.value = progress;
    
})

progressBar.addEventListener('change', ()=>{
    musicEle.currentTime = (progressBar.value * musicEle.duration) / 100;

})


