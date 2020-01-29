import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from '../views/Login';
import Profile from '../views/Profile';
import Home from '../views/Home';
import LoadingPage from '../views/LoadingPage';
import Results from '../views/Results';

import{
    LOADING_PAGE,
    LOGIN,
    HOME,
    RESULTS,
    PROFILE
} from '../consts';


/*Creem les rutes, amb l'ordre d'aparició*/
const AppNavigator = createStackNavigator({
    [LOADING_PAGE]: LoadingPage,
    [LOGIN]: Login,
    [HOME]: Home,
    [RESULTS]: Results,
    [PROFILE]: Profile
},
{
    headerMode:'none'
});

/* export default et serveix per poder cridar les rutes a l'estil routes.creteAppContainer */
export default createAppContainer(AppNavigator);
