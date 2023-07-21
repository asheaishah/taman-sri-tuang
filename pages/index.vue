<template>
  <div>
    <div class="space-y-12">
      <MainBanner />
      <section>
        <div class="px-4 mb-6 text-center">
          <h3 class="text-xl font-semibold sm:text-2xl tracking-widest">
            Grand Dunman
          </h3>
          <p>
            Latest Unit Sold: TBA |
            <NuxtLink to="/balance-units-chart" class="font-medium hover:underline text-theme-600">See the Balance Units
              Chart</NuxtLink>
          </p>
        </div>
        <div class="py-6 bg-theme-50">
          <div class="text-center">
            <h4 class="text-xl font-medium">Latest Updates</h4>
            <b>
              <p class="text-gray-600">Last updated: {{ currentDateAndTime() }} </p>
            </b>
          </div>
          <div class="max-w-6xl px-4 mx-auto prose text-gray-800">
            <div class="max-w-2xl px-4 mx-auto">
              <ul>
                <li>
                  <strong>{{ twoWeeksAgo() }} :</strong>
                  <NuxtLink to="/book-an-appointment" class="!text-theme-600">Book an Appointment</NuxtLink>
                  to view Grand Dunman and get Direct VVIP Preview
                  Price + Discounts.
                </li>
                <li>
                  <strong>{{ oneMonthAgo() }} :</strong> Check our latest 
                  <NuxtLink to="/balance-units-chart" class="!text-theme-600">
                    Grand Dunman Balance Unit Chart
                  </NuxtLink>
                  here
                </li>
                <li>
                  <strong>{{ oneMonthAgo() }} :</strong> Check our latest
                  <NuxtLink to="/pricing" class="!text-theme-600">
                    Grand Dunman Pricing
                  </NuxtLink>
                  here
                </li>
                <li>
                  <strong>{{ oneMonthAgo() }} :</strong>The latest
                  <NuxtLink to="/floor-plan" class="!text-theme-600">Grand Dunman Floor Plan</NuxtLink> is now
                  available.
                </li>
                <li>
                  <strong>{{ twoMonthsAgo() }} :</strong> Check your loan eligibility by
                  calculating at
                  <NuxtLink to="/financing/maximum-loan-eligibility-calculator-tdsr" class="!text-theme-600">Max Loan
                    Eligibility Calculator (TDSR)</NuxtLink>
                  on this website.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="max-w-6xl px-4 mx-auto">
          <div class="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div class="
                max-w-sm
                p-6
                mx-auto
                space-y-2
                text-center
                bg-white
                rounded-md
                shadow-md
              ">
              <img src="~/assets/img/home/singhaiyi-logo.jpg" alt="Grand Dunman Logo" class="mx-auto rounded" />
              <p class="text-lg font-semibold">Grand Dunman</p>
              <div class="space-y-4">
                <p>
                  As a rapidly evolving diversified real estate company, <NuxtLink to="/developer" class="transition text-theme-600 hover:text-theme-700">SingHaiYi Group Pte. Ltd.</NuxtLink> has made its mark on the Mainboard of 
                  the Singapore Exchange (SGX). SingHaiyi's track record in Singapore's property development landscape is well-recognized, with its residential properties earning the esteemed "CONQUAS STAR" rating from the 
                  Building and Construction Authority.
                  </p>
                  <p>
                  Although <NuxtLink to="/developer" class="transition text-theme-600 hover:text-theme-700">SingHaiYi Group Pte. Ltd.</NuxtLink> is deeply rooted in Singapore, 
                  its ambitions go beyond the city-state's boundaries. The Group has successfully broadened its portfolio to embrace opportunities in the United States, Australia, and Malaysia, 
                  making it a truly international real estate player.
                </p>
                <p>
                  One of SingHaiYi's current projects, the revitalization of 9 Penang Road, previously known as Park Mall, is transforming it into a state-of-the-art Grade A commercial facility boasting 10 
                  floors and two wings. At SingHaiYi, the driving force is their commitment to creating a sustainable and trustworthy brand, geared towards enduring growth that resonates through generations.
                </p>
              </div>
            </div>
            <div class="
                max-w-sm
                p-6
                mx-auto
                space-y-2
                text-center
                bg-white
                rounded-md
                shadow-md
              ">
              <img src="~/assets/img/home/map-location-thedunman.png" alt="Grand Dunman Location" class="mx-auto rounded" />
              <p class="text-lg font-semibold">Grand Dunman Location</p>
              <div class="space-y-4">
                <p>
                  Nestled just a minute's walk from the Dakota MRT Station, which is part of the Circle Line subway network, Grand Dunman benefits from excellent connectivity. Discover the extensive list of nearby 
                  amenities on our <NuxtLink to="/location-map" class="transition text-theme-600 hover:text-theme-700">Location Map</NuxtLink>.
                </p>
                <p>
                  Only four subway stops separate Grand Dunman from the mesmerizing Gardens by the Bay in the heart of Singapore. Residents with private vehicles can easily reach key parts of the city via the 
                  Pan Island Expressway (PIE), East Coast Parkway (ECP), and Kallang Paya Lebar Expressway (KPE).
                </p>
                <p>
                  Furthermore, Grand Dunman is situated close to several reputable primary and secondary schools including Broadwick, Kong Hwa, and Choon Cheng among others. This prime location meets all 
                  your needs with its easy accessibility and convenience. For those seeking an urban retreat, Grand Dunman offers the perfect setting for a staycation.
                </p>
              </div>
            </div>
            <div class="
                max-w-sm
                p-6
                mx-auto
                space-y-2
                text-center
                bg-white
                rounded-md
                shadow-md
              ">
              <img src="~/assets/img/home/direct.png" alt="Grand Dunman Showflat" class="mx-auto rounded" />
              <p class="text-lg font-semibold">Grand Dunman Showflat</p>
              <div class="space-y-4">
              <p>
                To ensure a viewing, secure your <NuxtLink to="/book-an-appointment" class="transition text-theme-600 hover:text-theme-700">Grand Dunman Showflat appointment here</NuxtLink> by 
                registering via our official site or by contacting us at +65 6100 3337. Please note that the showflat might be closed on certain days for routine maintenance or private events hosted by the developer. 
                Hence, we strongly recommend prospective buyers to schedule an appointment online in advance.
              </p>
              <p>
                In the interest of our visitors' safety, we are implementing a policy of limited viewing slots each day. Thus, it's highly recommended to reserve your appointment online before making your way down to 
                the Grand Dunman Showflat.
              </p>
              <p>
                All those who have <NuxtLink to="/book-an-appointment" class="transition text-theme-600 hover:text-theme-700">registered an appointment here</NuxtLink> will be entitled to Best Developer Pricing, 
                and no commissions are required. Please be aware that units at Grand Dunman are on a first-come, first-served basis. Reservations for units can only be held for up to 2 hours and are subject to management's approval.
              </p>
              <p>
                Kindly note that prices are subject to change without prior notice.
              </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="py-12 bg-brown-700">
          <div class="max-w-6xl px-4 mx-auto">
            <div class="
                flex flex-wrap
                items-center
                justify-between
                p-6
                border
                rounded-md
                sm:col-span-2
                border-brown-400
              ">
              <h1 class="text-3xl font-bold text-white">
                Book An Appointment To Get Direct VVIP Preview
              </h1>
              <NuxtLink to="/book-an-appointment" class="
                  inline-block
                  font-medium
                  text-white
                  transition
                  rounded
                  bg-brown-900
                  hover:bg-yellow-900
                  px-6
                  py-3
                ">Book an Appointment</NuxtLink>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="max-w-6xl px-4 mx-auto prose text-justify">
          <div>
            <h3 class="text-xl font-semibold sm:text-2xl text-center">
            Grand Dunman
            </h3>
            <br>
            <p>
              Nestled in the tranquil corners of District 15, the <NuxtLink to="/" aria-current="page" class="transition text-theme-600 hover:text-theme-700">Grand Dunman</NuxtLink> is the epitome of lush, nature-infused luxury, with its rich splendour offering residents a peaceful sanctuary to unwind. Strategically positioned less than 100m from the Dakota MRT Station on the Circle Line, this brand-new residential masterpiece provides quick access to Singapore's city centre and beyond.
              </p>
              <br>
              <p>
              Grand Dunman, a distinct collaboration between renowned industry pioneers SingHaiyi Group and CSC Land, presents an exquisite ensemble of 1,008 residential units across six luxury blocks and one grand block. Ranging from 1 to 5-bedroom layouts, with select dual key and penthouse units, each residence promises an unsurpassed living experience. Despite its proximity to the MRT station, Grand Dunman astoundingly ensures a 1:1 parking ratio for residents.
              </p>
              <br>
              <p>
              Its forward-thinking design ensures a blend of opulent amenities, green spaces, and awe-inspiring views. Proximity to the Geylang Park Connector allows residents to indulge in the serenity of the Geylang River and the beauty of the Marina Reservoir and Gardens by the Bay. Here at Grand Dunman, we cherish the moments spent with family and friends and encourage self-renewal in this idyllic setting.
              </p>
              <br>
              <p>
              The philosophy behind Grand Dunman goes beyond just providing a roof; it's about creating homes that stand the test of time and inspire well-lived lives. With growth and wellness interwoven into the fabric of the residential environment, Grand Dunman offers an energized and holistic living experience. There's no better investment than nurturing your family and yourself, and no better place to do so than at Grand Dunman, where your story begins.
              </p>
              <br>
              <p>
              Discover a fresh way of life at Grand Dunman. To learn more, reach out to us between 10:00 AM and 7:00 PM at +65 6100 3337, or conveniently reserve an appointment through our contact form. Prospective homeowners can also view and download the <NuxtLink to="/floor-plan" class="transition text-theme-600 hover:text-theme-700">Grand Dunman Floor Plan</NuxtLink> now.
              </p>

          </div>
          <!-- <div class="grid grid-cols-2 gap-2 lg:gap-6 lg:grid-cols-4">
            <img
              src="~assets/img/home/home-artist-impression-thumb-1.jpg"
              alt=""
              class="object-cover w-full h-auto rounded"
            />
            <img
              src="~assets/img/home/home-artist-impression-thumb-2.jpg"
              alt=""
              class="object-cover w-full h-auto rounded"
            />
            <img
              src="~assets/img/home/home-artist-impression-thumb-3.jpg"
              alt=""
              class="object-cover w-full h-auto rounded"
            />
            <img
              src="~assets/img/home/home-artist-impression-thumb-4.jpg"
              alt=""
              class="object-cover w-full h-auto rounded"
            />
          </div> -->
        </div>
      </section>
      <BookAppointment />
    </div>
  </div>
