import React, { useEffect, useState } from 'react'
import Layout from '../../components/Dashboard/DashboardLayout'
import { IoSearchOutline } from 'react-icons/io5'
import axios from 'axios'
import { useRouter } from 'next/router'
import { userProtect } from '../../hooks/userProtect'

export async function getServerSideProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const repo = await res.json()
  return { props: { repo } }
}


const dashboarPage = ({ repo }) => {



  const [isData, setIsData] = useState(repo);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchData, setSearchData] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;


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


  // Pagination

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = isData.slice(startIndex, startIndex + itemsPerPage)
  const totalPages = Math.ceil(isData.length / itemsPerPage)

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
                  currentItems.map(data => (
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
          <div className='flex  justify-center items-center gap-3 my-10'>
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className='btn'
            >Prev</button>
            {[...Array(totalPages)].map((_, i) => (
              <button
                onClick={() => setCurrentPage(i + 1)}
                className={`btn ${currentPage === i + 1 ? "bg-[#07ab4e] text-white" : ""}`}>
                {i + 1}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage(next => Math.min(next + 1, totalPages))}
              disabled={currentPage === totalPages}
              className='btn'
            >Next</button>
          </div>

        </div>
      </div>
    </Layout>
  )
}

export default dashboarPage