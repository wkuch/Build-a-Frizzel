import React, { Component, useState } from 'react';
import { LoadingIndicator } from '../atoms/LoadingIndicator';
import { Pane, Text, Button, Heading, SelectMenu, Label, Checkbox, Positioner } from 'evergreen-ui'
import { CirclePicker } from 'react-color'
import outline from '../../assets/images/siluette.png'
import background from '../../assets/images/background.png'
import { screenCapture } from '../helpers/ScreenCapture';
import { spotImages } from '../../assets/images/spots'
import { DropdownSelection } from '../atoms/DropdownSelection';
import { cloneDeep } from "lodash"
import { FillingColor } from '../atoms/FillingColor';


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
  height: '100%',
  position: 'absolute'
}

class Builder extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showColorPicker: false,
      size: undefined,
      mainColor: '#4f668a',
      firstSpotColor: 'sand',
      secondSpotColor: 'darkBlue',
      firstSpots: undefined,
      secondSpots: undefined
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
        location: 'Linkes Ohr',
        src: spotImages.leftEar
      },
      {
        selected: false,
        location: 'Linke Vorderpfote',
        src: spotImages.leftFrontFoot
      },
      {
        selected: false,
        location: 'Rechtes Ohr',
        src: spotImages.rightEar
      },
      {
        selected: false,
        location: 'Rechte Vorderpfote',
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
    this.setState({ firstSpots: spots, secondSpots: cloneDeep(spots) })
  }

  changeColor() {

  }

  onExportClick(dataUrl) {
    console.log(dataUrl)
  }

  renderSpotSelection(spot, spotNumber) {
    return (
      <Checkbox
        label={spot.location}
        checked={spot.selected}
        onChange={e => {
          this.setState(state => {
            if (spotNumber === 0) {
              state.firstSpots[state.firstSpots.indexOf(spot)].selected = !spot.selected
            } else {
              state.secondSpots[state.secondSpots.indexOf(spot)].selected = !spot.selected
            }
            return state
          })
        }}
      />
    )
  }

  renderSpot(spot, color) {
    return (
      <img style={imageStyleSmall} src={spot.src[color]} />
    )
  }

  render() {
    console.log(this.props.theme.colors)
    const colors = this.props.theme.colors
    if (!this.state.firstSpots) {
      return (
        <LoadingIndicator />
      )
    }
    {/* <Button onClick={() => screenCapture(this.imageBox, (dateUrl) => this.onExportClick(dateUrl))}>Export</Button> */ }
    return (
      <Pane className='container'>
        <Pane background='orangeTint' style={{ position: 'sticky', top: 0, zIndex: 99 }}>
          <Pane style={{ position: 'relative' }} display='flex' direction='column' alignItems='center' justifyContent='center'>
            <FillingColor fill={this.state.mainColor} style={imageStyleSmall} />
            {/* <img src={} style={imageStyleSmall} /> */}
            <img src={background} style={imageStyleSmall} />
            {this.state.firstSpots.filter(spot => spot.selected).map(spot => this.renderSpot(spot, this.state.firstSpotColor))}
            {this.state.secondSpots.filter(spot => spot.selected).map(spot => this.renderSpot(spot, this.state.secondSpotColor))}
            <img src={outline} style={siluetteStyleSmall} />
          </Pane>
        </Pane>
        <Heading size={600}>
          Farben
        </Heading>
        <Pane display="flex" padding={8} background="tint2" borderRadius={3}>
          <Pane flex={1} alignItems="center" display="flex">
            <Heading>Hauptfarbe</Heading>
          </Pane>
          <Pane>
            <Pane>
              <Button>Farbauswahl</Button>
            <CirclePicker onChangeComplete={c => this.setState({ mainColor: c.hex })} /> 
              {/* <Positioner
              isShown={this.state.showColorPicker}
              > 
              {/* </Positioner> */}

            </Pane>
          </Pane>
        </Pane>

        <DropdownSelection
          label='Fleckenfarbe 1'
          options={
            ['rot', 'rosa', 'hellblau', 'dunkelblau', 'hellgrün']
              .map(label => ({ label, value: label }))
          }
          selected={this.state.firstSpotColor}
          useSelectedAsButtonText
          fallbackButtonText='Auswahl ...'
          onSelect={selected => this.setState({ firstSpotColor: selected })}
        />
        <DropdownSelection
          label='Fleckenfarbe 2'
          options={
            ['rot', 'rosa', 'hellblau', 'dunkelblau', 'hellgrün']
              .map(label => ({ label, value: label }))
          }
          selected={this.state.secondSpotColor}
          useSelectedAsButtonText
          fallbackButtonText='Auswahl ...'
          onSelect={selected => this.setState({ secondSpotColor: selected })}
        />
        <Heading size={600}>
          Flecken 1
        </Heading>
        {this.state.firstSpots.map(spot => this.renderSpotSelection(spot, 0))}
        <Heading size={600}>
          Flecken 2
        </Heading>
        {this.state.secondSpots.map(spot => this.renderSpotSelection(spot, 1))}
      </Pane>
    )
  }
}

export default Builder;