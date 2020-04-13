export default function categoriesReducer(state = { categories: [], loading: false }, action){
    switch(action.type){
        case 'FETCH_CATEGORIES':
            console.log("loading categories here")
            return {...state, loading: true}
        case 'LOADED_CATEGORIES':
            console.log("categories are loaded")
            return {...state, categories: action.payload, loading: false}
            default:
                return state
  }
}


