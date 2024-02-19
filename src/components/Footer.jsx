
import React from 'react'
import { styles } from '../constant'

const Footer = () => {

  return (

    <footer class="bg-Light-Blue rounded-t-lg">
  <div class={`${styles.container} space-y-8 py-16 sm:px-6 lg:space-y-16 lg:px-8`}>
    <div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
      <div>
        <div class="text-teal-600">
            <img src="/src/assets/home/logo.svg" alt="ginko logo" />
          
        </div>

        <p class="mt-4 max-w-xs text-gray-500">
          Ginko. Your trusted personal finance sidekick.
        </p>

      </div>



      <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-3">

        <div>
          <p class="font-medium text-gray-900">About</p>

          <ul class="mt-6 space-y-4 text-sm">

            <li>
              <a href="#" class="text-gray-700 transition hover:opacity-75"> Features </a>
            </li>

            <li>
              <a href="#" class="text-gray-700 transition hover:opacity-75"> Pricing </a>
            </li>

            <li>
              <a href="#" class="text-gray-700 transition hover:opacity-75"> Support </a>
            </li>
          </ul>
        </div>



        <div>
          <p class="font-medium text-gray-900">Blog</p>

          <ul class="mt-6 space-y-4 text-sm">
            <li>
              <a href="#" class="text-gray-700 transition hover:opacity-75"> Products </a>
            </li>

            <li>
              <a href="#" class="text-gray-700 transition hover:opacity-75"> Technology </a>
            </li>

            <li>
              <a href="#" class="text-gray-700 transition hover:opacity-75"> Crypto </a>
            </li>
          </ul>
        </div>

        <div>
          <p class="font-medium text-gray-900">Social Media</p>

          <ul class="mt-6 space-y-4 text-sm">
            <li>
              <a href="#" class="text-gray-700 transition hover:opacity-75"> Twitter </a>
            </li>

            <li>
              <a href="#" class="text-gray-700 transition hover:opacity-75"> Facebook </a>
            </li>

            <li>
              <a href="#" class="text-gray-700 transition hover:opacity-75"> Instagram </a>
            </li>

          </ul>
        </div>

   
      </div>
    </div>

    <p class="text-xs text-gray-500">&copy; 2024. Ginko. All rights reserved.</p>
  </div>
</footer>
    


  )
}

export default Footer