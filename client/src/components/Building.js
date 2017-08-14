import React, {Component} from 'react'
import {Button} from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

const Building = (props) =>{
  console.log(props)
  const building = props.buildingList.filter(building => building.id === props.match.params.number)
  if (!building){
    return <div>This building does not exist yet. Would you like to add and review it?</div>
  }
  return(
    <div>
      <p>building display</p>
      <h1>{building.street_address}</h1>

    </div>
  )
}

export default Building
