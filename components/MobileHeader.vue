<template>
    <!-- THIS IS MOBILE VIEW-->
    <div class="sticky top-0 z-20 bg-white shadow-md xl:hidden">
      <div class="flex items-center justify-between px-2 py-2 sm:px-6">
        <NuxtLink to="/" aria-current="page" class="w-44 nuxt-link-exact-active nuxt-link-active">
          <!--Input the Logo-->
        </NuxtLink>
        <button @click.prevent="menuClick()">
          <svg fill="currentColor" viewBox="0 0 24 24" class="w-8 h-8 transition hover:text-theme-700">
            <path
              d="M3 6a1 1 0 011-1h16a1 1 0 110 2H4a1 1 0 01-1-1zm0 6a1 1 0 011-1h16a1 1 0 110 2H4a1 1 0 01-1-1zm0 6a1 1 0 011-1h16a1 1 0 110 2H4a1 1 0 01-1-1z">
            </path>
          </svg>
        </button>
      </div>
      <div class="fixed inset-0 z-20 overflow-hidden" :style="{ display: menuIsActive ? 'block' : 'none' }">
        <div class="absolute inset-0 z-10 overflow-hidden">
          <div aria-hidden="true" class="absolute inset-0 transition-opacity bg-gray-500 bg-opacity-75"></div>
          <section aria-labelledby="slide-over-heading" class="absolute inset-y-0 right-0 flex max-w-full pl-10">
            <div class="relative w-screen max-w-md">
              <div class="absolute top-0 left-0 flex pt-4 pr-2 -ml-8 sm:-ml-10 sm:pr-4">
                <button
                  class="text-gray-300 rounded-md hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                  @click.prevent="menuClick()"
                >
                  <span class="sr-only">Close panel</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" aria-hidden="true" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>
              <div class="flex flex-col h-full py-6 overflow-y-scroll bg-white shadow-xl">
                <div class="px-4 sm:px-6">
                  <NuxtLink to="/" aria-current="page"
                    class="block w-64 mx-auto nuxt-link-exact-active nuxt-link-active">
  
                    <!--Input the Logo-->
  
                  </NuxtLink>
                </div>
                <div class="relative flex-1 px-4 mt-6 sm:px-6">
                  <div class="absolute inset-0 px-4 sm:px-6">
                    <div aria-hidden="true" class="h-full space-y-2">
                      <div>
                        <NuxtLink to="/" aria-current="page"
                          class="inline-block w-full px-2 py-1 font-medium rounded bg-theme-100 hover:bg-theme-200 mobile-menu hover:text-theme-900 nuxt-link-exact-active nuxt-link-active">
                          Home
                        </NuxtLink>
                      </div>
                      <div>
                        <NuxtLink to="/developer"
                          class="inline-block w-full px-2 py-1 font-medium rounded bg-theme-100 hover:bg-theme-200 mobile-menu hover:text-theme-900">
                          Developer
                        </NuxtLink>
                      </div>
                      <div>
                        <div class="cursor-pointer" @click.prevent="toggleSubmenu('theDunmanResidences')">
                          <div
                            class="flex items-center justify-between w-full px-2 py-1 font-medium rounded bg-theme-100 hover:text-theme-900 hover:bg-theme-200">
                            <p>Grand Dunman</p>
                            <svg fill="currentColor" viewBox="0 0 24 24"
                              class="w-5 h-5 transition transform rotate-180">
                              <path
                                d="M18.707 15.707a1 1 0 01-1.414 0L12 10.414l-5.293 5.293a1 1 0 01-1.414-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 010 1.414z">
                              </path>
                            </svg>
                          </div>
                          <ul class="py-2 space-y-2 text-gray-600" :class="{ 'hidden': !submenus.theDunmanResidences.isOpen }">
                            <li class="ml-3 transition hover:text-theme-600 mobile-sub-menu">
                              <NuxtLink to="/project-details" class="inline-block w-full">Project Details</NuxtLink>
                            </li>
                            <li class="ml-3 transition hover:text-theme-600 mobile-sub-menu">
                              <NuxtLink to="/location-map" class="inline-block w-full">Location Map</NuxtLink>
                            </li>
                            <li class="ml-3 transition hover:text-theme-600 mobile-sub-menu">
                              <NuxtLink to="/site-plan" class="inline-block w-full">Site Plan</NuxtLink>
                            </li>
                            <li class="ml-3 transition hover:text-theme-600 mobile-sub-menu">
                              <NuxtLink to="/360-degree-view-site-plan" class="inline-block w-full">Virtual Tour</NuxtLink>
                            </li>
                            <li class="ml-3 transition hover:text-theme-600 mobile-sub-menu">
                              <NuxtLink to="/floor-plan" class="inline-block w-full">Floor Plan</NuxtLink>
                            </li>
                            <li class="ml-3 transition hover:text-theme-600 mobile-sub-menu">
                              <NuxtLink to="/pricing" class="inline-block w-full">Pricing</NuxtLink>
                            </li>
                            <li class="ml-3 transition hover:text-theme-600 mobile-sub-menu">
                              <NuxtLink to="/gallery" class="inline-block w-full">Gallery</NuxtLink>
                            </li>
                            <li class="ml-3 transition hover:text-theme-600 mobile-sub-menu">
                              <NuxtLink to="/video" class="inline-block w-full">Video</NuxtLink>
                            </li>
                            <li class="ml-3 transition hover:text-theme-600 mobile-sub-menu">
                              <NuxtLink to="/e-brochure" class="inline-block w-full">e-Brochure</NuxtLink>
                            </li>
                            <li class="ml-3 transition hover:text-theme-600 mobile-sub-menu">
                              <NuxtLink to="/elevation-chart" class="inline-block w-full">Elevation Chart</NuxtLink>
                            </li>
                            <li class="ml-3 transition hover:text-theme-600 mobile-sub-menu">
                              <NuxtLink to="/balance-units-chart" class="inline-block w-full">Balance Units Chart</NuxtLink>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div>
                        <div class="cursor-pointer" @click.prevent="toggleSubmenu('dunman')">
                          <div
                            class="flex items-center justify-between w-full px-2 py-1 font-medium rounded bg-theme-100 hover:text-theme-900 hover:bg-theme-200">
                            <p>Dunman</p>
                            <svg fill="currentColor" viewBox="0 0 24 24"
                              class="w-5 h-5 transition transform rotate-180">
                              <path
                                d="M18.707 15.707a1 1 0 01-1.414 0L12 10.414l-5.293 5.293a1 1 0 01-1.414-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 010 1.414z">
                              </path>
                            </svg>
                          </div>
                          <ul class="py-2 space-y-2 text-gray-600" :class="{ 'hidden': !submenus.dunman.isOpen }">
                            <li class="ml-3 transition hover:text-theme-600 mobile-sub-menu">
                              <NuxtLink to="/dunman/payar-lebar" class="inline-block w-full">Payar Lebar Airbase</NuxtLink>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div>
                        <div class="cursor-pointer" @click.prevent="toggleSubmenu('press')">
                          <div
                            class="flex items-center justify-between w-full px-2 py-1 font-medium rounded bg-theme-100 hover:text-theme-900 hover:bg-theme-200">
                            <p>Press</p>
                            <svg fill="currentColor" viewBox="0 0 24 24"
                              class="w-5 h-5 transition transform rotate-180">
                              <path
                                d="M18.707 15.707a1 1 0 01-1.414 0L12 10.414l-5.293 5.293a1 1 0 01-1.414-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 010 1.414z">
                              </path>
                            </svg>
                          </div>
                          <ul class="py-2 space-y-2 text-gray-600" :class="{ 'hidden': !submenus.press.isOpen }">
                            <li class="ml-3 transition hover:text-theme-600 mobile-sub-menu">
                              <NuxtLink to="/press/press-one" class="inline-block w-full">Mega Private Housing Site In Dunman Road Up For Sale</NuxtLink>
                            </li>
                            <li class="ml-3 transition hover:text-theme-600 mobile-sub-menu">
                              <NuxtLink to="/press/press-two" class="inline-block w-full">Residential Site At Dunman Road Up For Tender, With Bid Prices Expected To Hit $1.3 Bil</NuxtLink>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div>
                        <div class="cursor-pointer" @click.prevent="toggleSubmenu('financing')">
                          <div
                            class="flex items-center justify-between w-full px-2 py-1 font-medium rounded bg-theme-100 hover:text-theme-900 hover:bg-theme-200">
                            <p>Financing</p>
                            <svg fill="currentColor" viewBox="0 0 24 24"
                              class="w-5 h-5 transition transform rotate-180">
                              <path
                                d="M18.707 15.707a1 1 0 01-1.414 0L12 10.414l-5.293 5.293a1 1 0 01-1.414-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 010 1.414z">
                              </path>
                            </svg>
                          </div>
                          <ul class="py-2 space-y-2 text-gray-600" :class="{ 'hidden': !submenus.financing.isOpen }">
                            <li class="ml-3 transition hover:text-theme-600 mobile-sub-menu">
                              <NuxtLink to="/financing/stamp-duty" class="inline-block w-full">Stamp Duty</NuxtLink>
                            </li>
                            <li class="ml-3 transition hover:text-theme-600 mobile-sub-menu">
                              <NuxtLink to="/financing/purchase-timeline" class="inline-block w-full">Purchase Timeline</NuxtLink>
                            </li>
                            <li class="ml-3 transition hover:text-theme-600 mobile-sub-menu">
                              <NuxtLink to="/financing/payment-scheme" class="inline-block w-full">Payment Scheme</NuxtLink>
                            </li>
                            <li class="ml-3 transition hover:text-theme-600 mobile-sub-menu">
                              <NuxtLink to="/financing/housing-loan-information" class="inline-block w-full">Housing Loan Information</NuxtLink>
                            </li>
                            <li class="ml-3 pt-4">
                              <div class="border-b border-dashed">
                                <div class="-mt-3 text-gray-400">Calculator</div>
                              </div>
                            </li>
                            <li class="ml-3 transition hover:text-theme-600 mobile-sub-menu">
                              <NuxtLink to="/financing/maximum-loan-eligibility-calculator-tdsr" class="inline-block w-full">Maximum Loan Eligibility Calculator (TDSR)</NuxtLink>
                            </li>
                            <li class="ml-3 transition hover:text-theme-600 mobile-sub-menu">
                              <NuxtLink to="/financing/rental-yield-calculator" class="inline-block w-full">Rental Yield Calculator</NuxtLink>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div>
                        <NuxtLink to="/book-an-appointment" class="inline-block w-full px-2 py-1 font-medium rounded bg-theme-100 hover:bg-theme-200 mobile-menu hover:text-theme-900">Book Showflat</NuxtLink>
                      </div>
                      <div>
                        <NuxtLink to="/contact-us" class="inline-block w-full px-2 py-1 font-medium rounded bg-theme-100 hover:bg-theme-200 mobile-menu hover:text-theme-900">Contact Us</NuxtLink>
                      </div>
                      <NuxtLink to="/book-an-appointment" class="inline-block font-medium text-white transition rounded bg-theme-600 hover:bg-theme-900 w-full p-2 text-center">Get VVIP Discount</NuxtLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        menuIsActive: false,
        submenus: {
          theDunmanResidences: {
            isOpen: false
          },
          dunman: {
            isOpen: false
          },
          press: {
            isOpen: false
          },
          financing: {
            isOpen: false
          }
        }
      }
    },
    watch: {
      $route() {
        this.menuIsActive = false
      }
    },
    methods: {
      menuClick() {
        this.menuIsActive = !this.menuIsActive
      },
      toggleSubmenu(submenuKey) {
        this.submenus[submenuKey].isOpen = !this.submenus[submenuKey].isOpen
      }
    }
  }
  </script>
  