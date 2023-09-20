<template>
    <section>
        <div data-v-750ad506="" class="shadow-md">
            <div id="main_banner" data-v-750ad506="" class="overflow-hidden bg-center bg-no-repeat bg-cover max-h-96"
                style="height: 400px">
                <div data-v-750ad506="" class="relative w-full h-full max-w-6xl px-4 mx-auto">
                    <div data-v-750ad506="" class="absolute bottom-0 right-0 w-96">
                        <div data-v-750ad506="" class="
                  absolute
                  h-40
                  bg-gray-700 bg-opacity-75
                  w-52
                  sm:h-48 sm:w-64 sm:right-28
                  right-20
                  top-2
                "></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="bg-white pb-36">
            <div class="max-w-6xl px-4 mx-auto">
                <div class="py-8 space-y-1 text-center text-white">
                    <center>
                        <img class="w-40 h-50" src="~/assets/img/logo.png"/>
                    </center>
                    <h3 class="text-xl font-bold font-serif sm:text-2xl tracking-widest text-brown-900">
                        Taman Sri Tuang
                    </h3>
                    <h4 class="text-xl font-medium text-neutral-800">
                        Welcome to our website
                    </h4>
                    <h4 class="text-xl font-medium text-neutral-800">
                        where you can view the showcase of Taman Sri Tuang's property.
                    </h4>
                </div>
            </div>
        </div>
        <div class="max-w-6xl px-4 mx-auto -mt-36">
            <div class="grid grid-cols-1 gap-6 md:grid-cols-4">
                <NuxtLink to="/about/tst" class="">
                    <div class="max-w-sm mx-auto group">
                        <img src="~/assets/img/home/home-about.jpg" alt=""
                            class="w-full rounded shadow" />
                        <div class="px-8 -mt-14">
                            <div class="
                    relative
                    flex flex-wrap
                    items-center
                    justify-center
                    p-5
                    bg-gray-900
                    hover:bg-brown-100
                    rounded
                    shadow
                  ">
                                <div class="space-y-px text-center">
                                    <p class="font-bold text-brown-400">About Taman Sri Tuang</p>
                                    <p class="
                        text-xl
                        font-semibold
                        text-white
                        transition
                        group-hover:text-gray-400
                      ">
                                        Get to Know More
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </NuxtLink>
                <NuxtLink to="/house-property/floor-plan" class="">
                    <div class="max-w-sm mx-auto group">
                        <img src="~/assets/img/home/home-floor-plan.jpg" alt="" class="w-full rounded shadow" />
                        <div class="px-8 -mt-14">
                            <div class="
                    relative
                    flex flex-wrap
                    items-center
                    justify-center
                    p-5
                    bg-gray-900
                    hover:bg-brown-100
                    rounded
                    shadow
                  ">
                                <div class="space-y-px text-center">
                                    <p class="font-bold text-brown-400">House Showcase</p>
                                    <p class="
                        text-xl
                        font-semibold
                        text-white
                        transition
                        group-hover:text-gray-400
                      ">
                                        See the Floor Plan
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </NuxtLink>
                <NuxtLink to="/house-property/pricing" class="">
                    <div class="max-w-sm mx-auto group">
                        <img src="~/assets/img/home/price.jpg" alt=""
                            class="w-full rounded shadow" />
                        <div class="px-8 -mt-14">
                            <div class="
                    relative
                    flex flex-wrap
                    items-center
                    justify-center
                    p-5
                    bg-gray-900
                    hover:bg-brown-100
                    rounded
                    shadow
                  ">
                                <div class="space-y-px text-center">
                                    <p class="font-bold text-brown-400">Price List</p>
                                    <p class="
                        text-xl
                        font-semibold
                        text-white
                        transition
                        group-hover:text-gray-400
                      ">
                                        Get the Price List
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </NuxtLink>
                <NuxtLink to= "/location/direction" class="">
                    <div class="max-w-sm mx-auto group">
                        <img src="~/assets/img/home/location.jpg" alt=""
                            class="w-full rounded shadow" />
                        <div class="px-8 -mt-14">
                            <div class="
                    relative
                    flex flex-wrap
                    items-center
                    justify-center
                    p-5
                    bg-gray-900
                    hover:bg-brown-100
                    rounded
                    shadow
                  ">
                                <div class="space-y-px text-center">
                                    <p class="font-bold text-brown-400">Location</p>
                                    <p class="
                        text-xl
                        font-semibold
                        text-white
                        transition
                        group-hover:text-gray-400
                      ">
                                        Get Direction
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </NuxtLink>
            </div>
        </div>
    </section>
</template>
  
<script>
export default {}
</script>
  
<style scope>
#main_banner {
    background-image: url('assets/img/banner.png');
}
</style>
  