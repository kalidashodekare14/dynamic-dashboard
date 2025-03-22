"use client"
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { IoSearchOutline } from "react-icons/io5";




const DashboardPage = ({ repo }) => {

 
  return (
    <div>
      <div className='p-3 flex items-center'>
        <input
          onChange={(e) => setSearchTerm(e.target.value)}
          className='input focus:outline-0'
          placeholder='Search...'
          type="text" />
        <button>
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
  )
}

export default DashboardPage