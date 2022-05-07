import React, { useState } from "react"
import * as darkModeStyles from '../styles/_toggleDarkModeBtn.module.scss'
import { RiMoonClearFill, RiSunFill } from "react-icons/ri";
import useDarkMode from 'use-dark-mode';

const ThemeToggleBtn = ({position}) => {
  const {value, toggle} = useDarkMode(false, {
    classNameDark: 'dark',
    classNameLight: 'light',
  });

  return (
    <React.Fragment>
      <input id={`darkmodeToggle_${position}`} type="checkbox" checked={value} disabled />
      <label htmlFor={`darkmodeToggle_${position}`} className={darkModeStyles.wrap} onClick={toggle}>
        <div className={darkModeStyles.btn} />
        <RiSunFill style={{color: 'red'}} />
        <RiMoonClearFill style={{color: 'yellow'}} />
      </label>
    </React.Fragment>
  )
}

export default ThemeToggleBtn