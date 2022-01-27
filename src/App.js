import {useReducer} from "react";

const reducer = (state, action) => {
    state = {...state, counter2: state.counter2 + 1}

    switch (action.type) {
        case 'inc':
            return {...state, count1: state.count1 + 1}
        case 'dec':
            return {...state, count1: state.count1 - 1}
        case 'reset':
            return {...state, count1: 0}
        case 'inc10':
            return {...state, counter3: state.counter3 + 10}
        case 'dec10':
            return {...state, counter3: state.counter3 - 10}
        case 'reset10':
            return {...state, counter3: action.payload}
        default:
            return new Error('Error')

    }

}
export default function App() {
    const [state, dispatch] = useReducer(reducer, {count1: 0, counter2: 0, counter3: 10});


    return (
        <div>
            <div>
                <div>{state.count1}</div>
                <div>{state.counter2}</div>
                <button onClick={() => dispatch({type: 'inc'})}>INC</button>
                <button onClick={() => dispatch({type: 'dec'})}>DEC</button>
                <button onClick={() => dispatch({type: 'reset'})}>RESET</button>
            </div>
            <div>
                <button onClick={() => dispatch({type: 'inc2'})}>INC2</button>
                <button onClick={() => dispatch({type: 'dec2'})}>DEC_2</button>
                <button onClick={() => dispatch({type: 'reset2'})}>RESET_2</button>
            </div>
            <div>
                <div>{state.counter3}</div>
                <button onClick={() => dispatch({type: 'inc10'})}>INC_10</button>
                <button onClick={() => dispatch({type: 'dec10'})}>DEC_10</button>
                <button onClick={() => dispatch({type: 'reset10', payload: 100})}>RESET_10</button>
            </div>
        </div>
    )
}