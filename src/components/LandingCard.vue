<template>
    <div class="bg-[#f6f7f8] p-5 w-[25%] px-10 text-[#343538]">
         <p class="font-bold text-[30px]">{{title}}</p>
         <p class="mt-8 text-2xl">{{text}}</p>
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
 })
</script>

