import React from "react";
import { useState } from "react";
import {useDispatch} from "react-redux";

function Support(props){
    // const[ name, setName ]=useState( null );
    const [support, setSupport] = useState(undefined);
    const dispatch = useDispatch();

    const getSupport = (event) =>{
        setSupport(Number(event.target.value));
    }

    const sendSupport = () =>{
        dispatch({
            type: `SET_SUPPORT`,
            payload: support
        })
    }

    return(
        <div>
            <h1>How well are you being supported?</h1>
            {/* <input type="number" min="1" max="5" value={Support} onChange={getSupport}/> */}
            <select name="numbers" value={support} onChange={(event)=>getSupport(event)}>
                <option value="">Please choose a rating</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
            </select>
            <p>Support: {JSON.stringify(support)}</p>
            <button onClick={sendSupport}>Next</button>
        </div>
    )
}

export default Support;