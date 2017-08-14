import React, {Component} from 'react'
import Building from './Building'
import { NavLink, Switch, Route } from 'react-router-dom'

const BuildingList = ({buildings}) =>{
  return(
    <div>
      <ul>

        {buildings.map(building=>(
          <li key={building.id}><NavLink to={`/buildings/${building.id}`}>{building.street_address}</NavLink></li>
        )
        )}
      </ul>
      <Route path='/buildings/:id' component={Building} />
  </div>
  )
}

export default BuildingList
