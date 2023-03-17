<template>
   <section @mouseenter="handleOver" @mouseleave="handleave"  class="transition-all w-[90%] relative">
   <div class="h-[300px] overflow-hidden"><img :src="item.thumbnail" alt="product image"></div>
   <p class="text-2xl font-bold">₦{{ (item.price/1-item.discountPercentage).toFixed(2) }} <span class="line-through text-lg font-normal">₦{{ item.price }}</span></p>
   <p class="text-lg">{{ item.title }}</p>
   <p class="font-bold">left in stock:{{ item.stock }}</p>
  <div v-if="state"  class="  absolute top-0 right-0"><button class="flex items-center bg-[#0aad0a] rounded-3xl px-4 p-2 gap-2 text-white font-semibold text-2xl"><Icon icon="ion:plus-round" width="25"/> Add</button></div>
  <div v-else class=" absolute top-0 right-0"><button class="flex items-center bg-[#0aad0a] rounded-3xl px-4 p-2 gap-2 text-white font-semibold text-2xl"><Icon icon="ion:plus-round" width="25"/> Add to cart</button></div> 

   </section>
</template>

<script setup>
 import { defineProps,ref } from 'vue';
import { Icon } from '@iconify/vue';
const state=ref(true)

const handleOver=()=>{
    state.value=false
}
const handleave=()=>{
    state.value=true
}
defineProps(
   {
    item:{
        title:'String',
        price:'Number',
        stock:'Number',
        discountPercentage:'Number',
        thumbnail:'String'
    }
}
)
</script>

