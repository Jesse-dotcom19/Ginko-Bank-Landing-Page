import React from "react";
import { styles, layout } from "../constant";
import Button from "./Button";
import ButtonText from "./ButtonText";

const Hero = () => {
  return (
    <>
      <section>
        <div className={`${styles.container}`}>
          <div class={`${layout.paddingY}`}>
            <div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
              <div class="lg:py-24">
                <h1 className={`${styles.heading1} text-center md:text-left`}>
                  Meet Ginko, Your Personal Finance Sidekick
                </h1>

                <p class="mt-4 text-base text-semibold text-center md:text-left">
                  Managing money is tough. Let Ginko take the hassle out of
                  banking so you can take control of your finances.
                </p>

                <div className="flex gap-4 flex-col md:flex-row mt-4">
                  <Button />
                  <ButtonText />
                </div>

                <div className="flex flex-col justify-center items-center md:justify-start md:items-start gap-4 mt-6 ">
                  <div className="flex gap-5 align-middle">
                    <img
                      src="/src/assets/home/badge.svg"
                      alt="badge-tick"
                      className="h-6 w-6"
                    />
                    <p>Payments worldwide</p>
                  </div>

                  <div className="flex gap-5 align-middle">
                    <img
                      src="/src/assets/home/badge.svg"
                      alt="badge-tick"
                      className="h-6 w-6"
                    />
                    <p>Instant transfers</p>
                  </div>

                  <div className="flex gap-5 align-middle">
                    <img
                      src="/src/assets/home/badge.svg"
                      alt="badge-tick"
                      className="h-6 w-6"
                    />
                    <p>100% mobile banking</p>
                  </div>
                </div>
              </div>

              <div class="flex justify-center md:ml-auto mt-10">
                <img className="h-auto w-48 md:w-auto md:ml-auto"
                  src="/src/assets/home/hero-img.svg"
                  alt="hero-img"

                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
