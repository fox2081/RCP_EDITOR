/**
 * Created by Fox2081 on 2015/10/14.
 */
module.directive('pluginPractice', function () {
    return {
        restrict: 'E',
        templateUrl: './directives/courseContent/pluginPractice.html',
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