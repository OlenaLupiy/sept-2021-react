export default function Posts({post:{id, title, body}}){

    return (
        <div>
            <h2>{id} {title}</h2>
            <p>{body}</p>

        </div>
    )
}