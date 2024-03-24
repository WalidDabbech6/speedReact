import React, { useEffect, useState } from "react";
import Select from "react-tailwindcss-select";
import Datepicker from "react-tailwindcss-datepicker";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import useGetPrice from "../../hooks/useGetPrice";
import TimePicker from "../../components/TimePicker";
import Spinner from "../../components/Spinner";
import {destinations,orgins} from "../../../public/constants.js";
const validationSchema = yup
  .object({
    origin: yup.string().required("Origin is required"),
    destination: yup.string().required("Destination is required"),
    date: yup.string().required("Date is required"),
    time: yup.string().required("time is required"),

  })
  .required();
const RideForm = ({onSubmitForm,setRideFormValues}) => {
  const {
    register,
    control,
    handleSubmit,
    setValue,
    watch,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      origin: undefined,
      destination: undefined,
      date: undefined,
      time: undefined,
    },
  });
  const { mutate,isLoading,success } = useGetPrice(onSubmitForm);

  React.useEffect(() => {
    const subscription = watch((value, { name, type }) =>
      console.log(value, name, type)
    )
    return () => subscription.unsubscribe()
  }, [watch])
  
 
  const [date, setDate] = useState({
    startDate: undefined,
    endDate: new Date().setMonth(11),
  });

  const handleDateChange = (newValue) => {
    setValue("date", undefined, { shouldValidate: true });
    if (newValue?.startDate)
      setValue("date", newValue.startDate.split("-").reverse().join("/"), {
        shouldValidate: true,
      });
    setDate(newValue);
  };

  const [origin, setOrigin] = useState();
  const [originList,setOriginList] = useState(orgins)
  const [destinationList,setDestinationList] = useState(destinations)

  const [destination, setDestination] = useState();

  const handleChangeOrigin = (value) => {
    if (!value) {
      setOriginList(orgins)
      setOrigin(undefined)

    }
    setValue("origin", undefined, { shouldValidate: true });
    if (value) setValue("origin", value.value, { shouldValidate: true });
    setOrigin(value);
  };

useEffect(() => {
  if (!origin && !destination) return
  if (destination?.value === "TUN" && orgins.value === "TUN") {
    setOrigin(undefined)
    setDestination(undefined)
    setValue("destination", undefined, { shouldValidate: true });
    setValue("origin", undefined, { shouldValidate: true });


  }
  if (destination?.value  === "TUN" ){
    setOriginList(orgins.slice(1))
  }
  else if (destination?.value !== "TUN" ){
    setOriginList(orgins.slice(0,1))
    
  }
  if (origin?.value === "TUN"){

    setDestinationList(destinations.slice(1))
  }
  else if (origin?.value !== "TUN"){
    setDestinationList(destinations.slice(0,1))
    
  }
  return () => {
    
  }
}, [origin,destination])



  const handleChangeDestination = (value) => {
    if (!value) {
      setDestinationList(orgins)
      setDestination(undefined)
    }
    setValue("destination", undefined, { shouldValidate: true });
    if (value) setValue("destination", value.value, { shouldValidate: true });
    setDestination(value);
  };

  const onTimeChange = (value) => {
    // setValue("time", undefined, { shouldValidate: true });
    if (value) setValue("time", value, { shouldValidate: true });
  }

  const onSubmit = (values) => {
    mutate(values)
    setRideFormValues({...values})
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          <div className="col-span-1">
            <label
              className="flex text-gray-700 text-sm font-bold mb-2"
              htmlFor="origin"
            >
              Origin
            </label>
            <Controller
              name="origin"
              control={control}
              render={({ field }) => (
                <Select
                  {...(({ ref, ...other }) => other)(field)}
                  primaryColor={"blue"}
                  isSearchable
                  value={origin}
                  onChange={handleChangeOrigin}
                  options={originList}
                  isClearable
                />
              )}
            />

            {errors.origin && (
              <span className="flex mt-2 text-red-500 text-xs italic">
                {errors.origin?.message}
              </span>
            )}
          </div>
          <div className="col-span-1">
            <label
              className="flex text-gray-700 text-sm font-bold mb-2"
              htmlFor="destination"
            >
              Destination
            </label>
            <Controller
              name="destination"
              control={control}
              render={({ field }) => (
                <Select
                  {...(({ ref, ...other }) => other)(field)}
                  primaryColor={"blue"}
                  isSearchable
                  value={destination}
                  onChange={handleChangeDestination}
                  options={destinationList}
                  isClearable
                />
              )}
            />
            {errors.destination && (
              <span className="flex mt-2 text-red-500 text-xs italic">
                {errors.destination?.message}
              </span>
            )}
          </div>
        </div>
        <div className="mt-8">
          <label
            className="flex text-gray-700 text-sm font-bold mb-2"
            htmlFor="date"
          >
            Date
          </label>
          <Controller
            name="date"
            control={control}
            render={({ field }) => (
              <Datepicker
                {...(({ ref, ...other }) => other)(field)}
                toggleClassName="absolute  outline outline-1 bg-accent3 rounded-r-lg text-primary right-0 h-full px-3 text-primary-400 focus:outline-none disabled:opacity-40 disabled:cursor-not-allowed"
                containerClassName="relative rounded-l-lg rounded-r-lg ring-2 ring-primary focus:ring-0 focus:outline-none focus:border-none"
                inputClassName=""
                asSingle={true} 
                useRange={false} 
                startFrom={undefined}
                minDate={new Date()}
                separator="-"
                displayFormat="DD/MM/YYYY"
                placeholder="date"
                primaryColor={"blue"}
                value={date}
                onChange={handleDateChange}
              />
            )}
          />

          {errors.date && (
            <span className="flex mt-2 text-red-500 text-xs italic">
              {errors.date?.message}
            </span>
          )}
        </div>
        <div className="mt-8">
          <label
            className="flex text-gray-700 text-sm font-bold mb-2"
            htmlFor="date"
          >
            Time
          </label>
          <Controller
            name="time"
            control={control}
            render={({ field }) => (
              <TimePicker
                {...(({ ref,onChange, ...other }) => other)(field)}
                onTimeChange={onTimeChange}
               
              />
            )}
          />

          {errors.time && (
            <span className="flex mt-2 text-red-500 text-xs italic">
              {errors.time?.message}
            </span>
            
          )}
                <div class="my-2 flex mt-2 text-red-800 text-xs italic"><span id="span-input-value"></span></div>
        </div>
        <div>
          <button
            type="submit"
            disabled={isLoading}
            className="group mt-8 relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            {isLoading  && <Spinner/>}
            Reserve
          </button>
        </div>
      </form>
    </>
  );
};

export default RideForm;
