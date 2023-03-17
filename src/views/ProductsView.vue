<template>
      <base-header/>
    <div class="text-[#343538] px-5">
        <h1 class="text-4xl">Welcome Back {{ userName }}</h1>
        <h2 class="text-4xl font-semibold  py-8 ">Phones for you </h2>
  <section >
    <div v-if="loading"><Skeleton/></div>
    <div  class="flex  flex-wrap">

<div v-for="item in phones" >
    <router-link :to="'/products/' + item.id" >
        <Product :item="item"/>
    </router-link>
    
</div>
</div>
  </section>
      <section>
        <h2 class="text-4xl font-semibold py-8">Laptops</h2>
        <div v-if="loading"><Skeleton/></div>
        <div  class="flex px-14 flex-wrap">
        <div v-for="item in laptops" >
            <router-link :to="'/products/' + item.id" >
                <Product :item="item"/>
            </router-link>
            
        </div>
    </div>
      </section>
         <section>
            <h2 class="text-4xl font-semibold py-8">Fragrances</h2>
            <div v-if="loading"><Skeleton/></div>
            <div  class="flex px-14 flex-wrap">
        <div v-for="item in fragrances" >
            <router-link :to="'/products/' + item.id" >
                <Product :item="item"/>
            </router-link>
            
        </div>
    </div> 
         </section>
          <section>

            <h2 class="text-4xl font-semibold py-8">Skincare</h2>
            <div v-if="loading"><Skeleton/></div>
            <div  class="flex px-14 flex-wrap">
        <div v-for="item in skincare" >
            <router-link :to="'/products/' + item.id" >
                <Product :item="item"/>
            </router-link>
            
        </div>
    </div> 
          </section>
       <section>
        <h2 class="text-4xl font-semibold py-8">Groceries </h2>
        <div v-if="loading"><Skeleton/></div>
        <div  class="flex px-14 flex-wrap">
        <div v-for="item in groceries" >
            <router-link :to="'/products/' + item.id" >
                <Product :item="item"/>
            </router-link>
            
        </div>
    </div>
       </section>
          
       
        
   
    <section>
        <h2 class="text-4xl font-semibold py-8">Home Decorations</h2>
        <div v-if="loading"><Skeleton/></div>
        <div  class="flex px-14 flex-wrap pb-10">
        <div v-for="item in homedecoration" >
            <router-link :to="'/products/' + item.id" >
                <Product :item="item"/>
            </router-link>
            
        </div>
    </div>
    </section>
   
       
    </div>
</template>

<script setup>
import BaseHeader from '../components/BaseHeader.vue';
import { ref,onMounted,computed } from 'vue';
import { useLoggedIn } from '../utils/loggedin';
import Product from '../components/Product.vue';
import Skeleton from '../components/Skeleton.vue';
const {userName}=useLoggedIn()



const products=ref([])
const phones=computed(()=>{
    if(products.value.length>0){
        return products.value.filter(item=>(item.category==='smartphones'))
    }else{
        return []
    }
})
const laptops=computed(()=>{
    if(products.value.length>0){
        return products.value.filter(item=>(item.category==='laptops'))
    }else{
        return []
    }
})
const fragrances=computed(()=>{
    if(products.value.length>0){
        return products.value.filter(item=>(item.category==='fragrances'))
    }else{
        return []
    }
})
const skincare=computed(()=>{
    if(products.value.length>0){
        return products.value.filter(item=>(item.category==='skincare'))
    }else{
        return []
    }
})
const groceries=computed(()=>{
    if(products.value.length>0){
        return products.value.filter(item=>(item.category==='groceries'))
    }else{
        return []
    }
})
const homedecoration=computed(()=>{
    if(products.value.length>0){
        return products.value.filter(item=>(item.category==='home-decoration'))
    }else{
        return []
    }
})
const loading=ref(true)
//Api works
const fetchData=()=>{
     
    fetch('https://dummyjson.com/products')
    .then((response)=>response.json())
    .then(data=>{
        products.value=data.products
        loading.value=false
        

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

