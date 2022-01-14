

export default function User({user:{id, name}, getUserInfo}){

    return (
        <div>
            {/*<div>{*/}
            {/*    posts.map(value =><Posts key={value.id} post={value} getPosts={getPosts}/>)*/}
            {/*}</div>*/}
            <h2>{id} {name}</h2>
            <button onClick={()=> getUserInfo(id)}>Get info</button>
        </div>
    )
}