import React from 'react';

const Hero = () => {
  return (
    <section className="item-center ma-auto mt-16 mb-32 flex w-full flex-col justify-center text-center md:my-44 ">
      <div className="flex w-full justify-center">
        <h1
          className="bg-linear-to-r from-cyan-500 to-blue-500 bg-clip-text pb-11 text-6xl
                       font-extrabold tracking-tight text-transparent transition-transform hover:scale-105 md:text-8xl"
        >
          Hello World.
          <br />
          Omomuro development.
        </h1>
      </div>
      <p className="flex w-full justify-center dark:text-slate-300">
        こんにちは！
        <br />
        おもむろに開発をします。
        <br />
      </p>
    </section>
  );
};

export default Hero;
