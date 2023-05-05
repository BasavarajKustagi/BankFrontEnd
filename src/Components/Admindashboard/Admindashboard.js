import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './Admindashboard.css';
import NavigationBar from '../Navigation/NavigationBar';
import Addbanks from '../AddBanks/Addbanks';
import { Link } from 'react-router-dom';

const Admindashboard = () => {
    const [bank,setBanks]=useState([])
    const getAllBanks=async (e)=> {
      // e.preventDefault();
        let resp=await axios.get(`http://localhost:8080/app/get`).catch(err=>{
            alert("Some error is there")
            return
        })
        console.log(resp.data);
        setBanks(resp.data);
    }
    const deleteBank = async (bankId) => {
      let resp = await axios
        .delete(`http://localhost:8080/app/banks/delete/${bankId}`)
        .catch((err) => {
          alert('Some error occurred while deleting');
          return;
        });
      // console.log(resp.data);
      // Remove the deleted bank from the list of banks
      setBanks(bank.filter((bank) => bank.bank_id !== bankId));
    };
    const bankRows=bank.map((bank,index)=>{
        return(
            <tr>
                <td>{bank.bank_id}</td>
                <td>{bank.fullName}</td>
                <td>{bank.abbreviation}</td>
                <td><button className="btn btn-danger" onClick={() => deleteBank(bank.bank_id)}>
            Delete
          </button></td>
            </tr>
        )
    },[])
    useEffect(()=>{
getAllBanks();
    },[])
  return (
    <>
    <NavigationBar/>
    
    <br/>
    <br/>
    <table className="table">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">full name</th>
      <th scope="col">abbrevation</th>
      <th scope="col">delete</th>

      
    </tr>
  </thead>
  <tbody>
    {bankRows}
  </tbody>
</table>
<br/>
<Link to="/addBanks">
        <button className="btn btn-primary">Add Bank</button>
      </Link>
</>
  )
}

export default Admindashboard