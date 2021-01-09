import React, { useEffect, useState } from 'react';
// hook from redux to get actions
import { useDispatch } from 'react-redux';

import { findAll } from '../actions/posts'
import Posts from './Posts/Posts'

const Home = () => {
  const [postId, setPostId] = useState(0);
  const dispatch = useDispatch();
  
  // successful dispatch
  useEffect(() => {
    dispatch(findAll());
  }, [postId, dispatch]);

  return (
      <div>
          <h1 className="title">Welcome to Petflix</h1>
          <div className="gallery">
            <Posts setPostId={setPostId} />
          </div>
      </div>
  );
};

export default Home;


//Currently working out of Homepage to see what I'm doing easier since auth seems to be broken again
//Following code will be going into PROFILE.js later

// const Home = () => {
//   return (
//     <div class="userprofile">
//         <div class="aboutuser">
//           {/* User's Image code will go here - User image upload form -LAM*/}
//           <button>Update</button>
//             <h3>
//                 <strong>Current User's Profile</strong>
//             </h3>
//             <p>
//               Text about user will appear here.
//             </p>
//         </div>
//         <div class="userpets">
//           {/* Pet's Image and button to profile for each pet's profile */}
//           <button>Pet's Profile</button>
//         </div>
//         <div class="newpet">
//           {/* New Pet form -LAM */}
//           <button>Add New Pet</button>
//         </div>
//     </div>
//   )
// }

// export default Home;