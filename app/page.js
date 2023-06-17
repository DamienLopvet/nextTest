"use client";
import Link from "next/link";
export default function Home() {
  return (
    <section>
      <h1 className="text-4xl text-center py-10 text-blue-500">hello world</h1>
      <hr />
      <div className=" text-2xl text-center ">
        <h2 className="text-2xl py-9 text-center text-blue-400">
          In this section we would like to make some test:
        </h2>
        <div className=" border border-white w-fit rounded-xl mx-auto p-4">
          <p className="">first we will test the error.js fallback page</p>
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
          <h3>to test the session provider go to the login page  and try to login</h3>
          <Link 
              className="border rounded  block w-fit mx-auto bg-slate-400 hover:bg-slate-300 transition duration-200 p-1 my-4 "
          href={'/auth'}>Login</Link>
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
