import React from 'react'
import Button from './button'

export default function navbar() {
  return (
    <nav className='navbar' style={{display: 'flex-inline',  backgroundImage:'./assets/images'}}>
        <h1>sunnyside</h1>
        <Button />
    </nav>
  )
}
