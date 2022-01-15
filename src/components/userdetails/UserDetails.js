export default function UserDetails({user:{id, name, username, email, address:{city, suite, street, zipcode, geo:{lat, lng}}, website, phone, company:{companyName,
    catchPhrase}}, getUserId}){
    
    return (
        <div>
            <h2>{id} {name}{username} {email}</h2>
            <p>Address: {city} {suite} {street} {zipcode} {lat} {lng}</p>
            <div>{website} {phone}</div>
            <div>Company: {companyName} {catchPhrase}</div>
            <button onClick={()=>getUserId(id)}>Posts</button>
            
        </div>
    )
}