import React from 'react'

function Logout() {
  localStorage.setItem("wallacc" , "");
  return (
    <div>
      Logout!
    </div>
  )
}

export default Logout

// May only need this for the logout button in the navbar