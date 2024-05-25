import { Button } from "@mui/material";
import { TextField } from "@mui/material";

type InputProps='standard' | 'outlined' | 'contained';

export const InputArea = () => {
    const input:InputProps = 'contained'

    return (
    <>
    <p>ınput area</p>
    <TextField id="outlined-basic" label="Outlined" variant="outlined" />
    {input}
    <Button variant="contained">Text</Button>
    </>
    );
};
