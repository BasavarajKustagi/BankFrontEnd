import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'

const Passbook = () => {
    const [transact,settransact]=useState([])
    const getAllTransactions=async (e)=> {
      // e.preventDefault();
        let resp=await axios.get(`http://localhost:8080/apt/get`).catch(err=>{
            alert("Some error is there")
            return
        })
        console.log(resp.data);
        settransact(resp.data);
    }
    
    const TransactionRows=transact.map((tra,index)=>{
        return(
            <tr>
                <td>{tra.transactionId}</td>
                <td>{tra.amount}</td>
                <td>{tra.transactionDate}</td>
                <td>{tra.senderAccNum}</td>
                <td>{tra.receiverAccNum}</td>
               
                
            </tr>
        )
    },[])
    useEffect(()=>{
getAllTransactions();
    },[])
  return (
    <>
    
    <table className="table">
  <thead>
    <tr>
      <th scope="col">Transaction_id</th>
      <th scope="col">Amount</th>
      <th scope="col">Transaction_Date</th>
      <th scope="col">sen_acc_num</th>
      <th scope="col">rec_acc_num</th>
      
      
      
      

      
    </tr>
  </thead>
  <tbody>
    {TransactionRows}
  </tbody>
</table></>)
}

export default Passbook