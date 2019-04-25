import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from '../../../store/actions';

const Logout = ({ signOut }) => {
  useEffect(() => {
    signOut();
  }, [signOut]);

  return <Redirect to="/" />;
};

const mapDispatchToProps = {
  signOut: actions.signOut,
};

export default connect(
  null,
  mapDispatchToProps
)(Logout);
