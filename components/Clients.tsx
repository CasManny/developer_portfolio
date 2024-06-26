import React from "react";
import { companies, testimonials } from "@/data";
import { InfiniteMovingCards } from "./ui/InfinityMovingCards";

const Clients = () => {
  return (
    <div className="py-20" id="testimonials">
      <h1 className="heading">
        Kind words from our{" "}
        <span className="text-purple">Satisfied Clients</span>
      </h1>
      <div className="flex flex-col items-center max-lg:mt-10">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
              />
              <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
                  {companies.map(({ id, name, img, nameImg }) => (
                      <div className="flex max-w-32 md:max-w-60 gap-2" key={id}>
                          <img src={img} alt={name} className="md:w-10 w-5" />
                          <img src={nameImg} alt={name} className="md:w-24 w-20" />
                     </div>
                 ))}
              </div>
      </div>
    </div>
  );
};

export default Clients;
