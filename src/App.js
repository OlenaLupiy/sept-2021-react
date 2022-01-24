import Form from "./components/Form/Form";
import {Cars} from "./components/Cars/Cars";
import {useState} from "react";

export default function App(){
    const [car, setCar] = useState({});
    const [carForUpdate, setCarForUpdate] = useState({});


    return (
        <div>
            <Form update={setCar} carForUpdate={carForUpdate}/>
            <Cars trigger={car} update={setCar} setCarForUpdate={setCarForUpdate}/>
        </div>
    )
}