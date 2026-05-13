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


// Abstraction - class
abstract class MediaPlayer1 {
    abstract play1(): void;
    abstract pause1(): void;
    abstract stop1(): void;
}

class MusicPlayer1 extends MediaPlayer1 {
    play1(): void {
        console.log("Music Play...");
    }
    pause1(): void {
        console.log("Music Pause...");
    }
    stop1(): void {
        console.log("Music Stop...");
    }
}

const MusicInstance1 = new MusicPlayer1();

MusicInstance1.play1();