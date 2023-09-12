<template>
  <div>
    <div class="py-12 select-none bg-gradient-to-b from-yellow-600 to-yellow-300">
      <div class="text-xl font-bold text-center text-black sm:text-4xl">
        Site Plan
      </div>
    </div>
    <section>
      <div class="max-w-6xl px-4 py-12 mx-auto space-y-6">
        <img
          src="~assets/img/site-plan.jpg"
          alt="SitePlan for Grand Dunman"
          class="mx-auto w-auto h-21"
        />
        <section class="py-6">
          <NuxtLink
            to="/location/direction"
            class="
              inline-flex
              items-center
              justify-center
              w-full
              px-3
              py-3
              text-black
              transition
              rounded
              sm:px-0
              hover:bg-yellow-600 
              bg-yellow-300
            "
          >
            Continue To Location of Borneo 29 
            <svg
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              class="w-5 h-5"
            >
              <path
                d="M13 6l6 6-6 6M5 6l6 6-6 6"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path></svg>
          </NuxtLink>
        </section>
      </div>
    </section>
  </div>
</template>
