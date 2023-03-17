import { store } from "../store"
export  function useLoggedIn() {
    // The logic
    const index=store.state.index
    const userName=JSON.parse(localStorage.getItem('users'))[index].fullname
    return {userName}
 }
