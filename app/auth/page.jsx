'use client'
import React from 'react'

const signin = () => {

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('submit')
    }

  return (
    // react signin form
    <div>
    
        <h1>Sign In</h1>
        <form className='flex flex-col gap-2 w-1/3 justify-center items-center text-blue-400'
            onSubmit={handleSubmit}
        >
            <input type="email" placeholder="Email" className='text-black' />
            <input type="password" placeholder="Password" className='text-black' />
            <button type="submit">Sign In</button>
        </form>
    </div>
    
  )
}

export default signin