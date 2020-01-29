import {createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from '../views/Login';
import Profile from '../views/Profile';
import Home from '../views/Home';
import LoadingPage from '../views/LoadingPage';
import Results from '../views/Results';


/*Creem les rutes, amb l'ordre d'aparició*/
const AppNavigator = createStackNavigator({
    'LoadingPage': LoadingPage,
    'Login': Login,
    'Home': Home,
    'Results': Results,
    'Profile': Profile
});


