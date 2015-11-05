/**
 * Created by Fox2081 on 2015/10/30.
 */
module.directive('pluginEmbed', function () {
    return {
        restrict: 'E',
        templateUrl: './directives/courseContent/pluginEmbed.html',
        replace: "true",
        scope: {
            args :"=args",
            scope: "=scope"
        },
        controller: function ($timeout, $scope, $rootScope, $sce) {

            //$scope.scope = $scope;

            console.log($scope.args);

            $scope.deliberatelyTrustDangerousSnippet = function(content) {
                return $sce.trustAsHtml(content);
            };
        }
    };
});