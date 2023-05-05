import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Addcustomer = () =>{
    const navigateObject=new useNavigate();
  
    // const [id,setId]=useState([""])
    const[fname,setFname]=useState([""])
    const[lname,setLname]=useState([""])
    const[balanc,setBalanc]=useState([""])
  
    const handleAddUser=async(e)=>{
      if ( fname == "" || lname==""|| balanc=="") {
        alert("All fields are required")
        
        return
    }
    let resp= await axios.post(`http://localhost:8080/apps/save`,{
      "firstName":fname,
      "lastName":lname,
      "totalBalance":balanc
    }).catch((err)=>{
      alert("some error while adding")
      
      return
    })
  }
  
    return (
      <>
      <form>
                  <div className="mb-3">
                      <label className="form-label">First Name</label>
                      <input type="text" className="form-control" id="exampleInputEmail1" value={fname}
                          onChange={
                              (e) => setFname(e.target.value)
                          } />
                  </div>
                  <div className="mb-3">
                      <label className="form-label">Last Name</label>
                      <input type="text" className="form-control" id="exampleInputEmail1" value={lname}
                          onChange={
                              (e) => setLname(e.target.value)
                          } />
                  </div>
                  <div className="mb-3">
                      <label className="form-label">Total Balance</label>
                      <input type="text" className="form-control" id="exampleInputEmail1" value={balanc}
                          onChange={
                              (e) => setBalanc(e.target.value)
                          } />
                  </div>
                  <button className="btn btn-primary" onClick={handleAddUser}>Submit</button>
                  </form>
      </>
    )
  }
export default Addcustomer