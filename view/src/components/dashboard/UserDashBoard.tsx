import callApiMethod from "../../helper/ApiHelper";
import Header from "../layout/Header";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Profile from "./Profile";

// import logo from '../../assets/image/image.jpg'

export default function UserDashboard() {
  const navigate = useNavigate();
  let [userDetails, setUserDetails] = useState({});
  useEffect(() => {
    const fetchUserDetails = async () => {
      const json = localStorage.getItem("login_user_detail");
      if (json) {
        const user_data = JSON.parse(json);
        const response:any = await callApiMethod("/api/user/user-details", { token: user_data.token, email: user_data.email });
        console.log("🚀 ~ file: UserDashBoard.tsx:16 ~ fetchUserDetails ~ response:", response)
        if (!response.data && response.message && response.message === "token expired") {
          localStorage.setItem("login_user_detail", "");
          navigate("/");
        } else if (response.data && Object.keys(response.data).length > 0) {
          setUserDetails(userDetails = response.data)
        } else {
          setUserDetails(userDetails = {})
          localStorage.setItem("login_user_detail", "");
          navigate("/");
        }
      } else {
        navigate("/");
      }
      console.log(userDetails)
    };


    fetchUserDetails();
  }, []);
  return (
    <>
      <Header />
      <Profile data={userDetails}/>
      

    </>
  );
}
