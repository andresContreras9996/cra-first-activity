import React from 'react';
import './avatar.styles.css'
const urlImage = 'https://image.freepik.com/vector-gratis/avatar-personaje-empresario-aislado_24877-60111.jpg';

export const Avatar = () => {
  return (
    <div className='avatar-container'>
      <img src={urlImage} alt='avatar'></img>
    </div>
  )
}
