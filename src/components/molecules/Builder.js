import React, { Component } from 'react';
import { LoadingIndicator } from '../atoms/LoadingIndicator';
import { Box, Image, Button, ResponsiveContext } from 'grommet';
import blueFilling from '../../assets/images/fill.png'
import orangeFilling from '../../assets/images/fill_2.png'
import outline from '../../assets/images/siluette.png'
import { screenCapture } from '../helpers/ScreenCapture';


const siluetteStyle = {
  width: '40%',
  position: 'relative'
}
const siluetteStyleSmall = {
  width: '80%',
  position: 'relative'
}
const imageStyle = {
  width: '40%',
  position: 'absolute'
}
const imageStyleSmall = {
  width: '80%',
  position: 'absolute'
}

class Builder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      size: undefined,
      filling: undefined
    }
  }

  componentDidMount() {
    const filling = blueFilling
    this.setState({ filling })
  }

  changeColor() {
    if (this.state.filling === blueFilling) {
      this.setState({ filling: orangeFilling })
    } else {
      this.setState({ filling: blueFilling })
    }
  }

  onExportClick(dataUrl) {
    console.log(dataUrl)
  }

  render() {
    const filling = this.state.filling
    if (!filling) {
      return (
        <LoadingIndicator />
      )
    }
    return (
      <ResponsiveContext.Consumer>
        {size => (
          <Box>
        <Box margin='medium' style={{ position: 'relative' }} direction='column-responsive' background='brand' align='center' justify='center' full>
          <Image src={this.state.filling} style={size === 'small' ? imageStyleSmall : imageStyle} />
          <Image src={outline} style={size === 'small' ? siluetteStyleSmall : siluetteStyle} />
        </Box>
        <Box background='brand'>
          <Button onClick={() => this.changeColor()}>Change</Button>
          <Button onClick={() => screenCapture((dateUrl) => this.onExportClick(dateUrl))}>Export</Button>
          {size}
        </Box>
      </Box>
        )}
      </ResponsiveContext.Consumer>
    )
  }
}

export default Builder;