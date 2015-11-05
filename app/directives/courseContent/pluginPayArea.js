/**
 * Created by Fox2081 on 2015/11/4.
 */

module.directive('pluginPayArea', function () {
    return {
        restrict: 'E',
        templateUrl: './directives/courseContent/pluginPayArea.html',
        replace: "true",
        scope: {
            args :"=args",
            scope: "=scope"
        },
        controller: function ($timeout, $scope, $rootScope, $element) {

            console.log("pluginPayArea",$scope.args)

            //$scope.scope = $scope;

        }
    };
});