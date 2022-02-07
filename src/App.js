// import Form from "./components/Form/Form";
// import Cars from "./components/Cars/Cars";
// import {useState} from "react";
//
// function App() {
//     const [car, setCar] = useState(null);
//     const [carForUpdate, setCarForUpdate] = useState({});
//
//     return (
//         <>
//             <Form update={setCar} carForUpdate={carForUpdate}/>
//             <Cars trigger={car} update={setCar} setCarForUpdate={setCarForUpdate}/>
//         </>
//     );
// }
//
// export default App;
import React, {useState} from 'react';
import Form from "./components/Form/Form";
import Cars from "./components/Cars/Cars";

const App = () => {
    const [trigger, setTrigger] = useState(null);
    const [carForUpdate, setCarForUpdate] = useState({});

    const update = (data) => {
        setTrigger(data)
    }
    return (
        <div>
            <Form update={update} carForUpdate={carForUpdate}/>
            <Cars trigger={trigger} update={update} setCarForUpdate={setCarForUpdate}/>
        </div>
    );
};

export default App;