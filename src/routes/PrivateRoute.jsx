import React, { use } from 'react';
import { Navigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import Loading from '../components/Loading';

const PrivateRoute = ({children}) => {
    const {user, loading} = use(AuthContext);
    
    if(loading){
        return <Loading></Loading>
    }

    if(user){
        return children
    }
  
    return <Navigate to="/auth/login"></Navigate>
  
};

export default PrivateRoute;