import { combineReducers } from 'redux';
import categoriesReducer from './categoriesReducer';
import servicesReducer from './servicesReducer';

const rootReducer = combineReducers({
    categoriesReducer,
    servicesReducer,
    
})

export default rootReducer;