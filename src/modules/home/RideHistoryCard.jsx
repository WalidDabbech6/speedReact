import React from 'react'

const RideHistoryCard = ({ride,bookingTime,createdAt,price,date}) => {
  const {origin,destination} = ride
  return (
    <div className="bg-white rounded-lg shadow-[0_1px_31px_-5px_rgba(0,0,0,0.3)] p-4">
    <div className="flex flex-col ">
    <div className="text-primary text-start font-semibold text-sm md:text-l pb-2">{`${date}, ${bookingTime}`}</div>
    <div className="border-t-[1px] border-gray-300 pb-2 flex flex-col">
      <div className="after:block after:border-primary after:border-dashed	after:border after:w-[2px] after:h-12 after:mx-2 after:my-2 pt-2">

      <div className="flex items-center">
        {/* <div className="animate-pulse h-2 w-2 bg-green-500 rounded-full mr-2" /> */}
       <div className="bg-primary rounded-full h-5 w-5 mr-2">
       <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="white"
          style={{padding:"4px"}}
          className="w-5 h-5"
          >
          <path
            fillRule="evenodd"
            d="M9.293 2.293a1 1 0 0 1 1.414 0l7 7A1 1 0 0 1 17 11h-1v6a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6H3a1 1 0 0 1-.707-1.707l7-7Z"
            clipRule="evenodd"
            />
        </svg>
       </div>

        <div>
          <span className="text-sm font-medium text-primary">Origin: </span>{" "}
          <span className="text-sm text-slate-500 hover:text-blue-600">
          {origin === "TUN" ? "Tunis Airport" : origin}
          </span>
        </div>
      </div>
      </div>
      
      <div className="flex items-center">
      <div className="bg-primary rounded-full h-5 w-5 mr-2">

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="white"
          style={{padding:"4px"}}
          className="w-5 h-5"
        >
          <path
            fillRule="evenodd"
            d="m9.69 18.933.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 0 0 .281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 1 0 3 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 0 0 2.273 1.765 11.842 11.842 0 0 0 .976.544l.062.029.018.008.006.003ZM10 11.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z"
            clipRule="evenodd"
            />
        </svg>
      </div>
        {/* <div className="animate-pulse h-2 w-2 bg-orange-500 rounded-full mr-2" /> */}
        <div>
          <span className="text-sm font-medium text-primary">Destination: </span>
          <span className="text-sm text-slate-500 hover:text-blue-600">
          {destination === "TUN" ? "Tunis Airport" : destination}
          </span>
        </div>
      </div>
    </div>
  </div>
  <div className='text-end text-accent1'>{`${price} TND`}</div>

  <div className='text-start'>created at: {createdAt}</div>
  </div>
  )
}

export default RideHistoryCard