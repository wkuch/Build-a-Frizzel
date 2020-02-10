import React, { Component } from 'react';
import { Pane, Heading } from 'evergreen-ui'
import Builder from '../molecules/Builder';


const theme = {
  global: {
    colors: {
      brand: '#6793c8',
      selected: '#FD6FFF'
    },
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px',
    },
  },
};



class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSidebar: false,
    }
  }


  render() {
    return (
      <Pane>
        <Heading>
          Heading
        </Heading>
        <Builder />
      </Pane>
    );
  }
}

export default Home;
