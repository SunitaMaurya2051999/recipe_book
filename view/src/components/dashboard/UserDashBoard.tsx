import callApiMethod from "../../helper/ApiHelper";
import Header from "../layout/Header";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function UserDashboard() {
  const navigate = useNavigate();
  useEffect(() => {
    const fetchUserDetails = async () => {
      const json = localStorage.getItem("login_user_detail");
      if (json) {
        const user_data = JSON.parse(json);
        const response = await callApiMethod("/api/user/user-details", { token: user_data.token, email: user_data.email });
        if (!response.data && response.message && response.message === "token expired") {
          localStorage.setItem("login_user_detail", "");
          navigate("/");
        }
      }else{
        navigate("/");
      }
    };

    fetchUserDetails();
  }, []);
  return (
    <>
      <Header />
    </>
  );
}
