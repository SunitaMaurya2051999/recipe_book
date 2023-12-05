import logo from "../assets/image/image.jpg";
import AdbIcon from "@mui/icons-material/Adb";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import RecipeCard from "./RecipeCard";
import ModalComponent from "./account/Modal";
import Grid from "@mui/material/Grid";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Home = () => {
  console.log('call-home');
  const navigate = useNavigate();

  useEffect(() => {
    const json = localStorage.getItem("login_user_detail");
    let token = "";
    if (json) {
      token = JSON.parse(json).token;
    }
    if (token) {
      navigate("/dashboard");
    }
  }, []);

  const recipeCard = [
    {
      user_name: "sunita",
      id: 1,
      recipe_name: "Recipe name",
      recipe_description: " This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
      recipe_date: "2023-10-20",
    },
    {
      user_name: "sunita",
      id: 1,
      recipe_name: "Recipe name",
      recipe_description: " This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
      recipe_date: "2023-10-20",
    },
    {
      user_name: "sunita",
      id: 1,
      recipe_name: "Recipe name",
      recipe_description: " This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
      recipe_date: "2023-10-20",
    },
    {
      user_name: "sunita",
      id: 1,
      recipe_name: "Recipe name",
      recipe_description: " This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
      recipe_date: "2023-10-20",
    },{
      user_name: "sunita",
      id: 1,
      recipe_name: "Recipe name",
      recipe_description: " This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
      recipe_date: "2023-10-20",
    },
    {
      user_name: "sunita",
      id: 1,
      recipe_name: "Recipe name",
      recipe_description: " This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
      recipe_date: "2023-10-20",
    },
    {
      user_name: "sunita",
      id: 1,
      recipe_name: "Recipe name",
      recipe_description: " This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
      recipe_date: "2023-10-20",
    },
    {
      user_name: "sunita",
      id: 1,
      recipe_name: "Recipe name",
      recipe_description: " This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
      recipe_date: "2023-10-20",
    },
  ];

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

            <ModalComponent />
          </Toolbar>
        </AppBar>
      </Box>
      <div className="home_initial_content">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <div className="home_center_content">
        <Box>
          <Grid container columns={{ xs: 12, sm: 12, md: 12 }}>
            {recipeCard.map((item, index) => (
              <Grid  style={{margin:'1rem 0rem'}} item xs={4} sm={3} md={3} key={index}>
                <RecipeCard data={item}/>
              </Grid>
            ))}
          </Grid>
        </Box>
      </div>
      <footer className="home_footer">Sunita</footer>
    </>
  );
};

export default Home;
