import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import OutlinedInput from '@mui/material/OutlinedInput';
import Typography from "@mui/material/Typography";
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import FormControl from '@mui/material/FormControl';

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const inputStyle = {
  width:'100%',
  margin:'8px'
}

export default function SpringModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };
  return (
    <div>
      <Button color="inherit" onClick={handleOpen}>
        Login
      </Button>
      <Modal aria-labelledby="spring-modal-title" aria-describedby="spring-modal-description" open={open} onClose={handleClose} closeAfterTransition slots={{ backdrop: Backdrop }}>
        <Box sx={style}>
          <Typography style={{textAlign:'center'}} id="spring-modal-title" variant="h6" component="h2">
            LOGIN
          </Typography>
          <div id="spring-modal-description" style={{width:'385px'}}>
          <TextField id="outlined-basic" label="FirstName" variant="outlined" style={inputStyle}/>
          <TextField id="outlined-basic" label="LastName" variant="outlined" style={inputStyle}/>
          <TextField id="outlined-basic" label="Email" variant="outlined" style={inputStyle}/>
          <FormControl style={inputStyle} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        <Button variant="contained" style={inputStyle}>Login</Button>
        <Typography style={{textAlign:'center'}} id="spring-modal-title"  component="h2">
            ----- OR -----
          </Typography>
        <Button variant="contained" style={inputStyle}>Continue with Google</Button>
        <Typography style={{textAlign:'center',fontSize:'12px',textDecoration:'underline',color:'blue'}} id="spring-modal-title"  component="h2">
            Create your account
          </Typography>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
