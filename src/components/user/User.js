export default function User({user: {id, name, username, email}}) {

    return (
        <div>
            <div>{id} {name} -- {username} --{email}</div>

        </div>
    )
}