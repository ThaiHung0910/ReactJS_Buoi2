import React, { Component } from 'react'
import Header from '../Header/Header.js'
import ChangeGlasses from '../ChangeGlasses/ChangeGlasses.js'
import style from './css/Body.module.css'

export default class Body extends Component {
  render() {
    return (
      <div className={style.background}>
        <Header/>
        <ChangeGlasses/>
      </div>
    )
  }
}
