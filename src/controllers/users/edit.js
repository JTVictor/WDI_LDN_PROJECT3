function UsersEditCtrl($scope, $http, $state) {
  $scope.goals = ['Weight gain', 'Maintenance', 'Weight loss'];
  $scope.updateLocation = function(location) {
    $scope.data.location = location;
    $scope.$apply();
  };

  $scope.updateUser = function() {
    $http({
      method: 'PUT',
      url: `/api/users/${$state.params.id}`,
      data: $scope.data
    })
      .then(() => $state.go('usersShow', { id: $state.params.id }));
  };

  $http({
    method: 'GET',
    url: `/api/users/${$state.params.id}`
  })
    .then(res => $scope.data = res.data);
}

export default UsersEditCtrl;
