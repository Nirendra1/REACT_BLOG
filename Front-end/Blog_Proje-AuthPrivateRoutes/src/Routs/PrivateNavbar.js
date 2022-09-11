import React from 'react';
import { Navigate, Outlet} from 'react-router-dom'

const useAuth = () => {
  const user = {loggedIn: false}
  let  userid = localStorage.getItem("localstorage_User_Id") == null ? false : true;
  if(userid){
    user.loggedIn= true;
  }
  console.log(user);
  return user && user.loggedIn;
}
const PrivateNavbar = () => {
  const isAuth = useAuth();
  // return isAuth ? <Outlet /> : <Login />;
  console.log(isAuth);
  return isAuth ? <Outlet /> : <Navigate to='/' />;

}

export default PrivateNavbar;
