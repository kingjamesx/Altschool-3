<template>
    <div class="cursor-pointer mt-5 shadow-lg drop-shadow-md hover:drop-shadow-xl bg-white  rounded-2xl flex items-center gap-3 px-3 p-5">
    <span class="rounded-[50%] border border-red-500">
        <img :src="Alt" alt="altschool logo">
    </span>
    <section>
        <h3 class="text-2xl font-semibold">Balogun Market</h3>
        <div class="flex gap-1 font-semibold items-center text-[#39bc39]">    
            <span><Icon icon="ion:flash-sharp"/></span>
            <p >Delivery <span>by 8am</span></p>
        </div>
    </section>
    </div>
</template>

<script setup>
import { Icon } from '@iconify/vue';
import Alt from '../assets/images/altschool.svg'
</script>
