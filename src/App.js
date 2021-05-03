import MessengerCustomerChat from "react-messenger-customer-chat";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { createContext, useEffect, useState } from "react";
import Api from "./Body/Axios/Api";
import Navbody from "./Body/navigatoin/Navbody";
import Navlink from "./Body/navigatoin/Navlink";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
export const UserContext = createContext();
export const AdminContex = createContext();
export const darkModeContext = createContext();
export const PresentPath = createContext();

function App() {
  const [loggedinUser, setloggedinUser] = useState({});
  const [admin, setadmin] = useState(false);
  const [mode, setmode] = useState(true);
  const [cPath, setcPath] = useState("/")

  useEffect(() => {
    const displayName = localStorage.getItem("displayName");
    const email = localStorage.getItem("email");
    const emailVerified = localStorage.getItem("emailVerified");
    const photoURL = localStorage.getItem("photoURL");
    setloggedinUser({ displayName, email, emailVerified, photoURL });
  }, []);

  useEffect(() => {
    Api.post("/isAdmin", { email: localStorage.getItem("email") }).then(
      (res) => {
        setadmin(res.data);
      }
    );
  }, [loggedinUser]);
console.log(cPath)

  const color = mode && cPath==="/"
    ?"linear-gradient(#0C0A53,rgb(255, 0, 191),rgb(122, 5, 255))": "black";

  return (
    <div style={{ background: color }}>
      <UserContext.Provider
        className="App"
        value={[loggedinUser, setloggedinUser]}
      >
        <AdminContex.Provider value={[admin, setadmin]}>
          <darkModeContext.Provider value={[mode, setmode]}>
          <PresentPath.Provider value={[cPath, setcPath]}>
            <Router>
              <Navbody></Navbody>
              <Navlink></Navlink>
              <MessengerCustomerChat
                pageId="757359774383845"
                appId="918021485643768"
                htmlRef=""
              />
            </Router>
          </PresentPath.Provider>
          </darkModeContext.Provider>
        </AdminContex.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
