<template>
  <div>
    <div>
      <div class="py-12 select-none bg-gradient-to-b from-yellow-600 to-yellow-300">
        <div class="text-xl font-bold text-center text-black sm:text-4xl">
          Project Details
        </div>
      </div>
      <section class="py-12">
        <div class="max-w-6xl px-4 mx-auto">
          <div class="p-6 bg-white rounded-lg shadow-lg">
            <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label class="block text-gray-500 font-bold">Project Name</label>
                <p>Borneo 29</p>
              </div>
              <div>
                <label class="block text-gray-500 font-bold">Developer</label>
                <p>Menua Borneo Sdn. Bhd.</p>
              </div>
              <div>
                <label class="block text-gray-500 font-bold">Location</label>
                <p>Samarahan, Kota Samarahan, Sarawak</p>
              </div>
              <div>
                <label class="block text-gray-500 font-bold">District</label>
                <p>Kota Samarahan</p>
              </div>
              <div>
                <label class="block text-gray-500 font-bold">Tenure</label>
                <p>Freehold</p>
              </div>
              <div>
                <label class="block text-gray-500 font-bold">Site Use</label>
                <p>Residential Flat Developement</p>
              </div>
              <div>
                <label class="block text-gray-500 font-bold">Total No. of Units</label>
                <p>29 Residential Units</p>
              </div>
              <div>
                <label class="block text-gray-500 font-bold">Development</label>
                <p>29 house unit with 2 storey each</p>
              </div>
              <div>
                <label class="block text-gray-500 font-bold">Expected Date of Legal Completion</label>
                <p>April 2025</p>
              </div>
              
            </div>
          </div>
          <div class="py-4 italic text-center text-gray-500">
            (Project details for Borneo 29 may be subjected to change without prior notice)
          </div>
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
              Continue To Location Map
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
                ></path></svg
            ></NuxtLink>
          </section>
        </div>
      </section>
    </div>
  </div>
</template>
