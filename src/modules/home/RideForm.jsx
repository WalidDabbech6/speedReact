import React, { useEffect, useState } from "react";
import Select from "react-tailwindcss-select";
import Datepicker from "react-tailwindcss-datepicker";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import useGetPrice from "../../hooks/useGetPrice";
import TimePicker from "../../components/TimePicker";
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
  const { mutate,success } = useGetPrice(onSubmitForm);

  const watchTime = watch("time", false)
  React.useEffect(() => {
    const subscription = watch((value, { name, type }) =>
      console.log(value, name, type)
    )
    return () => subscription.unsubscribe()
  }, [watch])
  
  let orgins = [
    {
    label: "Aéorport Tunis Carthage",
    options:[
      { value: "TUN", label: "Tunis Airport" },
      // { value: "DJE", label: "Melita" },
      // { value: "MIR", label: "Monastir Airport" },
      // { value: "NBE", label: "Enfidha-Hammamet Int" },
      // { value: "SFA", label: "Sfax El Maou" },
      // { value: "TOE", label: "Tozeur Airport" },
    ]
    },
    {
      label: "Grand Tunis",
      options: [
        { value: "Centre Ville", label: "Centre Ville" },
        { value: "LAC 1", label: "LAC 1" },
        { value: "LAC 2", label: "LAC 2" },
        { value: "LAC 3", label: "LAC 3" },
        { value: "El Kram", label: "El Kram" },
        { value: "La goulette", label: "La goulette" },
        { value: "Sidi Bousaîd", label: "Sidi Bousaîd" },
        { value: "Gammarth", label: "Gammarth" },
        { value: "Carthage", label: "Carthage" },
        { value: "Jardins Carthage", label: "Jardins Carthage" },
        { value: "L'aouina", label: "L'aouina" },
        { value: "La Soukra", label: "La Soukra" },
        { value: "Enkhilet", label: "Enkhilet" },
        { value: "ElGhazela", label: "ElGhazela" },
        { value: "Géant", label: "Géant" },
        { value: "Sidi Thabet", label: "Sidi Thabet" },
        { value: "Sidi Hssin", label: "Sidi Hssin" },
        { value: "Jdaida", label: "Jdaida" },
        { value: "Wed El lil", label: "Wed El lil" },
        { value: "Ettahrir", label: "Ettahrir" },
        { value: "Intilaka", label: "Intilaka" },
        { value: "Ettadhamen", label: "Ettadhamen" },
        { value: "Ibn Khaldoun", label: "Ibn Khaldoun" },
        { value: "Mnihla", label: "Mnihla" },
        { value: "Bardo", label: "Bardo" },
        { value: "Danden", label: "Danden" },
        { value: "Beb El Khadhra", label: "Beb El Khadhra" },
        { value: "Mornaguia", label: "Mornaguia" },
        { value: "Beb Saadoun", label: "Beb Saadoun" },
        { value: "Moncef Bey", label: "Moncef Bey" },
        { value: "El madina el jadida", label: "El madina el jadida" },
        { value: "Ben aarouss", label: "Ben aarouss" },
        { value: "Rades", label: "Rades" },
        { value: "Ezzahra", label: "Ezzahra" },
        { value: "Fouchana", label: "Fouchana" },
        { value: "Jbal Rassas", label: "Jbal Rassas" },
        { value: "Jbal jloud", label: "Jbal jloud" },
        { value: "Hammem lif", label: "Hammem lif" },
        { value: "Borj Esidria", label: "Borj Esidria" },
        { value: "Tbolba", label: "Tbolba" },
      ],
    },
   {
    label: "Autre Gouvernorat",
    options: [
      { value: "Béja", label: "Béja" },
        { value: "Bizerte", label: "Bizerte" },
        { value: "Gabès", label: "Gabès" },
        { value: "Gafsa", label: "Gafsa" },
        { value: "Jendouba", label: "Jendouba" },
        { value: "Kairouan", label: "Kairouan" },
        { value: "Kasserine	", label: "Kasserine" },
        { value: "Kebili", label: "Kebili" },
        { value: "Kef", label: "Kef" },
        { value: "Mahdia", label: "Mahdia" },
        { value: "Medenine", label: "Medenine" },
        { value: "Monastir", label: "Monastir" },
        { value: "Nabeul", label: "Nabeul" },
        { value: "Sfax", label: "Sfax" },
        { value: "Sidi Bouzid", label: "Sidi Bouzid" },
        { value: "Siliana", label: "Siliana" },
        { value: "Sousse", label: "Sousse" },
        { value: "Tataouine", label: "Tataouine" },
        { value: "Tozeur", label: "Tozeur" },
        { value: "Zaghouan", label: "Zaghouan" },
    ]
   },
  ];

  let destinations = [
    {
      label: "Aéorport Tunis Carthage",
      options:[
        { value: "TUN", label: "Tunis Airport" },
        // { value: "DJE", label: "Melita" },
        // { value: "MIR", label: "Monastir Airport" },
        // { value: "NBE", label: "Enfidha-Hammamet Int" },
        // { value: "SFA", label: "Sfax El Maou" },
        // { value: "TOE", label: "Tozeur Airport" },
      ]
      },
      {
        label: "Grand Tunis",
        options: [
          { value: "Centre Ville", label: "Centre Ville" },
          { value: "LAC 1", label: "LAC 1" },
          { value: "LAC 2", label: "LAC 2" },
          { value: "LAC 3", label: "LAC 3" },
          { value: "El Kram", label: "El Kram" },
          { value: "La goulette", label: "La goulette" },
          { value: "Sidi Bousaîd", label: "Sidi Bousaîd" },
          { value: "Gammarth", label: "Gammarth" },
          { value: "Carthage", label: "Carthage" },
          { value: "Jardins Carthage", label: "Jardins Carthage" },
          { value: "L'aouina", label: "L'aouina" },
          { value: "La Soukra", label: "La Soukra" },
          { value: "Enkhilet", label: "Enkhilet" },
          { value: "ElGhazela", label: "ElGhazela" },
          { value: "Géant", label: "Géant" },
          { value: "Sidi Thabet", label: "Sidi Thabet" },
          { value: "Sidi Hssin", label: "Sidi Hssin" },
          { value: "Jdaida", label: "Jdaida" },
          { value: "Wed El lil", label: "Wed El lil" },
          { value: "Ettahrir", label: "Ettahrir" },
          { value: "Intilaka", label: "Intilaka" },
          { value: "Ettadhamen", label: "Ettadhamen" },
          { value: "Ibn Khaldoun", label: "Ibn Khaldoun" },
          { value: "Mnihla", label: "Mnihla" },
          { value: "Bardo", label: "Bardo" },
          { value: "Danden", label: "Danden" },
          { value: "Beb El Khadhra", label: "Beb El Khadhra" },
          { value: "Mornaguia", label: "Mornaguia" },
          { value: "Beb Saadoun", label: "Beb Saadoun" },
          { value: "Moncef Bey", label: "Moncef Bey" },
          { value: "El madina el jadida", label: "El madina el jadida" },
          { value: "Ben aarouss", label: "Ben aarouss" },
          { value: "Rades", label: "Rades" },
          { value: "Ezzahra", label: "Ezzahra" },
          { value: "Fouchana", label: "Fouchana" },
          { value: "Jbal Rassas", label: "Jbal Rassas" },
          { value: "Jbal jloud", label: "Jbal jloud" },
          { value: "Hammem lif", label: "Hammem lif" },
          { value: "Borj Esidria", label: "Borj Esidria" },
          { value: "Tbolba", label: "Tbolba" },
        ],
      },
     {
      label: "Autre Gouvernorat",
      options: [
        { value: "Béja", label: "Béja" },
          { value: "Bizerte", label: "Bizerte" },
          { value: "Gabès", label: "Gabès" },
          { value: "Gafsa", label: "Gafsa" },
          { value: "Jendouba", label: "Jendouba" },
          { value: "Kairouan", label: "Kairouan" },
          { value: "Kasserine	", label: "Kasserine" },
          { value: "Kebili", label: "Kebili" },
          { value: "Kef", label: "Kef" },
          { value: "Mahdia", label: "Mahdia" },
          { value: "Medenine", label: "Medenine" },
          { value: "Monastir", label: "Monastir" },
          { value: "Nabeul", label: "Nabeul" },
          { value: "Sfax", label: "Sfax" },
          { value: "Sidi Bouzid", label: "Sidi Bouzid" },
          { value: "Siliana", label: "Siliana" },
          { value: "Sousse", label: "Sousse" },
          { value: "Tataouine", label: "Tataouine" },
          { value: "Tozeur", label: "Tozeur" },
          { value: "Zaghouan", label: "Zaghouan" },
      ]
     },
  ];

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
            className="group mt-8 relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Reserve
          </button>
        </div>
      </form>
    </>
  );
};

export default RideForm;
