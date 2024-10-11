import React, { useState } from 'react'
import Search from '../search/Search';

const Weather = () => {
    const [search, setSearch] = useState("");

    async function weatherData(param) {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=c674e2966b58d6c4d42e63051246d357`)

            const data = await response.json();

            console.log(data)
            
        } catch (error) {
            
            console.log(error)
            
        }
        
    }
    return (
        <div>
            <div>
                <Search 
               
                />
            </div>
            <div>
                <p>{Weather?.name}</p>
                
               
                 
            </div>

        </div>
    )
}
export default Weather;