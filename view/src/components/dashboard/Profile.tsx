import "./css/Profile.css";
import Box from "@mui/material/Box";
import callApiMethod from "../../helper/ApiHelper";
import Drawer from "@mui/material/Drawer";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../app/store";
import { closeProfileDrawer } from "./store/profileSlice";
import { deepOrange } from "@mui/material/colors";
import Skeleton from "@mui/material/Skeleton";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import { useState } from "react";
import ClearIcon from "@mui/icons-material/Clear";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import InputAdornment from "@mui/material/InputAdornment";
import EmailIcon from "@mui/icons-material/Email";
import InfoIcon from "@mui/icons-material/Info";
import Button from "@mui/material/Button";

export default function Profile({ data }: any) {
  const open = useSelector((state: RootState) => state.profile.isProfileDrawerOpen);
  const dispatch = useDispatch();
  const handleClose = () => dispatch(closeProfileDrawer());

  const [editMode, setEditMode] = useState(false);
  const [userEditInfo, setUserEditInfo] = useState({
    first_name: "",
    last_name: "",
    email: "",
    caption: "",
  });

  const editProfileDetails = () => {
    setEditMode(true);
    if (data && Object.keys(data).length > 0) {
      console.log("called");
      setUserEditInfo({
        first_name: data.first_name,
        last_name: data.last_name,
        email: data.email,
        caption: data.caption,
      });
    }
  };

  const handleProfileDetails = (event: any, label: string) => {
    if (label === "first_name") {
      setUserEditInfo({
        ...userEditInfo,
        first_name: event.target.value,
      });
    } else if (label === "last_name") {
      setUserEditInfo({
        ...userEditInfo,
        last_name: event.target.value,
      });
    } else if (label === "caption") {
      setUserEditInfo({
        ...userEditInfo,
        caption: event.target.value,
      });
    }
  };

  const saveEditProfileDetails = async () => {
    const json = localStorage.getItem("login_user_detail");
    if (json) {
      const user_data = JSON.parse(json);
      const response: any = await callApiMethod("/api/user/update-login-user-details", { token: user_data.token, ...userEditInfo });
      console.log("🚀 ~ file: Profile.tsx:54 ~ saveEditProfileDetails ~ response:", response);
      if (response.status === "success" && Object.keys(response.data).length > 0) {
        setEditMode(false);
      }
    }
  };

  const style = {
    height: `calc(100vh - 0px)`,
  };
  const profileLeftStyle = {
    background: "#daf0da",
    height: `calc(100vh - 0px)`,
  };
  const profileRightStyle = {
    background: "#5c7064",
    height: `calc(100vh - 0px)`,
  };

  return (
    <>
      <Drawer anchor="bottom" open={open} onClose={handleClose}>
        <Box className="user_profile" style={style} sx={{ width: "auto" }} role="presentation">
          <Grid container spacing={2}>
            {!editMode ? (
              <Grid style={profileLeftStyle} item xs={4}>
                <Box style={{ padding: "1rem", display: "flex", justifyContent: "end" }}>
                  <ModeEditOutlineOutlinedIcon className="edit_profile" onClick={() => editProfileDetails()} />
                </Box>
                <Box style={{ display: "flex", justifyContent: "center", paddingTop: "6rem" }}>
                  <Avatar sx={{ bgcolor: deepOrange[500], width: 145, height: 145 }}>
                    <span style={{ fontSize: "3rem" }}>{data.first_name ? data.first_name.charAt(0).toUpperCase() : "S"}</span>
                  </Avatar>
                </Box>
                <Box style={{ paddingLeft: "4rem", paddingTop: "4rem", paddingRight: "4rem" }}>
                  <TextField
                    id="input-with-icon-textfield"
                    fullWidth
                    value={data.first_name}
                    style={{ padding: "1rem" }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <AccountCircle />
                        </InputAdornment>
                      ),
                    }}
                    variant="standard"
                  />
                  <TextField
                    id="input-with-icon-textfield"
                    fullWidth
                    value={data.last_name}
                    style={{ padding: "1rem" }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <AccountCircle />
                        </InputAdornment>
                      ),
                    }}
                    variant="standard"
                  />
                  <TextField
                    id="input-with-icon-textfield"
                    fullWidth
                    value={data.email}
                    style={{ padding: "1rem" }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <EmailIcon />
                        </InputAdornment>
                      ),
                    }}
                    variant="standard"
                  />
                  <TextField
                    id="input-with-icon-textfield"
                    fullWidth
                    value={data.caption}
                    style={{ padding: "1rem" }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <InfoIcon />
                        </InputAdornment>
                      ),
                    }}
                    variant="standard"
                  />
                </Box>
              </Grid>
            ) : (
              <Grid style={profileLeftStyle} item xs={4}>
                <Box style={{ padding: "1rem", display: "flex", justifyContent: "end" }}>
                  <ClearIcon className="edit_profile" onClick={() => setEditMode(false)} />
                </Box>
                <Box style={{ display: "flex", justifyContent: "center", paddingTop: "6rem" }}>
                  <Avatar sx={{ bgcolor: deepOrange[500], width: 145, height: 145 }}>
                    <span style={{ fontSize: "3rem" }}>{data.first_name ? data.first_name.charAt(0).toUpperCase() : "S"}</span>
                  </Avatar>
                </Box>
                <Box style={{ paddingLeft: "4rem", paddingTop: "4rem", paddingRight: "4rem" }}>
                  <TextField
                    id="input-with-icon-textfield"
                    fullWidth
                    value={userEditInfo.first_name}
                    style={{ padding: "1rem" }}
                    onChange={(event) => handleProfileDetails(event, "first_name")}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <AccountCircle />
                        </InputAdornment>
                      ),
                    }}
                    variant="standard"
                  />
                  <TextField
                    id="input-with-icon-textfield"
                    fullWidth
                    value={userEditInfo.last_name}
                    style={{ padding: "1rem" }}
                    onChange={(event) => handleProfileDetails(event, "last_name")}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <AccountCircle />
                        </InputAdornment>
                      ),
                    }}
                    variant="standard"
                  />
                  <TextField
                    id="input-with-icon-textfield"
                    fullWidth
                    disabled={true}
                    value={userEditInfo.email}
                    style={{ padding: "1rem" }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <EmailIcon />
                        </InputAdornment>
                      ),
                    }}
                    variant="standard"
                  />
                  <TextField
                    id="input-with-icon-textfield"
                    fullWidth
                    value={userEditInfo.caption}
                    style={{ padding: "1rem" }}
                    onChange={(event) => handleProfileDetails(event, "caption")}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <InfoIcon />
                        </InputAdornment>
                      ),
                    }}
                    variant="standard"
                  />
                </Box>
                <Box style={{ left: "26%", bottom: "100px", position: "absolute", paddingRight: "3rem" }}>
                  <Button variant="contained" color="success" size="small" onClick={saveEditProfileDetails}>
                    Save
                  </Button>
                </Box>
              </Grid>
            )}

            <Grid style={profileRightStyle} item xs={8}>
              <Box style={{ padding: "1rem", display: "flex", justifyContent: "end" }}>
                <ClearIcon className="edit_profile" onClick={() => handleClose()} />
              </Box>
              <Box style={{ padding: "1rem" }}>
                <Skeleton animation="wave" variant="circular" width={40} height={40} />
                <Skeleton animation="wave" height={10} width="40%" />
                <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
                <Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" />
                <Skeleton animation="wave" height={10} width="80%" />
                <Skeleton animation="wave" height={10} width="80%" style={{ marginBottom: 6 }} />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Drawer>
    </>
  );
}
