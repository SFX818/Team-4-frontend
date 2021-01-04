import React from 'react'
import { getCurrentUser } from '../services/auth.service'

const Profile = () => {
    const currentUser = getCurrentUser()
    console.log(currentUser)
    return (
        <div className="container">
            <header className="jumbotron">
                <h3>
                    <strong>{currentUser.username}</strong>
                </h3>
            </header>
            <p>
                <strong>Token:</strong> {currentUser.accessToken.substring(0, 20)}...{" "}
            </p>
            <p>
                <strong>Id:</strong>{currentUser.id}
            </p>
            <p>
                <strong>Email:</strong>{currentUser.email}
            </p>
            {/* if current user has roles then map through those roles */}
            {currentUser.roles && 
                currentUser.roles.map((roles, index) => <li key={index}>{roles}</li>)}
        </div>
    )
}

//Code that will go in above function

// {/* <div class="userprofile">
// <div class="aboutuser">
//   {/* User's Image code will go here - User image upload form -LAM*/}
//   <button>Update</button>
//     <h3>
//         <strong>Current User's Profile</strong>
//     </h3>
//     <p>
//       Text about user will appear here.
//     </p>
// </div>
// <div class="userpets">
//   {/* Pet's Image and button to profile for each pet's profile */}
//   <button>Pet's Profile</button>
// </div>
// <div class="newpet">
//   {/* New Pet form -LAM */}
//   <button>Add New Pet</button>
// </div>
// </div> */}

export default Profile
