import React from 'react'
import {
  Route,
  NavLink,
  Switch,
  useParams,
  useRouteMatch
} from 'react-router-dom'
import ItemDescription from './ItemDescription'
import ItemShipping from './ItemShipping'

export default function Item(props) {
  // we use this hook to grab information about the way React Router matched this route.
  const { path, url } = useRouteMatch()
  // we use this hook to grab they dynamic parts of the path (:itemID).
  const { itemID } = useParams()
  const { items } = props

  // this guards against a crash (the data is not available instantaneously)
  if (!items.length) return 'Getting your item...'

  const item = items.find(item => item.id == itemID)

  return (
    <div className='item-wrapper'>
      <div className='item-header'>
        <div className='image-wrapper'>
          <img src={item.imageUrl} alt={item.name} />
        </div>
        <div className='item-title-wrapper'>
          <h2>{item.name}</h2>
          <h4>${item.price}</h4>
        </div>
      </div>
      <nav className='item-sub-nav'>
        {/* <Link to={`/item-list/${item.id}`}>The story</Link>
        <Link to={`/item-list/${item.id}/shipping`}>Shipping</Link> */}
        <NavLink to={`${url}/description`}>Description</NavLink>
        <NavLink to={`${url}/shipping`}>Shipping</NavLink>
      </nav>
      <Switch>
        <Route path={`${path}/shipping`}>
          <ItemShipping item={item} />
        </Route>
        <Route path={`${path}/description`}>
          <ItemDescription item={item} />
        </Route>
      </Switch>
    </div>
  )
}
