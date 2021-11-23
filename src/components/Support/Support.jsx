import React from "react";
import { useState } from "react";
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ButtonGroup from '@mui/material/ButtonGroup';

function Support(props){
    // const[ name, setName ]=useState( null );
    const [support, setSupport] = useState("");
    const [validNumber, setValidNumber] = useState(false);
    const dispatch = useDispatch();

    const getSupport = (event) =>{
        setSupport(Number(event.target.value));
        if (event.target.value > 0){
            setValidNumber(true);
        }
        else {
            setValidNumber(false);
        }
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
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                <Select
                    variant="filled"
                    value={support} 
                    onChange={(event)=>getSupport(event)}
                >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                </Select>
                <ButtonGroup variant="contained">
                    <Button component={Link} to={'/understanding'} variant="contained">
                        Back
                    </Button>
                    {
                        validNumber ?
                        <Button component={Link} to={'/comments'} variant="contained" onClick={sendSupport}>
                            Next
                        </Button>:
                        <Button variant="contained" disabled>Next</Button>
                    }
                </ButtonGroup>
            </FormControl>
        </div>
    )
}

export default Support;