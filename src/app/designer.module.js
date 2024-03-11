(function () {


    'use strict';

    angular
        .module('KrakenDesigner', ['ngRoute'])
        .config(config);

    config.$inject = ['$routeProvider'];


    function config( $routeProvider ) {

        // Known Routes:
        $routeProvider
            .when('/', {
                templateUrl: '/src/app/forms/dashboard.html',
                controller: 'KrakenDesignerController'
            })
            .when('/service', {
                templateUrl: '/src/app/forms/service_configuration.html',
                controller: 'KrakenDesignerController'
            })
            .when('/endpoints', {
                templateUrl: '/src/app/forms/endpoints.html',
                controller: 'KrakenDesignerController'
            })
            .when('/security', {
                templateUrl: '/src/app/forms/security.html',
                controller: 'KrakenDesignerController'
            })
            .when('/logging', {
                templateUrl: '/src/app/forms/logging.html',
                controller: 'KrakenDesignerController'
            })
            .when('/openapi', {
                templateUrl: '/src/app/forms/openapi.html',
                controller: 'KrakenDesignerController'
            })
            .when('/api-keys', {
                templateUrl: '/src/app/forms/api-keys.html',
                controller: 'KrakenDesignerController'
            })
            .when('/monetization', {
                templateUrl: '/src/app/forms/monetization.html',
                controller: 'KrakenDesignerController'
            })
            .otherwise({
                redirectTo: '/'
            });

    }
})();