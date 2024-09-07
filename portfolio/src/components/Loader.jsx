import React from 'react'

const Loader = () => {
  return (
    <>
         <div className="flex items-center justify-center h-screen py-28 mx-auto p-6 bg-gradient-to-r from-pink-500 to-red-600 shadow-lg rounded-lg">
            <div className=" size-[70px] rounded-full place-self-center border-[4px] border-[#000000] border-t-[#a9a9a9] duration-[1] animate-spin"></div>
          </div>
    </>
  )
}

export default Loader