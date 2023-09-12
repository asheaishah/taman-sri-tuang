<template>
  <div>
    <div class="py-12 select-none bg-gradient-to-b from-yellow-600 to-yellow-300">
      <div class="text-xl font-semibold text-center text-black sm:text-4xl">
        Location Map
      </div>
    </div>
    <section>
      <div class="max-w-6xl px-4 py-12 mx-auto space-y-6">
        <img
          src="~assets/img/Borneo29_Location.jpg"
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
  

        
      </div>
    </section>
    <BookAppointment />
  </div>
</template>

<script>
export default {
  data() {
    return {
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3988.519784377071!2d110.47579900000001!3d1.46184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMcKwMjcnNDIuNiJOIDExMMKwMjgnMzIuOSJF!5e0!3m2!1sen!2smy!4v1694424568995!5m2!1sen!2smy'
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