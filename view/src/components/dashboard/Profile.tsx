import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../app/store";
import { closeProfileDrawer } from "./store/profileSlice";
import { deepOrange } from "@mui/material/colors";
import Skeleton from "@mui/material/Skeleton";
import Typography from "@mui/material/Typography";

export default function Profile({ data }: any) {
  const open = useSelector((state: RootState) => state.profile.isProfileDrawerOpen);
  const dispatch = useDispatch();
  const handleClose = () => dispatch(closeProfileDrawer());

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
            <Grid style={profileLeftStyle} item xs={4}>
              <Box style={{ display: "flex", justifyContent: "center", paddingTop: "6rem" }}>
                <Avatar sx={{ bgcolor: deepOrange[500], width: 145, height: 145 }}>OP</Avatar>
              </Box>
              <Box style={{ padding: "1rem" }}>
                <Typography component="h2">{data.first_name} {data.last_name}</Typography>
                <Typography component="h2">{data.email}</Typography>
              </Box>
            </Grid>
            <Grid style={profileRightStyle} item xs={8}>
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
