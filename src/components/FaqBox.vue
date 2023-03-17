<template>
    <div v-for="item in faqData" :key="item.id" class="cursor-pointer text-[#424242] w-[70%] mx-auto py-4" @click="handleClick(item.id)">
   <span class="flex justify-between items-center border-t  pt-6"><p class="text-3xl font-bold w-[60%]" >{{ item.title }}</p> <span v-if="state==item.id" ><Icon  icon="ion:minus" width="25"/></span><span v-else ><Icon icon="ion:plus-round" width="25"/></span></span>   
      <p v-if="state==item.id" class="mt-5">{{ item.text }}</p>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { faqData } from '../../faqData';
import { Icon } from '@iconify/vue';
const state=ref(null)
const handleClick=(id)=>{
    if(state.value==id){
        state.value=null
    }else{
        state.value=id
    }
}
</script>

