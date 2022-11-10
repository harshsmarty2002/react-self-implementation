import { useEffect, useState } from 'react';
import './empform.css';
// class Post
// {
//     constructor(id,name,designation,doa,salary,mobile,photo)
//     {
//         this.id=id;
//         this.name=name;
//         this.designation=designation;
//         this.doa=doa;
//         this.salary=salary;
//         this.mobile=mobile;
//         this.photo=photo;
//     }

// }
function Empform() {
    let [all, setAll] = useState([]);
    let [id, setId] = useState("");
    let [name, setName] = useState("");
    let [designation, setDesignation] = useState("");
    let [salary, setSalary] = useState("");
    let [doa, setDoa] = useState("");
    let [mobile, setMobile] = useState("");
    let [photo, setPhoto] = useState("");

    function doClear() {
        setId("");
        setName("");
        setDesignation("");
        setSalary("");
        setDoa("");
        setMobile("");
        setPhoto("");

    }

    function doSearch() {
        fetch(`https://api.webroot.net.in/employees.php?eid= ${id}`).then((response) => response.json()).then(result => {
            if (result.status == "Empty") {

                setName("");
                setDesignation("");
                setSalary("");
                setDoa("");
                setMobile("");
                setPhoto("");
                alert("Record is not available");

            }
            else {


                setName(result.name);
                setDesignation(result.designation);
                setSalary(result.salary);
                setDoa(result.doa);
                setMobile(result.mobile);
                setPhoto(result.photo);

            }

        });

    }
    function doDelete() {
        let http = { method: 'POST' }
        fetch("https://api.webroot.net.in/employees.php?opr=D&eid=" + id, http).then((response) => response.json()).then(result => {
            if (result.status == 'OK') {
                alert("Record Deleted Successfully");
                setId("");
                setName("");
                setDesignation("");
                setSalary("");
                setDoa("");
                setMobile("");
                setPhoto("");

            }

        });
    }
    function doPost() {
        let obj = { id, name, designation, salary, doa, mobile, photo };
        let jsn = JSON.stringify(obj);
        let http = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: jsn
        };

        console.log(id);
        console.log(jsn);

        fetch("https://api.webroot.net.in/employees.php?opr=U&eid=" + id, http).then((response) => response.json()).then(result => {
            console.log(result);
            if (result.status == 'OK') {
                alert('Data Post Successfully');
                setId("");
                setName("");
                setDesignation("");
                setSalary("");
                setDoa("");
                setMobile("");
                setPhoto("");
            }
            else {
                alert('Data Not Updated');
            }


        });
    }

    function doall() {

        fetch("https://api.webroot.net.in/employees.php").then((response) => response.json()).then(result => {


            setAll(result);

        });
    }


    function doSave() {
        let obj = { id, name, designation, salary, doa, mobile, photo };
        let str = JSON.stringify(obj);
        let http = { method: 'POST', body: str };
        console.log(http);
        fetch("https://api.webroot.net.in/employees.php", http).then((response) => response.json()).then(result => {
            console.log(result);
            if (result.status == "OK") {
                alert("Data save Successfully");
            }
            else {
                alert("Data Not save ");
            }

        });

    }

    return (

        <div className='container'>
        <div className='row'>


            <div className='form-group col-lg-6' id="tab">

                
                    <div class="main">
                       <div id="dd">
                       <input type="button" onClick={doSearch} className='btn btn-success' value="Search"></input>
                        <input type="button" onClick={doPost} className='btn btn-warning' value="Update"></input>
                        <input type="button" onClick={doDelete} className='btn btn-danger' value="Delete"></input>
                        <input type="button" onClick={doClear} className='btn btn-warning' value="Clear"></input>
                        <input type="button" onClick={doSave} className='btn btn-primary' value="Save"></input>

                        <input type="button" className='btn btn-danger' onClick={doall} value="Show all" />
                       </div>

                    


                    <label>Employee Id:-</label>
                    <input type="text" value={id} onChange={(event) => setId(event.target.value)} className='form-control' />


                    <label>Name:-</label>
                    <input type="text" value={name} onChange={(event) => setName(event.target.value)} className='form-control' />

                    <label>designation:-</label>
                    <input type="text" value={designation} onChange={(event) => setDesignation(event.target.value)} className='form-control' />

                    <label>Salary:-</label>
                    <input type="text" value={salary} onChange={(event) => setSalary(event.target.value)} className='form-control' />

                    <label>DOA:-</label>
                    <input type="text" value={doa} onChange={(event) => setDoa(event.target.value)} className='form-control' />

                    <label>Mobile:-</label>
                    <input type="text" value={mobile} onChange={(event) => setMobile(event.target.value)} className='form-control' />

                    <label>Photo:-</label>

                    <input type="text" value={photo} onChange={(event) => setPhoto(event.target.value)} className='form-control' />
                    </div>

                
                


            </div>

            <div className='form-group col-lg-6' id="two" >
                <div id="one">
                    <table className='table table-hover table-border table-responsive '>
                        <tbody>
                            <tr>
                                <td colSpan={7} ><h4>Table of All Details</h4></td>
                            </tr>
                            <tr className='table-dark'>

                                <th>Id no</th>
                                <th>Name</th>
                                <th>Designation</th>
                                <th>DOA</th>
                                <th>salary</th>
                                <th>Mobile</th>
                                <th>Photo URL</th>
                            </tr>
                            {all.map((r) =>
                                <tr>
                                    <td>
                                        {r.eid}
                                    </td>
                                    <td>{r.name}</td>
                                    <td>{r.designation}</td>
                                    <td>{r.doa}</td>
                                    <td>{r.salary}</td>
                                    <td>{r.mobile}</td>
                                    <td>{r.photo}</td>
                                </tr>)}

                        </tbody>

                    </table>
                </div>


            </div>
        </div>
        </div>







    );
}
export default Empform;