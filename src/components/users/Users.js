import {useEffect, useState} from "react";
import {getUsers} from "../../services/user.service";
import User from "../user/User";


export default function Users(){
    const [users, setUsers] = useState([]);
    useEffect(()=>{
        getUsers().then(value =>setUsers([...value]))
    }, []);

    return (
        <div>
            {
                users.map(user=><User key={user.id} id={user.id} name={user.name} surname={user.surname} email={user.email}
                                      street={user.address.street} suite={user.address.suite} zipcode={user.address.zipcode} lat={user.address.geo.lat}
                phone={user.phone} website={user.website} nameCompany={user.company.name}/>)
            }
        </div>
    )
}