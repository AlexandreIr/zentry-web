import gsap from "gsap";
import { useEffect, useRef } from "react";

/* eslint-disable react/prop-types */
function AnimatedTitle({title, conteinerClass}) {
    const conteinerRef = useRef(null);

    useEffect(()=>{
        const ctx = gsap.context(()=>{
            const titleAnimation = gsap.timeline({
                scrollTrigger:{
                    trigger: conteinerRef.current,
                    start: "100 bottom",
                    end: "center bottom",
                    toggleActions: "play none none reverse"
                }
            });
            
            titleAnimation.to(".animated-word", {
                opacity: 1,
                transform: 'translate3d(0, 0, 0) rotateY(0deg) rotateX(0deg)',
                ease: "power2.inOut",
                stagger:0.02
            })
        }, conteinerRef)

        return () => ctx.revert();
    },[])
  return (
    <div ref={conteinerRef} className={`animated-title !text-black ${conteinerClass}`}>
        {title.split('<br />').map((line, index) => (
            <div 
            key={index} 
            className="flex-center max-w-full flex-wrap gap-2 px-10 md:gap-3">
                {line.split(' ').map((word,i)=>(
                    <span key={i} className="animated-word" dangerouslySetInnerHTML={{__html: word}} />
                ))}
            </div>
        ))}
    </div>
  )
}

export default AnimatedTitle