// import { createSelector } from '@reduxjs/toolkit';

const getIsAuthenticated = state => state.auth.isAuthenticated;
const getUserName = state => state.auth.user.name;
const getUserEmail = state => state.auth.user.email;
const getIsLoadingAuth = state => state.auth.loading;
const getAuthError = state => state.auth.error;

export {
  getIsAuthenticated,
  getUserName,
  getUserEmail,
  getIsLoadingAuth,
  getAuthError,
};
