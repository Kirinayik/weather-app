import React from 'react'

const Snackbar = ({
  isError,
  message,
}: {
  isError: boolean
  message: string
}) => {
  return (
    <div id={'snackbar'} className={isError ? 'snackbar-show' : undefined}>
      {message}
    </div>
  )
}

export default Snackbar
