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
      <div class="fixed inset-0 z-10 overflow-hidden" :style="{ display: menuIsActive ? 'block' : 'none' }">
        <div class="absolute inset-0 z-5 overflow-hidden">
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
                        <div class="cursor-pointer" @click.prevent="toggleSubmenu('about')">
                          <div
                            class="flex items-center justify-between w-full px-2 py-1 font-medium rounded bg-theme-100 hover:text-theme-900 hover:bg-theme-200">
                            <p>About</p>
                            <svg fill="currentColor" viewBox="0 0 24 24"
                              class="w-5 h-5 transition transform rotate-180">
                              <path
                                d="M18.707 15.707a1 1 0 01-1.414 0L12 10.414l-5.293 5.293a1 1 0 01-1.414-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 010 1.414z">
                              </path>
                            </svg>
                          </div>
                          <ul class="py-2 space-y-2 text-gray-600" :class="{ 'hidden': !submenus.about.isOpen }">
                            <li class="ml-3 transition hover:text-theme-600 mobile-sub-menu">
                              <NuxtLink to="/about/developer" class="inline-block w-full">Developer</NuxtLink>
                            </li>
                            <li class="ml-3 transition hover:text-theme-600 mobile-sub-menu">
                              <NuxtLink to="/about/borneo29" class="inline-block w-full">Borneo 29</NuxtLink>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div>
                        <div class="cursor-pointer" @click.prevent="toggleSubmenu('houseproperty')">
                          <div
                            class="flex items-center justify-between w-full px-2 py-1 font-medium rounded bg-theme-100 hover:text-theme-900 hover:bg-theme-200">
                            <p>House Property</p>
                            <svg fill="currentColor" viewBox="0 0 24 24"
                              class="w-5 h-5 transition transform rotate-180">
                              <path
                                d="M18.707 15.707a1 1 0 01-1.414 0L12 10.414l-5.293 5.293a1 1 0 01-1.414-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 010 1.414z">
                              </path>
                            </svg>
                          </div>
                          <ul class="py-2 space-y-2 text-gray-600" :class="{ 'hidden': !submenus.houseproperty.isOpen }">
                            <li class="ml-3 transition hover:text-theme-600 mobile-sub-menu">
                              <NuxtLink to="/house-property/site-plan" class="inline-block w-full">Site Plan</NuxtLink>
                            </li>
                            <li class="ml-3 transition hover:text-theme-600 mobile-sub-menu">
                              <NuxtLink to="/house-property/floor-plan" class="inline-block w-full">Floor Plan</NuxtLink>
                            </li>
                            <li class="ml-3 transition hover:text-theme-600 mobile-sub-menu">
                              <NuxtLink to="/house-property/pricing" class="inline-block w-full">Pricing</NuxtLink>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div>
                        <NuxtLink to="/location/direction" 
                          class="inline-block w-full px-2 py-1 font-medium rounded bg-theme-100 hover:bg-theme-200 mobile-menu hover:text-theme-900 nuxt-link-exact-active nuxt-link-active">
                          Location
                        </NuxtLink>
                      </div>
                      <div>
                        <NuxtLink to="/facilities" 
                          class="inline-block w-full px-2 py-1 font-medium rounded bg-theme-100 hover:bg-theme-200 mobile-menu hover:text-theme-900 nuxt-link-exact-active nuxt-link-active">
                          Amenities / Facilities
                        </NuxtLink>
                      </div>
                      <div>
                        <NuxtLink to="/project-details" 
                          class="inline-block w-full px-2 py-1 font-medium rounded bg-theme-100 hover:bg-theme-200 mobile-menu hover:text-theme-900 nuxt-link-exact-active nuxt-link-active">
                          Project Detail
                        </NuxtLink>
                      </div>
                      <div>
                        <NuxtLink to="/contact-us" 
                          class="inline-block w-full px-2 py-1 font-medium rounded bg-theme-100 hover:bg-theme-200 mobile-menu hover:text-theme-900 nuxt-link-exact-active nuxt-link-active">
                          Contact Us
                        </NuxtLink>
                      </div>
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
          about: {
            isOpen: false
          },
          houseproperty: {
            isOpen: false
          },
          facilities: {
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
  