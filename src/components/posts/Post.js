export default function Post({id, title, body}){

    return (
        <div>
            <div className={'post'}>
                <h3>id:{id}</h3>
                <div>Title: {title}
                <p>{body}</p></div>
            </div>
        </div>
    )
}