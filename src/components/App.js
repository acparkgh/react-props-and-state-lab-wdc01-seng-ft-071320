import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  changeFilter = (e) => { 
    // changeFilter = (animalType) => {
    let animalType = e.target.value;    
    // debugger
    this.setState({
      filters: {
        type: animalType
      }
    })
  }

  fetchPets = () => {
    // debugger
    let url = ""

    if(this.state.filters.type ==="all") {
      url = "/api/pets"
    } else {
      url = `/api/pets?type=${this.state.filters.type}`
    }
    // console.log(url)
    fetch(url)
    .then(response => response.json())
    .then(pets => {
      this.setState({
        pets: pets
      })
    })
  }

  adoptPet = (eachPet) => {
    // debugger

    // let newPetsArray = this.state.pets.map(pet => {
    //   if(eachPet === pet) {
    //     return {...pet, isAdopted: true}
    //   pet.isAdopted = true
    //   }
    //   return pet
    // })

    // console.log(newPetsArray)
    this.setState({
      // pets: newPetsArray
      pets: this.state.pets.map(pet => {
              if(eachPet === pet) {
                pet.isAdopted = true
                // return {...pet, isAdopted: true}
              }
              return pet
       })
    })
  }


  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters changeFilters = {this.changeFilter} fetchPet = {this.fetchPets}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser petList = {this.state.pets} adoptPetFunc = {this.adoptPet} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
