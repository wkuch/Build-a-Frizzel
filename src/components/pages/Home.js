import React, { Component } from 'react';
import { Button, Heading, Grommet, Box, dark } from 'grommet'
import { Notification } from 'grommet-icons'
import { AppBar } from '../atoms/AppBar'
import Builder from '../molecules/Builder'

const theme = {
  global: {
    colors: {
      brand: '#6793c8'
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
    const showSidebar = this.state.showSidebar
    return (
      <Grommet theme={theme} full >
        <AppBar>
          <Heading level='3' margin='none'>My App</Heading>
          <Button icon={<Notification />} onClick={() => { this.setState({ showSidebar: !showSidebar }) }} />
        </AppBar>
        <Box direction='column-responsive' align='center' justify='center'>
        <Builder />
        </Box>
      </Grommet >
    );
  }
}


export default Home;
