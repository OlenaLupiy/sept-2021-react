import {Form} from "./components/Form/Form";
import css from './App.module.css'

export default function App() {

    return (
        <div className={css.wrap}>
            <div className={css.app_container}>
                <div className={css.app_todoContainer}>

                </div>

                <Form todoList={todoList}/>
            </div>
        </div>
    )
}