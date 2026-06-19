import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';

function Create() {
    const [values, setValues] = useState({
        name: '',
        email: '',
        phone: ''
    })

    const navigate = useNavigate();


    const handleSubmit = (event) => {
        event.preventDefault(); 
        axios.post('http://localhost:3000/users', values) 
        .then(res => {
            console.log(res.data);
            navigate('/')
        })
        .catch(err => console.log(err));
    }

  return (
    <div className='d-flex vh-100 justify-content-center align-items-center bg-light'>
        <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
            <h1>Add a User</h1>
            <form onSubmit={handleSubmit}>
                <div className='mb-3 row align-items-center'>
                    <label htmlFor="name" className='col-sm-2 col-form-label text-start'>Name</label>
                    <input type="text" name="name" className='form-control' placeholder='Enter Name'
                    onChange={e => setValues({...values, name: e.target.value})}/>
                </div>
                 <div className='mb-3 row align-items-center'>
                    <label htmlFor="name" className='col-sm-3 col-form-label text-start'>Email</label>
                    <input type="text" name="name" className='form-control' placeholder='Enter Email' 
                    onChange={e => setValues({...values, email: e.target.value})}/>
                </div>
                 <div className='mb-3 row align-items-center'>
                    <label htmlFor="name" className='col-sm-3 col-form-label text-start'>Phone</label>
                    <input type="text" name="name" className='form-control' placeholder='Enter Phone' 
                    onChange={e => setValues({...values, phone: e.target.value})}/>
                </div>
                <button className='mb-3 btn-success bg-amber-500 hover:bg-amber-600 text-white px-3 py-1 rounded'>Submit</button>
                <Link to="/" className='btn-primary bg-sky-500 hover:bg-sky-600 text-white px-3 py-1 rounded  ms-3'>Back</Link>
            </form>
        </div>
      
    </div>
  )
}

export default Create
