export const fetchCategories = () => {
    return (dispatch) => {
        dispatch({type: 'LOADING_CATEGORIES'})
         return fetch('http://localhost:3000/categories')
          .then(resp => resp.json())
          .then(categories => {dispatch({type: "FETCH_CATEGORIES", payload: categories})})
    }
  
  };

  export const fetchServices = () => {
    return (dispatch) => {
        dispatch({type: 'LOADING_SERVICES'})
         return fetch('http://localhost:3000/services')
          .then(resp => resp.json())
          .then(services => {dispatch({type: "FETCH_SERVICES", payload: services})})
    }
  }

