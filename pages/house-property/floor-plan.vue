<template>
  <div>
    <div class="py-5 select-none bg-brown-100">
      <div class="text-xl font-bold text-center text-black sm:text-4xl">
        Floor Plan
      </div>
    </div>
    <section class="bg-white rounded">
      <div class="max-w-6xl px-4 py-4 mx-auto prose text-justify">
        <p>
          Taman Sri Tuang offers two type of properties, which are single storey terrace property and 1 & 1/2 storey terrace, which you can choose based on your own preferences. For your information, single storey terrace have 2 type which you can choose from and these are Type A1 and A2, the slight difference between these two type of single storey terrace properties is the size. While 1 & 1/2 storey terrace is known as Type B and it have ground floor and upper floor.
        </p>
      </div>
    </section>
    <section>
      <div class="max-w-6xl px-4 py-12 mx-auto space-y-12">
        <div class="space-y-4">
          <h3 class="text-xl font-semibold sm:text-2xl text-center">
            Type A1 and A2
          </h3>
          <BedroomImageModal :bed-room-prop="TypeA1A2" />
        </div>
        <div class="space-y-4">
          <h3 class="text-xl font-semibold sm:text-2xl text-center">
            Type B
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
              hover:bg-brown-400
              bg-brown-200
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
      TypeA1A2: [
        { url: 'type-a1' },
        { url: 'type-a2' },
      ],
      TypeB: [
      { url: 'type-b-ground' },
      { url: 'type-b-upper' },
      ],
    }
  },
}
</script>
