import React from 'react'


const PetProfile = () => {
    return (
      <div class="petpage">
          <div class="aboutpet">
            {/* Pet's Image code will go here */}
              <h3>
                  <strong>Petname's Profile</strong>
              </h3>
              <div class="type">
                  <h4>
                    Breed:
                  </h4>
                  <h4>
                    Species:
                  </h4>
                  <h4>
                    Birthday:
                  </h4>
              </div>
              <div class="aboutpet">
                <p>
                    Text about Pet will appear here.
                </p>
              </div>
          </div>
          <div class="journalentry">
            {/* Pet's Image and button to profile for each pet's profile */}
            <button>Update</button>
            <button>Update</button>
          </div>
          <div class="newentry">
            <button>Add New Pet</button>
          </div>
      </div>
    )
  }


export default PetProfile