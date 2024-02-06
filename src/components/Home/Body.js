import React, { Component } from 'react'
import Header from './Header'
import ChangeGlasses from './ChangeGlasses'
import style from '../../assets/css/Body.module.css'

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
