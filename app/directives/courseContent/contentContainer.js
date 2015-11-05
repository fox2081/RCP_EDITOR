/**
 * Created by Fox2081 on 2015/10/30.
 */
module.directive('contentContainer', function () {
    return {
        restrict: 'E',
        templateUrl: './directives/courseContent/contentContainer.html',
        replace: "true",
        scope: {
            item :"=item"
        },
        controller: function ($timeout, $scope, $rootScope, $element) {

            //$scope.scope = $scope;

            $timeout(function(){
                //console.log('$element',$element[0].find('.container-hide'))
                //console.log('$element1',$element[0])
                //console.log('$element2',$('.class1')[0])

                lazy({
                    node:$element[0],
                    callback:function(data){
                        $scope.item.status = data;
                    }
                })
            });



            function lazy(args){
                var lock;
                function handler(){
                    var e = $(args.node);
                    $timeout.cancel(e.get(0).lazyTimer);
                    if(!e.length || lock){
                        return;
                    }
                    var win = $(window);
                    var wt = win.scrollTop();
                    var wb = wt + win.height() + 200;
                    var et = e.offset().top;
                    var eb = et + e.height();
                    var tf = et >= wt && et <= wb;
                    var bf = et <= wt && eb >= wt;
                    e.get(0).lazyTimer = $timeout(function (){
                        if(typeof args.callback === 'function'){
                            args.callback((tf || bf));
                        }
                    },200);
                }
                handler();
                $(window).bind('scroll',handler);
                $(window).bind('resize',handler);
            }

        }
    };
});