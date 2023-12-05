import * as React from "react";
import Button from "@mui/material/Button";
import OutlinedInput from "@mui/material/OutlinedInput";
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
import { useNavigate } from "react-router-dom";

const inputStyle = {
  width: "100%",
  margin: "8px",
};

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = React.useState(false);
  const [loginUser, setLoginUser] = React.useState({
    email: "",
    pass_word: "",
  });

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const updateLoginUserData = (event: any, label: any) => {
    if (label === "email") {
      setLoginUser({ ...loginUser, email: event.target.value });
    } else if (label === "password") {
      setLoginUser({ ...loginUser, pass_word: event.target.value });
    }
  };

  const loginUserToAccount = async () => {
    const response = await callApiMethod("/api/user/login-user", loginUser);
    if (response.status === "success" && response.data) {
      dispatch(closeAccountModal());
      storeLoginUserDetails(response.data);
    }
  };

  const storeLoginUserDetails = (data: any) => {
    localStorage.setItem("login_user_detail", JSON.stringify(data));
    navigate("/dashboard");
  };
  return (
    <div>
      <div id="spring-modal-description" style={{ width: "385px" }}>
        <TextField id="outlined-basic" label="Email" variant="outlined" style={inputStyle} value={loginUser.email} onChange={(event) => updateLoginUserData(event, "email")} />
        <FormControl style={inputStyle} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            value={loginUser.pass_word}
            onChange={(event) => updateLoginUserData(event, "password")}
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
        <Button variant="contained" onClick={loginUserToAccount} style={inputStyle}>
          Login
        </Button>
      </div>
    </div>
  );
}
