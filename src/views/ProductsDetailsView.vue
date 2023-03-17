<template>
      <base-header/>
    <div v-if="product" class="lg:p-20 px-5 pb-10">
        <router-link to="/products"><div class="text-2xl flex items-center gap-3 text-semibold"> <Icon icon="ic:outline-arrow-back" />Back</div></router-link>  
        <main class="flex-col md:flex mt-5 md:mt-40 gap-5">
        <section class="flex gap-10 items-center ">
         <div class="hidden md:flex justify-center flex-col gap-5 ">
            <span  @mouseover="handleNum" class="block w-[100px] rounded-lg overflow-hidden hover:border-4 border-gray-700"><img :src='product.images[1]' alt=""></span>
            <span @mouseover="handleNums" class="block w-[100px] rounded-lg overflow-hidden hover:border-4 border-gray-700 "><img :src='product.images[2]' alt=""></span>
         </div>
         <div class="w-[400px]" ><img :src='product.images[num]' alt=""></div>
       </section>
       <div>
        <p class="text-3xl font-bold mt-5 md:mt-0">{{ product.title}}</p>
        <p class="text-lg mt-5">Details</p>
        <p class="text-2xl mb-5 md:mb-0">{{ product.description }}</p>
       </div>
       <div class="border-[3px] p-8 rounded-lg px-4">
        <p class="text-3xl font-bold">₦{{ (product.price/1-product.discountPercentage).toFixed(2) }}</p>
        <p class="text-xl font-semibold mt-5">Free Delivery</p>
        <select name="" id="" class="rounded-xl w-[300px] lg:w-[400px] p-4 px-10 mt-5">
            <option value="" >1</option>
            <option value="">2</option>
            <option value="">3</option>
        </select>
        <div class="flex justify-center mt-5"><button class="bg-[#0aad0a] p-4 mt-5 w-full rounded-xl text-white font-semibold">Add To Cart</button></div>
         <p class="text-lg text-center mt-2">place your order with peace of mind</p>
       </div>

    </main>
    </div>
</template>

<script setup>
import BaseHeader from '../components/BaseHeader.vue';
import { Icon } from '@iconify/vue';
import { ref,onMounted } from 'vue';
import { useRoute } from 'vue-router';
const route=useRoute()
const {id}=route.params
const product=ref('')
const num=ref(4)
const handleNum=()=>{
    num.value=1
}
const handleNums=()=>{
    num.value=2
}
const fetchData=()=>{
     
     fetch(`https://dummyjson.com/products/${id}`)
     .then((response)=>response.json())
     .then(data=>{
         product.value=data
        console.log(product.value)
       
     })
     .catch((error)=>{
         console.log(error)
         loading.value=false
     })
 }
 onMounted(
    ()=>{
        fetchData()
    }
 )
 
</script>
