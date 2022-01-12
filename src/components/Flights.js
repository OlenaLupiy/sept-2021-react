import {useEffect, useState} from "react";

import Flight from "./Flight";

export default function Flights(){

    const [flights, setFlights] = useState([]);
    useEffect(()=>{
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(value => value.json())
            .then(flights => {
                setFlights(flights.filter(flight=>flight.launch_year !=='2020'))

            })
    }, [])

    return (
        <div>
            {
                flights.map(value => <Flight key={value.flight_number} flight={value}/>)
            }
        </div>
    )
}