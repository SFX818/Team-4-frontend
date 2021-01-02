import React from 'react'
import { getCurrentUser } from '../services/auth.service'


const Home = () => {
  const currentUser = getCurrentUser()

  return (
    <div>
      {currentUser && (
        <p>yikes</p>
      )}
    </div>
  )
}
  

export default Home;
