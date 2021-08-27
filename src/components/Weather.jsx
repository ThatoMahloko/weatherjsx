import React, { useState } from 'react'
import DisplayWeather from './DisplayWeather';
import './weather.css'
function Weather() {
    const APIKEY = "ad5413a59fc9e0b4ccf7645a50e15a64";

    const [getForm, setForm] = useState({
        city: "",
        country: "",
    });

    const[getWeather, setWeather] = useState([])

    async function weatherData(e){
        e.preventDefault()
        if(getForm.city===""){
            alert("Add Values")
        }else{
            const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${getForm.city},${getForm.country}&appid=${APIKEY}`)
            .then((res) => res.json())
        .then((data) => data); 

        setWeather({data:data});
        }
    }

    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        if (name === "city") {
            setForm({ ...getForm, city: value });
        }
        if (name === "country") {
            setForm({ ...getForm, country: value })
        }
        console.log(getForm.city, getForm.country)
    }

    return (
        <div>
            <span className="title"> Weather App </span>
            <br />

            <form>
                <input type="text" name="city" placeholder="city" onChange={e => handleChange(e)} />
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                <input type="text" name="country" placeholder="country" onChange={e => handleChange(e)} />
            <button className="getweather" onClick={e=>weatherData(e)}>SUBMIT</button>
            </form>
            {
                getWeather.data != undefined ?
                    <div>
                        <DisplayWeather data={getWeather.data}/>
                    </div>
                    :null
            }
        </div>
    )
}

export default Weather

