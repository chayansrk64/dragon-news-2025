import React, { use } from 'react';
import { Navigate, useLocation } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import Loading from '../components/Loading';

const PrivateRoute = ({children}) => {
    const {user, loading} = use(AuthContext);
    const location = useLocation()
    // console.log(location);
    
    if(loading){
        return <Loading></Loading>
    }

    if(user){
        return children
    }
  
    return <Navigate state={location.pathname} to="/auth/login"></Navigate>
  
};

export default PrivateRoute;