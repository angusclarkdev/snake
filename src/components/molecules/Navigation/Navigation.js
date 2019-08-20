import React, { PureComponent } from 'react'
import styles from './Navigation.module.css'

class Navigation extends PureComponent {
  render () {
    const { navBar, navListItem } = styles
    return (
      <nav>
        <ul className={navBar}>
          <li className={navListItem}> icon </li>
          <li className={navListItem}> My Cookbook </li>
          <li className={navListItem}> search </li>
          <li className={navListItem}> Add new meal </li>
        </ul>
      </nav>
    )
  }
}

export default Navigation
