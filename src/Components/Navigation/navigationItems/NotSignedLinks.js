import React from 'react';

import NavigationItem from './navigationItem/NavigationItem';

const SignedLinks = () => {
  return (
    <>
      <NavigationItem link="/">Home</NavigationItem>
      <NavigationItem link="/login">Login</NavigationItem>
      <NavigationItem link="/signup">Register</NavigationItem>
    </>
  );
};

export default SignedLinks;
