import User from "../user/User";

export default function Users({users}) {

    return (
        <div>
            {users.map(user => <User key={user.id} user={user}/>)}
        </div>
    )
}