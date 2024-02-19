import React from "react";
import { Hero, Navbar, CTA, Footer } from "../components";
import { styles, layout } from "../constant";

const Home = () => {
  return (
    <>
      <Navbar />

      <Hero />

      <section className={`${styles.container}`}>
        <div className="sm:py-12 lg:py-16">
          <h2 className={`${styles.heading2}`}>
            One Banking App For Everything.
          </h2>
          <div className="grid grid-cols lg:grid-cols-2 gap-4">
            <div className="grid grid-cols-2 mt-8 gap-6">
              <div className=" border-2 border-gray-200 p-6 rounded-md">
                <img
                  src="/src/assets/home/badge-instant-transactions.svg"
                  alt="instant-transactions"
                  className="w-10 h-10"
                />
                <h3 className="mt-4 text-lg font-semibold">
                  Instant Transactions
                </h3>
                <p className="mt-4 text-gray-500">
                  Send and receive money instantly with Ginko's real-time
                  transaction processing.
                </p>
              </div>

              <div className=" border-2 border-gray-200 p-6 rounded-md">
                <img
                  src="/src/assets/home/badge-instant-transactions.svg"
                  alt="instant-transactions"
                  className="w-10 h-10"
                />
                <h3 className="mt-4 text-lg font-semibold">
                  Instant Transactions
                </h3>
                <p className="mt-4 text-gray-500">
                  Send and receive money instantly with Ginko's real-time
                  transaction processing.
                </p>
              </div>

              <div className=" border-2 border-gray-200 p-6 rounded-md">
                <img
                  src="/src/assets/home/badge-instant-transactions.svg"
                  alt="instant-transactions"
                  className="w-10 h-10"
                />
                <h3 className="mt-4 text-lg font-semibold">
                  Instant Transactions
                </h3>
                <p className="mt-4 text-gray-500">
                  Send and receive money instantly with Ginko's real-time
                  transaction processing.
                </p>
              </div>

              <div className=" border-2 border-gray-200 p-6 rounded-md">
                <img
                  src="/src/assets/home/badge-instant-transactions.svg"
                  alt="instant-transactions"
                  className="w-10 h-10"
                />
                <h3 className="mt-4 text-lg font-semibold">
                  Instant Transactions
                </h3>
                <p className="mt-4 text-gray-500">
                  Send and receive money instantly with Ginko's real-time
                  transaction processing.
                </p>
              </div>

              <div className=" border-2 border-gray-200 p-6 rounded-md">
                <img
                  src="/src/assets/home/badge-instant-transactions.svg"
                  alt="instant-transactions"
                  className="w-10 h-10"
                />
                <h3 className="mt-4 text-lg font-semibold">
                  Instant Transactions
                </h3>
                <p className="mt-4 text-gray-500">
                  Send and receive money instantly with Ginko's real-time
                  transaction processing.
                </p>
              </div>

              <div className=" border-2 border-gray-200 p-6 rounded-md">
                <img
                  src="/src/assets/home/badge-instant-transactions.svg"
                  alt="instant-transactions"
                  className="w-10 h-10"
                />
                <h3 className="mt-4 text-lg font-semibold">
                  Instant Transactions
                </h3>
                <p className="mt-4 text-gray-500">
                  Send and receive money instantly with Ginko's real-time
                  transaction processing.
                </p>
              </div>
            </div>

            <div className="">
              <div className="pl-4 mt-8">
                <img
                  src="/src/assets/home/home-img-2.png"
                  alt="ginko screenshot"
                  className="w-[400px] h-auto ml-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-Light-Blue">
        <div className={`${styles.container}`}>
          <div class={`${layout.padding}`}>
            <div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
              <div class="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
                <img
                  src="/src/assets/home/home-img-3.svg"
                  alt="hero-img"
                  className="ml-auto"
                />
              </div>

              <div class="lg:py-24">
                <h2 className={`${styles.heading2}`}>
                  Send and Receive Money in Seconds
                </h2>

                <p class={`${styles.paragraph} mt-4`}>
                  Managing money is tough. Let Ginko take the hassle out of
                  banking so you can take control of your finances.
                </p>

                <div className="flex flex-col gap-5 mt-8 text-Black">
                  <div className="flex gap-3 align-middle">
                    <img
                      src="/src/assets/home/badge-inverted.svg"
                      alt="badge-tick"
                      className="h-6 w-6"
                    />
                    <p>Payments worldwide</p>
                  </div>

                  <div className="flex gap-3 align-middle">
                    <img
                      src="/src/assets/home/badge-inverted.svg"
                      alt="badge-tick"
                      className="h-6 w-6"
                    />
                    <p>Payments worldwide</p>
                  </div>

                  <div className="flex gap-3 align-middle">
                    <img
                      src="/src/assets/home/badge-inverted.svg"
                      alt="badge-tick"
                      className="h-6 w-6"
                    />
                    <p>Payments worldwide</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      <section className="saving-pots">
        <div className={`${styles.container}`}>
          <div className={`${styles.padding}`}>
            <div>
              <p className="mt-8 text-lg font-medium">Saving Pots</p>
              <h2 className={`${styles.heading2} mt-4`}>
                Organize your money the right way
              </h2>
              <p className={`${styles.paragraph} mt-4`}>
                Tired of aimlessly setting aside money with no purpose? Ginko's
                Savings Pots allow you to specifically save for your goals and
                dreams.
              </p>
            </div>

            <div className="grid grid-rows lg:grid-cols-5 mt-10 gap-1">
              <div>
                <img
                  src="/src/assets/home/saving-new-laptop.svg"
                  alt="laptop"
                  className="h-48 w-48"
                />
                <p className="font-semibold text-md mt-4">New Laptop</p>
                <p className="text-gray-400 font-semibold">£400</p>
              </div>

              <div>
                <img
                  src="/src/assets/home/saving-new-laptop.svg"
                  alt="laptop"
                  className="h-48 w-48"
                />
                <p className="font-semibold text-md mt-4">New Laptop</p>
                <p className="text-gray-400 font-semibold">£400</p>
              </div>

              <div>
                <img
                  src="/src/assets/home/saving-new-laptop.svg"
                  alt="laptop"
                  className="h-48 w-48"
                />
                <p className="font-semibold text-md mt-4">New Laptop</p>
                <p className="text-gray-400 font-semibold">£400</p>
              </div>

              <div>
                <img
                  src="/src/assets/home/saving-new-laptop.svg"
                  alt="laptop"
                  className="h-48 w-48"
                />
                <p className="font-semibold text-md mt-4">New Laptop</p>
                <p className="text-gray-400 font-semibold">£400</p>
              </div>

              <div>
                <img
                  src="/src/assets/home/saving-new-laptop.svg"
                  alt="laptop"
                  className="h-48 w-48"
                />
                <p className="font-semibold text-md mt-4">New Laptop</p>
                <p className="text-gray-400 font-semibold">£400</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="NOTIFICATIONS">
        <div className={`${styles.container}`}>
          <div class={`${layout.paddingY}`}>
            <div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
              <div class="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
                <img
                  src="/src/assets/home/home-img-4.svg"
                  alt="hero-img"
                  className="ml-auto"
                />
              </div>

              <div class="lg:py-24">
                <h2 className={`${styles.heading2}`}>
                  Send and Receive Money in Seconds
                </h2>

                <p class={`${styles.paragraph} mt-4`}>
                At Ginko, we know how easy it is to lose track of your finances. That's why we provide timely notifications to keep you informed about important account activity, upcoming bills, unusual spending, and more.
                </p>

                <div className="flex flex-col gap-5 mt-8 text-Black">
                  <div className="flex gap-3 align-middle">
                    <img
                      src="/src/assets/home/badge.svg"
                      alt="badge-tick"
                      className="h-6 w-6"
                    />
                    <p>Payments worldwide</p>
                  </div>

                  <div className="flex gap-3 align-middle">
                    <img
                      src="/src/assets/home/badge.svg"
                      alt="badge-tick"
                      className="h-6 w-6"
                    />
                    <p>Payments worldwide</p>
                  </div>

                  <div className="flex gap-3 align-middle">
                    <img
                      src="/src/assets/home/badge.svg"
                      alt="badge-tick"
                      className="h-6 w-6"
                    />
                    <p>Payments worldwide</p>
                  </div>

                  <a href="#" className="flex flex-row gap-4 py-3 text-Blue">Compare Cards
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
           </svg></a>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ACCOUNT">
        <div className={`${styles.container}`}>
          <div className="">
            <p className="text-center">Account</p>
            <h2 className={`${styles.heading2} text-center mt-3`}>Perfect Card For Your Needs</h2>
            <p className={`${styles.paragraph} text-center mt-3`}>We offer three different tiers of cards to meet 
            your unique personal needs.</p>

            <img src="/src/assets/home/home-img-5.svg" alt="cards stacked" className="m-auto mt-8" />

          </div>


        </div>

      </section>

      <CTA />

      <Footer />
    </>
  );
};

export default Home;
