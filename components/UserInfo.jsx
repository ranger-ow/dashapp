"use client";

import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import Barchart from "./Barchart";


export default function UserInfo({show,setShow}) {
  const { data: session } = useSession();
  
  const usercard = {
    revenue: "$2,129,430",
    transaction: "1520",
    likes: "9,721",
    totalusers: "9,721",
  }

  return (

    <div className=" min-h-screen lg:w-[79vw] md:w-[60vw] sm:w-[40vw] ml-80 flex lg:flex-col  object-fill  ">
      <div className=" flex flex-row mt-10 justify-between ">
        <h4 className="text-black w-fitrounded-xl mx-auto text-center font-semibold lg:ml-14 sm:ml-4 my-auto lg:text-2xl sm:text-sm">{session?.user?.name}'s Dashboard</h4>
        
        <div className="flex flex-row gap-3">
          <input className="lg:w-fit sm:w-24 h-8 my-auto rounded-xl border-black" type="text" placeholder="search" />
          <button className="rounded-full w-8 h-8 mt-1  bg-blue-600 text-white text-2xl text-centre" onClick={() => {setShow(!show)}}>+</button>
          <img className="w-6 h-6 rounded-full my-auto" src="notification.png"></img>
          <img className="w-10 h-10 rounded-full mr-4" src="profile.png" onClick={() => { signOut() }}></img>

        </div>
      </div>
      <div className="w-fit h-fit flex lg:flex-row md:flex-wrap sm:flex-wrap justify-center mt-14 ml-4  lg:gap-20 sm:gap-8 ">
        <div className="lg:w-56 sm:w-36 h-24 lg:ml-10 sm:ml-2 flex flex-col border-2 border-gray-400 rounded-xl shadow-md shadow-slate-500">
          <img className="h-8 w-8 rounded-full lg:ml-24 sm:ml-14 mt-2 my-auto object-contain" src="roi.png"></img>
          <p className="text-black lg:text-base sm:text-sm text-center my-auto font-semibold">Total Revenues</p>
          <div className="flex flex-row mb-1  justify-evenly  ">
            <p className="text-black lg:text-base sm:text-sm my-auto font-semibold">{usercard.revenue}</p>
            <span className="h-fit w-11 rounded-xl text-sm  my-auto bg-green-300 ">+2.5%</span>
          </div>
        </div>
        <div className="lg:w-56 sm:w-36 h-24  border-2 border-gray-400 rounded-xl shadow-md shadow-slate-500">
          <img className="h-8 w-8 rounded-full lg:ml-24 sm:ml-14 mt-2 my-auto object-contain" src="transaction.png"></img>
          <p className="text-black lg:text-base sm:text-sm text-center my-auto font-semibold">Total Transactions</p>
          <div className="flex flex-row mb-1  justify-evenly ">
            <p className="text-black  lg:text-base sm:text-sm my-auto font-semibold">{usercard.transaction}</p>
            <span className="h-fit w-11 rounded-xl text-sm text-centre my-auto bg-green-300 ">+1.7%</span>
          </div>
        </div>
        <div className="lg:w-56 sm:w-36 h-24 border-2 border-gray-400 rounded-xl shadow-md shadow-slate-500">
          <img className="h-8 w-8 rounded-full lg:ml-24 sm:ml-14 mt-2 my-auto object-contain" src="like.png"></img>
          <p className="text-black lg:text-base sm:text-sm text-center my-auto font-semibold">Total Likes</p>
          <div className="flex flex-row mb-1  justify-evenly ">
            <p className="text-black lg:text-base sm:text-sm my-auto font-semibold">{usercard.likes}</p>
            <span className="h-fit w-11 rounded-xl text-sm    my-auto bg-green-300 ">+1.4%</span>
          </div>
        </div>
        <div className="lg:w-56 sm:w-36 h-24 border-2 border-gray-400 rounded-xl shadow-md shadow-slate-500">
          <img className="h-8 w-8 rounded-full lg:ml-24 sm:ml-14 mt-2 my-auto object-contain" src="users2.png"></img>
          <p className="text-black lg:text-base text-center my-auto font-semibold">Total Users</p>
          <div className="flex flex-row mb-1  justify-evenly ">
            <p className="text-black lg:text-base sm:text-sm my-auto font-semibold">{usercard.totalusers}</p>
            <span className="h-fit w-11 rounded-xl text-sm    my-auto bg-green-300 ">+4.2%</span>
          </div>
        </div>
      </div>
      <div className="w-fit h-40">
        <Barchart />
      </div>

     







    </div>
  );
}
