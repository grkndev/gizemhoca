"use client";
import confetti from "canvas-confetti";

import { Button } from "@/components/ui/button";
import { setTimeout } from "timers/promises";

export function ConfettiSideCannons({
  click,
}: {
  click: (hasClicked: boolean) => void;
}) {
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
    <div className="relative">
      <Button
        
        className="font-sans w-96 h-96"
        onClick={handleClick}
      >
        HEDİYEYİ AÇMAK İÇİN BURAYA BASIN
      </Button>
    </div>
  );
}
