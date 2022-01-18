import React from 'react'
import axios from'axios';
import {useState } from 'react';
import './App.css';

function App() {

  const apiKey = "a7cb8a929ea271fa73e0794cab3b6801"
  const [data, setData] = useState()
  const [inputCity, setInputCity] =useState()
  


  const getWeatherDetails = (cityName) =>{
    if (!cityName) return
    const apiURL ="https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey
    axios.get(apiURL).then((res)=>{
      console.log("response", res.data)
      setData(res.data)
    }).catch((err)=>{
      console.log("err", err)
    })
  }
  const handleChangeInput =(e)=>{
    setInputCity(e.target.value)

  }
  const handleSearch =()=>{
    getWeatherDetails(inputCity)
  }
  
  
  return (
   <div className="col-md-12">
     <div className=" weatherBg">
       <h1 className="display-5 fw-bold ">Weather App</h1>
       <div className="d-grid gap-3 col-sm-4  mt-4">
       <input type="text" className="form-control " placeholder='Enter your City Name ' onChange={handleChangeInput}></input>
       <button className="btn btn-primary" type="button" 
       onClick={handleSearch}>Search</button>
        </div>
         </div>
         
       
       {typeof data === "undefined"?(
         <div>
           </div>
         

       ):(
         <div className="  col-md-12  text-center mt-5">
         <div className="shadow rounded weatherResultBox">
          <img className="weatherIcon" src="https://i.pinimg.com/originals/06/c4/f7/06c4f70ec5931e2342e703e8a3f0a253.png" alt=""></img>
             <h5 className="weatherCity">{data?.name}</h5>
             <h6 className="weatherTemp">{((data?.main?.temp) - 273.15).toFixed(2)}	°C</h6>

           </div>

         
         

         </div>)}


   </div>
      



   
  );
}

export default App;
