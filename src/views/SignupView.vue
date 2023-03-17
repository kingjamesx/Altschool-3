<template>
      <base-header/>
    <div class="m-auto md:mt-28  bg-white p-4  md:w-1/2  border-2 border-grey-500">
           <h1 class="text-center font-bold text-3xl"> <router-link to="/">AltCart</router-link> </h1>
       <p class="font-bold text-2xl">Sign Up</p>
       <span class="block mt-5">
            <input v-model="fullname" type="text" placeholder="Fullname" class="w-full px-5 border border-gray-500 h-[56px] outline-none rounded-lg ">
        </span>
        <span class="block mt-5">
            <input v-model="email" type="text" placeholder="Email" class="w-full px-5 border border-gray-500 h-[56px] outline-none rounded-lg ">
        </span>
        <span class="block mt-5">
            <input v-model="password" type="text" placeholder="Password" class="w-full px-5 border border-gray-500 h-[56px] outline-none rounded-lg ">
        </span>
        <p class="mt-5">Forgot password? <span class="text-[#0aad0a] font-semibold">Reset it</span> </p>
        <div class="mt-5"><button @click="handleClick" class="bg-[#0aad0a] w-full p-3.5 font-bold rounded-lg px-20">Sign Up</button></div>
        <span class="flex gap-2 items-center mt-8"><p >Have an account?</p>
        <router-link to="login" ><button class="text-[#0aad0a] font-semibold">Login</button></router-link> </span> 
    </div>
</template>

<script setup>
import BaseHeader from '../components/BaseHeader.vue';
import { nanoid } from 'nanoid';
import { useStore } from 'vuex'
import {ref} from 'vue'
import { useRouter } from 'vue-router';
const router=useRouter()
const fullname=ref('')
const email=ref('')
const password=ref('')

const store = useStore()
const handleClick=()=>{
    const profile={
        fullname:fullname.value,
        email:email.value,
        password:password.value
    }
    fullname.value=''
    email.value=''
    password.value=''
    store.commit('signup',profile)
    router.push('login')
}

</script>
