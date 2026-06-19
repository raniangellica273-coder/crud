import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

function Home() {
    const [data, setData] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('http://localhost:3000/users') 
        .then(res => setData(res.data))
        .catch(err => console.log(err));
    }, [])

    const handleDelete = (id) => {
    const confirm = window.confirm("Would you like to Delete?")
    if(confirm) {
        axios.delete(`http://localhost:3000/users/${id}`)
        .then(res => {
            location.reload();
    }).catch(err => {
        console.log(err)
    })
  }
}

  return (
  <div className="min-h-screen bg-slate-100 flex justify-center items-center p-6">
    <div className="w-full max-w-6xl bg-white rounded-2xl shadow-lg p-8">

      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">
            Users Management
          </h1>
          <p className="text-slate-500 mt-1">
            Manage user information easily
          </p>
        </div>

        <Link
          to="/create"
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-lg transition"
        >
          + Add User
        </Link>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b bg-slate-50">
              <th className="text-left p-4 font-semibold">ID</th>
              <th className="text-left p-4 font-semibold">Name</th>
              <th className="text-left p-4 font-semibold">Email</th>
              <th className="text-left p-4 font-semibold">Phone</th>
              <th className="text-center p-4 font-semibold">Action</th>
            </tr>
          </thead>

          <tbody>
            {data.map((d) => (
              <tr
                key={d.id}
                className="border-b hover:bg-slate-50 transition"
              >
                <td className="p-4 text-slate-600">{d.id}</td>
                <td className="p-4 font-medium">{d.name}</td>
                <td className="p-4 text-slate-600">{d.email}</td>
                <td className="p-4 text-slate-600">{d.phone}</td>

                <td className="p-4">
                  <div className="flex justify-center gap-2">
                    <Link
                      to={`/read/${d.id}`}
                      className="bg-sky-500 hover:bg-sky-600 text-white px-3 py-1 rounded"
                    >
                      View
                    </Link>

                    <Link
                      to={`/update/${d.id}`}
                      className="bg-amber-500 hover:bg-amber-600 text-white px-3 py-1 rounded"
                    >
                      Edit
                    </Link>

                    <button
                      onClick={() => handleDelete(d.id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
)
}

export default Home
