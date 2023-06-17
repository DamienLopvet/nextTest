'use client' // Error components must be Client Components
 
import { useEffect } from 'react'
 
export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
    <div className='flex flex-col justify-center items-center'>
      <h2 className='
      text-2xl text-center py-10 text-blue-500 
       '>error file in nested pages</h2>
      <section >
        <h3 className='
        text-2xl py-10 text-blue-500'

        >
          here is the structure of the project:
         
        </h3>
        <ul className='
        text-xl text-blue-500'>
          <li className='
          text-xl text-blue-500'>
          app /error/error.js
          </li>
          <li className='
          text-xl text-blue-500'>
          
          app/error.js   &nbsp; &nbsp;       //this file have to exist at root level

          </li>
        </ul>
      </section>
      <button className='w-fit text-2xl text-center mt-10 text-blue-500 border-white border-2 rounded-lg p-2'
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  )
}