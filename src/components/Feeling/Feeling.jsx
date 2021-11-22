import React from "react";
import { useState } from "react";
import {useDispatch, useSelector} from "react-redux";

function Feeling(props){
    // const[ name, setName ]=useState( null );
    const [feeling, setFeeling] = useState(undefined);
    const dispatch = useDispatch;

    const getFeeling = (event) =>{
        setFeeling(Number(event.target.value));
    }

    const sendFeeling = (event) =>{
        dispatch({
            type: `SET_FEELING`,
            payload: feeling
        })
    }

    return(
        <div>
            <h1>How are you feeling today?</h1>
            {/* <input type="number" min="1" max="5" value={feeling} onChange={getFeeling}/> */}
            <select name="numbers" value={feeling} onChange={(event)=>getFeeling(event)}>
                <option value="">Please choose a rating</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
            </select>
            <p>feeling: {JSON.stringify(feeling)}</p>
            <button onClick={sendFeeling}>Next</button>
        </div>
    )
}

export default Feeling;