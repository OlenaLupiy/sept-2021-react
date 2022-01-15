import css from "./User.module.css"

export default function User({user,getUser}){
    const {id, name} = user;
    return (
        <div className={css.wrap}>
            <div className={css.divName}>{id}) {name}</div>
            <button onClick={()=>getUser(user)}>Details</button>
        </div>
    )
}