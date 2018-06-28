function AuthRegisterCtrl($scope, $http, $state) {
  $scope.data = {};
  $scope.goals = ['Weight gain', 'Maintenance', 'Weight loss'];

  $scope.updateLocation = function(location) {
    $scope.data.location = location;
    $scope.$apply();
  };
  
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
