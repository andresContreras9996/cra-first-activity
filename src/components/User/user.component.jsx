import React, { Children } from 'react'

export const User = ({name,description,age,children}) => {
  return (
    <div>
      {children}
      <h1>My name is: {name}</h1>
      <p>Currently working as: {description}</p>
      <p>My current age is: {age}</p>
    </div>
  )
}
