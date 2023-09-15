<template>
    <div>
      <div class="py-5 select-none bg-brown-100">
        <div class="text-xl font-bold text-center text-black sm:text-4xl">
          Video Showcase
        </div>
      </div>
      <section>
        <div class="max-w-6xl px-4 py-12 mx-auto space-y-6">
          <p class="max-w-2xl mx-auto text-center">
            </p>
            <iframe
                loop="1"
                width="1000"
                height="600"
                class="mx-auto"
                src="https://www.youtube.com/embed/H1n2-I-Fo_Y?si=Qw6poBNTYEW-yt7F"
                title="Taman Sri Tuang"
                frameborder="0"
                allow="accelerometer;
                autoplay;
                clipboard-write;
                encrypted-media;
                gyroscope;
                picture-in-picture"
                allowfullscreen
              ></iframe>
          <h3 class="text-center"> Source and Credit from <a target="_blank" class="transition text-brown-300 hover:text-brown-600" href="https://www.youtube.com/embed/H1n2-I-Fo_Y?si=Qw6poBNTYEW-yt7F">Taman Sri Tuang</a></h3>
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
                hover:bg-brown-400
                bg-brown-200
              "
            >
              Continue To Site Location
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
  