import React, { useState, useEffect } from 'react'
// React Router imports
import { Route, Link, Switch } from 'react-router-dom'
// Components used for the different routes
import Home from './Home'
import ItemsList from './ItemsList'
import Item from './Item'

// Dummy data
import data from '../data'

function fetchStock() {
  // fetchStock simulates getting data through axios.get(<URL>)
  return Promise.resolve({ success: true, data })
}

export default function App(props) {
  const [stock, setStock] = useState([])

  useEffect(() => {
    fetchStock().then(res => setStock(res.data))
  }, [])

  return (
    <div className='App'>
      <nav>
        <h1 className='store-header'>Emily&apos;s Trinkets</h1>
        <div className='nav-links'>
          <Link to='/'>Home</Link>
          <Link to='/item-list'>Shop</Link>
        </div>
      </nav>
      <Switch>
        <Route path={'/item-list/:itemID'}>
          <Item items={stock} />
        </Route>

        <Route path='/item-list'>
          <ItemsList items={stock} />
        </Route>

        <Route path='/'>
          <Home />
        </Route>
      </Switch>

      {/* <Route
        exact
        path='/item-list'
        render={props => (
          <ItemsList
            {...props} // this is the same as below
            // match={props.match}
            // history={props.history}
            // location={props.location}
            items={stock}
          />
        )}
      /> */}
    </div>
  )
}
