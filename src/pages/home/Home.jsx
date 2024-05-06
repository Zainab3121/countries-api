import React,{useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const [loading, setLoading] = useState(false)
    const [search, setSearch] = useState('')

    const [regionValue, setRegionValue] = useState('')

    const [allcountries, setAllcountries] = useState([])
    const navigate = useNavigate()

    async function getCountries(){
        setLoading(true)
        const response = await fetch(`https://restcountries.com/v3.1/all`, {
            method: "GET"
        })
        const data = await response.json()
        if (response) setLoading(false) 
        setAllcountries(data)
        console.log(data)
    }

    async function getRegion(region){
        if (region === '' ) {
            getCountries() 
            return
        }
        console.log(region)
        const response = await fetch (`https://restcountries.com/v3.1/region/${region}`, {
            method: "GET"
        })
        const data = await response.json()
        setAllcountries(data)
        console.log(data)
        


    }

    useEffect(() => {
        getCountries()
        //write your code to perform an action here
    },[])

    return (
        <div className=" home px-10 py-5 text text-sm bg-white-200 mt-12" >
            {loading &&
                <img src="/download.png" alt="" />
            }
           <div className="flex justify-between">
                <div>
                    <i class="search ri-search-2-line bg-white px-3 py-[11px] rounded-l-[5px]" style={{boxShadow: '0  0 8px gray'}}></i>
                    <input type="text" onChange={e => setSearch(e.target.value)} placeholder=" Search for a country..." className="bg-white pl-0 pr-[8rem] py-2 outline-none rounded-r-[5px]" style={{boxShadow: '0  0 10px gray'}}/>
                </div>

                <div>
                    <select onClick={() => getRegion(regionValue)} onChange={e => setRegionValue(e.target.value) } name="keys" id="keys" className="outline-none  h-10 pl-4 pr-[3rem]"style={{boxShadow: '0  0 8px gray'}}> == $0
                        <option value="">Filter by region</option>
                        <option value="africa">Africa</option>
                        <option value="america">America</option>
                        <option value="asia">Asia</option>
                        <option value="europe">Europe</option>
                        <option value="oceania">Oceania</option>
                    </select>
                </div>
           </div>

            <div className="countriesContainer grid grid-cols-4 py-[50px] px-[20px] gap-12 bg-white" >
                {
                    allcountries && allcountries.filter(country => {
                        if (search === '') return country
                        else if (country.name.common.toLowerCase().includes(search.toLowerCase())) return country
                    })
                    .map((country) => (
                        <div className="h-[80%] cursor-pointer" onClick={() => navigate(`/countryDetail/${country.name.common}`)} style={{boxShadow: '0  0 10px gray'}}>
                            <img src={country.flags.svg} alt="" className="w-[100%] h-[50%] aspect-square object-cover" />
                            <div className="p-3 flex flex-col gap-2">
                                <h2>
                                    {country.name.common}
                                </h2>
                                <h3 className="">
                                Population: {country.population}
                                </h3>
                                <h3>
                                    Region: {country.region}
                                </h3>
                                <h3>
                                Capital: {country.capital}
                                </h3>
                            </div>
                           
                        </div>
            
                    ))
                }

            </div>
            
            
        </div>
    )

}

export default Home