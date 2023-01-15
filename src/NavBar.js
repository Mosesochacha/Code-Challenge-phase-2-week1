import React from "react";


export default function NavBar(){
  return(
    
    <div className="Navbar">
      <h2>Bank of Flatiron </h2>
      <nav className="Nav">
          <a className="Home" href="/home">Home</a>
          <a  className="Transactions" href="/addingForm">Add Transactions</a>
         <input className="Input"
          type="text"
          placeholder = "enter the decription"
         />
         <button className="Btn">Search</button>
      </nav>
      
    </div>
  )
}