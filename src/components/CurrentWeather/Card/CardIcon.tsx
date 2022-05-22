import React from 'react'

const CardIcon = ({ icon }: { icon: string | undefined }) => {
  return (
    <div>
      {icon && (
        <img
          src={`${process.env.WEATHER_ICON}${icon.replace(
            /[dn]/g,
            ''
          )}d@2x.png`}
          alt={''}
          draggable={false}
        />
      )}
    </div>
  )
}

export default CardIcon
