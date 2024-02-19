
import React from 'react'
import { styles } from '../constant' 


const CTA = () => {
  return (

  <section className={`${styles.container}`}>
  <div class="py-8 my-10 bg-Blue rounded-md overflow-hidden h-[600px]">
    <div class="grid grid-cols-2 gap-4">

      <div class="p-8 md:p-12 lg:px-16 lg:py-24">
        <div class="mx-auto max-w-xl text-center">
          <h2 class="text-2xl font-bold text-white md:text-5xl text-left">
            One App.
            One Banking.
          </h2>

          <p class="hidden text-white sm:mt-4 sm:block text-left">
          Take control of your finances with Ginko. Sign up in minutes to start using advanced budgeting tools, saving automatically, sending instant transfers
          </p>



          <div className='grid grid-cols-2 mt-10'>
            <div className='flex flex-row gap-4 align-middle'>
                <img src="/src/assets/cta/cta-tick.svg" alt="tick" className='h-6 w-6' />
                <p className='text-white text-base'>Instant Transactions</p>

            </div>

            <div className='flex flex-row gap-4 align-middle'>
                <img src="/src/assets/cta/cta-tick.svg" alt="tick" className='h-6 w-6' />
                <p className='text-white text-base'>Payments worldwide</p>

            </div>

            <div className='flex flex-row gap-4 align-middle mt-4'>
                <img src="/src/assets/cta/cta-tick.svg" alt="tick" className='h-6 w-6' />
                <p className='text-white text-base'>Savings accounts</p>

            </div>

            <div className='flex flex-row gap-4 align-middle mt-4'>
                <img src="/src/assets/cta/cta-tick.svg" alt="tick" className='h-6 w-6' />
                <p className='text-white text-base'>100% mobile banking</p>

            </div>

            <div className='flex flex-col lg:flex-row gap-4 mt-10'>
                <img src="/src/assets/cta/cta-apple-store.png" alt="apple store" className='w-auto h-auto' />
                <img src="/src/assets/cta/cta-google-store.png" alt="google store" className='w-auto h-auto' />

            </div>


          </div>

        </div>

      </div>

      <div className='p-8 md:p-12 lg:px-16'>
        <img src="/src/assets/cta/cta-phone.png" alt="phone" className='ml-4' />
      </div>
      </div>
    </div>

</section>


 


  )
}

export default CTA