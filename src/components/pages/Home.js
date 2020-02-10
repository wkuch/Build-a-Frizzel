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



export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSidebar: false,
    }
  }


  render() {
    return (
      <ThemeProvider theme={defaultTheme}>
        <div className='container col-12'>
        <Pane background='yellowTint' >
          <Pane display='flex' alignItems='center' flexDirection='column' width='100%' background='yellowTint' >

            <Builder theme={defaultTheme} />
          </Pane>
        </Pane>
        </div>
      </ThemeProvider>
    );
  }
}

