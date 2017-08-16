import React, {Component} from 'react'
import { Menu } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

export default class Nav extends Component {

  render() {

    return (
      <Menu>

        <Menu.Item>Honest Buildings - community for NYC renters</Menu.Item>

        <Menu.Item name='Logout' onClick={() => this.props.handleLogout()} position="right" >
            <NavLink to="/"> Logout </NavLink>
        </Menu.Item>

      </Menu>
    )
  }
}
