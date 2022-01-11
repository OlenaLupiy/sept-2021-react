import Posts from "../posts/Posts";

export default function User({id, name, surname, email, street, suite, zipcode, lat, phone, website, nameCompany}){
    
    return (
        <div className={'wrap'}>
            <div className={'user'}>
                <h2>{id} --{name}--{surname}--{email}</h2>
                <div>{street} {suite} {zipcode}</div>
                <p>{lat}</p>
                <div>{phone} -- {website} -- {nameCompany}</div>

            </div>
            
        </div>
    )
}