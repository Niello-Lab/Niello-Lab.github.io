
var songs =["Niello - Broken_Feelings.mp3",
            "niello - Bubble_Trapp.mp3",
            "niello - David_Kramer.mp3",
            "niello - The_Reaper.mp3",
            "niello - Lucy.mp3",
            "niello - Muthumbo.mp3",
            "niello - Run.mp3",
            "niello - kasi_Lifestyle.mp3",
            "niello - Still_Kasi.mp3",
            "niello - Party.mp3",
            "niello - Thunder.mp3",
            "niello - Count_on_Me.mp3",
            "niello - No _Mess",
            "niello - lets_Rap.mp3"];

var songTitle = document.getElementById('songTitle');
var songSlider = document.getElementById('songSlider');
var currentTime = document.getElementById('currentTime');
var duration = document.getElementById('duration');
var volumeSlider = document.getElementById('volumeSlider');
var nextSongTitle = document.getElementById('songTitle');
var afterSongTitle = document.getElementById('songTitle');

var song = new Audio();
var currentSong = 0;

window.onload = loadSong;
function loadSong () {
    song.src = "songs/" + songs[currentSong];
    songTitle.textContent = (currentSong + 1) + "." + songs[currentSong];
    nextSongTitle.InnerHTML = "<b>Next beat: </b>" + songs[currentSong + 1 % song.length];
    afterSongTitle.InnerHTML = "<b>After: </b>" + songs[currentSong + 2 % song.length];
    song.volume = volumeSlider.value;
    song.play();
    setTimeout(showDuration, 1000);
}

setInterval(updateSongSlider, 1000);

function updateSongSlider () {
    var c = Math.round(song.currentTime);
    songSlider.value = c;
    currentTime.textContent = convertTime(c);
    if(song.ended){
        next();
    }
}

function convertTime (secs) {
    var min = Math.floor(secs/60);
    var sec = secs % 60;
    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;
    return (min + ":" + sec);
}

function showDuration () {
    var d = Math.floor(song.duration);
    songSlider.setAttribute("max", d);
    duration.textContent = convertTime(d);
}
function PlayOrPauseSong (img) {
    if(song.paused){
        song.play();
        img.src = "icons/pause_rest.png"
    }else{
        song.paused();
        img.src = "icons/play_down.png"
    }
}
function next(){
    currentSong = currentSong + 1  % songs.length;
    loadSong();
}
function previous () {
    currentSong--;
    currentSong = (currentSong < 0) ? song.length - 1: currentSong;
    loadSong();
}
function seekSong() {
    song.currentTime = songSlider.value;
    currentTime.textContent = convertTime(song.currentTime);

    function adjustVolume () {
        song.volume = volumeSlider.value;
    }
}





<div class="audioplayer-container">
                            <div class="audioplayer-logo">
                                <img src="img/nnnn.png" class="niello-logo" />
                            </div>
                            <div class="player">
                                <div id="songTitle" class="song-title">My song title will go here</div>
                                <input id="songSlider" class="song-slider" type="range" min="0" step="1" onchange="seekSong()" />
                                <div>
                                    <div id="currentTime" class="current-time">00:00</div>
                                    <div id="duration" class="duration">00:00</div>
                                </div>
                                <div class="controllers">
                                    <img src="icons/prev_hov.png" width="30px" onclick="previous();" />
                                    <img src="icons/pause_hov.png" width="40px" onclick="PlayOrPauseSong(this);" />
                                    <img src="icons/next_down.png" width="30px" onclick="next();" />
                                    <input id="volumeSlider" class="volume-slider" type="range" min="0" max="1" step="0.01"
                                    onChange="adjustVolume()" />
                                </div>
                                <div id="nextSongTitle" class="song-title"><b>Next Beat :</b>Next beat title goes here...</div>
                                <div id="afterSongTitle" class="song-title"><b>after :</b>Next beat title goes here...</div>      
                                </div>
                            </div>
                        </div>
