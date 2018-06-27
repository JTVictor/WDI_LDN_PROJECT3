// function secureState($q, $state, $auth, $rootScope) {
//   return new $q(resolve => {
//     if($auth.isAuthenticated()) return resolve();
//
//     $rootScope.$broadcast('flashMessage', {
//       type: 'warning',
//       content: 'Please log in'
//     });
//
//     $state.go('login');
//   });
// }

function Router($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: './views/home.html'
    })
    .state('usersIndex', {
      url: '/users',
      templateUrl: './views/users/index.html',
      controller: 'UsersIndexCtrl'
    })
    .state('usersShow', {
      url: '/users/:id',
      templateUrl: './views/users/show.html',
      controller: 'UsersShowCtrl'
    })
    .state('login', {
      url: '/login',
      templateUrl: './views/auth/login.html',
      controller: 'AuthLoginCtrl'
    })
    .state('edit', {
      url: '/login',
      templateUrl: './views/users/edit.html',
      controller: 'UsersEditCtrl'
    })
    .state('register', {
      url: '/register',
      templateUrl: './views/auth/register.html',
      controller: 'AuthRegisterCtrl'
    });

  $urlRouterProvider.otherwise('/');
}

export default Router;
