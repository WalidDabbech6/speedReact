import React from "react";

const formatDate = (dateString) => {
  const parts = dateString.split('/');
  // Create a new Date object using the parts (year, month - 1, day)
  const date = new Date(parts[2], parts[1] - 1, parts[0]);
  // Define the formatting options for the date
  const options = { weekday: 'long', day: '2-digit', month: 'short'};
  // Create a new Intl.DateTimeFormat object with the locale set to French ('fr-FR') and pass the options
  const formatter = new Intl.DateTimeFormat('fr-FR', options);
  // Return the formatted date string
  return formatter.format(date);
};

const RideConfirmation = ({ formValues, price, onClick }) => {
  let { origin, destination, time, date } = formValues;
  return (
    <div className="mx-auto flex w-full max-w-md flex-col space-y-8 p-6">
      <div className="flex flex-col space-y-1">
        <div className="text-primary font-semibold text-sm md:text-xl">{`${formatDate(date).toUpperCase()} ${time}`}</div>
        <div className="border-b-2 border-dashed border-primary pb-2 flex flex-col">
          <div className="after:block after:bg-primary after:w-[2px] after:h-12 after:mx-2 after:my-2">

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
              <span className="text-sm font-medium text-primary">Destination: </span>{" "}
              <span className="text-sm text-slate-500 hover:text-blue-600">
                {destination === "TUN" ? "Tunis Airport" : destination}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col space-y-5">
        <div className="flex flex-col justify-center font-semibold text-xl space-y-2 md:text-2xl text-accent1">
         { time?.split(":").shift() >= 21 || time?.split(":").shift() <=5  ?
         ( <div className="flex justify-center font-semibold text-xs md:text-xs text-gray-500">
          {`${price}dt prix de base + ${price * 0.5}dt pour la majoration`}
        </div>) :(<></>)
         }
         
          <div className="flex justify-center font-semibold text-xl md:text-2xl text-accent1">
          Total : { time?.split(":").shift() >= 21 || time?.split(":").shift() <=5   ? price *1.5 :price} dt
          </div>
        </div>
        <button
          onClick={onClick}
          className="flex flex-row items-center justify-center text-center w-full border rounded-xl outline-none py-5 bg-accent1 hover:bg-green-500 focus:outline-none text-white text-sm shadow-sm"
          >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default RideConfirmation;
