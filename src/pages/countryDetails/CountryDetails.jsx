import React,{useEffect, useState} from "react";
import { useParams, useNavigate } from "react-router-dom";



const CountryDetails = () => {
    const navigate = useNavigate()

    const [countryData, setCountryData] = useState()
    const {name} = useParams()
    console.log(name) 
    
    async function getCountries(){
        const response = await fetch(`https://restcountries.com/v3.1/name/${name}`, {
            method: "GET"
        })
        const data = await response.json()
        setCountryData(data[0])
        console.log(data[0])
    }

    useEffect(() => {
        getCountries()
        //write your code to perform an action here
    },[])
    
    return (
        <div className="px-10 py-5 ">
            <div onClick={() => navigate('/')} className="backButton cursor-pointer inline-flex justify-between px-5 py-3 gap-3" style={{boxShadow: '0  0 8px gray'}}>
                <i class="ri-arrow-left-line"></i>
                <h2 className="">
                    Back
                </h2>
            </div>

            {
                countryData && 

                <div className="flex justify-between items-center">

                    <div>
                        <img src={countryData.flags?.svg} alt="" className="w-full mt-10 " /> 
                    </div>
                    

                    <div className="font-medium w-full gap-9">
                        <h2 className="text-2xl">
                            {countryData.name.common}
                        </h2>
                        <h3 className="flex justify-between">
                            Region: {countryData.region}
                        </h3>
                        <h3 className="flex justify-between">
                            Subregion: {countryData.subregion}
                        </h3>
                        <h3 className="flex justify-between">
                            Capital: {countryData.capital}
                        </h3>
                        <h3 className="flex justify-between">
                            Border: {countryData.borders}
                        </h3>
                        <h3 className="flex justify-between">
                            Currencies: {countryData.name.currencies}
                        </h3>
                        <h3 className="flex justify-between">
                        Top Level Domain: {countryData.tld}
                        </h3>
                    </div>

                </div>
            }
              
        </div>
    )
    
}
export default CountryDetails