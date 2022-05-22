import React from 'react'
import sunIcon from '../../../img/sun.png'
import moonIcon from '../../../img/moon.png'
import {useAppDispatch, useAppSelector} from '../../../store'
import {setThemeMode} from '../../../store/environments/environmentsState'

const ThemeMode = () => {
  const dispatch = useAppDispatch()
  const { mode } = useAppSelector((state) => state.environments)
  const handleChangeThemeMode = () => {
    if (mode === 'light') {
      dispatch(setThemeMode('dark'))
      localStorage.setItem('mode', 'dark')
    } else {
      dispatch(setThemeMode('light'))
      localStorage.setItem('mode', 'light')
    }
  }

  return (
    <div className={'flex bg-white w-[100px] rounded-[30px] p-[5px] gap-[5px]'}>
      <button
        onClick={handleChangeThemeMode}
        className={`theme-mode__button ${
          mode === 'light' && 'theme-mode__button--active'
        }`}
      >
        <img
          className={'w-[24px] h-[24px] pointer-events-none'}
          src={sunIcon}
          alt={''}
          draggable={false}
        />
      </button>
      <button
        onClick={handleChangeThemeMode}
        className={`theme-mode__button ${
          mode === 'dark' && 'theme-mode__button--active'
        }`}
      >
        <img
          className={'w-[24px] h-[24px] pointer-events-none'}
          src={moonIcon}
          alt={''}
          draggable={false}
        />
      </button>
    </div>
  )
}

export default ThemeMode
