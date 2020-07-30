export default class AudioPlayer {
    constructor(selector = '.audioPlayer', audio = []) {
        this.playerElem = document.querySelector(selector);
        this.audio = audio;
        this.currentAudio = null;
        this.createPlayerElements();
    }   

    createPlayerElements() {
        this.audioElem = document.createElement('audio');
        const playListElem = document.createElement('div');
        playListElem.classList.add('playlist');

        this.playerElem.appendChild(this.audioElem);
        this.playerElem.appendChild(playListElem);

        this.createPlaylistElements(play);
    }

    createPlayListElements(playListElem) {
        this.audio.forEach(audio => {
            const audioItem = document.createElement('a');
            audioItem.href = audio.url;
            audioItem.InnerHTML = `<i class="fa fa-play"></>${audio.name}`

            playListElem.appendChild(audioItem);
        });
    }
}