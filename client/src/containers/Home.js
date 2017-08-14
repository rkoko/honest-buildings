import React, {Component} from 'react'
import Search from '../containers/Search'
import Nav from '../components/nav'
import FeaturedBuildings from '../components/FeaturedBuildings'
import BuildingList from '../components/BuildingList'


class Home extends Component{
  state = {
    buildings: [],
    searchResults: []
  }

  componentDidMount(){
    fetch(`http://localhost:3000/api/v1/buildings`)
    .then(res => res.json())
    .then(data => this.setState({buildings: data}))
  }

  onSearchSubmit = (searchTerm) =>{
    this.setState({
      searchResults: this.state.buildings.buildings.filter(building => building.street_address.toLowerCase().includes(searchTerm.toLowerCase()))
    })
  }


  render(){
    return(
      <div className='ui container'>
        <Nav handleLogout={this.props.handleLogout}/>
        <p>User page after they login</p>
        <Search handleSearchSubmit={this.onSearchSubmit}/>
        <br/>
        <br/>
        <br/>
        <BuildingList buildings={this.state.searchResults}/>
        <FeaturedBuildings />

      </div>
    )
  }
}

export default Home
