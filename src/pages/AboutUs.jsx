import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, SplitText } from "gsap/all";
gsap.registerPlugin(ScrollTrigger, SplitText);

export default function () {
  useGSAP(() => {

    const textAnim=new SplitText(".animText", {type: 'chars words'})

    gsap.from(textAnim.words, {
      y:100,
      stagger:0.05
    })

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".art",
        scrub: 1.5,
        start: "top top",
        end: "bottom center",
        pin: true,
      },
    });

    tl.to(".maskedImg", {
      scale: 1.3,
      maskSize: "400%",
      maskPosition: "center",
      ease: "power1.inOut",
    });
  });
  return (
    <>
      <div className="h-fit w-full bg-black ">
         <div className="size-48  bg-gradient-to-b from-black to-white"></div> 
        <div className="flex flex-col w-full items-center justify-center px-10">
          <div className="md:w-[50%] space-y-3">
            <h1 className="text-white text-center text-3xl">What we do Best</h1>
            <p className="text-[#5d5d5d] animText text-center">
              From strategy to execution, our services are built to elevate your
              brand, engage your audience, and drive measurable growth
            </p>
          </div>
          <div className="grid text-white mt-10 lg:grid-cols-3 lg:grid-rows-3 lg:w-[70%] w-full auto-rows-[300px] min-h-[100vh] gap-4">
            <div className="bg-[#1E1E1E] overflow-hidden relative flex flex-col justify-between rounded-2xl md:row-span-2">
              <div>
                <img
                  className="size-48 absolute -left-10"
                  src="binoculars.png"
                  alt=""
                />
              </div>
              <div className="p-4 space-y-4">
                <p className="text-2xl leading-8 text-white">
                  Data-Backed <br></br>Strategy
                </p>
                <h1 className="text-[#5d5d5d] text-xs">
                  We craft marketing plans built on real insights,
                  not-guesswork-so every move has purpose
                </h1>
              </div>
            </div>
            <div className="bg-[#3D3D3D] relative flex items-end p-4 w-full rounded-2xl md:col-span-2 overflow-hidden">
              <img className="size-56 absolute top-5 right-10" src="arrow.png" alt="" />
              <div className="w-1/2 space-y-2">
                <p className="text-2xl leading-8 text-white">
                  Targeted <br></br>Campaigns
                </p>
                <h1 className="text-[#888888] text-xs">
                  Reach the right audience at the right time with campaigns that
                  convert across every platform
                </h1>
              </div>
              <div className="w-1/2"></div>
            </div>
            <div className="bg-[#171717] space-y-2 relative rounded-2xl text-white p-4">
              <h1 className="text-2xl leading-8">Social Media <br></br> Management</h1>
              <p className="text-[#888888] text-xs">From content calendars <br></br> to engagement boosts</p>
              <img className="size-32 absolute right-1 top-10" src="coupl.png" alt="" />
            </div>
            <div className="bg-[#1E1E1E] rounded-2xl p-4 relative flex items-end">
            <div className="flex  flex-col">
            <h1 className="text-2xl leading-8">SEO&Content<br></br> Marketing</h1>
            <p className="text-[#888888] text-xs">Boost visiblity and authority <br /> with content that ranks,<br /> resonats, and delivers <br />long-term value.</p>
            </div>
            <img src="download.svg" alt="" />
            </div>
            <div className="bg-[#3D3D3D] flex  p-4 relative rounded-2xl md:col-span-2 overflow-hidden">
            <div className="flex flex-col justify-end"><h1 className="text-2xl leading-8">Creative<br></br> Branding</h1>
            <p className="text-[#888888] text-xs">Stand out with bold visuals, sharp<br></br> messaging, and a brand idntity that <br /> speaks your language</p></div>
            <div>
            <img className="absolute size-48 -top-10 right-10" src="bell2.png" alt="" srcset="" />
            </div>
            </div>
            <div className="bg-[#171717] overflow-hidden relative p-4 rounded-2xl">
            <h1 className="text-[20px] leading-8">Performance Analytics</h1>
            <p className="text-[#888888] text-xs">Track results in real-time and adapt fast-<br></br> because great marketing never stands still</p>
            <img className="absolute" src="chat.png" alt="" srcset="" />
            </div>
          </div>
        </div>
      </div>
       <div className="h-screen w-full bg-black"></div>
      {/*<div className="h-screen art w-full flex justify-center rounded-lg bg-black">
        <img
          className="hero-img maskedImg"
          src="/charity-bible-verses-1-1024x683.webp"
          alt=""
        />
      </div>
      <div className="h-screen w-full bg-black"></div> */}
    </>
  );
}
