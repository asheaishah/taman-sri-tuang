<template>
    <!-- THIS IS DESKTOP VIEW-->
    <div class="hidden xl:block">
      <div class="flex justify-between max-w-6xl px-4 mx-auto">
        <div class="flex items-center p-1">
          <NuxtLink to="/" aria-current="page" class="w-44"></NuxtLink>
        </div>
        <div class="p-1">
          <div class="py-2 font-semibold text-center">Official Site ©</div>
          <ul class="inline-flex items-center space-x-px border-t border-gray-300">
            <li class="hover:bg-theme-700" v-for="item in menuItems" :key="item.name">
              <NuxtLink class="inline-block px-2 py-2 hover:text-white text-theme-900" :to="item.path" exact>
                {{ item.name }}
              </NuxtLink>
            </li>
          </ul>
        </div>
        <div class="flex flex-wrap items-center p-1">
          <NuxtLink to="/book-an-appointment" class="inline-block font-medium text-white transition rounded bg-theme-600 hover:bg-theme-900 p-2">
            Get VVIP Discount
          </NuxtLink>
        </div>
      </div>
      <div class="py-2 text-center text-white bg-gradient-to-r from-theme-800 to-yellow-100">
        <p 
    class="animate-notification" 
    :class="{ 'animate-notification-hover': hovered }"
    @mouseenter="hovered = true"
    @mouseleave="hovered = false"
>
    In response to Covid-19 precautions, all Showflat Viewings are by appointment only. 
    For more information, please 
    <NuxtLink to="/contact-us" class="underline text-white">
        write in or send us your contact
    </NuxtLink>.
</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        hovered: false,
        menuItems: [
          { name: 'Home', path: '/' },
          { name: 'Developer', path: '/developer' },
          { name: 'Normanton Park', path: '/project-details' },
          { name: 'Kent Ridge', path: '/greater-southern-waterfront-ura-masterplan' },
          { name: 'Financing', path: '/financing/stamp-duty' },
          { name: 'Book Showflat', path: '/book-an-appointment' },
          { name: 'Contact', path: '/contact-us' },
        ],
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
  