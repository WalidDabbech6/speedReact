import React from "react";


const AuthLayout = ({children}) => {
 

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Background image */}
      <div className="md:w-1/2 h-full bg-cover bg-unset md:bg-unset" style={{ backgroundImage: "url('/background.jpg')" }}></div>

      {/* Form container */}
      <div className="md:w-1/2 flex justify-center items-center bg-accent3">
        {children}
      </div>
    </div>  );
};

export default AuthLayout;
