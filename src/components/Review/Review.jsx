import { useState, useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux';

function Review( props ){
    // const[ name, setName ]=useState( null );
    const dispatch = useDispatch();
    const feedback = useSelector(store=> store.feedback);

    return(
        <div>
            <h1>Review Your Feedback</h1>
            <ul>
                <li>Feelings: {feedback.feeling}</li>
                <li>Understanding: {feedback.understanding}</li>
                <li>Support: {feedback.support}</li>
                <li>Comments: {feedback.comments}</li>
            </ul>
        </div>
    )
}

export default Review;