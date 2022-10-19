


import { useEffect, useState } from 'react';
import img from '../../assets/icon-cloudy.svg'


export default function Thermometer() {
    const [temerature, setTemperature] = useState()
    const key = "ded41f7b2ed24ea7a3e25145221910";

    useEffect(() => {
        fetch( "http://api.weatherapi.com/v1/current.json?key="+key+"&q=-28.2623,-52.4103")
          .then(res => res.json())
          .then(
            (result) => {
                console.log(result)
                setTemperature(result.current.temp_c)
            }
          )
      }, [])
    return (
        <div className='Thermometer'>
            <span className='Thermometer-local'>Passo Fundo - RS</span>
            <div className='Thermometer-group'>
                <img  className='Thermometer-group__image' src={img} alt="temp icon" />
                <span className='Thermometer-group__temperature'>{temerature}º</span>
            </div>
        </div>
    )
}