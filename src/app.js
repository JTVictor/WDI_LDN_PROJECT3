import angular from 'angular';
import '@uirouter/angularjs';
import 'satellizer';
import 'filepicker-js';
import 'angular-filepicker/dist/angular_filepicker';

import 'bulma';
import './scss/style.scss';

import Router from './config/routes';
import Auth from './config/satellizer';
import Upload from './config/filepicker';

import MainCtrl from './controllers/main';
import AuthRegisterCtrl from './controllers/auth/register';
import AuthLoginCtrl from './controllers/auth/login';
import UsersIndexCtrl from './controllers/users/index';
import UsersShowCtrl from './controllers/users/show';
import UsersEditCtrl from './controllers/users/edit';

import filePicker from './directives/filepicker';
import googleAutocomplete from './directives/googleAutocomplete';
import googleMap from './directives/googleMap';


angular.module('usersApi', [
  'satellizer',
  'ui.router',
  'angular-filepicker'
])
  .config(Router)
  .config(Auth)
  .config(Upload)
  .controller('MainCtrl', MainCtrl)
  .controller('AuthRegisterCtrl', AuthRegisterCtrl)
  .controller('AuthLoginCtrl', AuthLoginCtrl)
  .controller('UsersIndexCtrl', UsersIndexCtrl)
  .controller('UsersShowCtrl', UsersShowCtrl)
  .controller('UsersEditCtrl', UsersEditCtrl)
  .directive('googleAutocomplete', googleAutocomplete)
  .directive('googleMap', googleMap)
  .directive('filePicker', filePicker);
