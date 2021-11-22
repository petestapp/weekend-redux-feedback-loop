import React from "react";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";

function Comments( props ){
    // const[ name, setName ]=useState( null );
    const [comments, setComments] = useState("");

    const getComments = (event) =>{
        setComments(event.target.value);
    }

    return(
        <div>
            <h1>Any comments you want to leave?</h1>
            <input type="text" name="commentsInput" id="commentsInput" onChange={(event)=>getComments(event)}/>
            <p>comments: {JSON.stringify(comments)}</p>
            <button>Next</button>
        </div>
    )
}

export default Comments;