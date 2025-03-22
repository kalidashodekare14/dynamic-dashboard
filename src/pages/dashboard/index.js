import React, { useEffect, useState } from 'react'
import Layout from '../../components/Dashboard/DashboardLayout'
import { IoSearchOutline } from 'react-icons/io5'
import axios from 'axios'




const dashboarPage = () => {

  const [isData, setIsData] = useState([])
  console.log('checking data', isData)

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        console.log(res.data)
        setIsData(res.data)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])


  return (
    <Layout>
      <div>
        <div className='p-3 flex items-center'>
          <input className='input focus:outline-0' placeholder='Search...' name='search' type="text" />
          <button type='submit'>
            <IoSearchOutline className='text-2xl cursor-pointer' />
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className='bg-[#bbb]'>
              <tr>
                <th>User Id</th>
                <th>Title</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {
                isData.length > 0 ? (
                  isData.map(data => (
                    <tr>
                      <th>{data?.userId}</th>
                      <td>{data?.title}</td>
                      <td>{data?.body}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <th>NO Data</th>
                  </tr>
                )
              }

            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  )
}

export default dashboarPage