import React from 'react'

class Pet extends React.Component {
 
  constructor(props) {
    super(props)

    this.state = {
      isAdopted: props.eachPet.isAdopted
    }
  }

  adoptPet = () => {
    this.setState({
      
      isAdopted: true
    })
  }

  render() {
    let pet = this.props.eachPet
    // let petInfo = this.props.eachPet
    // let { pet } = this.props    if the name of the prop was "pet"

    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {/*'♀' OR '♂' */}
            { pet.gender === "male" ? "♀" : (pet.gender === "female" ? "♂" : "unknown") }
            {/* PET NAME */}
            {pet.name}
          </a>
          <div className="meta">
          <span className="date">Type: {pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {pet.age}</p>A
            <p>Weight: {pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          { this.state.isAdopted ? 
            <button className="ui disabled button">Already adopted</button>
              :            
            <button className="ui primary button" onClick = {() => { return this.adoptPet(this.props.eachPet) }}>Adopt pet</button>
          }
        </div>
      </div>
    )
  }
}

export default Pet
