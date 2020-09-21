import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    return <div className="ui cards">
      {this.props.petList.map(pet => { return <Pet eachPet = {pet} key = {pet.id} /> })}  
    </div>
  }
}

export default PetBrowser
