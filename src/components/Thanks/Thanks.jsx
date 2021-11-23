import {Link} from "react-router-dom";
import Button from '@mui/material/Button';

function Thanks( props ){
    // const[ name, setName ]=useState( null );

    return(
        <div>
            <h1>Thank You!</h1>
            <Button component={Link} to={'/'} variant="contained">
                Leave New Feedback
            </Button>
        </div>
    )
}

export default Thanks;