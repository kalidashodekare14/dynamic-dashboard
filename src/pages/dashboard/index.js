import React, { useEffect, useState } from 'react'
import Layout from '../../components/Dashboard/DashboardLayout'
import { IoSearchOutline } from 'react-icons/io5'
import axios from 'axios'

export async function getServerSideProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const repo = await res.json()
  return { props: { repo } }
}


const dashboarPage = ({ repo }) => {

  const [isData, setIsData] = useState(repo)
  const [searchTerm, setSearchTerm] = useState("")
  const [searchData, setSearchData] = useState("")

  const handleSearch = () => {
    setSearchData(searchTerm)
  }

  useEffect(() => {
    const search = isData.filter(data =>
      data.title.toLowerCase().includes(searchData.toLowerCase()) ||
      parseInt(data.id) === parseInt(searchData)
    )
    setIsData(search)
  }, [searchData])


  return (
    <Layout>
      <div>
        <div className='p-3 flex items-center'>
          <input onChange={(e) => setSearchTerm(e.target.value)} className='input focus:outline-0' placeholder='Search...' name='search' type="text" />
          <button onClick={handleSearch}>
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