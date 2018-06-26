function UsersShowCtrl($scope, $http, $state) {

  $scope.data = {};

  $http({
    method: 'GET',
    url: `/api/users/${$state.params.id}`
  })
    .then(res => $scope.user = res.data);

}
export default UsersShowCtrl;
