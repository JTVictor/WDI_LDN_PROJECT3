import angular from 'angular';
import '@uirouter/angularjs';

import 'bulma';
import './scss/style.scss';

import Router from './config/routes';
import UsersIndexCtrl from './controllers/users/index';
import UsersShowCtrl from './controllers/users/show';

angular.module('usersApi', [
  'ui.router'
])
  .config(Router)
  .controller('UsersIndexCtrl', UsersIndexCtrl)
  .controller('UsersShowCtrl', UsersShowCtrl);
