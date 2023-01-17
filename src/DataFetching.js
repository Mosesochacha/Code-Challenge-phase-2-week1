// importing component and react nodules
import { useState  ,useEffect} from 'react';
import axios from 'axios';
import NavBar from './NavBar';
const API = "https://testietest.vercel.app/transactions"

// fetchinh data
 export default function DataFetching(){
  // declaring usestate
    const [transactions , setTransanction] = useState([])

    useEffect(()=>{
        axios.get(API)
        .then((resp)=>{
            // setTransanction(resp.data)
           
            sortByCartegory(resp.data)
        })
    },[])
    // sorting data
  function sortByCartegory(data){
    
    
    data.sort((a,b)=>{
        let categoryA = a.category.toLowerCase();
        let categoryB = b.category.toLowerCase()
     if(categoryA < categoryB
     ) {return -1;}
     if(categoryA > categoryB
     ){ return 1;}
     return 0
    })
    setTransanction(data)
  }
    
// adding a handle search
    const handleSearch = (Search)=>{
        console.log(Search);
       let newOutput = transactions.filter((newTransaction)=>{
       return newTransaction.description.toLowerCase().includes(Search.toLowerCase())
        

       })
       setTransanction(newOutput)
    }
    // returning data 
    return(
        <div className='BodyForm'>
            <NavBar handleSearch={handleSearch}/>
            <table className='Table'>
              <thead>
                <tr>
                <th>DATE</th>
                <th>DESCRIPTION</th>
                <th>CATEGORY</th>
                <th>AMOUNT</th> 
                <th>Remove</th>
                </tr>
              </thead>
              <tbody>
              {
                 transactions.map(dataObj=>
                        <tr key={dataObj.id}>
                            <td>{dataObj.date}</td>
                            <td>{dataObj.description}</td>
                            <td>{dataObj.category}</td>
                            <td>Ksh.{dataObj.amount}</td>
                            <td> <button onClick={(e)=>{e.target.parentNode.parentNode.remove()}}>Delete</button> </td>
                        </tr>
                    
                    )
                }
              </tbody>

            </table>
           
        </div>
    )
}