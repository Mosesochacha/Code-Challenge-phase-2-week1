import React,{useState} from "react";


export default function AddingForm(){
     const [date , setDate] = useState([])
     const [amount , setAmount] = useState([])
     const [description , setDesciption] = useState([])
     const [category , setCategory] = useState([])
     
    const handleSubmit = (e)=>{
        e.preventDefault()
        const transaction =  { date , amount , description,category }
        console.log(transaction);

    }
      
    return(
        <div>
            <h2>Add transaction</h2>
            <form onSubmit={handleSubmit }>
                <label>Date</label><br/>
                <input
                  type="date"
                  required
                  placeholder="select the date of transaction"
                  value={date}
                  onChange = {(e)=> setDate(e.target.value)}
                /> <br/>
                <label>Category</label><br/>
                <input
                  type="text"
                  required
                  placeholder="enter the category of your transaction"
                  value={category}
                  onChange = {(e)=> setCategory(e.target.value)}
                /> <br/>
                <label>Description</label><br/>
                <input
                  type="text"
                  required
                  value={description}
                  onChange = {(e)=> setDesciption(e.target.value)}
                  placeholder="Enter the description of your transactions"
                /> <br/>
                <label>Amount</label><br/>
                <input
                  type="number"
                  required
                  value={amount}
                  onChange = {(e)=> setAmount(e.target.value)}
                  placeholder="Enter A mount"
                /> <br/>
                <button>Add transaction</button>
                
            </form>
          
            
        </div>
    )
}