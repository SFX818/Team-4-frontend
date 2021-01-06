import React from 'react'
import { getCurrentUser } from '../services/auth.service'



const Home = () => {
  const currentUser = getCurrentUser()

  return (
    <div>
      {currentUser && (
        <div className="card" style={{ width: "18rem" }}>
          <img src="images/Tony" class="card-img-top" alt="..."/>
            <div class="card-body">
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
</div>

      )}
    </div>
  )
}
  

export default Home;
