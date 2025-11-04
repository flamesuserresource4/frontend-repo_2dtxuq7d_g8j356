import React, { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX, Play, Pause } from 'lucide-react';

export default function LofiAudio() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const [volume, setVolume] = useState(0.6);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = volume;
  }, [volume]);

  const togglePlay = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    try {
      if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
      } else {
        const res = await audio.play();
        if (res !== undefined) await res;
        setIsPlaying(true);
      }
    } catch (e) {
      // Autoplay may be blocked until user interaction
    }
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.muted = !audio.muted;
    setMuted(audio.muted);
  };

  return (
    <div className="pointer-events-auto fixed bottom-5 left-5 z-50 flex items-center gap-2 rounded-full border border-white/15 bg-black/60 px-3 py-2 text-white backdrop-blur">
      <audio ref={audioRef} loop muted={muted}>
        <source src="https://cdn.pixabay.com/download/audio/2022/10/09/audio_0e9f19c0b9.mp3?filename=warm-lofi-ambient-124572.mp3" type="audio/mpeg" />
        <source src="https://cdn.pixabay.com/download/audio/2022/03/15/audio_06f1b4a7a1.mp3?filename=lofi-study-112191.mp3" type="audio/mpeg" />
      </audio>
      <button
        onClick={togglePlay}
        className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10 hover:bg-white/15"
        aria-label={isPlaying ? 'Pause lofi' : 'Play lofi'}
      >
        {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
      </button>
      <button
        onClick={toggleMute}
        className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10 hover:bg-white/15"
        aria-label={muted ? 'Unmute' : 'Mute'}
      >
        {muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
      </button>
      <input
        type="range"
        min={0}
        max={1}
        step={0.01}
        value={volume}
        onChange={(e) => setVolume(parseFloat(e.target.value))}
        className="h-1 w-24 cursor-pointer accent-white/80"
        aria-label="Volume"
      />
      <span className="ml-1 hidden text-xs text-white/70 sm:block">Lo-fi</span>
    </div>
  );
}
