import {IUser} from './interfaces/user.interface'
class Mission {
    mission_name: string;
    launch_date_local: string;
    site_name_long: string;
    article_link: null;
    video_link: string;
    rocket_name: string;
    flight: number;
    reuse_count: number;
    status: string;
    payload_type: string;
    payload_mass_kg: number;
    payload_mass_lbs: number;

    constructor(
        mission_name: string,
        launch_date_local: string,
        site_name_long: string,
        article_link: null,
        video_link: string,
        rocket_name: string,
        flight: number,
        reuse_count: number,
        status: string,
        payload_type: string,
        payload_mass_kg: number,
        payload_mass_lbs: number
    ) {
        this.mission_name = mission_name;
        this.launch_date_local = launch_date_local;
        this.site_name_long = site_name_long;
        this.article_link = article_link;
        this.video_link = video_link;
        this.rocket_name = rocket_name;
        this.flight = flight;
        this.reuse_count = reuse_count;
        this.status = status;
        this.payload_type = payload_type;
        this.payload_mass_kg = payload_mass_kg;
        this.payload_mass_lbs = payload_mass_lbs
    }
}
const sum = (a:number,b:number):number=>{
    return a+b
}
const showSum = (a:number,b:number):void=>{
    console.log(a + b);
}

const user:IUser = {name:"Max", age:18, gender:'male'}

const incAge=(someUser:IUser, inc:number):IUser=>{
    someUser.age+=inc
    return someUser
}

console.log(sum(1, 2));
showSum(2,3)
incAge(user, 2)














