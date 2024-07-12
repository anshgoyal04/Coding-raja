const musicContainer = document.querySelector('.player');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const shuffleBtn = document.getElementById('shuffle');
const repeatBtn = document.getElementById('repeat');
const audio = new Audio();
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');
const volumeSlider = document.getElementById('volume');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const cover = document.getElementById('cover');
const playlist = document.getElementById('playlist');

let isPlaying = false;
let isShuffle = false;
let isRepeat = false;
let currentIndex = 0;

const songs = [
    {
        name: 'song1',
        title: 'Song 1',
        artist: 'Artist 1',
        cover: 'images/cover1.jpg',
        background: 'images/background1.jpg'
    },
    {
        name: 'song2',
        title: 'Song 2',
        artist: 'Artist 2',
        cover: 'images/cover2.jpg',
        background: 'images/background2.jpg'
    },
    // Add more songs here
];

function loadSong(song) {
    title.innerText = song.title;
    artist.innerText = song.artist;
    cover.style.backgroundImage = `url(${song.cover})`;
    audio.src = `music/${song.name}.mp3`;
    document.body.style.backgroundImage = `url(${song.background})`;
}

function playSong() {
    musicContainer.classList.add('play');
    playBtn.innerText = 'Pause';
    audio.play();
    isPlaying = true;
}

function pauseSong() {
    musicContainer.classList.remove('play');
    playBtn.innerText = 'Play';
    audio.pause();
    isPlaying = false;
}

function prevSong() {
    currentIndex = (currentIndex - 1 + songs.length) % songs.length;
    loadSong(songs[currentIndex]);
    playSong();
}

function nextSong() {
    currentIndex = (currentIndex + 1) % songs.length;
    loadSong(songs[currentIndex]);
    playSong();
}

function updateProgress(e) {
    const { duration, currentTime } = e.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;
}

function setProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;
    audio.currentTime = (clickX / width) * duration;
}

function setVolume(e) {
    audio.volume = e.target.value;
}

function toggleShuffle() {
    isShuffle = !isShuffle;
    shuffleBtn.classList.toggle('active', isShuffle);
}

function toggleRepeat() {
    isRepeat = !isRepeat;
    repeatBtn.classList.toggle('active', isRepeat);
}

function handleEnd() {
    if (isRepeat) {
        playSong();
    } else if (isShuffle) {
        currentIndex = Math.floor(Math.random() * songs.length);
        loadSong(songs[currentIndex]);
        playSong();
    } else {
        nextSong();
    }
}

playBtn.addEventListener('click', () => (isPlaying ? pauseSong() : playSong()));
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);
audio.addEventListener('timeupdate', updateProgress);
progressContainer.addEventListener('click', setProgress);
volumeSlider.addEventListener('input', setVolume);
shuffleBtn.addEventListener('click', toggleShuffle);
repeatBtn.addEventListener('click', toggleRepeat);
audio.addEventListener('ended', handleEnd);

songs.forEach((song, index) => {
    const item = document.createElement('div');
    item.classList.add('playlist-item');
    item.innerText = song.title;
    item.addEventListener('click', () => {
        currentIndex = index;
        loadSong(songs[currentIndex]);
        playSong();
    });
    playlist.appendChild(item);
});

// Load initial song
loadSong(songs[currentIndex]);
