import React, {Component} from 'react'
import { Menu } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

export default class Nav extends Component {
  state = {}

  handleLogout = (e, { name }) => {
    this.setState({ activeItem: name })
    this.props.handleLogout()
  }

  handleInputClick = (e, { name }) => {
    this.setState({ activeItem: name })
  }

  render() {
    const { activeItem } = this.state

    return (
      <Menu>
        {/* <Menu.Item name='Write a review' active={activeItem === 'Write a review'} onClick={this.handleItemClick} position="left">
            <NavLink to="/new-review"> Write a review </NavLink>
        </Menu.Item> */}

        <Menu.Item name='Logout' active={activeItem === 'Logout'} onClick={this.handleLogout} position="right" >
            <NavLink to="/"> Logout </NavLink>
        </Menu.Item>
        {/* <Menu.Item name='Sign up as building mgr' active={activeItem === 'Sign up'} onClick={this.handleItemClick}>
        </Menu.Item> */}
      </Menu>
    )
  }
}
