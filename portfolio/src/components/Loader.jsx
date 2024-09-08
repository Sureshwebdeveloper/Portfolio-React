import React from 'react'

const Loader = () => {
  return (
    <>
         <div className="flex items-center justify-center py-28 mx-auto p-6 bg-gradient-to-r from-pink-500 to-red-600 ">
            <div className=" size-[70px] rounded-full place-self-center border-[4px] border-[#000000] border-t-[#a9a9a9] duration-[1] animate-spin"></div>
          </div>
    </>
  )
}

export default Loader