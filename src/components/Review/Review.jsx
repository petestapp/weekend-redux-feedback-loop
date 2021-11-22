import { useState, useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux';
import axios from "axios";

function Review( props ){
    // const[ name, setName ]=useState( null );
    const dispatch = useDispatch();
    const feedback = useSelector(store=> store.feedback);

    const submitAnswers = () =>{
        axios.post('/feedback', feedback).then((response)=>{
        }).catch((err)=>{
            alert(`error adding answers to database`);
            console.log(err);
        })
    }

    return(
        <div>
            <h1>Review Your Feedback</h1>
            <ul>
                <li>Feelings: {feedback.feeling}</li>
                <li>Understanding: {feedback.understanding}</li>
                <li>Support: {feedback.support}</li>
                <li>Comments: {feedback.comments}</li>
            </ul>
            <button onClick={submitAnswers}>Submit</button>
        </div>
    )
}

export default Review;