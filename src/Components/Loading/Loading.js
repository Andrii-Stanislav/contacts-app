import React from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';

import { getIsLoadingContacts } from '../../redux/contacts/contacts-selectors';
import { getIsLoadingAuth } from '../../redux/auth/auth-selectors';

const useStyles = makeStyles(theme => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

function Loading({ loadingContacts, loadingAuth }) {
  const classes = useStyles();

  return (
    <>
      {loadingContacts && (
        <div>
          <Backdrop className={classes.backdrop} open={true}>
            <CircularProgress color="inherit" />
          </Backdrop>
        </div>
      )}
      {loadingAuth && (
        <div>
          <Backdrop className={classes.backdrop} open={true}>
            <CircularProgress color="inherit" />
          </Backdrop>
        </div>
      )}
    </>
  );
}

const mapStateToProps = state => ({
  loadingContacts: getIsLoadingContacts(state),
  loadingAuth: getIsLoadingAuth(state),
});

export default connect(mapStateToProps)(Loading);
