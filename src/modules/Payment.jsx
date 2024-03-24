import React from 'react'

const Payment = () => {
  return (
      <div className='bg-accent3'>
    <div className="m-auto grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6 lg:grid-rows-2">
    <div className="col-span-4 lg:col-span-4 p-6">
  <h4 className="text-3xl text-gray-700 mb-5">Payment information</h4>
  <div className="p-10 rounded-md shadow-md bg-white">
   <div className="mb-6">
    <label className="block mb-3 text-gray-600" for="">Name on card</label>
    <input type="text" className="border border-gray-500 rounded-md inline-block py-2 px-3 w-full text-gray-600 tracking-wider"/>
   </div>
   <div className="mb-6">
    <label className="block mb-3 text-gray-600" for="">Card number</label>
    <input
     type="tel" className="border border-gray-500 rounded-md inline-block py-2 px-3 w-full text-gray-600 tracking-widest"/>
   </div>
   <div className="mb-6 flex flex-wrap -mx-3w-full">
    <div className="w-2/3 px-3">
     <label className="block mb-3 text-gray-600" for="">Expiraion date</label>
     <div className="flex">
      <select className="border border-gray-500 rounded-md inline-block py-2 px-3 w-full text-gray-600 tracking-widest mr-6">
       <option>Month</option>
      </select>
      <select className="border border-gray-500 rounded-md inline-block py-2 px-3 w-full text-gray-600 tracking-widest">
       <option>Year</option>
      </select>
     </div>
    </div>
    <div className="w-1/3 px-3">
     <label className="block mb-3 text-gray-600" for="">CVC</label>
     <input type="tel" className="border border-gray-500 rounded-md inline-block py-2 px-3 w-full text-gray-600 tracking-widest"/>
    </div>
   </div>
   <div className="mb-6 text-right">
    <span className="text-right font-bold">400 TND</span>
   </div>
   <div>
    <button                 className="bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
>
     Confirm payment
    </button>
   </div>
  </div>
  </div>
 </div>
    </div>
  )
}

export default Payment