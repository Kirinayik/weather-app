import React from 'react'
import {useGeoLocation} from '../../../hooks/useGeoLocation'
import {useAppDispatch} from '../../../store'
import {getWeatherFetch} from '../../../store/weather/weatherState'

const SearchLocationButton = ({
  setInput,
}: {
  setInput: React.Dispatch<React.SetStateAction<string>>
}) => {
  const dispatch = useAppDispatch()
  const { findGeoLocation, isAccepted } = useGeoLocation()

  const handleFindGeoLocation = async () => {
    if (isAccepted) {
      findGeoLocation()
    } else {
      dispatch(getWeatherFetch())
      setInput('')
    }
  }

  return (
    <button
      onClick={handleFindGeoLocation}
      className={'absolute right-0 t-0 w-[40px] h-[50px]'}
    >
      <div className={'flex items-center justify-center'}>
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      </div>
    </button>
  )
}

export default SearchLocationButton
