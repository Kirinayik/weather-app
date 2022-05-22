import React, {useEffect, useState} from 'react'
import SearchButton from './SearchButton'
import SearchLocationButton from './SearchLocationButton'
import Snackbar from '../../common/Snackbar'
import {useAppDispatch, useAppSelector} from '../../../store'
import {getWeatherFailure, getWeatherFetch,} from '../../../store/weather/weatherState'

const Search = () => {
  const [errorInput, setErrorInput] = useState(false)
  const [input, setInput] = useState('')
  const dispatch = useAppDispatch()
  const { isError } = useAppSelector((state) => state.weather)
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInput(e.target.value)
  const handleSearch = async () => {
    if (input.trim().length > 0) {
      dispatch(getWeatherFetch(`q=${input}`))
      setInput('')
    } else {
      dispatch(getWeatherFailure(true))
    }
  }
  const handleEnterPress = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      await handleSearch()
    }
  }

  useEffect(() => {
    if (isError) {
      setErrorInput(true)
      setTimeout(() => {
        setErrorInput(false)
        dispatch(getWeatherFailure(false))
      }, 3000)
    }
  }, [isError])

  return (
    <>
      <div className={'dark:text-white relative text-main-blue'}>
        <label>
          <input
            placeholder={'Search...'}
            onKeyPress={handleEnterPress}
            onChange={handleInput}
            value={input}
            className={'search dark:bg-secondary-black'}
          />
        </label>
        <SearchButton handleSearch={handleSearch} />
        <SearchLocationButton setInput={setInput} />
      </div>
      <Snackbar isError={errorInput} message={'Invalid input value'} />
    </>
  )
}

export default Search
