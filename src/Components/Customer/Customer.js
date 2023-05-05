import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
// import './Customer.css'
import { Link } from 'react-router-dom'
const Customer = () => {
    const [custom,setCustom]=useState([])
    const getAllCustomers=async (e)=> {
      // e.preventDefault();
        let resp=await axios.get(`http://localhost:8080/apps/get`).catch(err=>{
            alert("Some error is there")
            return
        })
        console.log(resp.data);
        setCustom(resp.data);
    }
    const deleteCustomers = async (customId) => {
      let resp = await axios
        .delete(`http://localhost:8080/apps/customers/delete/${customId}`)
        .catch((err) => {
          alert('Some error occurred while deleting');
          return;
        });
      console.log(resp.data);
      // Remove the deleted bank from the list of banks
      setCustom(custom.filter((custom) => custom.customerId !== customId));
    };
    const CustomerRows=custom.map((cust,index)=>{
        return(
            
            <tr>
                <td>{cust.customerId}</td>
                <td>{cust.firstName}</td>
                <td>{cust.lastName}</td>
                <td>{cust.totalBalance}</td>
                <td><button className="btn btn-danger" onClick={() => deleteCustomers(cust.customerId)}>
            Delete
          </button></td>
            </tr>
        )
    },[])
    useEffect(()=>{
getAllCustomers();
    },[])
  return (
    <>
    <h1 >Customer Lists</h1>
    <br/>
    <table className="table">
  <thead>
    <tr>
      <th scope="col">customer id</th>
      <th scope="col">first name</th>
      <th scope="col">last name</th>
      <th scope="col">balance</th>
      <th scope="col">Delete</th>

      
    </tr>
  </thead>
  <tbody>
    {CustomerRows }
  </tbody>
</table>
<Link to="/addCustomers">
        <button className="btn btn-primary">Add Customer</button>
      </Link>
</>)
}

export default Customer