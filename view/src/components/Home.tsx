import logo from "../logo.svg";
import AdbIcon from "@mui/icons-material/Adb";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
import RecipeCard from './RecipeCard'
import SpringModal from './elements/Modal'
const Home = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <AdbIcon />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography>

            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              {/* News */}
            </Typography>
            {/* <Button color="inherit">Login</Button> */}
      <SpringModal />
          </Toolbar>
        </AppBar>
      </Box>
      <div className="home_initial_content">
      <img src={logo} className="App-logo" alt="logo" />
      </div>
      <div className="home_center_content">
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
      </div>
      <footer className="home_footer">
              Sunita
      </footer>
    </>
  );
};

export default Home;
