import React from 'react'

export default function ItemShipping(props) {
  const { item } = props

  return (
    <div>
      <p className='item-description'>{item.shipping}</p>
    </div>
  )
}
