import React from 'react'
import { useHistory } from 'react-router-dom'

export default function Home() {
  const history = useHistory()
  console.log(history)

  const routeToShop = () => {
    console.log('Submitting...')
    history.push('/item-list')
    // history.goBack()
  }

  return (
    <div className='home-wrapper'>
      <img
        className='home-image'
        src='https://source.unsplash.com/F6-U5fGAOik'
        alt=''
      />
      <button
        onClick={routeToShop}
        className='md-button shop-button'
      >
        Shop now!
      </button>
    </div>
  )
}
