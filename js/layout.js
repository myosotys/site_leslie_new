var leslie = angular.module('leslie', ['ngRoute','ngAnimate','ngScrollTo']);

leslie.controller('carouselCtrl', function ($scope,$timeout,$location) {
    $scope.slides = [
        {name:"slide1.html",label:"pouet"},
        {name:"slide2.html",label:"pouet"},
        {name:"slide3.html",label:"pouet"}
    ];

    $scope.getPartial = function(slide){
        return "slides/"+slide;

    }
    $scope.goAbout = function(){
        showLoader();
        $timeout(function(){
            $location.path( "#" );
        }, 1000);

    }
});

leslie.controller('aboutCtrl', function ($scope,$timeout,$location) {

    $scope.goProjet = function(){
        showLoader();
        $timeout(function(){
            $location.path( "/projet" );
        }, 1000);

    }
});

leslie.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/projet', {
                templateUrl: 'pages/projet.html',
                controller: 'carouselCtrl'
            }).
            otherwise({
                templateUrl: 'pages/about.html',
                controller: 'aboutCtrl'
            });


    }]);


leslie.config(function(ngScrollToOptionsProvider) {

    ngScrollToOptionsProvider.extend({
        handler: function(el) {

            $(el).scrollintoview();
        }
    });
});

function showLoader(){

    loader = new SVGLoader( document.getElementById( 'loader' ), { speedIn : 400, easingIn : mina.easeinout } );
    loader.show();
    // after some time hide loader
    setTimeout( function() {
        loader.hide();


    }, 1000 );
}