import { useState  ,useEffect} from 'react';
import axios from 'axios';
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
    return(
        <div>
            
            <table>
              <thead>
                <tr>
                <th>DATE</th>
                <th>DESCRIPTION</th>
                <th>CATEGORY</th>
                <th>AMOUNT</th> 
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
                        </tr>
                    
                    )
                }
              </tbody>

            </table>
            {/* <table>
                
                <th>DATE</th>
                <th>DESCRIPTION</th>
                <th>CATEGORY</th>
                <th>AMOUNT</th>
                
                {
                 transactions.map(dataObj=>
                    <td key={dataObj.id}>
                        <tr>{dataObj.date}</tr>
                        <tr>{dataObj.description}</tr>
                        <tr>{dataObj.category}</tr>
                        <tr>{dataObj.amount}</tr>
                    </td>
                    )
                }
            </table> */}
        </div>
    )
}