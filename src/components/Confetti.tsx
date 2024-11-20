"use client";
import confetti from "canvas-confetti";
// import Lottie from "react-lottie";
import { useLottie } from "lottie-react";
import GiftBoxAnimation from "@/components/giftbox.json";
import { Button } from "@/components/ui/button";
import { setTimeout } from "timers/promises";

export function ConfettiSideCannons({
  click,
}: {
  click: (hasClicked: boolean) => void;
}) {
  const options = {
    loop: true,
    autoplay: true,
    animationData: GiftBoxAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const { View } = useLottie(options);

  const handleClick = () => {
    const end = Date.now() + 3 * 1000; // 3 seconds
    const colors = ["#c4de04", "#7d00f2", "#c4de04", "#f8deb1"];

    const frame = () => {
      if (Date.now() > end) return;

      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        startVelocity: 60,
        origin: { x: 0, y: 0.5 },
        colors: colors,
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        startVelocity: 60,
        origin: { x: 1, y: 0.5 },
        colors: colors,
      });

      requestAnimationFrame(frame);
      click(true);
    };

    frame();
  };

  return (
    <div className="cursor-pointer font-sans w-96 h-96 items-center justify-center flex flex-col" onClick={handleClick}>
      <Button className="bg-gradient-to-br from-pink-800 to-violet-950">HEDİYEYİ AÇMAK İÇİN BURAYA BASIN</Button>
      <div className="absolute w-[400px] h-[400px] -z-10">{View}</div>
    </div>
  );
}
