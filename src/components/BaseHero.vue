<template>
    <div>
      <h1 class="text-center font-bold mt-10 text-[#343538] text-2xl lg:text-4xl px-4 lg:px-0">Order groceries for delivery or pickup in <span class="text-[#0aad0a]">Lagos Island and Ikeja</span> </h1>
      <section  class="grid  lg:grid-cols-3 gap-4  lg:px-40 justify-center ">
       <span v-for="item in deliveryData" :key="item.id" class="block">
        <delivery-card/>
        </span>
   
      </section>
      <div class="text-center mt-10 font-semibold">
        <p v-if="!state" @click="handleMore" class="cursor-pointer  text-xl text-[#0aad0a] hover:underline">Show All</p>
      <p v-else @click="handleMore" class="cursor-pointer  text-xl text-[#0aad0a] hover:underline">Show Less</p>
      </div>
       <section class=" flex items-center justify-between bg-[#b1e5d5] w-[85%]  mx-auto mt-5">
        <span class=" block  w-[300px] mt-4"><img :src="Hand" alt="hand"></span>
        <span class="text-center">
            <h3 class="text-2xl font-bold">Get the full Altcart experience</h3>
            <p>Scan the QR code with your camera. First delivery is free.</p>
        </span>
<span><img :src="QR" alt="Qr code"></span>
       </section>
    </div>
</template>

<script setup>
import { ref,computed} from 'vue';
import DeliveryCard from './DeliveryCard.vue';
import {cardData} from '../../cardData'
import QR from '../assets/images/qr.png'
import Hand from '../assets/images/hand.webp'
const state=ref(false)
const handleMore=()=>{
     state.value=!state.value
}

const deliveryData=computed(()=>{
   if(state.value==true){
    return cardData.slice(0,cardData.length-1)
   }else{
    return cardData.slice(0,9)
   }
})



</script>
