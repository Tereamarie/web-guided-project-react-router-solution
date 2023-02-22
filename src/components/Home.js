// We'll need React Router's own version of the History API
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate()

  // 👉 STEP 5 - Build a click handler that will imperatively navigate us to /items-list
  /* INSTRUCTOR: you could explain this is "imperative", vs. the "declarative" Link */
  const routeToShop = () => {
    console.log('Submitting...')
    navigate('items-list')
  }

  return (
    <div className='home-wrapper'>
      <img
        className='home-image'
        src='https://source.unsplash.com/F6-U5fGAOik'
        alt='store front'
      />
      <button onClick={routeToShop} className='md-button shop-button'>
        Shop now!
      </button>
    </div>
  )
}
