<template>
  <div class="hidden xl:block">
      <div class="flex justify-between max-w-6xl px-4 mx-auto">
          <div class="p-1">
              <div class="flex justify-center">
                  <NuxtLink to="/" aria-current="page">
                    <img src="~/assets/img/logo.png" alt=""
                                  class="ml-20 w-400 h-500 rounded" />
                    <span class="font-serif text-4xl">Taman Sri Tuang</span>
                  </NuxtLink>
              </div>
              <div class="py-2 font-semibold text-center">Official Site ©</div>
              <ul class="inline-flex items-center space-x-px border-t border-gray-300">
                  <li class="bg-gray-900 hover:bg-gray-300">
                      <NuxtLink class="inline-block px-2 py-2 menu-item text-white hover:text-gray-900" to="/" exact>Home
                      </NuxtLink>
                  </li>
                  <li class="menu-item group bg-gray-900 hover:bg-gray-300">
                      <NuxtLink class="inline-block px-2 py-2 text-white hover:text-gray-900"
                          :to="$route.path + '#'">
                          About</NuxtLink>
                      <div class="absolute z-10 hidden py-2 -ml-2 transition" style="min-width: 300px">
                          <ul class="p-2 space-y-1 overflow-hidden text-sm bg-white rounded shadow-md">
                              <li>
                                  <NuxtLink
                                      class="inline-block w-full px-2 py-2 menu-item text-white hover:text-gray-900"
                                      to="/about/developer">
                                      Developer</NuxtLink>
                              </li>
                              <li>
                                  <NuxtLink
                                      class="inline-block w-full px-2 py-2 menu-item text-white hover:text-gray-900"
                                      to="/about/tst">
                                      Taman Sri Tuang</NuxtLink>
                              </li>
                          </ul>
                      </div>
                  </li>
                  <li class="menu-item group bg-gray-900 hover:bg-gray-300">
                      <NuxtLink class="inline-block px-2 py-2 text-white hover:text-gray-900"
                          :to="$route.path + '#'">House Property</NuxtLink>
                      <div class="absolute z-10 hidden py-2 -ml-2 transition" style="min-width: 300px">
                          <ul class="p-2 space-y-1 overflow-hidden text-sm bg-white rounded shadow-md">
                              <li>
                                  <NuxtLink to="/house-property/floor-plan"
                                      class="inline-block w-full px-2 py-2 menu-item text-white hover:text-gray-900">
                                      Floor Plan
                                  </NuxtLink>
                              </li>
                              <li>
                                  <NuxtLink to="/house-property/pricing"
                                      class="inline-block w-full px-2 py-2 menu-item text-white hover:text-gray-900">
                                      Pricing
                                  </NuxtLink>
                              </li>
                              <li>
                                  <NuxtLink to="/house-property/site-plan"
                                      class="inline-block w-full px-2 py-2 menu-item text-white hover:text-gray-900">
                                      Site Plan
                                  </NuxtLink>
                              </li>
                              <li>
                                  <NuxtLink to="/house-property/video"
                                      class="inline-block w-full px-2 py-2 menu-item text-white hover:text-gray-900">
                                      Video Showcase
                                  </NuxtLink>
                              </li>
                          </ul>
                      </div>
                  </li>
                  <li class="bg-gray-900 hover:bg-gray-300">
                      <NuxtLink class="inline-block px-2 py-2 menu-item text-white hover:text-gray-900" to="/location/direction" exact>Location
                      </NuxtLink>
                  </li>
                  <li class="bg-gray-900 hover:bg-gray-300">
                      <NuxtLink class="inline-block px-2 py-2 menu-item text-white hover:text-gray-900" to="/facilities" exact>Amenities / Facilities
                      </NuxtLink>
                  </li>
                  <li class="bg-gray-900 hover:bg-gray-300">
                      <NuxtLink class="inline-block px-2 py-2 menu-item text-white hover:text-gray-900" to="/project-details" exact>Project Detail
                      </NuxtLink>
                  </li>
                  <li class="bg-gray-900 hover:bg-gray-300">
                      <NuxtLink to="/contact-us" class="inline-block px-2 py-2 menu-item text-white hover:text-gray-900">
                          Contact Us
                      </NuxtLink>
                  </li>
              </ul>
          </div>
      </div>
      <div class="py-2 text-center text-white font-bold bg-gradient-to-r from-theme-800 to-yellow-100">
        <p 
    class="animate-notification" 
    :class="{ 'animate-notification-hover': hovered }"
    @mouseenter="hovered = true"
    @mouseleave="hovered = false"
>
            For optimal service quality, all Showflat Viewings are now exclusively by appointment. To schedule yours or for more information, please <NuxtLink to="/contact-us" class="underline text-white">reach out to us</NuxtLink>.
            </p>
      </div>
    </div>
  </template>

<script>
export default {
  data() {
    return {
      hovered: false,
    };
  },
};
</script>


<style scoped>
  @keyframes notification {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    50% {
      opacity: 1;
      transform: translateY(0);
    }
    100% {
      opacity: 0;
      transform: translateY(-20px);
    }
  }
  
  @keyframes notification-hover {
    0% {
      opacity: 1;
      transform: translateY(0);
    }
    50% {
      opacity: 1;
      transform: rotate(360deg);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .animate-notification {
    animation: notification 3s infinite;
  }
  
  .animate-notification-hover {
    animation: notification-hover 3s infinite;
  }
  
  </style>