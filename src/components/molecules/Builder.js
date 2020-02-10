import React, { Component, useState } from 'react';
import { LoadingIndicator } from '../atoms/LoadingIndicator';
import { Pane, Text, Button, Heading, SelectMenu, Label, Checkbox } from 'evergreen-ui'
import blueFilling from '../../assets/images/fill.png'
import orangeFilling from '../../assets/images/fill_2.png'
import outline from '../../assets/images/siluette.png'
import { screenCapture } from '../helpers/ScreenCapture';
import { DropdownSelection } from '../atoms/DropdownSelection';
import { cloneDeep } from "lodash"


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
      filling: undefined,
      mainColor: undefined,
      firstSpotColor: undefined,
      secondSpotColor: undefined,
      firstSpots: undefined,
      secondSpots: undefined
    }
  }

  componentDidMount() {
    const filling = blueFilling
    let spots = [
      {
        selected: false,
        location: 'Rechtes Ohr',
        src: 'rechtesOhr.svg',
      },
      {
        selected: false,
        location: 'Linkes Ohr',
        src: 'linkesOhr.svg',
      },
      {
        selected: false,
        location: 'Bauch',
        src: 'bauch.svg',
      },
      {
        selected: false,
        location: 'Schwanz',
        src: 'schwanz.svg',
      },
    ]
    this.setState({ filling, firstSpots: spots, secondSpots: cloneDeep(spots) })
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

  renderSpotSelection(spot, spotNumber){
    return (
      <Checkbox 
        label={spot.location}
        checked = {spot.selected}
        onChange={e => {
          this.setState(state => {
            if(spotNumber === 0){
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
    
  

  render() {
    const filling = this.state.filling
    if (!filling) {
      return (
        <LoadingIndicator />
      )
    }
    {/* <Button onClick={() => screenCapture(this.imageBox, (dateUrl) => this.onExportClick(dateUrl))}>Export</Button> */ }
    return (
      <Pane className='container'>
        <Pane style={{ position: 'relative' }} display='flex' direction='column' alignItems='center' justifyContent='center'>
          <img src={this.state.filling} style={imageStyleSmall} />
          <img src={outline} style={siluetteStyleSmall} />
        </Pane>
        <Heading size={600}>
          Farben
        </Heading>
        <DropdownSelection
          label='Hauptfarbe'
          options={
            ['rot', 'rosa', 'hellblau', 'dunkelblau', 'hellgrün']
              .map(label => ({ label, value: label }))
          }
          selected={this.state.mainColor}
          useSelectedAsButtonText
          fallbackButtonText='Auswahl ...'
          onSelect={selected => this.setState({ mainColor: selected })}
        />
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