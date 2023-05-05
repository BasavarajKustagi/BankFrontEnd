import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
const Accounts = () => {
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
    const deleteAcccounts = async (accnum) => {
      let resp = await axios
        .delete(`http://localhost:8080/accapp/accounts/delete/${accnum}`)
        .catch((err) => {
          alert('Some error occurred while deleting');
          return;
        });
      console.log(resp.data);
      // Remove the deleted bank from the list of banks
      setAccount(Account.filter((Account) => Account.accountNum !== accnum));
    };
    const AccountRows=Account.map((acc,index)=>{
        return(
            <tr>
                <td>{acc.accountNum}</td>
                <td>{acc.balance}</td>
               
               <td> <button className="btn btn-danger" onClick={() => deleteAcccounts(acc.accountNum)}>
            Delete
          </button></td>
            </tr>
        )
    },[])
    useEffect(()=>{
getAllAcccounts();
    },[])
  return (
    <>
    <h1>Account Lists</h1>
    <br/>
    <table className="table">
  <thead>
    <tr>
      <th scope="col">Account Number</th>
      <th scope="col">Balance</th>
      
      <th scope="col">Delete</th>

      
    </tr>
  </thead>
  <tbody>
    {AccountRows }
  </tbody>
</table></>)
}

export default Accounts