import { Code, CodeSquare, CodeXml, Hand, Instagram, LinkedinIcon, Twitter } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Body() {
  useGSAP(()=>{
    gsap.to('.hand', {
      rotate: 45,
      repeat:-1,
      yoyo:true,
      ease:'power1.inOut'
    })
    gsap.to('.text-fade', {
      opacity:1,
      ease:'power1.in',
      translateY:0,
      duration:1
    })
  }, [])
  return (
    <>
      <div class="relative h-screen w-full bg-black">
        <div class="absolute w-full bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]">
          <div className="w-full h-full flex flex-col items-center justify-center text-white space-y-8">
            <div className=" flex flex-col items-center">
              <div className="text-5xl text-fade opacity-0 translate-y-10 space-x-2 flex items-center">
                <div className="hand">👋</div>
              <p>
                <span className="italic font-light text-[#b0b0b0] font-serif">
                  Adedipupo Here
                </span>
              </p>
              <img
                src="/WhatsApp Image 2025-07-21 at 11.06.03.jpeg"
                className="size-12 bg-white cursor-pointer border-2 rounded border-[#e7e7e7]"
              />
              ,
              </div>
              
            <div className="flex">
              <p className="text-5xl flex items-center">
                A Front-End <span>
                  <CodeXml/>
                  </span> Developer
              </p>
            </div>
            </div>
            <p className="text-center">
              I have 3 years of experience working on useful and mindful <br/> projcts
              together with startups and known brands
            </p>
            <div className=" space-x-2">
              <button className="border-[1px] p-2 px-5 rounded-full">
                Resume
              </button>
              <button className="border-[1px] p-2 px-5 rounded-full">
                Portfolio
              </button>
            </div>
            <div className="flex space-x-4">
              <a href="https://x.com/adedipupolanre1?s=11"><Twitter /></a>
              <LinkedinIcon />
              <Instagram />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full">
        <div></div>
        <div>
        <div className="w-1/2"></div>
        <div className="w-1/2"></div>
        </div>
      </div>
    </>
  );
}

export default Body;
