import React from 'react'



const Search=({value, onChange, onClick})=> {
    return (
        <div>
            <div>
                <input 
                style={{margin : "20px 10px 20px 0px",  
                padding: "20px 400px 20px 10px", 
                borderRadius: "4px"}} 
                type='text' 
                placeholder='Enter Location'
                value={value}
                onChange={onChange}
                 />
                <button 
                style={{padding: "20px 40px 20px 50px",
                 borderRadius: "4px", 
                 backgroundColor : "black", 
                 color: "white", 
                 fontSize: "15px"}} 
                 onClick={onClick} >Search</button>
            </div>
        </div>
    )
}
export default Search;

