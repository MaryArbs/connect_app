import React from 'react';
import { Container, Button, Icon } from 'semantic-ui-react'
import './Home.css'

const Home = () => (
    <Container>
    <div className="Home">
      <div className ="HomeImage">
      <img src='https://irp-cdn.multiscreensite.com/2c85fd77/dms3rep/multi/special-needs-children-in-developing-countries_opt.jpg' alt="happy-children" className='homepage_pic'></img>
      </div>
      <button class="ui button" onClick={() =>  window.location.href='/categories'}>
         CONNECT!
       </button>
    </div>
    </Container>
)

export default Home;

