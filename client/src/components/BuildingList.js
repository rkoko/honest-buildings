import React, {Component} from 'react'
// import Building from './Building'
import { NavLink } from 'react-router-dom'

const BuildingList = ({buildings}) =>{
  // const filteredList = props.buildings.filter(building => building.street_address.toLowerCase().includes(props.searchTerm.toLowerCase))

  return(
    // <div>
    //   {buildings.map(building=> <Building building={building} /> )}
    // </div>
    <ul>
      {buildings.map(building=>(
        <li><NavLink to={`/buildings/${building.id}`}>{building.street_address}</NavLink></li>
      )
      )}
    </ul>
  )
}

export default BuildingList
