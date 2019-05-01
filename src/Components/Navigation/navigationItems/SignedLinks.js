import React from 'react';

import NavigationItem from './navigationItem/NavigationItem';

const SignedLinks = ({ auth, profile }) => {
  return (
    <>
      <NavigationItem link="/">Home</NavigationItem>
      <NavigationItem link="/protected">Protected Page</NavigationItem>
      <NavigationItem link="/profile">
        {`${profile.firstName || 'Account'}`}
      </NavigationItem>

      <NavigationItem link="/logout">Logout</NavigationItem>
    </>
  );
};

export default SignedLinks;
