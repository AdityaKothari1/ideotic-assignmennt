

import { Navigate } from "react-router-dom";
function PrivateRoute({children}){

    const isAuth=localStorage.getItem("isAuth")||false
     console.log(isAuth);
    if(!isAuth){
        return <Navigate to="/login"/>
    }
    return children

  }
  export default PrivateRoute