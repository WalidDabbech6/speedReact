import React from 'react'

const OtpPage = ({children,onClick}) => {
  return (
     <div class="mx-auto flex w-full max-w-md flex-col space-y-16">
        <div class="flex flex-col items-center justify-center text-center space-y-2">
          <div class="font-semibold text-3xl">
            <p>Email Verification</p>
          </div>
          <div class="flex flex-row text-sm font-medium text-gray-400">
            <p>We have sent a code to your email ba**@dipainhouse.com</p>
          </div>
        </div>
  
        <div>
          {/* <form action="" method="post"> */}
            <div class="flex flex-col space-y-16">
             {children}
  
              <div class="flex flex-col space-y-5">
                <div>
                  <button onClick={onClick} class="flex flex-row items-center justify-center text-center w-full border rounded-xl outline-none py-5 bg-primary hover:bg-blue-700 focus:outline-none text-white text-sm shadow-sm">
                    Verify Account
                  </button>
                </div>
  
                <div class="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
                  <p>Didn't recieve code?</p> <a class="flex flex-row items-center text-blue-600" href="http://" target="_blank" rel="noopener noreferrer">Resend</a>
                </div>
              </div>
            </div>
          {/* </form> */}
        </div>
      </div>
  )
}

export default OtpPage