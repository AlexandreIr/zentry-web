import { useEffect, useRef } from "react";
import { useState } from "react"
import Button from "../components/Button";
import { TiLocationArrow } from "react-icons/ti";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

function Hero() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loadingVideos, setLoadingVideos] = useState(0);

  const totalVideos = 4;
  const nexVideoRef = useRef(null);

  const upcomingVideo = (currentIndex % totalVideos) + 1;
  
  const handleVideoLoaded = () => {
    setLoadingVideos((prev) => prev + 1);
  } 

  const handleMiniVideoClick = () =>{
    setHasClicked(true);
    setCurrentIndex(upcomingVideo);
  }

  useEffect(() => {
    if(loadingVideos === totalVideos-1) {
      setIsLoading(false);
    }
  },[loadingVideos])

  useGSAP(() => {
    if(hasClicked) {
      gsap.set('#next-video', {visibility: 'visible'});
      gsap.to('#next-video', {
        transformOrigin:'center center',
        scale: 1,
        width: '100%',
        height: '100%',
        duration: 1,
        ease: 'power1.inOut',
        onStart: ()=>nexVideoRef.current.play()
      })
      gsap.from('#current-video', {
        transformOrigin:'center center',
        scale: 0,
        width: '100%',
        height: '100%',
        duration: 1.5,
        ease: 'power1.inOut'
      })
    }
  },{dependencies:[currentIndex], revertOnUpdate: true})

  useGSAP(()=>{
    gsap.set('#video-frame', {
      clipPath: 'polygon(14% 0%, 72% 0%, 90% 100%, 0 100%)',
      borderRadius:'0 0 40% 10%'
    });

    gsap.from('#video-frame', {
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0 100%)',
      borderRadius:'0 0 0 0',
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: '#video-frame',
        start: 'center center',
        end: 'bottom center',
        scrub: true
      }
    })
  })

  const getVideoSource = (index) => `videos/hero-${index}.mp4`;
  

  return (
    <section className="relative h-dvh w-screen overflow-x-hidden">
      {isLoading && (
        <div className="flex-center absolute z-[100] 
        h-dvh w-screen overflow-hidden bg-violet-50">
          <div className="three-body">
            <div className="three-body__dot"/>
            <div className="three-body__dot"/>
            <div className="three-body__dot"/>
          </div>
        </div>
      )}
      <div id="video-frame" className="relative z-10 h-dvh 
      w-screen overflow-hidden rounded-lg bg-blue-75">
        <div>
        <div className="mask-clip-path absolute-center
        absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
          <div className="origin-center 
          scale-50 opacity-0 transition-all 
          duration-500 ease-in hover:scale-100  hover:opacity-100" onClick={handleMiniVideoClick}>
            <video 
              ref={nexVideoRef}
              src={getVideoSource(upcomingVideo)}
              loop
              muted
              id='current-video'
              className="size-64 origin-center scale-150 
              object-cover object-center"
              onLoadedData={handleVideoLoaded}
            />
          </div>
        </div>
        <video 
        ref={nexVideoRef} 
        src={getVideoSource(currentIndex)} 
        loop
        muted 
        onLoadedData={handleVideoLoaded}
        id='next-video' 
        className="size-64 absolute-center invisible absolute z-20 
        object-cover object-center" />
        <video 
        src={getVideoSource(currentIndex)}
        autoPlay
        muted
        loop
        className="absolute left-0 top-0 size-full object-cover object-center"
        onLoadedData={handleVideoLoaded}
        />
      </div>
      <h1 className="special-font hero-heading absolute 
      bottom-5 right-5 z-40 text-blue-75">
        G<b>a</b>ming
      </h1>
      <div className="absolute left-0 top-0 z-40 size-full">
        <div className="mt-24 px-5 sm:px-10">
          <h1 className="special-font hero-heading text-blue-100">Redefi<b>n</b>e</h1>
          <p className="mb-5 max-w-64 font-robert-regular text-blue-100">
            Enter the Metagame Layer <br />
            Unleash the Play Economy
          </p>
          <a href="https://github.com/AlexandreIr" target="_blank">
            <Button id="wahtch-trailer" 
            title="Watch trailer" 
            lefIcon={<TiLocationArrow/>} 
            containerClass="bg-yellow-300 flex-center  gap-1"/>
          </a>
        </div>
      </div>
      </div>

      <h1 className="special-font hero-heading absolute 
      bottom-5 right-5 text-black">
        G<b>a</b>ming
      </h1>
    </section>
    )
}

export default Hero