import React from "react";
import { logo, text } from "../assets";
const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 mt-4 pt-3">
        <div className="flex justify-center items-center">
          <img
            src={logo}
            alt="sumz-logo"
            className="max-w-[3rem] object-contain"
          />
          <img
            src={text}
            alt="sumz-text-logo"
            className="w-[8rem] object-contain"
          />
        </div>

        <button
          type="button"
          className="black_btn"
          onClick={() => {
            window.open("https://github.com/ShubhamSharma3901/Summize.io");
          }}>
          GitHub
        </button>
      </nav>

      <h1 className="head_text">
        Summarize Articles with <br className="max-md:hidden" />
        <span className="orange_gradient">OpenAI GPT-3.5</span>
      </h1>

      <h2 className="mt-5 text-lg text-gray-500 sm:text-xl text-center max-w-2xl">
        Simplify your reading with Summize, an open-source article summarizer
        that transforms lengthy articles into clear and concise summaries.
      </h2>
    </header>
  );
};

export default Hero;
