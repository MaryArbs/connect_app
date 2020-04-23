export default function categoriesReducer(state = { categories: [], loading: false }, action){
    switch(action.type){
        case 'LOADING_CATEGORIES':
            console.log("loading categories")
            return {...state, loading: true}
        case 'FETCH_CATEGORIES':
            console.log("categories are loaded")
            return {...state, categories: action.payload, loading: false}
        default:
          return state
  }
}

 // pure functions have no side effects
 

