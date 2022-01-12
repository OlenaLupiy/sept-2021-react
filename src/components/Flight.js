export default function Flight({flight:{mission_name, launch_year, links:{mission_patch}}}){
    
    return (
        <div>

                <h2>{mission_name} {launch_year}</h2>
                <img src={mission_patch} alt="mission_parch"/>


        </div>
    )
}