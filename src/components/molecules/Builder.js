import React, { Component,  } from 'react';
import { LoadingIndicator } from '../atoms/LoadingIndicator';
import { Pane, Heading, Checkbox} from 'evergreen-ui'
import {CirclePicker } from 'react-color'
import outline from '../../assets/images/siluette.png'
import background from '../../assets/images/background.png'
import { spotImages } from '../../assets/images/spots'
import { DropdownSelection } from '../atoms/DropdownSelection';
import { cloneDeep } from "lodash"
import { FillingColor } from '../atoms/FillingColor';



const siluetteStyleSmall = {
  width: '80%',
  position: 'relative'
}
const imageStyleSmall = {
  width: '80%',
  height: '100%',
  position: 'absolute'
}

class Builder extends Component {

  constructor(props) {
    super(props)
    this.imageBox = React.createRef()
    this.state = {
      showColorPicker: false,
      size: undefined,
      mainColor: '#03A9F4',
      firstSpotColor: 'sand',
      secondSpotColor: 'darkBlue',
      firstSpots: undefined,
      secondSpots: undefined,
      showWelcomeMessage: true,
      headerHeight: undefined,
      spotColorOptions: undefined
    }
  }

  componentDidMount() {
    let spots = [
      {
        selected: false,
        location: 'Rücken',
        src: spotImages.back
      },
      {
        selected: false,
        location: 'Bauch',
        src: spotImages.belly
      },
      {
        selected: false,
        location: 'Auge',
        src: spotImages.eye
      },
      {
        selected: false,
        location: 'Linkes Ohr',
        src: spotImages.leftEar
      },
      {
        selected: false,
        location: 'Rechtes Ohr',
        src: spotImages.rightEar
      },
      {
        selected: false,
        location: 'Linke Vorderpfote ',
        src: spotImages.leftFrontFoot
      },
      {
        selected: false,
        location: 'Rechte Hinterpfote',
        src: spotImages.rightFrontFoot
      },
      {
        selected: false,
        location: 'Schulter',
        src: spotImages.shoulder
      },
      {
        selected: false,
        location: 'Schwanz',
        src: spotImages.tail
      }
    ]

    let secondSpots = cloneDeep(spots)

    //Default selection of spots
    spots[0].selected = true
    spots[1].selected = true
    spots[2].selected = true
    secondSpots[8].selected = true
    secondSpots[3].selected = true
    secondSpots[4].selected = true
    secondSpots[6].selected = true

    const spotColorOptions = [
      {
        label: 'Dunkelblau',
        value: 'darkBlue'
      },
      {
        label: 'Hellgelb',
        value: 'sand'
      },
      {
        label: 'Grau',
        value: 'grey'
      }
    ]
    this.setState({ firstSpots: spots, secondSpots, spotColorOptions })
  }

  onExportClick(dataUrl) {
    console.log(dataUrl)
  }

  renderSpotSelection(spot, spotNumber, i) {
    return (
      <Checkbox
        key= {i}
        label={spot.location}
        checked={spot.selected}
        onChange={() => {
          this.setState(state => {
            if (spotNumber === 0) {
              state.firstSpots[i].selected = !spot.selected
            } else {
              state.secondSpots[i].selected = !spot.selected
            }
            return state
          })
        }}
      />
    )
  }

  renderSpot(spot, color, i) {
    return (
      <img key={i} style={imageStyleSmall} alt={'Spot'+spot.location} src={spot.src[color]} />
    )
  }

  render() {
    if (!this.state.firstSpots) {
      return (
        <LoadingIndicator />
      )
    }
    return (
      <Pane id='imageBox' className='col-sm-11 col-md-6 col-lg-4' >
        <Pane  elevation={2} paddingBottom={16} display='flex' alignItems='center' flexDirection='column' justifyContent='center' background='yellowTint' width='100%' style={{ position: 'sticky', top: 0, zIndex: 99 }}>
          <Heading marginTop={8} height={32}>Gestalte dein Frizzel Monster</Heading>
          <Pane   style={{ position: 'relative' }} display='flex' alignItems='center' justifyContent='center'>
            <FillingColor fill={this.state.mainColor} style={imageStyleSmall} />
            {/* <img src={} style={imageStyleSmall} /> */}
            <img ref={ this.imageBox } alt='background color' src={background} style={imageStyleSmall} />
            {this.state.firstSpots.filter(spot => spot.selected).map((spot, i) => this.renderSpot(spot, this.state.firstSpotColor, i))}
            {this.state.secondSpots.filter(spot => spot.selected).map((spot, i) => this.renderSpot(spot, this.state.secondSpotColor, i))}
            <img src={outline} alt='outline' style={siluetteStyleSmall} />
          </Pane>
        </Pane>
        <Pane display="flex" padding={8} borderRadius={3}>
          <Pane flex={1} alignItems="center" display="flex">
            <Heading>Hauptfarbe</Heading>
          </Pane>
          <Pane margin={4}>
            <div className='col-sm-12'>
              <CirclePicker width='100%' style={{ marginRight: '0' }} color={this.state.mainColor} onChangeComplete={c => this.setState({ mainColor: c.hex })} />
            </div>
          </Pane>
        </Pane>

        <DropdownSelection
          label='Fleckenfarbe 1'
          options={this.state.spotColorOptions}
          selected={this.state.firstSpotColor}
          useSelectedAsButtonText = {false}
          fallbackButtonText='Auswahl ...'
          onSelect={newSelection => this.setState({firstSpotColor: newSelection.value})}
        />
        <DropdownSelection
          label='Fleckenfarbe 2'
          options={this.state.spotColorOptions}
          selected={this.state.secondSpotColor}
          useSelectedAsButtonText = {false}
          fallbackButtonText='Auswahl ...'
          onSelect={newSelection => this.setState({secondSpotColor: newSelection.value})}
        />
        <Heading size={600}>
          Flecken 1
        </Heading>
        {this.state.firstSpots.map((spot, i) => this.renderSpotSelection(spot, 0, i))}
        <Heading size={600}>
          Flecken 2
        </Heading>
        {this.state.secondSpots.map((spot, i) => this.renderSpotSelection(spot, 1, i))}
        {/* <Button onClick={() => screenCapture('innerImage', (dateUrl) => this.onExportClick(dateUrl))}>
          Save
        </Button> */}
      </Pane>
    )
  }
}

export default Builder;