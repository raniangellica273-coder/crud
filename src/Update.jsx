import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

function Update() {

  const [data, setData] = useState([])
    const {id} = useParams();
     const [values, setValues] = useState({
            name: '',
            email: '',
            phone: ''
        })
      const navigate = useNavigate()
    useEffect(() => {
        axios.get('http://localhost:3000/users/'+ id) 
        .then(res => {
          setValues(res.data)
        })
        .catch(err => console.log(err));
    }, [])

    const handleUpdate = (event) => {
      event.preventDefault();
      axios.put('http://localhost:3000/users/'+ id, values) 
        .then(res => {
            console.log(res.data);
            navigate('/')
        })
        .catch(err => console.log(err));
    }

  return (
       <div className='d-flex vh-100 justify-content-center align-items-center bg-light'>
        <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
            <h1>Update a User</h1>
            <form onSubmit={handleUpdate}>
                <div className='mb-3 row align-items-center'>
                    <label htmlFor="name" className='col-sm-2 col-form-label text-start'>Name</label>
                    <input type="text" name="name" className='form-control' placeholder='Enter Name'
                    value={values.name}
                    onChange={e => setValues({...values, name: e.target.value})}/>
                </div>
                 <div className='mb-3 row align-items-center'>
                    <label htmlFor="name" className='col-sm-3 col-form-label text-start'>Email</label>
                    <input type="text" name="name" className='form-control' placeholder='Enter Email' 
                    value={values.email}
                    onChange={e => setValues({...values, email: e.target.value})}/>
                </div>
                 <div className='mb-3 row align-items-center'>
                    <label htmlFor="name" className='col-sm-3 col-form-label text-start'>Phone</label>
                    <input type="text" name="name" className='form-control' placeholder='Enter Phone' 
                    value={values.phone}
                    onChange={e => setValues({...values, phone: e.target.value})}/>
                </div>
                <button className='bg-amber-500 hover:bg-amber-600 text-white px-3 py-1 rounded btn-success'>Update</button>
                <Link to="/" className='ms-3 border-2 px-7 py-2 rounded border-solid'>Back</Link>
            </form>
        </div>
      
    </div>
  )
}

export default Update
