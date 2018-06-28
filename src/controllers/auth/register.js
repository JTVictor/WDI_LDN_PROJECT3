function AuthRegisterCtrl($scope, $http, $state) {
  $scope.data = {};

  $scope.createUser = function() {
    $http({
      url: '/api/register',
      method: 'POST',
      data: $scope.data
    })
      .then(() => $state.go('usersIndex'));
  };
}


export default AuthRegisterCtrl;
