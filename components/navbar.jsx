import Link from "next/link";

export default function NavBar({ children }) {
    return (
        <div className=" flex">
            <div className="lg:w-72 md:w-60 sm:w-52 h-[95vh] rounded-3xl mx-8 my-4  bg-blue-500 fixed flex flex-col justify-between items-center">

                <h1 className="text-white top-5 font-bold mt-14 lg:ml-0 sm:ml-2 lg:text-4xl md:text-3xl sm:text-2xl ">Board.</h1>

                <div className=" w-48 h-fit flex flex-col gap-3">
                    <div className=" h-10 w-14 flex flex-row gap-3 ">
                        <img className="h-6 w-6 my-auto " src="dashboard.png"></img>
                        <Link className=" text-center my-auto text-sm mt-2 " href="/dashboard">
                            <span className="text-xl sm:text-base  text-white  font-semibold">Dashboard</span>
                        </Link>
                    </div>
                    <div className=" h-10 w-14 flex flex-row gap-3 ">
                        <img className="h-6 w-6 my-auto object-contain" src="transaction.png"></img>
                        <Link className=" text-center my-auto text-sm mt-2 " href="/dashboard">
                            <span className="text-xl sm:text-base text-center text-white  font-semibold">Transactions</span>
                        </Link>
                    </div>
                    <div className=" h-10 w-14 flex flex-row gap-3 ">
                        <img className="h-6 w-6 my-auto" src="schedule.png"></img>
                        <Link className=" text-center text-sm mt-2 " href="/dashboard">
                            <span className="text-xl sm:text-base text-white font-semibold">Schedules</span>
                        </Link>
                    </div>
                    <div className=" h-10 w-14 flex flex-row gap-3 ">
                        <img className="h-6 w-6 my-auto" src="users.png"></img>
                        <Link className=" text-center text-sm mt-2 " href="/dashboard">
                            <span className="text-xl sm:text-base text-white font-semibold">Users</span>
                        </Link>
                    </div>
                    <div className=" h-10 w-14 flex flex-row gap-3 ">
                        <img className="h-6 w-6 my-auto" src="settings.png"></img>
                        <Link className=" text-center text-sm mt-2 " href="/dashboard">
                            <span className="text-xl sm:text-base text-white font-semibold">Settings</span>
                        </Link>
                    </div>
                </div>
                <div className="flex flex-col mb-4">
                    <p className=" font-normal text-base text-white">Help</p>
                    <p className=" font-normal text-base text-white">Contact Us</p>
                </div>
            </div>
            <main className="w-full h-fit">{children}</main>
        </div>
    )
};