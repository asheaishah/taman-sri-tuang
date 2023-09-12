<template>
  <div class="bg-theme-50">
    <div class="max-w-8xl px-4 py-12 mx-auto">
      <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div class="space-y-2">
          <h4 class="text-xl font-medium">Borneo 29</h4>
          <ul class="space-y-3 text-gray-600">
            <li>Developer: Menua Borneo Sdn. Bhd.</li>
            <li>Tenure of Land: Freehold</li>
            <li>Expected Date of Completion: April 2025</li>
          </ul>
        </div>
        <div class="space-y-2">
          <h4 class="text-xl font-medium">Site Links</h4>
          <ul class="space-y-3 text-gray-600">
            <li>
              <NuxtLink to="/" exact class="nuxt-link-exact-active nuxt-link-active">Borneo 29</NuxtLink>
            </li>
            <li><NuxtLink to="/house-property/floor-plan">Floor Plan Borneo 29</NuxtLink></li>
            <li><NuxtLink to="/house-property/pricing">Pricing Borneo 29</NuxtLink></li>
            <li><NuxtLink to="/contact-us">Contact Us</NuxtLink></li>
          </ul>
        </div>
        <div class="space-y-2">
          <h4 class="text-xl font-medium">Contact Us</h4>
          <p>Email: borneo29ks@gmail.com</p>
          <p>Phone no: +60178093305</p>
        </div>
      </div>
    </div>
    <div class="py-6 text-center bg-gray-200">
      <div class="max-w-6xl px-4 mx-auto space-y-2">
        <div class="text-sm text-gray-500">
          <div class="flex flex-wrap justify-center max-w-4xl mx-auto divide-x divide-gray-500">
            <p class="px-1">Copyright © 2023</p>
            <p class="px-1">Broneo 29</p>
            <p class="px-1">Menua Borneo Sdn. Bhd.</p>
          </div>
        </div>
        <div class="text-xs text-gray-400">
          Disclaimer: The photographs, artistic impressions, and furniture images displayed on this website are for illustrative purposes only. 
          The actual product may differ from the illustrations. References to time, distances, and localities are approximate and may be subject to traffic conditions. 
          Views may vary depending on the location within the building, and the developer, builder, or agent does not guarantee that views will not be affected by future developments. 
          Any statistics mentioned in this brochure are not representations by the developer or its agents. While we have taken care to ensure the accuracy of all information provided in this brochure, 
          the developer or its agents do not guarantee its accuracy. This website is for marketing purposes only and should not be solely relied upon when making a purchase decision. 
          Although every reasonable care has been taken in preparing this website, including the construction of models and showflats, the developer and marketing agents cannot be held responsible for any 
          inaccuracies or omissions. Visual representations, models, showflats, displays, illustrations, photographs, art renderings, and other graphics are intended to convey the artist's impressions of 
          the development and should not be considered as representations of fact. All listed properties, whether in Singapore or overseas, are subject to final inspection by relevant authorities to comply 
          with the current codes of practice and policies of the respective countries.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      datetime: '',
    };
  },
  mounted() {
    const timer = setInterval(() => {
      this.showChat();
      clearInterval(timer);
    }, 3000);
  },
  methods: {
    sendMessage() {
      const input = document.getElementById('chat-input');
      if (input.value !== '') {
        const phoneNumber = '+6561003337'; // Update with your phone number
        const message = input.value;
        const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
      }
    },
    closeChat() {
      const chatWindow = document.getElementById('whatsapp-chat');
      chatWindow.classList.add('hide');
      chatWindow.classList.remove('show');
    },
    showChat() {
      const chatWindow = document.getElementById('whatsapp-chat');
      chatWindow.classList.add('show');
      chatWindow.classList.remove('hide');
    },
  },
  created() {
    const now = new Date();
    this.datetime = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
  },
};
</script>

