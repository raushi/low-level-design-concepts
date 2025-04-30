/*
✅ Adapter Pattern – Overview
    Intent:
        Allow incompatible interfaces to work together by introducing an adapter that bridges the gap.

    🧩 Real-World Analogy
        Imagine a laptop charger with a USB-C connector, but the wall socket only accepts a 3-pin plug. 
        You use an adapter that converts the 3-pin socket to USB-C. 
        The charger and wall socket are incompatible directly, but the adapter makes them compatible.
*/

// Suppose we have a legacy audio player that only supports .mp3 files, 
// but we now want to support .mp4 and .vlc using a new media library.

interface MediaPlayer {
    play(audioType: string, fileName: string): void;
}

class AdvancedMediaPlayer {
    playVlc(fileName: string): void {
        console.log(`Playing vlc file: ${fileName}`);
    }

    playMp4(fileName: string): void {
        console.log(`Playing mp4 file: ${fileName}`);
    }
}

class MediaAdapter implements MediaPlayer {
    private advancedPlayer: AdvancedMediaPlayer = new AdvancedMediaPlayer();

    play(audioType: string, fileName: string): void {
        if (audioType === "vlc") {
            this.advancedPlayer.playVlc(fileName);
        } else if (audioType === "mp4") {
            this.advancedPlayer.playMp4(fileName);
        } else {
            console.log(`Format not supported: ${audioType}`);
        }
    }
}

class AudioPlayer implements MediaPlayer {
    private adapter?: MediaAdapter;

    play(audioType: string, fileName: string): void {
        if (audioType === "mp3") {
            console.log(`Playing mp3 file: ${fileName}`);
        } else if (audioType === "vlc" || audioType === "mp4") {
            this.adapter = new MediaAdapter();
            this.adapter.play(audioType, fileName);
        } else {
            console.log(`Invalid media type: ${audioType}`);
        }
    }
}

const player = new AudioPlayer();

player.play("mp3", "song.mp3");
player.play("mp4", "video.mp4");
player.play("vlc", "clip.vlc");
player.play("avi", "movie.avi");
