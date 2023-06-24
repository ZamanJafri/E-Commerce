import React from 'react'

const Profile = () => {
  return (
    <>
      <ul className="list-group">
        <li className="list-group-item active" aria-current="true">Profile details</li>
        <li className="list-group-item d-flex justify-content-between">
          <span>
            Name
          </span>
          <span>
            Zaman Ahmad
          </span>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <span>
            Email
          </span>
          <span>
            zamanahmad@gmail.com
          </span>
        </li>
       
      </ul>
    </>
  )
}

export default Profile