<style scoped>
.start-chat .blanter-msg {
  display: flex;
}
.whatsapp-name {
  font-size: 16px;
  font-weight: 600;
  padding-bottom: 0;
  margin-bottom: 0;
  line-height: 0.5;
}
#whatsapp-chat {
  box-sizing: border-box !important;
  outline: 0 !important;
  position: fixed;
  width: 350px;
  border-radius: 10px;
  box-shadow: 0 1px 15px rgba(32, 33, 36, 0.28);
  bottom: 90px;
  right: 30px;
  overflow: hidden;
  z-index: 99;
  animation-name: showchat;
  animation-duration: 1s;
  transform: scale(1);
}
a.blantershow-chat {
  background: #fff;
  color: #404040;
  position: fixed;
  display: flex;
  font-weight: 400;
  justify-content: space-between;
  z-index: 98;
  bottom: 25px;
  right: 30px;
  font-size: 15px;
  padding: 10px 20px;
  border-radius: 30px;
  box-shadow: 0 1px 15px rgba(32, 33, 36, 0.28);
}
a.blantershow-chat svg {
  transform: scale(1.2);
  margin: 0 10px 0 0;
}
.header-chat {
  background: #009688;
  background: #095e54;
  color: #fff;
  padding: 20px;
}
.header-chat h3 {
  margin: 0 0 10px;
}
.header-chat p {
  font-size: 14px;
  line-height: 1.7;
  margin: 0;
}
.info-avatar {
  position: relative;
  width: 80%;
  margin-bottom: 1rem;
}
.info-avatar img {
  border-radius: 100%;
  width: 50px;
  float: left;
  margin: 0 10px 0 0;
}
a.informasi {
  padding: 20px;
  display: block;
  overflow: hidden;
  animation-name: showhide;
  animation-duration: 0.5s;
}
a.informasi:hover {
  background: #f1f1f1;
}
.info-chat span {
  display: block;
}
#get-label,
span.chat-label {
  font-size: 12px;
  color: #888;
}
#get-nama,
span.chat-nama {
  margin: 5px 0 0;
  font-size: 15px;
  font-weight: 700;
  color: #222;
}
#get-label,
#get-nama {
  color: #fff;
}
span.my-number {
  display: none;
}
textarea#chat-input {
  border: none;
  font-family: Arial, sans-serif;
  width: 100%;
  height: 2.5rem;
  outline: 0;
  resize: none;
  padding: 10px;
  font-size: 14px;
  overflow-y: hidden;
}
a#send-it {
  width: 40px;
  font-weight: 700;
  padding: 3px 10px;
  background: #eee;
}
a#send-it svg {
  fill: #a6a6a6;
  height: 100%;
  width: 100%;
}
.first-msg {
  background: 0 0;
  padding: 30px;
  text-align: center;
  color: #333;
  font-size: 14.2px;
  line-height: 1.7;
  border-radius: 10px;
  padding: 15px 20px;
  display: inline-block;
}
#get-number {
  display: none;
}
a.close-chat {
  position: absolute;
  top: 5px;
  right: 15px;
  color: #fff;
  font-size: 30px;
}
@keyframes ZpjSY {
  0% {
    background-color: #b6b5ba;
  }
  15% {
    background-color: #111;
  }
  25% {
    background-color: #b6b5ba;
  }
}
@keyframes hPhMsj {
  15% {
    background-color: #b6b5ba;
  }
  25% {
    background-color: #111;
  }
  35% {
    background-color: #b6b5ba;
  }
}
@keyframes iUMejp {
  25% {
    background-color: #b6b5ba;
  }
  35% {
    background-color: #111;
  }
  45% {
    background-color: #b6b5ba;
  }
}
@keyframes showhide {
  from {
    transform: scale(0.5);
    opacity: 0;
  }
}
@keyframes showchat {
  from {
    transform: scale(0);
    opacity: 0;
  }
}
@media screen and (max-width: 480px) {
  #whatsapp-chat {
    width: auto;
    left: 5%;
    right: 5%;
    font-size: 80%;
  }
}
.hide {
  display: none;
  animation-name: showhide;
  animation-duration: 0.5s;
  transform: scale(1);
  opacity: 1;
}
.show {
  display: block;
  animation-name: showhide;
  animation-duration: 0.5s;
  transform: scale(1);
  opacity: 1;
}
.whatsapp-message-container {
  display: flex;
  z-index: 1;
}
.whatsapp-message {
  padding: 7px 14px 6px;
  background-color: #fff;
  border-radius: 0 8px 8px;
  position: relative;
  transition: all 0.3s ease 0s;
  opacity: 0;
  transform-origin: center top 0;
  z-index: 2;
  box-shadow: rgba(0, 0, 0, 0.13) 0 1px 0.5px;
  margin-top: 4px;
  margin-left: -54px;
  max-width: calc(100% - 66px);
}
.whatsapp-chat-body {
  padding: 20px 20px 20px 10px;
  background-color: #e6ddd4;
  position: relative;
}
.dAbFpq {
  display: flex;
  z-index: 1;
}
.eJJEeC {
  background-color: #fff;
  width: 52.5px;
  height: 32px;
  border-radius: 16px;
  display: flex;
  -moz-box-pack: center;
  justify-content: center;
  -moz-box-align: center;
  align-items: center;
  margin-left: 10px;
  opacity: 0;
  transition: all 0.1s ease 0s;
  z-index: 1;
  box-shadow: rgba(0, 0, 0, 0.13) 0 1px 0.5px;
}
.hFENyl {
  position: relative;
  display: flex;
}
.ixsrax {
  height: 5px;
  width: 5px;
  margin: 0 2px;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  animation-duration: 1.2s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  top: 0;
  background-color: #9e9da2;
  animation-name: ZpjSY;
}
.dRvxoz {
  height: 5px;
  width: 5px;
  margin: 0 2px;
  background-color: #b6b5ba;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  animation-duration: 1.2s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  top: 0;
  animation-name: hPhMsj;
}
.kAZgZq {
  padding: 7px 14px 6px;
  background-color: #fff;
  border-radius: 0 8px 8px;
  position: relative;
  transition: all 0.3s ease 0s;
  opacity: 0;
  transform-origin: center top 0;
  z-index: 2;
  box-shadow: rgba(0, 0, 0, 0.13) 0 1px 0.5px;
  margin-top: 4px;
  margin-left: -54px;
  max-width: calc(100% - 66px);
}
.bMIBDo {
  font-size: 13px;
  font-weight: 700;
  line-height: 18px;
  color: rgba(0, 0, 0, 0.4);
}
.iSpIQi {
  font-size: 14px;
  line-height: 19px;
  margin-top: 4px;
  color: #111;
}
.iSpIQi {
  font-size: 14px;
  line-height: 19px;
  margin-top: 4px;
  color: #111;
}
.cqCDVm {
  text-align: right;
  margin-top: 4px;
  font-size: 12px;
  line-height: 16px;
  color: rgba(17, 17, 17, 0.5);
  margin-right: -8px;
  margin-bottom: -4px;
}
#chat-input:focus {
  background: #fff !important;
}
#chat-input {
  margin-bottom: 0 !important;
}
</style>
