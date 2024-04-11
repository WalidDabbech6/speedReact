import React from "react";

const OtpPage = ({ children, onClick,isError,error,success,email }) => {
  return (
    <div className="mx-auto flex w-full max-w-md flex-col space-y-16">
      <div className="flex flex-col items-center justify-center text-center space-y-2">
        <div className="font-semibold text-3xl">
          <p>Email Verification</p>
        </div>
        <div className="flex flex-row text-sm font-medium text-gray-400">
          <p>We have sent a code to your email {email}</p>
        </div>
      </div>

      <div>
        <div className="flex flex-col space-y-16">
          {children}

          <div className="flex flex-col space-y-5">
            <div>
              <button
                onClick={onClick}
                className="flex flex-row items-center justify-center text-center w-full border rounded-xl outline-none py-5 bg-primary hover:bg-blue-700 focus:outline-none text-white text-sm shadow-sm"
              >
                {success ? 'Go to login Page' : 'Verify Account'}
              </button>
            </div>
            {isError && (
          <div className="text-center text-red-500 text-sm mt-2">{error.message}</div>
        )}
            {/* <div className="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
              <p>Didn't recieve code?</p>{" "}
              <a
                className="flex flex-row items-center text-blue-600"
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resend
              </a>
            </div> */}
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default OtpPage;
