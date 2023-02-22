import { useState, useEffect } from 'react'
// 👉 STEP 2 - React Router imports (Routes, Route and Link)
import { Routes, Route, Link } from 'react-router-dom'
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
          {/* 👉 STEP 3 - Make Links to navigate us Home (`/`) and Shop (`items-list`) */}
          <Link to='/'>Home</Link>
          <Link to='items-list'>Shop</Link>
        </div>
      </nav>

      {/* 👉 STEP 4 - Build a Switch with a Route for each of the components imported at the top */}
      {/* INSTRUCTOR: start without Switch and using the `exact` prop on the `/` route */}
      <Routes>
        <Route path={'items-list/:itemID/*'} element={<Item items={stock} />} />
        <Route path='/items-list' element={<ItemsList items={stock} />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  )
}
