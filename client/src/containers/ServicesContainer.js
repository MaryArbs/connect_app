// import { connect } from 'react-redux';
// import React, { Component } from 'react';
// import Services from '../components/Services/Services';
// import { fetchServices } from '../actions/index';
// // import { fetchCategory } from '../actions/index';
// import { Container } from 'semantic-ui-react'
// import CategoryShowPage from '../components/Categories/CategoryShowPage'

// class ServicesContainer extends Component {

//     // componentDidMount(){
//     //     this.props.fetchServices()
//     // };

//     render() {
//         console.log(this.props)
//         // const categoryId = this.props.match.params.categoryId
//         return (
//        <CategoryShowPage
//         services={this.props.services }
//         categoryId={this.props.category_id}
        
//         />
            
//         )
//     }
// };
  
//     const mapStateToProps = (state) => {
//         console.log(state)
//         return {
//             services: state.servicesReducer.services,
//             loading: state.servicesReducer.loading,
//             // category: state.categoriesReducer.category
//         }
//     }

//     const mapDispatchToProps = dispatch => {
//         return {
//             fetchServices: () => dispatch(fetchServices()),
//             // fetchCategory: categoryId => dispatch(fetchCategory(categoryId)),
//      }
//     }



// export default connect(mapStateToProps, mapDispatchToProps)(ServicesContainer);
