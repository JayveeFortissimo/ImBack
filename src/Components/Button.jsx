import React from 'react'

const Button = ({children,...prop}) => {
  return (
    <div {...prop}>{children}</div>
  )
}

export default Button