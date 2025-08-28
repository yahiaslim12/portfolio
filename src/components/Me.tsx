"use client"
import { useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import SplitText from "./ui/SpliteText";

gsap.registerPlugin(ScrollTrigger,useGSAP)
export default function Me() {
    const root = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.from(root.current, {
      scrollTrigger: { trigger: root.current, start: "top 85%", once: true , toggleActions : 'play none none none' },
      opacity: 0,
      scale: 0.6,
      duration: 1,
      ease: "power2.out",
    })

  }, { scope: root })
  return (

      <div ref={root} className="relative hidden lg:block">
          <img src="/6.jpg" alt=""  className="w-full rounded-xl h-[650px] object-cover me"/>
          <div className="absolute w-2/6 rounded-bl-xl top-0 right-0 bg-white h-[60px]">
              <div className='absolute w-[25px] h-[25px] rounded-full bg-transparent -left-[25px] top-0 shadow-[10px_-12px_0px_white]'></div>
              <div className='absolute w-[25px] h-[25px] rounded-full bg-transparent -bottom-[25px] right-0 shadow-[10px_-12px_0px_white]'></div>
          </div>
      </div>

  )
}
