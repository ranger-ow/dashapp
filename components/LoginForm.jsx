"use client";
import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();
  const handlelogin=()=>{
    signIn("google");
  }
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (res.error) {
        setError("Invalid Credentials");
        return;
      }

      router.replace("dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-screen h-screen flex lg:flex-row md:flex-row sm:flex-col">
      <div className=" w-[100%] h-screen bg-blue-600 lg:-skew-x-12 sm:skew-x-0 -translate-x-20 flex flex-col justify-evenly items-center ">
        <div className=" w-fit h-fit flex flex-row justify-centre gap-2 relative items-centre ">
          <img  className="w-20 h-20 ml-0 rounded-full" src="logo.png" alt="logo" ></img>
          <p className="lg:text-4xl md:text-3xl sm:text-2xl text-center mt-6   h-fit w-fit text-white font-bold "> Dash-App</p>
        </div>
        <div className="w-24 h-24 justify-center items-center">
          <h1 className="text-white font-bold mt-14 lg:ml-0 sm:ml-8 lg:text-5xl md:text-3xl sm:text-2xl ">Board.</h1>
        </div>
        <div className="lg:w-fit lg:h-auto sm:w-10 sm:min-h-4 flex lg:flex-row md:flex-col sm:flex-col mt-24 justify-centre ml-24 sm:ml-8 lg:gap-4 sm:gap-2 items-center">
        <img  className="w-14 h-14  ml-0 rounded-full" src="github.png" alt="" ></img>
        <img  className="w-14 h-14 ml-0 rounded-full" src="twitter.png" alt="" ></img>
        <img  className="w-14 h-14 ml-0 rounded-full" src="linkedin.png" alt="" ></img>
        <img  className="w-14 h-14 ml-0 rounded-full" src="discord.png" alt="" ></img>
        </div>

        
      </div>
      <div className=" min-w-[60vw] pl-28 sm:pl-8 h-screen flex flex-col justify-center items-start">
        <div className="flex flex-col mx-14 gap-1 ">
          <h1 className="font-semibold text-2xl ">Sign In</h1>
          <h5 className="text-black text-sm font-normal my-auto ">Sign In to your account</h5>
          <div className=" h-10 flex flex-row justify-evenly items-center  rounded-full gap-2 bg-gray-200 my-auto">
            <img className="w-8 h-8 rounded-full ml-0 justify-center relative" src="googleicon.png" alt="Googleicon" />

            <button onClick={handlelogin} className=" border-gray-300 rounded mx-auto my-1 text-lg md:text-base sm:text-sm mr-4  text-slate-600">Sign in with Google</button>
          </div>
        </div>


        <form onSubmit={handleSubmit} className="flex flex-col gap-3 my-5 mx-14">
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
          <span className="font-normal text-blue-700 text-xs underline ">  Forget Password?</span>
          <button className="bg-blue-500 text-white font-bold cursor-pointer px-6 py-2">
            Sign In
          </button>
          {error && (
            <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
              {error}
            </div>
          )}

          <Link className=" text-center text-sm mt-3 " href={"/register"}>
            Don't have an account? <span className="underline">Register</span>
          </Link>
        </form>


      </div>

    </div>

   
  );
}
