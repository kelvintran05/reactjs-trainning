import {combineReducers} from 'redux';
import LoginView from '../views/login/reducer';
import HomeView from '../views/home/reducer';
const allReducers = combineReducers({
  login: LoginView,
  logout: HomeView
});
export default allReducers;
