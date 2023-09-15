<template>
  <div>
    <div class="py-5 select-none bg-brown-100">
      <div class="text-xl font-semibold text-center text-black sm:text-4xl">
        Location Map
      </div>
    </div>
    <section>
      <div class="max-w-6xl px-4 py-12 mx-auto space-y-6">
        <img
          src="~assets/img/tst-map.jpg"
          alt="Location Plan for Grand Dunman"
          class="mx-auto"
        />
        <a class="hover:font-semibold" href="https://goo.gl/maps/NX4ajRRBPhYcmfMR9">Site location: https://goo.gl/maps/NX4ajRRBPhYcmfMR9</a>

      <br>

      <div class="map-container">
    <iframe 
      :src="mapUrl"
      class="map-iframe"
      allowfullscreen 
      loading="lazy" 
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe><br>
    
  </div>
  

        
      </div>
    </section>
    <BookAppointment />
  </div>
</template>

<script>
export default {
  data() {
    return {
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d2718.410657148126!2d110.49362141166473!3d1.4374472847416577!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sus!4v1694735773262!5m2!1sen!2sus'
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