import React, { useEffect, useState } from 'react';
import { PiEquals } from 'react-icons/pi';
import { motion, AnimatePresence } from 'framer-motion';

const Hero = () => {
  // Array of texts to display
  const texts = ['Engage 🤩', 'Optimize 😎', '$$$ 🤑'];
  // State to track the current index
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Set up an interval to change the text every 3 seconds
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000);

    // Clear the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="mt-20 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center justify-center text-center gap-4 max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium leading-[140%]">
          Unlock video's full <br className="block md:hidden" />
          potential;<br className="hidden md:block" />
          <span className="text-[#E4875D] inline"> half of </span>
          marketers haven't yet!
        </h1>

        <div className="relative mt-5 flex items-center justify-center gap-4">
          <img
            src="/media.svg"
            alt="Media icon"
            className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28"
          />
          <PiEquals className="text-[#808080] text-xl sm:text-2xl md:text-3xl" />
          <div className="relative inline-block w-40 sm:w-48 md:w-52">
            <AnimatePresence exitBeforeEnter>
              <motion.p
                key={currentIndex}
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 50, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute sm:-top-5 -top-4 w-full text-2xl sm:text-3xl md:text-4xl"
              >
                {texts[currentIndex]}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>

        <p className="text-xl text-[#444444] max-w-3xl -mt-2">
          Netflix-style video discovery for your prospects that turns viewers into customers
        </p>

        <button className="mt-10 bg-[#E4875D] text-white py-3 px-6 rounded-lg hover:bg-[#d87a70] transition-colors cursor-pointer">
          Request a Demo
        </button>

        <img src="/demo.png" alt="" />

      </div>
    </section>

  );
};

export default Hero;
