import { Navbar } from '../../components/Navbar/Navbar'
import { Header } from '../../components/header/Header'
import { UserRegister } from '../../components/Register/UserRegister'
import { Report } from '../../components/Report/Report'
import { UserSignin } from '../../components/userSingIn/UserSignin'
import { Return } from '../../components/Return/Return'
import { Reservation } from '../../components/Reservation/Reservation'
import React, {useState} from "react";
import "./User.css"

export const UserPage = () => {
  const [currentForm, setCurrentForm] = useState("login")
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  const handleLogin = () => {
    setIsLoggedIn(true);
  }

  const handleLogout = () => {
    setIsLoggedIn(false);
  }

  return (
    <div>
      <Navbar />
      {isLoggedIn ? (
        <div>
          <Header />
          <Reservation />
          <Return />
          <Report />
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div className="userPage">
          {currentForm === "login" ? (
            <UserSignin onFormSwitch={toggleForm} onLogin={handleLogin} />
          ) : (
            <UserRegister onFormSwitch={toggleForm} onLogin={handleLogin} />
          )}
        </div>
      )}
    </div>
  )
}


