import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import {buyCake} from "../redux";

function HooksCakeContainer() {
    const nymberOfCakes = useSelector(state => state.cake.numberOfCakes)
    const dispatch = useDispatch()
    return (
        <div>
            <h2>Number of cakes - {nymberOfCakes}</h2>
            <button onClick={() => dispatch(buyCake())}>Buy cake</button>
        </div>
    )
}

export default HooksCakeContainer