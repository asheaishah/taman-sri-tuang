<template>
  <div>
    <div class="py-12 select-none bg-theme-700">
      <div class="text-xl font-semibold text-center text-white sm:text-4xl">
        Location Map
      </div>
    </div>
    <section>
      <div class="max-w-6xl px-4 py-12 mx-auto space-y-6">
        <img
          src="~assets/img/Grand-Dunman-Location-Map-scaled.jpg"
          alt="Location Plan for Grand Dunman"
          class="mx-auto"
        />

      <br>

      <div class="map-container">
    <iframe 
      :src="mapUrl"
      class="map-iframe"
      allowfullscreen 
      loading="lazy" 
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>

      <!-- <NuxtLink to="/public/pdf/location-map-lilium.pdf" target="_blank"
            ><img
              src="~assets/img/location-map-lilium.png"
              class="mx-auto"
              alt="The Lilium Location Map"
          /></NuxtLink> 
          
          <h3 class="text-center sm:text-xl">Do <strong>"click"</strong> the above picture to view The Lilium Location Map</h3> -->

        <h3 class="text-xl font-semibold sm:text-2xl">
          Amenities @ Grand Dunman
        </h3>
        <div class="p-4 space-y-3 bg-white shadow-md">
          <h4 class="text-xl font-semibold tracking-wider text-theme-600">
            SHOPPING MALLS, MARKET &amp; GROCERIES
          </h4>
          <div class="space-y-1">
            <h5 class="text-lg font-semibold text-gray-900"></h5>
            <div class="space-y-2">
      
             <!--Start -->
             <!--Train Vector -->
              <div
                class="grid grid-cols-1 text-gray-600 sm:grid-cols-2 sm:gap-60">
                <p class="text-gray-600">Haig Road Market</p>
                <div class="flex items-center">
                  <div class="text-theme-500">
                    <!---->
                  </div>
                </div>
              </div>
              <!-- End First Row -->
              <div
                class="grid grid-cols-1 text-gray-600 sm:grid-cols-2 sm:gap-60">
                <p class="text-gray-600">Cooked Food Centre</p>
                <div class="flex items-center">
                  <div class="text-theme-500">
                    <!---->
                  </div>
                </div>
              </div>
              <div
                class="grid grid-cols-1 text-gray-600 sm:grid-cols-2 sm:gap-60"
              >
                <p class="text-gray-600">Kinex Mall</p>
                <div class="flex items-center">
                  <div class="text-theme-500">
                    <!---->
                  </div>
                  
                </div>
              </div>
              <div
                class="grid grid-cols-1 text-gray-600 sm:grid-cols-2 sm:gap-60">
                <p class="text-gray-600">Dunman Food Centre</p>
                <div class="flex items-center">
                  <div class="text-theme-500">
                    <!---->
                  </div>
                </div>
              </div>
              <div
                class="grid grid-cols-1 text-gray-600 sm:grid-cols-2 sm:gap-60"
              >
                <p class="text-gray-600">Geylang Serai Market & Food Centre</p>
                <div class="flex items-center">
                  <div class="text-theme-500">
                    <!---->
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="p-4 space-y-3 bg-white shadow-md">
          <h4 class="text-xl font-semibold tracking-wider text-theme-600">
            EDUCATION INSTITUTIONS
          </h4>
          <div class="space-y-1">
            <h5 class="text-lg font-semibold text-gray-900"></h5>
            <div class="space-y-2">
              <div
                class="grid grid-cols-1 text-gray-600 sm:grid-cols-2 sm:gap-60"
              >
                <p class="text-gray-600">Eton House International School (Broadrick)</p>
                <div class="flex items-center">
                  <div class="text-theme-500">
                    <!---->
                  </div>
                </div>
              </div>
              <div
                class="grid grid-cols-1 text-gray-600 sm:grid-cols-2 sm:gap-60">
                <p class="text-gray-600">Broadrick Secondary School</p>
                <div class="flex items-center">
                  <div class="text-theme-500">
                    <!---->
                  </div>
                </div>
              </div>
              <div
                class="grid grid-cols-1 text-gray-600 sm:grid-cols-2 sm:gap-60">
                <p class="text-gray-600">Chung Cheng High School</p>
                <div class="flex items-center">
                  <div class="text-theme-500">
                    <!---->
                  </div>
                </div>
              </div>
              <div
                class="grid grid-cols-1 text-gray-600 sm:grid-cols-2 sm:gap-60">
                <p class="text-gray-600">Kong Hwa School</p>
                <div class="flex items-center">
                  <div class="text-theme-500">
                    <!---->
                  </div>
                </div>
              </div>
              <div
                class="grid grid-cols-1 text-gray-600 sm:grid-cols-2 sm:gap-60">
                <p class="text-gray-600">Eton House International School</p>
                <div class="flex items-center">
                  <div class="text-theme-500">
                    <!---->
                  </div>
                  
                </div>
              </div>
              <div
                class="grid grid-cols-1 text-gray-600 sm:grid-cols-2 sm:gap-60">
                <p class="text-gray-600">Tanjong Katong Girls’ School</p>
                <div class="flex items-center">
                  <div class="text-theme-500">
                    <!---->
                  </div>
                  
                </div>
              </div>
              <div
                class="grid grid-cols-1 text-gray-600 sm:grid-cols-2 sm:gap-60">
                <p class="text-gray-600">Dunman High School</p>
                <div class="flex items-center">
                  <div class="text-theme-500">
                    <!---->
                  </div>
                </div>
              </div>
              <div
                class="grid grid-cols-1 text-gray-600 sm:grid-cols-2 sm:gap-60">
                <p class="text-gray-600">Tanjong Katong Secondary School</p>
                <div class="flex items-center">
                  <div class="text-theme-500">
                    <!---->
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="p-4 space-y-3 bg-white shadow-md">
          <h4 class="text-xl font-semibold tracking-wider text-theme-600">
            RECREATION
          </h4>
          <div class="space-y-1">
            <h5 class="text-lg font-semibold text-gray-900"></h5>
            <div class="space-y-2">
              <div
                class="grid grid-cols-1 text-gray-600 sm:grid-cols-2 sm:gap-60"
              >
                <p class="text-gray-600">Marina Reservoir</p>
                <div class="flex items-center">
                  <div class="text-theme-500">
                    <!---->
                  </div>
                </div>
              </div>
              <div
                class="grid grid-cols-1 text-gray-600 sm:grid-cols-2 sm:gap-60"
              >
                <p class="text-gray-600">The Eurasian Association of Singapore</p>
                <div class="flex items-center">
                  <div class="text-theme-500">
                    <!---->
                  </div>
                  
                </div>
              </div>
              <div
                class="grid grid-cols-1 text-gray-600 sm:grid-cols-2 sm:gap-60"
              >
                <p class="text-gray-600">Singapore Swimming Club</p>
                <div class="flex items-center">
                  <div class="text-theme-500">
                    <!---->
                  </div>
                </div>
              </div>
              <div
                class="grid grid-cols-1 text-gray-600 sm:grid-cols-2 sm:gap-60"
              >
                <p class="text-gray-600">Chinese Swimming Club</p>
                <div class="flex items-center">
                  <div class="text-theme-500">
                    <!---->
                  </div>
                </div>
              </div>
              <div
                class="grid grid-cols-1 text-gray-600 sm:grid-cols-2 sm:gap-60"
              >
                <p class="text-gray-600">National Stadium Singapore</p>
                <div class="flex items-center">
                  <div class="text-theme-500">
                    <!---->
                  </div>
                </div>
              </div>
              <div
                class="grid grid-cols-1 text-gray-600 sm:grid-cols-2 sm:gap-60"
              >
                <p class="text-gray-600">Indoor Stadium</p>
                <div class="flex items-center">
                  <div class="text-theme-500">
                    <!---->
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="p-4 space-y-3 bg-white shadow-md">
          <h4 class="text-xl font-semibold tracking-wider text-theme-600">
            TRANSPORT &amp; CONNECTIVITY
          </h4>
          <div class="space-y-1">
            <h5 class="text-lg font-semibold text-gray-900"></h5>
            <div class="space-y-2">
              <div
                class="grid grid-cols-1 text-gray-600 sm:grid-cols-2 sm:gap-60"
              >
                <p class="text-gray-600">Dakota (CC8)</p>
                <div class="flex items-center">
                  <div class="text-theme-500">
                    <!---->
                  </div>
                 
                </div>
              </div>
              <div
                class="grid grid-cols-1 text-gray-600 sm:grid-cols-2 sm:gap-60"
              >
                <p class="text-gray-600">
                  Mountbatten (CC7)
                </p>
                <div class="flex items-center">
                  <div class="text-theme-500">
                    <!---->
                  </div>
                 
                </div>
              </div>
              <div
                class="grid grid-cols-1 text-gray-600 sm:grid-cols-2 sm:gap-60"
              >
                <p class="text-gray-600">
                  Katong Park MRT (TE24) 
                </p>
                <div class="flex items-center">
                  <div class="text-theme-500">
                    <!---->
                  </div>
                  
                </div>
              </div>
              <div
                class="grid grid-cols-1 text-gray-600 sm:grid-cols-2 sm:gap-60"
              >
                <p class="text-gray-600">
                 Thomson-East Coast Line (2023)
                </p>
                <div class="flex items-center">
                  <div class="text-theme-500">
                    <!---->
                  </div>
                 
                </div>
              </div>
              <div
                class="grid grid-cols-1 text-gray-600 sm:grid-cols-2 sm:gap-60"
              >
                <p class="text-gray-600">East Coast Parkway (ECP)
                </p>
                <div class="flex items-center">
                  <div class="text-theme-500">
                    <!---->
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="p-4 space-y-3 bg-white shadow-md">
          <h4 class="text-xl font-semibold tracking-wider text-theme-600">
            Healthcare & Community Centres
          </h4>
          <div class="space-y-1">
            <h5 class="text-lg font-semibold text-gray-900"></h5>
            <div class="space-y-2">
              <div
                class="grid grid-cols-1 text-gray-600 sm:grid-cols-2 sm:gap-60"
              >
                <p class="text-gray-600">Vincent’s Dental Surgery</p>
                <div class="flex items-center">
                  <div class="text-theme-500">
                    <!---->
                  </div>
                </div>
              </div>
              <div
                class="grid grid-cols-1 text-gray-600 sm:grid-cols-2 sm:gap-60"
              >
                <p class="text-gray-600">Katong Family Clinic Pte Ltd</p>
                <div class="flex items-center">
                  <div class="text-theme-500">
                    <!---->
                  </div>
             
                </div>
              </div>
              <div
                class="grid grid-cols-1 text-gray-600 sm:grid-cols-2 sm:gap-60"
              >
                <p class="text-gray-600">Geylang Serai CC</p>
                <div class="flex items-center">
                  <div class="text-theme-500">
                    <!---->
                  </div>
             
                </div>
              </div>
              <div
                class="grid grid-cols-1 text-gray-600 sm:grid-cols-2 sm:gap-60"
              >
                <p class="text-gray-600">Mountbatten CC</p>
                <div class="flex items-center">
                  <div class="text-theme-500">
                    <!---->
                  </div>
             
                </div>
              </div>
            </div>
          </div>
        </div>
        <section class="py-6">
          <NuxtLink
            to="/site-plan"
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
            Continue To Site Plan
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
    <BookAppointment />
  </div>
</template>

<script>
export default {
  data() {
    return {
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7783156568266!2d103.88601178273224!3d1.3082421952741143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da156693251d91%3A0xfc141c355bd30e9b!2sGrand%20Dunman!5e0!3m2!1sen!2smy!4v1689953069160!5m2!1sen!2smy'
    };
  },
};
</script>

<style scoped>
.map-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh; /* adjust this value according to your needs */
}

.map-iframe {
  width: 100%;
  max-width: 800px;
  height: 50vh; /* adjust this value according to your needs */
  border: none;
}
</style>