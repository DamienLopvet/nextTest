"use client";
import React, { useState } from "react";
import { signIn } from "next-auth/react";
const page = () => {
  const [user, setuser] = useState({ email: "", password: "" });
  const handleSubmit = async (event) => {
    event.preventDefault();
    signIn("credentials", {
      email: user.email,
      password: user.password,
      callbackUrl:'/'
    })
      
  };

  return (
    // react signin form
    <div className="mx-4 p-4">
      <h1>Sign In</h1>
      <form
        className="flex flex-col gap-2 w-1/3 justify-center items-center text-blue-400"
        onSubmit={handleSubmit}
      >
        <input
          type="email"
          placeholder="Email"
          className="text-black"
          onChange={(event) => setuser({ ...user, email: event.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          className="text-black"
          onChange={(event) =>
            setuser({ ...user, password: event.target.value })
          }
        />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default page;
