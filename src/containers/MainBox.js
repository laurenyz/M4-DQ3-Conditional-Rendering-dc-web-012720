import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {

showComponent

  render() {

    return (
      <div>
        <MenuBar />
        {this.showComponent()}
      </div>
    )
  }

}

export default MainBox
