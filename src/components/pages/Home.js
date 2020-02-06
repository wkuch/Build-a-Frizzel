import React, { Component } from 'react';
import { Button, Heading, Grommet, Box, dark, Image } from 'grommet'
import { Notification } from 'grommet-icons'
import { AppBar } from '../atoms/AppBar'
import fill from './fill.png'
import orange from './fill_2.png'
import siluette from './siluette.png'


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

const imageStyle={
  width: '100%',
  position: 'absolute',
  top: 0,
  left: 0
}

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSidebar: false,
      filling: fill
    }
  }

  changeColor(){
    console.log(this.state.filling)
    console.log(fill)

    if(this.state.filling === fill){
      console.log('change to orange')
      this.setState({filling: orange})
    } else {
      console.log('change color to blue')
      this.setState({filling: fill})

    }
  }

  render() {
    const showSidebar = this.state.showSidebar
    return (
      <Grommet  theme={theme} full >
        <AppBar>
          <Heading level='3' margin='none'>My App</Heading>
          <Button icon={<Notification />} onClick={() => { this.setState({ showSidebar: !showSidebar }) }} />
        </AppBar>
        <Button onClick={() => this.changeColor() }>Change</Button>
        <Box margin='medium' style={{position: 'relative'}} direction='column-responsive' background='brand' align='center' justify='center' full>
          <Image src={this.state.filling} style={imageStyle} fit='contain' />
          <Image src={siluette} style={imageStyle} fit='contain'  />
        </Box>
        

        
      </Grommet >
    );
  }
}

export default Home;
