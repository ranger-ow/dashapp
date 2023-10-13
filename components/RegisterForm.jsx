"use client"

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !password ) {
      setError("All fields are necessary.");
      return;
    }

    try {
      const resUserExists = await fetch("api/userExists", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const { user } = await resUserExists.json();

      if (user) {
        setError("User already exists.");
        return;
      }

      const res = await fetch("api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password
      }),
    });
      console.log(res);

      if (res.ok) {
        const form = e.target;
        form.reset();
        router.push("/");
      } else {
        console.log("User registration failed.");
      }
    } catch (error) {
      console.log("Error during registration: ", error);
    }
  };

  return (
    <div className="grid place-items-center h-screen">
      <div className="shadow-lg p-5 rounded-lg bg-sky-200 border-b-4 border-blue-400">
        <h1 className="text-3xl font-bold my-4 text-center">Register</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3 my-5 mx-14">
        <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Full Name"
            className="lg:w-72 md:w-48 sm:w-36 h-10  rounded-xl"
          />
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Email"
            className="lg:w-72 md:w-48 sm:w-36 h-10  rounded-xl"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            className=" lg:w-72 md:w-48 sm:w-36 h-10 rounded-xl"
          />
          {/* <input
            onChange={(e) =>setMobile(e.target.value)}
            type="text"
            placeholder="Mobile No."
            className=" lg:w-72 md:w-48 sm:w-36 h-10 rounded-xl"
          />
          <input
            onChange={(e) => setInsta(e.target.value)}
            type="text"
            placeholder="Instagram Id"
            className=" lg:w-72 md:w-48 sm:w-36 h-10 rounded-xl"
          />
          <input
            onChange={(e) => setYoutube(e.target.value)}
            type="text"
            placeholder="Youtube Channel"
            className=" lg:w-72 md:w-48 sm:w-36 h-10 rounded-xl"
          /> */}
          <button className="bg-blue-500 text-white font-bold cursor-pointer px-6 py-2">
            Register
          </button>
          {error && (
            <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
              {error}
            </div>
          )}


          {error && (
            <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
              {error}
            </div>
          )}

          <Link className="text-sm mt-3 text-right" href={"/"}>
            Already have an account? <span className="underline">Login</span>
          </Link>
        </form>
        
      </div>
      
    </div>
  );
}
