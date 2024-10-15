import React, { useState } from 'react'
import Search from '../search/Search';

const Weather = () => {
    const [search, setSearch] = useState("");
    const [weather, setWeather] = useState(null);



    async function weatherData(param) {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=c674e2966b58d6c4d42e63051246d357`)

            const data = await response.json();
            setWeather(data);
            console.log(data);

            
            
        } catch (error) {
            
            console.log(error)
            
        }
        
    }

    async function handleSearch() {
        if(search){
            weatherData(search)
            console.log(search);
        }
        
    }


    return (
        <div style={{backgroundColor : "bisque" , height : "100vh"}}>
            <div>
                <Search
                value = {search}
                onChange = {(e) => setSearch(e.target.value)}
                onClick = {handleSearch}
               
                />
            </div>
            <div>
                {
                    weather && weather.name ? (
                        <div>
                            
                            
                            <p style={{fontSize : "30px", fontWeight: "bold"}}>{weather.name }, {weather.sys.country}</p>
                            <p style={ {fontSize : "20px", fontWeight: "bold" }}>temp : {weather.main.temp}</p>
                            <p style={{}}>humidity : {weather.main.humidity
                            }%</p>
                            <p>Wind Speed : {weather.wind.speed}</p>
                            
                        </div>
                        
                       
                        
                    ) : (
                        <p>No data availble</p>
                    )
                }
                
               
                 
            </div>

        </div>
    )
}
export default Weather;