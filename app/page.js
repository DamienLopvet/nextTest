"use client";
import Link from "next/link";
import { useSession, signOut } from 'next-auth/react'

export default function Home() {
  const { data:session, status } = useSession()
  
  return (
    <section>
      <h1 className="text-4xl text-center py-10 text-blue-500">hello world</h1>
      <hr />
      <div className=" text-2xl text-center ">
        <h2 className="text-2xl py-9 text-center text-blue-400">
          In this section we would like to make some test:
        </h2>
        <div className=" border border-white w-fit rounded-xl mx-auto p-4">
          <p className="text-white">first we will test the error.js fallback page</p>
          {/* ERROR.JS */}
          <div className="text-2xl text-center py-10 text-blue-500 ">
            <h3>to test the error page click on the button below:</h3>
            <Link
              href={"/error"}
              className="border rounded  block w-fit mx-auto bg-slate-400 hover:bg-slate-300 transition duration-200 p-1 my-4 "
            >
              click here
            </Link>
          </div>
        </div>
        <div className="mt-2 border border-white w-fit rounded-xl mx-auto p-4  text-blue-500 ">
          <p className="text-white">second we will test the auth page</p>
              <p>
                status : <span className="text-red-400">{status}</span>
              </p>
          <h3>to test the session provider go to the login page  and try to login</h3>
          <Link 
              className="border rounded  block w-fit mx-auto bg-slate-400 hover:bg-slate-300 transition duration-200 p-1 my-4 "
          href={'/auth'}>Login</Link>
          <button className="border rounded  block w-fit mx-auto bg-slate-400 hover:bg-slate-300 transition duration-200 p-1 my-4"
          onClick={()=>signOut() }        > signOut</button>
          <p className="text-white">if you are logged in you should see your name below</p>
          {session? <p className="text-white">you are logged in as <span className="text-green-400">{session?.user?.username}</span></p> : JSON.stringify(session)}
        </div>
        <p>third we will test the 404 page</p>
        <p>
          fourth we will transform the project in a pwa and test the offline
          page
        </p>
      </div>
    </section>
  );
}
