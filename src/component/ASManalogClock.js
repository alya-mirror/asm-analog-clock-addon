import React, {Component} from 'react'
import AnalogClock, { Themes } from 'react-analog-clock';
const width = 200;

class ASManalogClock extends Component {

  render() {
    return <div>
      <AnalogClock theme={Themes.light} width={width}/>
    </div>
  }
}


export default ASManalogClock;