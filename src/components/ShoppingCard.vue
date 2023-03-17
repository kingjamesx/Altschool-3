<template>
    <div class="bg-[#f6f7f8] lg:w-[25%]  rounded-lg  flex flex-col gap-10 ">
    <span class="block p-5">
        <p class="pb-10 text-3xl font-bold">{{title}}</p>
     <p class="">{{text}}</p>
    </span> 
    
     <span class="block"><img :src="img" :alt="title"></span>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
        title:{
            title:'String',
        },
        text:{
            text:'String'
        },
        img:{
            img:'String'
        }

})
</script>
