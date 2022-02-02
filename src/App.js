import {Form} from "./components/Form/Form";
import css from './App.module.css'
import {Items} from "./components";

export default function App() {

    return (
        <div className={css.wrap}>
            <Form/>
            <Items/>
        </div>
    )
}