export default function servicesReducer(state = { services: [], loading: false }, action){
    switch(action.type){
        case 'LOADING_SERVICES':
            console.log("loading services")
            return {...state, loading: true}
        case 'FETCH_SERVICES':
            console.log("services are loaded")
            return {...state, services: action.payload, loading: false}
            default:
                return state
  }
}