export default function servicesReducer(state = { services: [], loading: false }, action){
    switch(action.type){
        case 'LOADING_SERVICES':
            console.log("loading services")
            return {...state, loading: true}
        case 'FETCH_SERVICES':
            console.log("services are loaded")
            return {...state, services: action.payload, loading: false}
        
        case 'UPDATE_LIKES':
            // debugger
            // check action.service.id
            // let updatedServices = state.services.map(s => s.id !== action.service.id ? s : action.service)
            //  Find old service with id from incoming payload and replace
            console.log({...state, services: state.services.map(service => service.id !== action.payload.id ? service : action.payload), loading: false})
            return {...state, services: state.services.map(service => service.id !== action.payload.id ? service : action.payload), loading: false}
        default:
            return state
  }
}