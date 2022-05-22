import React from 'react'
import sunIcon from '../../../img/sun.png'
import moonIcon from '../../../img/moon.png'

const ThemeMode = () => {
  return (
    <div
      className={
        'theme-mode flex bg-white w-[100px] rounded-[30px] p-[5px] gap-[5px]'
      }
    >
      <button className={'theme-mode__button theme-mode__button--active'}>
        <img
          className={'w-[24px] h-[24px] pointer-events-none'}
          src={sunIcon}
          alt={''}
          draggable={false}
        />
      </button>
      <button className={'theme-mode__button'}>
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