</template>

<!-- <script>
export default {
  head: {
    title:this.$config.title,
    meta: [
      { 
        hid: 'description', 
        name: 'description', 
        content: 'Grand Dunman brings to life a home amidst nature that offers seclusion, peace, and a lavish expanse in which to unwind in rich splendour. The land lot offers quick access to the city centre and other areas of Singapore as Dakota MRT Station on the Circle Line is less than 100m away. This brand-new, affluent facility in District 15 of Singapore will include plenty of green space in addition to opulent amenities, design-forward buildings, heart-stopping views, and first-rate care facilities. The Dunman Road New Condo is close to the Datoka Circle Line Station (CC8) and is situated near Dunman Road in District 15 of Singapore. When fully developed, the new condo on Dunman Road will have 1,002 residential units available.'
        },
      {
        hid: 'keywords', 
        name: 'keywords', 
        content: 'Grand Dunman, dunman, residences,dunman new launch, launch, new, latest Grand Dunman'
        }
    ],
  },
  methods: {
    currentDate() {
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const current = new Date();
  const date = `${current.getDate()} ${months[current.getMonth()]} ${current.getFullYear()}`;
  return date;
}

  },
};

</script> -->

<script setup>
// const config = useRuntimeConfig()
// console.log('Runtime config:', config.public.apiBase)
// if (process.server) {
//   console.log('API secret:', config.apiSecret)
// }
// const description = ref(config.title)

