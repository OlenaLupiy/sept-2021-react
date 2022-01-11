export default function Comment({comment}){
    
    return (
        <div>
            <h2>{comment.id}-{comment.name}</h2>
            <p>{comment.email}</p>
            <div>{comment.body}</div>
        </div>
    )
}