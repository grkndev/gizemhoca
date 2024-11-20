"use client";
import { ConfettiSideCannons } from "@/components/Confetti";
import AnimatedGradientText from "@/components/ui/animated-gradient-text";
import SparklesText from "@/components/ui/sparkles-text";
import TypingAnimation from "@/components/ui/typing-animation";
import VoicePlayer from "@/components/voice-player";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [hasClicked, setHasClicked] = useState(false);
  return (
    <main className="w-full h-full flex justify-between items-center flex-col p-8">
      <div className="flex flex-col items-center justify-center gap-4 mt-20">
        <SparklesText
          className="text-[6rem] text-center font-bold "
          text="Gizem Hocamm"
        />
        <TypingAnimation
          className="font-sans text-xl text-wrap w-[90%] md:w-[45%] text-center"
          duration={50}
          text="Sizin gibi bir öğretmenim olduğu için o kadar şanslı ve o kadar
          mutluyum ki. Sıcak yüreğiniz, daima öğretmeye merağınız, güzel
          bakışlarınız, şahane sesiniz, dik duruşunuz say say bitmez.
          Tarihin en iyi öğretmeni :)"
        />
      </div>
      <div className="mt-32  flex flex-col w-full ">
        <AnimatedGradientText>
          🎉 <hr className="mx-2 h-4 w-px shrink-0 bg-gray-300" />{" "}
          <span
            className={cn(
              `inline font-[inter] text-xl animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
            )}
          >
            Küçük bir hediye
          </span>
          <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
        </AnimatedGradientText>
        <div className=" flex flex-col xl:flex-row w-full items-center justify-between bottom-0 ">
          <Image
            src="/cloud.png"
            className="w-[40rem]"
            width={3000}
            height={2000}
            alt="Cloud"
          />

          {hasClicked ? (
            <VoicePlayer />
          ) : (
            <ConfettiSideCannons click={setHasClicked} />
          )}

          <Image
            src="/cloud.png"
            className="w-[40rem]"
            width={3000}
            height={2000}
            alt="Cloud2"
          />
        </div>
      </div>
      <div className="mt-16 flex flex-col gap-2 items-center justify-center">
        <span className="font-[inter] ">
          Bu web sitesi özel web sunucularında barındırılmaktadır böylelikle sonsuza
          kadar aktif kalacaktır. Özlediğinizde, kötü hissettiğinizde, moral
          gerektiğinde her zaman ulaşabilirsiniz.
        </span>
        <span className="font-[inter] flex flex-row gap-1 text-white/50">
          <Link href={"https://grkn.dev?ref=amirim.grkn.dev"} target="_blank">
            GrknDev
          </Link>
          © 2024. All Rights Reserved
        </span>
      </div>
    </main>
  );
}
