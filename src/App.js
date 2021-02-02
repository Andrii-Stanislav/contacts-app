import React, { Component, Suspense, lazy } from 'react';
import { Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
// import { CSSTransition } from 'react-transition-group';

import routes from './routes';
import { getCurrentUser } from './redux/auth/auth-operations';

import PrivateRoute from './Components/PrivateRoute';
import PublicRoute from './Components/PublicRoute';
import AppBar from './Components/AppBar';
import Container from './Components/Container';
import Loading from './Components/Loading';

const HomePage = lazy(() =>
  import('./views/HomePage' /* webpackChunkName: "home-page-view" */),
);
const Contacts = lazy(() =>
  import('./views/Contacts' /* webpackChunkName: "contacts-view" */),
);
const LoginPage = lazy(() =>
  import('./views/LoginPage' /* webpackChunkName: "loading-view" */),
);
const Register = lazy(() =>
  import('./views/Register' /* webpackChunkName: "register-view" */),
);

class App extends Component {
  state = {};

  componentDidMount() {
    this.props.getCurrentUser();
  }

  render() {
    return (
      <>
        <AppBar />
        <Container>
          <Suspense fallback={<p>Loading...</p>}>
            <Switch>
              <PublicRoute exact path={routes.home} component={HomePage} />
              <PrivateRoute
                path={routes.contacts}
                component={Contacts}
                redirectTo={routes.login}
              />
              <PublicRoute
                path={routes.login}
                restricted
                component={LoginPage}
                redirectTo={routes.contacts}
              />
              <PublicRoute
                path={routes.register}
                restricted
                component={Register}
                redirectTo={routes.contacts}
              />
              <Redirect to={routes.home} />
            </Switch>
          </Suspense>
          <Loading />
        </Container>
      </>
    );
  }
}

const mapDispatchToProps = {
  getCurrentUser: getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
