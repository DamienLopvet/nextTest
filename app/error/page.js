"use client"
import { useState } from "react"

const page = () => {
const [session, setSession] = useState('yes')

    if(!session) throw new Error('error customized by Damien')
  return (
    <div className="p-4">
      <div className="">page is ok for Now but if you
      
      </div>
        <button className="border p-1"
        onClick={() => setSession(null)}
        >click here </button><span>&nbsp; that will throw an error and fall on the error.js file </span>
    </div>
      )
}

export default page