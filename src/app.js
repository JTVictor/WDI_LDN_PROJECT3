import angular from 'angular';
import '@uirouter/angularjs';
import 'satellizer';

import 'bulma';
import './scss/style.scss';

import Router from './config/routes';
import Auth from './config/satellizer';
import MainCtrl from './controllers/main';
import AuthRegisterCtrl from './controllers/auth/register';
import AuthLoginCtrl from './controllers/auth/login';
import UsersIndexCtrl from './controllers/users/index';
import UsersShowCtrl from './controllers/users/show';
import UsersEditCtrl from './controllers/users/edit';

angular.module('usersApi', [
  'satellizer',
  'ui.router'
])
  .config(Router)
  .config(Auth)
  .controller('MainCtrl', MainCtrl)
  .controller('AuthRegisterCtrl', AuthRegisterCtrl)
  .controller('AuthLoginCtrl', AuthLoginCtrl)
  .controller('UsersIndexCtrl', UsersIndexCtrl)
  .controller('UsersShowCtrl', UsersShowCtrl)
  .controller('UsersEditCtrl', UsersEditCtrl);
