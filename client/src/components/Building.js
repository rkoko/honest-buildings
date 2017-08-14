import React, {Component} from 'react'
import {Button} from 'semantic-ui-react'
import { NavLink, Route } from 'react-router-dom'
import  ReviewForm  from '../containers/ReviewForm'

class Building extends Component{
  constructor(props){
    super(props)

    this.state={
      id: window.location.pathname.split("/")[2],
      currentAddress: '',
      currentNeighborhood: '',
      currentMgmtId: '',
      currentMgmt: ''
    }
  }

  componentWillMount(){
    fetch(`http://localhost:3000/api/v1/buildings/${this.state.id}`)
    .then(data => data.json())
    .then(result => this.setState({
      currentAddress: result.street_address,
      currentNeighborhood: result.neighborhood,
      currentMgmtId: result.building_mgmt.id,
      currentMgmt: result.building_mgmt.name}
    ))
  }

  render(){
    return(
      <div className='ui container'>
        <h4>{this.state.currentAddress}</h4>
        <p>street address:{this.state.currentAddress} </p>
        <p>neighborhood: {this.state.currentNeighborhood}</p>
        <p>mgmt: <NavLink to={`/building_mgmts/${this.state.currentMgmtId}`}>{this.state.currentMgmt}</NavLink></p>

        <NavLink to={`${window.location.pathname}/new-review`}><Button size='small' >Write a review</Button></NavLink>

        <Route path="/buildings/:id/new-review" render={({match})=> <ReviewForm match={match} />} />

        <p>LIST OTHER REVIEWS FOR THIS BUILDING</p>

      </div>
    )
  }
}
export default Building
