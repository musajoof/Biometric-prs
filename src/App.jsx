import React, { useState } from "react";
import GambiaFlag from "./assets/Flag_of_The_Gambia.svg.png";
import CoatOfArm from "./assets/Coat_of_arms.svg.png";
import UserImage from "./assets/user.svg"
import Fingerprint from "./assets/fingerprint.svg"
import Qrcode from "./assets/qr.jpg"

function App() {

  const payments = [
    {
      token: "000001",
    },
    {
      token: "000002",
    },
    {
      token: "000003",
    },
    {
      token: "000004",
    },
    {
      token: "000005",
    },
  ]

  const [sidebarStep, setSidebarStep] = useState(1);
  const [currentStep, setCurrentStep] = useState(1);
  const [age, setAge] = useState("");
  const [ageError, setAgeError] = useState("");
  const [paymentError, setPaymentErro] = useState("");
  const [name, setName] = useState("")
  const [firstName, setFirstName] = useState("")
  const [maritalStatus, setMaritalStatus] = useState("")
  const [placeOfBirth, setPlaceOfBirth] = useState()
  const [birthNationality, setBithNationality] = useState("")
  const [region, setRegion] = useState("")
  const [city, setCity] = useState("")
  const [gender, setGender] = useState("")
  const [height, setHeight] = useState("")
  const [contryBy, setContryBy] = useState("")
  const [contry, setContry] = useState("")

  const goToStep = (step) => {
    setCurrentStep(step);
    setSidebarStep(step);
  };

  const nextStep = () => {
    const isValidAge = validateAge(age);

    if (isValidAge) {
      setAgeError("");
      setCurrentStep((prevStep) => prevStep + 1);
      setSidebarStep((prevStep) => prevStep + 1);
    } else {
      setAgeError("Please enter a valid age.");
      setPaymentErro("Enter valid payment")
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prevStep) => prevStep - 1);
      setSidebarStep((prevStep) => prevStep - 1);
    }
  };

  const cancel = () => {
    setCurrentStep(1);
    setSidebarStep(1);
    setAge("");
    setAgeError("");
    setName("");
    setBithNationality("");
    setCity("");
    setContry("");
    setContryBy("");
    setFirstName("")
    setGender("");
    setHeight("");
    setMaritalStatus("")
  };

  const validateAge = (age) => {
    const parsedAge = parseInt(age, 10);

    if (isNaN(parsedAge) || parsedAge <= 0) {
      return false;
    }

    return true;
  };

  const stepTitles = ["Enrollment Type", "Verify Payment", "Biography", "Capture Photo", "Applicant Approval"];

  return (
    <>
      <div className="p-4 ">
        <div className="flex justify-between items-start space-x-4">
          <aside className="border-none w-1/4  rounded-md p-3 bg-white">
            <div className="block space-y-3">
              {stepTitles.map((title, index) => (
                <div
                  key={index}
                  className="flex justify-start items-center"
                >
                  <div
                    className={`rounded-full w-10 h-10 border-white bg-blue-800 p-2 text-center mr-2 text-lg text-white ${
                      sidebarStep === index + 1
                        ? "bg-lime-400 text-black"
                        : ""
                    }`}
                    onClick={() => goToStep(index + 1)}
                  >
                    {index + 1}
                  </div>
                  <div onClick={() => goToStep(index + 1)}>
                    <h2>{title}</h2>
                  </div>
                </div>
              ))}
            </div>
          </aside>

          {currentStep === 1 && (
            <div className="bg-slate-50 p-2 w-[1500px] ">
              <div className="flex justify-between items-center bg-white p-2">
                <img className="w-20" src={GambiaFlag} alt={"Gambia flag"} />
                <h1 className="font-bold text-lg">Gambia Biometric Passport</h1>
                <img className="w-20" src={CoatOfArm} alt={"Coat of arm"} />
              </div>
              <form className="w-full bg-slate-50 border rounded-md">
                <div>
                  <div className="space-y-4 w-1/2 h- m-auto mt-12">
                    <div>
                      <label
                        className="mr-4 uppercase font-bold text-slate-800"
                        htmlFor="age"
                        id="age"
                      >
                        Age
                      </label>
                      <input
                        type="text"
                        name="age"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        className={`outline-none w-48 h-10 border-2 rounded-md text-left p-2 font-bold ${
                          ageError ? "border-red-500" : ""
                        }`}
                      />
                      {ageError && (
                        <p className="text-red-500 mt-2">{ageError}</p>
                      )}
                    </div>

                    <div>
                      <label
                        className="mr-3 uppercase font-bold text-slate-800"
                        htmlFor="passport"
                        id="passport"
                      >
                        Type
                      </label>
                      <select
                        name="passport"
                        id="passport"
                        className="outline-none w-48 h-10 border-2 rounded-md text-center font-bold"
                      >
                        <option value=""></option>
                        <option
                          className="text-green-700 font-bold"
                          value="Ordinary"
                        >
                          Ordinary
                        </option>
                        <option
                          className="text-slate-800 font-bold"
                          value="Service"
                        >
                          Service
                        </option>
                        <option
                          className="text-red-600 font-bold"
                          value="Diplomatic"
                        >
                          Diplomatic
                        </option>
                      </select>
                    </div>
                  </div>
                  <div className="p-4 mt-64 space-x-5 items-baseline">
                    <button
                      className="border w-[300px] h-10 rounded-md font-bold text-lg bg-slate-200 text-slate-900 capitalize"
                      onClick={cancel}
                    >
                      Cancel
                    </button>
                    <button
                      onClick={prevStep}
                      className="border w-[300px] h-10 rounded-md font-bold text-lg bg-slate-200 text-slate-900 capitalize"
                    >
                      Previous
                    </button>
                    <button
                      onClick={nextStep}
                      className="border w-[300px] h-10 rounded-md font-bold text-lg bg-slate-200 text-slate-900 capitalize"
                    >
                      Next
                    </button>
                  </div>
                </div>
              </form>
            </div>
          )}

          {/* {The Payment } */}  
          {currentStep === 2 && (
            <div className="bg-slate-50 w-[1500px] p-2    ">
              <div className="flex justify-between items-center bg-white p-2">
                <img className="w-20" src={GambiaFlag} alt={"Gambia flag"} />
                <h1 className="font-bold text-lg">Gambia Biometric Passport</h1>
                <img className="w-20" src={CoatOfArm} alt={"Coat of arm"} />
              </div>
              <form className="w-full  rounded-md ">
                <div className=" w-full mt-32 text-center">
                  <label 
                    className={`block mb-2 text-center ${ageError ? "bg-red-400 " : ""}`}
                    htmlFor="payment" 
                    id="payment">
                    Please scan or type payment
                  </label>
                  <input
                    className={`w-3/4 h-20 text-3xl font-semibold outline-none border-2 rounded-lg p-2 ${ageError ? "border-red-500 bg-red-400" : ""}`}
                    type="text"
                    name="payment"
                    value={payments.token}
                  />
                  {paymentError && (
                    <p className="text-red-500">{paymentError}</p>
                  )}
                </div>

                <div className="p-2 space-x-5 mt-44">
                  <button
                    className="border w-[300px] h-10 rounded-md font-bold text-lg bg-slate-200 text-slate-900 capitalize"
                    onClick={cancel}
                  >
                    Cancel
                  </button>
                  <button
                    onClick={prevStep}
                    className="border w-[300px] h-10 rounded-md font-bold text-lg bg-slate-200 text-slate-900 capitalize"
                  >
                    Previous
                  </button>
                  <button
                    onClick={nextStep}
                    className="border w-[300px] h-10 rounded-md font-bold text-lg bg-slate-200 text-slate-900 capitalize"
                  >
                    Next
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* {The Biography } */}
          {currentStep === 3 && (
            <div className="bg-slate-50 p-2 ">
              <div className="flex justify-between items-center bg-white p-2">
                <img className="w-20" src={GambiaFlag} alt={"Gambia flag"} />
                <h1 className="font-bold text-lg">Gambia Biometric Passport</h1>
                <img className="w-20" src={CoatOfArm} alt={"Coat of arm"} />
              </div>
                <form className="w-3/4  rounded-md p-2 pt-10" action="">
                  <div className="border p-2 pt-20 w-[1000px] bg-slate-50">
                  <h1 className="relative -top-24 bg-white w-[130px]">Biographical Data </h1>
                    <div className="border p-3 ">
                    <h1 className="relative -top-6 bg-white w-[100px]">Personal Data </h1>
                    <div className="w-full border flex justify-between items-start p-3">
                      <div className=" firstpart w-1/2 ">
                        <div className="w-full flex items-center space-x-2 mt-2">
                          <label htmlFor="lastName" id="lastName" className="w-1/4">Last Name</label>
                          <input
                            className={`outline-none uppercase border border-slate-700 rounded-md p-2 text-lg w-3/4 h-10 ${
                              ageError ? "border-red-500 bg-red-400" : ""
                            }`}
                            type="text"
                            name="lastName"
                            onChange={(e) => setName(e.target.value)}
                            required
                          />
                        </div>
                        <div className="w-full flex items-center space-x-2 mt-2">
                          <label htmlFor="birthDate" id="birthDate" className="w-1/4">Birth Date</label>
                          <input 
                            className={`outline-none border border-slate-700 rounded-md p-2 text-lg w-[255px] h-10 ${ageError ? "border-red-500 bg-red-400" : ""}`} 
                            type="text" 
                            name="birthDate" 
                            onChange={(e) => setBirthDate(e.value.target)}
                            required
                          />
                          <span>DD/MM/YY</span>
                        </div>
                        <div className="w-full flex items-center space-x-2 mt-2">
                          <label htmlFor="marital" id="marital" className="w-1/4">Marital Status</label>
                          <select 
                            className={`outline-none border border-slate-700 rounded-md p-2 text-lg w-1/4 h-10 ${ageError ? "border-red-500 bg-red-400" : ""}`}  
                            name="marital" 
                            id="marital" 
                            onChange={(e) => setMaritalStatus(e.value.target)}
                            required
                          >
                            <option value="nill"></option>
                            <option value="male">Single</option>
                            <option value="female">Mariage</option>
                            <option value="divoce">Divoce</option>
                            <option value="widow">Widow</option>
                          </select>
                        </div>
                        <div className="w-full flex items-center space-x-2 mt-2">
                          <label htmlFor="birthPlace" id="birthPlace" className="w-1/4">Birth Place</label>
                          <input 
                            className={`outline-none uppercase border border-slate-700 rounded-md p-2 text-lg w-[255px] h-10 ${ageError ? "border-red-500 bg-red-400" : ""}`}
                            type="text" 
                            name="birthPlace" 
                            onChange={(e) => setPlaceOfBirth(e.value.target)}
                            required
                          />
                          <input type="checkbox" name="checkbox" id="checkbox" className=""/>Unknown
                        </div>
                        <div className="w-full flex items-center space-x-2 mt-2">
                          <label htmlFor="nationality" id="nationality" className="w-1/4">Birth Nationality</label>
                          <select 
                            className={`outline-none border border-slate-700 rounded-md p-2 text-lg w-[345px] h-10 ${ageError ? "border-red-500 bg-red-400" : ""}`} 
                            name="nationality" 
                            id="nationality" 
                            onChange={(e) => setBithNationality(e.value.target)}
                            required
                          >
                            <option value="nill"></option>
                            <option value="male">Gambia</option>
                            <option value="female">Senegal</option>
                            <option value="uk">United Kingdom</option>
                            <option value="us">United State</option>
                          </select>
                        </div>
                        <div className="w-full flex items-center space-x-2 mt-2">
                          <label htmlFor="profession" id="profession" className="w-1/4">Profession</label>
                          <input className="outline-none uppercase border border-slate-700 rounded-md p-2 text-lg w-3/4 h-10" type="text" name="profession" />
                        </div>
                      </div>

                      <div className="secondpart w-2/5">
                        <div className="w-full flex items-center space-x-2 mt-2">
                          <label htmlFor="firstName" id="firstName" className="w-1/4">First Name</label>
                          <input 
                            className={`outline-none uppercase border border-slate-700 rounded-md p-2 text-lg w-[255px] h-10 ${ageError ? "border-red-500 bg-red-400" : ""}`} 
                            type="text" 
                            name="firstName" 
                            onChange={(e) => setFirstName(e.value.target)}
                            required
                          />
                        </div>
                        <div className="w-full flex items-center space-x-2 mt-2">
                          <label htmlFor="gender" id="geder" className="w-1/4">Gender</label>
                          <select 
                            className={`outline-none border border-slate-700 rounded-md p-2 text-lg w-1/4 h-10 ${ageError ? "border-red-500 bg-red-400" : ""}`} 
                            name="gender" 
                            id="gender" 
                            onChange={(e) => setGender(e.value.target)}
                            required
                          >
                            <option value="nill"></option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                          </select>
                        </div>
                        <div className="w-full flex items-center space-x-2 mt-2">
                          <label htmlFor="height" id="height" className="w-1/4">Height</label>
                          <input 
                            className={`outline-none uppercase border border-slate-700 rounded-md p-2 text-lg w-1/4 h-10 ${ageError ? "border-red-500 bg-red-400" : ""}`} 
                            type="text" 
                            name="height" 
                            placeholder="_______" 
                            onChange={(e) => setHeight(e.value.target)}
                            required
                          />
                          <span>CM</span>
                        </div>
                        <div className="w-full flex items-center space-x-2 mt-2">
                          <label htmlFor="firstName" id="firstName" className="w-1/4">Birth Contry</label>
                          <select 
                            className="outline-none border border-slate-700 rounded-md p-2 text-lg w-[255px] h-10 " 
                            name="marital" 
                            id="marital"
                            onChange={(e) => setBirthCountry(e.value.target)}
                            required
                          >
                            <option value="nill"></option>
                            <option value="male">Gambia</option>
                            <option value="female">Senegal</option>
                            <option value="uk">United Kingdom</option>
                            <option value="us">United State</option>
                          </select>
                        </div>
                        <div className="w-full flex items-center space-x-2 mt-2">
                          <label htmlFor="bithcontry" id="bithcontry" className="w-1/4"> Contry By</label>
                          <select 
                            className={`outline-none border border-slate-700 rounded-md p-2 text-lg w-[255px] h-10 ${ageError ? "border-red-500 bg-red-400" : ""}`} 
                            name="bithcontry" 
                            id="bithcontry" 
                            onChange={(e) => setContryBy(e.value.target)}
                            required
                          >
                            <option value="nill"></option>
                            <option value="male">Birth</option>
                            <option value="female">Decent</option>
                            <option value="uk">Naturization </option>
                            <option value="us">marriage </option>
                          </select>
                        </div>
                        <div className="w-full flex items-center space-x-2 mt-2">
                          <label htmlFor="idnumber" id="idnumber" className="w-1/4">ID Number</label>
                          <input 
                            className="outline-none border border-slate-700 rounded-md p-2 text-lg w-[255px] h-10 "
                            type="text" 
                            name="idnumber" 
                            onChange={(e) => setIdNumber(e.value.target)}
                            required
                          />
                        </div>
                      </div>
                      </div>
                    </div>

                    <div className=" border w-full mt-3 p-3">
                    <h1 className="relative -top-6 bg-white w-40">Address (residence)</h1>
                    <div className=" flex justify-between items-start">
                      <div className="first w-1/2">
                      <div className="w-full flex items-center space-x-2 mt-2">
                          <label htmlFor="region" id="region" className="w-1/4"> Region</label>
                          <select 
                            className={`outline-none border border-slate-700 rounded-md p-2 text-lg w-1/2 h-10 ${ageError ? "border-red-500 bg-red-400" : ""}`}
                            name="region" 
                            id="region" 
                            onChange={(e) => setRegion(e.value.target)}
                            required
                          >
                            <option value="nill"></option>
                            <option value="male">Banjul</option>
                            <option value="female">Greater Banjul</option>
                            <option value="uk">West Cost Region </option>
                            <option value="us">North Bank Region </option>
                            <option value="us">Upper River Region </option>
                            <option value="us">Central River Region </option>
                          </select>
                        </div>
                        <div className="w-full flex items-center space-x-2 mt-2">
                          <label htmlFor="city" id="city" className="w-1/4"> City</label>
                          <select 
                            className={`outline-none border border-slate-700 rounded-md p-2 text-lg w-1/3 h-10 ${ageError ? "border-red-500 bg-red-400" : ""}`} 
                            name="city" 
                            id="city"
                            onChange={(e) => setCity(e.value.target)}
                            required
                          >
                            <option value="nill"></option>
                            <option value="male">Banjul</option>
                            <option value="female">Serrekunda</option>
                            <option value="uk">Lamin </option>
                            <option value="us">Basse </option>
                            <option value="us">Bansang </option>
                            <option value="us">Essau </option>
                          </select>
                        </div>
                        <div className="w-full flex items-center space-x-2 mt-2">
                          <label htmlFor="street" id="street" className="w-1/4">Street & House Number</label>
                          <input className={`outline-none uppercase border border-slate-700 rounded-md p-2 text-lg w-[255px] h-10 ${ageError ? "border-red-500 bg-red-400" : ""}`} type="text" name="street" />
                        </div>
                        <div className="w-full flex items-center space-x-2 mt-2">
                          <label htmlFor="telephone" id="telephone" className="w-1/4">Telephone Number</label>
                          <input className="outline-none border border-slate-700 rounded-md p-2 text-lg w-3/4 h-10" type="text" name="telephone" />
                        </div>
                      </div>
                      <div className="second w-2/5">
                      <div className="w-full flex items-center space-x-2 mt-2">
                          <label htmlFor="department" id="department" className="w-1/4"> Department</label>
                          <select className="outline-none border border-slate-700 rounded-md p-2 text-lg w-1/3 h-10" name="department" id="department">
                            <option value="nill"></option>
                            <option value="male">Police</option>
                            <option value="female">Immigration</option>
                            <option value="uk">PIU </option>
                            <option value="us">GAF </option>
                            <option value="us">GPA </option>
                            <option value="us">GRA </option>
                          </select>
                        </div>
                        <div className="w-full flex items-center space-x-2 mt-2">
                          <label htmlFor="commune" id="commune" className="w-1/4">Commune</label>
                          <input className="outline-none uppercase border border-slate-700 rounded-md p-2 text-lg w-3/4 h-10" type="text" name="commune" />
                        </div>
                        <div className="w-full flex items-center space-x-2 mt-2">
                          <label htmlFor="contry" id="contry" className="w-1/4"> Contry</label>
                          <select 
                            className={`outline-none border border-slate-700 rounded-md p-2 text-lg w-3/4 h-10 ${ageError ? "border-red-500 bg-red-400" : ""}`} 
                            name="contry" 
                            id="contry"
                            onChange={(e) => setContry(e.value.target)}
                            required
                          >
                            <option value="nill"></option>
                            <option value="male">Gambia</option>
                            <option value="female">Senegal</option>
                            <option value="uk">United Kingdom</option>
                            <option value="us">United State</option>
                          </select>
                        </div>
                        <div className="w-full flex items-center space-x-2 mt-2">
                          <label htmlFor="email" id="email" className="w-1/4">Email</label>
                          <input className="outline-none border border-slate-700 rounded-md p-2 text-lg w-3/4 h-10" type="email" name="email" id="email"/>
                        </div>
                      </div>
                      </div>
                    </div>
                      <div className="mt-3 border p-3 space-x-2">
                        <h1 className="relative -top-6 bg-white w-24">Request Type</h1>
                        <input type="checkbox" name="new" id="new" /><span>New Passport</span>
                        <input type="checkbox" name="new" id="new" /><span>Renewal</span>
                        <input type="checkbox" name="new" id="new" /><span>Lost/Stolen</span>
                        <input type="checkbox" name="new" id="new" /><span>Urgent</span>
                      </div>

                    <div className="p-2 space-x-5 mt-6">
                        <button
                          className="border w-[300px] h-10 rounded-md font-bold text-lg bg-slate-200 text-slate-900 capitalize"
                            onClick={cancel}
                        >
                          Cancel
                        </button>
                        <button
                          onClick={prevStep}
                            className="border w-[300px] h-10 rounded-md font-bold text-lg bg-slate-200 text-slate-900 capitalize"
                        >
                          Previous
                        </button>
                        <button
                          onClick={nextStep}
                            className="border w-[300px] h-10 rounded-md font-bold text-lg bg-slate-200 text-slate-900 capitalize"
                        >
                          Next
                        </button>
                    </div>
                  </div>
                </form>
            </div>
          )}

          {/* {The Photo } */}
          {currentStep === 4 && (
            <div className="bg-slate-50 p-2 w-[1500px]">
              <div className="flex justify-between items-center bg-white p-2 mb-5">
                <img className="w-20" src={GambiaFlag} alt={"Gambia flag"} />
                <h1 className="font-bold text-lg">Gambia Biometric Passport</h1>
                <img className="w-20" src={CoatOfArm} alt={"Coat of arm"} />
              </div>
              <div className="border p-2 pt-20 w-full bg-slate-50">
                <h1 className="relative -top-24 bg-white w-[110px]">Capture Photo </h1>
              <div className="border p-3 -mt-14">
                  <h1 className="relative -top-6 bg-white w-[145px]">Personal Informaton </h1>
                  <form className="w-full  rounded-md p-2 pt-10" action="">
                    <div className="flex justify-center items-center mr-36 ">
                      <div className="w-14 h-14 bg-white">
                        <img className="w-14" src={Fingerprint} alt={"fingerprint"} />
                      </div>
                      <div className=" ml-5">
                        <div className="flex space-x-3">
                          <span className="w-24">Name</span>
                          <span>Joof</span>
                        </div>
                        <div className="flex space-x-3">
                          <span className="w-24">First Nmae</span>
                          <span>Musa</span>
                        </div>
                        <div className="flex space-x-3">
                          <span className="w-24"></span>
                          <span></span>
                        </div>
                        <div className="flex space-x-3">
                          <span className="w-24">Date of birth</span>
                          <span>01/01/1989</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center gap-x-5 mt-16">
                      <div className="border h-52 w-1/4 p-2 text-center">
                        <input type="checkbox" name="file" id="file" />
                        <span className="ml-3">Use backup image source</span>
                        <button className="bg-slate-200 mt-16 p-3 rounded-md" type="submit">Capture photo</button>                       
                      </div>
                      <div className="border h-52 w-1/4">
                        <img className="w-52" src={UserImage} alt={"user image"} />
                      </div>
                      <div className="border h-52 w-1/2 bg-white">
                        <h2 className="relative bottom-7">Image processing result</h2>
                      </div>
                    </div>
                    <div className="p-2 space-x-5 mt-6">
                        <button
                          className="border w-[300px] h-10 rounded-md font-bold text-lg bg-slate-200 text-slate-900 capitalize"
                            onClick={cancel}
                        >
                          Cancel
                        </button>
                        <button
                          onClick={prevStep}
                          className="border w-[300px] h-10 rounded-md font-bold text-lg bg-slate-200 text-slate-900 capitalize"
                        >
                          Previous
                        </button>
                        <button
                          onClick={nextStep}
                            className="border w-[300px] h-10 rounded-md font-bold text-lg bg-slate-200 text-slate-900 capitalize"
                        >
                          Next
                        </button>
                    </div>
                  </form>
              </div>
              </div>
            </div>
          )}


          {/* {Approval Stage} */}
          {currentStep === 5 && (
            <div className="bg-slate-50 p-2 w-[1500px]">
              <div className="flex justify-between items-center bg-white p-2 mb-5">
                <img className="w-20" src={GambiaFlag} alt={"Gambia flag"} />
                <h1 className="font-bold text-lg">Gambia Biometric Passport</h1>
                <img className="w-20" src={CoatOfArm} alt={"Coat of arm"} />
              </div>
              <div className="border p-2 pt-5 w-full bg-slate-50">
                <h1 className="relative -top-8 bg-white w-[150px]">Personal Information </h1>
              <form  className="w-full  rounded-md p-2 pt-10" action="">
                <div className="flex justify-center items-center mr-36 ">
                  <div className="border h-52 w-1/4 bg-white">
                    <img className="w-52" src={UserImage} alt={"user image"} />
                  </div>
                  <div className=" ml-5">
                    <div className="flex space-x-3">
                      <span className="w-24">Name</span>
                      <span>Joof</span>
                    </div>
                    <div className="flex space-x-3">
                      <span className="w-24">First Nmae</span>
                      <span>Musa</span>
                    </div>
                    <div className="flex space-x-3">
                      <span className="w-24"></span>
                      <span></span>
                    </div>
                    <div className="flex space-x-3">
                      <span className="w-24">Date of birth</span>
                      <span>01/01/1989</span>
                    </div>
                  </div>
                </div>
                <h2 className="mt-2">Result</h2>
                <button className="w-full bg-slate-200 mt-5 font-semibold p-1 rounded-md" type="button"  title="click capture to capture Applicant signature">Capture
                </button>
                <div className="mt-10">
                  <div className="bg-gray-400 w-full h-64 p-1">
                    <div className="bg-white w-48 h-full m-auto p-2">
                      <div className="flex justify-between items-center bg-white p-1 gap-x-1 border mb-2">
                        <img className="w-6" src={GambiaFlag} alt={"Gambia flag"} />
                        <h1 className="font-bold text-[8px]">Gambia Biometric Passport Enrollment Receipt</h1>
                        <img className="w-6" src={CoatOfArm} alt={"Coat of arm"} />
                      </div>
                      <div className="text-xs border p-2">
                        <div className="flex space-x-3 ">
                        <span className="w-24">Name</span>
                        <span>Joof</span>
                        </div>
                        <div className="flex space-x-3">
                          <span className="w-24">First Nmae</span>
                          <span>Musa</span>
                        </div>
                        <div className="flex space-x-3">
                          <span className="w-24"></span>
                          <span></span>
                        </div>
                        <div className="flex space-x-3">
                          <span className="w-24">Date of birth</span>
                          <span>01/01/1989</span>
                        </div>
                      </div>
                      <div className="text-[5px] mt-3">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quaerat assumenda quod perferendis, velit labore libero, eum amet nostrum eligendi dolores officiis numquam similique? Assumenda ex illum necessitatibus consectetur nisi?
                      </div>
                      <div className="w-28 h-7 m-auto mt-3 border bg-white"></div>
                      <h2 className="text-[7px] text-center">Applicant's signature</h2>
                      <div className="mt-1  w-4/5 m-auto">
                        <img className="w-full h-5" src={Qrcode} alt="" />
                        <span></span>
                      </div>
                      <div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-2 space-x-5 mt-6">
                   <button
                     className="border w-[300px] h-10 rounded-md font-bold text-lg bg-slate-200 text-slate-900 capitalize"
                       onClick={cancel}
                   >
                    Cancel
                  </button>
                  <button
                    onClick={prevStep}
                    className="border w-[300px] h-10 rounded-md font-bold text-lg bg-slate-200 text-slate-900 capitalize"
                   >
                    Previous
                  </button>
                  <button
                    onClick={nextStep}
                      className="border w-[300px] h-10 rounded-md font-bold text-lg bg-slate-200 text-slate-900 capitalize"
                   >
                    Next
                   </button>
                </div>
              </form>
              </div>
            </div>
          )}
        </div>

      </div>
    </>
  );
}

export default App;
