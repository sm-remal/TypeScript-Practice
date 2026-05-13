interface MediaPlayer {
    play(): void;
    pause(): void;
    stop(): void;
}

class MusicPlayer implements MediaPlayer {
    play() {
        console.log("Playing Music");
    }
    pause() {
        console.log("Pause Music");
    }
    stop() {
        console.log("Stop Music");
    }
}

const MusicInstance = new MusicPlayer();

MusicInstance.stop();