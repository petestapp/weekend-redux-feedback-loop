import React from "react";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import TextField from '@mui/material/TextField';

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
            <TextField
                multiline
                maxRows={4}
                value={comments}
                onChange={(event)=>getComments(event)}
                variant="filled"
                sx={{width: '50%'}}
                margin="normal"
            />
            <br/>
            <ButtonGroup variant="contained">
                <Button component={Link} to={'/support'} variant="contained">
                        Back
                    </Button>
                    <Button component={Link} to={'/review'} variant="contained" onClick={sendComments}>
                        Next
                    </Button>
            </ButtonGroup>
        </div>
    )
}

export default Comments;