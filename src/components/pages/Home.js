import React, { Component } from 'react';
import { Pane, Heading, defaultTheme } from 'evergreen-ui'
import Builder from '../molecules/Builder';
import { ThemeProvider } from 'styled-components';


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
      <ThemeProvider theme={defaultTheme}>
        <Pane background='yellowTint' >
          <Pane className='col-sm-11 col-md-8 col-lg-6 container' background='yellowTint' >
            <Pane style={{ position: 'sticky', top: 0 }} >
              <Heading >
                Heading
              </Heading>
            </Pane>
            <Builder theme={defaultTheme} />
          </Pane>
        </Pane>
      </ThemeProvider>
    );
  }
}

export default Home;
