<template>
  <div>
    <div class="py-5 select-none bg-brown-100">
      <div class="text-xl font-bold text-center text-black sm:text-4xl">
        Site Plan
      </div>
    </div>
    <section>
      <div class="max-w-6xl px-4 py-4 mx-auto prose text-justify">
        <p>For your information, Taman Sri Tuang divided the area into 4 area which align with the booking/purchasing phase which are Phase 4,5,6 and 7. For more info of the site map you can visit the link at <a href="https://view.genial.ly/5e63af74c8da910fb5f1775d/interactive-content-tstphase-4" class="hover:font-semibold underline"> https://view.genial.ly/5e63af74c8da910fb5f1775d/interactive-content-tstphase-4 </a>.</p>
      </div>
      <div class="max-w-6xl px-4 py-12 mx-auto space-y-6">
        <img
          src="~assets/img/site-plan.jpeg"
          alt="SitePlan for Grand Dunman"
          class="mx-auto w-auto h-21"
        />
        <section class="py-6">
          <NuxtLink
            to="/house-property/video"
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
              hover:bg-brown-400
              bg-brown-200
            "
          >
            Continue To Video Showcase 
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
