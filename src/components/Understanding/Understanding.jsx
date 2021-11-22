import React from "react";
import { useState } from "react";
import {useDispatch} from "react-redux";

function Understanding(props){
    // const[ name, setName ]=useState( null );
    const [understanding, setUnderstanding] = useState(undefined);
    const dispatch = useDispatch();

    const getUnderstanding = (event) =>{
        setUnderstanding(Number(event.target.value));
    }

    const sendUnderstanding = () =>{
        dispatch({
            type: `SET_UNDERSTANDING`,
            payload: understanding
        })
    }

    return(
        <div>
            <h1>How are you Understanding today?</h1>
            {/* <input type="number" min="1" max="5" value={Understanding} onChange={getUnderstanding}/> */}
            <select name="numbers" value={understanding} onChange={(event)=>getUnderstanding(event)}>
                <option value="">Please choose a rating</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
            </select>
            <p>Understanding: {JSON.stringify(understanding)}</p>
            <button onClick={sendUnderstanding}>Next</button>
        </div>
    )
}

export default Understanding;