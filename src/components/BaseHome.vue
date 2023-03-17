<template>
    <div>
  <h3 class="font-bold text-3xl text-center mt-10 text-[#343538]">Grocery Delivery You Can Count On</h3>
  <section class="flex flex-col md:flex-row justify-center gap-4 mt-10">
    <ShoppingCard title="Choose what you want" text="Select items from your favorite grocery stores at Instacart.com or in the app." :img="woman"/>
    <ShoppingCard title="Choose what you want" text="Select items from your favorite grocery stores at Instacart.com or in the app." :img="woman"/> 
    <ShoppingCard title="Choose what you want" text="Select items from your favorite grocery stores at Instacart.com or in the app." :img="woman"/>
  </section>
   <section class="flex justify-center mt-10 pb-10"><button class="p-3 text-center bg-[#0aad0a] text-white text-2xl font-semibold px-20 rounded-lg">Start Shopping</button></section>
     <section>
        <p class="text-3xl font-bold text-center md:w-1/3 mx-auto text-[#343538]">The world's largest online grocery service</p>
     </section>
     <section class="rounded-xl w-[80%] mx-auto mt-10 overflow-hidden">
        <img :src="landing" alt="man holding bag of groceries">
     </section>
     <section class="flex flex-col md:flex-row w-[80%] gap-4 mx-auto mt-5">
      <landing-card title="500 million products" text="available to shop across the catalog"/>
      <landing-card title="40,000 stores" text="from local grocers to chain stores"/>
      <landing-card title="5,500+ cities" text="served across the U.S. & Canada"/>
      <landing-card title="Millions of orders" text="delivered or picked up yearly"/>

     </section>
      <h3 class="text-[30px] font-bold text-[#343538] text-center mt-10 pb-5">Common questions</h3>
      <section class="pb-10">
        <FaqBox/>
      </section>
    </div>
</template>

<script setup>
import ShoppingCard from './ShoppingCard.vue';
import LandingCard from './LandingCard.vue'
import FaqBox from './FaqBox.vue';
import woman from '../assets/images/woman-and-baby.webp'
import landing from '../assets/images/landing.webp'
</script>
