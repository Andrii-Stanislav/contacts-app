import React, { useEffect, Suspense, lazy } from 'react';
import { Switch, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styled, { createGlobalStyle } from 'styled-components';

import routes from './routes';
import { getCurrentUser } from './redux/auth/auth-operations';
import { getdarkTheme } from './redux/theme/theme';

import PrivateRoute from './Components/PrivateRoute';
import PublicRoute from './Components/PublicRoute';
import AppBar from './Components/AppBar';
import Container from './Components/Container';
import Loading from './Components/Loading';
import Pnotify from './Components/Pnotify';
import ThemeSwitch from './Components/ThemeSwitch';

const HomePage = lazy(() =>
  import('./views/HomePage' /* webpackChunkName: "home-page-view" */),
);
const Contacts = lazy(() =>
  import('./views/Contacts' /* webpackChunkName: "contacts-view" */),
);
const LoginPage = lazy(() =>
  import('./views/LoginPage' /* webpackChunkName: "login-view" */),
);
const Register = lazy(() =>
  import('./views/Register' /* webpackChunkName: "register-view" */),
);

const StyledApp = styled.div`
  background-color: ${props => (props.darkTheme ? '#464646' : '#e6e6e6')};
  color: ${props => (props.darkTheme ? '#fff' : '#000')};
  transition: all 250ms cubic-bezier(0.075, 0.82, 0.165, 1);
`;

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => (props.darkTheme ? '#464646' : '#e6e6e6')};
  }
`;

export default function App() {
  const dispatch = useDispatch();
  const darkTheme = useSelector(getdarkTheme);

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <StyledApp darkTheme={darkTheme}>
      <GlobalStyle darkTheme={darkTheme} />
      <AppBar />
      <Container>
        <ThemeSwitch />
        <Suspense fallback={<Loading />}>
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
        <Pnotify />
      </Container>
    </StyledApp>
  );
}
