"use client";

import { useState, useRef, useEffect } from "react";
import { Play, Pause, Download } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function VoicePlayer({
  audioSrc = "https://cdnqrmenu.s3.eu-west-1.amazonaws.com/grkn/amirim/Parla.mp3",
  imageSrc = "https://cdnqrmenu.s3.eu-west-1.amazonaws.com/grkn/amirim/2.jpeg",
}: {
  audioSrc?: string;
  imageSrc?: string;
}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio(audioSrc);
    audioRef.current.addEventListener("loadedmetadata", () => {
      setDuration(audioRef.current?.duration || 0);
    });
    audioRef.current.addEventListener("timeupdate", () => {
      setCurrentTime(audioRef.current?.currentTime || 0);
    });
    audioRef.current.addEventListener("ended", () => {
      togglePlayPause();
      setCurrentTime(0);
      setDuration(audioRef.current?.duration || 0);
      if (audioRef.current) {
        audioRef.current.currentTime = 0;
      }
    });
    return () => {
      audioRef.current?.pause();
      audioRef.current?.removeEventListener("loadedmetadata", () => {});
      audioRef.current?.removeEventListener("timeupdate", () => {});
      audioRef.current?.removeEventListener("ended", () => {});
    };
  }, [audioSrc]);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeChange = (newTime: number[]) => {
    const timeValue = newTime[0];
    setCurrentTime(timeValue);
    if (audioRef.current) {
      audioRef.current.currentTime = timeValue;
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className="flex flex-col items-center mx-8 p-4 w-full rounded-lg shadow-md xl:w-80 aspect-square  bg-gradient-to-br from-pink-300 to-pink-700">
      <Image
        src={imageSrc}
        alt="Audio thumbnail"
        width={200}
        height={200}
        className="rounded-md mb-4"
      />
      <div className="w-full space-y-2 mb-4 items-center flex flex-col">
        <span className="font-sans text-base font-semibold">Parla Amirim</span>
        <Slider
          value={[currentTime]}
          max={duration}
          step={0.1}
          onValueChange={handleTimeChange}
          aria-label="Ses ilerleme çubuğu"
          className="w-full"
        />
        <div className="flex justify-between w-full text-xs text-muted-foreground">
          <span className="font-sans text-white">{formatTime(currentTime)}</span>
          <span className="font-sans text-white">{formatTime(duration)}</span>
        </div>
      </div>
      <div className="flex flex-col gap-2 w-full">
        <Button
          onClick={togglePlayPause}
          variant="outline"
          size="icon"
          className="w-full text-black font-sans"
          aria-label={isPlaying ? "Duraklat" : "Oynat"}
        >
          {isPlaying ? (
            <Pause className="h-4 w-4" />
          ) : (
            <Play className="h-4 w-4" />
          )}
        </Button>
        <Button
          onClick={() => {
            //Download audio file
            const a = document.createElement("a");
            a.href = "/parla.mp3";
            a.download = "oretmenler_gununuz_kutlu_olsun_amirim_o7.mp3";
            a.click();
          }}
          className="w-full"
        >
          <Download />
        </Button>
      </div>
    </div>
  );
}
