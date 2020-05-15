import React from 'react'

export default function ItemDescription(props) {
  const { item } = props

  return (
    <div>
      <p className="item-description">{item.description}</p>
    </div>
  )
}
