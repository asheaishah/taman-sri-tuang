<template>
  <div>
    <div class="py-12 select-none bg-theme-700">
      <div class="text-xl font-semibold text-center text-white sm:text-4xl">
        Gallery
      </div>
    </div>
    <section>
      <div class="max-w-6xl px-4 py-12 mx-auto space-y-6">
        <ImageModal :bed-room-prop="imageUrl" />
        <div>
          <p class="max-w-2xl mx-auto text-center">
            Disclaimer: Illustrative Image with Update Policy
            </p>
            <br>
            <p>
              The image below is for illustrative purposes only. It does not represent real individuals, places, events, or products. The content is fictional and subject to change without notice.
              </p>
              <p>
              This image is intended for reference or concept demonstration only and should not be used for decision-making. Any updates or alterations are at the discretion of the image creator.
               </p>
          <br><br>
        </div>
        
        <section class="py-6">
          <NuxtLink
            to="/video"
            class="
              inline-flex
              items-center
              justify-center
              w-full
              px-3
              py-3
              text-white
              transition
              rounded
              sm:px-0
              hover:bg-theme-900
              bg-theme-700
            "
          >
            Continue To Grand Dunman Video
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
    <BookAppointment />
  </div>
</template>
<script>
export default {
  data() {
    return {
      imageUrl: [
        { url: 'GrandDunman-Perspective-3-360x220' }, 
        { url: 'GrandDunman-Perspective-4-360x220' },
        { url: 'GrandDunman-Perspective-5-360x220' }, 
        { url: 'GrandDunman-Perspective-6-360x220' }, 
        { url: 'GrandDunman-Perspective-7-360x220' }, 
        { url: 'GrandDunman-Perspective-8-360x220' }, 
        { url: 'GrandDunman-Perspective-9-360x220' }, 
        { url: 'GrandDunman-Perspective-10-360x220' }, 
        { url: 'GrandDunman-Perspective-11-360x220' }, 
      ],
    }
  },
}
</script>