// useHead({
//   meta: [
//     {
//       hid: 'description',
//       name: 'description',
//       content: 'Grand Dunman brings to life a home amidst nature that offers seclusion, peace, and a lavish expanse in which to unwind in rich splendour. The land lot offers quick access to the city centre and other areas of Singapore as Dakota MRT Station on the Circle Line is less than 100m away. This brand-new, affluent facility in District 15 of Singapore will include plenty of green space in addition to opulent amenities, design-forward buildings, heart-stopping views, and first-rate care facilities. The Dunman Road New Condo is close to the Datoka Circle Line Station (CC8) and is situated near Dunman Road in District 15 of Singapore. When fully developed, the new condo on Dunman Road will have 1,002 residential units available.'
//     },
//     {
//       hid: 'keywords',
//       name: 'keywords',
//       content: 'Grand Dunman, dunman, residences,dunman new launch, launch, new, latest Grand Dunman'
//     }
//   ],
  
// })

function currentDateAndTime() {
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const current = new Date();
  let hours = current.getHours();
  let minutes = current.getMinutes();
  let seconds = current.getSeconds();

  // Add leading zeros if hours, minutes or seconds are less than 10
  hours = (hours < 10) ? "0" + hours : hours;
  minutes = (minutes < 10) ? "0" + minutes : minutes;
  seconds = (seconds < 10) ? "0" + seconds : seconds;

  const date = `${current.getDate()} ${months[current.getMonth()]} ${current.getFullYear()} || ${hours}:${minutes}:${seconds}`;
  return date;
}


function oneMonthAgo() {
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const current = new Date();
  current.setMonth(current.getMonth() - 1);
  const date = `${current.getDate()} ${months[current.getMonth()]} ${current.getFullYear()}`;
  return date;
}

function twoMonthsAgo() {
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const current = new Date();
  current.setMonth(current.getMonth() - 2);
  const date = `${current.getDate()} ${months[current.getMonth()]} ${current.getFullYear()}`;
  return date;
}

function twoWeeksAgo() {
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const current = new Date();
  current.setDate(current.getDate() - 14);
  const date = `${current.getDate()} ${months[current.getMonth()]} ${current.getFullYear()}`;
  return date;
}

</script>
