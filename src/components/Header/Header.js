import React, { Component } from 'react'
import style from './css/Header.module.css'

export default class Header extends Component {
  render() {
    return (
      <header className={style.header}>
        <h3>Try Glasses App Online</h3>
      </header>
    )
  }
}
