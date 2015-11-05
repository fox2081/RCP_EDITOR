/**
 * Created by Fox2081 on 2015/10/15.
 */

module.directive('pluginVideo', function () {
    return {
        restrict: 'E',
        templateUrl: './directives/courseContent/pluginVideo.html',
        replace: "true",
        scope: {
            args :"=args",
            scope: "=scope"
        },
        controller: function ($timeout, $scope, $rootScope) {

            //$scope.scope = $scope;

            console.log($scope.args);

        }
    };
});