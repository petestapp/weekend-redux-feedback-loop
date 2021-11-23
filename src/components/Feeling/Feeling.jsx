import React from "react";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function Feeling(props){
    // const[ name, setName ]=useState( null );
    const [feeling, setFeeling] = useState("");
    const [validNumber, setValidNumber] = useState(false);
    const dispatch = useDispatch();

    const getFeeling = (event) =>{
        setFeeling(Number(event.target.value));
        if (event.target.value > 0){
            setValidNumber(true);
        }
        else {
            setValidNumber(false);
        }
    }

    const sendFeeling = () =>{
        dispatch({
            type: `SET_FEELING`,
            payload: feeling
        })
    }

    return(
        <div>
            <h1>How are you feeling today?</h1>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }} variant="filled">
            <Select
                value={feeling}
                onChange={(event)=>getFeeling(event)}
                label="Rating"
            >
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={5}>5</MenuItem>
            </Select>
            {
                validNumber ?
                <Button component={Link} to={'/understanding'} variant="contained" onClick={sendFeeling}>
                    Next
                </Button>:
                <Button variant="contained" disabled>Next</Button>
            }     
            </FormControl>
        </div>
    )
}

export default Feeling;