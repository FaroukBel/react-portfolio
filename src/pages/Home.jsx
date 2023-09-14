import React from "react";
import Reveal from "../components/Reveal";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import Slider from "react-slick";

import { ScrollTrigger } from "gsap/all";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
const Home = () => {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;

  var settingsDesignSlider = {
    dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      centerMode: true,
    centerPadding: '40px',
      autoplaySpeed: 2000,
      prevArrow: false,
      nextArrow: false, 
  
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
          },
        },
      ],
  };

  var settingsFrontSlider = {
    dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      centerMode: true,
    centerPadding: '40px',
      autoplaySpeed: 2000,
      prevArrow: false,
      nextArrow: false, 
  vertical:true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
          },
        },
      ],
  };
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
                      <h1 className="relative font-bold text-8xl  z-10">
                        full-<span className="text-sea-blue">stack</span> <br />
                        developer
                      </h1>
                      <div className="absolute grid grid-rows-1 gap-2 -right-12 -top-8 z-0">
                        <div className="w-24 h-6 rounded-lg bg-gray-light peer-[:has(#design-stack)]:bg-sea-blue"></div>
                        <div className="w-24 h-6 rounded-lg bg-gray-light"></div>
                        <div className="w-24 h-6 rounded-lg bg-gray-light"></div>
                      </div>
                    </Reveal>

                    <Reveal>
                      <div className="relative">
                        <a href="#design-phase">
                          {" "}
                          <h2
                            id="design-stack"
                            className=" text-gray-light relative z-40 font-bold text-4xl peer/design  transition ease-in-out duration-300 hover:text-white"
                          >
                            design
                          </h2>
                          <div className="w-56 h-56 scale-0 rounded-full absolute z-0 -top-32 -left-12 bg-sea-blue  transition ease-in-out duration-300 peer-hover/design:scale-100"></div>
                        </a>
                      </div>
                      <div>
                        <h2 className="text-gray-light relative z-40 font-bold text-4xl hover:text-sea-blue transition ease-in-out delay-150">
                          front-end
                        </h2>
                      </div>
                      <div>
                        <h2 className="text-gray-light relative z-40 font-bold text-4xl hover:text-sea-blue transition ease-in-out delay-150">
                          back-end
                        </h2>
                      </div>
                    </Reveal>
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
        <ParallaxLayer offset={0.8} speed={0.6}>
          <section className="design-section bg-sea-blue">
            <div className="container  mx-auto">
              <Reveal>
                <h2
                  id="design-phase"
                  className="text-7xl  text-white pt-5 text-center font-bold"
                >
                  design phase
                </h2>
              </Reveal>
              <div className="grid grid-rows-2 grid-cols-1 md:grid-cols-2">
                <div className="flex items-center justify-center">
                  <div className=" text-white">
                    <Reveal>
                      <p className="pl-5 mb-4">
                        In this initial phase of the project, I focus on
                        creating a visually appealing and user-friendly design
                        that aligns with your goals and brand identity. The
                        process includes:
                      </p>
                    </Reveal>
                    <Reveal>
                      <h3 className="font-bold pl-5">Discovery and Research</h3>
                      <p className=" pl-5 mb-4">
                        I start by gaining a deep understanding of your project
                        objectives, target audience, and industry. This research
                        helps me create a design strategy that resonates with
                        your users.
                      </p>
                    </Reveal>
                    <Reveal>
                      <h3 className="font-bold pl-5">Wireframing</h3>

                      <p className=" pl-5 mb-4">
                        I develop wireframes that outline the layout and
                        structure of the website or application. These
                        wireframes serve as a blueprint for the user interface,
                        ensuring optimal user flow and functionality.
                      </p>
                    </Reveal>
                    <Reveal>
                      <h3 className="font-bold pl-5">Prototyping</h3>

                      <p className=" pl-5 mb-4">
                        I create interactive prototypes to provide a tangible
                        sense of the design. This allows you to visualize how
                        the final product will look and function.
                      </p>
                    </Reveal>
                    <Reveal>
                      <h3 className="font-bold pl-5">Visual Design</h3>

                      <p className=" pl-5 mb-4">
                        Once the wireframes and prototypes are approved, I
                        proceed to design the visual elements, including color
                        schemes, typography, and graphical assets. The goal is
                        to create a cohesive and aesthetically pleasing
                        interface.
                      </p>
                    </Reveal>
                  </div>
                </div>
                <div className="flex justify-end">
                  <img src="/logo512.png" alt="" />
                </div>
                <div className="col-span-2">
                  <Slider {...settingsDesignSlider}>
                    <div className=" bg-white rounded-lg h-52 "></div>
                    <div className="w-96 z-50 bg-white rounded-lg h-52 "></div>
                    <div className="w-96 z-50 bg-white rounded-lg h-52 "></div>
                    <div className="w-96 z-50 bg-white rounded-lg h-52 "></div>
                  </Slider>
                </div>

                {/* <div className="flex items-center justify-center gap-2 col-span-2">
                  <div className="w-96 z-50 bg-white rounded-lg h-52 "></div>
                  <div className="w-96 z-50 bg-white rounded-lg h-52 "></div>
                  <div className="w-96 z-50 bg-white rounded-lg h-52 "></div>
                  <div className="w-96 z-50 bg-white rounded-lg h-52 "></div>
                </div> */}
              </div>
            </div>
          </section>
        </ParallaxLayer>
        <ParallaxLayer offset={1.8} speed={0.5}>
          <section className="front-section">
            <div className="container  mx-auto">
              <Reveal>
                <h2 className="text-7xl mb-5 pt-5 text-center font-bold">
                  front-end development
                </h2>
              </Reveal>
              <div className="grid  grid-cols-1 md:grid-cols-2">
                <div>
                  <Reveal>
                    <p className="pl-5">
                      After the design phase is completed and approved, I
                      transition into front-end development. This step involves
                      turning the design into a functional, interactive website.
                      The process includes:
                    </p>
                  </Reveal>
                  <Reveal>
                    <h3 className="font-bold pl-5">HTML/CSS Development</h3>
                    <p className=" pl-5">
                      In this initial phase of the project, I focus on creating
                      a visually appealing and user-friendly design that aligns
                      with your goals and brand identity. The process includes:
                    </p>
                  </Reveal>
                  <Reveal>
                    <h3 className="font-bold pl-5">HTML/CSS Development</h3>

                    <p className=" pl-5">
                      In this initial phase of the project, I focus on creating
                      a visually appealing and user-friendly design that aligns
                      with your goals and brand identity. The process includes:
                    </p>
                  </Reveal>
                  <Reveal>
                    <h3 className="font-bold pl-5">HTML/CSS Development</h3>

                    <p className=" pl-5">
                      In this initial phase of the project, I focus on creating
                      a visually appealing and user-friendly design that aligns
                      with your goals and brand identity. The process includes:
                    </p>
                  </Reveal>
                </div>

                <div className="row-span-2">
                  <Slider {...settingsFrontSlider}>
                    <div className=" bg-sea-blue rounded-lg h-52 "></div>
                    <div className="w-96 z-50 bg-sea-blue rounded-lg h-52 "></div>
                    <div className="w-96 z-50 bg-sea-blue rounded-lg h-52 "></div>
                    <div className="w-96 z-50 bg-sea-blue rounded-lg h-52 "></div>
                  </Slider>
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
