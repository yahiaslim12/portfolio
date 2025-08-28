import React from "react";
import Number from "./Number";

type NumberType = {
  number: number;
  title: string;
  symbole : string;
};

export default function Numbers() {
  const numbers: NumberType[] = [
    { number: 4,  title: "Years of Experience" , symbole : '+'},
    { number: 30, title: "Completed Projects", symbole : '+' },
    { number: 99, title: "Client Satisfaction" ,symbole : "%"},
    { number: 3,  title: "Awards Won" ,symbole : "+"},
  ];

  return (
      <div className="
        flex w-full flex-wrap gap-y-5 sm:flex-nowrap sm:gap-y-0
        overflow-hidden
        md:px-16 lg:px-20 xl:px-28
        pb-12 md:pb-16 lg:pb-24 xl:pb-32
        mt-12 md:mt-16 lg:mt-24 xl:mt-32
        justify-between
        border-b border-gray-200
      ">
        {numbers.map((item, i) => (
          <Number key={"number"+i} number={item.number} symbole = {item.symbole} title={item.title} />
        ))
    }
      </div>
  );
}
