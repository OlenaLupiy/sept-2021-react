import Form from "./components/Form/Form";
import {Cars} from "./components/Cars/Cars";
import {useState} from "react";

export default function App(){
    const [car, setCar] = useState({});

    // const update = car =>{
    //     setCar(car)
    // }
    return (
        <div>
            <Form update={setCar()}/>
            <Cars car={car}/>
        </div>
    )
}