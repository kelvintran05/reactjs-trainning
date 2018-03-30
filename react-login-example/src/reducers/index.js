import { combineReducers } from 'redux';
import LoginView from '../views/Login/reducer';
import HomeView from '../views/Home/reducer';
import App from './app';

const allReducers = combineReducers({
    App,
    LoginView,
    HomeView
});

export default allReducers;
