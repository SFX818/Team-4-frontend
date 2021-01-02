import React from 'react'
import { getCurrentUser } from '../services/auth.service'

// landing page for more info about Petflix// renders all the posts on a timeline
const Landing = () => {
    const currentUser = getCurrentUser()
    return (
        <div className="container">
            <header className="jumbotron">
                <h3>
                    <strong>Welcome back, {currentUser.username}</strong>
                </h3>
            </header>
        </div>
    )
};
  
export default Landing;


