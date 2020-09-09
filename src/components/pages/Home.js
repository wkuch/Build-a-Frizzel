import React, { Component } from 'react';
import { Pane, defaultTheme, Heading, Paragraph } from 'evergreen-ui'
import Builder from '../molecules/Builder';
import { ThemeProvider } from 'styled-components';
import logo from '../../assets/images/logo.png'

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      welcomeMessage: undefined
    }
  } 

  componentDidMount(){
    const welcomeMessage = {
      heading: 'Happy Birthday Johanna',
      firstParagraph: 'hoffentlich weißt du dass ich dein größter Fan bin und du mich wirklich oft mit deiner Kreativität beeindruckst. Du bist in vielen Lebensbereichen ein echtes Vorbild für mich und ich wünsche dir zum Geburtstag dass alle deine  Träume in Erfüllung gehen.',
      secondParagraph: 'Ich finde allerdings so als angehender Vollzeitkünstler fehlt dir alledings noch ein Ort an dem du ganz nach deinen eigenen Vorstellungen deine Kunst präsentieren und in coole Projekte einbauen kannst. Deswegen dachte ich ich unterstütze dich mal dabei. Diese Webseite wie du sie gerade vor dir siehst soll aber nur der Anfang sein. Ich habe mir nämlich während dem Erstellen immer wieder gewünscht, dass mir jemand mit einem besseren Designer- und Gestalterauge über die Schulter schaut und hilft. Deswegen würde ich gerne hier mit dir zusammen hier eine richtig coole und witzige Webseite aufbauen.',
      thirdParagraph: 'Für den Anfang dachte ich es wäre eine coole Idee den Frizzel-Monster Gestalter zu bauen damit sich deine Fans ihre eignen Monster gestalten können. Ich hoffe er gefällt dir.',
      forthParagraph: 'Ich freue mich jetzt schon drauf mit dir darüber zu reden was hier alles cooles hinkommen könnte und es dann mit dir zusammen in die Wirklichkeit umzusetzen 😘'
    }
    this.setState({welcomeMessage})
  }

  render() {
    const welcomeMessage = this.state.welcomeMessage
    if(!welcomeMessage){
      return (
        <div>
          loading
        </div>
      )
    }
    return (
      <ThemeProvider theme={defaultTheme}>
        <div style={{ padding: 0 }} className='container col-12'>
          <Pane background='yellowTint' >
            <div id='header' style={{ backgroundColor: '#82cfff' }}>
              <Pane display='flex' alignItems='center' paddingTop={8} paddingBottom={8} >
                <img className='col-sm-2 col-md-1' alt='FrizzelBlizzel Logo' src={logo} />
                <Heading >
                  Frizzel Blizzel
                </Heading>
              </Pane>
            </div>
            <div className='container col-sm-12 col-md-8 col-lg-4'>
            {/* <Pane>
              <Heading margin={8}>
                {welcomeMessage.heading}
              </Heading>
              <Paragraph marginBottom={8} style={{textAlign: 'justify'}}>
                {welcomeMessage.firstParagraph}
              </Paragraph>
              <Paragraph marginBottom={8} style={{textAlign: 'justify'}}>
                {welcomeMessage.secondParagraph}
              </Paragraph>
              <Paragraph marginBottom={8} style={{textAlign: 'justify'}}>
                {welcomeMessage.thirdParagraph}
              </Paragraph>
              <Paragraph marginBottom={8} style={{textAlign: 'justify'}}>
                {welcomeMessage.forthParagraph}
              </Paragraph>
            </Pane> */}
            </div>
            <Pane display='flex' alignItems='center' flexDirection='column' width='100%' background='yellowTint' >
              <Builder theme={defaultTheme} />
            </Pane>
          </Pane>
        </div>
      </ThemeProvider>
    );
  }
}

