import React from 'react'

export default function TextCouv() {
  return (
    <div className="absolute top-4 left-4 md:top-8 md:left-8">
      <p className="flex items-center gap-5 py-3 px-5 rounded-t-2xl rounded-br-2xl bg-white text-black text-sm sm:text-lg md:text-xl lg:text-2xl font-bold w-fit relative">
        I build AI-powered web & mobile apps
      </p>
      <div className="py-3 px-5 rounded-br-2xl bg-white text-black text-sm sm:text-lg md:text-xl lg:text-2xl font-bold w-fit relative">
        from prototype to production.
        <div className="absolute w-[35px] h-[35px] rounded-full bg-transparent top-0 -right-[35px] shadow-[-17px_-17px_0px_white]" />
      </div>

      <div className="bg-white flex gap-3 items-center w-fit py-2 px-3 sm:py-3 sm:px-5 rounded-b-2xl relative">
        <img src="/yahia-blue.png" alt="Yahia Slimani" className="rounded-lg w-[40px] h-[40px] sm:w-[50px] sm:h-[50px]" />
        <div>
          <h6 className="text-gray-800 font-medium text-sm">Yahia Slimani</h6>
          <p className="text-gray-500 text-xs">AI Software Engineer</p>
        </div>
        <div className="absolute w-[35px] h-[35px] rounded-full bg-transparent top-0 -right-[35px] shadow-[-17px_-17px_0px_white]" />
      </div>
    </div>
  );
}
