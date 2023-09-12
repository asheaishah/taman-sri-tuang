<template>
  <div>
    <div class="py-12 select-none bg-gradient-to-b from-yellow-600 to-yellow-300">
      <div class="text-xl font-bold text-center text-black sm:text-4xl">
        Floor Plan
      </div>
    </div>
    <section class="bg-white rounded">
      <div class="max-w-6xl px-4 py-4 mx-auto prose text-justify">
        <p>
          Borneo 29 residential property offers two type of double-storey terrace house which you can choose based on your own preferences. Planning to look for a house for your growing family member or want to own your own house to yourself, Borneo 29 us great choice for your house hunting.
        </p>
      </div>
    </section>
    <section>
      <div class="max-w-6xl px-4 py-12 mx-auto space-y-12">
        <div class="space-y-4">
          <h3 class="text-xl font-semibold sm:text-2xl text-center">
            Type A (1,410 sqft)
          </h3>
          <BedroomImageModal :bed-room-prop="TypeA" />
        </div>
        <div class="space-y-4">
          <h3 class="text-xl font-semibold sm:text-2xl text-center">
            Type B (1,470 sqft)
          </h3>
          <BedroomImageModal :bed-room-prop="TypeB" />
        </div>
        <section class="py-6">
          <NuxtLink
            to="/house-property/pricing"
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
            Continue To Pricing
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
              ></path>
              </svg>
              </NuxtLink>
        </section>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      TypeA: [
        { title: 'Ground Floor Plan', url: 'Type_A_GF' },
        { title: 'First Floor Plan', url: 'Type_A_1F' },
      ],
      TypeB: [
      { title: 'Ground Floor Plan', url: 'Type_B_GF' },
      { title: 'First Floor Plan', url: 'Type_B_1F' },
      ],
    }
  },
}
</script>
