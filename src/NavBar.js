import React, { useState } from "react";

export default function NavBar({handleSearch}){
  const [values, setValues] = useState("")

  function handleChange(value){
    setValues(value)
    console.log(value);
    
  }
  return(
    
    <div className="Navbar">
      <h2 className="Head">Bank of Flatiron </h2>
      <nav className="Nav">
          <a className="Home" href="/home">Home</a>
          <a  className="Transactions" href="/addingForm">Add Transactions</a>
         <input className="Input"
           
          type="text"
          placeholder = "enter the decription"
          onChange={(e)=>{

             handleChange(e.target.value)

          }}
          value={values}
         />
         <button onClick={()=>{handleSearch(values)}} className="Btn">
          Search
         </button>
      </nav>
      
    </div>
  )
}