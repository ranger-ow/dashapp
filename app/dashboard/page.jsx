"use client"
import Modal from "@/components/Modal";
import UserInfo from "@/components/UserInfo";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Dashboard() {
  const [show, setShow] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
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
        router.push("/dashboard")
      } else {
        console.log("User registration failed.");
      }
    } catch (error) {
      console.log("Error during registration: ", error);
    }
  };

  return (
    <>
      {
        show ? (
          <>
            <UserInfo show={show} setShow={setShow} />
          </>
        ) :
          (
            <>
              <div className=" w-[30vw] h-[40vh] absolute right-96 bg-slate-500 top-52 overflow-hidden ">
                <div className=" w-fit h-fit my-8 mx-auto">
                  <h1 className=" w-full h-full font-semibold text-center text-black text-xl">Add Profile</h1>
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
                    <button className=" rounded-2xl text-slate-400 bg-black">Add</button>
                    <button onClick={() => setShow(!show)} className=" rounded-2xl text-slate-400 bg-black">Close</button>
                    {error && (
                      <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
                        {error}
                      </div>
                    )}
                  </form>
                </div>
              </div>

              <UserInfo show={show} setShow={setShow} />
            </>
          )
      }



    </>
  )
};
