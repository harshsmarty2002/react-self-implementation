import React from "react";
import { useState } from "react";
const Async=()=>
{
    const [id,setId]=useState("");
    const [name,setName]=useState("");
    const [designation,setDesignation]=useState("");
    const [salary,setSalary]=useState("");
    const [doa,setDoa]=useState("");
    const [mobile,setMobile]=useState("");
    const [photo,setPhoto]=useState("");
    async function doSave()
    const obj={}



    return(

        
        <div className="container">
            <div className="form-group">

<label>Employee Id:-</label>
        <input type="text" value={id} onChange={(event) => setId(event.target.value)} className='form-control' />


        <label>Name:-</label>
        <input type="text" value={name} onChange={(event) => setName(event.target.value)} className='form-control' />

        <label>designation:-</label>
        <input type="text" value={designation} onChange={(event) => setDesignation(event.target.value)} className='form-control' />

        <label>Salary:-</label>
        <input type="text" value={salary} onChange={(event) => setSalary(event.target.value)} className='form-control' />

        <label>DOA:-</label>
        <input type="text" value={doa} onChange={(event) => setDoa(event.target.value)} placeholder="YYYY-MM-DD" className='form-control' />

        <label>Mobile:-</label>
        <input type="text" value={mobile} onChange={(event) => setMobile(event.target.value)} className='form-control' />

        <label>Photo:-</label>

        <input type="text" value={photo} onChange={(event) => setPhoto(event.target.value)} className='form-control' />
        <button className=" form-control btn btn-primary" onClick={doSave}>Save</button>
        </div>



        </div>
    );

}
export default Async;