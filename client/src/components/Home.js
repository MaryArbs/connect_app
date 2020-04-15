import React from 'react';
import { Container, Button, Icon } from 'semantic-ui-react'
// import './Home.css'

const Home = () => (

    <Container>
    <div className ="homepage">
    <img src='https://irp-cdn.multiscreensite.com/2c85fd77/dms3rep/multi/special-needs-children-in-developing-countries_opt.jpg' alt="earth spinning" className='homepage_pic'></img>
    </div>
    <button className="ui blue inverted animated button" onClick={() =>  window.location.href='/categories'}>
      <div className="visible content">CONNECT!</div>
      <div className="hidden content"><i aria-hidden="true" className="arrow right icon"></i></div>
    </button>
    </Container>
)

export default Home;