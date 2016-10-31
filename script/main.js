
var home = angular.module('DECE',['ngAnimate']);

home.controller('bodyctrl',function($scope){
        $scope.name="gokul";
        $scope.articleVisble=true;
        $scope.partial=0;
        $scope.showarticle=function(num)
        {
                $scope.partial=num;
                $scope.articleVisble=false;

        };

        $scope.getArticle=function(){
                return $scope.partial;
        };

        $scope.hidearticle=function(){
                $scope.articleVisble=true;
        };
});