import React, { useState, useEffect } from 'react';
import { Formik } from 'formik';

const Auth = props => {
  const [isLogin, setisLogin] = useState(true);

  useEffect(() => {
    if (props.location.pathname === '/login') {
      setisLogin(true);
    } else {
      setisLogin(false);
    }
  }, [props.location.pathname]);

  return (
    <div>
      Form for login/ register will go here
      <button>{isLogin ? 'LOGIN' : 'REGISTER'}</button>
    </div>
  );
};

export default Auth;
