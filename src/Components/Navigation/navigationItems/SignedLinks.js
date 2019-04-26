import React from 'react';

import NavigationItem from './navigationItem/NavigationItem';

const SignedLinks = ({ auth, profile }) => {
  console.log(profile);
  console.log(auth);
  return (
    <>
      <NavigationItem link="/">Home</NavigationItem>
      <NavigationItem link="/protected">Protected Page</NavigationItem>
      <NavigationItem link="/profile">
        {!profile.isLoaded
          ? 'Loading...'
          : `${profile.firstName} ${profile.lastName}`}
      </NavigationItem>

      <NavigationItem link="/logout">Logout</NavigationItem>
    </>
  );
};

export default SignedLinks;
