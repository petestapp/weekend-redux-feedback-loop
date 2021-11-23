import {useDispatch, useSelector} from 'react-redux';
import axios from "axios";
import {Link} from "react-router-dom";
import Typography from '@mui/material/Typography';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';

function Review( props ){
    // const[ name, setName ]=useState( null );
    const dispatch = useDispatch();
    const feedback = useSelector(store=> store.feedback);

    const submitAnswers = () =>{
        axios.post('/feedback', feedback).then((response)=>{
            dispatch({type: 'EMPTY'})
        }).catch((err)=>{
            alert(`error adding answers to database`);
            console.log(err);
        })
    }

    return(
        <div>
            <h1>Review Your Feedback</h1>
                <Typography variant="body1" gutterBottom>Feelings: {feedback.feeling}</Typography>
                <Typography variant="body1" gutterBottom>Understanding: {feedback.understanding}</Typography>
                <Typography variant="body1" gutterBottom>Support: {feedback.support}</Typography>
                <Typography variant="body1" gutterBottom>Comments: {feedback.comments}</Typography>
            <ButtonGroup variant="contained">
                <Button component={Link} to={'/comments'} variant="contained">
                        Back
                    </Button>
                    <Button component={Link} to={'/thanks'} variant="contained" onClick={submitAnswers}>
                        Submit
                    </Button>
            </ButtonGroup>
        </div>
    )
}

export default Review;