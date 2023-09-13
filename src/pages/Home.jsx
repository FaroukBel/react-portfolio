import React from "react";
import Reveal from "../components/Reveal";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
const Home = () => {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: (e) => (direction = e.direction * -1),
      },
      x: "-500px",
    });
    requestAnimationFrame(animate);
  }, []);

  const animate = () => {
    if (xPercent < -100) {
      xPercent = 0;
    } else if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });
    requestAnimationFrame(animate);
    xPercent += 0.1 * direction;
  };
  return (
    <>
      <Parallax pages={3}>
        <ParallaxLayer offset={0} factor={1.5} speed={1}>
          <section className="main-section mb-5">
            <div className="container  mx-auto">
              <div className="grid  grid-cols-1 md:grid-cols-2">
                <div className="title  flex items-center justify-center">
                  <div className="relative">
                    <Reveal>
                      <h1 className="relative font-bold text-7xl  z-10">
                        full-<span className="text-sea-blue">stack</span> <br />
                        developer
                      </h1>
                      <div className="absolute grid grid-rows-1 gap-2 -right-12 -top-8 z-0">
                        <div className="w-24 h-6 rounded-lg bg-gray-light"></div>
                        <div className="w-24 h-6 rounded-lg bg-gray-light"></div>
                        <div className="w-24 h-6 rounded-lg bg-gray-light"></div>
                      </div>
                    </Reveal>

                    <h2 className="text-gray-light font-bold text-3xl">
                      design
                    </h2>
                    <h2 className="text-gray-light font-bold text-3xl">
                      front-end
                    </h2>
                    <h2 className="text-gray-light font-bold text-3xl">
                      back-end
                    </h2>
                  </div>
                </div>
                <div className="">
                  <img src="/logo512.png" alt="" />
                </div>
              </div>
              <div className="h-28"></div>
            </div>

            <div className="sliderContainer my-5">
              <div ref={slider} className="slider">
                <p ref={firstText}>&lt;Farouk BEL KHYATE/&gt;</p>
                <p ref={secondText}>&lt;Farouk BEL KHYATE/&gt;</p>
              </div>
            </div>
          </section>
        </ParallaxLayer>
        <ParallaxLayer offset={0.8} speed={0.7}>
          <section className="design-section bg-sea-blue">
            <div className="container  mx-auto">
              <h2 className="text-7xl text-white pt-5 text-center font-bold">
                design phase
              </h2>
              <div className="grid  grid-cols-1 md:grid-cols-2">
                <div className="flex items-center justify-center">
                  <p className="text-white text-center">
                    I start by gaining a deep understanding of your project
                    objectives, target audience, and industry. This research
                    helps me create a design strategy that resonates with your
                    users.
                  </p>
                </div>
                <div className="flex justify-end">
                  <img src="/logo512.png" alt="" />
                </div>
              </div>
            </div>
          </section>
        </ParallaxLayer>
        <ParallaxLayer offset={1.8} speed={0.5}>
          <section className="front-section">
            <div className="container  mx-auto">
              <h2 className="text-7xl  pt-5 text-center font-bold">
                design phase
              </h2>
              <div className="grid  grid-cols-1 md:grid-cols-2">
                <div className="flex items-center justify-center">
                  <p className=" text-center">
                    I start by gaining a deep understanding of your project
                    objectives, target audience, and industry. This research
                    helps me create a design strategy that resonates with your
                    users.
                  </p>
                </div>
                <div className="flex justify-end">
                  <img src="/logo512.png" alt="" />
                </div>
              </div>
            </div>
          </section>
        </ParallaxLayer>
      </Parallax>
    </>
  );
};

export default Home;
