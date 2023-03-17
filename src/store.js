import { createStore } from "vuex";

export const store=createStore({
   state:{
     users:[],
     verify:false,
     index:0
   },
    mutations:{
      signup(state,payload){
        state.users.push(payload)
        localStorage.setItem('users',JSON.stringify(state.users))
        localStorage.setItem('verify',JSON.stringify(state.verify))

      },
      login(state,payload){
        if(JSON.parse(localStorage.getItem('users'))){
        const arr=JSON.parse(localStorage.getItem('users'))
         const user=arr.find((item)=>item.email==payload.email)
         user!==undefined?delete user.fullname:'user'
         const position=arr.findIndex((item)=>item.email==payload.email)
        state.verify=JSON.stringify(user)===JSON.stringify(payload)
        state.index=position
        localStorage.setItem('verify',JSON.stringify(state.verify))
        }
      },
      logout(state){
        state.verify=false;
        localStorage.removeItem('verify')
      }
      
    }   
})