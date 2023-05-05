import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Addbanks = () => {
  const navigateObject=new useNavigate();

  // const [id,setId]=useState([""])
  const[bank,setBank]=useState("")
  const[abb,setAbb]=useState("")

  const handleAddUser=async(e)=>{
    e.preventDefault();
    console.log(abb);
    console.log(bank);
    if ( bank == "" || abb=="") {
      alert("All fields are required")
      
      return
  }
  let resp= await axios.post(`http://localhost:8080/app/saves`,{
    "abbreviation":abb,
    "fullName":bank
  }).catch((err)=>{
    alert("some error while adding")
    
    return
  })
}

  return (
    <>
    <form>
                {/* <div className="mb-3">
                    <label className="form-label">Id</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" value={id}
                        onChange={
                            (e) => setId(e.target.value)
                        } />
                </div> */}
                <div className="mb-3">
                    <label className="form-label">Bank name</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" value={bank}
                        onChange={
                            (e) => setBank(e.target.value)
                        } />
                </div>
                <div className="mb-3">
                    <label className="form-label">Abbrevation</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" value={abb}
                        onChange={
                            (e) => setAbb(e.target.value)
                        } />
                </div>
                <button className="btn btn-primary" onClick={handleAddUser}>Submit</button>
                </form>
    </>
  )
}

export default Addbanks