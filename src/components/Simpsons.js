
export default function Simpsons({name, surname, age, info, photo}){

    return (
        <div className={'simpson'}>
        <h2>{name} {surname} {age}</h2>
            <p>{info}</p>
            <img src={photo} alt={'simpson'}/>
            <hr/>
        </div>
    )
}