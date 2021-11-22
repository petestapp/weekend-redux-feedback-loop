import React from "react";
import {useState} from "react";
import {useDispatch,} from "react-redux";

function Comments( props ){
    // const[ name, setName ]=useState( null );
    const [comments, setComments] = useState("");
    const dispatch = useDispatch();

    const getComments = (event) =>{
        setComments(event.target.value);
    }

    const sendComments = () =>{
        dispatch({
            type: `SET_COMMENTS`,
            payload: comments
        })
    }

    return(
        <div>
            <h1>Any comments you want to leave?</h1>
            <input type="text" name="commentsInput" id="commentsInput" onChange={(event)=>getComments(event)}/>
            <p>comments: {JSON.stringify(comments)}</p>
            <button onClick={sendComments}>Next</button>
        </div>
    )
}

export default Comments;