import {
  ArrowUpRight,
  Code,
  CodeSquare,
  CodeXml,
  Hand,
  Instagram,
  LinkedinIcon,
  Twitter,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
gsap.registerPlugin(ScrollTrigger, SplitText);
import { useGSAP } from "@gsap/react";
import "./mask.css";
import { useEffect, useState } from "react";
import { Slidr } from "./Slidr";

function Body() {
  const [mouesIn, setMouseIn] = useState(false);

  useEffect(() => {
    console.log(mouesIn);

    gsap.to(".big-image", {
      opacity: mouesIn ? 1 : 0,
      duration: 0.3,
      ease: "power2.out",
    });
  }, [mouesIn]);

  useGSAP(() => {
    // const mouseEntrs=mouesIn
    const maskTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#zoom",
        scrub: true,
        start: "top top",
        pin: true,
      },
    });

    maskTimeline.to(".hero-img", {
      scale: 1.3,
      maskPosition: "center",
      maskSize: "400%",
      ease: "power1.inOut",
    });

    const split = new SplitText(".textSplt", {
      type: "chars, words",
      wordsClass: "splitWords",
    });

    gsap.from(split.chars, {
      y: 100,
      autoAlpha: 0,
      stagger: 0.05,
    });
    gsap.to(".hand", {
      rotate: 45,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });
    //   gsap.to(".text-fade", {
    //     opacity: 1,
    //     ease: "power1.in",
    //     translateY: 0,
    //     duration: 1,
    //   });
    // }, []);

    // const Tl=gsap.timeline({
    //   repeat:-1, yoyo:true
  });

  return (
    <>
      <div className="relative h-screen w-full bg-black">
        <div className="absolute w-full bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]">
          <div className="w-full h-full flex flex-col items-center justify-center text-white space-y-8">
            <div className=" flex flex-col items-center space-y-2">
              <div className="text-5xl text-fade  space-x-2 flex items-center">
                <div className="hand -mt-7">👋</div>
                <div className="flex items-center space-y-2 ">
                  <div>
                    <span className="italic textSplt font-light text-[#b0b0b0] font-serif">
                      Adedipupo Here
                    </span>
                    <img
                      id="preview-img"
                      onMouseEnter={
                         () => {setMouseIn(true)}
                        
                      }
                      onMouseLeave={() => setMouseIn(false)}
                      src="/WhatsApp Image 2025-07-21 at 11.06.03.jpeg"
                      className="size-48 right-48 opacity-0 big-image translate-x-16 -translate-y-10 absolute bg-white border-2 rounded border-[#e7e7e7]"
                    />
                  </div>
                  <img
                    src="/WhatsApp Image 2025-07-21 at 11.06.03.jpeg"
                    onMouseEnter={() => setMouseIn(!mouesIn)}
                      onMouseLeave={() => setMouseIn(!mouesIn)}
                    className="size-12 bg-white cursor-pointer border-2 rounded border-[#e7e7e7]"
                  />
                  ,
                </div>
              </div>
              <div className="flex justify-center items-center">
                <p className="text-5xl flex items-center">
                  A Front-End
                  <span>
                    <CodeXml />
                    <img
                      src="Tailwind_CSS_Logo.svg.png"
                      className="w-4 h-3 tail opacity-0 translate-y-5"
                    />
                  </span>
                  Developer
                </p>
              </div>
            </div>
            <p className="text-center">
              I have 3 years of experience working on useful and mindful <br />{" "}
              projcts together with startups and known brands
            </p>
            <div className="space-x-2">
              <button className="border-[1px] p-2 px-5 rounded-full">
                Resume
              </button>
              <button className="border-[1px] p-2 px-5 rounded-full">
                Portfolio
              </button>
            </div>
            {/* social links */}
            <div className="flex space-x-4">
              <a href="https://x.com/adedipupolanre1?s=11">
                <Twitter />
              </a>
              <a href="https://www.linkedin.com/in/adedipupo-adeagbo-48282a33b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
                <LinkedinIcon />
              </a>
              <Instagram />
            </div>
          </div>
        </div>
      </div>
      <Slidr/>
      <div className="bg-black px-10">
        <div className="text-white w-full flex flex-col items-center">
          <h1 className="text-5xl textAnime  text-center">Selected Work</h1>
          <div className="flex items-center">
            <p>See More</p>
            <button className="bg-white rounded-full">
              <ArrowUpRight strokeWidth={0.5} color="black" />
            </button>
          </div>
        </div>
        <div className="w-full items-center flex justify-center">
          <div className="grid grid-cols-3 text-white w-[70%] h-[100vh] grid-rows-2 gap-2">
            <div className="bg-[url(stor.png)] relative flex justify-center items-end bg-cover bg-center rounded-lg">
              <div className="absolute inset-0 bg-black/40 z-0" />
              <h1 className="z-10 relative text-3xl">ONLINE STORE</h1>
            </div>
            <div className="bg-cyan-300 rounded-lg"></div>
            <div className="bg-cyan-300 rounded-lg"></div>
            <div className="bg-cyan-300 rounded-lg"></div>
            <div className="bg-cyan-300 rounded-lg"></div>
            <div className="bg-cyan-300 rounded-lg"></div>
          </div>
        </div>
      </div>
      <div id="zoom">
        <div className="w-full bg-black flex items-center justify-center">
          <div className="flex-center flex-col min-h-dvh p-5 relative radial-gradient">
            <div className="md:w-[60vw] w-full h-[50vh] md:h-[70vh] rounded-4xl overflow-hidden absolute top-0 md:top-1/2 md:-translate-y-1/2 left-1/2 -translate-x-1/2">
              <div className="w-full">
                <img
                  className="hero-img"
                  src="annie-spratt-hCb3lIB8L8E-unsplash.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Body;
