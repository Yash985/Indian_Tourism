"use client";
import { createAccount } from "@/app/actions/createAccount";
import { useState } from "react";

export function Signup() {
  const [input, setInput] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const handleClick = async () => {
    if (!input.username || !input.email || !input.password) {
      setError("Please fill all the fields");
      return;
    }
    const res = await createAccount({
      username: input.username,
      email: input.email,
      password: input.password,
    });
    if (!res.success) {
      setError(res.message);
      return
    }
    // }
    // if (res.success) {
    //   toast
    // }
    // console.log(res);
  };
  return (
    <div className="h-[85dvh] flex justify-center items-center">
      <div className="w-1/3 bg-slate-800 p-2 rounded-lg shadow-lg flex flex-col items-center ">
        <p className="text-gray-300 text-4xl font-semibold my-2">Signup</p>
        <div className="flex flex-col gap-2 w-full px-10">
          <label htmlFor="username" className="text-gray-400">Username</label>
          <input
            className="rounded-lg p-1 focus:outline-gray-800"
            type="text"
            id="username"
            value={input.username}
            onChange={(e) => setInput({ ...input, username: e.target.value })}
          />
          <label htmlFor="email" className="text-gray-400">Email</label>
          <input
            className="rounded-lg p-1 focus:outline-gray-800"
            type="email"
            id="email"
            value={input.email}
            onChange={(e) => setInput({ ...input, email: e.target.value })}
          />
          <label htmlFor="password" className="text-gray-400">Password</label>
          <input
            className="rounded-lg p-1 focus:outline-gray-800"
            type="password"
            id="password"
            value={input.password}
            onChange={(e) => setInput({ ...input, password: e.target.value })}
          />
          <div className="flex flex-col items-center my-3">

            <button className="bg-blue-600 w-28 rounded-lg py-1 hover:bg-blue-900 text-gray-300" onClick={handleClick}>Submit</button>
            {
              error && <p className="text-red-500 mt-2">{error}</p>
            }
          </div>
        </div>
      </div>
    </div>
  );
}
