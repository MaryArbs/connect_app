const categoriesURL = 'http://localhost:3000/categories'

export const fetchCategories = () => {
    return (dispatch) => {
        dispatch({type: 'LOADING_CATEGORIES'})
         return fetch(categoriesURL)
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
  };

  export const updateLikes = (service) => {
    let data = {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(service)
    }

    return dispatch => {
      dispatch({type: "LOADING_SERVICES"});
      fetch(`http://localhost:3000/services/${service.id}`, data)
      .then(response => response.json())
      .then(service=> {
        dispatch(addLike(service))
      });
    }
    
  }

  const addLike = service => ({
    type: 'UPDATE_LIKES',
    payload: service 
  });

  //action creator: function that returns an action 
