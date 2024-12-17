import { FC } from "react";
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
import heroImage from "@/assets/images/hero-image.jpg";
import Image from "next/image";

const Hero: FC = () => {
  return (
    <section className="">
      <div className="container !max-w-full">
        <h1 className="text-5xl mt-40">
          Crafting digital experiences through code and creative desing
        </h1>
        <button>
          <span>
            View My Work
          </span>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth="1.5" 
            stroke="currentColor" 
            className="size-6">
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" 
            />
          </svg>
        </button>
        <button>
          Let&apos;s Talk
        </button>
      </div>
      <div>
        <Image 
          src={heroImage}
          alt="Hero Image"

        />
      </div>
    </section>
  )
};

export default Hero;
