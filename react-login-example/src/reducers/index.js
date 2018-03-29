import { combineReducers } from 'redux';
import LoginView from '../views/Login/reducer';
import HomeView from '../views/Home/reducer';
import Nav from '../views/Navigation/reducer';
import App from './app';

const allReducers = combineReducers({
    App,
    LoginView,
    HomeView,
    Nav
});

export default allReducers;
