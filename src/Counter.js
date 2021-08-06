import React, {useReducer} from 'react'


const initialState = {
    icount : 0,
    discount: 10,
}
// const reducer = (state, action) => {
//     switch (action.type) {
//         case 'INCREMENT':
//             return {...state, icount: state.icount + action.value}
//         case 'INCREMENT10':
//             return {...state, discount: state.discount + action.value}
//         case 'DECREMENT':
//             return {...state, icount: state.icount + action.value}
//         case 'DECREMENT10':
//             return {...state, discount: state.discount + action.value}
//         case 'RESET':
//             return initialState
//         default:
//             return state
//     }

// }


function CounterApp(){
    
    // const [count, dispatch] = useReducer(reducer, initialState)
    const [controls, setControls] = React.useState({icount : 0,
        discount: 10,})

    return (
        <div>
            <h1>Counter</h1>
            <h3> {count.icount} </h3>
            <h3> {count.discount} </h3>
            <button onClick={()=> setControls({})}> Increment </button>
            <button onClick={()=> setControls({})}> Increment </button>
            <button onClick={()=> setControls({})}> Decrement </button>
            <button onClick={()=> setControls({})}> Decrement </button>
            <button onClick={()=> setControls({})}> Reset </button>
        </div>
    )
}

export default CounterApp