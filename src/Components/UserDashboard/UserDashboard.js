import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import NavigationBars from '../Navigation/NavigationBars'
const UserDashboard = () => {
    const [Account,setAccount]=useState([])
    const getAllAcccounts=async (e)=> {
      // e.preventDefault();
        let resp=await axios.get(`http://localhost:8080/accapp/get`).catch(err=>{
            alert("Some error is there")
            return
        })
        console.log(resp.data);
        setAccount(resp.data);
    }
    
    const AccountRows=Account.map((acc,index)=>{
        return(
            <tr>
                <td>{acc.accountNum}</td>
                <td>{acc.balance}</td>
               
                
            </tr>
        )
    },[])
    useEffect(()=>{
getAllAcccounts();
    },[])
  return (
    <>
    <NavigationBars/>
    <table className="table">
  <thead>
    <tr>
      <th scope="col">Account Number</th>
      <th scope="col">Balance</th>
      
      

      
    </tr>
  </thead>
  <tbody>
    {AccountRows }
  </tbody>
</table></>)
}

export default UserDashboard