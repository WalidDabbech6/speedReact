import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../auth/context/AuthContext';
import Modal from '../../components/Modal';
import useUpdateProfile from "../../hooks/useUpdateProfile";
import ProfileForm from './ProfileForm';
import { ToastContainer } from 'react-toastify';
const Profile = () => {
  const {currentUser} = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const {mutate}  = useUpdateProfile();
  return (
    <>
    <div className="md:basis-1/3 bg-white rounded-lg shadow-md overflow-hidden">
        <ToastContainer/>
        <div className="text-center p-6 bg-primary border-b">
        <svg aria-hidden="true" role="img" className="h-24 w-24 text-white rounded-full mx-auto" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256"><path fill="currentColor" d="M172 120a44 44 0 1 1-44-44a44 44 0 0 1 44 44Zm60 8A104 104 0 1 1 128 24a104.2 104.2 0 0 1 104 104Zm-16 0a88 88 0 1 0-153.8 58.4a81.3 81.3 0 0 1 24.5-23a59.7 59.7 0 0 0 82.6 0a81.3 81.3 0 0 1 24.5 23A87.6 87.6 0 0 0 216 128Z"></path></svg>
        <p className="pt-2 text-lg font-semibold text-gray-50 capitalize">{`${currentUser?.first_name} ${currentUser?.last_name}`}</p>
        <p className="text-sm text-gray-100">{currentUser?.email}</p>
        <button className="mt-5" onClick={()=>{setIsOpen(true);}}>
            <div
            className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100"
            >
            Manage your Account
            </div>
        </button>
        </div>
        <div className="border-b">
            <Link href="/account/campaigns" >
                <a className="px-4 py-2 hover:bg-gray-100 flex">
                    <div className="text-green-600">
                    <svg  width="24px" height="24px" viewBox="0 0 256 158" xmlSpace="preserve" fill="currentColor" stroke="currentColor">
                        <path d="M54.4,155.7c-14.7,0-26.6-11.9-26.6-26.6s11.9-26.6,26.6-26.6S81,114.5,81,129.2S69.1,155.7,54.4,155.7z M54.4,120.3 c-4.9,0-8.9,4-8.9,8.9s4,8.9,8.9,8.9s8.9-4,8.9-8.9S59.3,120.3,54.4,120.3z M186.2,155.7c-14.7,0-26.6-11.9-26.6-26.6 s11.9-26.6,26.6-26.6s26.6,11.9,26.6,26.6S200.8,155.7,186.2,155.7z M186.2,120.3c-4.9,0-8.9,4-8.9,8.9s4,8.9,8.9,8.9s8.9-4,8.9-8.9 S191,120.3,186.2,120.3z M233.3,61.3H207l-47-47.9c-6.9-7-16.5-11.1-26.3-11.1H39.6c-7.9,0-15,4.7-18,12L2,61.3l0,62.9h16.3 c2.4-17.8,17.7-31.4,36.1-31.4s33.6,13.7,36.1,31.4h59.6c2.4-17.8,17.7-31.4,36.1-31.4s33.6,13.7,36.1,31.4H254V81.9 C254,70.5,244.7,61.3,233.3,61.3z M18,61.3l17.2-41.3c0.7-1.8,2.5-2.9,4.4-2.9h50.9v44.2H18z M105.3,61.3V17h28.5 c5.9,0,11.6,2.4,15.7,6.6l36.8,37.6H105.3z M129.5,30.2c7.5,0,13.6,6.1,13.6,13.6s-6.1,13.6-13.6,13.6s-13.6-6.1-13.6-13.6 S122,30.2,129.5,30.2z M58,30.2c7.5,0,13.6,6.1,13.6,13.6S65.4,57.4,58,57.4s-13.6-6.1-13.6-13.6S50.5,30.2,58,30.2z"></path>
                    </svg>
                    </div>
                    <div className="pl-3 flex flex-col items-start">
                    <p className="text-sm font-medium text-gray-800 leading-none">
                        Rides History
                    </p>
                    <p className="text-xs text-gray-500">View your rides history</p>
                    </div>
                </a>
            </Link>
            {/* <Link href="/account/donations" >
                <a className="px-4 py-2 hover:bg-gray-100 flex">
                    <div className="text-gray-800">
                    <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1"
                        viewBox="0 0 24 24"
                        className="w-5 h-5"
                        >
                        <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    </div>
                    <div className="pl-3">
                    <p className="text-sm font-medium text-gray-800 leading-none">Donations</p>
                    <p className="text-xs text-gray-500">View your last donations</p>
                    </div>
                    </a>
                </Link> */}
        </div>
    </div>
    <Modal title="Update Profile Informations" isOpen={isOpen} setIsOpen={setIsOpen} onSubmit={(values)=>{
        mutate(values);
      }}>
        {({handleSubmit})=>(
        <ProfileForm onClick={handleSubmit}/>
        )}
        </Modal>
                </>
  );
};
export default Profile;