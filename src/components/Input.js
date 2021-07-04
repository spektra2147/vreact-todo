import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";

class Input extends React.Component {
    render() {
        return  (
            <Box component="form" display="flex" justifyContent="center" onSubmit={this.props.handleFormSubmitProp} autoComplete="off" >
                <TextField fullWidth required id="standard-basic" size="small" name="text" label="Text" placeholder="Write Text" />
                    <Button type="submit" variant="contained" color="primary">Add</Button>
            </Box>
        )
    }
}

export default Input;