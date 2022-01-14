export default function UserInfo({user:{id, name, username, email, address:{city, suite, zipcode, geo:{lat}}, website, phone, company:{nameCompany, catchPhrase }}}, getPosts){
    
    return (
        <div>
            <h2>{id}. Name: {name} {username}. Email: {email}</h2>
            <p>Address: {city}, {suite} {zipcode} {lat}</p>
            <div>{website} {phone} {nameCompany} {catchPhrase}</div>

            <button onClick={()=>getPosts(id)}>Get posts</button>


        </div>
    )
}