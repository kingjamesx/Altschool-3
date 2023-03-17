<template>
    <div class=" bg-[#09624b] text-white p-5 flex justify-between items-center gap-2 md:gap-2 lg:gap-6">
        <Icon icon="ic:sharp-menu" width="30" />
       <h2 class="font-bold text-2xl"> <router-link to="/">AltCart</router-link> </h2>
       <div class="hidden md:flex w-[60%] h-[56px] items-center justify-between bg-[#f6f7f8] rounded">
        <input type="text" placeholder="search Products and Stores"  class="outline-none px-5 w-[95%] h-[45px] text-[#343538] bg-[#f6f7f8]">
      <span class="px-5"><Icon icon="ic:twotone-search" color="#343538" width="30" /></span> 
       </div>
       <p class="hidden md:block text-lg font-semibold "> <router-link to="/products">products</router-link> </p>
      <p v-if="state" class="text-lg font-semibold"> <button @click="logout">Logout</button> </p>
      <p v-else class="text-lg font-semibold"> <router-link to="/login">Login</router-link> </p>
       <button class="text-lg font-semibold bg-[#0aad0a] p-2 px-3 md:px-4 lg:px-6 rounded-3xl"> <router-link to="/signup"> Sign Up</router-link></button>
    </div>
    <section class="bg-[#09624b] flex justify-center pb-2 px-5 md:hidden">
        <div class="w-full h-[40px] flex items-center justify-between bg-[#f6f7f8] rounded">
        <input type="text" placeholder="search Products and Stores"  class="outline-none px-5 w-[95%] h-[35px] text-[#343538] bg-[#f6f7f8]">
      <span class="px-5"><Icon icon="ic:twotone-search" color="#343538" width="25" /></span> 
       </div>
    </section>
    
</template>

<script setup>
import { Icon } from '@iconify/vue';
import { store } from '../store';
import { useRouter } from 'vue-router';
const router = useRouter()
const state=store.state.verify
// const store=useStore()
const logout=()=>{
    store.commit('logout')
    router.push('/login')

}
</script>
