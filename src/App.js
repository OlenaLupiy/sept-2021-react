import My from "./components/My";
import {useState} from "react";
import Users from "./components/Users";
//const user = {name:'Vasya', age:16}
// export default function App(){
//
//     return (
//         <div>
//             <My>
//                 {user}
//                 text
//             </My>
//         </div>
//     )
// }

// export default function App() {
//     //let greeting = 'hello';
//     const [greeting, setGreeting] = useState('hello');
//     const adder = () => {
//         setGreeting(greeting + '!')
//
//     }
//
//
//     return (
//         <div>
//             <button onClick={adder}>Click</button>
//             {greeting}
//         </div>
//     )
// }

// export default function App(){
//
//     return (
//         <div>
//             <Users/>
//         </div>
//     )
// }
export default function App(){


    return (
        <div>
            <Users/>

        </div>
    )
}