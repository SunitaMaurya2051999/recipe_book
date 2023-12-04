import * as React from "react";
import Button from "@mui/material/Button";
import OutlinedInput from "@mui/material/OutlinedInput";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import FormControl from "@mui/material/FormControl";
import callApiMethod from "../../helper/ApiHelper";
import { useDispatch } from "react-redux";
import { closeAccountModal } from "./store/accountSlice";

const inputStyle = {
  width: "100%",
  margin: "8px",
};

export default function Register() {
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = React.useState(false);
  const [registerForm, setRegisterForm] = React.useState({
    first_name: "",
    last_name: "",
    email: "",
    pass_word: "",
  });

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const registerUser = async () => {
    const response = await callApiMethod("/api/user/register-user", registerForm);
    if (response.status === "success" && response.data) {
      dispatch(closeAccountModal());
    }
  };

  const updateRegisterForm = (event: any, label: any) => {
    if (label === "f-name") {
      setRegisterForm({ ...registerForm, first_name: event.target.value });
    } else if (label === "l-name") {
      setRegisterForm({ ...registerForm, last_name: event.target.value });
    } else if (label === "email") {
      setRegisterForm({ ...registerForm, email: event.target.value });
    } else if (label === "pass_word") {
      setRegisterForm({ ...registerForm, pass_word: event.target.value });
    }
  };
  return (
    <div>
      <div id="spring-modal-description" style={{ width: "385px" }}>
        <TextField id="outlined-basic" label="FirstName" variant="outlined" value={registerForm.first_name} style={inputStyle} onChange={(event) => updateRegisterForm(event, "f-name")} />
        <TextField id="outlined-basic" label="LastName" variant="outlined" value={registerForm.last_name} style={inputStyle} onChange={(event) => updateRegisterForm(event, "l-name")} />
        <TextField id="outlined-basic" label="Email" variant="outlined" value={registerForm.email} style={inputStyle} onChange={(event) => updateRegisterForm(event, "email")} />
        <FormControl style={inputStyle} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            value={registerForm.pass_word}
            onChange={(event) => updateRegisterForm(event, "pass_word")}
            endAdornment={
              <InputAdornment position="end">
                <IconButton aria-label="toggle password visibility" onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword} edge="end">
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        <Button variant="contained" style={inputStyle} onClick={registerUser}>
          Register
        </Button>
        <Typography style={{ textAlign: "center" }} id="spring-modal-title" component="h2">
          ----- OR -----
        </Typography>
        <Button variant="contained" style={inputStyle}>
          Continue with Google
        </Button>
      </div>
    </div>
  );
}
