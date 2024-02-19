

import React from "react"
import { styles, layout } from "../constant"; 



const Hero = () => {
  return (
    
    <>

<section>
  <div className={`${styles.container}`}>
  <div class={`${layout.padding}`}>
    <div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
      <div class="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
        <img src="/src/assets/home/hero-img.svg" alt="hero-img" className="ml-auto" />
      </div>

      <div class="lg:py-24">
        <h1 className="font-semibold text-6xl leading-[4rem]">Meet Ginko, Your Personal Finance Sidekick</h1>

        <p class="mt-4 text-base text-semibold">
        Managing money is tough. Let Ginko take the hassle out of banking so you can take control of your finances.
        </p>

        <div className="flex mt-4 gap-6 flex- md:flex-row">
          <a href="#" className={`${styles.button}`}>Open Account</a>
          <a href="#" className="flex flex-row gap-4 py-3 text-Blue">Compare Cards
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
           </svg></a>

          </div>

          <div className="flex flex-col gap-5 mt-8 text-Black">
            <div className="flex gap-5 align-middle">
              <img src="/src/assets/home/badge.svg" alt="badge-tick" className="h-6 w-6" />
              <p>Payments worldwide</p>
            </div>

            <div className="flex gap-5 align-middle">
              <img src="/src/assets/home/badge.svg" alt="badge-tick" className="h-6 w-6" />
              <p>Instant transfers</p>
            </div>

            <div className="flex gap-5 align-middle">
              <img src="/src/assets/home/badge.svg" alt="badge-tick" className="h-6 w-6" />
              <p>100% mobile banking</p>
            </div>

          </div>


      </div>
    </div>
  </div>

  </div> 
</section>



    </>
    


  
  );
};

export default Hero;
