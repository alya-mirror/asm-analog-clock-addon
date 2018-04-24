import React, {Component} from 'react'
import AnalogClock, {Themes} from 'react-analog-clock';
import io from 'socket.io-client';

class ASManalogClock extends Component {

  constructor(props) {
    super(props);
    let self = this;
    this.state = {
      settings: {
        width: 100,
        theme: Themes.lime
      }
    };
    this.socket = io('http://localhost:3100');
    this.socket.on('connect', function () {
      console.log('connected');
    });
    this.socket.on('disconnect', function () {
      console.log('disconnected');
    });
    this.socket.on('@alya-mirror/asm-analog-clock-addon', function (data) {
      const message = JSON.parse(data).data.addonSettings;
      let newTheme = Themes.black;
      switch (message.theme){
        case 'black':
          newTheme = Themes.black;
          break;
        case 'light':
          newTheme = Themes.light;
          break;
        case 'aqua':
          newTheme = Themes.aqua;
          break;
        case 'lime':
          newTheme = Themes.lime;
          break;
        case 'sherbert':
          newTheme = Themes.sherbert;
          break;
        case 'navy':
          newTheme = Themes.navy;
          break;
        default:
          break;
      }
      self.setState({
        settings: {
          width: message.width,
          theme : newTheme
        }
      });

    });
  }

  render() {
    return <div>
      <AnalogClock theme={this.state.settings.theme} width={this.state.settings.width}/>
    </div>
  }
}


export default ASManalogClock;
