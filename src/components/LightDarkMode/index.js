// Write your code here

import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isLightMode: true}

  changeMode = () => {
    this.setState(prevState => ({isLightMode: !prevState.isLightMode}))
  }

  render() {
    const {isLightMode} = this.state
    const classModes = isLightMode ? 'LightMode' : 'darkMode'
    const buttonText = isLightMode ? 'Light Mode' : 'Dark Mode'

    return (
      <div className="bg-container">
        <div className={`container ${classModes}`}>
          <h1>click to change mode</h1>
          <button type="button" onClick={this.changeMode}>
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
