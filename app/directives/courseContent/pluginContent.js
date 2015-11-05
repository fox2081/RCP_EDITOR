/**
 * Created by Fox2081 on 2015/10/15.
 */
module.directive('pluginContent', function () {
    return {
        restrict: 'E',
        templateUrl: './directives/courseContent/pluginContent.html',
        replace: "true",
        scope: {
            args :"=args",
            scope: "=scope",
            getEditor:"=getEditor"
        },
        controller: function ($timeout, $scope, $rootScope, $sce) {

            //$scope.scope = $scope;

            if((''+$scope.args.id).length != 13){
                $scope.args.id = Date.parse(new Date());
            }

            $scope.disContent = false;

            $scope.activeEditor = function(){

                $scope.disContent = true;
                $timeout(function(){
                    $scope.scope.init();
                });
            };

            $scope.deliberatelyTrustDangerousSnippet = function(content) {
                return $sce.trustAsHtml(content);
            };


            console.log($scope.args);

            $scope.getData = function(){
                alert($scope.args.content)
            }

        }
    };
});