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
    });

  $urlRouterProvider.otherwise('/');
}

export default Router;
