import React, { useEffect } from 'react'
import RideHistoryCard from './RideHistoryCard'
import useGetBookingHistory from '../../hooks/useGetBookingHistory';
import { Link } from 'react-router-dom';

const RideHistory = () => {

    const { getHistory, isBookHistorySuccess, data } = useGetBookingHistory();

    useEffect(() => {
        getHistory()
    
      return () => {
        
      }
    }, [])
    

  return (
    <div className="flex flex-col h-screen">
    <nav className="bg-primary py-2 px-5 shadow-md">
      <div className="container-fluid mx-auto px-4 py-2 sm:px-0">
        <div className="flex justify-between items-center">
        <Link to="../home" className="text-gray-200 hover:underline">
        <svg height="30px" id="Layer_1"  version="1.1" viewBox="0 0 512 512" width="30px" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><polygon fill='white' points="352,128.4 319.7,96 160,256 160,256 160,256 319.7,416 352,383.6 224.7,256 "/></svg>
          </Link>
          <h1 className="text-3xl font-semibold text-white">Ride History</h1>
          <Link to="/logout" className="text-gray-200 hover:underline">
            Logout
          </Link>
        </div>
      </div>
    </nav>
    <main className="flex-1 bg-accent3 overflow-y-auto">
    <div className="flex flex-col gap-5 overflow-auto p-8 ">
    {data?.results?.map((item) => (
      <RideHistoryCard
        key={item.id}
        ride={item.ride}
        createdAt={item.created_at}
        bookingTime={item.booking_time}
        date={item.date}
        payed={item.payed}
        price={item.price}
      />
    ))}{" "}
  </div>
  </main>
  </div>
  )
}

export default RideHistory