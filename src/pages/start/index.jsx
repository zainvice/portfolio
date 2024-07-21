/* import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Start = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: '.wrapper',
        start: 'top top',
        end: '+=150%',
        pin: true,
        scrub: true,
        markers: true,
      }
    });

    timeline
      .to('img', {
        scale: 2,
        z: 350,
        transformOrigin: 'center center',
        ease: 'power1.inOut',
      })
      .to('.section.hero', {
        scale: 1.1,
        transformOrigin: 'center center',
        ease: 'power1.inOut',
      }, '<');
  }, []);

  return (
    <div className="relative w-full wrapper">
      <div className="overflow-x-hidden relative z-10 content">
        <section className="w-full h-screen bg-cover bg-center bg-no-repeat section hero" style={{ backgroundImage: 'url(#)' }}></section>
        <section className="w-full h-screen bg-gradient-to-r from-purple-500 to-purple-700 section gradient-purple"></section>
        <section className="w-full h-screen bg-gradient-to-r from-blue-500 to-blue-700 section gradient-blue"></section>
      </div>
      <div className="absolute inset-0 w-full h-full z-20 perspective-500 image-container">
        <img src="#" alt="image" className="w-full h-full object-cover object-center" />
      </div>
    </div>
  );
};

export default Start;
 */