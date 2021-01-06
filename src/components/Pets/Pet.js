import React from 'react'


const PetProfile = () => {
    return (
      <div class="petpage">
          <div class="aboutpet">
            {/* Pet's Image code will go here - Pet image upload form - LAM*/}
            <button>Update</button>
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
            {/* Journal entries (stretch goal) -TREZ */}
            <button>Update</button>
            <button>Delete</button>
          </div>
          <div class="newentry">
              {/* Form to add new journal entry -LAM */}
            <button>Add New Entry</button>
          </div>
          <div class="milestones">
            {/* Milestone timeline (stretch goal) -LAM */}
            <button>Update</button>
            <button>Delete</button>
          </div>
          <div class="newmilestone">
              {/* Form to add milestone =LAM  */}
            <button>Add New Milestone</button>
          </div>
      </div>
    )
  }


export default PetProfile