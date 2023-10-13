import { useState } from "react";
import UserInfo from "./UserInfo";

export default function Modal({ show, setShow }) {
    return (
        <>

            {
                show ? (
                    <>
                    <div className=" w-44 h-44 absolute left-44 bg-red-600 overflow-hidden ">
                        <div className=" w-44 h-44 bg-pink-600">
                 
                        </div>
                    </div>
                    </>

                ):
                (
                    <>
                    <UserInfo show={show} setShow={setShow} />
                    </>
                )
            }
        </>
    )
}