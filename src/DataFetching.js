import { useState  ,useEffect} from 'react';
import axios from 'axios';
import NavBar from './NavBar';
const API = " http://localhost:3000/transactions"

 export default function DataFetching(){
    const [transactions , setTransanction] = useState([])

    useEffect(()=>{
        axios.get(API)
        .then((resp)=>{
            console.log(resp);
            setTransanction(resp.data)
        })
    },[])

    const handleSearch = ()=>{

    }
    return(
        <div className='BodyForm'>
            <NavBar handleSearch={handleSearch}/>
            <table>
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